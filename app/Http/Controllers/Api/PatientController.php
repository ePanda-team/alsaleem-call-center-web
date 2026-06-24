<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\TestResult;
use App\Services\TestResultPdfStorage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PatientController extends Controller
{
    public function __construct(
        private TestResultPdfStorage $pdfStorage
    ) {}

    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), Patient::listFilterValidationRules());

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $filters = $validator->validated();

        $query = Patient::query()->applyListAttributeFilters($filters);

        if (Patient::hasTestResultFilters($filters)) {
            $query->whereHas('testResults', function ($resultQuery) use ($filters) {
                Patient::applyTestResultFiltersForPatientList($resultQuery, $filters);
            });
        }

        $patients = $query->orderByDesc('id')->paginate(20)->appends($request->query());

        return response()->json($patients);
    }

    public function show(Patient $patient)
    {
        return response()->json($patient);
    }

    public function results(Request $request, Patient $patient)
    {
        $query = TestResult::query()
            ->with(['doctor', 'patient'])
            ->where('patient_id', $patient->id);

        if ($request->filled('doctor_id')) {
            $query->where('doctor_id', (int) $request->input('doctor_id'));
        }

        $results = $query->orderByDesc('id')->paginate(20)->appends($request->query());

        $results->getCollection()->transform(function (TestResult $result) {
            $result->setAttribute('pdf_path', $this->pdfStorage->staffPdfUrl($result));

            return $result;
        });

        return response()->json($results);
    }
}
