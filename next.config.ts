import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "api.microlink.io", 
      "assets.aceternity.com",
      "avatars.githubusercontent.com"
    ],
  },
};

export default nextConfig;
