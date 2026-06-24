# Staff notifications API

## Overview

In-app notifications for **staff users** when a doctor performs an interactive action. Notifications are stored in the database and fetched via the staff API. The `data` JSON payload is designed for the external frontend to navigate on click.

**Delivery is permission-scoped:** only staff whose effective permissions include the required key receive a row when the notification is created. Admins receive all types. See [Permission mapping](#permission-mapping) below.

**Title and body are Arabic by default** (from `resources/lang/ar/notifications.php`).

This is separate from Firebase push notifications sent **to doctors**.

---

## Staff API (`Authorization: Bearer <staff_token>`)

### List notifications

`GET /api/notifications`

| Query | Description |
|-------|-------------|
| `unread_only` | `1` or `true` — only unread |
| `page` | Pagination |

**Response item:**

```json
{
  "id": 1,
  "user_id": 3,
  "type": "doctor_message",
  "title": "رسالة جديدة من طبيب",
  "body": "د. علي أرسل رسالة جديدة",
  "data": {
    "type": "doctor_message",
    "route": "conversation",
    "doctor_id": 5,
    "doctor_name": "Dr. Ali",
    "conversation_id": 12,
    "entity_id": 12,
    "message_id": 99
  },
  "read_at": null,
  "created_at": "2026-06-10T12:00:00.000000Z",
  "updated_at": "2026-06-10T12:00:00.000000Z"
}
```

### Unread count

`GET /api/notifications/unread-count`

```json
{ "count": 4 }
```

### Mark one as read

`POST /api/notifications/{notification}/read`

Returns `{ "ok": true }`. Only the authenticated user’s notifications are accessible.

### Mark all as read

`POST /api/notifications/read-all`

Returns `{ "ok": true }`.

---

## Doctor actions that create notifications

| Doctor action | `type` | `data.route` | Key `data` fields |
|---------------|--------|--------------|-------------------|
| Send message | `doctor_message` | `conversation` | `conversation_id`, `message_id`, `entity_id` |
| Delete message | `doctor_message_deleted` | `conversation` | `conversation_id`, `message_id`, `entity_id` |
| Comment on result | `doctor_result_comment` | `result` | `result_id`, `comment_id`, `patient_id`, `patient_name`, `entity_id` |
| Delete result | `doctor_result_deleted` | `results` | `result_id`, `patient_id`, `patient_name`, `entity_id` |
| Update profile | `doctor_profile_updated` | `doctor` | `entity_id` (= `doctor_id`) |
| Submit lab test request | `doctor_lab_test_request` | `lab_test_request` | `lab_test_request_id`, `entity_id` |

Every notification `data` object also includes:

- `type` — same as top-level `type`
- `doctor_id`
- `doctor_name`
- `route` — frontend screen key
- `entity_id` — primary id for navigation

### Actions that do **not** notify staff

Login, logout, list fetches (`results`, `announcements`, `patients`, etc.), `unseen-summary`, `markMessagesRead`, FCM token update.

---

## Frontend navigation guide

Use `data.route` to choose the screen, then ids from `data`:

| `route` | Suggested navigation |
|---------|----------------------|
| `conversation` | Open chat for `doctor_id` / `conversation_id` |
| `result` | Open result detail `result_id` |
| `results` | Open results list (optionally filter by `patient_id`) |
| `doctor` | Open doctor profile `doctor_id` |
| `lab_test_request` | Open lab test request `lab_test_request_id` |

---

## Permission mapping

Configured in `config/staff_notifications.php`. Each notification `type` requires one staff permission key (from `config/staff_permissions.php`):

| Notification `type` | Required permission |
|---------------------|---------------------|
| `doctor_message` | `chatting` |
| `doctor_message_deleted` | `chatting` |
| `doctor_result_comment` | `patient_results` |
| `doctor_result_deleted` | `patient_results` |
| `doctor_profile_updated` | `doctor_management` |
| `doctor_lab_test_request` | `lab_test_requests_management` |

- **Admins** (`user.role === "admin"`) receive every type.
- **Chat-only agents** receive only `doctor_message` and `doctor_message_deleted`.
- Unknown notification types are not delivered to anyone.

---

## Implementation

- Table: `staff_notifications`
- Service: `App\Services\StaffNotificationService::notifyAllStaff()`
- One row inserted per **eligible** staff user per doctor action (`User::canReceiveStaffNotification()`)

## Production deploy

```bash
php artisan migrate
```

Migration: `2026_06_10_000003_create_staff_notifications_table.php`
