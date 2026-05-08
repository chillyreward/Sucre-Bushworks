import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow unoptimized local images when they don't exist yet
    unoptimized: false,
    // Add any external domains if needed later
    remotePatterns: [],
  },
  // Suppress image 404 errors in dev (images are placeholders)
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
