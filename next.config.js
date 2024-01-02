/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'golektruk.com',
        port: '',
        pathname: '/login.png',
      },
    ],
  },
}

module.exports = nextConfig
