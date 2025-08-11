/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['images.pexels.com', 'mightyscape.com']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache for static export
    if (!dev && !isServer) {
      config.cache = false;
    }
    return config;
  },
  experimental: {
    // Disable webpack cache completely
    webpackBuildWorker: false,
  },
};

module.exports = nextConfig;