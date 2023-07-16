/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.shields.io", "ghchart.rshah.org", "velog.velcdn.com"],
  },
  // webpack: {
  //   resolve: {
  //     fallback: {
  //       utils: require.resolve("./utils/index.tsx")
  //     }
  //   }
  // }
};

export default withContentlayer(nextConfig);
