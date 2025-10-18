<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('announcements', function (Blueprint $table) {
            // Drop the old single media columns
            $table->dropColumn(['media_path', 'media_type']);
            
            // Add new JSON column for multiple media files
            $table->json('media_files')->nullable()->after('target_experience_levels');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('announcements', function (Blueprint $table) {
            // Restore the old single media columns
            $table->string('media_path')->nullable()->after('target_experience_levels');
            $table->string('media_type')->nullable()->after('media_path');
            
            // Drop the new JSON column
            $table->dropColumn('media_files');
        });
    }
};
