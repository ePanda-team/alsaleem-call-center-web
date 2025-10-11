<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
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
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
        ]);
        Announcement::create($data);
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
        ]);
        $announcement->update($data);
        return redirect()->route('admin.announcements.index')->with('status', 'Announcement updated');
    }

    public function destroy(Announcement $announcement)
    {
        $announcement->delete();
        return back()->with('status', 'Announcement deleted');
    }

    public function viewers(Announcement $announcement)
    {
        $viewers = $announcement->views()->with('doctor')->orderByDesc('viewed_at')->get();
        return response()->json($viewers);
    }
}


