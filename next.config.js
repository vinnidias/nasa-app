/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.nasa.gov', 'apod.nasa.gov']
  }
}

module.exports = nextConfig
