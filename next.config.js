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

module.exports = nextConfig


// module.exports = {
//   webpack: (config, { isServer }) => {
//       if (!isServer) {
//           // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
//           config.node = {
//               fs: 'empty'
//           }
//       }

//       return config;
//   }
// }