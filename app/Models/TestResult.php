<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_name',
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


