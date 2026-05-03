<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'body',
        'target_specialties',
        'target_experience_levels',
        'media_files',
    ];

    protected $casts = [
        'target_specialties' => 'array',
        'target_experience_levels' => 'array',
        'media_files' => 'array',
    ];

    public function views()
    {
        return $this->hasMany(AnnouncementView::class);
    }

    public function viewedBy()
    {
        return $this->belongsToMany(Doctor::class, 'announcement_views')
            ->withPivot('viewed_at')
            ->withTimestamps();
    }

    public function scopeVisibleToDoctor(Builder $query, Doctor $doctor): Builder
    {
        return $query->where(function (Builder $q) use ($doctor) {
            $q->whereNull('target_specialties')
                ->orWhereJsonContains('target_specialties', $doctor->speciality);
        })->where(function (Builder $q) use ($doctor) {
            $q->whereNull('target_experience_levels')
                ->orWhereJsonContains('target_experience_levels', $doctor->experience_level);
        });
    }
}
