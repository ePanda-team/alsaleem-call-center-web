<?php

namespace App\Services;

use App\Models\TestResult;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class TestResultPdfStorage
{
    private const DISK = 'local';

    public function store(UploadedFile $file): string
    {
        $filename = time().'_'.uniqid().'_'.$file->getClientOriginalName();
        $relativePath = 'results/'.$filename;

        $file->storeAs('results', $filename, self::DISK);

        return $relativePath;
    }

    public function delete(?string $relativePath): void
    {
        if ($relativePath === null || $relativePath === '') {
            return;
        }

        if (Storage::disk(self::DISK)->exists($relativePath)) {
            Storage::disk(self::DISK)->delete($relativePath);
        }

        $legacyPath = public_path('storage/'.$relativePath);
        if (file_exists($legacyPath)) {
            unlink($legacyPath);
        }
    }

    public function exists(string $relativePath): bool
    {
        if (Storage::disk(self::DISK)->exists($relativePath)) {
            return true;
        }

        return file_exists(public_path('storage/'.$relativePath));
    }

    public function absolutePath(string $relativePath): ?string
    {
        if (Storage::disk(self::DISK)->exists($relativePath)) {
            return Storage::disk(self::DISK)->path($relativePath);
        }

        $legacyPath = public_path('storage/'.$relativePath);
        if (file_exists($legacyPath)) {
            return $legacyPath;
        }

        return null;
    }

    public function streamResponse(TestResult $result): StreamedResponse
    {
        $relativePath = $result->getRawOriginal('pdf_path') ?? $result->pdf_path;

        abort_unless($relativePath && $this->exists($relativePath), 404);

        $absolutePath = $this->absolutePath($relativePath);
        $filename = 'result-'.$result->id.'.pdf';

        return response()->stream(function () use ($absolutePath) {
            $stream = fopen($absolutePath, 'rb');
            fpassthru($stream);
            fclose($stream);
        }, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="'.$filename.'"',
            'Cache-Control' => 'private, no-store',
        ]);
    }

    public function doctorPdfUrl(TestResult $result): ?string
    {
        if (! $result->pdf_path) {
            return null;
        }

        return url('/api/doctor/results/'.$result->id.'/pdf');
    }

    public function staffPdfUrl(TestResult $result): ?string
    {
        if (! $result->pdf_path) {
            return null;
        }

        return url('/api/results/'.$result->id.'/pdf');
    }
}
