<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('staff_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('token', 80)->unique();
            $table->string('name')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamps();
        });

        if (Schema::hasColumn('users', 'api_token')) {
            $users = DB::table('users')->whereNotNull('api_token')->get(['id', 'api_token']);
            foreach ($users as $row) {
                DB::table('staff_access_tokens')->insert([
                    'user_id' => $row->id,
                    'token' => $row->api_token,
                    'name' => null,
                    'last_used_at' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('api_token');
            });
        }
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('api_token', 80)->nullable()->after('remember_token');
            $table->index('api_token');
        });

        $tokens = DB::table('staff_access_tokens')->orderBy('id')->get(['user_id', 'token']);
        $seenUser = [];
        foreach ($tokens as $t) {
            if (! isset($seenUser[$t->user_id])) {
                DB::table('users')->where('id', $t->user_id)->update(['api_token' => $t->token]);
                $seenUser[$t->user_id] = true;
            }
        }

        Schema::dropIfExists('staff_access_tokens');
    }
};
