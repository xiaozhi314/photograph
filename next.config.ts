import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PROJ_7f482cc8",
  outputFileTracingRoot: path.join(__dirname, "../.."),
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
    cpus: 8,
  },
};

export default nextConfig;
