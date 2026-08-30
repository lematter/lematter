import { defineRouting } from "next-intl/routing";

// Central routing configuration for locale-based routing.
// Add new locale codes here (and a matching messages/<locale>.json file)
// to support additional languages.
export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  // Only add the locale prefix to the URL when needed. With a single locale,
  // this keeps `/` serving English without a `/en` prefix. Switch to "always"
  // if you want every locale (including the default) prefixed.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
