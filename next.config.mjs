/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/site-anpr-v0-mm' : '',
  assetPrefix: isGithubPages ? '/site-anpr-v0-mm/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/site-anpr-v0-mm' : '',
  },
}

export default nextConfig
