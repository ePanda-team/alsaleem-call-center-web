<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Collection;

class TestResultComment extends Model
{
    use HasFactory;

    public const AUTHOR_DOCTOR = 'doctor';

    public const AUTHOR_STAFF = 'staff';

    protected $fillable = [
        'test_result_id',
        'author_type',
        'author_id',
        'body',
    ];

    public function testResult(): BelongsTo
    {
        return $this->belongsTo(TestResult::class);
    }

    public function toApiArray(?string $authorName = null): array
    {
        return [
            'id' => $this->id,
            'test_result_id' => $this->test_result_id,
            'author_type' => $this->author_type,
            'author_id' => $this->author_id,
            'author_name' => $authorName ?? $this->getAttribute('author_name'),
            'body' => $this->body,
            'created_at' => $this->created_at?->toIso8601String(),
        ];
    }

    /**
     * @param  Collection<int, TestResultComment>  $comments
     * @return array<int, array<string, mixed>>
     */
    public static function toApiArrayList(Collection $comments): array
    {
        self::hydrateAuthorNames($comments);

        return $comments->map(fn (self $comment) => $comment->toApiArray())->values()->all();
    }

    /**
     * @param  Collection<int, TestResultComment>  $comments
     */
    public static function hydrateAuthorNames(Collection $comments): void
    {
        if ($comments->isEmpty()) {
            return;
        }

        $doctorIds = $comments->where('author_type', self::AUTHOR_DOCTOR)
            ->pluck('author_id')
            ->unique()
            ->values();
        $userIds = $comments->where('author_type', self::AUTHOR_STAFF)
            ->pluck('author_id')
            ->unique()
            ->values();

        $doctorNames = $doctorIds->isEmpty()
            ? collect()
            : Doctor::query()->whereIn('id', $doctorIds)->pluck('name', 'id');
        $userNames = $userIds->isEmpty()
            ? collect()
            : User::query()->whereIn('id', $userIds)->pluck('name', 'id');

        foreach ($comments as $comment) {
            $name = null;
            if ($comment->author_type === self::AUTHOR_DOCTOR) {
                $name = $doctorNames->get($comment->author_id);
            } elseif ($comment->author_type === self::AUTHOR_STAFF) {
                $name = $userNames->get($comment->author_id);
            }

            $comment->setAttribute('author_name', $name);
        }
    }
}
