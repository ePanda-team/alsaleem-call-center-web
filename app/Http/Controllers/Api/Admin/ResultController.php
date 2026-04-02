<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\TestResult;
use App\Services\NotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        if ($request->filled('hospital')) {
            $h = $request->string('hospital');
            $query->where('hospital', 'like', '%'.$h.'%');
        }
        if ($request->filled('doctor_id')) {
            $query->where('doctor_id', (int) $request->input('doctor_id'));
        }
        if ($request->filled('created_from')) {
            $query->whereDate('created_at', '>=', $request->string('created_from'));
        }
        if ($request->filled('created_to')) {
            $query->whereDate('created_at', '<=', $request->string('created_to'));
        }

        $results = $query->orderByDesc('id')->paginate(20)->appends($request->query());

        $results->getCollection()->transform(function (TestResult $result) {
            $result->setAttribute('pdf_path', $this->publicPdfUrl($result->getRawOriginal('pdf_path') ?? $result->pdf_path));

            return $result;
        });

        return response()->json($results);
    }

    public function show(TestResult $result)
    {
        $result->load('doctor');
        $result->setAttribute('pdf_path', $this->publicPdfUrl($result->getRawOriginal('pdf_path') ?? $result->pdf_path));

        return response()->json($result);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'patient_name' => ['required', 'string', 'max:255'],
            'patient_age' => ['nullable', 'integer', 'min:0', 'max:150'],
            'hospital' => ['nullable', 'string', 'max:255'],
            'lab_branch' => ['required', 'string', 'max:255'],
            'doctor_id' => ['required', 'exists:doctors,id'],
            'pdf' => ['required', 'file', 'mimetypes:application/pdf'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

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

        $testResult->setAttribute('pdf_path', $this->publicPdfUrl($testResult->pdf_path));

        return response()->json($testResult, 201);
    }

    public function update(Request $request, TestResult $result)
    {
        $validator = Validator::make($request->all(), [
            'patient_name' => ['required', 'string', 'max:255'],
            'patient_age' => ['nullable', 'integer', 'min:0', 'max:150'],
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

        $result->load('doctor');
        $result->setAttribute('pdf_path', $this->publicPdfUrl($result->getRawOriginal('pdf_path') ?? $result->pdf_path));

        return response()->json($result);
    }

    public function destroy(TestResult $result)
    {
        $result->delete();

        return response()->json(['ok' => true]);
    }

    private function publicPdfUrl(?string $path): ?string
    {
        if ($path === null || $path === '') {
            return null;
        }
        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
            return $path;
        }

        return asset('storage/'.$path);
    }
}

