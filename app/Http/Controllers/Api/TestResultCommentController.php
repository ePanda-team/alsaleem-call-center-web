<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TestResult;
use App\Models\TestResultComment;
use App\Services\NotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestResultCommentController extends Controller
{
    public function index(Request $request, TestResult $result)
    {
        $comments = TestResultComment::query()
            ->where('test_result_id', $result->id)
            ->orderBy('created_at')
            ->paginate(50)
            ->appends($request->query());

        $comments->setCollection(
            $comments->getCollection()->tap(fn ($items) => TestResultComment::hydrateAuthorNames($items))
        );

        $comments->getCollection()->transform(
            fn (TestResultComment $comment) => $comment->toApiArray()
        );

        return response()->json($comments);
    }

    public function store(Request $request, TestResult $result)
    {
        $validator = Validator::make($request->all(), [
            'body' => ['required', 'string', 'min:1', 'max:20000'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $user = $request->user();

        $comment = TestResultComment::query()->create([
            'test_result_id' => $result->id,
            'author_type' => TestResultComment::AUTHOR_STAFF,
            'author_id' => $user->id,
            'body' => $validator->validated()['body'],
        ]);

        $comment->setAttribute('author_name', $user->name);

        $result->loadMissing(['doctor', 'patient']);
        if ($result->doctor) {
            app(NotificationService::class)
                ->sendStaffResultCommentNotification($result->doctor, $result, $comment);
        }

        return response()->json($comment->toApiArray(), 201);
    }
}
