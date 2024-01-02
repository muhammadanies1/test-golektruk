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
      {
        protocol: 'https',
        hostname: 'golektruk.com',
        port: '',
        pathname: '/registrasi.png',
      },
    ],
  },
}

module.exports = nextConfig
