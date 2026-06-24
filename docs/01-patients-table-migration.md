# Patients table migration

## Overview

Patient demographics were moved out of `test_results` into a dedicated `patients` table. Each result now references a patient via `patient_id`.

## Schema

### `patients`

| Column | Type | Notes |
|--------|------|-------|
| `id` | bigint | Primary key |
| `name` | string | Patient full name |
| `birth_year` | smallint, nullable | Derived from age at input time |
| `gender` | string | `male`, `female`, `other`, or `unknown` |
| `created_at`, `updated_at` | timestamps | |

**Unique constraint:** `(name, birth_year, gender)` — global deduplication.

### `test_results` changes

- **Added:** `patient_id` (FK → `patients`, required)
- **Removed:** `patient_name`, `patient_age`

## Age and birth year

When the API receives `patient_age` (integer years):

```
birth_year = current_calendar_year - patient_age
```

When reading a patient, computed age is exposed as:

```
age = current_calendar_year - birth_year
```

(JSON field `age` on the `Patient` model.)

## Data migration

Migration `2026_06_10_000001_create_patients_and_migrate_test_results.php`:

1. Creates `patients`.
2. For each existing `test_results` row, creates or reuses a patient from `patient_name`, `patient_age` (birth year uses the result’s `created_at` year), and `gender = unknown`.
3. Sets `patient_id` on each result.
4. Drops `patient_name` and `patient_age`.

## API breaking changes (results)

**Staff `POST/PATCH /api/results`** — patient fields:

| Field | Required | Notes |
|-------|----------|-------|
| `patient_id` | Optional | If set, `patient_name`, `patient_age`, `gender` are not required |
| `patient_name` | Required without `patient_id` | |
| `patient_age` | Optional | Used to compute `birth_year` |
| `gender` | Required without `patient_id` | `male`, `female`, or `other` |

**Responses** now include a nested `patient` object instead of top-level `patient_name` / `patient_age`.

## Models

- `App\Models\Patient` — `findOrCreateFromInput(name, age, gender)`
- `App\Models\TestResult` — `belongsTo(Patient::class)`

## Production deploy

```bash
php artisan migrate
```

Run during a maintenance window if the `test_results` table is large; the migration loops existing rows in PHP.
