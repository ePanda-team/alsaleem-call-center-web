## Specialties API (Frontend)

These endpoints manage doctor specialties with **English** and **Arabic** names.
All endpoints require **staff token auth** (admin/supervisor).

### Auth

1. `POST /api/staff/login`
```json
{
  "email": "admin@example.com",
  "password": "secret123"
}
```
Response:
```json
{
  "token": "YOUR_TOKEN",
  "user": {
    "id": 1,
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

2. Send token in every request:
```
Authorization: Bearer YOUR_TOKEN
```

---

## Endpoints (Base: `/api/admin/specialties`)

### List

- `GET /api/admin/specialties`
- Query: `q` (searches `name_en` and `name_ar`)
- Response: paginated list

### Get One

- `GET /api/admin/specialties/{id}`
- Response: specialty object

### Create

- `POST /api/admin/specialties`
```json
{
  "name_en": "Cardiology",
  "name_ar": "أمراض القلب"
}
```
- Response: created specialty

### Update

- `PUT /api/admin/specialties/{id}`
```json
{
  "name_en": "Cardiology",
  "name_ar": "أمراض القلب"
}
```
- Response: updated specialty

### Delete

- `DELETE /api/admin/specialties/{id}`
- Response:
```json
{ "ok": true }
```
