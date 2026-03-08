<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Specialty;
use Illuminate\Http\Request;

class SpecialtyController extends Controller
{
    public function index(Request $request)
    {
        $query = Specialty::query();
        if ($request->filled('q')) {
            $q = $request->string('q');
            $query->where(function ($sub) use ($q) {
                $sub->where('name_en', 'like', "%{$q}%")
                    ->orWhere('name_ar', 'like', "%{$q}%");
            });
        }
        $specialties = $query->orderBy('name_en')->paginate(50)->appends($request->query());

        return response()->json($specialties);
    }

    public function show(Specialty $specialty)
    {
        return response()->json($specialty);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name_en' => ['required', 'string', 'max:255', 'unique:specialties,name_en'],
            'name_ar' => ['required', 'string', 'max:255', 'unique:specialties,name_ar'],
        ]);

        $specialty = Specialty::create($data);

        return response()->json($specialty, 201);
    }

    public function update(Request $request, Specialty $specialty)
    {
        $data = $request->validate([
            'name_en' => ['required', 'string', 'max:255', 'unique:specialties,name_en,' . $specialty->id],
            'name_ar' => ['required', 'string', 'max:255', 'unique:specialties,name_ar,' . $specialty->id],
        ]);

        $specialty->update($data);

        return response()->json($specialty);
    }

    public function destroy(Specialty $specialty)
    {
        $specialty->delete();

        return response()->json(['ok' => true]);
    }
}

