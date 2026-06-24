<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

return new class extends Migration
{
    public function up(): void
    {
        $publicResultsDir = public_path('storage/results');
        if (! is_dir($publicResultsDir)) {
            return;
        }

        Storage::disk('local')->makeDirectory('results');

        foreach (File::files($publicResultsDir) as $file) {
            $filename = $file->getFilename();
            $relativePath = 'results/'.$filename;

            if (Storage::disk('local')->exists($relativePath)) {
                continue;
            }

            Storage::disk('local')->put($relativePath, File::get($file->getPathname()));
            unlink($file->getPathname());
        }
    }

    public function down(): void
    {
        $publicResultsDir = public_path('storage/results');
        if (! is_dir($publicResultsDir)) {
            mkdir($publicResultsDir, 0755, true);
        }

        $files = Storage::disk('local')->files('results');
        foreach ($files as $relativePath) {
            $filename = basename($relativePath);
            $target = $publicResultsDir.'/'.$filename;

            if (! file_exists($target)) {
                File::put($target, Storage::disk('local')->get($relativePath));
            }
        }
    }
};
