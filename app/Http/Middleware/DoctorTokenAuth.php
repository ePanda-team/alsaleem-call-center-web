<?php

namespace App\Http\Middleware;

use App\Models\DoctorAccessToken;
use Closure;
use Illuminate\Http\Request;

class DoctorTokenAuth
{
    public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken();
        if (! $token) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $access = DoctorAccessToken::query()->where('token', $token)->first();
        if (! $access) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $doctor = $access->doctor;
        if (! $doctor) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $request->attributes->set('doctor', $doctor);

        return $next($request);
    }
}
