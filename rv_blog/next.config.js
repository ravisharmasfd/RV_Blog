/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    protocol: 'https',
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
