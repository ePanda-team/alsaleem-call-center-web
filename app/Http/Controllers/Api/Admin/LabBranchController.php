<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\LabBranch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LabBranchController extends Controller
{
    public function index()
    {
        $branches = LabBranch::orderBy('name')->paginate(20);
        return response()->json($branches);
    }

    public function show(LabBranch $labBranch)
    {
        return response()->json($labBranch);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'address' => ['nullable', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'is_active' => ['required', 'boolean'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $branch = LabBranch::create($data);

        return response()->json($branch, 201);
    }

    public function update(Request $request, LabBranch $labBranch)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'address' => ['nullable', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'is_active' => ['required', 'boolean'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $labBranch->update($data);

        return response()->json($labBranch);
    }

    public function destroy(LabBranch $labBranch)
    {
        $labBranch->delete();

        return response()->json(['ok' => true]);
    }
}

