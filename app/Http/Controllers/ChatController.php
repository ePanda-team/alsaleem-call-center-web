<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\Doctor;
use Illuminate\Http\Request;
use App\Models\Message;

class ChatController extends Controller
{
    public function showForDoctor()
    {
        $doctor = auth('doctor')->user();
        $conversation = Conversation::firstOrCreate(['doctor_id' => $doctor->id]);
        return view('doctor.chat', compact('doctor', 'conversation'));
    }

    public function showForAgent(Doctor $doctor)
    {
        $conversation = Conversation::firstOrCreate(['doctor_id' => $doctor->id]);
        // Mark doctor's messages as read when opened by agent, and reset counter
        Message::where('conversation_id', $conversation->id)
            ->where('sender_type', 'doctor')
            ->whereNull('read_at')
            ->update(['read_at' => now()]);
        $conversation->unread_doctor_count = 0;
        $conversation->save();
        return view('chat.show', compact('doctor', 'conversation'));
    }
}


