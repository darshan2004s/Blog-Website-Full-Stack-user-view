import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'oracledb': false,
        'pg-query-stream': false,
      };
    }

    return config;
  },
};

export default nextConfig;
