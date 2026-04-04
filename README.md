# VentureLink 🚀

> **The intelligent matchmaking platform connecting startups and venture capitalists.**

VentureLink uses smart profiling and preference-based matching to surface the right investor-startup pairs — saving both sides from cold-outreach noise and accelerating funding rounds.

---

## Monorepo Structure

```
venturelink/
├── apps/
│   ├── web/          # Next.js 14 frontend — main user-facing application
│   ├── api/          # NestJS REST API backend
│   └── admin/        # Next.js 14 internal admin panel
├── packages/
│   ├── shared/       # Shared TypeScript types and Zod validation schemas
│   ├── db/           # Prisma schema, migrations, and typed DB client
│   ├── eslint-config/ # Shared ESLint configuration
│   └── tsconfig/     # Shared TypeScript base configurations
├── package.json       # Root workspace manifest
├── pnpm-workspace.yaml
├── turbo.json         # Turborepo pipeline config
├── .eslintrc.js
├── .prettierrc
└── README.md
```

## Tech Stack

| Layer        | Technology                                   |
|--------------|----------------------------------------------|
| Frontend     | Next.js 14, React 18, TypeScript, Tailwind CSS, ShadCN UI |
| Backend      | NestJS, TypeScript, Passport.js, JWT         |
| Database     | PostgreSQL via Prisma ORM                    |
| Validation   | Zod (shared between frontend and backend)    |
| Monorepo     | pnpm workspaces + Turborepo                  |
| Code Quality | ESLint, Prettier                             |

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 8 — `npm install -g pnpm`
- **PostgreSQL** (local or via Docker)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/venturelink.git
cd venturelink

# Install all dependencies across the monorepo
pnpm install
```

### Environment Setup

Copy and fill in env files for each app that needs them:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

Key variables for `apps/api/.env`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/venturelink
JWT_SECRET=your-super-secret-key
PORT=4000
```

### Database

```bash
# Generate Prisma client
pnpm --filter @venturelink/db db:generate

# Run migrations
pnpm --filter @venturelink/db db:migrate
```

### Running Locally

```bash
# Run all apps in dev mode (parallel via Turborepo)
pnpm dev

# Or run individual apps
pnpm --filter @venturelink/web dev     # http://localhost:3000
pnpm --filter @venturelink/api dev     # http://localhost:4000
pnpm --filter @venturelink/admin dev   # http://localhost:3001
```

## Available Scripts

| Command            | Description                              |
|--------------------|------------------------------------------|
| `pnpm dev`         | Start all apps in development mode       |
| `pnpm build`       | Build all apps and packages              |
| `pnpm lint`        | Lint all packages                        |
| `pnpm format`      | Format all files with Prettier           |
| `pnpm type-check`  | Run TypeScript type checking everywhere  |

## Package Workspace Graph

```
apps/web   ──┐
apps/api   ──┤──▶ packages/shared ──▶ (zod)
apps/admin ──┤──▶ packages/db     ──▶ (@prisma/client)
             └──▶ packages/eslint-config
                  packages/tsconfig
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

*Built with ❤️ by the VentureLink team.*
