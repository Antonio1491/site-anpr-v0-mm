/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Required for Replit environment
  experimental: {
    allowedDevOrigins: [
      'https://*.spock.replit.dev',
      'https://*.replit.dev',
      'https://*.repl.co',
      'http://localhost:5000',
      'http://127.0.0.1:5000'
    ]
  },
  // Enable all hosts for development in Replit
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}

export default nextConfig
