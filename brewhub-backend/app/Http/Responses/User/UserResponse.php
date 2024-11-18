<?php

namespace App\Http\Responses\User;

use App\Models\Enums\Role;
use App\Models\User;

class UserResponse
{

    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly string $email,
        public readonly Role $role,
        public readonly bool $isActive,
        public readonly string $createdAt,
    ) {}

    public static function fromModel(User $user): UserResponse
    {
        return new Self(
            id: $user->id,
            name: $user->name,
            email: $user->email,
            role: $user->role,
            isActive: $user->isActive,
            createdAt: $user->created_at->toIso8601String(),
        );
    }

    public function toArray(): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "role" => $this->role,
            "isActive" => $this->isActive,
            "createdAt" => $this->createdAt
        ];
    }
}
