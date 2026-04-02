<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\DoctorAccessToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class DoctorAuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
            'device_name' => ['nullable', 'string', 'max:255'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $validator->validated();

        $doctor = Doctor::where('username', $data['username'])->first();

        if (! $doctor || ! Hash::check($data['password'], $doctor->password)) {
            return response()->json(['message' => 'Invalid credentials'], 422);
        }

        $plainToken = Str::random(60);
        DoctorAccessToken::query()->create([
            'doctor_id' => $doctor->id,
            'token' => $plainToken,
            'name' => $data['device_name'] ?? null,
        ]);

        return response()->json(['token' => $plainToken]);
    }

    public function logout(Request $request)
    {
        $token = $request->bearerToken();
        if ($token) {
            DoctorAccessToken::query()->where('token', $token)->delete();
        }

        return response()->json(['ok' => true]);
    }
}
