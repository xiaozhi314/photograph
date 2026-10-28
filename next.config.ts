import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { NextConfig } from "next";

/**
 * 跳过 Next 内置 TS 阶段的判定：
 * - env：FAST_LINE_PARALLEL_TYPECHECK=1 等（脚本会 export）。
 * - 文件标记：`.fast-line-parallel-tsc`（CI/Docker 常剥离自定义 env，仅靠标记也可生效）。
 *
 * 并行模式下脚本仍会跑 `tsc --noEmit`；此处跳过是为避免与 Next 重复跑一遍完整类型检查。
 */
const parallelTsMarker = fs.existsSync(
  path.join(__dirname, ".fast-line-parallel-tsc"),
);

const skipEmbeddedTypeScript =
  process.env.FAST_LINE_TYPECHECK === "0" ||
  process.env.FAST_LINE_SKIP_TYPECHECK === "1" ||
  process.env.FAST_LINE_PARALLEL_TYPECHECK === "1" ||
  parallelTsMarker;

/** Next 默认 experimental.cpus ≈ os.cpus().length - 1；超大核对少量静态页反而浪费调度，默认封顶 8（可调）。 */
const cpuMinusOne = Math.max(1, os.cpus().length - 1);
const buildWorkers = process.env.FAST_LINE_BUILD_CPUS
  ? Math.max(1, Number(process.env.FAST_LINE_BUILD_CPUS) || 1)
  : Math.min(
      Math.max(1, Number(process.env.FAST_LINE_BUILD_CPUS_CAP ?? "8") || 8),
      cpuMinusOne,
    );

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PROJ_cac196eb",
  outputFileTracingRoot: path.join(__dirname, "../.."),
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: skipEmbeddedTypeScript,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
    cpus: buildWorkers,
  },
};

export default nextConfig;
