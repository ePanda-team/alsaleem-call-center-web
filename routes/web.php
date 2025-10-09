<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\DoctorController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\AnnouncementController;
use App\Http\Controllers\TestResultController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\AuthController as StaffAuthController;
use App\Models\Conversation;
use App\Models\Slider;
use App\Models\Message;

Route::get('/', function () {
    $sliders = Slider::orderBy('position')->take(3)->get();
    $lastMessageSub = Message::select('conversation_id')
        ->selectRaw('MAX(created_at) as last_message_at')
        ->groupBy('conversation_id');
    $conversations = \App\Models\Conversation::query()
        ->with('doctor')
        ->leftJoinSub($lastMessageSub, 'lm', function ($join) {
            $join->on('lm.conversation_id', '=', 'conversations.id');
        })
        ->select('conversations.*', 'lm.last_message_at')
        ->orderByDesc('lm.last_message_at')
        ->limit(20)
        ->get();
    return view('home', compact('sliders','conversations'));
});

// Staff auth
Route::get('login', [StaffAuthController::class, 'showLogin'])->name('login');
Route::post('login', [StaffAuthController::class, 'login'])->name('login.submit');
Route::post('logout', [StaffAuthController::class, 'logout'])->name('logout');

// Admin routes
Route::middleware(['auth', 'role:admin,supervisor'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('users', UserController::class)->except(['show']);
    Route::resource('doctors', DoctorController::class)->except(['show']);
    Route::resource('sliders', SliderController::class)->except(['show']);
    Route::resource('announcements', AnnouncementController::class)->except(['show']);
});

// Results CRUD for agents and supervisors
Route::middleware(['auth', 'role:admin,supervisor,agent'])->group(function () {
    Route::resource('results', TestResultController::class)->parameters(['results' => 'result']);
    Route::get('chat/{doctor}', [ChatController::class, 'showForAgent'])->name('chat.show');
});

// No doctor web UI; doctors use mobile app via API
