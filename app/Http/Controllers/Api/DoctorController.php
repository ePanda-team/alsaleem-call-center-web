<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\AnnouncementView;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\TestResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class DoctorController extends Controller
{
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

    public function results(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        $validator = Validator::make($request->all(), [
            'id' => ['nullable', 'integer', 'min:1'],
            'patient_name' => ['nullable', 'string', 'max:255'],
            'patient_age' => ['nullable', 'integer', 'min:0', 'max:150'],
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['nullable', 'string', 'max:255'],
            'doctor_comment' => ['nullable', 'string'],
            'created_from' => ['nullable', 'date'],
            'created_to' => ['nullable', 'date'],
            'updated_from' => ['nullable', 'date'],
            'updated_to' => ['nullable', 'date'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $filters = $validator->validated();

        $results = TestResult::query()
            ->where('doctor_id', $doctor->id)
            ->when(isset($filters['id']), function ($query) use ($filters) {
                $query->where('id', $filters['id']);
            })
            ->when(! empty($filters['patient_name']), function ($query) use ($filters) {
                $query->where('patient_name', 'like', '%'.$filters['patient_name'].'%');
            })
            ->when(isset($filters['patient_age']), function ($query) use ($filters) {
                $query->where('patient_age', $filters['patient_age']);
            })
            ->when(! empty($filters['hospital']), function ($query) use ($filters) {
                $query->where('hospital', 'like', '%'.$filters['hospital'].'%');
            })
            ->when(! empty($filters['lab_branch']), function ($query) use ($filters) {
                $query->where('lab_branch', 'like', '%'.$filters['lab_branch'].'%');
            })
            ->when(! empty($filters['doctor_comment']), function ($query) use ($filters) {
                $query->where('doctor_comment', 'like', '%'.$filters['doctor_comment'].'%');
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
            })
            ->orderByDesc('id')
            ->paginate(50);

        $results->getCollection()->transform(function ($result) {
            return [
                'id' => $result->id,
                'patient_name' => $result->patient_name,
                'patient_age' => $result->patient_age,
                'lab_branch' => $result->lab_branch,
                'pdf_path' => asset('storage/'.$result->pdf_path),
                'doctor_comment' => $result->doctor_comment,
                'created_at' => $result->created_at?->toIso8601String(),
            ];
        });

        $results->appends($request->query());

        return response()->json($results);
    }

    public function announcements(Request $request)
    {
        $doctor = $request->attributes->get('doctor');

        // Filter announcements based on targeting
        $query = Announcement::query();

        // Apply specialty targeting
        $query->where(function ($q) use ($doctor) {
            $q->whereNull('target_specialties')
                ->orWhereJsonContains('target_specialties', $doctor->speciality);
        });

        // Apply experience level targeting
        $query->where(function ($q) use ($doctor) {
            $q->whereNull('target_experience_levels')
                ->orWhereJsonContains('target_experience_levels', $doctor->experience_level);
        });

        $items = $query->orderByDesc('id')->paginate(20);

        // Track views for all announcements in this request and replace [dr] placeholder
        foreach ($items->items() as $announcement) {
            AnnouncementView::updateOrCreate(
                [
                    'announcement_id' => $announcement->id,
                    'doctor_id' => $doctor->id,
                ],
                [
                    'viewed_at' => now(),
                ]
            );

            // Replace [dr] placeholder with doctor's name
            $announcement->title = str_replace('[dr]', $doctor->name, $announcement->title);
            $announcement->body = str_replace('[dr]', $doctor->name, $announcement->body);
        }

        return response()->json($items);
    }

    public function commentResult(Request $request, TestResult $result)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($result->doctor_id === $doctor->id, 403);

        $validator = Validator::make($request->all(), [
            'doctor_comment' => ['nullable', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $result->doctor_comment = $data['doctor_comment'] ?? null;
        $result->save();

        return response()->json(['ok' => true]);
    }

    public function messages(Request $request, Conversation $conversation)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($conversation->doctor_id === $doctor->id, 403);

        $conversation->loadMissing(['doctor', 'user']);

        $limit = min((int) $request->query('limit', 50), 200);
        $sinceId = $request->query('since_id');

        $messagesQuery = Message::where('conversation_id', $conversation->id);
        if ($sinceId !== null && is_numeric($sinceId)) {
            $messagesQuery->where('id', '>', (int) $sinceId);
        }

        $messages = $messagesQuery
            ->orderByDesc('id')
            ->limit($limit)
            ->get()
            ->reverse()
            ->values();

        $replyIds = $messages->pluck('reply_to_id')->filter()->unique()->values();
        $replyMessages = $replyIds->isEmpty()
            ? collect()
            : Message::whereIn('id', $replyIds)->get()->keyBy('id');

        $messages = $messages->map(function ($m) use ($conversation, $replyMessages) {
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
                'attachment_url' => $m->attachment_path ? asset('storage/'.$m->attachment_path) : null,
                'attachment_type' => $m->attachment_type,
                'reply_to_id' => $m->reply_to_id,
                'reply_to' => $reply,
                'created_at' => $m->created_at?->toIso8601String(),
                'read_at' => $m->read_at?->toIso8601String(),
            ];
        });

        return response()->json(['messages' => $messages]);
    }

    public function sendMessage(Request $request, Conversation $conversation)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($conversation->doctor_id === $doctor->id, 403);

        $validator = Validator::make($request->all(), [
            'body' => ['nullable', 'string'],
            'attachment_url' => ['nullable', 'url'],
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

        return response()->json(['ok' => true]);
    }

    public function deleteResult(Request $request, TestResult $result)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($result->doctor_id === $doctor->id, 403);

        $result->delete();

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

        return response()->json($doctor->fresh());
    }
}
