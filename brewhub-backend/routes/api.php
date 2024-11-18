<?php

use App\Http\Controllers\Auth\AuthenticateUser;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::middleware('simpleAuth')->group(function () {
        Route::get('/user', [UserController::class, 'index']);
        Route::get('/user/{id}', [UserController::class, 'show']);
    });

    Route::middleware('onlyAdmins')->group(function () {
        Route::post('/user', [UserController::class, 'store']);
        Route::put('/user/{id}', [UserController::class, 'update']);
        Route::delete('/user/{id}', [UserController::class, 'destroy']);
    });

    Route::middleware('simpleAuth')->get('/auth/logout', [AuthenticateUser::class, 'logout']);
});


Route::post('/auth/login', [AuthenticateUser::class, 'login']);
