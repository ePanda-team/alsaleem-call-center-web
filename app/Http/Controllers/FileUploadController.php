<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FileUploadController extends Controller
{
    /**
     * Upload a file and return its URL
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function upload(Request $request)
    {
        $request->validate([
            'file' => ['required', 'file', 'max:' . (config('upload.max_file_size', 10240) * 1024)], // Convert KB to bytes
        ]);

        $file = $request->file('file');
        
        // Sanitize the original filename
        $originalName = $file->getClientOriginalName();
        $sanitizedName = preg_replace('/[^a-zA-Z0-9._-]/', '_', pathinfo($originalName, PATHINFO_FILENAME));
        $extension = $file->getClientOriginalExtension();
        
        // Generate a unique filename
        $filename = time() . '_' . Str::random(10) . '_' . $sanitizedName . ($extension ? '.' . $extension : '');
        
        // Store the file in public storage
        $path = $file->storeAs('uploads', $filename, 'public');
        
        // Generate the URL
        $url = asset('storage/' . $path);
        
        return response()->json([
            'success' => true,
            'url' => $url,
            'path' => $path,
            'filename' => $filename,
            'original_name' => $originalName,
            'size' => $file->getSize(),
            'mime_type' => $file->getMimeType(),
        ], 201);
    }
}

