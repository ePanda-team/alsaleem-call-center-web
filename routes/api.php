<?php

use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\Admin\AnnouncementController as AdminAnnouncementController;
use App\Http\Controllers\Api\Admin\DoctorController as AdminDoctorController;
use App\Http\Controllers\Api\Admin\LabBranchController as AdminLabBranchController;
use App\Http\Controllers\Api\Admin\LabTestController as AdminLabTestController;
use App\Http\Controllers\Api\Admin\ResultController as AdminResultController;
use App\Http\Controllers\Api\Admin\RoleController as AdminRoleController;
use App\Http\Controllers\Api\Admin\SliderController as AdminSliderController;
use App\Http\Controllers\Api\Admin\SpecialtyController as AdminSpecialtyController;
use App\Http\Controllers\Api\Admin\UserController as AdminUserController;
use App\Http\Controllers\Api\DoctorAuthController;
use App\Http\Controllers\Api\DoctorController;
use App\Http\Controllers\Api\LabTestRequestController;
use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\PublicController;
use App\Http\Controllers\Api\StaffAuthController;
use App\Http\Controllers\Api\StaffNotificationController;
use App\Http\Controllers\Api\TestResultCommentController;
use App\Http\Controllers\Api\TestResultPdfController;
use App\Http\Controllers\FileUploadController;
use Illuminate\Support\Facades\Route;

Route::post('doctor/login', [DoctorAuthController::class, 'login']);
Route::middleware('doctor.token')->post('doctor/logout', [DoctorAuthController::class, 'logout']);

// Staff API auth
Route::post('staff/login', [StaffAuthController::class, 'login']);
Route::middleware('staff.token')->post('staff/logout', [StaffAuthController::class, 'logout']);

Route::middleware('doctor.token')->group(function () {
    Route::get('doctor/me', [DoctorController::class, 'me']);
    Route::post('doctor/fcm-token', [DoctorController::class, 'updateFcmToken']);
    Route::get('doctor/conversation', [DoctorController::class, 'conversation']);
    Route::get('doctor/unseen-summary', [DoctorController::class, 'unseenSummary']);
    Route::get('doctor/patients', [DoctorController::class, 'patients']);
    Route::get('doctor/patients/{patient}', [DoctorController::class, 'showPatient']);
    Route::get('doctor/patients/{patient}/results', [DoctorController::class, 'patientResults']);
    Route::get('doctor/results', [DoctorController::class, 'results']);
    Route::get('doctor/results/{result}/pdf', [TestResultPdfController::class, 'doctorShow']);
    Route::get('doctor/results/{result}/comments', [DoctorController::class, 'resultComments']);
    Route::post('doctor/results/{result}/comments', [DoctorController::class, 'storeResultComment']);
    Route::get('doctor/announcements', [DoctorController::class, 'announcements']);
    Route::get('doctor/lab-tests', [DoctorController::class, 'labTests']);
    Route::get('doctor/lab-test-requests', [DoctorController::class, 'labTestRequests']);
    Route::post('doctor/lab-test-requests', [DoctorController::class, 'storeLabTestRequest']);
    Route::get('doctor/lab-test-requests/{labTestRequest}', [DoctorController::class, 'showLabTestRequest']);
    Route::match(['put', 'post'], 'doctor/me', [DoctorController::class, 'updateProfile']);
    Route::match(['delete', 'post'], 'doctor/results/{result}', [DoctorController::class, 'deleteResult']);
    Route::get('doctor/conversations/{conversation}/messages', [DoctorController::class, 'messages']);
    Route::post('doctor/conversations/{conversation}/messages', [DoctorController::class, 'sendMessage']);
    Route::post('doctor/conversations/{conversation}/messages/read', [DoctorController::class, 'markMessagesRead']);
    Route::post('doctor/conversations/{conversation}/messages/{message}/delete', [DoctorController::class, 'deleteMessage']);
});

// Admin API (token-based)
Route::middleware(['staff.token'])->prefix('admin')->group(function () {
    Route::apiResource('roles', AdminRoleController::class);
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
Route::middleware(['staff.token'])->group(function () {
    Route::get('patients', [PatientController::class, 'index']);
    Route::get('patients/{patient}', [PatientController::class, 'show']);
    Route::get('patients/{patient}/results', [PatientController::class, 'results']);
    Route::apiResource('lab-test-requests', LabTestRequestController::class)->only(['index', 'show', 'update']);
    Route::get('notifications/unread-count', [StaffNotificationController::class, 'unreadCount']);
    Route::post('notifications/read-all', [StaffNotificationController::class, 'markAllRead']);
    Route::get('notifications', [StaffNotificationController::class, 'index']);
    Route::post('notifications/{notification}/read', [StaffNotificationController::class, 'markRead']);
    Route::get('results/{result}/comments', [TestResultCommentController::class, 'index']);
    Route::post('results/{result}/comments', [TestResultCommentController::class, 'store']);
    Route::get('results/{result}/pdf', [TestResultPdfController::class, 'staffShow']);
    Route::apiResource('results', AdminResultController::class)->parameters(['results' => 'result']);
});

// Staff-authenticated activity update (token-based)
Route::middleware(['staff.token'])->post('/activity/conversation/{conversation}', [ActivityController::class, 'updateConversation']);
Route::middleware(['staff.token'])->post('/activity/conversation/{conversation}/messages', [ActivityController::class, 'storeMessage']);
Route::middleware(['staff.token'])->get('/activity/conversation/{conversation}/messages', [ActivityController::class, 'messages']);
Route::middleware(['staff.token'])->put('/activity/conversation/{conversation}/messages/{message}', [ActivityController::class, 'updateMessage']);
Route::middleware(['staff.token'])->delete('/activity/conversation/{conversation}/messages/{message}', [ActivityController::class, 'deleteMessage']);
Route::middleware(['staff.token'])->post('/activity/conversation/{conversation}/messages/{message}/delete', [ActivityController::class, 'deleteMessage']);

// Public sliders endpoint for mobile app
Route::get('sliders', [PublicController::class, 'sliders']);

// Public lab tests endpoint for mobile app
Route::get('lab-tests', [PublicController::class, 'labTests']);

// File upload endpoint
Route::post('upload', [FileUploadController::class, 'upload'])->middleware('upload.limits');
