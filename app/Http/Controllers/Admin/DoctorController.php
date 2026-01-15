<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\Conversation;
use Illuminate\Http\Request;

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
        $experienceLevels = config('doctor.experience_levels');
        return view('admin.doctors.index', compact('doctors', 'experienceLevels'));
    }

    public function create()
    {
        $specialties = Doctor::getSpecialties();
        $experienceLevels = config('doctor.experience_levels');
        return view('admin.doctors.create', compact('specialties', 'experienceLevels'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:doctors,username'],
            'speciality' => ['nullable', 'string', 'max:255'],
            'experience_level' => ['required', 'in:specialist,doctor,Consultant'],
            'phone' => ['nullable', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:6'],
        ]);
        $doctor = Doctor::create($data);
        Conversation::firstOrCreate(['doctor_id' => $doctor->id]);
        return redirect()->route('admin.doctors.index')->with('status', 'Doctor created');
    }

    public function edit(Doctor $doctor)
    {
        $specialties = Doctor::getSpecialties();
        $experienceLevels = config('doctor.experience_levels');
        return view('admin.doctors.edit', compact('doctor', 'specialties', 'experienceLevels'));
    }

    public function update(Request $request, Doctor $doctor)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:doctors,username,' . $doctor->id],
            'speciality' => ['nullable', 'string', 'max:255'],
            'experience_level' => ['required', 'in:specialist,doctor,Consultant'],
            'phone' => ['nullable', 'string', 'max:255'],
            'password' => ['nullable', 'string', 'min:6'],
        ]);
        if (empty($data['password'])) {
            unset($data['password']);
        }
        $doctor->update($data);
        return redirect()->route('admin.doctors.index')->with('status', 'Doctor updated');
    }

    public function destroy(Doctor $doctor)
    {
        $doctor->delete();
        return back()->with('status', 'Doctor deleted');
    }
}


