<?php

namespace App\Http\Middleware;

use App\Models\Doctor;
use Closure;
use Illuminate\Http\Request;

class DoctorTokenAuth
{
    public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken();
        if (!$token) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $doctor = Doctor::where('api_token', $token)->first();
        if (!$doctor) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $request->attributes->set('doctor', $doctor);
        return $next($request);
    }
}


