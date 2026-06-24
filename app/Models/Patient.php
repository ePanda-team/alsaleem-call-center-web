<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Validation\Rule;

class Patient extends Model
{
    use HasFactory;

    public const GENDERS = ['male', 'female', 'other', 'unknown'];

    protected $fillable = [
        'name',
        'birth_year',
        'gender',
    ];

    protected $appends = [
        'age',
    ];

    protected function casts(): array
    {
        return [
            'birth_year' => 'integer',
        ];
    }

    public function testResults(): HasMany
    {
        return $this->hasMany(TestResult::class);
    }

    public function getAgeAttribute(): ?int
    {
        if ($this->birth_year === null) {
            return null;
        }

        return (int) now()->year - (int) $this->birth_year;
    }

    public static function birthYearFromAge(?int $age): ?int
    {
        if ($age === null) {
            return null;
        }

        return (int) now()->year - $age;
    }

    public static function findOrCreateFromInput(string $name, ?int $age, string $gender): self
    {
        $birthYear = self::birthYearFromAge($age);

        return self::query()->firstOrCreate(
            [
                'name' => $name,
                'birth_year' => $birthYear,
                'gender' => $gender,
            ],
            []
        );
    }

    /**
     * @return array<string, array<int, mixed>>
     */
    public static function listFilterValidationRules(): array
    {
        return [
            'patient_name' => ['nullable', 'string', 'max:255'],
            'q' => ['nullable', 'string', 'max:255'],
            'patient_age' => ['nullable', 'integer', 'min:0', 'max:150'],
            'age' => ['nullable', 'integer', 'min:0', 'max:150'],
            'gender' => ['nullable', 'string', Rule::in(self::GENDERS)],
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['nullable', 'string', 'max:255'],
            'branch' => ['nullable', 'string', 'max:255'],
            'has_comments' => ['nullable', 'boolean'],
        ];
    }

    /**
     * @param  array<string, mixed>  $filters
     */
    public static function resolvedSearchTerm(array $filters): ?string
    {
        return $filters['patient_name'] ?? $filters['q'] ?? null;
    }

    /**
     * @param  array<string, mixed>  $filters
     */
    public static function resolvedAge(array $filters): ?int
    {
        $age = $filters['patient_age'] ?? $filters['age'] ?? null;

        return $age !== null ? (int) $age : null;
    }

    /**
     * @param  array<string, mixed>  $filters
     */
    public static function resolvedBranch(array $filters): ?string
    {
        return $filters['lab_branch'] ?? $filters['branch'] ?? null;
    }

    /**
     * @param  array<string, mixed>  $filters
     */
    public static function hasTestResultFilters(array $filters): bool
    {
        return ! empty($filters['hospital'])
            || ! empty(self::resolvedBranch($filters))
            || ! empty($filters['has_comments']);
    }

    public function scopeWithUnseenResultsCountForDoctor(Builder $query, int $doctorId): Builder
    {
        return $query->withCount([
            'testResults as unseen_results_count' => function ($resultQuery) use ($doctorId) {
                $resultQuery->unseenForDoctor($doctorId);
            },
        ]);
    }

    /**
     * @param  array<string, mixed>  $filters
     */
    public function scopeApplyListAttributeFilters(Builder $query, array $filters): Builder
    {
        $search = self::resolvedSearchTerm($filters);
        $age = self::resolvedAge($filters);

        return $query
            ->when($search, function ($q) use ($search) {
                $q->where('name', 'like', '%'.$search.'%');
            })
            ->when($age !== null, function ($q) use ($age) {
                $q->where('birth_year', self::birthYearFromAge($age));
            })
            ->when(! empty($filters['gender']), function ($q) use ($filters) {
                $q->where('gender', $filters['gender']);
            });
    }

    /**
     * @param  array<string, mixed>  $filters
     */
    public static function applyTestResultFiltersForPatientList($resultQuery, array $filters, ?int $doctorId = null): void
    {
        if ($doctorId !== null) {
            $resultQuery->where('doctor_id', $doctorId);
        }

        if (! empty($filters['hospital'])) {
            $resultQuery->where('hospital', 'like', '%'.$filters['hospital'].'%');
        }

        $branch = self::resolvedBranch($filters);
        if (! empty($branch)) {
            $resultQuery->where('lab_branch', 'like', '%'.$branch.'%');
        }

        if (! empty($filters['has_comments'])) {
            if ($doctorId !== null) {
                $resultQuery->whereHas('comments', function ($commentQuery) use ($doctorId) {
                    TestResult::applyUnseenStaffCommentsConstraints($commentQuery, $doctorId);
                });
            } else {
                $resultQuery->has('comments');
            }
        }
    }
}
