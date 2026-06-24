# Doctor API: lab test requests

Doctors can **request new** lab tests (free text) for staff to review, track request **status** in the app, and receive a **push notification** when staff updates status.

Auth: see [README.md](./README.md).

---

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/doctor/lab-test-requests` | Paginated list of **your** requests (20/page) |
| `GET` | `/api/doctor/lab-test-requests/{id}` | Single request detail |
| `POST` | `/api/doctor/lab-test-requests` | Submit a new request |

---

## List my requests

**`GET /api/doctor/lab-test-requests`**

Standard Laravel pagination JSON (`data`, `current_page`, `last_page`, `total`, …).

### Query parameters

| Param | Description |
|-------|-------------|
| `status` | Optional filter: `pending`, `reviewed`, `approved`, `rejected` |
| `page` | Pagination (20 per page) |

Examples:

```http
GET /api/doctor/lab-test-requests?page=1
GET /api/doctor/lab-test-requests?status=pending&page=1
```

### List row shape

```json
{
  "id": 1,
  "status": "pending",
  "notes": "Optional message to the lab team",
  "items": [
    {
      "id": 1,
      "test_name": "Specialized lipid panel",
      "description": "Optional details"
    }
  ],
  "created_at": "2026-06-10T12:00:00+00:00",
  "updated_at": "2026-06-10T12:00:00+00:00"
}
```

---

## Request detail

**`GET /api/doctor/lab-test-requests/{id}`**

Same object shape as a list row. **404** if the request belongs to another doctor.

Use after a push notification tap (`lab_test_request_id` in FCM `data`) or from the inbox list.

---

## Submit request

**`POST /api/doctor/lab-test-requests`**

`Content-Type: application/json`

### Request body

```json
{
  "notes": "Optional message to the lab team",
  "tests": [
    {
      "name": "Specialized lipid panel",
      "description": "Optional details"
    },
    {
      "name": "Custom marker X"
    }
  ]
}
```

| Field | Required | Rules |
|-------|----------|-------|
| `tests` | Yes | Array, minimum 1 item |
| `tests[].name` | Yes | Non-empty string |
| `tests[].description` | No | String |
| `notes` | No | String, max 5000 |

### Response `201`

Returns the created request (includes `doctor` relation and full `items` timestamps). Status is always **`pending`**.

Submitting triggers a **staff in-app notification** (`doctor_lab_test_request`); that is for staff only, not the doctor app.

---

## Status values

| Status | Meaning (UI) |
|--------|----------------|
| `pending` | Submitted; awaiting staff |
| `reviewed` | Staff has reviewed |
| `approved` | Approved (staff may add tests to catalog) |
| `rejected` | Rejected |

Staff update status via `PATCH /api/lab-test-requests/{id}` (staff API). When status changes to `reviewed`, `approved`, or `rejected`, the doctor receives an **FCM push** — see [push-notifications.md](./push-notifications.md).

---

## Push notification (status update)

| Field | Value |
|-------|--------|
| `type` | `lab_test_request_status` |
| `route` | `lab_test_request` |
| `entity_id` | Request id |
| `lab_test_request_id` | Request id |
| `status` | New status (`reviewed`, `approved`, `rejected`) |

**On tap:** open `GET /api/doctor/lab-test-requests/{lab_test_request_id}` and show status + items.

Arabic title/body examples:

| Status | Title |
|--------|--------|
| `reviewed` | تمت مراجعة طلب الفحوصات |
| `approved` | تمت الموافقة على طلب الفحوصات |
| `rejected` | تم رفض طلب الفحوصات |

Full routing: [`MOBILE_PUSH_NOTIFICATIONS.md`](../../../MOBILE_PUSH_NOTIFICATIONS.md).

---

## Suggested UI

1. **Tests / catalog screen** — entry to submit a new request and open **My requests** inbox.
2. **Inbox** — `GET /api/doctor/lab-test-requests` with optional status filter; infinite scroll via `page`.
3. **Detail** — show `items`, `notes`, status badge; refresh after push tap.
4. **Submit form** — dynamic test name rows + optional notes → `POST`.

---

## Mobile checklist

- [ ] `GET /api/doctor/lab-test-requests` — read `data`, paginate with `page`.
- [ ] `GET /api/doctor/lab-test-requests/{id}` for detail and push deep links.
- [ ] `POST /api/doctor/lab-test-requests` with at least one `tests[].name`.
- [ ] Handle `422` validation errors.
- [ ] Show status badge (`pending` / `reviewed` / `approved` / `rejected`).
- [ ] Handle `lab_test_request_status` push → open request detail by `lab_test_request_id`.
