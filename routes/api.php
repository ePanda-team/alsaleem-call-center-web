<?php

use Illuminate\Support\Facades\Route;
use App\Models\Announcement;
use App\Models\TestResult;
use App\Models\Doctor;
use App\Models\Conversation;
use App\Models\Slider;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route as HttpRoute;

Route::post('doctor/login', function (Request $request) {
    $data = $request->validate([
        'username' => ['required', 'string'],
        'password' => ['required', 'string'],
    ]);
    $doctor = Doctor::where('username', $data['username'])->first();
    if (!$doctor || !\Illuminate\Support\Facades\Hash::check($data['password'], $doctor->password)) {
        return response()->json(['message' => 'Invalid credentials'], 422);
    }
    $doctor->api_token = Str::random(60);
    $doctor->save();
    return response()->json(['token' => $doctor->api_token]);
});

Route::middleware('doctor.token')->group(function () {
    Route::get('doctor/me', function (Request $request) {
        $doctor = $request->attributes->get('doctor');
        return response()->json($doctor);
    });

    Route::get('doctor/conversation', function (Request $request) {
        $doctor = $request->attributes->get('doctor');
        $conversation = Conversation::firstOrCreate(['doctor_id' => $doctor->id]);
        return response()->json(['conversation_id' => $conversation->id]);
    });

    Route::get('doctor/results', function (Request $request) {
        $doctor = $request->attributes->get('doctor');
        $results = TestResult::where('doctor_id', $doctor->id)->orderByDesc('id')->paginate(20);
        $results->getCollection()->transform(function ($result) {
            return [
                'id' => $result->id,
                'patient_name' => $result->patient_name,
                'lab_branch' => $result->lab_branch,
                'pdf_path' => asset('storage/'.$result->pdf_path),
            ];
        });
        $results->appends($request->query());
        return response()->json($results);
    });

    Route::get('doctor/announcements', function () {
        $items = Announcement::orderByDesc('id')->paginate(20);
        return response()->json($items);
    });

    Route::get('doctor/conversations/{conversation}/messages', function (Request $request, Conversation $conversation) {
        $doctor = $request->attributes->get('doctor');
        abort_unless($conversation->doctor_id === $doctor->id, 403);
        $limit = min((int) $request->query('limit', 50), 200);
        $messages = Message::where('conversation_id', $conversation->id)
            ->orderByDesc('id')
            ->limit($limit)
            ->get()
            ->reverse()
            ->values()
            ->map(function ($m) {
                return [
                    'id' => $m->id,
                    'sender_type' => $m->sender_type,
                    'body' => $m->body,
                    'attachment_url' => $m->attachment_path ? asset('storage/'.$m->attachment_path) : null,
                    'attachment_type' => $m->attachment_type,
                    'created_at' => $m->created_at?->toIso8601String(),
                    'read_at' => $m->read_at?->toIso8601String(),
                ];
            });
        return response()->json(['messages' => $messages]);
    });

    Route::post('doctor/conversations/{conversation}/messages', function (Request $request, Conversation $conversation) {
        $doctor = $request->attributes->get('doctor');
        abort_unless($conversation->doctor_id === $doctor->id, 403);
        $data = $request->validate([
            'body' => ['nullable', 'string'],
            'attachment_url' => ['nullable', 'url'],
            'attachment_type' => ['nullable', 'in:voice,document,image,video'],
        ]);
        $message = new Message();
        $message->conversation_id = $conversation->id;
        $message->sender_type = 'doctor';
        $message->sender_id = $doctor->id;
        $message->body = $data['body'] ?? null;
        // If mobile uploads elsewhere and passes a URL, we store it in attachment_path as-is
        if (!empty($data['attachment_url'])) {
            $message->attachment_path = $data['attachment_url'];
            $message->attachment_type = $data['attachment_type'] ?? null;
        }
        $message->save();

        $conversation->last_message_at = now();
        $conversation->last_message_preview = $message->body ? mb_substr($message->body, 0, 200) : 'Attachment';
        $conversation->unread_doctor_count = ($conversation->unread_doctor_count ?? 0) + 1;
        $conversation->save();

        return response()->json(['id' => $message->id], 201);
    });
    // Update conversation activity (called by web when agent sends a message)
});

// Staff-authenticated activity update
HttpRoute::middleware(['web', 'auth'])->post('/activity/conversation/{conversation}', function (\App\Models\Conversation $conversation, Request $request) {
    $data = $request->validate([
        'body' => ['nullable', 'string'],
        'sender_type' => ['required', 'in:agent,doctor'],
    ]);
    $conversation->last_message_at = now();
    $conversation->last_message_preview = $data['body'] ? mb_substr($data['body'], 0, 200) : ($data['sender_type'] === 'agent' ? 'Attachment' : 'Attachment');
    if ($data['sender_type'] === 'doctor') {
        $conversation->unread_doctor_count = $conversation->unread_doctor_count + 1;
    }
    $conversation->save();
    return response()->json(['ok' => true]);
});

// Public sliders endpoint for mobile app
Route::get('sliders', function () {
    $sliders = Slider::orderBy('position')->limit(3)->get()->map(function ($s) {
        return [
            'id' => $s->id,
            'title' => $s->title,
            'image_url' => asset('storage/'.$s->image_path),
            'position' => $s->position,
        ];
    });
    return response()->json($sliders);
});


