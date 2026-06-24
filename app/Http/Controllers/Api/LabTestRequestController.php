<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LabTestRequest;
use App\Services\NotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class LabTestRequestController extends Controller
{
    public function index(Request $request)
    {
        $query = LabTestRequest::query()->with(['doctor', 'items']);

        if ($request->filled('status')) {
            $query->where('status', $request->string('status'));
        }
        if ($request->filled('doctor_id')) {
            $query->where('doctor_id', (int) $request->input('doctor_id'));
        }

        $requests = $query->orderByDesc('id')->paginate(20)->appends($request->query());

        return response()->json($requests);
    }

    public function show(LabTestRequest $labTestRequest)
    {
        $labTestRequest->load(['doctor', 'items']);

        return response()->json($labTestRequest);
    }

    public function update(Request $request, LabTestRequest $labTestRequest)
    {
        $validator = Validator::make($request->all(), [
            'status' => ['required', 'string', Rule::in(['reviewed', 'approved', 'rejected'])],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $previousStatus = $labTestRequest->status;
        $labTestRequest->status = $validator->validated()['status'];
        $labTestRequest->save();
        $labTestRequest->load(['doctor', 'items']);

        if ($previousStatus !== $labTestRequest->status) {
            $labTestRequest->loadMissing('doctor');
            if ($labTestRequest->doctor) {
                app(NotificationService::class)
                    ->sendLabTestRequestStatusNotification($labTestRequest->doctor, $labTestRequest);
            }
        }

        return response()->json($labTestRequest);
    }
}
