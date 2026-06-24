# Doctor API: patients, results, and badges

How the **doctor mobile app** should use patient data, result lists, unseen counts, and the lab test catalog.

Auth: see [README.md](./README.md).

---

## Breaking changes

| Removed from result JSON | Replacement |
|--------------------------|-------------|
| `patient_name`, `patient_age` | Nested **`patient`** object |
| `doctor_comment` | **`comments_count`** (unseen staff comments) + **`latest_comment`**; full thread via [result-comments.md](./result-comments.md) |
| Public `/storage/results/...` PDF URL | Protected API URL — see **PDF access** below |

---

## PDF access (protected)

`pdf_path` is **not** a public file URL. It points to an authenticated API endpoint:

`GET /api/doctor/results/{id}/pdf`

**Requirements:**

- Send `Authorization: Bearer <doctor_token>` on every request.
- The doctor can only open results assigned to them (others return **404**).
- Opening the URL in a browser without a token returns **401**.
- Do **not** open `pdf_path` in Safari/Chrome directly — fetch the PDF with the bearer token and display the blob in-app (or use an authenticated WebView).

```http
GET /api/doctor/results/10/pdf
Authorization: Bearer <doctor_token>
Accept: application/pdf
```

---

## Patient object

Every result includes:

```json
{
  "patient": {
    "id": 1,
    "name": "John Doe",
    "birth_year": 1985,
    "age": 41,
    "gender": "male"
  }
}
```

- **`age`** is computed server-side (`current_year - birth_year`).
- Doctors **read** patients only; staff upload results with patient demographics.

---

## List my results

**`GET /api/doctor/results`**

Marks all matching results as **seen** for this doctor (clears `results` count in unseen summary).

### Query parameters

| Param | Description |
|-------|-------------|
| `patient_name` | Partial name match |
| `patient_age` | Matches `patient.birth_year` |
| `has_comments` | `1` / `true` — only results with **unseen staff comments** |
| `hospital`, `lab_branch` | Partial match |
| `id` | Single result id |
| `created_from`, `created_to` | Date filters |
| `updated_from`, `updated_to` | Date filters |
| `page` | Pagination (50 per page) |

### Result row example

```json
{
  "id": 10,
  "patient": {
    "id": 1,
    "name": "John Doe",
    "birth_year": 1985,
    "age": 41,
    "gender": "male"
  },
  "lab_branch": "Main Lab",
  "hospital": "City Hospital",
  "pdf_path": "https://your-host.com/api/doctor/results/10/pdf",
  "comments_count": 1,
  "latest_comment": {
    "id": 5,
    "body": "Please review",
    "author_type": "staff",
    "author_name": "Lab Staff",
    "created_at": "2026-06-10T12:00:00+00:00"
  },
  "created_at": "2026-06-10T12:00:00+00:00"
}
```

### `comments_count` and `latest_comment` (unseen staff comments only)

On doctor result lists, these fields reflect **unseen staff replies**, not the full thread:

| Field | Meaning |
|-------|---------|
| `comments_count` | Number of **staff** comments the doctor has not read yet |
| `latest_comment` | Most recent **unseen staff** comment preview; `null` when count is 0 |

- Doctor's own comments **never** increase `comments_count`.
- Opening **`GET /api/doctor/results/{id}/comments`** marks the thread as read (`comments_seen_at`); count drops to 0 until staff posts again.
- Opening the results list alone does **not** clear comment unseen state.
- Staff API (`GET /api/results`) still returns total `comments_count` — different semantics.

`latest_comment` is `null` when `comments_count` is 0.

---

## Patients (optional tab)

Only patients who have at least one result **for this doctor**.

| Method | Path | Notes |
|--------|------|-------|
| `GET` | `/api/doctor/patients` | Paginated (20/page); see filters below |
| `GET` | `/api/doctor/patients/{id}` | **404** if no shared results |
| `GET` | `/api/doctor/patients/{id}/results` | Same row shape as `/api/doctor/results`; marks seen |

### Patients list filters

**`GET /api/doctor/patients`**

Full filter reference: [../patient-list-filters.md](../patient-list-filters.md#doctor-get-apidoctorpatients)

| Param | Alias | Description |
|-------|-------|-------------|
| `patient_name` | `q` | Partial name match |
| `patient_age` | `age` | Matches `birth_year = current_year - age` |
| `gender` | — | Exact: `male`, `female`, `other`, `unknown` |
| `hospital` | — | Patient has a result for this doctor with matching hospital (partial) |
| `lab_branch` | `branch` | Patient has a result for this doctor with matching branch (partial) |
| `has_comments` | — | `1` / `true` — patient has a result with **unseen staff comments** |
| `page` | — | Pagination |

Examples:

```http
GET /api/doctor/patients?patient_age=41&gender=male
GET /api/doctor/patients?hospital=City&lab_branch=Main&has_comments=1
GET /api/doctor/patients?q=Ahmed&branch=Lab&page=2
```

### Patient response fields (list + detail)

Each patient object includes unseen **result** indicators (same rules as `GET /api/doctor/unseen-summary` → `results.count`):

| Field | Description |
|-------|-------------|
| `unseen_results_count` | Count of this doctor’s results for the patient not yet marked seen |
| `has_unseen_results` | `true` when `unseen_results_count > 0` |

Cleared when the doctor opens `GET /api/doctor/results` or `GET /api/doctor/patients/{id}/results`.

**Not the same as `has_comments`:** that filter/query param is for **unseen staff comments** on results. Comment badges on result rows use `comments_count` / `latest_comment` ([below](#comments_count-and-latest_comment-unseen-staff-comments-only)).

Example:

```json
{
  "id": 12,
  "name": "Ahmed",
  "birth_year": 1985,
  "age": 41,
  "gender": "male",
  "unseen_results_count": 2,
  "has_unseen_results": true
}
```

---

## Unseen summary (tab badges)

**`GET /api/doctor/unseen-summary`**

Poll on app open or on a timer for home/tab badges. Does **not** mark anything as seen by itself.

```json
{
  "has_unseen": true,
  "messages": { "unseen": true, "count": 2 },
  "announcements": { "unseen": true, "count": 1 },
  "results": { "unseen": true, "count": 3 },
  "tests": { "unseen": false, "count": 0 }
}
```

### What clears each bucket

| Bucket | Cleared when doctor calls |
|--------|---------------------------|
| `messages` | `POST .../messages/read` (existing chat flow) |
| `announcements` | `GET /api/doctor/announcements` |
| `results` | `GET /api/doctor/results` (or patient-scoped results list) |
| `tests` | `GET /api/doctor/lab-tests` (**not** public `GET /api/lab-tests`) |

Use **`GET /api/doctor/lab-tests`** with the bearer token so catalog unseen counts reset.

---

## Lab test catalog

**`GET /api/doctor/lab-tests`**

Paginated (**50** per page). Query: `?page=1`

Returns Laravel pagination JSON; each row in `data` is `{ "id", "name", "description" }`.

**Catalog seen watermark:** only **page 1** (or omitting `page`) updates the doctor’s catalog “seen” timestamp and clears the `tests` bucket in `unseen-summary`. Later pages do not re-mark the catalog.

Prefer this over the public **`GET /api/lab-tests`** when the doctor is logged in.

---

## Suggested UI flows

1. **Home** — `GET /api/doctor/unseen-summary` → show badges on Messages, Announcements, Results, Tests tabs.
2. **Results tab** — `GET /api/doctor/results`; show `comments_count` badge (unseen staff replies); tap → PDF + [Comments](./result-comments.md).
3. **Patients tab** (optional) — `GET /api/doctor/patients` → show `has_unseen_results` badge → detail → `GET .../patients/{id}/results`.
4. **Tests tab** — `GET /api/doctor/lab-tests`.

---

## Mobile checklist

- [ ] Replace `patient_name` / `patient_age` with `patient.name` / `patient.age`.
- [ ] Replace `doctor_comment` with `comments_count` and open [result-comments.md](./result-comments.md) for the thread.
- [ ] Poll `GET /api/doctor/unseen-summary` for badges.
- [ ] Show `has_unseen_results` / `unseen_results_count` on patient list rows.
- [ ] Use `GET /api/doctor/lab-tests` (authenticated) for catalog + unseen reset; read `data` and pass `page` for more rows.
- [ ] Fetch PDFs with `Authorization: Bearer <doctor_token>` — do not open `pdf_path` in an external browser.
