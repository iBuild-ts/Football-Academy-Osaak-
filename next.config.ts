import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip linting/typing during build for faster/easier deployment of UI-only projects
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
