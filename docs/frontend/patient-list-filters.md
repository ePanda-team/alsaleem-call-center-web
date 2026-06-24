# Patient list filters

Shared query parameters for **staff** and **doctor** patient list endpoints. Use the same filter UI where possible; note the differences in scope and `has_comments` semantics below.

Base URL: **`/api`**

---

## Endpoints

| Role | Auth | List patients | Patient detail | Patient results |
|------|------|---------------|----------------|-----------------|
| **Staff** (admin web) | `Authorization: Bearer <staff_token>` | [`GET /api/patients`](#staff-get-apipatients) | `GET /api/patients/{id}` | `GET /api/patients/{id}/results` |
| **Doctor** (mobile) | `Authorization: Bearer <doctor_token>` | [`GET /api/doctor/patients`](#doctor-get-apidoctorpatients) | `GET /api/doctor/patients/{id}` | `GET /api/doctor/patients/{id}/results` |

Staff login: `POST /api/staff/login`  
Doctor login: `POST /api/doctor/login`

Related docs:

- Staff results & PDF: [02-patient-and-results-api.md](./02-patient-and-results-api.md)
- Doctor results, badges, PDF: [doctor/patients-and-results.md](./doctor/patients-and-results.md)

---

## Query parameters (both endpoints)

| Param | Alias | Type | Description |
|-------|-------|------|-------------|
| `patient_name` | `q` | string | Partial match on patient **name** |
| `patient_age` | `age` | integer 0–150 | `birth_year = current_year - age` |
| `gender` | — | string | Exact: `male`, `female`, `other`, `unknown` |
| `hospital` | — | string | Patient has a matching **test result** with hospital (partial) |
| `lab_branch` | `branch` | string | Patient has a matching **test result** with lab branch (partial) |
| `has_comments` | — | boolean | Patient has a matching **test result** with comments (see semantics) |
| `page` | — | integer | Pagination (**20** per page) |

All provided filters combine with **AND** logic. Invalid `gender` → **422**.

---

## Staff: `GET /api/patients`

**Scope:** All patients globally (staff/admin web app).

**Result-related filters** (`hospital`, `lab_branch` / `branch`, `has_comments`) require the patient to have at least one test result matching the filter (any doctor).

**`has_comments` (staff):** patient has at least one result with **any** comment in the thread (total comments, not unread).

### Examples

```http
GET /api/patients?q=Ahmed
GET /api/patients?patient_age=40&gender=female
GET /api/patients?hospital=City&lab_branch=Main
GET /api/patients?has_comments=1&page=2
```

### Response

Standard Laravel pagination JSON with patient objects (`id`, `name`, `birth_year`, `age`, `gender`, …).

---

## Doctor: `GET /api/doctor/patients`

**Scope:** Only patients who have at least one test result **assigned to the logged-in doctor**.

**Result-related filters** apply only to that doctor’s results for each patient.

**`has_comments` (doctor):** patient has at least one of **this doctor’s** results with **unseen staff comments** (same as `comments_count` on the doctor results list). Cleared when the doctor opens `GET /api/doctor/results/{id}/comments`.

### Examples

```http
GET /api/doctor/patients?q=Ahmed
GET /api/doctor/patients?patient_age=41&gender=male
GET /api/doctor/patients?hospital=City&branch=Lab&has_comments=1
GET /api/doctor/patients?page=2
```

### Response

Doctor patient list and detail include unseen-result indicators (doctor-only; not on staff responses):

| Field | Type | Description |
|-------|------|-------------|
| `unseen_results_count` | integer | This doctor’s results for the patient with no `test_result_doctor_views` row yet |
| `has_unseen_results` | boolean | `unseen_results_count > 0` |

Same semantics as `results.count` in `GET /api/doctor/unseen-summary`. Cleared when the doctor opens `GET /api/doctor/results` or `GET /api/doctor/patients/{id}/results` (those lists mark results as seen).

**Distinct from `has_comments` filter:** that filters patients with **unseen staff comments**, not unseen results.

Example row:

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

Paginated 20 per page. `GET /api/doctor/patients/{id}` returns the same object shape (single object, not paginated).

---

## Comparison

| Aspect | Staff `GET /api/patients` | Doctor `GET /api/doctor/patients` |
|--------|-------------------------|-----------------------------------|
| Auth | Staff token | Doctor token |
| Patient scope | All patients | Patients with results for this doctor only |
| `hospital` / `branch` | Any result for patient | This doctor’s results only |
| `has_comments` | Any result with comments | Unseen **staff** comments on doctor’s results |
| Unseen results fields | — | `unseen_results_count`, `has_unseen_results` on each patient row |
| Name / age / gender | On `patients` table | On `patients` table |

---

## Mobile / frontend checklist

- [ ] Reuse the same filter field names on staff and doctor patient screens where applicable.
- [ ] Staff: `has_comments` = results with a comment thread.
- [ ] Doctor: `has_comments` = unread staff replies (badge aligns with results list).
- [ ] Doctor: show `has_unseen_results` / `unseen_results_count` on patient list rows (new PDFs not yet opened in results list).
- [ ] Pass `page` for infinite scroll / pagination (20 items).
- [ ] Doctor patient detail / results: [doctor/patients-and-results.md](./doctor/patients-and-results.md)
- [ ] Staff patient results: [02-patient-and-results-api.md](./02-patient-and-results-api.md)
