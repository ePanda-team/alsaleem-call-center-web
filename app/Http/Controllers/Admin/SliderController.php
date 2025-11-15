<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function index()
    {
        $sliders = Slider::orderBy('position')->get();
        return view('admin.sliders.index', compact('sliders'));
    }

    public function create()
    {
        return view('admin.sliders.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['nullable', 'string', 'max:255'],
            'image' => ['required', 'image'],
            'position' => ['nullable', 'integer', 'min:0'],
        ]);
        $uploadDir = public_path('storage/sliders');
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        $filename = time() . '_' . uniqid() . '_' . $request->file('image')->getClientOriginalName();
        $request->file('image')->move($uploadDir, $filename);
        $path = 'sliders/' . $filename;
        Slider::create([
            'title' => $data['title'] ?? null,
            'image_path' => $path,
            'position' => $data['position'] ?? 0,
        ]);
        return redirect()->route('admin.sliders.index')->with('status', 'Slider created');
    }

    public function edit(Slider $slider)
    {
        return view('admin.sliders.edit', compact('slider'));
    }

    public function update(Request $request, Slider $slider)
    {
        $data = $request->validate([
            'title' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'image'],
            'position' => ['nullable', 'integer', 'min:0'],
        ]);
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($slider->image_path) {
                $oldPath = public_path('storage/' . $slider->image_path);
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }
            $uploadDir = public_path('storage/sliders');
            if (!file_exists($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }
            $filename = time() . '_' . uniqid() . '_' . $request->file('image')->getClientOriginalName();
            $request->file('image')->move($uploadDir, $filename);
            $path = 'sliders/' . $filename;
            $slider->image_path = $path;
        }
        $slider->title = $data['title'] ?? null;
        if (isset($data['position'])) {
            $slider->position = $data['position'];
        }
        $slider->save();
        return redirect()->route('admin.sliders.index')->with('status', 'Slider updated');
    }

    public function destroy(Slider $slider)
    {
        // Delete associated image file
        if ($slider->image_path) {
            $filePath = public_path('storage/' . $slider->image_path);
            if (file_exists($filePath)) {
                unlink($filePath);
            }
        }
        $slider->delete();
        return back()->with('status', 'Slider deleted');
    }
}


