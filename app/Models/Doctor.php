<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Doctor extends Authenticatable
{
    use HasFactory, Notifiable;

    protected static function booted(): void
    {
        static::created(function (Doctor $doctor) {
            DoctorLabCatalogSeen::query()->firstOrCreate(
                ['doctor_id' => $doctor->id],
                ['seen_at' => now()]
            );
        });
    }

    protected $fillable = [
        'name',
        'username',
        'speciality',
        'experience_level',
        'phone',
        'fcm_token',
        'password',
        'bio',
        'profile_picture_path',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'profile_picture_path',
    ];

    protected $appends = [
        'profile_picture_url',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public function getProfilePictureUrlAttribute(): ?string
    {
        if (empty($this->profile_picture_path)) {
            return null;
        }

        return asset('storage/'.$this->profile_picture_path);
    }

    public static function getSpecialties()
    {
        return config('doctor.specialties');
    }

    public function conversation()
    {
        return $this->hasOne(Conversation::class);
    }

    public function messages()
    {
        return $this->hasManyThrough(Message::class, Conversation::class, 'doctor_id', 'conversation_id');
    }

    public function doctorAccessTokens(): HasMany
    {
        return $this->hasMany(DoctorAccessToken::class);
    }

    public function labCatalogSeen(): HasOne
    {
        return $this->hasOne(DoctorLabCatalogSeen::class);
    }
}
