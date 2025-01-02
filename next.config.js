/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "assets.aceternity.com",
      "avatars.githubusercontent.com"
    ],
  },
}

module.exports = nextConfig;