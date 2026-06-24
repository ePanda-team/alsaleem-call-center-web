<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\StaffNotification;
use Illuminate\Http\Request;

class StaffNotificationController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $query = StaffNotification::query()
            ->where('user_id', $user->id)
            ->orderByDesc('id');

        if ($request->boolean('unread_only')) {
            $query->whereNull('read_at');
        }

        $notifications = $query->paginate(20)->appends($request->query());

        return response()->json($notifications);
    }

    public function unreadCount(Request $request)
    {
        $count = StaffNotification::query()
            ->where('user_id', $request->user()->id)
            ->whereNull('read_at')
            ->count();

        return response()->json(['count' => $count]);
    }

    public function markRead(Request $request, StaffNotification $notification)
    {
        abort_unless((int) $notification->user_id === (int) $request->user()->id, 404);

        if ($notification->read_at === null) {
            $notification->read_at = now();
            $notification->save();
        }

        return response()->json(['ok' => true]);
    }

    public function markAllRead(Request $request)
    {
        StaffNotification::query()
            ->where('user_id', $request->user()->id)
            ->whereNull('read_at')
            ->update(['read_at' => now()]);

        return response()->json(['ok' => true]);
    }
}
