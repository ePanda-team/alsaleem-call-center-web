## Backend Overview

This backend is a Laravel app that serves:
- **Staff/Admin web UI** (session-based auth)
- **Doctor mobile API** (token-based auth)
- **Public API** for sliders and lab tests

Base URL examples:
- Local: `http://127.0.0.1:8001`
- Production: `https://your-domain.com`

### Auth Types

**Staff (web)**
- Session-based, via `/login` and `/logout`
- Protected by `auth` middleware and role checks

**Doctor (mobile API)**
- Token-based, via `POST /api/doctor/login`
- Use `Authorization: Bearer <token>`

---

## Staff/Admin Web Routes

These are server-rendered pages and form submissions.

### Authentication

- `GET /login`
  - Payload: none
  - Response: HTML login page
- `POST /login`
  - Payload (form): `email`, `password`, optional `remember`
  - Example JSON (form fields): `{ "email": "admin@example.com", "password": "secret123", "remember": true }`
  - Response (success): redirect to `/`
  - Response (error): HTML login page with validation errors
- `POST /logout`
  - Payload: none
  - Response: redirect to `/login`

### Dashboard

- `GET /`
  - Payload: none
  - Response: HTML dashboard page (requires auth)

### Admin Management (role: admin, supervisor)

All prefixed with `/admin`.

- **Users**
  - `GET /admin/users`
    - Payload: optional query `q`
    - Response: HTML list
  - `GET /admin/users/create`
    - Payload: none
    - Response: HTML form
  - `POST /admin/users`
    - Payload (form): `name`, `email`, `password`, `role`
  - Example JSON (form fields): `{ "name": "Admin User", "email": "admin@example.com", "password": "secret123", "role": "admin" }`
    - Response: redirect to list (or back with errors)
  - `GET /admin/users/{user}/edit`
    - Payload: none
    - Response: HTML form
  - `PUT /admin/users/{user}`
    - Payload (form): `name`, `email`, optional `password`, `role`
  - Example JSON (form fields): `{ "name": "Updated User", "email": "user@example.com", "password": "newpass123", "role": "supervisor" }`
    - Response: redirect to list (or back with errors)
  - `DELETE /admin/users/{user}`
    - Payload: none
    - Response: redirect to list

- **Doctors**
  - `GET /admin/doctors`
    - Payload: optional query `q`
    - Response: HTML list
  - `GET /admin/doctors/create`
    - Payload: none
    - Response: HTML form
  - `POST /admin/doctors`
    - Payload (form): `name`, `username`, `speciality`, `experience_level`, `phone`, `password`
  - Example JSON (form fields): `{ "name": "Dr. Ali", "username": "dr.ali", "speciality": "Cardiology", "experience_level": "senior", "phone": "+96555555555", "password": "secret123" }`
    - Response: redirect to list (or back with errors)
  - `GET /admin/doctors/{doctor}/edit`
    - Payload: none
    - Response: HTML form
  - `PUT /admin/doctors/{doctor}`
    - Payload (form): `name`, `username`, `speciality`, `experience_level`, `phone`, optional `password`
  - Example JSON (form fields): `{ "name": "Dr. Ali Updated", "username": "dr.ali", "speciality": "Cardiology", "experience_level": "senior", "phone": "+96555555555", "password": "newpass123" }`
    - Response: redirect to list (or back with errors)
  - `DELETE /admin/doctors/{doctor}`
    - Payload: none
    - Response: redirect to list

- **Sliders**
  - `GET /admin/sliders`
    - Payload: none
    - Response: HTML list
  - `GET /admin/sliders/create`
    - Payload: none
    - Response: HTML form
  - `POST /admin/sliders`
    - Payload (form): `title`, `image`, `position`
  - Example JSON (form fields): `{ "title": "Welcome", "image": "slider.png", "position": 1 }`
    - Response: redirect to list (or back with errors)
  - `GET /admin/sliders/{slider}/edit`
    - Payload: none
    - Response: HTML form
  - `PUT /admin/sliders/{slider}`
    - Payload (form): `title`, optional `image`, `position`
  - Example JSON (form fields): `{ "title": "Updated Title", "image": "slider.png", "position": 2 }`
    - Response: redirect to list (or back with errors)
  - `DELETE /admin/sliders/{slider}`
    - Payload: none
    - Response: redirect to list

- **Announcements**
  - `GET /admin/announcements`
    - Payload: optional query `q`
    - Response: HTML list
  - `GET /admin/announcements/create`
    - Payload: none
    - Response: HTML form
  - `POST /admin/announcements`
    - Payload (form): `title`, `body`, `target_specialties[]`, `target_experience_levels[]`, optional `media[]`
  - Example JSON (form fields): `{ "title": "New Update", "body": "Announcement text", "target_specialties": ["Dermatology"], "target_experience_levels": ["junior","senior"], "media": ["file1.png","file2.pdf"] }`
    - Response: redirect to list (or back with errors)
  - `GET /admin/announcements/{announcement}/edit`
    - Payload: none
    - Response: HTML form
  - `PUT /admin/announcements/{announcement}`
    - Payload (form): `title`, `body`, `target_specialties[]`, `target_experience_levels[]`, optional `media[]`
  - Example JSON (form fields): `{ "title": "Updated Title", "body": "Updated text", "target_specialties": ["Cardiology"], "target_experience_levels": ["senior"], "media": ["file1.png"] }`
    - Response: redirect to list (or back with errors)
  - `DELETE /admin/announcements/{announcement}`
    - Payload: none
    - Response: redirect to list
  - `GET /admin/announcements/{announcement}/viewers`
    - Payload: none
    - Response: HTML list of viewers

- **Lab Tests**
  - `GET /admin/lab-tests`
    - Payload: none
    - Response: HTML list
  - `GET /admin/lab-tests/create`
    - Payload: none
    - Response: HTML form
  - `POST /admin/lab-tests`
    - Payload (form): `name`, `description`
  - Example JSON (form fields): `{ "name": "CBC", "description": "Complete blood count" }`
    - Response: redirect to list (or back with errors)
  - `GET /admin/lab-tests/{lab_test}/edit`
    - Payload: none
    - Response: HTML form
  - `PUT /admin/lab-tests/{lab_test}`
    - Payload (form): `name`, `description`
  - Example JSON (form fields): `{ "name": "CBC", "description": "Updated description" }`
    - Response: redirect to list (or back with errors)
  - `DELETE /admin/lab-tests/{lab_test}`
    - Payload: none
    - Response: redirect to list

- **Lab Branches**
  - `GET /admin/lab-branches`
    - Payload: none
    - Response: HTML list
  - `GET /admin/lab-branches/create`
    - Payload: none
    - Response: HTML form
  - `POST /admin/lab-branches`
    - Payload (form): `name`, `address`, `phone`, `is_active`
  - Example JSON (form fields): `{ "name": "Main Branch", "address": "Street 1", "phone": "+96555555555", "is_active": true }`
    - Response: redirect to list (or back with errors)
  - `GET /admin/lab-branches/{lab_branch}/edit`
    - Payload: none
    - Response: HTML form
  - `PUT /admin/lab-branches/{lab_branch}`
    - Payload (form): `name`, `address`, `phone`, `is_active`
  - Example JSON (form fields): `{ "name": "Main Branch", "address": "Street 2", "phone": "+96555555555", "is_active": true }`
    - Response: redirect to list (or back with errors)
  - `DELETE /admin/lab-branches/{lab_branch}`
    - Payload: none
    - Response: redirect to list

### Results & Chat (role: admin, supervisor, agent)

- **Results**
  - `GET /results`
    - Payload: optional query `q`, `doctor_id`
    - Response: HTML list
  - `GET /results/create`
    - Payload: none
    - Response: HTML form
  - `POST /results`
    - Payload (form): `patient_name`, optional `patient_age`, `hospital`, `lab_branch`, `doctor_id`, `pdf`
  - Example JSON (form fields): `{ "patient_name": "John Doe", "patient_age": 45, "hospital": "City Hospital", "lab_branch": "Main", "doctor_id": 12, "pdf": "result.pdf" }`
    - Response: redirect to list (or back with errors)
  - `GET /results/{result}/edit`
    - Payload: none
    - Response: HTML form
  - `PUT /results/{result}`
    - Payload (form): `patient_name`, optional `patient_age`, `hospital`, `lab_branch`, `doctor_id`, optional `pdf`
  - Example JSON (form fields): `{ "patient_name": "John Doe", "patient_age": 46, "hospital": "City Hospital", "lab_branch": "Main", "doctor_id": 12, "pdf": "result.pdf" }`
    - Response: redirect to list (or back with errors)
  - `DELETE /results/{result}`
    - Payload: none
    - Response: redirect to list

- **Chat**
  - `GET /chat/{doctor}`
    - Payload: none
    - Response: HTML chat UI

---

## Admin API (Token-Based)

Use `POST /api/staff/login` to get a token, then send:
- `Authorization: Bearer <token>`

### Staff Auth

- `POST /api/staff/login`
  - Body (JSON): `{ "email": "...", "password": "..." }`
  - Example JSON: `{ "email": "admin@example.com", "password": "secret123" }`
  - Response: `{ "token": "...", "user": { ... } }`
- `POST /api/staff/logout`
  - Body: none
  - Response: `{ "ok": true }`

### Admin Resources (role: admin, supervisor)

Base prefix: `/api/admin`

- **Users**
  - `GET /api/admin/users`
    - Query: `q`, `role`
    - Response: paginated users
  - `GET /api/admin/users/{user}`
    - Response: user object
  - `POST /api/admin/users`
    - Body (JSON): `{ "name": "...", "email": "...", "password": "...", "role": "admin|supervisor|agent", "branch_assignment": "..." }`
    - Example JSON: `{ "name": "Admin User", "email": "admin@example.com", "password": "secret123", "role": "admin", "branch_assignment": "Main" }`
    - Response: created user
  - `PUT /api/admin/users/{user}`
    - Body (JSON): `{ "name": "...", "email": "...", "password": "...", "role": "admin|supervisor|agent", "branch_assignment": "..." }`
    - Example JSON: `{ "name": "Updated User", "email": "user@example.com", "password": "newpass123", "role": "supervisor", "branch_assignment": "Main" }`
    - Response: updated user
  - `DELETE /api/admin/users/{user}`
    - Response: `{ "ok": true }`

- **Doctors**
  - `GET /api/admin/doctors`
    - Query: `q`, `experience`
    - Response: paginated doctors
  - `GET /api/admin/doctors/{doctor}`
    - Response: doctor object
  - `POST /api/admin/doctors`
    - Body (JSON): `{ "name": "...", "username": "...", "speciality": "...", "experience_level": "specialist|doctor|Consultant", "phone": "...", "password": "..." }`
    - Example JSON: `{ "name": "Dr. Ali", "username": "dr.ali", "speciality": "Cardiology", "experience_level": "Consultant", "phone": "+96555555555", "password": "secret123" }`
    - Response: created doctor
  - `PUT /api/admin/doctors/{doctor}`
    - Body (JSON): `{ "name": "...", "username": "...", "speciality": "...", "experience_level": "specialist|doctor|Consultant", "phone": "...", "password": "..." }`
    - Example JSON: `{ "name": "Dr. Ali Updated", "username": "dr.ali", "speciality": "Cardiology", "experience_level": "Consultant", "phone": "+96555555555", "password": "newpass123" }`
    - Response: updated doctor
  - `DELETE /api/admin/doctors/{doctor}`
    - Response: `{ "ok": true }`

- **Sliders**
  - `GET /api/admin/sliders`
    - Response: array of sliders
  - `GET /api/admin/sliders/{slider}`
    - Response: slider object
  - `POST /api/admin/sliders`
    - Body (form-data): `title`, `image`, `position`
    - Example JSON (form fields): `{ "title": "Welcome", "image": "slider.png", "position": 1 }`
    - Response: created slider
  - `PUT /api/admin/sliders/{slider}`
    - Body (form-data): `title`, optional `image`, `position`
    - Example JSON (form fields): `{ "title": "Updated", "image": "slider.png", "position": 2 }`
    - Response: updated slider
  - `DELETE /api/admin/sliders/{slider}`
    - Response: `{ "ok": true }`

- **Announcements**
  - `GET /api/admin/announcements`
    - Response: paginated announcements
  - `GET /api/admin/announcements/{announcement}`
    - Response: announcement object
  - `POST /api/admin/announcements`
    - Body (form-data): `title`, `body`, `target_specialties[]`, `target_experience_levels[]`, optional `media[]`
    - Example JSON (form fields): `{ "title": "New Update", "body": "Announcement text", "target_specialties": ["Dermatology"], "target_experience_levels": ["junior"], "media": ["file1.png"] }`
    - Response: created announcement
  - `PUT /api/admin/announcements/{announcement}`
    - Body (form-data): `title`, `body`, `target_specialties[]`, `target_experience_levels[]`, optional `media[]`
    - Example JSON (form fields): `{ "title": "Updated", "body": "Updated text", "target_specialties": ["Cardiology"], "target_experience_levels": ["senior"] }`
    - Response: updated announcement
  - `DELETE /api/admin/announcements/{announcement}`
    - Response: `{ "ok": true }`
  - `GET /api/admin/announcements/{announcement}/viewers`
    - Response: array of viewers

- **Lab Tests**
  - `GET /api/admin/lab-tests`
    - Response: paginated lab tests
  - `GET /api/admin/lab-tests/{lab_test}`
    - Response: lab test object
  - `POST /api/admin/lab-tests`
    - Body (JSON): `{ "name": "...", "description": "..." }`
    - Example JSON: `{ "name": "CBC", "description": "Complete blood count" }`
    - Response: created lab test
  - `PUT /api/admin/lab-tests/{lab_test}`
    - Body (JSON): `{ "name": "...", "description": "..." }`
    - Example JSON: `{ "name": "CBC", "description": "Updated description" }`
    - Response: updated lab test
  - `DELETE /api/admin/lab-tests/{lab_test}`
    - Response: `{ "ok": true }`

- **Lab Branches**
  - `GET /api/admin/lab-branches`
    - Response: paginated lab branches
  - `GET /api/admin/lab-branches/{lab_branch}`
    - Response: lab branch object
  - `POST /api/admin/lab-branches`
    - Body (JSON): `{ "name": "...", "address": "...", "phone": "...", "is_active": true }`
    - Example JSON: `{ "name": "Main Branch", "address": "Street 1", "phone": "+96555555555", "is_active": true }`
    - Response: created lab branch
  - `PUT /api/admin/lab-branches/{lab_branch}`
    - Body (JSON): `{ "name": "...", "address": "...", "phone": "...", "is_active": true }`
    - Example JSON: `{ "name": "Main Branch", "address": "Street 2", "phone": "+96555555555", "is_active": true }`
    - Response: updated lab branch
  - `DELETE /api/admin/lab-branches/{lab_branch}`
    - Response: `{ "ok": true }`

### Results API (role: admin, supervisor, agent)

Base prefix: `/api`

- `GET /api/results`
  - Query: `q`, `doctor_id`
  - Response: paginated results
- `GET /api/results/{result}`
  - Response: result object
- `POST /api/results`
  - Body (form-data): `patient_name`, optional `patient_age`, `hospital`, `lab_branch`, `doctor_id`, `pdf`
  - Example JSON (form fields): `{ "patient_name": "John Doe", "patient_age": 45, "hospital": "City Hospital", "lab_branch": "Main", "doctor_id": 12, "pdf": "result.pdf" }`
  - Response: created result
- `PUT /api/results/{result}`
  - Body (form-data): `patient_name`, optional `patient_age`, `hospital`, `lab_branch`, `doctor_id`, optional `pdf`
  - Example JSON (form fields): `{ "patient_name": "John Doe", "patient_age": 46, "hospital": "City Hospital", "lab_branch": "Main", "doctor_id": 12, "pdf": "result.pdf" }`
  - Response: updated result
- `DELETE /api/results/{result}`
  - Response: `{ "ok": true }`

---

## Doctor Mobile API (JSON)

Base prefix: `/api`

### Auth

- `POST /api/doctor/login`
  - Body (JSON): `{ "username": "...", "password": "..." }`
  - Example JSON: `{ "username": "dr.ali", "password": "secret123" }`
  - Response: `{ "token": "..." }`

### Doctor profile

- `GET /api/doctor/me`
  - Body: none
  - Response: doctor object
- `PUT /api/doctor/me`
  - Body (JSON, optional fields): `name`, `username`, `speciality`, `experience_level`, `password`
  - Example JSON: `{ "name": "Dr. Ali", "speciality": "Cardiology", "password": "newpass123" }`
  - Response: `{ "ok": true }`
- `POST /api/doctor/fcm-token`
  - Body (JSON): `{ "fcm_token": "..." }`
  - Example JSON: `{ "fcm_token": "fcm_token_here" }`
  - Response: `{ "success": true, "message": "FCM token updated successfully" }`

### Conversation + Chat

- `GET /api/doctor/conversation`
  - Body: none
  - Response: `{ "conversation_id": 123 }`
- `GET /api/doctor/conversations/{conversation}/messages`
  - Query: `limit`, `since_id`
  - Response: `{ "messages": [ ... ] }`
- `POST /api/doctor/conversations/{conversation}/messages`
  - Body (JSON): `body`, `attachment_url`, `attachment_type`, `reply_to_id`
  - Example JSON: `{ "body": "Hello", "attachment_url": null, "attachment_type": null, "reply_to_id": 123 }`
  - Response: `{ "id": <message_id> }`
- `POST /api/doctor/conversations/{conversation}/messages/read`
  - Body: none
  - Response: `{ "ok": true, "updated": <count> }`

### Results

- `GET /api/doctor/results`
  - Query: `id`, `patient_name`, `patient_age`, `hospital`, `lab_branch`, `doctor_comment`, `created_from`, `created_to`, `updated_from`, `updated_to`
  - Response: paginated results with `created_at`
- `POST /api/doctor/results/{result}/comment`
  - Body (JSON): `{ "doctor_comment": "..." }`
  - Example JSON: `{ "doctor_comment": "Reviewed and approved" }`
  - Response: `{ "ok": true }`
- `DELETE /api/doctor/results/{result}`
  - Body: none
  - Response: `{ "ok": true }`

### Announcements

- `GET /api/doctor/announcements`
  - Query: pagination
  - Response: paginated announcements

---

## Staff Chat API (Web Session)

Used by the web chat UI (authenticated staff).

- `GET /api/activity/conversation/{conversation}/messages`
  - Query: `limit`, `since_id`
  - Response: `{ "messages": [ ... ] }`
- `POST /api/activity/conversation/{conversation}/messages`
  - Body (JSON): `body`, `attachment_url`, `attachment_type`, `reply_to_id`
  - Example JSON: `{ "body": "Please check this", "attachment_url": null, "attachment_type": null, "reply_to_id": 456 }`
  - Response: `{ "id": <message_id> }`
- `PUT /api/activity/conversation/{conversation}/messages/{message}`
  - Body (JSON): `{ "body": "..." }`
  - Example JSON: `{ "body": "Updated message text" }`
  - Response: `{ "ok": true }`
- `DELETE /api/activity/conversation/{conversation}/messages/{message}`
  - Body: none
  - Response: `{ "ok": true }`
- `POST /api/activity/conversation/{conversation}`
  - Body (JSON): `{ "body": "...", "sender_type": "agent|doctor" }`
  - Example JSON: `{ "body": "Message preview", "sender_type": "agent" }`
  - Response: `{ "ok": true }`

---

## Public API (No Auth)

- `GET /api/sliders`
  - Response: array of sliders
- `GET /api/lab-tests`
  - Response: array of lab tests

---

## File Upload API

- `POST /api/upload`
  - Form-data field: `file`
  - Response: `{ success, url, path, filename, original_name, size, mime_type }`
  - Protected by upload limits middleware
