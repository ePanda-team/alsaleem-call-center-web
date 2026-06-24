# Doctor mobile app — push notifications guide

Handover for the **doctor Flutter/mobile app**: how to register for FCM, receive pushes, and **deep-link to the correct screen** when the user taps a notification.

Backend API prefix: **`/api`**. All protected calls need:

```
Authorization: Bearer <doctor_token>
```

Shorter reference: [`docs/frontend/doctor/push-notifications.md`](docs/frontend/doctor/push-notifications.md)

---

## 1. What the backend sends

Firebase Cloud Messaging (FCM) notifications are sent to doctors for:

| Event | When |
|-------|------|
| `new_message` | Staff sends a chat message |
| `new_result` | Staff uploads a test result assigned to this doctor |
| `staff_result_comment` | Staff comments on one of this doctor's results |
| `announcement` | Staff publishes an announcement (may be targeted by specialty) |

**Title and body are Arabic.** Use them only for display in the system tray — **never use title/body to decide navigation**.

Navigation must use the FCM **`data`** map.

---

## 2. Register the device token

After `POST /api/doctor/login`, send the FCM device token to the backend:

```http
POST /api/doctor/fcm-token
Authorization: Bearer <doctor_token>
Content-Type: application/json

{ "fcm_token": "<firebase_device_token>" }
```

Re-send the token:

- On every login
- When Firebase calls `onTokenRefresh`

Without a stored token, the doctor will not receive pushes.

---

## 3. FCM payload shape

Each push has:

- **`notification`** — `title`, `body` (shown by the OS when app is in background)
- **`data`** — custom key/value pairs (**all values are strings**)

### Always present in `data`

| Key | Description |
|-----|-------------|
| `click_action` | `FLUTTER_NOTIFICATION_CLICK` (Flutter convention) |
| `type` | Event key — use as fallback if `route` is missing |
| `route` | Screen to open |
| `entity_id` | Primary id for that screen |

### Per-event fields

| `type` | `route` | Required ids | Optional ids |
|--------|---------|--------------|--------------|
| `new_message` | `conversation` | `conversation_id` | — |
| `new_result` | `result` | `result_id` | `patient_id`, `patient_name` |
| `staff_result_comment` | `result` | `result_id`, `comment_id` | `patient_id`, `patient_name` |
| `announcement` | `announcement` | `announcement_id` | — |

### Example payloads

**New result**

```json
{
  "click_action": "FLUTTER_NOTIFICATION_CLICK",
  "type": "new_result",
  "route": "result",
  "entity_id": "10",
  "result_id": "10",
  "patient_id": "1",
  "patient_name": "أحمد محمد"
}
```

**Staff comment**

```json
{
  "click_action": "FLUTTER_NOTIFICATION_CLICK",
  "type": "staff_result_comment",
  "route": "result",
  "entity_id": "10",
  "result_id": "10",
  "comment_id": "25",
  "patient_id": "1",
  "patient_name": "أحمد محمد"
}
```

**New message**

```json
{
  "click_action": "FLUTTER_NOTIFICATION_CLICK",
  "type": "new_message",
  "route": "conversation",
  "entity_id": "12",
  "conversation_id": "12"
}
```

**Announcement**

```json
{
  "click_action": "FLUTTER_NOTIFICATION_CLICK",
  "type": "announcement",
  "route": "announcement",
  "entity_id": "3",
  "announcement_id": "3"
}
```

---

## 4. Handle all app states

You need **three** handlers. All of them should call the same routing function.

### A. App in foreground

`FirebaseMessaging.onMessage`

- FCM may deliver `notification` + `data`
- Show an in-app banner/snackbar (optional)
- If the user taps it, call your router with `message.data`
- Refresh tab badges: `GET /api/doctor/unseen-summary`

### B. App in background — user taps notification

`FirebaseMessaging.onMessageOpenedApp`

```dart
FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
  NotificationRouter.handle(message.data);
});
```

### C. App killed — user taps notification

On startup, after auth is ready:

```dart
final initial = await FirebaseMessaging.instance.getInitialMessage();
if (initial != null) {
  NotificationRouter.handle(initial.data);
}
```

**Important:** If the user is logged out when a cold-start tap happens, persist `initial.data` (e.g. shared preferences), complete login, then navigate.

---

## 5. Routing table (tap → screen → API)

Implement one central router. Resolve `route` first; fall back to `type` for older payloads.

| `route` | Open screen | APIs to load |
|---------|-------------|--------------|
| `conversation` | Chat thread | `GET /api/doctor/conversation` or messages for `conversation_id` — see [`MOBILE_CHAT_BACKEND.md`](MOBILE_CHAT_BACKEND.md) |
| `result` | Result detail (PDF + comments) | `GET /api/doctor/results?id={result_id}` or patient-scoped list; PDF via `GET /api/doctor/results/{id}/pdf` with bearer token — see [`docs/frontend/doctor/patients-and-results.md`](docs/frontend/doctor/patients-and-results.md) |
| `result` + `comment_id` | Same result screen, scroll to comment | `GET /api/doctor/results/{result_id}/comments` |
| `announcement` | News / announcement detail | `GET /api/doctor/announcements` then find `announcement_id` |
| `lab_test_request` | Lab test request detail | `GET /api/doctor/lab-test-requests/{lab_test_request_id}` — see [`docs/frontend/doctor/lab-test-requests.md`](docs/frontend/doctor/lab-test-requests.md) |
| `patient` (client-only) | Patient profile | `GET /api/doctor/patients/{patient_id}` — use when UX opens patient from a result push (`patient_id` is always sent on result-related events) |

### Reference router (Dart)

```dart
class NotificationRouter {
  static void handle(Map<String, dynamic> data) {
    final route = data['route'] as String? ?? data['type'] as String?;
    if (route == null) return;

    switch (route) {
      case 'conversation':
      case 'new_message':
        final id = int.parse(data['conversation_id'] as String);
        navigator.openChat(conversationId: id);
        break;

      case 'result':
      case 'new_result':
      case 'staff_result_comment':
        final resultId = int.parse(data['result_id'] as String);
        final commentId = data['comment_id'] != null
            ? int.parse(data['comment_id'] as String)
            : null;
        navigator.openResult(resultId: resultId, highlightCommentId: commentId);
        break;

      case 'announcement':
        final id = int.parse(data['announcement_id'] as String);
        navigator.openAnnouncement(id: id);
        break;

      case 'lab_test_request':
      case 'lab_test_request_status':
        final requestId = int.parse(
          (data['lab_test_request_id'] ?? data['entity_id']) as String,
        );
        navigator.openLabTestRequest(id: requestId);
        break;

      case 'patient':
        final id = int.parse(data['patient_id'] as String);
        navigator.openPatient(id: id);
        break;
    }
  }
}
```

---

## 6. Tab badges after a push

Pushes do not include badge counts. After handling a notification (or on app resume), refresh:

```http
GET /api/doctor/unseen-summary
```

Map buckets to tabs:

| Bucket | Tab |
|--------|-----|
| `messages` | Chat |
| `announcements` | News |
| `results` | Results |
| `tests` | Lab catalog |

Opening a list endpoint marks that bucket as seen (e.g. `GET /api/doctor/results` clears `results` unseen). Deep-linking directly to a detail screen does **not** always clear the list unseen state — refresh summary after navigation if badges look stale.

**Comment badges:** `comments_count` on each result row is **unseen staff comments only**. After opening `GET /api/doctor/results/{id}/comments`, refetch the results list to update the per-row badge.

---

## 7. Arabic display text

| `type` | Typical title |
|--------|---------------|
| `new_message` | رسالة جديدة |
| `new_result` | نتيجة تحليل جديدة |
| `staff_result_comment` | تعليق جديد على نتيجة |
| `announcement` | Announcement title from CMS (may contain `[dr]` replaced server-side when listed) |
| `lab_test_request_status` | تمت مراجعة / الموافقة على / رفض طلب الفحوصات (by `status`) |

---

## 8. Common mistakes

| Mistake | Fix |
|---------|-----|
| Opening `pdf_path` in an external browser | PDF URL requires `Authorization: Bearer <token>` — fetch as blob in-app |
| Routing by notification title | Use `data.route` + ids only |
| Parsing ids as `int` directly | FCM `data` values are **strings** — `int.parse()` first |
| Only handling `onMessageOpenedApp` | Also handle `getInitialMessage()` for killed state |
| Navigating before login on cold start | Queue payload until token is available |
| Ignoring `comment_id` on `staff_result_comment` | Scroll to / highlight that comment in the thread |

---

## 9. Integration checklist

- [ ] Request notification permission (iOS / Android 13+)
- [ ] Initialize Firebase Messaging
- [ ] `POST /api/doctor/fcm-token` after login and on token refresh
- [ ] `onMessage` — foreground display + optional tap
- [ ] `onMessageOpenedApp` — background tap → router
- [ ] `getInitialMessage` — cold start tap → router (after auth)
- [ ] Central `NotificationRouter` keyed on `data.route`
- [ ] Result screen loads PDF with bearer token, not raw URL
- [ ] `staff_result_comment` passes `comment_id` to comments UI
- [ ] Refresh `GET /api/doctor/unseen-summary` on resume / after push

---

## 10. Related docs

| Doc | Topic |
|-----|--------|
| [`FCM_SETUP.md`](FCM_SETUP.md) | Server-side Firebase setup |
| [`MOBILE_CHAT_BACKEND.md`](MOBILE_CHAT_BACKEND.md) | Chat API |
| [`docs/frontend/doctor/patients-and-results.md`](docs/frontend/doctor/patients-and-results.md) | Results, patients, protected PDF |
| [`docs/frontend/doctor/result-comments.md`](docs/frontend/doctor/result-comments.md) | Comment thread API |
| [`docs/frontend/doctor/patients-and-results.md`](docs/frontend/doctor/patients-and-results.md) | Unseen summary / tab badges |
