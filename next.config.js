/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Remove experimental features that might cause issues
  experimental: {
    // Remove optimizeCss as it's causing issues with error pages
    scrollRestoration: true,
  },
  // Enable static optimization for pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Optimize fonts
  optimizeFonts: true,
  // Enable compression
  compress: true,
}

module.exports = nextConfig