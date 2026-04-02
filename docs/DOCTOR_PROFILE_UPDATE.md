# Doctor profile: bio & profile picture (mobile)

This guide describes the doctor API changes for **bio** and **profile picture**, and how the mobile app should call them.

All paths below assume the API base URL includes the Laravel prefix **`/api`** (e.g. `https://your-host.com/api`).

---

## Authentication

Doctor routes use a bearer token:

- Header: **`Authorization: Bearer <token>`**
- **`POST /api/doctor/login`** — body: `username`, `password`, optional **`device_name`** (string, max 255). Each login creates a **new** row in **`doctor_access_tokens`** so the same account can stay signed in on **multiple devices**.
- **`POST /api/doctor/logout`** — requires `Authorization: Bearer <token>`. Revokes **only that device’s** token; other devices stay logged in.

---

## Read current profile

**`GET /api/doctor/me`**

Returns the authenticated doctor as JSON. Relevant fields:

| Field | Type | Notes |
|-------|------|--------|
| `bio` | string or `null` | Free-text biography |
| `profile_picture_url` | string or `null` | Full URL to the image (ready for `<Image>` / `Image.network`) |

`profile_picture_path` is **not** exposed; use **`profile_picture_url`** only.

---

## Update profile (including bio & photo)

**`PUT /api/doctor/me`** or **`POST /api/doctor/me`**

Both methods are supported. Prefer **`POST`** when sending **`multipart/form-data`** (profile picture), because many HTTP clients handle file uploads more reliably on **POST** than on **PUT**.

### Option A — JSON only (no new photo)

`Content-Type: application/json`

You may send any subset of the existing profile fields. Only keys you include are updated.

| Field | Rules |
|-------|--------|
| `name` | Optional string, max 255 |
| `username` | Optional string, max 255 |
| `speciality` | Optional string, max 255 |
| `experience_level` | Optional string, max 255 |
| `password` | Optional string, min 6, max 255 (hashed on server) |
| **`bio`** | Optional string, **max 20 000** characters |

**Example**

```http
PUT /api/doctor/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "bio": "Cardiologist with 10+ years of experience."
}
```

### Option B — Multipart (bio and/or profile picture)

`Content-Type: multipart/form-data`

- Use the same field names as above for text fields (`bio`, `name`, etc.).
- Add a file part named **`profile_picture`** for the image.

| Part | Rules |
|------|--------|
| **`profile_picture`** | Optional file. Must be an **image**. Allowed types: **jpeg, jpg, png, gif, webp**. Max size **5120 KB** (~5 MB) per server validation. |

Sending a new `profile_picture` **replaces** the previous one (old file is removed on the server).

**Example (conceptual)**

- `bio`: text field  
- `profile_picture`: file (binary)

If you only change the photo, you can omit `bio` (unchanged). If you only change `bio`, you can omit `profile_picture`.

---

## Success response

**`200`** with a JSON body: the **full doctor object** after save (same shape as **`GET /api/doctor/me`**), including updated `bio` and `profile_picture_url`.

## Errors

- **`401`** — Missing or invalid `Authorization` bearer token.
- **`422`** — Validation failed. Body includes `message` and `errors` with field-level messages (e.g. file too large, wrong MIME type).

---

## Mobile implementation notes

1. **Load profile after login** — Login (`POST /api/doctor/login`) returns `{ "token": "..." }` only. Call **`GET /api/doctor/me`** to show name, `bio`, and `profile_picture_url`.
2. **Avatar UI** — If `profile_picture_url` is `null`, show a default avatar.
3. **Large bio** — Allow up to **20 000** characters in the client if you use a full bio editor.
4. **Upload** — Ensure the multipart field name is exactly **`profile_picture`** (not `photo` or `avatar` unless you map it on the client to this name).
5. **Server limits** — Very large uploads can still be blocked by PHP or the web server (`upload_max_filesize`, `post_max_size`, IIS `maxAllowedContentLength`, nginx `client_max_body_size`). The app limit above is **5 MB** for the image.

---

## Delete own chat message (soft delete)

**`POST /api/doctor/conversations/{conversation_id}/messages/{message_id}/delete`**

- Header: **`Authorization: Bearer <token>`**
- No body required.
- Only messages **sent by the doctor** (`sender_type: doctor`) in **their** conversation can be removed; otherwise **`403`**.
- The message is **soft-deleted** (it no longer appears in message lists). **`POST`** is used instead of **`DELETE`** for compatibility with restrictive hosts.

---

## Summary checklist for the app

- [ ] After login, fetch **`GET /api/doctor/me`** for `bio` and `profile_picture_url`.
- [ ] Profile / settings screen: edit **bio** (optional) and pick **profile picture** (optional).
- [ ] Submit with **`POST /api/doctor/me`** as **`multipart/form-data`** when a photo is included; otherwise **`PUT`/`POST` + JSON** is fine for text-only updates.
- [ ] Refresh local state from the **response body** (or call **`GET /api/doctor/me`** again) after a successful update.
