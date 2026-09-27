/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/neon-maze',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig