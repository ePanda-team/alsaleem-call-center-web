<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        
        // Get file properties before moving (since move() invalidates the file object)
        $originalName = $file->getClientOriginalName();
        $fileSize = $file->getSize();
        $mimeType = $file->getMimeType();
        
        // Sanitize the original filename
        $sanitizedName = preg_replace('/[^a-zA-Z0-9._-]/', '_', pathinfo($originalName, PATHINFO_FILENAME));
        $extension = $file->getClientOriginalExtension();
        
        // Generate a unique filename
        $filename = time() . '_' . Str::random(10) . '_' . $sanitizedName . ($extension ? '.' . $extension : '');
        
        // Store the file in public storage directory
        $uploadDir = public_path('storage/uploads');
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        $file->move($uploadDir, $filename);
        $path = 'uploads/' . $filename;
        
        // For M4A files, ensure proper MIME type is detected
        if (strtolower($extension) === 'm4a' || $mimeType === 'audio/mp4' || $mimeType === 'audio/m4a') {
            $mimeType = 'audio/mp4'; // Standardize to audio/mp4 for M4A files
        }
        
        // Generate the URL
        $url = asset('storage/' . $path);
        
        return response()->json([
            'success' => true,
            'url' => $url,
            'path' => $path,
            'filename' => $filename,
            'original_name' => $originalName,
            'size' => $fileSize,
            'mime_type' => $mimeType,
        ], 201);
    }
}

