# Patients and results screens (frontend guide)

**Doctor mobile:** see [`doctor/`](./doctor/).

How to build **patient list**, **patient detail**, and **results** flows for the doctor mobile app and staff web app.

Base URL: **`/api`**.

---

## Authentication

| App | Header |
|-----|--------|
| Doctor mobile | `Authorization: Bearer <doctor_token>` from `POST /api/doctor/login` |
| Staff web | `Authorization: Bearer <staff_token>` from `POST /api/staff/login` |

---

## Staff — patients

### Patient search / list

`GET /api/patients`

Paginated patient directory (20 per page). Supports name, age, gender, hospital, branch, and comment filters.

**Full filter reference:** [patient-list-filters.md](./patient-list-filters.md#staff-get-apipatients)

### Patient detail

`GET /api/patients/{patient_id}`

### Patient’s results

`GET /api/patients/{patient_id}/results`

Optional `?doctor_id=` filter. Same result shape as `GET /api/results`.

### Results list with patient filter

`GET /api/results?patient_name=John`

Also supports `q`, `hospital`, `doctor_id`, `created_from`, `created_to`.

Response includes `patient`, `doctor`, `comments_count`, `pdf_path` (protected API URL — see **PDF access** below).

### PDF access (protected)

`pdf_path` returns a URL like `GET /api/results/{id}/pdf`. This endpoint requires `Authorization: Bearer <staff_token>`.

- Opening the URL without a token returns **401**.
- Fetch the PDF with the staff token and display in-app (blob URL or authenticated fetch), not via a pasted public link.

```http
GET /api/results/10/pdf
Authorization: Bearer <staff_token>
Accept: application/pdf
```

**Nginx:** deny direct access to legacy public paths: `location ^~ /storage/results/ { deny all; }`

---

## Doctor mobile — patients

Scoped to patients who have at least one result **for this doctor**.

| Screen | Endpoint |
|--------|----------|
| Patient list | `GET /api/doctor/patients?q=` |
| Patient detail | `GET /api/doctor/patients/{id}` (404 if no shared results) |
| Patient’s results | `GET /api/doctor/patients/{id}/results` |
| All my results | `GET /api/doctor/results` |
| Filter by name | `GET /api/doctor/results?patient_name=` |
| Filter by age | `GET /api/doctor/results?patient_age=` |
| Only with comments | `GET /api/doctor/results?has_comments=1` |

### Doctor result row (list item)

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
  "comments_count": 2,
  "latest_comment": {
    "id": 5,
    "body": "Please review",
    "author_type": "doctor",
    "author_name": "Dr. Ali",
    "created_at": "2026-06-10T12:00:00+00:00"
  },
  "created_at": "2026-06-10T12:00:00+00:00"
}
```

`latest_comment` is `null` when there are no comments.

---

## Suggested UI flows

### Staff

1. **Results inbox** — `GET /api/results` with filters.
2. Tap result → PDF viewer + link to **Comments** screen (see [05-result-comments.md](./05-result-comments.md)).
3. **Patients** tab — `GET /api/patients` → tap patient → `GET /api/patients/{id}/results`.

### Doctor mobile

1. **Results** tab — `GET /api/doctor/results`; show `comments_count` badge.
2. Optional **Patients** tab — `GET /api/doctor/patients`.
3. Opening a result list marks results as seen (existing unseen-summary behaviour).

---

## Related docs

- [01-patients-table-migration.md](./01-patients-table-migration.md) — field renames when creating results
- [05-result-comments.md](./05-result-comments.md) — comments thread per result
