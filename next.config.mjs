// next.config.mjs
/** @type {import('next').NextConfig} */ // JSDoc for type checking in JS
const nextConfig = {
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

export default nextConfig; // Use export default for ES Modules