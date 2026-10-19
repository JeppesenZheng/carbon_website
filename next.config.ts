import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: "export",
        basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "/carbon_website",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
