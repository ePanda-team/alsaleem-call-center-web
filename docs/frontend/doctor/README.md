# Doctor mobile API — recent updates

Handover docs for the **doctor mobile app** only. All paths use the Laravel prefix **`/api`** (e.g. `https://your-host.com/api`).

For **staff web** endpoints, see [`../`](../) (mixed frontend guides) or [`../../`](../..) (backend reference).

---

## Authentication

Every protected route requires:

```
Authorization: Bearer <doctor_token>
```

| Method | Path | Body |
|--------|------|------|
| `POST` | `/api/doctor/login` | `{ "username", "password", "device_name"? }` → `{ "token" }` |
| `POST` | `/api/doctor/logout` | Revokes this device’s token only |

After login, call **`GET /api/doctor/me`** for profile fields (`bio`, `profile_picture_url`, etc.). See [`../../DOCTOR_PROFILE_UPDATE.md`](../../DOCTOR_PROFILE_UPDATE.md).

---

## Feature guides (new / changed)

| Doc | Topics |
|-----|--------|
| [`MOBILE_PUSH_NOTIFICATIONS.md`](../../../MOBILE_PUSH_NOTIFICATIONS.md) | **Push notifications** — FCM setup, deep linking, Flutter handlers |
| [patients-and-results.md](./patients-and-results.md) | Nested `patient` on results, patient list, filters, unseen badges, lab catalog |
| [../patient-list-filters.md](../patient-list-filters.md) | Patient list query params (staff + doctor) |
| [push-notifications.md](./push-notifications.md) | Short push reference (links to full guide above) |
| [result-comments.md](./result-comments.md) | التعليقات — comment thread per result |
| [lab-test-requests.md](./lab-test-requests.md) | Request new catalog tests from the app |

---

## Deploy coordination

Backend requires migrations before the app can rely on new fields:

```bash
php artisan migrate
```

Release the mobile app **after** the API is migrated. Removed fields (`patient_name`, `patient_age`, `doctor_comment` on results) will break older clients.

---

## Quick endpoint index (new / changed)

All **list** endpoints return standard Laravel pagination JSON (`data`, `current_page`, `last_page`, `total`, `links`, …). Pass `?page=` for subsequent pages.

| Method | Path |
|--------|------|
| `GET` | `/api/doctor/unseen-summary` |
| `GET` | `/api/doctor/patients` |
| `GET` | `/api/doctor/patients/{patient}` |
| `GET` | `/api/doctor/patients/{patient}/results` |
| `GET` | `/api/doctor/results` |
| `GET` | `/api/doctor/results/{result}/comments` |
| `POST` | `/api/doctor/results/{result}/comments` |
| `GET` | `/api/doctor/lab-tests` |
| `GET` | `/api/doctor/lab-test-requests` |
| `GET` | `/api/doctor/lab-test-requests/{id}` |
| `POST` | `/api/doctor/lab-test-requests` |

**Removed:** `POST /api/doctor/results/{result}/comment` (single `doctor_comment` field).
