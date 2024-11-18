<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserStoreRequest;
use App\Http\Requests\User\UserUpdateRequest;
use App\Http\Responses\User\UserResponse;
use App\Models\User;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function index()
    {
        try {
            $users = User::all();
            $response = $users->map(fn($user) => UserResponse::fromModel($user))->toArray();

            return response()->json($response)->setStatusCode(200);
        } catch (Exception $error) {
            // Guarda los logs por si es necesario control de eventos c:
            Log::error('Error al obtener usuarios', [
                'exception' => $error->getMessage(),
            ]);
            return response()->json(["message" => "Ha ocurrido un error intentando recuperar los usuarios."])->setStatusCode(500);
        }
    }
    public function show(int $id)
    {
        // Gestionado manualmente para tener mayor control de la respuesta.
        try {

            $user = User::findOrFail($id);
            return response()->json(UserResponse::fromModel($user)->toArray(), 200);
        } catch (ModelNotFoundException $notFound) {

            Log::warning('Usuario no encontrado', ['id' => $id,]);
            return response()->json(['message' => 'Usuario no encontrado.'], 404);
        } catch (Exception $error) {

            Log::error('Error al obtener un usuario', ['id' => $id, 'exception' => $error->getMessage(),]);
            return response()->json(['message' => 'Ha ocurrido un error al intentar recuperar el usuario.',], 500);
        }
    }

    // nota: Si está probando en Postman, agregue "X-Requested-With: XMLHttpRequest" en el encabezado para que Laravel sepa que es una solicitud XHR.
    // error solo presente en postman.
    public function store(UserStoreRequest $request)
    {
        $validated = $request->validated();

        try {

            if (User::where('email', $validated['email'])->exists()) {
                return response()->json([
                    'message' => 'El correo electrónico ya está en uso.'
                ], 409);
            }

            $user = User::create($validated);
            return response()->json(UserResponse::fromModel($user), 201);
        } catch (Exception $error) {

            Log::error('Error al registrar usuario', [
                'exception' => $error->getMessage(),
            ]);
            return response()->json(['message' => 'Ha ocurrido un error al intentar registrar el usuario.',], 500);
        }
    }

    public function update(UserUpdateRequest $request, int $id)
    {
        try {

            $validated = $request->validated();
            $user = User::findOrFail($id);

            if (isset($validated['email']) && User::where('email', $validated['email'])->where('id', '!=', $id)->exists()) {
                return response()->json(['message' => 'El correo electrónico ya está registrado.'], 409);
            }

            $user->update($validated);

            return response()->json(UserResponse::fromModel($user), 200);
        } catch (ModelNotFoundException $notFound) {

            Log::warning('Usuario no encontrado', ['id' => $id]);
            return response()->json(['message' => 'Usuario no encontrado.'], 404);
        } catch (Exception $error) {

            Log::error('Error al actualizar el usuario', ['id' => $id, 'exception' => $error->getMessage()]);
            return response()->json(['message' => 'Ha ocurrido un error al intentar actualizar el usuario.'], 500);
        }
    }

    public function destroy(int $id)
    {
        try {

            $user = User::findOrFail($id);
            $user->delete();

            return response()->noContent();
        } catch (ModelNotFoundException $notFound) {

            Log::warning('Usuario no encontrado', ['id' => $id]);
            return response()->json(['message' => 'Usuario no encontrado.'], 404);
        } catch (Exception $error) {

            Log::error('Error al eliminar el usuario', ['id' => $id, 'exception' => $error->getMessage()]);
            return response()->json(['message' => 'Ha ocurrido un error al intentar eliminar el usuario.'], 500);
        }
    }
}
