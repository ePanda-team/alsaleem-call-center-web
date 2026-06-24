<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\Patient;
use App\Models\TestResult;
use App\Services\NotificationService;
use App\Services\TestResultPdfStorage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ResultController extends Controller
{
    public function __construct(
        private TestResultPdfStorage $pdfStorage
    ) {}

    public function index(Request $request)
    {
        $query = TestResult::with(['doctor', 'patient'])->withCount('comments');
        if ($request->filled('q')) {
            $q = $request->string('q');
            $query->where(function ($sub) use ($q) {
                $sub->where('lab_branch', 'like', "%{$q}%")
                    ->orWhereHas('patient', function ($patientQuery) use ($q) {
                        $patientQuery->where('name', 'like', "%{$q}%");
                    });
            });
        }
        if ($request->filled('hospital')) {
            $h = $request->string('hospital');
            $query->where('hospital', 'like', '%'.$h.'%');
        }
        if ($request->filled('doctor_id')) {
            $query->where('doctor_id', (int) $request->input('doctor_id'));
        }
        if ($request->filled('patient_name')) {
            $name = $request->string('patient_name');
            $query->whereHas('patient', function ($patientQuery) use ($name) {
                $patientQuery->where('name', 'like', '%'.$name.'%');
            });
        }
        if ($request->filled('created_from')) {
            $query->whereDate('created_at', '>=', $request->string('created_from'));
        }
        if ($request->filled('created_to')) {
            $query->whereDate('created_at', '<=', $request->string('created_to'));
        }

        $results = $query->orderByDesc('id')->paginate(20)->appends($request->query());

        $results->getCollection()->transform(function (TestResult $result) {
            $result->setAttribute('pdf_path', $this->pdfStorage->staffPdfUrl($result));

            return $result;
        });

        return response()->json($results);
    }

    public function show(TestResult $result)
    {
        $result->load(['doctor', 'patient']);
        $result->loadCount('comments');
        $result->setAttribute('pdf_path', $this->pdfStorage->staffPdfUrl($result));

        return response()->json($result);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'patient_id' => ['nullable', 'integer', 'exists:patients,id'],
            'patient_name' => ['required_without:patient_id', 'string', 'max:255'],
            'patient_age' => ['nullable', 'integer', 'min:0', 'max:150'],
            'gender' => ['required_without:patient_id', 'string', Rule::in(['male', 'female', 'other'])],
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['required', 'string', 'max:255'],
            'doctor_id' => ['required', 'exists:doctors,id'],
            'pdf' => ['required', 'file', 'mimetypes:application/pdf'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        $path = $this->pdfStorage->store($request->file('pdf'));

        $patientId = $data['patient_id'] ?? null;
        if (! $patientId) {
            $patient = Patient::findOrCreateFromInput(
                $data['patient_name'],
                $data['patient_age'] ?? null,
                $data['gender']
            );
            $patientId = $patient->id;
        }

        $testResult = TestResult::create([
            'patient_id' => $patientId,
            'hospital' => $data['hospital'] ?? null,
            'lab_branch' => $data['lab_branch'],
            'doctor_id' => $data['doctor_id'],
            'pdf_path' => $path,
        ]);

        $testResult->load(['doctor', 'patient']);

        $doctor = Doctor::find($data['doctor_id']);
        if ($doctor) {
            $notificationService = new NotificationService;
            $notificationService->sendNewResultNotification($doctor, $testResult);
        }

        $testResult->setAttribute('pdf_path', $this->pdfStorage->staffPdfUrl($testResult));

        return response()->json($testResult, 201);
    }

    public function update(Request $request, TestResult $result)
    {
        $validator = Validator::make($request->all(), [
            'patient_id' => ['nullable', 'integer', 'exists:patients,id'],
            'patient_name' => ['required_without:patient_id', 'string', 'max:255'],
            'patient_age' => ['nullable', 'integer', 'min:0', 'max:150'],
            'gender' => ['required_without:patient_id', 'string', Rule::in(['male', 'female', 'other'])],
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['required', 'string', 'max:255'],
            'doctor_id' => ['required', 'exists:doctors,id'],
            'pdf' => ['nullable', 'file', 'mimetypes:application/pdf'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        if ($request->hasFile('pdf')) {
            $this->pdfStorage->delete($result->pdf_path);
            $result->pdf_path = $this->pdfStorage->store($request->file('pdf'));
        }

        if (! empty($data['patient_id'])) {
            $result->patient_id = $data['patient_id'];
        } else {
            $patient = Patient::findOrCreateFromInput(
                $data['patient_name'],
                $data['patient_age'] ?? null,
                $data['gender']
            );
            $result->patient_id = $patient->id;
        }

        $result->hospital = $data['hospital'] ?? null;
        $result->lab_branch = $data['lab_branch'];
        $result->doctor_id = $data['doctor_id'];
        $result->save();

        $result->load(['doctor', 'patient']);
        $result->setAttribute('pdf_path', $this->pdfStorage->staffPdfUrl($result));

        return response()->json($result);
    }

    public function destroy(TestResult $result)
    {
        $this->pdfStorage->delete($result->pdf_path);
        $result->delete();

        return response()->json(['ok' => true]);
    }
}
