import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// next-intl's locale negotiation runs via the Next.js proxy convention
// (formerly `middleware`, renamed in Next.js 16). It detects the locale and
// handles prefixing/redirects based on the routing configuration.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - Next.js internals (_next)
  // - static files (anything with a dot, e.g. favicon.ico)
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
