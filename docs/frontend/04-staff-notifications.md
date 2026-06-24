# Staff in-app notifications (frontend guide)

**Doctor mobile:** see [`doctor/`](./doctor/) (doctor app does not use staff notifications).

Staff users receive **database notifications** when doctors perform interactive actions (messages, comments, profile updates, etc.).

**Delivery is permission-scoped:** a user only receives notification types they have permission for (e.g. chat-only agents get message notifications, not lab test requests). Admins receive all types. See [Permission mapping](#permission-mapping).

**Titles and bodies are Arabic by default.**

Base URL: **`/api`**. Auth: **`Authorization: Bearer <staff_token>`**.

---

## Polling pattern

1. On app load / interval: **`GET /api/notifications/unread-count`**
2. Show badge on bell icon when `count > 0`.
3. Notifications screen: **`GET /api/notifications?unread_only=1`**
4. On tap: navigate using `data.route` + ids, then **`POST /api/notifications/{id}/read`**
5. “Mark all read”: **`POST /api/notifications/read-all`**

---

## List notifications

`GET /api/notifications`

| Query | Description |
|-------|-------------|
| `unread_only` | `1` or `true` |
| `page` | Pagination |

### Example item

```json
{
  "id": 1,
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
  "created_at": "2026-06-10T12:00:00.000000Z"
}
```

---

## Navigation map (`data.route`)

| `data.route` | Open screen | Use ids |
|--------------|-------------|---------|
| `conversation` | Doctor chat | `conversation_id`, `doctor_id` |
| `result` | Result detail (+ comments) | `result_id`, optional `comment_id` |
| `results` | Results list | `result_id`, `patient_id` |
| `doctor` | Doctor profile | `doctor_id` |
| `lab_test_request` | Lab test request detail | `lab_test_request_id` |

Every `data` object includes `doctor_id`, `doctor_name`, `type`, `entity_id`.

### Result comment notification

When `type` is `doctor_result_comment`:

```json
{
  "route": "result",
  "result_id": 10,
  "comment_id": 25,
  "patient_id": 1,
  "patient_name": "John Doe"
}
```

Open the result screen and optionally scroll to / highlight comment `comment_id` (see [05-result-comments.md](./05-result-comments.md)).

---

## API reference

| Method | Path |
|--------|------|
| `GET` | `/api/notifications/unread-count` |
| `GET` | `/api/notifications` |
| `POST` | `/api/notifications/{id}/read` |
| `POST` | `/api/notifications/read-all` |

---

## Doctor actions that notify staff

- Send / delete chat message
- Add comment on result
- Delete result
- Update profile
- Submit lab test request

**Not notified:** doctor login, list fetches, read receipts, FCM token updates.

Staff posting a comment on a result does **not** create a staff notification (staff-initiated). It **does** send an FCM push to the assigned doctor — see [doctor/push-notifications.md](./doctor/push-notifications.md).

---

## Permission mapping

| Notification `type` | Required permission |
|---------------------|---------------------|
| `doctor_message` | `chatting` |
| `doctor_message_deleted` | `chatting` |
| `doctor_result_comment` | `patient_results` |
| `doctor_result_deleted` | `patient_results` |
| `doctor_profile_updated` | `doctor_management` |
| `doctor_lab_test_request` | `lab_test_requests_management` |

Use the login `permissions` object to know which screens a user can open when they tap a notification. Users without the mapped permission never receive that notification type.
