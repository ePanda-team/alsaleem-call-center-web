<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\TestResult;
use App\Services\NotificationService;
use Illuminate\Http\Request;

class ResultController extends Controller
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

        return response()->json($results);
    }

    public function show(TestResult $result)
    {
        $result->load('doctor');
        return response()->json($result);
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

        $uploadDir = public_path('storage/results');
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        $filename = time() . '_' . uniqid() . '_' . $request->file('pdf')->getClientOriginalName();
        $request->file('pdf')->move($uploadDir, $filename);
        $path = 'results/' . $filename;

        $testResult = TestResult::create([
            'patient_name' => $data['patient_name'],
            'patient_age' => $data['patient_age'] ?? null,
            'hospital' => $data['hospital'] ?? null,
            'lab_branch' => $data['lab_branch'],
            'doctor_id' => $data['doctor_id'],
            'pdf_path' => $path,
        ]);

        $doctor = Doctor::find($data['doctor_id']);
        if ($doctor) {
            $notificationService = new NotificationService();
            $notificationService->sendNewResultNotification($doctor, $testResult);
        }

        return response()->json($testResult, 201);
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
            $result->pdf_path = 'results/' . $filename;
        }

        $result->patient_name = $data['patient_name'];
        $result->patient_age = $data['patient_age'] ?? null;
        $result->hospital = $data['hospital'] ?? null;
        $result->lab_branch = $data['lab_branch'];
        $result->doctor_id = $data['doctor_id'];
        $result->save();

        return response()->json($result);
    }

    public function destroy(TestResult $result)
    {
        $result->delete();

        return response()->json(['ok' => true]);
    }
}

