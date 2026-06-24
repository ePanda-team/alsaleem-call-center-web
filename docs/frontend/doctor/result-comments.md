# Doctor API: result comments (التعليقات)

Dedicated **comments screen** per test result: load history and append new comments. Staff replies appear in the same thread (read-only for the doctor UI).

Auth: see [README.md](./README.md).

---

## Endpoints

| Method | Path |
|--------|------|
| `GET` | `/api/doctor/results/{result_id}/comments` |
| `POST` | `/api/doctor/results/{result_id}/comments` |

- Result must belong to the logged-in doctor (`403` otherwise).
- Comments are **append-only** (no edit/delete in v1).

---

## List comments

**`GET /api/doctor/results/{result_id}/comments`**

- Paginated (50 per page).
- Ordered **oldest first** (chat-style).
- Query: `?page=1`
- **Marks all comments on this result as seen** for the doctor (`comments_seen_at`). After this call, `comments_count` on the result list becomes `0` until staff posts a new comment.

### Response item

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

`author_type` is `doctor` or `staff`. Style bubbles differently in the UI.

---

## Add comment

**`POST /api/doctor/results/{result_id}/comments`**

```json
{
  "body": "Your comment text"
}
```

| Field | Rules |
|-------|-------|
| `body` | Required, 1–20000 characters |

**Response `201`:** the created comment object (same shape as list items).

Staff users are notified in their web app (doctor app does not receive that notification).

---

## Breaking changes

| Old | New |
|-----|-----|
| `POST /api/doctor/results/{id}/comment` | `POST /api/doctor/results/{id}/comments` |
| Body `{ "doctor_comment": "..." }` | Body `{ "body": "..." }` |
| Single `doctor_comment` on result row | Unseen **`comments_count`** + **`latest_comment`** on [patients-and-results.md](./patients-and-results.md) |

Each POST **adds** a comment; it does not replace previous text.

---

## Suggested screen flow

1. From result detail, tap **Comments** (التعليقات).
2. On mount: `GET .../comments` → render list oldest-first.
3. Composer at bottom: `POST .../comments` on send → append to list or refetch.
4. Show unseen `comments_count` on the result list row ([patients-and-results.md](./patients-and-results.md)); refetch list after opening comments to clear badge.

```
┌─────────────────────────────────┐
│  Result #10 — John Doe          │
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

---

## Mobile checklist

- [ ] Remove calls to `POST .../comment` and reads of `doctor_comment`.
- [ ] Implement dedicated Comments screen with `GET` + `POST .../comments`.
- [ ] Display staff messages (`author_type: "staff"`) in the thread.
- [ ] Show `comments_count` badge on result list items (unseen **staff** comments only).
- [ ] Validate non-empty `body` before submit.
