<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('test_results', function (Blueprint $table) {
            $table->id();
            $table->string('patient_name');
            $table->string('lab_branch');
            $table->foreignId('doctor_id')->constrained('doctors')->cascadeOnDelete();
            $table->string('pdf_path');
            $table->text('doctor_comment')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('test_results');
    }
};


