<?php

namespace App\Models;

use App\Models\Enums\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens;
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'isActive'
    ];

    protected $hidden = [
        'password'
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
            'role' => Role::class,
        ];
    }

    public function setRoleAttribute($value): void
    {
        $this->attributes['role'] = Role::from($value)->value;
    }
}
