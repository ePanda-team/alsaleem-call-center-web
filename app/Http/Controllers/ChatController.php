<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\Doctor;
use Illuminate\Http\Request;

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
        return view('chat.show', compact('doctor', 'conversation'));
    }
}


