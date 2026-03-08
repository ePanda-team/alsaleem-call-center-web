<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AddCorsHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->isMethod('OPTIONS')) {
            $response = response('', 204);
            $this->withCors($response);
            $response->headers->set('Access-Control-Max-Age', '86400');

            return $response;
        }

        try {
            $response = $next($request);
        } catch (\Throwable $e) {
            $response = app(\Illuminate\Contracts\Debug\ExceptionHandler::class)->render($request, $e);
        }

        $this->withCors($response);

        return $response;
    }

    private function withCors(Response $response): void
    {
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
        $response->headers->set('Access-Control-Expose-Headers', 'Content-Type, Authorization');
    }
}
