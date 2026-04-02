<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SliderController extends Controller
{
    public function index()
    {
        $sliders = Slider::orderBy('position')->get();
        foreach ($sliders as $slider) {
            $slider->image_url = asset('storage/'.$slider->image_path);
        }

        return response()->json($sliders);
    }

    public function show(Slider $slider)
    {
        return response()->json($slider);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['nullable', 'string', 'max:255'],
            'image' => ['required', 'image'],
            'position' => ['nullable', 'integer', 'min:0'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        $uploadDir = public_path('storage/sliders');
        if (! file_exists($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        $filename = time().'_'.uniqid().'_'.$request->file('image')->getClientOriginalName();
        $request->file('image')->move($uploadDir, $filename);
        $path = 'sliders/'.$filename;

        $slider = Slider::create([
            'title' => $data['title'] ?? null,
            'image_path' => $path,
            'position' => $data['position'] ?? 0,
        ]);

        return response()->json($slider, 201);
    }

    public function update(Request $request, Slider $slider)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['nullable', 'string', 'max:255'],
            'image' => ['nullable', 'image'],
            'position' => ['nullable', 'integer', 'min:0'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        if ($request->hasFile('image')) {
            if ($slider->image_path) {
                $oldPath = public_path('storage/'.$slider->image_path);
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }
            $uploadDir = public_path('storage/sliders');
            if (! file_exists($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }
            $filename = time().'_'.uniqid().'_'.$request->file('image')->getClientOriginalName();
            $request->file('image')->move($uploadDir, $filename);
            $slider->image_path = 'sliders/'.$filename;
        }

        $slider->title = $data['title'] ?? null;
        if (isset($data['position'])) {
            $slider->position = $data['position'];
        }
        $slider->save();

        return response()->json($slider);
    }

    public function destroy(Slider $slider)
    {
        if ($slider->image_path) {
            $filePath = public_path('storage/'.$slider->image_path);
            if (file_exists($filePath)) {
                unlink($filePath);
            }
        }
        $slider->delete();

        return response()->json(['ok' => true]);
    }
}
