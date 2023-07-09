/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.shields.io', 'ghchart.rshah.org', "velog.velcdn.com"],
  }
  // webpack: {
  //   resolve: {
  //     fallback: {
  //       utils: require.resolve("./utils/index.tsx")
  //     }
  //   }
  // }
}

module.exports = nextConfig
