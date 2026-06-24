# Patients on test results (frontend guide)

**Doctor mobile:** see [`doctor/`](./doctor/).

This guide explains **breaking API changes** after patient data was moved to a dedicated `patients` table. Use it when updating the **doctor mobile app** and **staff web app**.

Base URL includes **`/api`** (e.g. `https://your-host.com/api`).

---

## What changed

| Before | After |
|--------|--------|
| `patient_name`, `patient_age` on each result | Nested **`patient`** object |
| Staff creates result with `patient_name` only | Staff must send **`gender`** (or existing **`patient_id`**) |
| Age stored on result | Age is **computed** from `patient.birth_year` |

---

## Patient object (in API responses)

```json
{
  "id": 1,
  "name": "John Doe",
  "birth_year": 1985,
  "age": 41,
  "gender": "male"
}
```

- **`age`** is calculated server-side: `current_year - birth_year`.
- When **creating** a result, send **`patient_age`** (years); the API stores **`birth_year`**.

---

## Staff app — create / edit result

**`POST /api/results`** (multipart, `Authorization: Bearer <staff_token>`)

Choose one:

**A. Link existing patient**

```
patient_id=1
lab_branch=Main Lab
doctor_id=5
pdf=<file>
```

**B. Create or match patient**

```
patient_name=John Doe
patient_age=41
gender=male
lab_branch=Main Lab
doctor_id=5
pdf=<file>
```

`gender` must be `male`, `female`, or `other`.

**`PUT/PATCH /api/results/{id}`** — same patient rules.

---

## Result list / detail responses

Results now include:

```json
{
  "id": 10,
  "patient_id": 1,
  "patient": {
    "id": 1,
    "name": "John Doe",
    "birth_year": 1985,
    "age": 41,
    "gender": "male"
  },
  "lab_branch": "Main Lab",
  "hospital": "City Hospital",
  "pdf_path": "https://.../storage/results/file.pdf",
  "comments_count": 2,
  "created_at": "..."
}
```

### UI migration checklist

- [ ] Replace all reads of `patient_name` / `patient_age` with `patient.name` / `patient.age`.
- [ ] Staff upload form: add **gender** field when creating a new patient.
- [ ] Optional: patient picker using `patient_id` for repeat patients.

---

## Doctor mobile app

Doctor result lists already return a nested **`patient`** object (see [02-patient-and-results-api.md](./02-patient-and-results-api.md)).

No change to doctor login or auth headers.

---

## Deploy note

Backend migration runs with `php artisan migrate`. Coordinate app release so clients do not expect removed fields after deploy.
