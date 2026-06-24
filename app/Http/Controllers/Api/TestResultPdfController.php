<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TestResult;
use App\Services\TestResultPdfStorage;
use Illuminate\Http\Request;

class TestResultPdfController extends Controller
{
    public function __construct(
        private TestResultPdfStorage $pdfStorage
    ) {}

    public function doctorShow(Request $request, TestResult $result)
    {
        $doctor = $request->attributes->get('doctor');

        abort_unless($result->doctor_id === $doctor->id, 404);

        return $this->pdfStorage->streamResponse($result);
    }

    public function staffShow(TestResult $result)
    {
        return $this->pdfStorage->streamResponse($result);
    }
}
