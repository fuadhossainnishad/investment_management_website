import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  redirects: async () => [
    {
      source: '/home',
      destination: '/',
      permanent: false,
    }
  ]
};

export default nextConfig;
