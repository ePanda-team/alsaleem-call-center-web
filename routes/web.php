<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\DoctorController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\AnnouncementController;
use App\Http\Controllers\Admin\LabTestController;
use App\Http\Controllers\Admin\LabBranchController;
use App\Http\Controllers\TestResultController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\AuthController as StaffAuthController;
use App\Models\Conversation;
use App\Models\Slider;
use App\Models\Message;
use App\Models\Doctor;
use App\Models\TestResult;

// Test upload limits
Route::get('/test-upload-limits', function () {
    return response()->json([
        'upload_max_filesize' => ini_get('upload_max_filesize'),
        'post_max_size' => ini_get('post_max_size'),
        'max_file_uploads' => ini_get('max_file_uploads'),
        'max_execution_time' => ini_get('max_execution_time'),
        'memory_limit' => ini_get('memory_limit'),
    ]);
});

// Test FCM notification (for testing purposes)
Route::get('/test-fcm', function () {
    $notificationService = new \App\Services\NotificationService();
    $doctor = \App\Models\Doctor::whereNotNull('fcm_token')->first();
    
    if (!$doctor) {
        return response()->json(['error' => 'No doctor with FCM token found']);
    }
    
    $result = $notificationService->sendToDoctor(
        $doctor, 
        'Test Notification', 
        'This is a test notification from the system',
        ['type' => 'test']
    );
    
    return response()->json([
        'success' => $result !== false,
        'doctor_id' => $doctor->id,
        'doctor_name' => $doctor->name,
        'result' => $result
    ]);
});

Route::middleware('setlocale')->get('/', function () {
    $sliders = Slider::orderBy('position')->take(3)->get();
    $doctorCount = Doctor::count();
    $resultCount = TestResult::count();
    $activeDoctorsLastHour = Conversation::whereNotNull('last_message_at')
        ->where('last_message_at', '>=', now()->subHour())
        ->distinct('doctor_id')
        ->count('doctor_id');
    
    // Latest message per conversation (by id for stability)
    $conversations = \App\Models\Conversation::query()
        ->with('doctor')
        ->select('conversations.*')
        ->orderByDesc('last_message_at')
        ->limit(20)
        ->get();
    
    // Last 5 active doctors (doctors with recent conversations)
    $lastActiveDoctors = Doctor::join('conversations', 'doctors.id', '=', 'conversations.doctor_id')
        ->whereNotNull('conversations.last_message_at')
        ->where('conversations.last_message_at', '>=', now()->subDays(7))
        ->orderByDesc('conversations.last_message_at')
        ->select('doctors.*')
        ->limit(5)
        ->get();
    
    // Last 10 entered results
    $lastResults = TestResult::with('doctor')->orderByDesc('created_at')->limit(10)->get();
    
    // Ranking of lab branches with most results
    $branchRanking = TestResult::selectRaw('lab_branch, COUNT(*) as result_count')
        ->groupBy('lab_branch')
        ->orderByDesc('result_count')
        ->limit(5)
        ->get();
    
    return view('home', compact(
        'sliders',
        'conversations',
        'doctorCount',
        'resultCount',
        'activeDoctorsLastHour',
        'lastActiveDoctors',
        'lastResults',
        'branchRanking'
    ));
});

// Staff auth
Route::middleware('setlocale')->group(function () {
    Route::get('login', [StaffAuthController::class, 'showLogin'])->name('login');
    Route::post('login', [StaffAuthController::class, 'login'])->name('login.submit');
    Route::post('logout', [StaffAuthController::class, 'logout'])->name('logout');
});

Route::post('locale/{locale}', function (string $locale) {
    if (in_array($locale, ['en','ar'], true)) {
        session(['locale' => $locale]);
    }
    return back();
})->name('locale.set');

// Admin routes (localized)
Route::middleware(['setlocale','auth', 'role:admin,supervisor'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('users', UserController::class)->except(['show']);
    Route::resource('doctors', DoctorController::class)->except(['show']);
    Route::resource('sliders', SliderController::class)->except(['show']);
    Route::resource('announcements', AnnouncementController::class)->except(['show']);
    Route::get('announcements/{announcement}/viewers', [AnnouncementController::class, 'viewers'])->name('announcements.viewers');
    Route::resource('lab-tests', LabTestController::class)->except(['show']);
    Route::resource('lab-branches', LabBranchController::class)->except(['show']);
});

// Results CRUD for agents and supervisors (localized)
Route::middleware(['setlocale','auth', 'role:admin,supervisor,agent'])->group(function () {
    Route::resource('results', TestResultController::class)->parameters(['results' => 'result']);
    Route::get('chat/{doctor}', [ChatController::class, 'showForAgent'])->name('chat.show');
});

// No doctor web UI; doctors use mobile app via API
