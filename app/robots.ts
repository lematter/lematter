import type { MetadataRoute } from "next";

// Base URL of the deployed site. Falls back to the production domain when the
// SITE_URL env var is not provided (e.g. during local builds).
const baseUrl = (process.env.SITE_URL ?? "https://lematter.in").replace(
  /\/$/,
  "",
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
