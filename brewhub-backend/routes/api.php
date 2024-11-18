<?php

use App\Http\Controllers\Auth\AuthenticateUser;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource("/user", UserController::class);
