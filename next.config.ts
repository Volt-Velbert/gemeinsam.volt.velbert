import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: process.env.BUILD_STANDALONE ? 'standalone' : undefined,
};

export default nextConfig;
