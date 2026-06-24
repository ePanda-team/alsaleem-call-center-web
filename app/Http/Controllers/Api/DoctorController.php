<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Conversation;
use App\Models\Doctor;
use App\Models\DoctorLabCatalogSeen;
use App\Models\LabTest;
use App\Models\LabTestRequest;
use App\Models\Message;
use App\Models\Patient;
use App\Models\TestResult;
use App\Models\TestResultComment;
use App\Models\TestResultDoctorView;
use App\Services\StaffNotificationService;
use App\Services\TestResultPdfStorage;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class DoctorController extends Controller
{
    public function __construct(
        private TestResultPdfStorage $pdfStorage
    ) {}

    public function me(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        return response()->json($doctor);
    }

    public function updateFcmToken(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $validator = Validator::make($request->all(), [
            'fcm_token' => ['required', 'string', 'max:1000'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $doctor->fcm_token = $data['fcm_token'];
        $doctor->save();

        return response()->json([
            'success' => true,
            'message' => 'FCM token updated successfully',
        ]);
    }

    public function conversation(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $conversation = Conversation::firstOrCreate(['doctor_id' => $doctor->id]);

        return response()->json(['conversation_id' => $conversation->id]);
    }

    public function unseenSummary(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $conversation = Conversation::where('doctor_id', $doctor->id)->first();
        $messagesCount = 0;
        if ($conversation) {
            $messagesCount = Message::query()
                ->where('conversation_id', $conversation->id)
                ->where('sender_type', 'user')
                ->whereNull('read_at')
                ->count();
        }

        $announcementsCount = Announcement::query()
            ->visibleToDoctor($doctor)
            ->whereDoesntHave('views', function ($q) use ($doctor) {
                $q->where('doctor_id', $doctor->id);
            })
            ->count();

        $resultsCount = TestResult::query()
            ->unseenForDoctor($doctor->id)
            ->count();

        $labSeen = DoctorLabCatalogSeen::query()->firstOrCreate(
            ['doctor_id' => $doctor->id],
            ['seen_at' => now()]
        );
        $testsCount = LabTest::query()->where('updated_at', '>', $labSeen->seen_at)->count();

        $hasUnseen = $messagesCount > 0 || $announcementsCount > 0 || $resultsCount > 0 || $testsCount > 0;

        return response()->json([
            'has_unseen' => $hasUnseen,
            'messages' => [
                'unseen' => $messagesCount > 0,
                'count' => $messagesCount,
            ],
            'announcements' => [
                'unseen' => $announcementsCount > 0,
                'count' => $announcementsCount,
            ],
            'results' => [
                'unseen' => $resultsCount > 0,
                'count' => $resultsCount,
            ],
            'tests' => [
                'unseen' => $testsCount > 0,
                'count' => $testsCount,
            ],
        ]);
    }

    public function results(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $validator = Validator::make($request->all(), [
            'id' => ['nullable', 'integer', 'min:1'],
            'patient_name' => ['nullable', 'string', 'max:255'],
            'patient_age' => ['nullable', 'integer', 'min:0', 'max:150'],
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['nullable', 'string', 'max:255'],
            'has_comments' => ['nullable', 'boolean'],
            'created_from' => ['nullable', 'date'],
            'created_to' => ['nullable', 'date'],
            'updated_from' => ['nullable', 'date'],
            'updated_to' => ['nullable', 'date'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $filters = $validator->validated();

        $baseQuery = $this->doctorResultsBaseQuery($doctor->id)
            ->when(isset($filters['id']), function ($query) use ($filters) {
                $query->where('id', $filters['id']);
            })
            ->when(! empty($filters['patient_name']), function ($query) use ($filters) {
                $query->whereHas('patient', function ($patientQuery) use ($filters) {
                    $patientQuery->where('name', 'like', '%'.$filters['patient_name'].'%');
                });
            })
            ->when(isset($filters['patient_age']), function ($query) use ($filters) {
                $birthYear = Patient::birthYearFromAge((int) $filters['patient_age']);
                $query->whereHas('patient', function ($patientQuery) use ($birthYear) {
                    $patientQuery->where('birth_year', $birthYear);
                });
            })
            ->when(! empty($filters['hospital']), function ($query) use ($filters) {
                $query->where('hospital', 'like', '%'.$filters['hospital'].'%');
            })
            ->when(! empty($filters['lab_branch']), function ($query) use ($filters) {
                $query->where('lab_branch', 'like', '%'.$filters['lab_branch'].'%');
            })
            ->when(! empty($filters['has_comments']), function ($query) use ($doctor) {
                $query->whereHasUnseenStaffCommentsForDoctor($doctor->id);
            })
            ->when(! empty($filters['created_from']), function ($query) use ($filters) {
                $query->whereDate('created_at', '>=', $filters['created_from']);
            })
            ->when(! empty($filters['created_to']), function ($query) use ($filters) {
                $query->whereDate('created_at', '<=', $filters['created_to']);
            })
            ->when(! empty($filters['updated_from']), function ($query) use ($filters) {
                $query->whereDate('updated_at', '>=', $filters['updated_from']);
            })
            ->when(! empty($filters['updated_to']), function ($query) use ($filters) {
                $query->whereDate('updated_at', '<=', $filters['updated_to']);
            });

        $this->markTestResultViewsForDoctor($doctor->id, (clone $baseQuery)->pluck('id'));

        $results = (clone $baseQuery)
            ->orderByDesc('id')
            ->paginate(50);

        $this->attachLatestUnseenStaffComments($results->getCollection());

        $results->getCollection()->transform(function ($result) {
            return $this->formatDoctorResultItem($result);
        });

        $results->appends($request->query());

        return response()->json($results);
    }

    public function patients(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $validator = Validator::make($request->all(), Patient::listFilterValidationRules());

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $filters = $validator->validated();

        $query = Patient::query()
            ->whereHas('testResults', function ($resultQuery) use ($doctor, $filters) {
                Patient::applyTestResultFiltersForPatientList($resultQuery, $filters, $doctor->id);
            })
            ->applyListAttributeFilters($filters)
            ->withUnseenResultsCountForDoctor($doctor->id);

        $patients = $query->orderByDesc('id')->paginate(20)->appends($request->query());

        $patients->getCollection()->transform(function ($patient) {
            return $this->formatDoctorPatientItem($patient);
        });

        return response()->json($patients);
    }

    public function showPatient(Request $request, Patient $patient)
    {
        $doctor = $request->attributes->get('doctor');

        $hasResults = TestResult::query()
            ->where('doctor_id', $doctor->id)
            ->where('patient_id', $patient->id)
            ->exists();

        abort_unless($hasResults, 404);

        $patient->loadCount([
            'testResults as unseen_results_count' => function ($resultQuery) use ($doctor) {
                $resultQuery->unseenForDoctor($doctor->id);
            },
        ]);

        return response()->json($this->formatDoctorPatientItem($patient));
    }

    public function patientResults(Request $request, Patient $patient)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless(
            TestResult::query()->where('doctor_id', $doctor->id)->where('patient_id', $patient->id)->exists(),
            404
        );

        $baseQuery = $this->doctorResultsBaseQuery($doctor->id)
            ->where('patient_id', $patient->id);

        $this->markTestResultViewsForDoctor($doctor->id, (clone $baseQuery)->pluck('id'));

        $results = (clone $baseQuery)->orderByDesc('id')->paginate(50)->appends($request->query());

        $this->attachLatestUnseenStaffComments($results->getCollection());

        $results->getCollection()->transform(function ($result) {
            return $this->formatDoctorResultItem($result);
        });

        return response()->json($results);
    }

    public function resultComments(Request $request, TestResult $result)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($result->doctor_id === $doctor->id, 403);

        $this->markCommentsSeenForDoctor($doctor->id, $result->id);

        $comments = TestResultComment::query()
            ->where('test_result_id', $result->id)
            ->orderBy('created_at')
            ->paginate(50)
            ->appends($request->query());

        $comments->setCollection(
            $comments->getCollection()->tap(fn ($items) => TestResultComment::hydrateAuthorNames($items))
        );

        $comments->getCollection()->transform(
            fn (TestResultComment $comment) => $comment->toApiArray()
        );

        return response()->json($comments);
    }

    public function storeResultComment(Request $request, TestResult $result)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($result->doctor_id === $doctor->id, 403);

        $validator = Validator::make($request->all(), [
            'body' => ['required', 'string', 'min:1', 'max:20000'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $comment = TestResultComment::query()->create([
            'test_result_id' => $result->id,
            'author_type' => TestResultComment::AUTHOR_DOCTOR,
            'author_id' => $doctor->id,
            'body' => $validator->validated()['body'],
        ]);

        $comment->setAttribute('author_name', $doctor->name);
        $result->loadMissing('patient');

        $this->staffNotifications()->notifyDoctorAction(
            'doctor_result_comment',
            $doctor,
            [
                'route' => 'result',
                'result_id' => $result->id,
                'entity_id' => $result->id,
                'comment_id' => $comment->id,
                'patient_id' => $result->patient_id,
                'patient_name' => $result->patient?->name,
            ]
        );

        return response()->json($comment->toApiArray(), 201);
    }

    public function announcements(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $this->markVisibleAnnouncementsViewedForDoctor($doctor);

        $items = Announcement::query()
            ->visibleToDoctor($doctor)
            ->orderByDesc('id')
            ->paginate(20)
            ->appends($request->query());

        foreach ($items->items() as $announcement) {
            $announcement->title = str_replace('[dr]', $doctor->name, $announcement->title);
            $announcement->body = str_replace('[dr]', $doctor->name, $announcement->body);
        }

        return response()->json($items);
    }

    public function labTests(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $page = max(1, (int) $request->query('page', 1));
        if ($page <= 1) {
            $seen = DoctorLabCatalogSeen::query()->firstOrCreate(
                ['doctor_id' => $doctor->id],
                ['seen_at' => now()]
            );
            $seen->seen_at = now();
            $seen->save();
        }

        $tests = LabTest::query()
            ->orderBy('name')
            ->paginate(50, ['id', 'name', 'description'])
            ->appends($request->query());

        return response()->json($tests);
    }

    public function labTestRequests(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $validator = Validator::make($request->all(), [
            'status' => ['nullable', 'string', Rule::in(LabTestRequest::STATUSES)],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $filters = $validator->validated();

        $query = LabTestRequest::query()
            ->with('items')
            ->where('doctor_id', $doctor->id)
            ->when(! empty($filters['status']), function ($q) use ($filters) {
                $q->where('status', $filters['status']);
            })
            ->orderByDesc('id');

        $requests = $query->paginate(20)->appends($request->query());

        $requests->getCollection()->transform(function ($labTestRequest) {
            return $this->formatDoctorLabTestRequestItem($labTestRequest);
        });

        return response()->json($requests);
    }

    public function showLabTestRequest(Request $request, LabTestRequest $labTestRequest)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($labTestRequest->doctor_id === $doctor->id, 404);

        $labTestRequest->load('items');

        return response()->json($this->formatDoctorLabTestRequestItem($labTestRequest));
    }

    public function storeLabTestRequest(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $validator = Validator::make($request->all(), [
            'notes' => ['nullable', 'string', 'max:5000'],
            'tests' => ['required', 'array', 'min:1'],
            'tests.*.name' => ['required', 'string', 'max:255'],
            'tests.*.description' => ['nullable', 'string', 'max:5000'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        $labTestRequest = LabTestRequest::query()->create([
            'doctor_id' => $doctor->id,
            'status' => 'pending',
            'notes' => $data['notes'] ?? null,
        ]);

        foreach ($data['tests'] as $test) {
            $labTestRequest->items()->create([
                'test_name' => $test['name'],
                'description' => $test['description'] ?? null,
            ]);
        }

        $labTestRequest->load(['doctor', 'items']);

        $this->staffNotifications()->notifyDoctorAction(
            'doctor_lab_test_request',
            $doctor,
            [
                'route' => 'lab_test_request',
                'lab_test_request_id' => $labTestRequest->id,
                'entity_id' => $labTestRequest->id,
            ]
        );

        return response()->json($labTestRequest, 201);
    }

    public function messages(Request $request, Conversation $conversation)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($conversation->doctor_id === $doctor->id, 403);

        $conversation->loadMissing(['doctor', 'user']);

        $sinceId = $request->query('since_id');

        if ($sinceId !== null && is_numeric($sinceId)) {
            $limit = min((int) $request->query('limit', 50), 200);

            $messages = Message::query()
                ->where('conversation_id', $conversation->id)
                ->where('id', '>', (int) $sinceId)
                ->orderBy('id')
                ->limit($limit)
                ->get();

            return response()->json([
                'messages' => $this->formatConversationMessages($messages, $conversation)->values(),
            ]);
        }

        $validator = Validator::make($request->all(), [
            'per_page' => ['nullable', 'integer', 'min:1', 'max:200'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $perPage = (int) ($validator->validated()['per_page'] ?? 50);

        $messages = Message::query()
            ->where('conversation_id', $conversation->id)
            ->orderBy('created_at')
            ->paginate($perPage)
            ->appends($request->query());

        $messages->setCollection(
            $this->formatConversationMessages($messages->getCollection(), $conversation)
        );

        return response()->json($messages);
    }

    public function sendMessage(Request $request, Conversation $conversation)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($conversation->doctor_id === $doctor->id, 403);

        $validator = Validator::make($request->all(), [
            'body' => ['nullable', 'string'],
            'attachment_url' => ['nullable'],
            'attachment_type' => ['nullable', 'in:voice,document,image,video'],
            'reply_to_id' => ['nullable', 'integer', 'min:1'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        if (! empty($data['reply_to_id'])) {
            $replyMessage = Message::where('id', $data['reply_to_id'])
                ->where('conversation_id', $conversation->id)
                ->first();
            if (! $replyMessage) {
                return response()->json(['message' => 'Invalid reply_to_id'], 422);
            }
        }

        $message = new Message;
        $message->conversation_id = $conversation->id;
        $message->sender_type = 'doctor';
        $message->sender_id = $doctor->id;
        $message->body = $data['body'] ?? null;
        $message->reply_to_id = $data['reply_to_id'] ?? null;

        // If mobile uploads elsewhere and passes a URL, we store it in attachment_path as-is
        if (! empty($data['attachment_url'])) {
            $message->attachment_path = $data['attachment_url'];
            $message->attachment_type = $data['attachment_type'] ?? null;
        }

        $message->save();

        $conversation->last_message_at = now();
        $conversation->last_message_preview = $message->body ? mb_substr($message->body, 0, 200) : 'Attachment';
        $conversation->unread_doctor_count = ($conversation->unread_doctor_count ?? 0) + 1;
        $conversation->save();

        $this->staffNotifications()->notifyDoctorAction(
            'doctor_message',
            $doctor,
            [
                'route' => 'conversation',
                'conversation_id' => $conversation->id,
                'entity_id' => $conversation->id,
                'message_id' => $message->id,
            ]
        );

        return response()->json(['id' => $message->id], 201);
    }

    public function markMessagesRead(Request $request, Conversation $conversation)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($conversation->doctor_id === $doctor->id, 403);

        $updated = Message::where('conversation_id', $conversation->id)
            ->where('sender_type', 'user')
            ->whereNull('read_at')
            ->update(['read_at' => now()]);

        return response()->json(['ok' => true, 'updated' => $updated]);
    }

    public function deleteMessage(Request $request, Conversation $conversation, Message $message)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($conversation->doctor_id === $doctor->id, 403);

        if ($message->conversation_id !== $conversation->id) {
            return response()->json(['message' => 'Not found'], 404);
        }

        if ($message->sender_type !== 'doctor' || (int) $message->sender_id !== (int) $doctor->id) {
            return response()->json(['message' => 'Not allowed'], 403);
        }

        $messageId = $message->id;
        $message->delete();

        $lastMessage = Message::where('conversation_id', $conversation->id)->orderByDesc('id')->first();
        if ($lastMessage) {
            $conversation->last_message_at = $lastMessage->created_at;
            $conversation->last_message_preview = $lastMessage->body ? mb_substr($lastMessage->body, 0, 200) : 'Attachment';
        } else {
            $conversation->last_message_at = null;
            $conversation->last_message_preview = null;
        }
        $conversation->save();

        $this->staffNotifications()->notifyDoctorAction(
            'doctor_message_deleted',
            $doctor,
            [
                'route' => 'conversation',
                'conversation_id' => $conversation->id,
                'entity_id' => $conversation->id,
                'message_id' => $messageId,
            ]
        );

        return response()->json(['ok' => true]);
    }

    public function deleteResult(Request $request, TestResult $result)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($result->doctor_id === $doctor->id, 403);

        $result->loadMissing('patient');
        $resultId = $result->id;
        $patientId = $result->patient_id;
        $patientName = $result->patient?->name;

        $result->delete();

        $this->staffNotifications()->notifyDoctorAction(
            'doctor_result_deleted',
            $doctor,
            [
                'route' => 'results',
                'result_id' => $resultId,
                'entity_id' => $resultId,
                'patient_id' => $patientId,
                'patient_name' => $patientName,
            ]
        );

        return response()->json(['ok' => true]);
    }

    public function updateProfile(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $validator = Validator::make($request->all(), [
            'name' => ['nullable', 'string', 'max:255'],
            'username' => ['nullable', 'string', 'max:255'],
            'speciality' => ['nullable', 'string', 'max:255'],
            'experience_level' => ['nullable', 'string', 'max:255'],
            'password' => ['nullable', 'string', 'min:6', 'max:255'],
            'bio' => ['nullable', 'string', 'max:20000'],
            'profile_picture' => ['nullable', 'image', 'mimes:jpeg,jpg,png,gif,webp', 'max:5120'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        if (array_key_exists('name', $data)) {
            $doctor->name = $data['name'];
        }
        if (array_key_exists('username', $data)) {
            $doctor->username = $data['username'];
        }
        if (array_key_exists('speciality', $data)) {
            $doctor->speciality = $data['speciality'];
        }
        if (array_key_exists('experience_level', $data)) {
            $doctor->experience_level = $data['experience_level'];
        }
        if (array_key_exists('bio', $data)) {
            $doctor->bio = $data['bio'];
        }
        if (! empty($data['password'])) {
            $doctor->password = Hash::make($data['password']);
        }

        if ($request->hasFile('profile_picture')) {
            $uploadDir = public_path('storage/doctors');
            if (! file_exists($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }
            if ($doctor->profile_picture_path) {
                $old = public_path('storage/'.$doctor->profile_picture_path);
                if (file_exists($old)) {
                    unlink($old);
                }
            }
            $file = $request->file('profile_picture');
            $ext = $file->getClientOriginalExtension() ?: 'jpg';
            $filename = 'profile_'.$doctor->id.'_'.time().'_'.Str::random(8).'.'.$ext;
            $file->move($uploadDir, $filename);
            $doctor->profile_picture_path = 'doctors/'.$filename;
        }

        $doctor->save();

        $this->staffNotifications()->notifyDoctorAction(
            'doctor_profile_updated',
            $doctor,
            [
                'route' => 'doctor',
                'entity_id' => $doctor->id,
            ]
        );

        return response()->json($doctor->fresh());
    }

    private function staffNotifications(): StaffNotificationService
    {
        return app(StaffNotificationService::class);
    }

    private function doctorResultsBaseQuery(int $doctorId)
    {
        return TestResult::query()
            ->withUnseenStaffCommentsForDoctor($doctorId)
            ->where('doctor_id', $doctorId);
    }

    private function markCommentsSeenForDoctor(int $doctorId, int $testResultId): void
    {
        $now = now();
        $view = TestResultDoctorView::query()->firstOrNew([
            'doctor_id' => $doctorId,
            'test_result_id' => $testResultId,
        ]);

        $view->comments_seen_at = $now;
        if (! $view->exists || $view->viewed_at === null) {
            $view->viewed_at = $now;
        }
        $view->save();
    }

    /**
     * @param  \Illuminate\Support\Collection<int, TestResult>  $results
     */
    private function attachLatestUnseenStaffComments($results): void
    {
        $commentIds = $results->pluck('latest_unseen_staff_comment_id')->filter()->unique()->values();
        if ($commentIds->isEmpty()) {
            return;
        }

        $comments = TestResultComment::query()->whereIn('id', $commentIds)->get()->keyBy('id');
        TestResultComment::hydrateAuthorNames($comments);

        foreach ($results as $result) {
            $commentId = $result->latest_unseen_staff_comment_id;
            if ($commentId && $comments->has($commentId)) {
                $result->setRelation('latestUnseenStaffComment', $comments->get($commentId));
            }
        }
    }

    private function formatDoctorResultItem(TestResult $result): array
    {
        $latestComment = $result->relationLoaded('latestUnseenStaffComment')
            ? $result->getRelation('latestUnseenStaffComment')
            : null;

        if ($latestComment) {
            TestResultComment::hydrateAuthorNames(collect([$latestComment]));
        }

        $latestCommentPayload = null;
        if ($latestComment) {
            $latestCommentPayload = [
                'id' => $latestComment->id,
                'body' => $latestComment->body,
                'author_type' => $latestComment->author_type,
                'author_name' => $latestComment->getAttribute('author_name'),
                'created_at' => $latestComment->created_at?->toIso8601String(),
            ];
        }

        return [
            'id' => $result->id,
            'patient' => $this->formatPatient($result->patient),
            'lab_branch' => $result->lab_branch,
            'hospital' => $result->hospital,
            'pdf_path' => $this->pdfStorage->doctorPdfUrl($result),
            'comments_count' => (int) ($result->comments_count ?? 0),
            'latest_comment' => $latestCommentPayload,
            'created_at' => $result->created_at?->toIso8601String(),
        ];
    }

    /**
     * @param  Collection<int, Message>  $messages
     * @return Collection<int, array<string, mixed>>
     */
    private function formatConversationMessages(Collection $messages, Conversation $conversation): Collection
    {
        $replyIds = $messages->pluck('reply_to_id')->filter()->unique()->values();
        $replyMessages = $replyIds->isEmpty()
            ? collect()
            : Message::whereIn('id', $replyIds)->get()->keyBy('id');

        return $messages->map(function ($m) use ($conversation, $replyMessages) {
            $senderName = null;
            if ($m->sender_type === 'doctor') {
                $senderName = $conversation->doctor?->name;
            } elseif ($m->sender_type === 'user') {
                $senderName = $conversation->user?->name;
            }

            $reply = null;
            if ($m->reply_to_id) {
                $replyMessage = $replyMessages->get($m->reply_to_id);
                if ($replyMessage && $replyMessage->conversation_id === $conversation->id) {
                    $replySenderName = $replyMessage->sender_type === 'doctor'
                        ? $conversation->doctor?->name
                        : $conversation->user?->name;

                    $reply = [
                        'id' => $replyMessage->id,
                        'sender_type' => $replyMessage->sender_type,
                        'sender_name' => $replySenderName,
                        'body' => $replyMessage->body,
                        'attachment_url' => $replyMessage->attachment_path
                            ? (str_starts_with($replyMessage->attachment_path, 'http')
                                ? $replyMessage->attachment_path
                                : asset('storage/'.$replyMessage->attachment_path))
                            : null,
                        'attachment_type' => $replyMessage->attachment_type,
                        'created_at' => $replyMessage->created_at?->toIso8601String(),
                        'read_at' => $replyMessage->read_at?->toIso8601String(),
                    ];
                }
            }

            return [
                'id' => $m->id,
                'sender_type' => $m->sender_type,
                'sender_name' => $senderName,
                'body' => $m->body,
                'attachment_url' => $m->attachment_path
                    ? (str_starts_with($m->attachment_path, 'http')
                        ? $m->attachment_path
                        : asset('storage/'.$m->attachment_path))
                    : null,
                'attachment_type' => $m->attachment_type,
                'reply_to_id' => $m->reply_to_id,
                'reply_to' => $reply,
                'created_at' => $m->created_at?->toIso8601String(),
                'read_at' => $m->read_at?->toIso8601String(),
            ];
        });
    }

    private function formatDoctorLabTestRequestItem(LabTestRequest $labTestRequest): array
    {
        $items = $labTestRequest->relationLoaded('items')
            ? $labTestRequest->items
            : collect();

        return [
            'id' => $labTestRequest->id,
            'status' => $labTestRequest->status,
            'notes' => $labTestRequest->notes,
            'items' => $items->map(fn ($item) => [
                'id' => $item->id,
                'test_name' => $item->test_name,
                'description' => $item->description,
            ])->values()->all(),
            'created_at' => $labTestRequest->created_at?->toIso8601String(),
            'updated_at' => $labTestRequest->updated_at?->toIso8601String(),
        ];
    }

    private function formatDoctorPatientItem(Patient $patient): array
    {
        $unseenResultsCount = (int) ($patient->unseen_results_count ?? 0);

        return [
            'id' => $patient->id,
            'name' => $patient->name,
            'birth_year' => $patient->birth_year,
            'age' => $patient->age,
            'gender' => $patient->gender,
            'unseen_results_count' => $unseenResultsCount,
            'has_unseen_results' => $unseenResultsCount > 0,
        ];
    }

    private function formatPatient(?Patient $patient): ?array
    {
        if (! $patient) {
            return null;
        }

        return [
            'id' => $patient->id,
            'name' => $patient->name,
            'birth_year' => $patient->birth_year,
            'age' => $patient->age,
            'gender' => $patient->gender,
        ];
    }

    private function markVisibleAnnouncementsViewedForDoctor(Doctor $doctor): void
    {
        $ids = Announcement::query()->visibleToDoctor($doctor)->pluck('id');
        if ($ids->isEmpty()) {
            return;
        }

        $now = now();
        $rows = $ids->map(fn ($id) => [
            'announcement_id' => $id,
            'doctor_id' => $doctor->id,
            'viewed_at' => $now,
            'created_at' => $now,
            'updated_at' => $now,
        ])->all();

        foreach (array_chunk($rows, 500) as $chunk) {
            DB::table('announcement_views')->upsert(
                $chunk,
                ['announcement_id', 'doctor_id'],
                ['viewed_at', 'updated_at']
            );
        }
    }

    private function markTestResultViewsForDoctor(int $doctorId, $testResultIds): void
    {
        $ids = collect($testResultIds)->filter()->unique()->values();
        if ($ids->isEmpty()) {
            return;
        }

        $now = now();
        $rows = $ids->map(fn ($id) => [
            'doctor_id' => $doctorId,
            'test_result_id' => $id,
            'viewed_at' => $now,
            'created_at' => $now,
            'updated_at' => $now,
        ])->all();

        foreach (array_chunk($rows, 500) as $chunk) {
            DB::table('test_result_doctor_views')->upsert(
                $chunk,
                ['doctor_id', 'test_result_id'],
                ['viewed_at', 'updated_at']
            );
        }
    }
}
