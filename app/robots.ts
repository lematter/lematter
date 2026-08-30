import type { MetadataRoute } from "next";

// Base URL of the deployed site. Falls back to the production domain when the
// SITE_URL env var is not provided (e.g. during local builds).
const baseUrl = (process.env.SITE_URL ?? "https://lematter.in").replace(
  /\/$/,
  "",
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines and general crawlers.
      {
        userAgent: "*",
        allow: "/",
      },
      // Answer-engine / AI crawlers, explicitly allowed for AEO discovery.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "Amazonbot",
          "Bytespider",
          "CCBot",
          "cohere-ai",
          "DuckAssistBot",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
