<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project guidance for agents

Lematter is a Next.js 16 (App Router) app with TypeScript, React 19, Tailwind
CSS v4, shadcn/ui, and next-intl for internationalization.

## Commands

- `npm run dev` — development server (do not run in automated/blocking contexts)
- `npm run build` — production build; run this to verify changes compile
- `npm run lint` — ESLint
- `npm run start` — run the production build

## Conventions

- **Server Components by default.** Add `"use client"` only when interactivity
  requires it.
- **Internationalization is mandatory for user-facing text.** Add keys to
  `messages/en.json` and read them via next-intl: `getTranslations` in async
  Server Components, `useTranslations` in Client Components. Never hardcode
  display strings.
- **Locale-aware navigation:** import `Link`, `redirect`, `usePathname`,
  `useRouter` from `i18n/navigation.ts`, not from `next/link` or
  `next/navigation`.
- **Static rendering:** call `setRequestLocale(locale)` at the top of pages and
  layouts intended to render statically, before using any next-intl functions.
- **Routing:** all routes live under `app/[locale]/`. Locales are configured in
  `i18n/routing.ts`. Locale negotiation runs in `proxy.ts` (the Next.js 16
  rename of `middleware`).
- **UI:** use shadcn/ui components from `components/ui` and icons from
  `lucide-react`. Add new components with `npx shadcn@latest add <component>`.

## Structure

- `app/[locale]/` — routes (home + legal section)
- `components/app/` — shared header, footer, layout
- `components/pages/home/` — home page sections
- `components/ui/` — shadcn/ui components
- `i18n/` — routing, request config, navigation helpers
- `messages/` — translation catalogs

## Verification

Before considering a change complete, run `npm run lint` and `npm run build`
and ensure both pass.
