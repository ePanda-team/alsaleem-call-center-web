<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('test_result_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('test_result_id')->constrained()->cascadeOnDelete();
            $table->string('author_type', 20);
            $table->unsignedBigInteger('author_id');
            $table->text('body');
            $table->timestamps();

            $table->index(['test_result_id', 'created_at']);
        });

        if (Schema::hasColumn('test_results', 'doctor_comment')) {
            $results = DB::table('test_results')
                ->whereNotNull('doctor_comment')
                ->where('doctor_comment', '!=', '')
                ->get(['id', 'doctor_id', 'doctor_comment', 'created_at', 'updated_at']);

            foreach ($results as $result) {
                DB::table('test_result_comments')->insert([
                    'test_result_id' => $result->id,
                    'author_type' => 'doctor',
                    'author_id' => $result->doctor_id,
                    'body' => $result->doctor_comment,
                    'created_at' => $result->created_at ?? now(),
                    'updated_at' => $result->updated_at ?? now(),
                ]);
            }

            Schema::table('test_results', function (Blueprint $table) {
                $table->dropColumn('doctor_comment');
            });
        }
    }

    public function down(): void
    {
        Schema::table('test_results', function (Blueprint $table) {
            $table->text('doctor_comment')->nullable()->after('pdf_path');
        });

        $comments = DB::table('test_result_comments')
            ->where('author_type', 'doctor')
            ->orderBy('test_result_id')
            ->orderBy('id')
            ->get();

        $latestByResult = [];
        foreach ($comments as $comment) {
            $latestByResult[$comment->test_result_id] = $comment->body;
        }

        foreach ($latestByResult as $resultId => $body) {
            DB::table('test_results')->where('id', $resultId)->update([
                'doctor_comment' => $body,
            ]);
        }

        Schema::dropIfExists('test_result_comments');
    }
};
