<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $query = Role::query()->orderBy('name');
        if ($request->filled('q')) {
            $q = $request->string('q');
            $query->where(function ($sub) use ($q) {
                $sub->where('name', 'like', "%{$q}%")
                    ->orWhere('slug', 'like', "%{$q}%");
            });
        }

        $roles = $query->paginate(50)->appends($request->query());
        $roles->getCollection()->transform(function (Role $role) {
            $role->permissions = Role::normalizePermissionsArray($role->permissions);

            return $role;
        });

        return response()->json($roles);
    }

    public function show(Role $role)
    {
        $role->permissions = Role::normalizePermissionsArray($role->permissions);

        return response()->json($role);
    }

    public function store(Request $request)
    {
        $keys = config('staff_permissions.keys', []);
        $permissionRules = [];
        foreach ($keys as $key) {
            $permissionRules["permissions.{$key}"] = ['required', 'boolean'];
        }

        $validator = Validator::make($request->all(), array_merge([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/', 'unique:roles,slug'],
            'permissions' => ['required', 'array'],
        ], $permissionRules));

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $slug = $data['slug'] ?? Str::slug($data['name']);
        $slug = $this->ensureUniqueSlug($slug);

        $role = Role::create([
            'name' => $data['name'],
            'slug' => $slug,
            'permissions' => Role::normalizePermissionsArray($data['permissions']),
        ]);

        return response()->json($role, 201);
    }

    public function update(Request $request, Role $role)
    {
        $keys = config('staff_permissions.keys', []);

        $rules = [
            'name' => ['sometimes', 'required', 'string', 'max:255'],
            'slug' => [
                'sometimes',
                'nullable',
                'string',
                'max:255',
                'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
                Rule::unique('roles', 'slug')->ignore($role->id),
            ],
            'permissions' => ['sometimes', 'required', 'array'],
        ];
        foreach ($keys as $key) {
            $rules["permissions.{$key}"] = ['required_with:permissions', 'boolean'];
        }

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        if (array_key_exists('name', $data)) {
            $role->name = $data['name'];
        }
        if (array_key_exists('slug', $data) && $data['slug'] !== null && $data['slug'] !== '') {
            $role->slug = $data['slug'];
        }
        if (isset($data['permissions'])) {
            $role->permissions = Role::normalizePermissionsArray($data['permissions']);
        }

        $role->save();
        $role->permissions = Role::normalizePermissionsArray($role->permissions);

        return response()->json($role);
    }

    public function destroy(Role $role)
    {
        if (User::where('role_id', $role->id)->exists()) {
            return response()->json([
                'message' => 'Cannot delete a role that is assigned to staff users.',
            ], 422);
        }

        $role->delete();

        return response()->json(['ok' => true]);
    }

    private function ensureUniqueSlug(string $base, ?int $ignoreRoleId = null): string
    {
        $slug = $base !== '' ? $base : 'role';
        $candidate = $slug;
        $n = 1;
        while (Role::where('slug', $candidate)
            ->when($ignoreRoleId, fn ($q) => $q->where('id', '!=', $ignoreRoleId))
            ->exists()) {
            $candidate = $slug.'-'.$n;
            $n++;
        }

        return $candidate;
    }
}
