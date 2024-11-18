<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Responses\Auth\AuthResponse;
use App\Http\Responses\User\UserResponse;
use Dotenv\Exception\ValidationException;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthenticateUser
{
    public function login(LoginRequest $request)
    {
        try {
            $token = $request->authenticate();
            return response()->json(
                new AuthResponse(
                    $token->token,
                    $token->expireAt,
                    UserResponse::fromModel($token->user)
                ),
                200
            );
        } catch (Exception $error) {

            Log::error('Error al autenticar al usuario', [
                'exception' => $error->getMessage(),
            ]);
            return response()->json(["message" => "Crendenciales incorrectas."])->setStatusCode(401);
        }
    }

    public function logout(Request $request)
    {
        try {
            $request->user()->tokens->each(function ($token) {
                $token->delete();
            });
            return response()->json(['message' => 'Sesion cerrada con exito'], 200);
        } catch (Exception $error) {
            Log::error('Error al cerrar sesión', ['exception' => $error->getMessage()]);
            return response()->json(['message' => 'Error al cerrar sesion'], 500);
        }
    }
}
