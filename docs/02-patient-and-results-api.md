# Patient and results API

## Overview

Patients are first-class resources. Results reference patients via `patient_id`. Both staff and doctor APIs can list patients, fetch a patient, and list that patient’s results.

## Patient object

```json
{
  "id": 1,
  "name": "John Doe",
  "birth_year": 1985,
  "age": 41,
  "gender": "male",
  "created_at": "2026-06-10T12:00:00+00:00",
  "updated_at": "2026-06-10T12:00:00+00:00"
}
```

`age` is computed from `birth_year` and the current calendar year.

---

## Staff API (`Authorization: Bearer <staff_token>`)

### List patients

`GET /api/patients`

| Query | Description |
|-------|-------------|
| `q`, `patient_name` | Search by name (partial match) |
| `patient_age`, `age` | Filter by age (`birth_year = current_year - age`) |
| `gender` | Exact match: `male`, `female`, `other`, `unknown` |
| `hospital` | Patient has a result with matching hospital (partial) |
| `lab_branch`, `branch` | Patient has a result with matching lab branch (partial) |
| `has_comments` | `1` / `true` — patient has a result with any comments |
| `page` | Pagination (20 per page) |

Frontend guide: [docs/frontend/patient-list-filters.md](../frontend/patient-list-filters.md#staff-get-apipatients)

### Get patient

`GET /api/patients/{patient}`

### Patient results

`GET /api/patients/{patient}/results`

| Query | Description |
|-------|-------------|
| `doctor_id` | Optional filter |
| `page` | Pagination |

Returns paginated results with `doctor`, `patient`, and protected `pdf_path` URL (same shape as `GET /api/results`).

### Download result PDF (staff)

`GET /api/results/{result}/pdf`

Requires staff bearer token. Returns `application/pdf` inline. Old `/storage/results/*` URLs are no longer valid.

---

### List results (updated)

`GET /api/results`

| Query | Description |
|-------|-------------|
| `patient_name` | Filter by patient name (partial match) |
| `q` | Search patient name or lab branch |
| `hospital`, `doctor_id`, `created_from`, `created_to` | Existing filters |

Response includes nested `patient` instead of `patient_name` / `patient_age`.

### Create / update result (patient input)

**Create** `POST /api/results` (multipart):

- Either `patient_id`, **or** `patient_name` + `gender` (+ optional `patient_age`)
- `gender`: `male`, `female`, `other`

**Update** `PUT/PATCH /api/results/{result}` — same patient rules.

---

## Doctor API (`Authorization: Bearer <doctor_token>`)

Doctor endpoints only expose patients that have at least one result assigned to the authenticated doctor.

### List patients

`GET /api/doctor/patients`

| Query | Description |
|-------|-------------|
| `q`, `patient_name` | Search by name (partial match) |
| `patient_age`, `age` | Filter by age (`birth_year = current_year - age`) |
| `gender` | Exact match: `male`, `female`, `other`, `unknown` |
| `hospital` | Patient has a result for this doctor with matching hospital (partial) |
| `lab_branch`, `branch` | Patient has a result for this doctor with matching lab branch (partial) |
| `has_comments` | `1` / `true` — patient has a result with unseen staff comments |
| `page` | Pagination (20 per page) |

Frontend guide: [docs/frontend/patient-list-filters.md](../frontend/patient-list-filters.md#doctor-get-apidoctorpatients)

### Get patient

`GET /api/doctor/patients/{patient}`

Returns **404** if this doctor has no results for the patient.

### Patient results

`GET /api/doctor/patients/{patient}/results`

Paginated results for this doctor and patient. Marks matching results as seen (same as `GET /api/doctor/results`).

### List results (updated)

`GET /api/doctor/results`

| Query | Description |
|-------|-------------|
| `patient_name` | Filter via patient relation |
| `patient_age` | Matches patients with `birth_year = current_year - age` |

**Response item example:**

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
  "pdf_path": "https://example.com/api/doctor/results/10/pdf",
  "comments_count": 0,
  "latest_comment": null,
  "created_at": "2026-06-10T12:00:00+00:00"
}
```

**Doctor `comments_count` / `latest_comment`:** on doctor endpoints only, these reflect **unseen staff comments** (not total thread size). Cleared when the doctor calls `GET /api/doctor/results/{result}/comments`. Staff `GET /api/results` still uses total comment count.

---

Result PDFs are stored privately. List/detail responses expose `pdf_path` as an API URL, not a public storage path.

| Role | Download endpoint |
|------|-------------------|
| Doctor | `GET /api/doctor/results/{result}/pdf` |
| Staff | `GET /api/results/{result}/pdf` |

Both require the respective bearer token. Doctors may only access their own results (**404** otherwise). Unauthenticated requests return **401**.

Deploy note: block legacy public access with Apache `.htaccess` in `public/storage/results/` or nginx `location ^~ /storage/results/ { deny all; }`.

---

## Scoping summary

| Endpoint | Scope |
|----------|--------|
| Staff `/api/patients*` | All patients globally |
| Doctor `/api/doctor/patients*` | Patients linked to this doctor’s results only |
| Staff `/api/results` | All results |
| Doctor `/api/doctor/results` | This doctor’s results only |
