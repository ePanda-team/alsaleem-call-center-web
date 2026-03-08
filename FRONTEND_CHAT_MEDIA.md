## Chat Media & Audio Upload (Frontend)

This doc describes how the **web chat frontend** sends media and audio
files through the backend.

---

## 1) File selection

Users can attach any file via the file picker.
The frontend detects the type:
- `image/*` → `image`
- `audio/*` → `voice`
- `video/*` → `video`
- anything else → `document`

---

## 2) Voice recording (audio)

The chat UI records audio using `MediaRecorder` with Opus:
- Preferred MIME types:
  - `audio/webm;codecs=opus`
  - `audio/webm`
  - `audio/ogg;codecs=opus`
  - `audio/ogg`

If none are supported, recording is blocked.
The recorded file becomes a `File` named like:
```
voice-<timestamp>.webm
```
(or `.ogg` depending on the selected format).

---

## 3) Upload to backend

All attachments are uploaded to the backend first:

- `POST /api/upload`
- `multipart/form-data`
  - Field: `file`

Response:
```json
{
  "success": true,
  "url": "https://your-domain.com/storage/uploads/abc.webm",
  "path": "uploads/abc.webm",
  "filename": "abc.webm",
  "original_name": "voice-123456.webm",
  "size": 12345,
  "mime_type": "audio/webm"
}
```

The frontend uses the returned **`url`**.

---

## 4) Send message with attachment

After upload, the message is sent to the chat API:

- `POST /api/activity/conversation/{conversation}/messages`
- Body (JSON):
```json
{
  "body": "Optional text",
  "attachment_url": "https://your-domain.com/storage/uploads/abc.webm",
  "attachment_type": "voice"
}
```

`attachment_type` values:
```
image | video | voice | document
```

---

## 5) Rendering attachments

The chat UI renders attachments based on `attachment_type`:
- `image` → `<img>`
- `video` → `<video>`
- `voice` → `<audio>`
- `document` → link

If `attachment_type` is missing, it tries to guess the type from the URL.
