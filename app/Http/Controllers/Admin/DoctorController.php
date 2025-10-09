<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\Conversation;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index()
    {
        $doctors = Doctor::orderByDesc('id')->paginate(20);
        return view('admin.doctors.index', compact('doctors'));
    }

    public function create()
    {
        return view('admin.doctors.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:doctors,username'],
            'speciality' => ['nullable', 'string', 'max:255'],
            'experience_level' => ['required', 'in:junior,senior'],
            'password' => ['required', 'string', 'min:6'],
        ]);
        $doctor = Doctor::create($data);
        Conversation::firstOrCreate(['doctor_id' => $doctor->id]);
        return redirect()->route('admin.doctors.index')->with('status', 'Doctor created');
    }

    public function edit(Doctor $doctor)
    {
        return view('admin.doctors.edit', compact('doctor'));
    }

    public function update(Request $request, Doctor $doctor)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:doctors,username,' . $doctor->id],
            'speciality' => ['nullable', 'string', 'max:255'],
            'experience_level' => ['required', 'in:junior,senior'],
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


