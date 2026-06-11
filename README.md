# NovaStore

NovaStore is a private Android app store for publishing, distributing, installing, and updating our own Android apps outside Google Play while respecting Android's user-consent and package-security model.

This repository is the Phase 0/1 foundation from `docs/novastore_ai_coding_agent_instructions.md`.

## What Exists

- `services/api`: NestJS API shell with health, catalog, app admin CRUD, release state transitions, update checks, download tickets, device registration, telemetry, RBAC placeholders, audit logs, Prisma schema, and tests.
- `services/worker`: BullMQ worker shell for future artifact processing.
- `apps/admin-console`: Next.js publisher console shell.
- `apps/android-store-client`: Kotlin Compose Android client with GitHub catalog checks for managed apps, update notifications, SHA-256 verified APK download, and Android installer handoff.
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

NovaStore does not silently install apps. The Android client uses Android's standard install-source permission and installer handoff, with user approval whenever Android requires it. The live GitHub catalog currently advertises managed apps only; NovaStore self-updates are paused after Play Protect blocked the v0.1.12 store update. The v0.1.10+ client verifies hosted APK SHA-256 and size before opening Android's installer, shows download progress in a current-screen modal, checks the public GitHub raw-content catalog whenever NovaStore returns to the foreground and three times a day in the background, supports pull-to-refresh on Apps and Updates, opens update notifications directly to the Updates tab, includes a proper adaptive launcher icon, and uses real installed-app launcher icons plus bundled app-specific catalog art in app rows. Server-side artifact parsing and promotion are still future work for new uploads.

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
