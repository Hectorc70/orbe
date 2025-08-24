// next.config.ts
import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const withPWAFn = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  // fallbacks: { document: '/offline' }, // si creas /offline
  runtimeCaching: [
    // imágenes (cache-first)
    {
      urlPattern: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|avif|svg)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    // fuentes (cache-first)
    {
      urlPattern: /^https?:\/\/fonts\.(?:gstatic|googleapis)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'fonts',
        expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
      },
    },
    // /api/* (network-first)
    {
      urlPattern: /\/api\/.*/i,
      handler: 'NetworkFirst',
      method: 'GET',
      options: {
        cacheName: 'api',
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 10 },
      },
    },
    // páginas (navegación) (network-first)
    {
      urlPattern: ({ request }: { request: Request }) => request.mode === 'navigate',
      handler: 'NetworkFirst',
      options: {
        cacheName: 'pages',
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
      },
    },
  ],
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' },
    ],
  },
}

export default withPWAFn(nextConfig as any)
