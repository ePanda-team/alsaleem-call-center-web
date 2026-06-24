<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Eloquent\SoftDeletes;

class TestResult extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'patient_id',
        'hospital',
        'lab_branch',
        'doctor_id',
        'pdf_path',
    ];

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function doctorViews(): HasMany
    {
        return $this->hasMany(TestResultDoctorView::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(TestResultComment::class);
    }

    public function latestComment(): HasOne
    {
        return $this->hasOne(TestResultComment::class)->latestOfMany('created_at');
    }

    public function scopeUnseenForDoctor(Builder $query, int $doctorId): Builder
    {
        return $query
            ->where('doctor_id', $doctorId)
            ->whereDoesntHave('doctorViews', function ($viewQuery) use ($doctorId) {
                $viewQuery->where('doctor_id', $doctorId);
            });
    }

    public function scopeWithUnseenStaffCommentsForDoctor(Builder $query, int $doctorId): Builder
    {
        [$watermarkSql, $watermarkBindings] = self::unseenStaffCommentsWatermarkBinding($doctorId);

        return $query
            ->with(['patient'])
            ->withCount(['comments as comments_count' => function ($commentQuery) use ($doctorId) {
                self::applyUnseenStaffCommentsConstraints($commentQuery, $doctorId);
            }])
            ->addSelect([
                'latest_unseen_staff_comment_id' => TestResultComment::query()
                    ->select('test_result_comments.id')
                    ->whereColumn('test_result_comments.test_result_id', 'test_results.id')
                    ->where('test_result_comments.author_type', TestResultComment::AUTHOR_STAFF)
                    ->whereRaw($watermarkSql, $watermarkBindings)
                    ->orderByDesc('test_result_comments.created_at')
                    ->limit(1),
            ]);
    }

    public function scopeWhereHasUnseenStaffCommentsForDoctor(Builder $query, int $doctorId): Builder
    {
        return $query->whereHas('comments', function ($commentQuery) use ($doctorId) {
            self::applyUnseenStaffCommentsConstraints($commentQuery, $doctorId);
        });
    }

    public static function applyUnseenStaffCommentsConstraints(Builder|Relation $commentQuery, int $doctorId): void
    {
        [$watermarkSql, $watermarkBindings] = self::unseenStaffCommentsWatermarkBinding($doctorId);

        $commentQuery
            ->where('author_type', TestResultComment::AUTHOR_STAFF)
            ->whereRaw($watermarkSql, $watermarkBindings);
    }

    /**
     * @return array{0: string, 1: array<int, int|string>}
     */
    public static function unseenStaffCommentsWatermarkBinding(int $doctorId): array
    {
        return [
            'test_result_comments.created_at > COALESCE(
                (SELECT comments_seen_at FROM test_result_doctor_views
                 WHERE test_result_doctor_views.test_result_id = test_result_comments.test_result_id
                   AND test_result_doctor_views.doctor_id = ?),
                ?)',
            [$doctorId, '1970-01-01 00:00:00'],
        ];
    }
}
