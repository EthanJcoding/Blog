/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.shields.io', 'ghchart.rshah.org', "s3.us-west-2.amazonaws.com"],
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
