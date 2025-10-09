<?php

use Illuminate\Support\Facades\Route;
use App\Models\Announcement;
use App\Models\TestResult;
use App\Models\Doctor;
use App\Models\Conversation;
use App\Models\Slider;
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
        return response()->json($results);
    });

    Route::get('doctor/announcements', function () {
        $items = Announcement::orderByDesc('id')->paginate(20);
        return response()->json($items);
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


