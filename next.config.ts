import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration (required for Next.js 16+)
  turbopack: {},
  // Optimize for faster builds and reduce recompilation
  webpack: (config, { isServer }) => {
    // Enable caching to speed up builds
    config.cache = true;
    return config;
  },
  // Reduce unnecessary rebuilds
  reactStrictMode: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
