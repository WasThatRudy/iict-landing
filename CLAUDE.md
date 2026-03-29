@AGENTS.md

# Project Architecture Rules

These rules apply to every contributor and every Claude instance working on this project.

---

## Frontend Rules

### Component Architecture
- **Containers** (`/containers/`) — data, state, and business logic only. No JSX markup beyond composition of organisms.
- **Organisms** (`/components/organisms/`) — full UI sections (Navbar, HeroSection, TalksSection, etc.).
- **Molecules** (`/components/molecules/`) — reusable multi-element components (TalkCard, AvatarStack, etc.).
- **Atoms** (`/components/atoms/`) — single-element primitives (Button, Badge, etc.).
- Pages (`/app/`) are one-liners that render a Container. No logic in page files.

### Styling
- **No hardcoded color values anywhere** — always use CSS variables defined in `app/globals.css`.
- All colors must be declared as `--color-*` variables in `:root` and mapped in `@theme inline` for Tailwind.
- Reference colors via `var(--color-*)` in inline styles, or via Tailwind arbitrary values like `text-[var(--color-text-primary)]`.
- Fonts are loaded via `next/font` in `app/layout.tsx` and exposed as CSS variables (`--font-boldonse`, `--font-bebas-neue`, `--font-geist-mono`, `--font-inter`).

### Assets
- **No inline SVGs** — all SVG files live in `/public/assets/svgs/` and are referenced via `<Image>` or `<img>`.
- Images go in `/public/assets/images/`.
- Fonts go in `/public/assets/fonts/`.

### General
- Use `next/image` (`<Image>`) for all images.
- No `any` types in TypeScript.
- Keep components focused — if a component grows beyond ~150 lines, split it.

---

## Backend Rules

### Stack
- **Next.js Route Handlers only** — no Express, Fastify, or separate backend server.
- **MongoDB + Mongoose** for persistence (singleton connection pattern via `lib/db.ts`).
- **Zod** for all request validation — never trust raw `req.json()` directly.

### File Structure
```
app/api/v1/          ← Route handlers (thin — delegate immediately to services)
services/            ← All business logic
models/              ← Mongoose models
schemas/             ← Zod schemas + inferred TypeScript types
utils/errors.ts      ← AppError class + Errors factory
utils/response.ts    ← successResponse / errorResponse helpers
lib/db.ts            ← Mongoose singleton connectDB()
```

### Route Handler Rules
- Route handlers must be thin: parse → call service → return response.
- All logic lives in `/services/`. Route handlers contain no business logic.
- Always wrap in try/catch and return `errorResponse(err)`.

### Response Shape
Every API response uses the consistent shape `{ data, error }`:
- **Success**: `successResponse(data, statusCode)` → `{ data: ..., error: null }`
- **Error**: `errorResponse(err)` → `{ data: null, error: { message, code } }`

### Error Handling
- Use `AppError` from `utils/errors.ts` for all known errors.
- Use `Errors.*()` factory methods (e.g., `Errors.emailExists()`, `Errors.notFound()`).
- Add new factory methods to `Errors` rather than throwing raw errors.

### API Versioning
- All endpoints are under `/api/v1/`.
- On any **breaking change** to an existing endpoint: copy **all current v1 endpoints** to `/api/v2/` first, then make the breaking change in v2. Frontend should always target a single version prefix — never a mix.
- Non-breaking additions (new fields in response, new optional params) do not require a version bump.

### Mongoose Models
- Use the `mongoose.models.ModelName ?? mongoose.model(...)` pattern to avoid re-registration errors in Next.js hot-reload.
- Always call `await connectDB()` at the top of every service method.
