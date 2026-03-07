## Mobile Chat via Backend API

This app uses **backend polling** for chat (no Firestore). The mobile app should
send and fetch messages through the HTTP API below.

### Base

- Base URL: `https://your-domain.com` (or local dev URL)
- All chat endpoints require doctor authentication.

### Authentication

1. **Login**
   - `POST /api/doctor/login`
   - Body: `{ "username": "...", "password": "..." }`
   - Response: `{ "token": "..." }`

2. **Use token**
   - For all authenticated endpoints, send:
     - Header: `Authorization: Bearer <token>`

### Conversation

3. **Get or create conversation**
   - `GET /api/doctor/conversation`
   - Response: `{ "conversation_id": 123 }`
   - Save `conversation_id` locally.

### Fetch Messages (Polling)

4. **Fetch messages**
   - `GET /api/doctor/conversations/{conversation}/messages`
   - Optional query:
     - `limit` (max 200, default 50)
     - `since_id` (only return messages with id > since_id)
   - Response: `{ "messages": [ ... ] }`

Each message includes:
- `id`
- `sender_type` (`doctor` or `user`)
- `sender_name`
- `body`
- `attachment_url` (optional)
- `attachment_type` (`voice|document|image|video`)
- `reply_to_id` (optional)
- `reply_to` (full message object when replying)
- `created_at` (ISO 8601)
- `read_at` (ISO 8601 or null)

**Polling suggestion:**
- Foreground: poll every 3–5 seconds.
- Use `since_id` with the last received message id to avoid refetching.
- Background: stop polling or reduce frequency.

### Send Message

5. **Send message**
   - `POST /api/doctor/conversations/{conversation}/messages`
   - Body:
     - `{ "body": "text" }`
     - Or `{ "attachment_url": "https://...", "attachment_type": "image" }`
     - Or combine both.
     - Optional reply: `{ "reply_to_id": 123 }`
   - Response: `{ "id": <message_id> }`

### Mark Messages as Read

6. **Mark messages read**
   - `POST /api/doctor/conversations/{conversation}/messages/read`
   - Marks all unread `user` messages as read.
   - Response: `{ "ok": true, "updated": <count> }`

### Attachments

If the app uploads files itself:
- Use existing upload endpoint (if needed):
  - `POST /api/upload` (multipart/form-data, field `file`)
  - Response includes `url` you can pass as `attachment_url`.

### Errors

- `401` or `403`: invalid/expired token or conversation not owned by doctor.
- `422`: validation errors (missing/invalid fields).

### Notes

- All chat state is stored in the backend database.
- There is no Firestore integration.
