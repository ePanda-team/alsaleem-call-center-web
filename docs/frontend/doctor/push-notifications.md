# Doctor mobile: push notifications (quick reference)

**Full mobile handover:** [`../../../MOBILE_PUSH_NOTIFICATIONS.md`](../../../MOBILE_PUSH_NOTIFICATIONS.md) — app states, routing, checklist, Flutter examples.

Firebase push notifications sent **to doctors**. Title and body are **Arabic**. Staff in-app notifications are separate — see [`../04-staff-notifications.md`](../04-staff-notifications.md).

---

## Register FCM token

`POST /api/doctor/fcm-token` with `{ "fcm_token": "..." }` and bearer token (after login and on token refresh).

---

## Navigate on tap — use `data` only

| `route` | Screen | Key ids |
|---------|--------|---------|
| `conversation` | Chat | `conversation_id` |
| `result` | Result detail | `result_id`; optional `comment_id` |
| `announcement` | News item | `announcement_id` |
| `lab_test_request` | Lab test request detail | `lab_test_request_id` |

All `data` values are strings. Every payload includes `type`, `route`, `entity_id`, and `click_action: FLUTTER_NOTIFICATION_CLICK`.

### Push types

| `type` | `route` |
|--------|---------|
| `new_message` | `conversation` |
| `new_result` | `result` |
| `staff_result_comment` | `result` (+ `comment_id`) |
| `announcement` | `announcement` |
| `lab_test_request_status` | `lab_test_request` (+ `status`) |

---

## Handlers required

1. `FirebaseMessaging.onMessage` — foreground
2. `FirebaseMessaging.onMessageOpenedApp` — background tap
3. `FirebaseMessaging.instance.getInitialMessage()` — killed-state tap (after login)

---

## Related

- [patients-and-results.md](./patients-and-results.md) — results, protected PDF
- [result-comments.md](./result-comments.md) — comment thread
- [`MOBILE_PUSH_NOTIFICATIONS.md`](../../../MOBILE_PUSH_NOTIFICATIONS.md) — complete guide
