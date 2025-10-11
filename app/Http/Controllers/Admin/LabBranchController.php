<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LabBranch;
use Illuminate\Http\Request;

class LabBranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = LabBranch::query();

        // Filter by name
        if ($request->filled('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        // Filter by address
        if ($request->filled('address')) {
            $query->where('address', 'like', '%' . $request->address . '%');
        }

        // Filter by status
        if ($request->filled('is_active')) {
            $query->where('is_active', $request->boolean('is_active'));
        }

        $labBranches = $query->orderBy('name')->paginate(15);

        return view('admin.lab_branches.index', compact('labBranches'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.lab_branches.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:lab_branches,name',
            'address' => 'nullable|string|max:500',
            'phone' => 'nullable|string|max:20',
            'is_active' => 'boolean'
        ]);

        LabBranch::create($request->all());

        return redirect()->route('admin.lab-branches.index')
            ->with('status', __('messages.lab_branch_created_successfully'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LabBranch $labBranch)
    {
        return view('admin.lab_branches.edit', compact('labBranch'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LabBranch $labBranch)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:lab_branches,name,' . $labBranch->id,
            'address' => 'nullable|string|max:500',
            'phone' => 'nullable|string|max:20',
            'is_active' => 'boolean'
        ]);

        $labBranch->update($request->all());

        return redirect()->route('admin.lab-branches.index')
            ->with('status', __('messages.lab_branch_updated_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LabBranch $labBranch)
    {
        $labBranch->delete();

        return redirect()->route('admin.lab-branches.index')
            ->with('status', __('messages.lab_branch_deleted_successfully'));
    }
}
