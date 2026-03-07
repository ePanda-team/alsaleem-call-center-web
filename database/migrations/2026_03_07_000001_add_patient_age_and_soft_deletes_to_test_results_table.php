<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('test_results', function (Blueprint $table) {
            $table->unsignedInteger('patient_age')->nullable()->after('patient_name');
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::table('test_results', function (Blueprint $table) {
            $table->dropColumn('patient_age');
            $table->dropSoftDeletes();
        });
    }
};

