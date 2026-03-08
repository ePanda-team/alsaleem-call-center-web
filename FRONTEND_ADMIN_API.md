## Admin Frontend API Guide

This frontend should use the **new token-based Admin API** instead of web form endpoints.
It avoids CSRF issues and is designed for cross-origin React apps.

### Base

- Base URL: `https://your-domain.com`
- API prefix: `/api`
- All admin endpoints require a **staff token**.

---

## Authentication

### Login

- `POST /api/staff/login`
- Body (JSON):
```json
{
  "email": "admin@example.com",
  "password": "secret123"
}
```
- Response:
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

### Use token in all requests

Header:
```
Authorization: Bearer YOUR_TOKEN
```

### Logout

- `POST /api/staff/logout`
- Response:
```json
{ "ok": true }
```

---

## Admin Resources (role: admin, supervisor)

Base prefix: `/api/admin`

### Users

- `GET /api/admin/users`
  - Query: `q`, `role`
- `GET /api/admin/users/{id}`
- `POST /api/admin/users`
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "secret123",
  "role": "admin",
  "branch_assignment": "Main"
}
```
- `PUT /api/admin/users/{id}`
```json
{
  "name": "Updated User",
  "email": "user@example.com",
  "password": "newpass123",
  "role": "supervisor",
  "branch_assignment": "Main"
}
```
- `DELETE /api/admin/users/{id}`

### Doctors

- `GET /api/admin/doctors`
  - Query: `q`, `experience`
- `GET /api/admin/doctors/{id}`
- `POST /api/admin/doctors`
```json
{
  "name": "Dr. Ali",
  "username": "dr.ali",
  "speciality": "Cardiology",
  "experience_level": "Consultant",
  "phone": "+96555555555",
  "password": "secret123"
}
```
- `PUT /api/admin/doctors/{id}`
```json
{
  "name": "Dr. Ali Updated",
  "username": "dr.ali",
  "speciality": "Cardiology",
  "experience_level": "Consultant",
  "phone": "+96555555555",
  "password": "newpass123"
}
```
- `DELETE /api/admin/doctors/{id}`

### Sliders (multipart/form-data)

- `GET /api/admin/sliders`
- `GET /api/admin/sliders/{id}`
- `POST /api/admin/sliders` (form-data: `title`, `image`, `position`)
- `PUT /api/admin/sliders/{id}` (form-data: `title`, optional `image`, `position`)
- `DELETE /api/admin/sliders/{id}`

### Announcements (multipart/form-data)

- `GET /api/admin/announcements`
- `GET /api/admin/announcements/{id}`
- `POST /api/admin/announcements`
  - form-data: `title`, `body`, `target_specialties[]`, `target_experience_levels[]`, optional `media[]`
- `PUT /api/admin/announcements/{id}`
  - form-data: `title`, `body`, `target_specialties[]`, `target_experience_levels[]`, optional `media[]`
- `DELETE /api/admin/announcements/{id}`
- `GET /api/admin/announcements/{id}/viewers`

### Lab Tests

- `GET /api/admin/lab-tests`
- `GET /api/admin/lab-tests/{id}`
- `POST /api/admin/lab-tests`
```json
{
  "name": "CBC",
  "description": "Complete blood count"
}
```
- `PUT /api/admin/lab-tests/{id}`
```json
{
  "name": "CBC",
  "description": "Updated description"
}
```
- `DELETE /api/admin/lab-tests/{id}`

### Lab Branches

- `GET /api/admin/lab-branches`
- `GET /api/admin/lab-branches/{id}`
- `POST /api/admin/lab-branches`
```json
{
  "name": "Main Branch",
  "address": "Street 1",
  "phone": "+96555555555",
  "is_active": true
}
```
- `PUT /api/admin/lab-branches/{id}`
```json
{
  "name": "Main Branch",
  "address": "Street 2",
  "phone": "+96555555555",
  "is_active": true
}
```
- `DELETE /api/admin/lab-branches/{id}`

---

## Results API (role: admin, supervisor, agent)

Base prefix: `/api`

- `GET /api/results`
  - Query: `q`, `doctor_id`
- `GET /api/results/{id}`
- `POST /api/results` (multipart/form-data: `patient_name`, `patient_age`, `hospital`, `lab_branch`, `doctor_id`, `pdf`)
- `PUT /api/results/{id}` (multipart/form-data: same fields, `pdf` optional)
- `DELETE /api/results/{id}`

---

## File Upload API

- `POST /api/upload` (multipart/form-data: `file`)
- Response:
```json
{
  "success": true,
  "url": "https://your-domain.com/storage/uploads/file.png",
  "path": "uploads/file.png",
  "filename": "file.png",
  "original_name": "file.png",
  "size": 12345,
  "mime_type": "image/png"
}
```
