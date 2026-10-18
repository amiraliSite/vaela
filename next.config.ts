import type { NextConfig } from "next";

// When GH_PAGES=true, build a static export targeting the project page URL
// (https://amiraliSite.github.io/vaela/). Otherwise, keep the default
// standalone build for the sandbox dev server.
const isPagesBuild = process.env.GH_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isPagesBuild
    ? {
        output: "export" as const,
        basePath: "/vaela",
        assetPrefix: "/vaela",
        // Unsplash images are loaded via plain <img> tags, no next/image to optimize.
        images: { unoptimized: true },
        // SPA-friendly 404: redirect to index on unknown routes
        trailingSlash: true,
      }
    : {
        output: "standalone",
      }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
