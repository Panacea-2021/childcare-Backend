# Panacea Childcare — Backend

NestJS REST API for the Panacea childcare platform.

## Stack

- Node.js
- NestJS
- TypeScript

## API prefix

All routes are under:

```text
/api/v1
```

Health check:

```text
GET /api/v1/health
```

## Domain modules

- auth
- tenancy
- people
- classroom
- enrollment
- attendance
- daily-care
- communication
- billing
- health-safety
- audit

## Setup

```bash
npm install
npm run start:dev
```

API runs at: [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Start API in watch mode |
| `npm run build` | Build to `dist/` |
| `npm run start:prod` | Run production build |

## CORS

Dev CORS allows the frontend origin:

```text
http://localhost:3001
```

Frontend repo: [ChilldCare_FrontEnd](https://github.com/panacea-it/ChilldCare_FrontEnd)

## Architecture notes

- Multi-tenant hierarchy: Super Admin → Organization → Center → roles
- Designed so a future mobile app can reuse the same REST API
- Database (PostgreSQL) integration to be added in upcoming phases
