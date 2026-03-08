<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\LabBranch;
use Illuminate\Http\Request;

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
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'address' => ['nullable', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'is_active' => ['required', 'boolean'],
        ]);

        $branch = LabBranch::create($data);

        return response()->json($branch, 201);
    }

    public function update(Request $request, LabBranch $labBranch)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'address' => ['nullable', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'is_active' => ['required', 'boolean'],
        ]);

        $labBranch->update($data);

        return response()->json($labBranch);
    }

    public function destroy(LabBranch $labBranch)
    {
        $labBranch->delete();

        return response()->json(['ok' => true]);
    }
}

