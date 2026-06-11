# NovaStore

NovaStore is a private Android app store for publishing, distributing, installing, and updating our own Android apps outside Google Play while respecting Android's user-consent and package-security model.

This repository is the Phase 0/1 foundation from `docs/novastore_ai_coding_agent_instructions.md`.

## What Exists

- `services/api`: NestJS API shell with health, catalog, app admin CRUD, release state transitions, update checks, download tickets, device registration, telemetry, RBAC placeholders, audit logs, Prisma schema, and tests.
- `services/worker`: BullMQ worker shell for future artifact processing.
- `apps/admin-console`: Next.js publisher console shell.
- `apps/android-store-client`: Kotlin Compose Android client with signed GitHub catalog checks for managed apps, pinned SHA-256/signing metadata, and browser-only release page links.
- `hosting`: public catalog metadata mirrored to `https://github.com/yustein/NovaStore`.
- `samples/sample-android-app`: signed debug sample app for future install-flow testing.
- `infra/docker-compose.yml`: PostgreSQL, Redis, MinIO, API, worker, and admin services for local development.
- `docs`: architecture, threat model, install-flow, privacy, release process, OpenAPI, and the supplied mockups.

## Local Development

```bash
cd infra
docker compose up -d postgres redis minio
```

```bash
npm install
npm run build
npm run test
```

```bash
npm --workspace services/api run prisma:migrate
npm --workspace services/api run seed
npm run api:dev
```

```bash
npm run worker:dev
npm run admin:dev
```

```bash
cd apps/android-store-client
gradle :app:assembleDebug --no-daemon
```

```bash
cd samples/sample-android-app
gradle :app:assembleDebug --no-daemon
```

## Safety Notes

NovaStore does not silently install apps. The v0.2.0 Android client uses the clean package `com.lenomila.novastore`, is release-signed with a dedicated local key, and verifies `catalog/index.json` against a detached RSA/SHA-256 signature before caching remote release metadata. It does not request Android's package-install permission, does not fetch APK files itself, does not hand files to the package installer, and does not run background update receivers or notification prompts. It opens GitHub release pages in the browser, supports foreground/manual catalog refresh, pins APK SHA-256, size, and signing metadata in the public catalog, includes a proper adaptive launcher icon, and uses real installed-app launcher icons plus bundled app-specific catalog art in app rows. Server-side artifact parsing and promotion are still future work for new uploads.

## Useful Endpoints

- `GET /v1/health`
- `POST /v1/devices/register`
- `GET /v1/catalog`
- `GET /v1/apps/:packageName`
- `POST /v1/updates/check`
- `POST /v1/downloads/ticket`
- `POST /v1/telemetry/install-event`
- `POST /v1/admin/apps`
- `PATCH /v1/admin/apps/:appId`
- `POST /v1/admin/releases`
- `POST /v1/admin/releases/:releaseId/submit-review`
- `POST /v1/admin/releases/:releaseId/approve`
- `POST /v1/admin/releases/:releaseId/rollout`
- `POST /v1/admin/releases/:releaseId/pause`
- `POST /v1/admin/releases/:releaseId/recall`
- `GET /v1/admin/audit`
