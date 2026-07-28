import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/paths";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: BASE_PATH,
};

export default nextConfig;
