# Contributing to lematter

Thanks for your interest in contributing. This guide covers how to set up the
project, the conventions we follow, and how to submit changes.

## Getting started

1. Fork and clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Development workflow

- Create a feature branch off `main` (e.g. `feat/locale-switcher`).
- Keep changes focused and scoped to a single concern.
- Run the build and lint before opening a pull request:
  ```bash
  npm run lint
  npm run build
  ```

## Coding conventions

- **TypeScript** throughout; prefer explicit, well-typed props.
- **Server Components by default.** Only opt into client components when
  interactivity requires it.
- **Internationalization:** never hardcode user-facing strings. Add keys to
  `messages/en.json` and read them with `next-intl` (`getTranslations` on the
  server, `useTranslations` in client components).
- **Navigation:** use the locale-aware `Link`, `redirect`, and `useRouter`
  from `i18n/navigation.ts` instead of `next/link` / `next/navigation`.
- **Static rendering:** call `setRequestLocale(locale)` in pages and layouts
  that should render statically.
- **UI:** use shadcn/ui components (`components/ui`) and lucide-react icons.
  Add components with `npx shadcn@latest add <component>`.
- **Next.js version:** this project uses a recent Next.js release with breaking
  changes. When in doubt, consult the docs in `node_modules/next/dist/docs/`.

## Commit messages

Write clear, imperative commit messages (e.g. "Add locale switcher to header").
Group related changes into a single commit where practical.

## Pull requests

- Describe what changed and why.
- Note anything you tested and anything left out of scope.
- Ensure lint and build pass.

## Code of Conduct

By participating, you agree to abide by our
[Code of Conduct](./CODE_OF_CONDUCT.md).
