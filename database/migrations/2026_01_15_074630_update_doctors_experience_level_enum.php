<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // First, convert the enum column to a string column to remove enum restrictions
        DB::statement("ALTER TABLE doctors MODIFY COLUMN experience_level VARCHAR(255) DEFAULT 'specialist'");
        
        // Then convert any existing 'junior' or 'senior' values to the new values
        DB::statement("UPDATE doctors SET experience_level = 'specialist' WHERE experience_level = 'junior'");
        DB::statement("UPDATE doctors SET experience_level = 'doctor' WHERE experience_level = 'senior'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // First convert back to old values (while column is still VARCHAR)
        DB::statement("UPDATE doctors SET experience_level = 'junior' WHERE experience_level = 'specialist'");
        DB::statement("UPDATE doctors SET experience_level = 'senior' WHERE experience_level = 'doctor'");
        DB::statement("UPDATE doctors SET experience_level = 'junior' WHERE experience_level = 'Consultant'");
        
        // Then restore the original enum definition
        DB::statement("ALTER TABLE doctors MODIFY COLUMN experience_level ENUM('junior', 'senior') DEFAULT 'junior'");
    }
};
