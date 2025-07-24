import type { NextConfig } from "next";

const nextConfig: NextConfig = {
//  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
    allowedDevOrigins: ['http://192.168.0.105'], // or ['https://192.168.0.105'] if using HTTPS
};

export default nextConfig;
