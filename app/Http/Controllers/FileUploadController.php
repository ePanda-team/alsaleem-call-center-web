<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class FileUploadController extends Controller
{
    /**
     * Upload a file and return its URL
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function upload(Request $request)
    {
        if ($this->likelyExceedsPostMaxSize($request)) {
            return response()->json([
                'message' => 'Upload failed',
                'errors' => [
                    'file' => [
                        'The request body is larger than PHP post_max_size ('.ini_get('post_max_size').'). Increase post_max_size and upload_max_filesize (e.g. in public/.user.ini or php.ini).',
                    ],
                ],
            ], 422);
        }

        if ($request->hasFile('file')) {
            $uploaded = $request->file('file');
            if (! $uploaded->isValid()) {
                return response()->json([
                    'message' => 'Upload failed',
                    'errors' => [
                        'file' => [$this->uploadErrorMessage($uploaded->getError())],
                    ],
                ], 422);
            }
        }

        $maxKb = (int) config('upload.max_file_size', 51200);

        $validator = Validator::make($request->all(), [
            'file' => ['required', 'file', 'max:'.$maxKb],
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
        $filename = time().'_'.Str::random(10).'_'.$sanitizedName.($extension ? '.'.$extension : '');

        // Store the file in public storage directory
        $uploadDir = public_path('storage/uploads');
        if (! file_exists($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        $file->move($uploadDir, $filename);
        $path = 'uploads/'.$filename;

        // Ensure proper MIME type is detected for audio files
        if (strtolower($extension) === 'webm' || $mimeType === 'audio/webm') {
            $mimeType = 'audio/webm'; // WebM with Opus codec
        } elseif (strtolower($extension) === 'ogg' || $mimeType === 'audio/ogg') {
            $mimeType = 'audio/ogg'; // OGG with Opus codec
        } elseif (strtolower($extension) === 'm4a' || $mimeType === 'audio/mp4' || $mimeType === 'audio/m4a') {
            $mimeType = 'audio/mp4'; // M4A files
        }

        // Generate the URL
        $url = asset('storage/'.$path);

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

    private function likelyExceedsPostMaxSize(Request $request): bool
    {
        if (! $request->isMethod('POST')) {
            return false;
        }
        $type = (string) $request->header('Content-Type', '');
        if (! str_contains($type, 'multipart/form-data')) {
            return false;
        }
        if ($request->hasFile('file')) {
            return false;
        }

        $contentLength = (int) $request->header('Content-Length', 0);
        if ($contentLength <= 0) {
            return false;
        }

        $postMaxBytes = $this->iniSizeToBytes((string) ini_get('post_max_size'));

        return $postMaxBytes > 0 && $contentLength > $postMaxBytes;
    }

    private function iniSizeToBytes(string $value): int
    {
        $value = trim($value);
        if ($value === '' || $value === '0') {
            return 0;
        }
        $unit = strtoupper(substr($value, -1));
        $number = (float) $value;

        return match ($unit) {
            'G' => (int) round($number * 1024 * 1024 * 1024),
            'M' => (int) round($number * 1024 * 1024),
            'K' => (int) round($number * 1024),
            default => (int) round((float) $value),
        };
    }

    private function uploadErrorMessage(int $errorCode): string
    {
        return match ($errorCode) {
            UPLOAD_ERR_INI_SIZE => 'The file exceeds the server PHP upload_max_filesize limit ('.ini_get('upload_max_filesize').'). Raise upload_max_filesize and post_max_size (e.g. public/.user.ini on shared hosting, or php.ini / IIS maxAllowedContentLength).',
            UPLOAD_ERR_FORM_SIZE => 'The file exceeds the MAX_FILE_SIZE limit.',
            UPLOAD_ERR_PARTIAL => 'The file was only partially uploaded.',
            UPLOAD_ERR_NO_FILE => 'No file was uploaded.',
            UPLOAD_ERR_NO_TMP_DIR => 'The server is missing a temporary upload directory.',
            UPLOAD_ERR_CANT_WRITE => 'Failed to write the file to disk.',
            UPLOAD_ERR_EXTENSION => 'A PHP extension blocked the file upload.',
            default => 'The file failed to upload.',
        };
    }
}
