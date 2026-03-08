<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\StaffAuthController;
use App\Http\Controllers\Api\DoctorAuthController;
use App\Http\Controllers\Api\DoctorController;
use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\PublicController;
use App\Http\Controllers\Api\Admin\UserController as AdminUserController;
use App\Http\Controllers\Api\Admin\DoctorController as AdminDoctorController;
use App\Http\Controllers\Api\Admin\SliderController as AdminSliderController;
use App\Http\Controllers\Api\Admin\AnnouncementController as AdminAnnouncementController;
use App\Http\Controllers\Api\Admin\LabTestController as AdminLabTestController;
use App\Http\Controllers\Api\Admin\LabBranchController as AdminLabBranchController;
use App\Http\Controllers\Api\Admin\ResultController as AdminResultController;
use App\Http\Controllers\Api\Admin\SpecialtyController as AdminSpecialtyController;
use App\Http\Controllers\FileUploadController;

Route::post('doctor/login', [DoctorAuthController::class, 'login']);

// Staff API auth
Route::post('staff/login', [StaffAuthController::class, 'login']);
Route::middleware('staff.token')->post('staff/logout', [StaffAuthController::class, 'logout']);

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

// Admin API (token-based)
Route::middleware(['staff.token', 'role:admin,supervisor'])->prefix('admin')->group(function () {
    Route::apiResource('users', AdminUserController::class);
    Route::apiResource('doctors', AdminDoctorController::class);
    Route::apiResource('sliders', AdminSliderController::class);
    Route::apiResource('announcements', AdminAnnouncementController::class);
    Route::get('announcements/{announcement}/viewers', [AdminAnnouncementController::class, 'viewers']);
    Route::apiResource('lab-tests', AdminLabTestController::class);
    Route::apiResource('lab-branches', AdminLabBranchController::class);
    Route::apiResource('specialties', AdminSpecialtyController::class);
});

// Results API for staff (admin, supervisor, agent)
Route::middleware(['staff.token', 'role:admin,supervisor,agent'])->group(function () {
    Route::apiResource('results', AdminResultController::class)->parameters(['results' => 'result']);
});

// Staff-authenticated activity update (token-based)
Route::middleware(['staff.token'])->post('/activity/conversation/{conversation}', [ActivityController::class, 'updateConversation']);
Route::middleware(['staff.token'])->post('/activity/conversation/{conversation}/messages', [ActivityController::class, 'storeMessage']);
Route::middleware(['staff.token'])->get('/activity/conversation/{conversation}/messages', [ActivityController::class, 'messages']);
Route::middleware(['staff.token'])->put('/activity/conversation/{conversation}/messages/{message}', [ActivityController::class, 'updateMessage']);
Route::middleware(['staff.token'])->delete('/activity/conversation/{conversation}/messages/{message}', [ActivityController::class, 'deleteMessage']);

// Public sliders endpoint for mobile app
Route::get('sliders', [PublicController::class, 'sliders']);

// Public lab tests endpoint for mobile app
Route::get('lab-tests', [PublicController::class, 'labTests']);

// File upload endpoint
Route::post('upload', [FileUploadController::class, 'upload'])->middleware('upload.limits');


