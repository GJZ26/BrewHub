<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SimpleAuth
{
    // Request manda vacío :(
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user()) {
            return response()->json($request, 403);
        }

        return $next($request);
    }
}
