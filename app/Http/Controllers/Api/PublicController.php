<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LabTest;
use App\Models\Slider;

class PublicController extends Controller
{
    public function sliders()
    {
        $sliders = Slider::orderBy('position')
            ->limit(3)
            ->get()
            ->map(function ($s) {
                return [
                    'id' => $s->id,
                    'title' => $s->title,
                    'image_url' => asset('storage/'.$s->image_path),
                    'position' => $s->position,
                    'url' => $s->url,
                ];
            });

        return response()->json($sliders);
    }

    public function labTests()
    {
        $tests = LabTest::orderBy('name')->get(['id', 'name', 'description']);

        return response()->json($tests);
    }
}
