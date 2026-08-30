# Lematter

A [Next.js](https://nextjs.org) application built with the App Router, internationalization via [next-intl](https://next-intl.dev), and UI components from [shadcn/ui](https://ui.shadcn.com).

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **UI runtime:** React 19
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui + lucide-react icons
- **i18n:** next-intl with locale-based routing (`/[locale]`)

## Getting started

Install dependencies:

```bash
npm install
```

Copy the example environment file and adjust values as needed:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run start` | Run the production build             |
| `npm run lint`  | Lint the codebase with ESLint        |

## Project structure

```
app/
  [locale]/            Locale-scoped routes (App Router)
    layout.tsx         Root layout: fonts, locale, i18n provider
    page.tsx           Home page (composes home sections)
    legal/             Legal section (terms, privacy, cookies)
  globals.css          Tailwind + theme tokens
components/
  app/                 Shared app chrome (header, footer, layout)
  pages/home/          Home page sections (hero, features, faqs, cta)
  ui/                  shadcn/ui components
i18n/
  routing.ts           Locale routing configuration
  request.ts           Request-scoped i18n config
  navigation.ts        Locale-aware navigation APIs
messages/
  en.json              English translations
proxy.ts               next-intl locale negotiation (Next.js proxy)
```

## Internationalization

The app uses locale-based routing with a top-level `[locale]` segment. Locales
are defined in `i18n/routing.ts`. To add a language:

1. Add the locale code to `locales` in `i18n/routing.ts`.
2. Add a matching `messages/<locale>.json` file.

Use the `Link`, `redirect`, and `useRouter` helpers from `i18n/navigation.ts`
for locale-aware navigation.

## Adding UI components

```bash
npx shadcn@latest add <component>
```

## Analytics

The app loads [Google Analytics](https://analytics.google.com) and
[Microsoft Clarity](https://clarity.microsoft.com). The measurement/project IDs
are public (they ship to the browser) and are set directly in
`app/[locale]/layout.tsx`. If you fork this project, update those IDs to your own.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) and the [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

Licensed under the terms in [LICENSE](./LICENSE).
