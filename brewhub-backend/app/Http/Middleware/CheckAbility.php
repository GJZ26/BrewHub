<?php

namespace App\Http\Middleware;

use App\Models\Enums\Role;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAbility
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user() || !$request->user()->tokenCan(Role::Admin->value)) {
            return response()->json(['message' => 'No tienes permiso para realizar esta acción.'], 403);
        }

        return $next($request);
    }
}
