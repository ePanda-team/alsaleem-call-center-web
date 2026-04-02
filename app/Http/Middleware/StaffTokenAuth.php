<?php

namespace App\Http\Middleware;

use App\Models\StaffAccessToken;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StaffTokenAuth
{
    public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken();
        if (! $token) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $access = StaffAccessToken::query()->where('token', $token)->first();
        if (! $access) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = $access->user;
        if (! $user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        Auth::setUser($user);
        $request->setUserResolver(fn () => $user);

        return $next($request);
    }
}
