<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Rules\MaxFileSize;
use App\Services\NotificationService;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    public function index()
    {
        $announcements = Announcement::withCount('views')->orderByDesc('id')->paginate(20);
        return view('admin.announcements.index', compact('announcements'));
    }

    public function create()
    {
        return view('admin.announcements.create');
    }

    public function store(Request $request)
    {
        // Debug: Log the request data
        \Log::info('Announcement store request:', [
            'title' => $request->title,
            'body' => $request->body,
            'target_specialties' => $request->target_specialties,
            'target_experience_levels' => $request->target_experience_levels,
            'media_count' => $request->hasFile('media') ? count($request->file('media')) : 0,
            'media_files' => $request->hasFile('media') ? array_map(function($file) {
                return [
                    'name' => $file->getClientOriginalName(),
                    'size' => $file->getSize(),
                    'mime' => $file->getMimeType(),
                    'error' => $file->getError()
                ];
            }, $request->file('media')) : [],
            'php_upload_max_filesize' => ini_get('upload_max_filesize'),
            'php_post_max_size' => ini_get('post_max_size'),
            'php_max_file_uploads' => ini_get('max_file_uploads')
        ]);

        // Check for upload errors before validation
        if ($request->hasFile('media')) {
            foreach ($request->file('media') as $index => $file) {
                if ($file->getError() !== UPLOAD_ERR_OK) {
                    $errorMessages = [
                        UPLOAD_ERR_INI_SIZE => 'File is too large (exceeds upload_max_filesize)',
                        UPLOAD_ERR_FORM_SIZE => 'File is too large (exceeds MAX_FILE_SIZE)',
                        UPLOAD_ERR_PARTIAL => 'File was only partially uploaded',
                        UPLOAD_ERR_NO_FILE => 'No file was uploaded',
                        UPLOAD_ERR_NO_TMP_DIR => 'Missing temporary folder',
                        UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
                        UPLOAD_ERR_EXTENSION => 'File upload stopped by extension',
                    ];
                    
                    $errorMessage = $errorMessages[$file->getError()] ?? 'Unknown upload error';
                    return back()->withErrors(['media.' . $index => $errorMessage])->withInput();
                }
            }
        }

        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'target_specialties' => ['nullable', 'array'],
            'target_specialties.*' => ['string', 'max:255'],
            'target_experience_levels' => ['nullable', 'array'],
            'target_experience_levels.*' => ['string', 'in:junior,senior'],
            'media' => ['nullable', 'array'],
            'media.*' => ['file', 'mimes:jpg,jpeg,png,gif,mp4,avi,mov,webm,ogg,mp3,wav,m4a,aac,pdf,doc,docx,txt', new MaxFileSize()],
        ]);
        
        $mediaFiles = [];
        if ($request->hasFile('media')) {
            $uploadDir = public_path('storage/announcements');
            if (!file_exists($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }
            foreach ($request->file('media') as $file) {
                $filename = time() . '_' . uniqid() . '_' . $file->getClientOriginalName();
                $file->move($uploadDir, $filename);
                $path = 'announcements/' . $filename;
                $mediaFiles[] = [
                    'path' => $path,
                    'type' => $file->getMimeType(),
                    'name' => $file->getClientOriginalName(),
                    'size' => $file->getSize(),
                ];
            }
            $data['media_files'] = $mediaFiles;
        }
        
        $announcement = Announcement::create($data);
        
        // Send notification to targeted doctors
        $notificationService = new NotificationService();
        $notificationService->sendAnnouncementNotification($announcement);
        
        return redirect()->route('admin.announcements.index')->with('status', 'Announcement created');
    }

    public function edit(Announcement $announcement)
    {
        return view('admin.announcements.edit', compact('announcement'));
    }

    public function update(Request $request, Announcement $announcement)
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'target_specialties' => ['nullable', 'array'],
            'target_specialties.*' => ['string', 'max:255'],
            'target_experience_levels' => ['nullable', 'array'],
            'target_experience_levels.*' => ['string', 'in:junior,senior'],
            'media' => ['nullable', 'array'],
            'media.*' => ['file', 'mimes:jpg,jpeg,png,gif,mp4,avi,mov,webm,ogg,mp3,wav,m4a,aac,pdf,doc,docx,txt', new MaxFileSize()],
        ]);
        
        $mediaFiles = $announcement->media_files ?? [];
        if ($request->hasFile('media')) {
            $uploadDir = public_path('storage/announcements');
            if (!file_exists($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }
            foreach ($request->file('media') as $file) {
                $filename = time() . '_' . uniqid() . '_' . $file->getClientOriginalName();
                $file->move($uploadDir, $filename);
                $path = 'announcements/' . $filename;
                $mediaFiles[] = [
                    'path' => $path,
                    'type' => $file->getMimeType(),
                    'name' => $file->getClientOriginalName(),
                    'size' => $file->getSize(),
                ];
            }
            $data['media_files'] = $mediaFiles;
        }
        
        $announcement->update($data);
        return redirect()->route('admin.announcements.index')->with('status', 'Announcement updated');
    }

    public function destroy(Announcement $announcement)
    {
        // Delete associated media files
        if ($announcement->media_files && is_array($announcement->media_files)) {
            foreach ($announcement->media_files as $media) {
                if (isset($media['path'])) {
                    $filePath = public_path('storage/' . $media['path']);
                    if (file_exists($filePath)) {
                        unlink($filePath);
                    }
                }
            }
        }
        $announcement->delete();
        return back()->with('status', 'Announcement deleted');
    }

    public function viewers(Announcement $announcement)
    {
        $viewers = $announcement->views()->with('doctor')->orderByDesc('viewed_at')->get();
        return response()->json($viewers);
    }
}


