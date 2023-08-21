/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "img.shields.io",
      "ghchart.rshah.org",
      "velog.velcdn.com",
      "codetech.nworld.dev",
      "gardenmusic.s3-website.ap-northeast-2.amazonaws.com",
    ],
  },
  // webpack: {
  //   resolve: {
  //     fallback: {
  //       utils: require.resolve("./utils/index.tsx")
  //     }
  //   }
  // }
};

module.exports = withContentlayer(nextConfig);
