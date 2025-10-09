<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        $path = $request->file('image')->store('sliders', 'public');
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
            $path = $request->file('image')->store('sliders', 'public');
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
        $slider->delete();
        return back()->with('status', 'Slider deleted');
    }
}


