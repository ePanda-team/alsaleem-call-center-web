<?php

namespace App\Http\Controllers\Doctor;

use App\Http\Controllers\Controller;
use App\Models\TestResult;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    public function index()
    {
        $doctorId = auth('doctor')->id();
        $results = TestResult::where('doctor_id', $doctorId)->orderByDesc('id')->paginate(20);
        return view('doctor.results.index', compact('results'));
    }

    public function show(TestResult $result)
    {
        abort_unless($result->doctor_id === auth('doctor')->id(), 403);
        return view('doctor.results.show', compact('result'));
    }

    public function comment(Request $request, TestResult $result)
    {
        abort_unless($result->doctor_id === auth('doctor')->id(), 403);
        $data = $request->validate([
            'doctor_comment' => ['nullable', 'string'],
        ]);
        $result->doctor_comment = $data['doctor_comment'] ?? null;
        $result->save();
        return back()->with('status', 'Comment saved');
    }
}


