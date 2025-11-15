<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\TestResult;
use App\Models\LabBranch;
use App\Services\NotificationService;
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
        $defaultBranch = auth()->user()->branch_assignment;
        return view('results.create', compact('doctors', 'labBranches', 'defaultBranch'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_name' => ['required', 'string', 'max:255'],
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['required', 'string', 'max:255'],
            'doctor_id' => ['required', 'exists:doctors,id'],
            'pdf' => ['required', 'file', 'mimetypes:application/pdf'],
        ]);
        $uploadDir = public_path('storage/results');
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        $filename = time() . '_' . uniqid() . '_' . $request->file('pdf')->getClientOriginalName();
        $request->file('pdf')->move($uploadDir, $filename);
        $path = 'results/' . $filename;
        $testResult = TestResult::create([
            'patient_name' => $data['patient_name'],
            'hospital' => $data['hospital'],
            'lab_branch' => $data['lab_branch'],
            'doctor_id' => $data['doctor_id'],
            'pdf_path' => $path,
        ]);
        
        // Send notification to the assigned doctor
        $doctor = Doctor::find($data['doctor_id']);
        if ($doctor) {
            $notificationService = new NotificationService();
            $notificationService->sendNewResultNotification($doctor, $testResult);
        }
        
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
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['required', 'string', 'max:255'],
            'doctor_id' => ['required', 'exists:doctors,id'],
            'pdf' => ['nullable', 'file', 'mimetypes:application/pdf'],
        ]);
        if ($request->hasFile('pdf')) {
            // Delete old PDF if exists
            if ($result->pdf_path) {
                $oldPath = public_path('storage/' . $result->pdf_path);
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }
            $uploadDir = public_path('storage/results');
            if (!file_exists($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }
            $filename = time() . '_' . uniqid() . '_' . $request->file('pdf')->getClientOriginalName();
            $request->file('pdf')->move($uploadDir, $filename);
            $path = 'results/' . $filename;
            $result->pdf_path = $path;
        }
        $result->patient_name = $data['patient_name'];
        $result->hospital = $data['hospital'];
        $result->lab_branch = $data['lab_branch'];
        $result->doctor_id = $data['doctor_id'];
        $result->save();
        return redirect()->route('results.index')->with('status', 'Result updated');
    }

    public function destroy(TestResult $result)
    {
        // Delete associated PDF file
        if ($result->pdf_path) {
            $filePath = public_path('storage/' . $result->pdf_path);
            if (file_exists($filePath)) {
                unlink($filePath);
            }
        }
        $result->delete();
        return back()->with('status', 'Result deleted');
    }
}


