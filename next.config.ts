import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/zeewebagency.github.io/",
  assetPrefix: "/zeewebagency.github.io/",
};

export default nextConfig;
