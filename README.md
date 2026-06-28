# Alsaleem Call Center — Backend API

Laravel 12 API backend for the Alsaleem call center system. It serves:

- **Staff web frontend** (separate repo) — admin, chat, patients, results, notifications
- **Doctor mobile app** (Flutter) — results, patients, chat, push notifications

There is no active server-rendered web UI in this repo (`routes/web.php` is commented out).

## Prerequisites

- PHP ^8.2 with common extensions (mbstring, openssl, pdo, fileinfo)
- Composer 2.x
- MySQL 8+ (recommended for production) or SQLite (local dev)

## Quick start

```bash
composer install
cp .env.example .env
php artisan key:generate

# Configure database in .env, then:
php artisan migrate
php artisan db:seed

php artisan serve --port=8001
```

API base URL: `http://127.0.0.1:8001/api`

## Default credentials (change before production)

| Account | Login | Password |
|---------|-------|----------|
| Staff admin | `admin@example.com` | `password` |
| Sample doctor | `drsmith` | `password` |

## Documentation

- **[SYSTEM_DELIVERABLES.md](SYSTEM_DELIVERABLES.md)** — master handoff document: scope, schema, full API reference, roles, setup, known issues
- **Postman collections** in [`postman/`](postman/):
  - `alsaleem-doctor-api.postman_collection.json` — doctor mobile API
  - `alsaleem-call-center-api.postman_collection.json` — staff/call-center API

Run **Auth → Login** in each collection first to save the bearer token.

## Production checklist

1. Set `APP_ENV=production`, `APP_DEBUG=false`, configure MySQL in `.env`
2. Run `php artisan migrate --force`
3. **Change all default passwords**
4. Place Firebase service account JSON at `storage/app/alsaleem-call-center-77b0f18015c6.json` (not committed — obtain from Firebase console)
5. Block public PDF access at the web server: `location ^~ /storage/results/ { deny all; }`
6. Configure CORS at Nginx/Apache (see `config/cors.php` note in SYSTEM_DELIVERABLES.md)

## Runtime storage

These directories are created at runtime and are empty on a fresh deploy:

- `public/storage/uploads/` — chat/media attachments
- `public/storage/announcements/` — announcement media
- `storage/app/results/` — private result PDFs (API download only)

Ensure `public/storage` is writable and run `php artisan storage:link` if needed.

## Tests

```bash
php artisan test
```
