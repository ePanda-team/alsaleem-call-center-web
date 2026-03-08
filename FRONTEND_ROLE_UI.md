## Role-Based UI Elements (Frontend)

This document lists which UI sections/elements should appear per role.

### Common (all authenticated staff roles)
- Header with app logo + language switcher
- Logout button
- Sidebar (unless on `/login` route)
- Home dashboard (`/`)

---

## Admin

Role: `admin`

### Sidebar items
- Home
- Results
- **Admin section**
  - Users
  - Doctors
  - Announcements
  - Sliders
  - Lab Tests
  - Lab Branches

### Pages
- Results CRUD
- Chat with doctor (`/chat/{doctor}`)
- All admin CRUD screens

---

## Supervisor

Role: `supervisor`

### Sidebar items
- Home
- Results
- **Admin section**
  - Users
  - Doctors
  - Announcements
  - Sliders
  - Lab Tests
  - Lab Branches

### Pages
- Results CRUD
- Chat with doctor (`/chat/{doctor}`)
- All admin CRUD screens

---

## Agent

Role: `agent`

### Sidebar items
- Home
- Results

### Pages
- Results CRUD
- Chat with doctor (`/chat/{doctor}`)

### Not visible
- Admin section (Users/Doctors/Announcements/Sliders/Lab Tests/Lab Branches)

---

## Guest (not authenticated)

### Header
- Login button (hidden on `/login`)

### Pages
- `/login` only
