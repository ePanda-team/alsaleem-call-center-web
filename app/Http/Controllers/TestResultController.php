<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\LabBranch;
use App\Models\TestResult;
use App\Services\NotificationService;
use App\Services\TestResultPdfStorage;
use Illuminate\Http\Request;

class TestResultController extends Controller
{
    public function __construct(
        private TestResultPdfStorage $pdfStorage
    ) {}

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
            'patient_age' => ['nullable', 'integer', 'min:0', 'max:150'],
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['required', 'string', 'max:255'],
            'doctor_id' => ['required', 'exists:doctors,id'],
            'pdf' => ['required', 'file', 'mimetypes:application/pdf'],
        ]);

        $path = $this->pdfStorage->store($request->file('pdf'));

        $testResult = TestResult::create([
            'patient_name' => $data['patient_name'],
            'patient_age' => $data['patient_age'] ?? null,
            'hospital' => $data['hospital'],
            'lab_branch' => $data['lab_branch'],
            'doctor_id' => $data['doctor_id'],
            'pdf_path' => $path,
        ]);

        $doctor = Doctor::find($data['doctor_id']);
        if ($doctor) {
            $notificationService = new NotificationService;
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
            'patient_age' => ['nullable', 'integer', 'min:0', 'max:150'],
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['required', 'string', 'max:255'],
            'doctor_id' => ['required', 'exists:doctors,id'],
            'pdf' => ['nullable', 'file', 'mimetypes:application/pdf'],
        ]);

        if ($request->hasFile('pdf')) {
            $this->pdfStorage->delete($result->pdf_path);
            $result->pdf_path = $this->pdfStorage->store($request->file('pdf'));
        }

        $result->patient_name = $data['patient_name'];
        $result->patient_age = $data['patient_age'] ?? null;
        $result->hospital = $data['hospital'];
        $result->lab_branch = $data['lab_branch'];
        $result->doctor_id = $data['doctor_id'];
        $result->save();

        return redirect()->route('results.index')->with('status', 'Result updated');
    }

    public function destroy(TestResult $result)
    {
        $this->pdfStorage->delete($result->pdf_path);
        $result->delete();

        return back()->with('status', 'Result deleted');
    }
}
