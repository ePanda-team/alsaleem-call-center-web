<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DoctorAuthController;
use App\Http\Controllers\Api\DoctorController;
use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\PublicController;
use App\Http\Controllers\FileUploadController;

Route::post('doctor/login', [DoctorAuthController::class, 'login']);

Route::middleware('doctor.token')->group(function () {
    Route::get('doctor/me', [DoctorController::class, 'me']);
    Route::post('doctor/fcm-token', [DoctorController::class, 'updateFcmToken']);
    Route::get('doctor/conversation', [DoctorController::class, 'conversation']);
    Route::get('doctor/results', [DoctorController::class, 'results']);
    Route::get('doctor/announcements', [DoctorController::class, 'announcements']);
    Route::put('doctor/me', [DoctorController::class, 'updateProfile']);
    Route::delete('doctor/results/{result}', [DoctorController::class, 'deleteResult']);
    Route::post('doctor/results/{result}/comment', [DoctorController::class, 'commentResult']);
    Route::get('doctor/conversations/{conversation}/messages', [DoctorController::class, 'messages']);
    Route::post('doctor/conversations/{conversation}/messages', [DoctorController::class, 'sendMessage']);
    Route::post('doctor/conversations/{conversation}/messages/read', [DoctorController::class, 'markMessagesRead']);
});

// Staff-authenticated activity update
Route::middleware(['web', 'auth'])->post('/activity/conversation/{conversation}', [ActivityController::class, 'updateConversation']);
Route::middleware(['web', 'auth'])->post('/activity/conversation/{conversation}/messages', [ActivityController::class, 'storeMessage']);
Route::middleware(['web', 'auth'])->get('/activity/conversation/{conversation}/messages', [ActivityController::class, 'messages']);
Route::middleware(['web', 'auth'])->put('/activity/conversation/{conversation}/messages/{message}', [ActivityController::class, 'updateMessage']);
Route::middleware(['web', 'auth'])->delete('/activity/conversation/{conversation}/messages/{message}', [ActivityController::class, 'deleteMessage']);

// Public sliders endpoint for mobile app
Route::get('sliders', [PublicController::class, 'sliders']);

// Public lab tests endpoint for mobile app
Route::get('lab-tests', [PublicController::class, 'labTests']);

// File upload endpoint
Route::post('upload', [FileUploadController::class, 'upload'])->middleware('upload.limits');


