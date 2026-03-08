## Frontend Chat Flow (Web UI)

This document explains how the **web chat UI** works from the frontend
perspective and how it communicates with the backend.

---

## Where the UI lives

- The chat UI is rendered by `resources/js/chat.js`.
- It mounts on:
  - `resources/views/chat/show.blade.php`
  - `resources/views/doctor/chat.blade.php`
- The mount element provides:
  - `data-conversation` (conversation id)
  - `data-user-type` (`user` for staff, `doctor` for doctor web view)
  - `data-user-id` (current user id)

---

## How messages are fetched

The chat UI **polls** the backend (no Firestore).

1. Initial load:
   - `GET /api/activity/conversation/{conversation}/messages?limit=200`
2. Polling:
   - Every ~4 seconds it calls:
     - `GET /api/activity/conversation/{conversation}/messages?since_id=<lastMessageId>&limit=200`
3. If no new messages are returned, the UI does **not** re-render.
4. If the user is not near the bottom, the UI **does not auto-scroll**.

---

## How messages are sent

When the user clicks **Send**:

1. If there is a file, it is uploaded to:
   - `POST /api/upload` (multipart/form-data, field `file`)
2. The message is stored in the backend:
   - `POST /api/activity/conversation/{conversation}/messages`
   - Body: `body`, `attachment_url`, `attachment_type`, `reply_to_id`
3. Conversation activity is updated:
   - `POST /api/activity/conversation/{conversation}`
   - Body: `{ "body": "...", "sender_type": "agent" }`

---

## Replying to messages

1. Each message has a **Reply** button.
2. Clicking it sets `reply_to_id` in the input state.
3. The reply preview appears above the input.
4. When sending, `reply_to_id` is included in the message payload.
5. The UI renders a reply box inside the message bubble when `reply_to` is present.

---

## Editing and deleting messages

The UI shows **Edit/Delete** only for messages sent by the current user.

- **Edit**
  - `PUT /api/activity/conversation/{conversation}/messages/{message}`
  - Body: `{ "body": "..." }`
  - UI re-fetches messages after edit.

- **Delete**
  - `DELETE /api/activity/conversation/{conversation}/messages/{message}`
  - UI removes the message from the list.

---

## Message shape expected by UI

Each message object should include:
- `id`
- `sender_type` (`user` or `doctor`)
- `sender_id`
- `sender_name`
- `body`
- `attachment_url` (optional)
- `attachment_type` (optional)
- `reply_to_id` (optional)
- `reply_to` (optional full message object)
- `created_at`
- `read_at`

---

## Notes

- This is **session-authenticated** web UI; it uses CSRF tokens for POST/PUT/DELETE.
- Polling interval is currently **4 seconds**.
- Auto-scroll only happens if the user is near the bottom.
