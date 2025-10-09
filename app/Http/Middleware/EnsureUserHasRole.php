<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class EnsureUserHasRole
{
    public function handle(Request $request, Closure $next, string ...$roles)
    {
        $user = $request->user();
        if (!$user || (count($roles) > 0 && !in_array($user->role, $roles, true))) {
            throw new HttpException(403, 'Forbidden');
        }
        return $next($request);
    }
}


