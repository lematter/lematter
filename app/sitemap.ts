import type { MetadataRoute } from "next";

// Base URL of the deployed site. Falls back to the production domain when the
// SITE_URL env var is not provided (e.g. during local builds).
const baseUrl = (process.env.SITE_URL ?? "https://lematter.in").replace(
  /\/$/,
  "",
);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    // Machine-readable discovery files for answer engines / LLMs (AEO).
    { path: "/llms.txt", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/SKILL.md", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/legal/terms", changeFrequency: "yearly" as const, priority: 0.3 },
    {
      path: "/legal/privacy",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      path: "/legal/cookies",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
