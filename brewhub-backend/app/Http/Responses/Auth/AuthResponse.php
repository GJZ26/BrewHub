<?php

namespace App\Http\Responses\Auth;

use App\Http\Responses\User\UserResponse;
use DateTime;

class AuthResponse
{
    public function __construct(
        public readonly string $token,
        public readonly DateTime $expireAt,
        public readonly UserResponse $user,
    ) {}
}
