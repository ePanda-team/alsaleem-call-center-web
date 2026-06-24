# Lab test requests (frontend guide)

**Doctor mobile:** see [`doctor/lab-test-requests.md`](./doctor/lab-test-requests.md).

Doctors request **new** lab tests (free text). Staff review requests and update status.

Base URL: **`/api`**.

---

## Authentication

| Role | Login | Header |
|------|-------|--------|
| Doctor | `POST /api/doctor/login` | `Authorization: Bearer <doctor_token>` |
| Staff | `POST /api/staff/login` | `Authorization: Bearer <staff_token>` |

---

## Doctor mobile — submit request

**`POST /api/doctor/lab-test-requests`**

```json
{
  "notes": "We need these for cardiology panel",
  "tests": [
    { "name": "Specialized lipid panel", "description": "Optional details" },
    { "name": "Custom marker X" }
  ]
}
```

| Field | Required |
|-------|----------|
| `tests` | Yes, min 1 item |
| `tests[].name` | Yes |
| `tests[].description` | No |
| `notes` | No |

**Response `201`:** full request with `status: "pending"`, `doctor`, and `items[]`.

### UI notes

- Dedicated **“Request new test”** form with dynamic rows for test names.
- After submit, show success; staff will process offline.
- Submitting triggers a **staff notification** (`doctor_lab_test_request`) — see [04-staff-notifications.md](./04-staff-notifications.md).

---

## Staff web — inbox

Gate the lab test requests UI on **`permissions.lab_test_requests_management`** from staff login (`POST /api/staff/login`). Distinct from **`lab_tests_management`** (catalog CRUD under `/api/admin/lab-tests`).

### List requests

`GET /api/lab-test-requests?status=pending`

| Query | Values |
|-------|--------|
| `status` | `pending`, `reviewed`, `approved`, `rejected` |
| `doctor_id` | Filter by doctor |

### Detail

`GET /api/lab-test-requests/{id}`

Shows `doctor`, `notes`, `items[]`, `status`.

### Update status

`PATCH /api/lab-test-requests/{id}`

```json
{ "status": "reviewed" }
```

Allowed: `reviewed`, `approved`, `rejected`.

### Workflow UI

1. **Inbox** — default filter `status=pending`.
2. **Detail** — show requested test names; actions: Mark reviewed / Approve / Reject.
3. If **approved**, staff adds catalog entries via existing admin UI: `POST /api/admin/lab-tests` (separate admin token routes under `/api/admin/*`).

---

## Status badges (suggested)

| Status | Suggested label |
|--------|-----------------|
| `pending` | Pending |
| `reviewed` | Under review |
| `approved` | Approved |
| `rejected` | Rejected |
