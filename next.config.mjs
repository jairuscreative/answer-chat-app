/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "",
    reactStrictMode: true,
    experimental: {
      serverActions: {
        allowedOrigins: ["demo.exa.ai"],
        allowedForwardedHosts: ["demo.exa.ai"],
      },
    },
  };
  
export default nextConfig;
