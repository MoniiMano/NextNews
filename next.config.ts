import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Image Optimization
   * Enables automatic image optimization for better performance
   */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  /**
   * Performance & SEO optimizations
   */
  reactStrictMode: true,
  compress: true,

  /**
   * Headers for performance and security
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
        has: [
          {
            type: "query",
            key: "w",
          },
        ],
      },
    ];
  },

  /**
   * Redirects for backwards compatibility
   */
  async redirects() {
    return [];
  },

  /**
   * Rewrites for clean URLs
   */
  async rewrites() {
    return [];
  },
};

export default nextConfig;
