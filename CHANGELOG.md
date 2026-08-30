# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Internationalization with `next-intl` using locale-based routing (`/[locale]`).
- `i18n/` configuration: `routing.ts`, `request.ts`, and `navigation.ts`.
- English message catalog under `messages/en.json`.
- `proxy.ts` for locale negotiation (Next.js proxy convention).
- shadcn/ui setup with lucide-react icons and the `cn` utility.
- Shared app chrome in `components/app/` (header, footer, layout).
- Home page sections in `components/pages/home/` (hero, features, faqs, cta).
- Legal section under `app/[locale]/legal/` (terms, privacy, cookies) with a
  shared layout; the legal root redirects to the terms page.
- Project documentation: README, LICENSE, SECURITY, CODE_OF_CONDUCT,
  CONTRIBUTING, ROADMAP, and environment templates.

### Changed

- Migrated the App Router to a `[locale]` segment.
- Home page now composes localized section components.

[Unreleased]: https://github.com/lematter/lematter
