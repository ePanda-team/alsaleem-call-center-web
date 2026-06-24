<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LabTestRequestItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'lab_test_request_id',
        'test_name',
        'description',
    ];

    public function labTestRequest(): BelongsTo
    {
        return $this->belongsTo(LabTestRequest::class);
    }
}
