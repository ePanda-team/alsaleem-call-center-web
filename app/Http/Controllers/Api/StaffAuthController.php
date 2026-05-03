<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\StaffAccessToken;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class StaffAuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required'],
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

        $user = User::where('email', $data['email'])->first();
        if (! $user || ! Hash::check($data['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 422);
        }

        $plainToken = Str::random(60);
        StaffAccessToken::query()->create([
            'user_id' => $user->id,
            'token' => $plainToken,
            'name' => $data['device_name'] ?? null,
        ]);

        $user->loadMissing('staffRole');

        return response()->json([
            'token' => $plainToken,
            'user' => array_merge($user->toArray(), [
                'permissions' => $user->resolveStaffPermissions(),
            ]),
        ]);
    }

    public function logout(Request $request)
    {
        $token = $request->bearerToken();
        if ($token) {
            StaffAccessToken::query()->where('token', $token)->delete();
        }

        return response()->json(['ok' => true]);
    }
}
