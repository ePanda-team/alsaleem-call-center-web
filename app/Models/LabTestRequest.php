<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LabTestRequest extends Model
{
    use HasFactory;

    public const STATUSES = ['pending', 'reviewed', 'approved', 'rejected'];

    protected $fillable = [
        'doctor_id',
        'status',
        'notes',
    ];

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(LabTestRequestItem::class);
    }
}
