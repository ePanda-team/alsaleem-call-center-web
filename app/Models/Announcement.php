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


