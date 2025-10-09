<?php

use Illuminate\Support\Facades\Route;
use App\Models\Announcement;
use App\Models\TestResult;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

    Route::get('doctor/results', function (Request $request) {
        $doctor = $request->attributes->get('doctor');
        $results = TestResult::where('doctor_id', $doctor->id)->orderByDesc('id')->paginate(20);
        return response()->json($results);
    });

    Route::get('doctor/announcements', function () {
        $items = Announcement::orderByDesc('id')->paginate(20);
        return response()->json($items);
    });
});


