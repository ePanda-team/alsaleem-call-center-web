<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Rules\MaxFileSize;
use App\Services\NotificationService;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    public function index(Request $request)
    {
        $announcements = Announcement::withCount('views')->orderByDesc('id')->paginate(20)->appends($request->query());
        return response()->json($announcements);
    }

    public function show(Announcement $announcement)
    {
        return response()->json($announcement);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'target_specialties' => ['nullable', 'array'],
            'target_specialties.*' => ['string', 'max:255'],
            'target_experience_levels' => ['nullable', 'array'],
            'target_experience_levels.*' => ['string', 'in:specialist,doctor,consultant'],
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
                $mediaFiles[] = [
                    'path' => 'announcements/' . $filename,
                    'type' => $file->getMimeType(),
                    'name' => $file->getClientOriginalName(),
                    'size' => $file->getSize(),
                ];
            }
            $data['media_files'] = $mediaFiles;
        }

        $announcement = Announcement::create($data);

        $notificationService = new NotificationService();
        $notificationService->sendAnnouncementNotification($announcement);

        return response()->json($announcement, 201);
    }

    public function update(Request $request, Announcement $announcement)
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'target_specialties' => ['nullable', 'array'],
            'target_specialties.*' => ['string', 'max:255'],
            'target_experience_levels' => ['nullable', 'array'],
            'target_experience_levels.*' => ['string', 'in:specialist,doctor,consultant'],
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
                $mediaFiles[] = [
                    'path' => 'announcements/' . $filename,
                    'type' => $file->getMimeType(),
                    'name' => $file->getClientOriginalName(),
                    'size' => $file->getSize(),
                ];
            }
            $data['media_files'] = $mediaFiles;
        }

        $announcement->update($data);

        return response()->json($announcement);
    }

    public function destroy(Announcement $announcement)
    {
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

        return response()->json(['ok' => true]);
    }

    public function viewers(Announcement $announcement)
    {
        $viewers = $announcement->views()->with('doctor')->orderByDesc('viewed_at')->get();
        return response()->json($viewers);
    }
}

