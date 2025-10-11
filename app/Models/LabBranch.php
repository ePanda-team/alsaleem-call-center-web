<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LabBranch extends Model
{
    protected $fillable = [
        'name',
        'address',
        'phone',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function testResults()
    {
        return $this->hasMany(TestResult::class, 'lab_branch', 'name');
    }
}
