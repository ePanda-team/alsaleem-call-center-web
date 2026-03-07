<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TestResult extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'patient_name',
        'patient_age',
        'hospital',
        'lab_branch',
        'doctor_id',
        'pdf_path',
        'doctor_comment',
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}


