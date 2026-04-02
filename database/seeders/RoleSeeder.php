<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $all = Role::allPermissionsTrue();

        $supervisor = $all;
        $supervisor['user_management'] = false;
        $supervisor['roles_management'] = false;

        $agent = array_fill_keys(array_keys($all), false);
        $agent['chatting'] = true;
        $agent['patient_results'] = true;

        $roles = [
            ['name' => 'Admin', 'slug' => 'admin', 'permissions' => $all],
            ['name' => 'Supervisor', 'slug' => 'supervisor', 'permissions' => $supervisor],
            ['name' => 'Agent', 'slug' => 'agent', 'permissions' => $agent],
        ];

        foreach ($roles as $row) {
            Role::query()->updateOrCreate(
                ['slug' => $row['slug']],
                [
                    'name' => $row['name'],
                    'permissions' => Role::normalizePermissionsArray($row['permissions']),
                ]
            );
        }
    }
}
