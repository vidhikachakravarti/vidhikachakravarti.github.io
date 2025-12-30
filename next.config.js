/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Journey-Tracker-Website',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
