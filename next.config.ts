import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't advertise the framework/version to would-be attackers.
  poweredByHeader: false,
};

export default nextConfig;
