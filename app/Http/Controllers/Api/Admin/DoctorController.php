<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Conversation;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DoctorController extends Controller
{
    public function index(Request $request)
    {
        $query = Doctor::query();
        if ($request->filled('q')) {
            $q = $request->string('q');
            $query->where(function ($sub) use ($q) {
                $sub->where('name', 'like', "%{$q}%")
                    ->orWhere('username', 'like', "%{$q}%")
                    ->orWhere('speciality', 'like', "%{$q}%");
            });
        }
        if ($request->filled('experience')) {
            $query->where('experience_level', $request->string('experience'));
        }

        $doctors = $query->orderByDesc('id')->paginate(20)->appends($request->query());

        return response()->json($doctors);
    }

    public function show(Doctor $doctor)
    {
        return response()->json($doctor);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:doctors,username'],
            'speciality' => ['nullable', 'string', 'max:255'],
            'experience_level' => ['required', 'in:specialist,doctor,consultant'],
            'phone' => ['nullable', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $doctor = Doctor::create($data);
        Conversation::firstOrCreate(['doctor_id' => $doctor->id]);

        return response()->json($doctor, 201);
    }

    public function update(Request $request, Doctor $doctor)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:doctors,username,' . $doctor->id],
            'speciality' => ['nullable', 'string', 'max:255'],
            'experience_level' => ['required', 'in:specialist,doctor,consultant'],
            'phone' => ['nullable', 'string', 'max:255'],
            'password' => ['nullable', 'string', 'min:6'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        if (empty($data['password'])) {
            unset($data['password']);
        }

        $doctor->update($data);

        return response()->json($doctor);
    }

    public function destroy(Doctor $doctor)
    {
        $doctor->delete();

        return response()->json(['ok' => true]);
    }
}

