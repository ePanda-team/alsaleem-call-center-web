<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\DoctorController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\AnnouncementController;
use App\Http\Controllers\Admin\LabTestController;
use App\Http\Controllers\TestResultController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\AuthController as StaffAuthController;
use App\Models\Conversation;
use App\Models\Slider;
use App\Models\Message;
use App\Models\Doctor;
use App\Models\TestResult;

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
    return view('home', compact('sliders','conversations','doctorCount','resultCount','activeDoctorsLastHour'));
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

// Admin routes
Route::middleware(['auth', 'role:admin,supervisor'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('users', UserController::class)->except(['show']);
    Route::resource('doctors', DoctorController::class)->except(['show']);
    Route::resource('sliders', SliderController::class)->except(['show']);
    Route::resource('announcements', AnnouncementController::class)->except(['show']);
    Route::resource('lab-tests', LabTestController::class)->except(['show']);
});

// Results CRUD for agents and supervisors
Route::middleware(['auth', 'role:admin,supervisor,agent'])->group(function () {
    Route::resource('results', TestResultController::class)->parameters(['results' => 'result']);
    Route::get('chat/{doctor}', [ChatController::class, 'showForAgent'])->name('chat.show');
});

// No doctor web UI; doctors use mobile app via API
