<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LabTest;
use Illuminate\Http\Request;

class LabTestController extends Controller
{
    public function index(Request $request)
    {
        $query = LabTest::query();
        if ($request->filled('q')) {
            $q = $request->string('q');
            $query->where('name', 'like', "%{$q}%");
        }
        $labTests = $query->orderBy('name')->paginate(20)->appends($request->query());
        return view('admin.lab_tests.index', compact('labTests'));
    }

    public function create()
    {
        return view('admin.lab_tests.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);
        LabTest::create($data);
        return redirect()->route('admin.lab-tests.index')->with('status', 'Lab Test created');
    }

    public function edit(LabTest $lab_test)
    {
        return view('admin.lab_tests.edit', [ 'labTest' => $lab_test ]);
    }

    public function update(Request $request, LabTest $lab_test)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);
        $lab_test->update($data);
        return redirect()->route('admin.lab-tests.index')->with('status', 'Lab Test updated');
    }

    public function destroy(LabTest $lab_test)
    {
        $lab_test->delete();
        return back()->with('status', 'Lab Test deleted');
    }
}


