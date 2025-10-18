<?php

namespace App\Models;

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
}


