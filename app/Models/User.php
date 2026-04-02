<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'role_id',
        'branch_assignment',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function staffRole(): BelongsTo
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function staffAccessTokens(): HasMany
    {
        return $this->hasMany(StaffAccessToken::class);
    }

    /**
     * Effective UI permissions for staff. Admins always get full access regardless of role record.
     *
     * @return array<string, bool>
     */
    public function resolveStaffPermissions(): array
    {
        if ($this->role === 'admin') {
            return Role::allPermissionsTrue();
        }

        if ($this->role_id) {
            $this->loadMissing('staffRole');
            if ($this->staffRole) {
                $permissions = Role::normalizePermissionsArray($this->staffRole->permissions);
                $permissions['roles_management'] = false;

                return $permissions;
            }
        }

        return array_fill_keys(config('staff_permissions.keys', []), false);
    }
}
