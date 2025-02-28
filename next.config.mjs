/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "/answer",
    experimental: {
      serverActions: {
        allowedOrigins: ["demo.exa.ai"],
        allowedForwardedHosts: ["demo.exa.ai"],
      },
    },
  };
  
export default nextConfig;
