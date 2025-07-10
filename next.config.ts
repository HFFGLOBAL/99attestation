import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services/:slug*',
        destination: '/:slug*',
        permanent: true,
      },
      {
        source: '/service/:slug*',
        destination: '/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
