<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\LabTest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LabTestController extends Controller
{
    public function index()
    {
        $tests = LabTest::orderBy('name')->paginate(20);
        return response()->json($tests);
    }

    public function show(LabTest $labTest)
    {
        return response()->json($labTest);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $test = LabTest::create($data);

        return response()->json($test, 201);
    }

    public function update(Request $request, LabTest $labTest)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $labTest->update($data);

        return response()->json($labTest);
    }

    public function destroy(LabTest $labTest)
    {
        $labTest->delete();

        return response()->json(['ok' => true]);
    }
}

