<?php

namespace Database\Seeders;

use App\Models\Conversation;
use App\Models\Doctor;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(SpecialtySeeder::class);

        $this->call(RoleSeeder::class);

        $adminRole = \App\Models\Role::query()->where('slug', 'admin')->first();

        User::query()->updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin',
                'password' => 'password',
                'role' => 'admin',
                'role_id' => $adminRole?->id,
            ]
        );

        foreach (User::query()->whereNull('role_id')->cursor() as $user) {
            $role = \App\Models\Role::query()->where('slug', $user->role)->first();
            if ($role) {
                $user->role_id = $role->id;
                $user->saveQuietly();
            }
        }

        Doctor::query()->updateOrCreate(
            ['username' => 'drsmith'],
            ['name' => 'Dr. Smith', 'speciality' => 'Cardiology', 'experience_level' => 'senior', 'password' => 'password']
        );

        foreach (Doctor::all() as $doc) {
            Conversation::firstOrCreate(['doctor_id' => $doc->id]);
        }
    }
}
