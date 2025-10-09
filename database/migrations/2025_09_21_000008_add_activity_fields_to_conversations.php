<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('conversations', function (Blueprint $table) {
            $table->timestamp('last_message_at')->nullable()->after('user_id');
            $table->string('last_message_preview', 255)->nullable()->after('last_message_at');
            $table->unsignedInteger('unread_doctor_count')->default(0)->after('last_message_preview');
        });
    }

    public function down(): void
    {
        Schema::table('conversations', function (Blueprint $table) {
            $table->dropColumn(['last_message_at', 'last_message_preview', 'unread_doctor_count']);
        });
    }
};


