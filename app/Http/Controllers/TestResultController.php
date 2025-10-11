<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\TestResult;
use App\Models\LabBranch;
use Illuminate\Http\Request;

class TestResultController extends Controller
{
    public function index(Request $request)
    {
        $query = TestResult::with('doctor');
        if ($request->filled('q')) {
            $q = $request->string('q');
            $query->where(function ($sub) use ($q) {
                $sub->where('patient_name', 'like', "%{$q}%")
                    ->orWhere('lab_branch', 'like', "%{$q}%");
            });
        }
        if ($request->filled('doctor_id')) {
            $query->where('doctor_id', (int) $request->input('doctor_id'));
        }
        $results = $query->orderByDesc('id')->paginate(20)->appends($request->query());
        return view('results.index', compact('results'));
    }

    public function create()
    {
        $doctors = Doctor::orderBy('name')->get();
        $labBranches = LabBranch::where('is_active', true)->orderBy('name')->get();
        return view('results.create', compact('doctors', 'labBranches'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_name' => ['required', 'string', 'max:255'],
            'lab_branch' => ['required', 'string', 'max:255'],
            'doctor_id' => ['required', 'exists:doctors,id'],
            'pdf' => ['required', 'file', 'mimetypes:application/pdf'],
        ]);
        $path = $request->file('pdf')->store('results', 'public');
        TestResult::create([
            'patient_name' => $data['patient_name'],
            'lab_branch' => $data['lab_branch'],
            'doctor_id' => $data['doctor_id'],
            'pdf_path' => $path,
        ]);
        return redirect()->route('results.index')->with('status', 'Result added');
    }

    public function edit(TestResult $result)
    {
        $doctors = Doctor::orderBy('name')->get();
        $labBranches = LabBranch::where('is_active', true)->orderBy('name')->get();
        return view('results.edit', compact('result', 'doctors', 'labBranches'));
    }

    public function update(Request $request, TestResult $result)
    {
        $data = $request->validate([
            'patient_name' => ['required', 'string', 'max:255'],
            'lab_branch' => ['required', 'string', 'max:255'],
            'doctor_id' => ['required', 'exists:doctors,id'],
            'pdf' => ['nullable', 'file', 'mimetypes:application/pdf'],
        ]);
        if ($request->hasFile('pdf')) {
            $result->pdf_path = $request->file('pdf')->store('results', 'public');
        }
        $result->patient_name = $data['patient_name'];
        $result->lab_branch = $data['lab_branch'];
        $result->doctor_id = $data['doctor_id'];
        $result->save();
        return redirect()->route('results.index')->with('status', 'Result updated');
    }

    public function destroy(TestResult $result)
    {
        $result->delete();
        return back()->with('status', 'Result deleted');
    }
}


