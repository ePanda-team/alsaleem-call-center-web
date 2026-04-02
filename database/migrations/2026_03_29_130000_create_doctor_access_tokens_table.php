<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('doctor_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->constrained()->cascadeOnDelete();
            $table->string('token', 80)->unique();
            $table->string('name')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamps();
        });

        if (Schema::hasColumn('doctors', 'api_token')) {
            $doctors = DB::table('doctors')->whereNotNull('api_token')->get(['id', 'api_token']);
            foreach ($doctors as $row) {
                DB::table('doctor_access_tokens')->insert([
                    'doctor_id' => $row->id,
                    'token' => $row->api_token,
                    'name' => null,
                    'last_used_at' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            Schema::table('doctors', function (Blueprint $table) {
                $table->dropColumn('api_token');
            });
        }
    }

    public function down(): void
    {
        Schema::table('doctors', function (Blueprint $table) {
            $table->string('api_token', 80)->nullable()->unique()->after('remember_token');
        });

        $tokens = DB::table('doctor_access_tokens')->orderBy('id')->get(['doctor_id', 'token']);
        $seenDoctor = [];
        foreach ($tokens as $t) {
            if (! isset($seenDoctor[$t->doctor_id])) {
                DB::table('doctors')->where('id', $t->doctor_id)->update(['api_token' => $t->token]);
                $seenDoctor[$t->doctor_id] = true;
            }
        }

        Schema::dropIfExists('doctor_access_tokens');
    }
};
