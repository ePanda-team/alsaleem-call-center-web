<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use App\Services\NotificationService;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function updateConversation(Request $request, Conversation $conversation)
    {
        $data = $request->validate([
            'body' => ['nullable', 'string'],
            'sender_type' => ['required', 'in:agent,doctor'],
        ]);

        $conversation->last_message_at = now();
        $conversation->last_message_preview = $data['body']
            ? mb_substr($data['body'], 0, 200)
            : ($data['sender_type'] === 'agent' ? 'Attachment' : 'Attachment');

        if ($data['sender_type'] === 'doctor') {
            $conversation->unread_doctor_count = $conversation->unread_doctor_count + 1;
        }

        $conversation->save();

        $notificationService = new NotificationService();
        $notificationService->sendNewMessageNotification($conversation->doctor, $conversation);

        return response()->json(['ok' => true]);
    }

    public function storeMessage(Request $request, Conversation $conversation)
    {
        $data = $request->validate([
            'body' => ['nullable', 'string'],
            'attachment_url' => ['nullable', 'url'],
            'attachment_type' => ['nullable', 'in:voice,document,image,video'],
            'reply_to_id' => ['nullable', 'integer', 'min:1'],
        ]);

        $user = $request->user();

        if ($conversation->user_id === null && $user) {
            $conversation->user_id = $user->id;
            $conversation->save();
        }

        if (!empty($data['reply_to_id'])) {
            $replyMessage = Message::where('id', $data['reply_to_id'])
                ->where('conversation_id', $conversation->id)
                ->first();
            if (!$replyMessage) {
                return response()->json(['message' => 'Invalid reply_to_id'], 422);
            }
        }

        $message = new Message();
        $message->conversation_id = $conversation->id;
        $message->sender_type = 'user';
        $message->sender_id = $user?->id ?? 0;
        $message->body = $data['body'] ?? null;
        $message->reply_to_id = $data['reply_to_id'] ?? null;

        if (!empty($data['attachment_url'])) {
            $message->attachment_path = $data['attachment_url'];
            $message->attachment_type = $data['attachment_type'] ?? null;
        }

        $message->save();

        $conversation->last_message_at = now();
        $conversation->last_message_preview = $message->body ? mb_substr($message->body, 0, 200) : 'Attachment';
        $conversation->save();

        return response()->json(['id' => $message->id], 201);
    }

    public function messages(Request $request, Conversation $conversation)
    {
        $limit = min((int) $request->query('limit', 50), 200);
        $sinceId = $request->query('since_id');

        $messagesQuery = Message::where('conversation_id', $conversation->id);
        if ($sinceId !== null && is_numeric($sinceId)) {
            $messagesQuery->where('id', '>', (int) $sinceId);
        }

        $messages = $messagesQuery
            ->orderByDesc('id')
            ->limit($limit)
            ->get()
            ->reverse()
            ->values();

        $conversation->loadMissing(['doctor', 'user']);

        $userIds = $messages
            ->where('sender_type', 'user')
            ->pluck('sender_id')
            ->filter(fn ($id) => $id > 0)
            ->unique()
            ->values();

        $usersById = $userIds->isEmpty()
            ? collect()
            : User::whereIn('id', $userIds)->get()->keyBy('id');

        $replyIds = $messages->pluck('reply_to_id')->filter()->unique()->values();
        $replyMessages = $replyIds->isEmpty()
            ? collect()
            : Message::whereIn('id', $replyIds)->get()->keyBy('id');

        $payload = $messages->map(function (Message $m) use ($conversation, $usersById, $replyMessages) {
            $senderName = null;
            if ($m->sender_type === 'doctor') {
                $senderName = $conversation->doctor?->name;
            } elseif ($m->sender_type === 'user') {
                $senderName = $usersById->get($m->sender_id)?->name ?? $conversation->user?->name;
            }

            $attachmentUrl = null;
            if (!empty($m->attachment_path)) {
                $attachmentUrl = str_starts_with($m->attachment_path, 'http')
                    ? $m->attachment_path
                    : asset('storage/' . $m->attachment_path);
            }

            $reply = null;
            if ($m->reply_to_id) {
                $replyMessage = $replyMessages->get($m->reply_to_id);
                if ($replyMessage && $replyMessage->conversation_id === $conversation->id) {
                    $replySenderName = $replyMessage->sender_type === 'doctor'
                        ? $conversation->doctor?->name
                        : ($usersById->get($replyMessage->sender_id)?->name ?? $conversation->user?->name);

                    $reply = [
                        'id' => $replyMessage->id,
                        'sender_type' => $replyMessage->sender_type,
                        'sender_name' => $replySenderName,
                        'body' => $replyMessage->body,
                        'attachment_url' => $replyMessage->attachment_path
                            ? (str_starts_with($replyMessage->attachment_path, 'http')
                                ? $replyMessage->attachment_path
                                : asset('storage/' . $replyMessage->attachment_path))
                            : null,
                        'attachment_type' => $replyMessage->attachment_type,
                        'created_at' => $replyMessage->created_at?->toIso8601String(),
                        'read_at' => $replyMessage->read_at?->toIso8601String(),
                    ];
                }
            }

            return [
                'id' => $m->id,
                'sender_type' => $m->sender_type,
                'sender_id' => $m->sender_id,
                'sender_name' => $senderName,
                'body' => $m->body,
                'attachment_url' => $attachmentUrl,
                'attachment_type' => $m->attachment_type,
                'reply_to_id' => $m->reply_to_id,
                'reply_to' => $reply,
                'created_at' => $m->created_at?->toIso8601String(),
                'read_at' => $m->read_at?->toIso8601String(),
            ];
        });

        return response()->json(['messages' => $payload]);
    }

    public function updateMessage(Request $request, Conversation $conversation, Message $message)
    {
        $data = $request->validate([
            'body' => ['required', 'string'],
        ]);

        $user = $request->user();

        if ($message->conversation_id !== $conversation->id || $message->sender_type !== 'user') {
            return response()->json(['message' => 'Not allowed'], 403);
        }
        if (!$user || $message->sender_id !== $user->id) {
            return response()->json(['message' => 'Not allowed'], 403);
        }

        $message->body = $data['body'];
        $message->save();

        $lastId = Message::where('conversation_id', $conversation->id)->orderByDesc('id')->value('id');
        if ($lastId === $message->id) {
            $conversation->last_message_at = $message->created_at;
            $conversation->last_message_preview = $message->body ? mb_substr($message->body, 0, 200) : 'Attachment';
            $conversation->save();
        }

        return response()->json(['ok' => true]);
    }

    public function deleteMessage(Request $request, Conversation $conversation, Message $message)
    {
        $user = $request->user();

        if ($message->conversation_id !== $conversation->id || $message->sender_type !== 'user') {
            return response()->json(['message' => 'Not allowed'], 403);
        }
        if (!$user || $message->sender_id !== $user->id) {
            return response()->json(['message' => 'Not allowed'], 403);
        }

        $message->delete();

        $lastMessage = Message::where('conversation_id', $conversation->id)->orderByDesc('id')->first();
        if ($lastMessage) {
            $conversation->last_message_at = $lastMessage->created_at;
            $conversation->last_message_preview = $lastMessage->body ? mb_substr($lastMessage->body, 0, 200) : 'Attachment';
        } else {
            $conversation->last_message_at = null;
            $conversation->last_message_preview = null;
        }
        $conversation->save();

        return response()->json(['ok' => true]);
    }
}

