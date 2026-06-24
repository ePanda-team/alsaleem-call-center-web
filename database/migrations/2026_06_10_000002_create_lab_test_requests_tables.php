<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lab_test_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->constrained()->cascadeOnDelete();
            $table->string('status', 20)->default('pending');
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->index(['status', 'created_at']);
        });

        Schema::create('lab_test_request_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lab_test_request_id')->constrained()->cascadeOnDelete();
            $table->string('test_name');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lab_test_request_items');
        Schema::dropIfExists('lab_test_requests');
    }
};
