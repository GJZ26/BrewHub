<?php

namespace Database\Seeders;

use App\Models\Enums\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        User::factory()->create([
            'name' => 'Diego López', // Nombre de la captura de pantalla de la prueba
            'email' => 'test@mail.com',
            'password' => Hash::make("password"),
            'role' => Role::Admin->value
        ]);
    }
}
