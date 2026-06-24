<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedSmallInteger('birth_year')->nullable();
            $table->string('gender', 20)->default('unknown');
            $table->timestamps();

            $table->unique(['name', 'birth_year', 'gender']);
        });

        Schema::table('test_results', function (Blueprint $table) {
            $table->foreignId('patient_id')->nullable()->after('id')->constrained()->nullOnDelete();
        });

        Schema::table('test_results', function (Blueprint $table) {
            $table->dropColumn(['patient_name', 'patient_age']);
        });

    }

    public function down(): void
    {
        Schema::table('test_results', function (Blueprint $table) {
            $table->string('patient_name')->after('id');
            $table->unsignedInteger('patient_age')->nullable()->after('patient_name');
        });

        $results = DB::table('test_results')
            ->join('patients', 'patients.id', '=', 'test_results.patient_id')
            ->select('test_results.id', 'patients.name', 'patients.birth_year', 'test_results.created_at')
            ->get();

        foreach ($results as $result) {
            $age = null;
            if ($result->birth_year !== null) {
                $referenceYear = $result->created_at
                    ? (int) date('Y', strtotime($result->created_at))
                    : (int) date('Y');
                $age = $referenceYear - (int) $result->birth_year;
            }

            DB::table('test_results')->where('id', $result->id)->update([
                'patient_name' => $result->name,
                'patient_age' => $age,
            ]);
        }

        Schema::table('test_results', function (Blueprint $table) {
            $table->dropConstrainedForeignId('patient_id');
        });

        Schema::dropIfExists('patients');
    }
};
