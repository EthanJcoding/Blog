/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.shields.io'],
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
