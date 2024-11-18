<?php

use App\Http\Controllers\Auth\AuthenticateUser;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->apiResource("/user", UserController::class); // Este falla en especial
Route::post('/auth/login', [AuthenticateUser::class, 'login']);
Route::middleware('auth:sanctum')->get('/auth/logout', [AuthenticateUser::class, 'logout']);
