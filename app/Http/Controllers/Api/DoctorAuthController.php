<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DoctorAuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        $doctor = Doctor::where('username', $data['username'])->first();

        if (!$doctor || !Hash::check($data['password'], $doctor->password)) {
            return response()->json(['message' => 'Invalid credentials'], 422);
        }

        $doctor->api_token = Str::random(60);
        $doctor->save();

        return response()->json(['token' => $doctor->api_token]);
    }
}

