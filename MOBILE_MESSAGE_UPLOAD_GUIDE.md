# Mobile Message Upload and Sending Guide

## Overview
This guide explains how to upload files and send messages with attachments in the chat system. The system supports different upload methods depending on file type:
- **Images and Voice Messages**: Upload to Laravel server endpoint (`/api/upload`)
- **Other files** (video, documents): Upload to Firebase Storage

## Step-by-Step Process

### 1. File Upload

#### For Images and Voice Messages:
1. **Upload to Laravel Server**
   - Endpoint: `POST /api/upload`
   - Method: `POST`
   - Content-Type: `multipart/form-data`
   - Body: Form data with field name `file` containing the file (image or audio)
   - Headers: Include CSRF token if available (optional for API routes)

   **Request Example:**
   ```http
   POST /api/upload HTTP/1.1
   Content-Type: multipart/form-data
   
   file: [binary file data]
   ```

   **Response:**
   ```json
   {
     "success": true,
     "url": "http://your-domain.com/storage/uploads/1234567890_abc123def4_file.m4a",
     "path": "uploads/1234567890_abc123def4_file.m4a",
     "filename": "1234567890_abc123def4_file.m4a",
     "original_name": "voice.m4a",
     "size": 12345,
     "mime_type": "audio/mp4"
   }
   ```

   **Important:** Extract the `url` field from the response - this is what you'll use in the message.

   **Note for Voice Messages:**
   - Voice messages should be recorded in **M4A format** (MP4/AAC codec)
   - The file should have `.m4a` extension
   - MIME type should be `audio/mp4` or `audio/m4a`

#### For Other Files (Video, Documents):
1. **Upload to Firebase Storage**
   - Use Firebase Storage SDK
   - Path pattern: `conversations/{conversationId}/{timestamp}-{filename}`
   - Get the download URL after upload
   - This URL will be used in the message

### 2. Sending the Message

#### Endpoint
- **URL**: `POST /api/doctor/conversations/{conversationId}/messages`
- **Authentication**: Required (Doctor token authentication)
- **Headers**: 
  - `Authorization: Bearer {doctor_token}` (or your auth method)
  - `Content-Type: application/json`

#### Request Body
```json
{
  "body": "Optional text message",
  "attachment_url": "http://your-domain.com/storage/uploads/...",
  "attachment_type": "image"
}
```

#### Field Descriptions:
- **`body`** (optional, string): Text content of the message. Can be null if only sending an attachment.
- **`attachment_url`** (optional, URL): The URL of the uploaded file. Use the `url` from the upload response for images and voice messages, or Firebase Storage URL for other files.
- **`attachment_type`** (optional, enum): Type of attachment. Must be one of:
  - `"image"` - For images (jpg, png, gif, webp, etc.)
  - `"voice"` - For audio files (m4a, mp3, wav, etc.) - **must be uploaded via `/api/upload`**
  - `"video"` - For video files (mp4, mov, webm, etc.)
  - `"document"` - For documents (pdf, doc, docx, txt, etc.)

#### Response
```json
{
  "id": 123
}
```

## Complete Flow Example

### Example 1: Sending an Image

```javascript
// Step 1: Upload image
const formData = new FormData();
formData.append('file', imageFile);

const uploadResponse = await fetch('/api/upload', {
  method: 'POST',
  body: formData
});

const uploadData = await uploadResponse.json();
// uploadData.url = "http://domain.com/storage/uploads/..."

// Step 2: Send message with image
const messageResponse = await fetch(`/api/doctor/conversations/${conversationId}/messages`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${doctorToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    body: "Check out this image", // Optional text
    attachment_url: uploadData.url,
    attachment_type: "image"
  })
});

const messageData = await messageResponse.json();
// messageData.id = 123
```

### Example 2: Sending Image Only (No Text)

```javascript
// Upload image (same as above)
const uploadData = await uploadResponse.json();

// Send message with only attachment
const messageResponse = await fetch(`/api/doctor/conversations/${conversationId}/messages`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${doctorToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    body: null, // or omit this field
    attachment_url: uploadData.url,
    attachment_type: "image"
  })
});
```

### Example 3: Sending Voice Message

```javascript
// Step 1: Upload voice message to Laravel server
// Note: Voice should be recorded in M4A format (MP4/AAC codec)
const formData = new FormData();
formData.append('file', voiceFile); // voiceFile should be .m4a format

const uploadResponse = await fetch('/api/upload', {
  method: 'POST',
  body: formData
});

const uploadData = await uploadResponse.json();
// uploadData.url = "http://domain.com/storage/uploads/..."

// Step 2: Send message with voice attachment
const messageResponse = await fetch(`/api/doctor/conversations/${conversationId}/messages`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${doctorToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    body: null, // or optional text message
    attachment_url: uploadData.url,
    attachment_type: "voice"
  })
});

const messageData = await messageResponse.json();
// messageData.id = 123
```

### Example 4: Sending Voice Message with Text

```javascript
// Upload voice (same as Example 3)
const uploadData = await uploadResponse.json();

// Send message with both text and voice
const messageResponse = await fetch(`/api/doctor/conversations/${conversationId}/messages`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${doctorToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    body: "Here's a voice message for you",
    attachment_url: uploadData.url,
    attachment_type: "voice"
  })
});
```

## Important Notes

1. **Image and Voice Uploads**: 
   - Always use `/api/upload` endpoint for images and voice messages
   - The URL returned is already publicly accessible
   - Do NOT include the URL in the message `body` field - only use `attachment_url`

2. **Voice Message Format**:
   - Voice messages **must** be recorded in **M4A format** (MP4 container with AAC codec)
   - File extension should be `.m4a`
   - MIME type should be `audio/mp4` or `audio/m4a`
   - If the browser/device doesn't support M4A recording, show an error to the user

3. **File Type Detection**:
   - Determine `attachment_type` based on file MIME type or extension:
     - Images: `image/*` → `"image"`
     - Audio: `audio/*` → `"voice"`
     - Video: `video/*` → `"video"`
     - Everything else → `"document"`

4. **Message Body**:
   - Can be null/empty if only sending an attachment
   - If both body and attachment are provided, both will be displayed
   - For images and voice messages, do NOT put the URL in the body - use `attachment_url` only

4. **Error Handling**:
   - If upload fails, show error to user and don't send message
   - If message send fails, you may want to retry or show error
   - Check response status codes (200/201 for success)

5. **File Size Limits**:
   - Check `config('upload.max_file_size')` for maximum file size (default: 10MB)
   - Server will reject files exceeding this limit

## API Endpoints Summary

| Endpoint | Method | Purpose | Auth Required |
|----------|--------|---------|---------------|
| `/api/upload` | POST | Upload images and voice messages to server | No (but CSRF token recommended) |
| `/api/doctor/conversations/{id}/messages` | POST | Send message with attachment | Yes (Doctor token) |

## Testing

To test the upload endpoint with an image:
```bash
curl -X POST http://your-domain.com/api/upload \
  -F "file=@/path/to/image.jpg"
```

To test the upload endpoint with a voice message:
```bash
curl -X POST http://your-domain.com/api/upload \
  -F "file=@/path/to/voice.m4a"
```

To test sending a message with image:
```bash
curl -X POST http://your-domain.com/api/doctor/conversations/1/messages \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "body": "Test message",
    "attachment_url": "http://your-domain.com/storage/uploads/...",
    "attachment_type": "image"
  }'
```

To test sending a voice message:
```bash
curl -X POST http://your-domain.com/api/doctor/conversations/1/messages \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "body": null,
    "attachment_url": "http://your-domain.com/storage/uploads/1234567890_abc123_voice.m4a",
    "attachment_type": "voice"
  }'
```

## Troubleshooting Audio Playback Issues

If M4A files uploaded from web cannot be played in Flutter app:

1. **Check Content-Type Headers:**
   ```bash
   curl -I http://your-domain.com/storage/uploads/file.m4a
   ```
   Should return `Content-Type: audio/mp4`

2. **Verify File Format:**
   Use `ffprobe` to check if files are fragmented:
   ```bash
   ffprobe -v error -show_format -show_streams file.m4a
   ```
   Look for `fragmented: yes` - fragmented files might not play on all devices

3. **Flutter Player Configuration:**
   Ensure your audio player supports:
   - Range requests (for streaming)
   - MP4/AAC codec
   - Progressive download
   
   Example with `just_audio`:
   ```dart
   final player = AudioPlayer();
   await player.setUrl(url); // URL from attachment_url
   await player.play();
   ```

4. **Compare Web vs Mobile Files:**
   Check encoding differences between web-recorded and mobile-recorded files using `ffprobe`

5. **See `AUDIO_COMPATIBILITY_FIX.md`** for detailed troubleshooting guide

