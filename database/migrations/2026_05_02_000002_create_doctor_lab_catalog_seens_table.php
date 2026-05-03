<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('doctor_lab_catalog_seens', function (Blueprint $table) {
            $table->foreignId('doctor_id')->primary()->constrained()->cascadeOnDelete();
            $table->timestamp('seen_at');
            $table->timestamps();
        });

        $now = now();
        $doctorIds = DB::table('doctors')->pluck('id');
        foreach ($doctorIds as $doctorId) {
            DB::table('doctor_lab_catalog_seens')->insert([
                'doctor_id' => $doctorId,
                'seen_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('doctor_lab_catalog_seens');
    }
};
