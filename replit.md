# replit.md

## Overview

PeriodGuide is a bilingual (English and Kannada) educational web application about menstrual health for young learners. It provides age-appropriate information about puberty, menstrual hygiene, myth-busting, and an anonymous question submission feature. The visual style uses soft pastels and welcoming design to create a safe, comfortable learning environment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, built using Vite
- **Routing**: Wouter (lightweight alternative to React Router) with animated page transitions via Framer Motion
- **State Management**: React Query (@tanstack/react-query) for server state, React Context for language selection
- **UI Components**: shadcn/ui component library (new-york style) built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming, soft pastel color palette
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Internationalization**: Custom LanguageContext providing `t()` translation function supporting English (`en`) and Kannada (`kn`)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Pages
- **Home** (`/`) - Hero section with call-to-action
- **Body** (`/body`) - Educational content about menstrual cycles and puberty
- **Hygiene** (`/hygiene`) - Menstrual hygiene tips and product information
- **Myths** (`/myths`) - Fact vs myth cards debunking common misconceptions
- **Ask** (`/ask`) - Anonymous question submission form

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via tsx
- **API Pattern**: REST API with typed route definitions in `shared/routes.ts` using Zod schemas
- **Development**: Vite dev server middleware for HMR, served through the Express server
- **Production**: Client built to `dist/public`, server bundled with esbuild to `dist/index.cjs`
- **Build**: Custom build script (`script/build.ts`) that bundles both client (Vite) and server (esbuild), with an allowlist of server dependencies to bundle for faster cold starts

### Data Storage
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema location**: `shared/schema.ts` — shared between client and server
- **Migrations**: Drizzle Kit with `db:push` command for schema sync
- **Current tables**:
  - `questions` — stores anonymous questions with fields: `id` (serial PK), `content` (text), `language` (text, default 'en'), `isAnswered` (boolean, default false), `createdAt` (timestamp)

### API Endpoints
- `POST /api/questions` — Create a new anonymous question (expects `{ content, language }`)
- `GET /api/questions` — List all submitted questions

### Shared Code (`shared/`)
- `schema.ts` — Drizzle table definitions and Zod insert schemas, shared between frontend and backend
- `routes.ts` — Typed API route definitions with input/output schemas

### Storage Layer
- `server/storage.ts` — `DatabaseStorage` class implementing `IStorage` interface, providing an abstraction over database operations

## External Dependencies

### Database
- **PostgreSQL** — Required, connected via `DATABASE_URL` environment variable
- **connect-pg-simple** — Available for session storage (not currently active)

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** — ORM and migration tooling for PostgreSQL
- **express** v5 — HTTP server framework
- **zod** — Runtime validation for API inputs and shared types
- **@tanstack/react-query** — Async data fetching and caching
- **framer-motion** — Page transitions and scroll animations
- **wouter** — Client-side routing
- **lucide-react** — Icon library
- **shadcn/ui** — Component library (Radix UI + Tailwind CSS)
- **react-hook-form** — Form management with Zod resolver

### Fonts (Google Fonts)
- **Nunito** — Primary English font
- **Baloo Tamma 2** — Kannada language font
- **DM Sans**, **Fira Code**, **Geist Mono** — Additional loaded fonts

### Replit-specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)