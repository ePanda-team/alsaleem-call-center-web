<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'permissions',
    ];

    protected function casts(): array
    {
        return [
            'permissions' => 'array',
        ];
    }

    public function staffUsers(): HasMany
    {
        return $this->hasMany(User::class, 'role_id');
    }

    /**
     * @param  array<string, mixed>|null  $input
     * @return array<string, bool>
     */
    public static function normalizePermissionsArray(?array $input): array
    {
        $keys = config('staff_permissions.keys', []);
        $out = array_fill_keys($keys, false);
        if (! is_array($input)) {
            return $out;
        }
        foreach ($keys as $key) {
            if (array_key_exists($key, $input)) {
                $out[$key] = (bool) $input[$key];
            }
        }

        return $out;
    }

    /**
     * @return array<string, bool>
     */
    public static function allPermissionsTrue(): array
    {
        $keys = config('staff_permissions.keys', []);

        return array_fill_keys($keys, true);
    }
}
