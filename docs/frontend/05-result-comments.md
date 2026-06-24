# Test result comments (frontend guide)

**Doctor mobile:** see [`doctor/result-comments.md`](./doctor/result-comments.md).

التعليقات — dedicated **comments screen** per test result: view history and add new comments. Doctors and staff both participate in the same thread.

Base URL: **`/api`**.

---

## UI requirements (from product)

| Requirement | Implementation |
|-------------|----------------|
| Independent comments interface | Separate screen/route per `result_id` |
| Doctor can add a comment | `POST` with `{ "body": "..." }` |
| Show previous comments on same result | `GET` paginated list, oldest first |

---

## Authentication

| App | Header |
|-----|--------|
| Doctor mobile | `Authorization: Bearer <doctor_token>` |
| Staff web | `Authorization: Bearer <staff_token>` |

---

## Endpoints

### Doctor

| Method | Path |
|--------|------|
| `GET` | `/api/doctor/results/{result_id}/comments` |
| `POST` | `/api/doctor/results/{result_id}/comments` |

Doctor can only access results assigned to them (`403` otherwise).

### Staff

| Method | Path |
|--------|------|
| `GET` | `/api/results/{result_id}/comments` |
| `POST` | `/api/results/{result_id}/comments` |

---

## List comments

`GET .../comments?page=1`

Paginated (50 per page). Ordered **oldest first** (chat-style).

### Comment object

```json
{
  "id": 1,
  "test_result_id": 10,
  "author_type": "doctor",
  "author_id": 5,
  "author_name": "Dr. Ali",
  "body": "Please review this result again",
  "created_at": "2026-06-10T12:00:00+00:00"
}
```

`author_type` is `doctor` or `staff`.

---

## Add comment

`POST .../comments`

```json
{
  "body": "Your comment text here"
}
```

| Field | Rules |
|-------|-------|
| `body` | Required, 1–20000 characters |

**Response `201`:** the created comment object.

### Side effects

- **Doctor** comment → staff receive in-app notification (`doctor_result_comment`) with `comment_id` in `data`.
- **Staff** comment → FCM push to doctor (`staff_result_comment`); no staff in-app notification. See [doctor/push-notifications.md](./doctor/push-notifications.md).

---

## Result list preview (doctor app)

`GET /api/doctor/results` includes:

```json
{
  "comments_count": 2,
  "latest_comment": {
    "id": 5,
    "body": "Latest text preview",
    "author_type": "doctor",
    "author_name": "Dr. Ali",
    "created_at": "..."
  }
}
```

Use `comments_count` for a badge on the result row; tap row → open PDF and/or **Comments** screen.

Staff `GET /api/results` includes `comments_count` on each result.

---

## Breaking change — remove old endpoint

**Removed:** `POST /api/doctor/results/{result}/comment` with `{ "doctor_comment": "..." }`.

**Use instead:** `POST /api/doctor/results/{result}/comments` with `{ "body": "..." }`.

Old field **`doctor_comment`** on results is removed. Each POST **appends** a comment; it does not replace a single field.

Existing `doctor_comment` values were migrated into the first row of the comments table.

---

## Suggested screen layout

```
┌─────────────────────────────────┐
│  Result #10 — John Doe          │
│  [ View PDF ]                   │
├─────────────────────────────────┤
│  Dr. Ali · 10 Jun 12:00         │
│  Please review again            │
│                                 │
│  Staff User · 10 Jun 14:30      │
│  Noted, we will follow up       │
├─────────────────────────────────┤
│  [ Type a comment...    ] [Send]│
└─────────────────────────────────┘
```

- Load thread on mount: `GET .../comments`.
- On send success: append to list or refetch.
- Differentiate bubbles by `author_type` (doctor vs staff).
- From staff notification with `comment_id`: open this screen and scroll to that comment if possible.

---

## Related docs

- [02-patient-and-results-api.md](./02-patient-and-results-api.md) — result list fields
- [04-staff-notifications.md](./04-staff-notifications.md) — `doctor_result_comment` navigation
