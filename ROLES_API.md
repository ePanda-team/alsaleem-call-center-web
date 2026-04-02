# Staff roles and permissions API

This document describes how **staff roles** work in the API. Roles apply **only to staff** (`users` table / `User` model). Doctors use a separate auth flow and are not affected.

**Important:** Permission flags are returned for the **frontend** to drive navigation and UI. The backend **does not** enforce these flags on API routes today; existing middleware (for example `role:admin,supervisor`) remains unchanged. Your separate frontend project should read `permissions` and hide or disable features accordingly.

---

## Permission keys

Each role has a `permissions` object. Every key is a **boolean**. Keys are fixed and defined in `config/staff_permissions.php`.

| Key | Typical meaning (for your UI) |
|-----|--------------------------------|
| `chatting` | Staff chat / activity with doctors |
| `patient_results` | Lab results (patient results) |
| `user_management` | Staff user CRUD |
| `roles_management` | Create/edit/delete **roles** (staff role definitions). **Effective value is only `true` for `user.role === "admin"`**; it is always `false` for supervisor and agent even if stored on a role record. |
| `doctor_management` | Doctor CRUD |
| `specialties_management` | Specialties CRUD |
| `announcement_management` | Announcements CRUD |
| `slider_management` | Sliders CRUD |
| `lab_tests_management` | Lab tests CRUD |
| `branch_management` | Lab branches CRUD |

---

## Admin users and effective permissions

- The legacy string field `user.role` is still `admin`, `supervisor`, or `agent` (used by existing route middleware).
- If `user.role === "admin"`, **`permissions` are always all `true`**, regardless of what is stored on the linked `Role` record. This matches the rule that admins implicitly have full access in the UI.
- For **non-admin** staff, `roles_management` is **always `false`** in `resolveStaffPermissions()` (login / effective permissions), so only admins may treat the roles CRUD UI as allowed.
- For **non-admin** staff, effective permissions come from the **`roles` row** linked by `user.role_id`. Missing or unknown keys are treated as `false`.
- If a non-admin user has **`role_id` null**, all permission keys resolve to **`false`** until you assign a role.

After login, use the **`permissions`** object on the user payload as the single source of truth for the session UI (it already applies the admin rule above).

---

## Authentication: staff login

`POST /api/staff/login`

Body: `email`, `password`, and optional **`device_name`** (string, max 255) — stored with the token for debugging or future “sessions” UI.

Each successful login **creates a new row** in **`staff_access_tokens`**. The same staff account can be signed in on **multiple devices** at once; each device gets its own bearer token. **`POST /api/staff/logout`** revokes **only the token sent on that request** (other devices stay logged in).

Response includes the staff user and merged **`permissions`** (effective, with the admin override applied):

```json
{
  "token": "<bearer_token>",
  "user": {
    "id": 1,
    "name": "…",
    "email": "…",
    "role": "admin",
    "role_id": 1,
    "branch_assignment": null,
    "staff_role": {
      "id": 1,
      "name": "Admin",
      "slug": "admin",
      "permissions": { … }
    },
    "permissions": {
      "chatting": true,
      "patient_results": true,
      "user_management": true,
      "roles_management": true,
      "doctor_management": true,
      "specialties_management": true,
      "announcement_management": true,
      "slider_management": true,
      "lab_tests_management": true,
      "branch_management": true
    }
  }
}
```

- Use **`user.permissions`** for gating UI (not only `staff_role.permissions`), so admin behavior stays correct.
- Subsequent requests send the token as you do today (e.g. `Authorization: Bearer <token>` or your app’s header convention). Tokens are no longer stored on the `users` row; they live in **`staff_access_tokens`**.

---

## Roles CRUD (admin API)

Base path: **`/api/admin/roles`**  
Middleware: **`staff.token`** and **`role:admin,supervisor`** (same as other admin resources).

| Method | Path | Action |
|--------|------|--------|
| `GET` | `/api/admin/roles` | Paginated list (`?page=`, optional `?q=` search on name/slug) |
| `GET` | `/api/admin/roles/{id}` | Single role (permissions normalized to all keys) |
| `POST` | `/api/admin/roles` | Create role |
| `PUT`/`PATCH` | `/api/admin/roles/{id}` | Update role |
| `DELETE` | `/api/admin/roles/{id}` | Delete role |

`{id}` is the numeric primary key of `roles`.

### List response

Standard Laravel pagination JSON. Each item includes `id`, `name`, `slug`, `permissions` (full key set, booleans), `created_at`, `updated_at`.

### Create role

`POST /api/admin/roles`

Body (JSON):

```json
{
  "name": "Reception",
  "slug": "reception",
  "permissions": {
    "chatting": true,
    "patient_results": true,
    "user_management": false,
    "roles_management": false,
    "doctor_management": false,
    "specialties_management": false,
    "announcement_management": false,
    "slider_management": false,
    "lab_tests_management": false,
    "branch_management": false
  }
}
```

- **`name`**: required string.
- **`slug`**: optional. Lowercase letters, numbers, hyphens only (`^[a-z0-9]+(?:-[a-z0-9]+)*$`). If omitted, a slug is generated from `name` and made unique (e.g. `reception-2`).
- **`permissions`**: required object. **Every** permission key from the table above must be present; each value must be a boolean.

### Update role

`PUT` or `PATCH /api/admin/roles/{id}`

- Optional: `name`, `slug`, `permissions`.
- If `permissions` is sent, it must again include **all** keys with boolean values (`required_with:permissions` per key).

### Delete role

`DELETE /api/admin/roles/{id}`

- **422** if any staff user still has this `role_id`. Unassign or reassign users first.

---

## Assigning a role to staff

Staff users are still created/updated via **`/api/admin/users`** (`UserController`).

- Optional field **`role_id`**: integer, must exist in `roles.id`.
- **`role`** string (`admin` | `supervisor` | `agent`) remains **required** for compatibility with existing middleware.

**Recommended:** Keep `role` and `role_id` **aligned** with the same logical role (e.g. `role: "agent"` and `role_id` pointing to the `agent` slug row) so middleware and UI stay consistent.

---

## Seeded roles

`RoleSeeder` (run from `DatabaseSeeder`) creates three rows:

| Slug | Notes |
|------|--------|
| `admin` | All permissions `true` |
| `supervisor` | All `true` except `user_management` and `roles_management` |
| `agent` | Only `chatting` and `patient_results` `true` |

`DatabaseSeeder` also sets `role_id` on the default admin user and backfills `role_id` for any staff with `role_id` null where a matching slug exists.

---

## Database

- **`roles`**: `id`, `name`, `slug` (unique), `permissions` (JSON), timestamps.
- **`users.role_id`**: nullable FK → `roles.id` (`nullOnDelete`).

---

## Frontend checklist

1. On **staff login**, read **`user.permissions`** and store it (session / state).
2. For **admin** (`user.role === "admin"`), treat as full access even if you cache an older role definition.
3. **Roles management screen**: use roles CRUD; when editing a user, set **`role_id`** from the list of roles.
4. Do **not** rely on the API to block unauthorized actions by permission flags until you add server-side checks (if ever).
