<?php

namespace Database\Seeders;

use App\Models\Doctor;
use App\Models\User;
use App\Models\Conversation;
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

        User::query()->updateOrCreate(
            ['email' => 'admin@example.com'],
            ['name' => 'Admin', 'password' => 'password', 'role' => 'admin']
        );

        Doctor::query()->updateOrCreate(
            ['username' => 'drsmith'],
            ['name' => 'Dr. Smith', 'speciality' => 'Cardiology', 'experience_level' => 'senior', 'password' => 'password']
        );

        foreach (Doctor::all() as $doc) {
            Conversation::firstOrCreate(['doctor_id' => $doc->id]);
        }
    }
}
