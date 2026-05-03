<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DoctorLabCatalogSeen extends Model
{
    protected $table = 'doctor_lab_catalog_seens';

    protected $primaryKey = 'doctor_id';

    public $incrementing = false;

    protected $fillable = [
        'doctor_id',
        'seen_at',
    ];

    protected function casts(): array
    {
        return [
            'seen_at' => 'datetime',
        ];
    }

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }
}
