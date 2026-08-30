import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Serve the SKILL doc for the lowercase URL too, without a duplicate file.
      { source: "/skill.md", destination: "/SKILL.md" },
    ];
  },
};

export default withNextIntl(nextConfig);
