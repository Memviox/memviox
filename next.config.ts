import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@lobehub/icons",
      "@mui/icons-material",
    ],
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
