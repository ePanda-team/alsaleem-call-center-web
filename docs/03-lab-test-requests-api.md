# Lab test requests API

## Overview

Doctors can submit free-text requests for new lab tests to be added to the catalog. Staff review and update request status via the staff API.

## Status values

| Status | Meaning |
|--------|---------|
| `pending` | Default when doctor submits |
| `reviewed` | Staff has reviewed |
| `approved` | Request accepted |
| `rejected` | Request declined |

---

## Doctor API (`Authorization: Bearer <doctor_token>`)

### Submit request

`POST /api/doctor/lab-test-requests`

**Body (JSON):**

```json
{
  "notes": "Optional message to staff",
  "tests": [
    {
      "name": "New specialized panel",
      "description": "Optional details"
    }
  ]
}
```

| Field | Rules |
|-------|-------|
| `tests` | Required array, min 1 item |
| `tests.*.name` | Required string |
| `tests.*.description` | Optional string |
| `notes` | Optional string |

**Response:** `201` with the created request including `doctor` and `items`.

**Example response:**

```json
{
  "id": 1,
  "doctor_id": 5,
  "status": "pending",
  "notes": "Please add these tests",
  "created_at": "2026-06-10T12:00:00.000000Z",
  "updated_at": "2026-06-10T12:00:00.000000Z",
  "doctor": { "id": 5, "name": "Dr. Ali", "...": "..." },
  "items": [
    {
      "id": 1,
      "lab_test_request_id": 1,
      "test_name": "New specialized panel",
      "description": "Optional details"
    }
  ]
}
```

---

## Staff API (`Authorization: Bearer <staff_token>`)

### List requests

`GET /api/lab-test-requests`

| Query | Description |
|-------|-------------|
| `status` | Filter: `pending`, `reviewed`, `approved`, `rejected` |
| `doctor_id` | Filter by doctor |
| `page` | Pagination |

Includes `doctor` and `items` relations.

### Get request

`GET /api/lab-test-requests/{labTestRequest}`

### Update status

`PATCH /api/lab-test-requests/{labTestRequest}`

**Body:**

```json
{
  "status": "reviewed"
}
```

Allowed values: `reviewed`, `approved`, `rejected`.

---

## Database tables

- `lab_test_requests` — `doctor_id`, `status`, `notes`
- `lab_test_request_items` — `test_name`, `description` per requested test

## Staff workflow

1. Doctor submits via `POST /api/doctor/lab-test-requests`.
2. Staff lists pending requests via `GET /api/lab-test-requests?status=pending`.
3. Staff reviews and sets status via `PATCH /api/lab-test-requests/{id}`.
4. If approved, staff manually adds tests to the catalog via `POST /api/admin/lab-tests` (existing admin API).
