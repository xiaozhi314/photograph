#!/bin/bash
set -euo pipefail

# fast-line 静态导出构建（Rsbuild / Rspack）
#
# ── 打包后样式偶发不对 / Tailwind「缺样式」时请对照 ─────────────────────────────
#   • app/globals.css：必须包含 @config 与 @source（与同仓库 tailwind.config 一致，
#     并让 Tailwind 扫描 app/、src/*），否则部份 class 不参与产物。
#   • postcss-rtlcss：默认开启 combined；若为纯 LTR 仍可疑，先试
#       FAST_LINE_DISABLE_POSTCSS_RTLCSS=1
#     再打一次产物对比 CSS 体积与布局。
#   • NEXT_PUBLIC_BASE_PATH / publicPath：与线上挂载路径不一致时，易出现 JS 报错或
#     主题 CSS chunk 加载错误，看起来像「样式全丢」。
#   • rsbuild-migration-files/extract-design-tokens.mjs：与全量 build-rsbuild.sh 一致，
#     仅从 prompt md 写入各平台 design-token-map.json；按需设 FAST_LINE_EXTRACT_DESIGN_TOKENS=1。
#
# 可选环境变量：
#   FAST_LINE_OUTPUT_BASE             — 产物根目录（绝对路径或已存在目录）
#   FAST_LINE_DEBUG_BUILD=1           — Linux 下保留 workspace，便于排查
#   FAST_LINE_FORCE_INSTALL=1         — 始终执行 pnpm install（默认：已有 node_modules/.bin/rsbuild 或 .bin/next 则跳过）
#   FAST_LINE_SKIP_INSTALL=1          — 从不安装依赖（仅当你确信 node_modules 完整时使用）
#   FAST_LINE_INSTALL_IGNORE_SCRIPTS=1 — pnpm install 加 --ignore-scripts（更快；若依赖需要 postinstall 勿开）
#   FAST_LINE_RSYNC_NODE_MODULES=1    — Linux rsync 时带上 aigcode-demo 下已有 node_modules（常能省去整段 install，需与构建机架构一致）
#   FAST_LINE_RSYNC_WHOLE_FILE=0      — 关闭 rsync -W（默认开启：本地整文件拷贝往往更快）
#   FAST_LINE_CLEAN_NEXT=1            — 构建前删除 .next（遗留 Next 本地缓存；Rsbuild 不使用）
#   FAST_LINE_BUILD_CPUS=N            — （预留）曾对 Next 生效；Rsbuild 未使用此变量
#   FAST_LINE_BUILD_CPUS_CAP=N        — （预留）曾对 Next 生效；Rsbuild 未使用此变量
#   FAST_LINE_LINT=1                  — 构建前单独执行 eslint
#   FAST_LINE_NEXT_BUILD_EXTRA_ARGS   — 追加传给 rsbuild build 的参数（空格分隔，沿用旧变量名）
#   FAST_LINE_PROJECT_ID              — 扁平仓库布局时覆盖 PROJECT_ID（默认：目录名 slug）
#   FAST_LINE_PROJECT_FOLDER_NAME     — 扁平仓库布局时覆盖产物子目录名（默认：<slug>_fast）
#   FAST_LINE_NEXT_PUBLIC_BASE_PATH   — 扁平布局下覆盖 NEXT_PUBLIC_BASE_PATH（不设则用 /<PROJECT_FOLDER_NAME>）
#   FAST_LINE_DISABLE_POSTCSS_RTLCSS=1 — 关闭 postcss-rtlcss（combined），便于纯 LTR 排障
#   FAST_LINE_NO_RTL_CSS=1            — 同上别名
#   FAST_LINE_EXTRACT_DESIGN_TOKENS=1  — rsbuild build 前执行 extract-design-tokens.mjs（有 Layout美化*.md / 美化*.md 时用）

SCRIPT_START_TS=$(date +%s)

PROJECT_DIR="$(pwd)"

derive_flat_slug() {
  local raw
  raw="$(basename "${PROJECT_DIR}")"
  raw="${raw// /_}"
  raw="$(printf '%s' "${raw}" | tr -cd 'A-Za-z0-9_.-')"
  if [ -z "${raw}" ]; then
    raw="fast-line-local"
  fi
  printf '%s\n' "${raw}"
}

CURRENT_BASE="$(basename "${PROJECT_DIR}")"
PROJECT_PARENT_DIR="$(dirname "${PROJECT_DIR}")"
PARENT_BASE="$(basename "${PROJECT_PARENT_DIR}")"

# 标准流水线：在 …/<项目>/aigcode-demo 下执行（<项目> 为 PROJ_* 或 *_fast）；否则视为「扁平仓库」
CANONICAL_FAST_LINE=false
if [ "${CURRENT_BASE}" = "aigcode-demo" ] && { [[ "${PARENT_BASE}" == *_fast ]] || [[ "${PARENT_BASE}" == PROJ_* ]]; }; then
  CANONICAL_FAST_LINE=true
  PROJECT_FOLDER_NAME="${PARENT_BASE}"
  PROJECT_ID="${PROJECT_FOLDER_NAME%_fast}"
fi

if [ "${CANONICAL_FAST_LINE}" != true ]; then
  flat_slug="$(derive_flat_slug)"
  PROJECT_FOLDER_NAME="${FAST_LINE_PROJECT_FOLDER_NAME:-${flat_slug}_fast}"
  PROJECT_ID="${FAST_LINE_PROJECT_ID:-${flat_slug}}"
fi

DEBUG_BUILD_MODE="${FAST_LINE_DEBUG_BUILD:-0}"

ensure_node_heap() {
  case " ${NODE_OPTIONS:-} " in
    *"--max-old-space-size="* | *"--max_old_space_size="*) return ;;
  esac
  export NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--max-old-space-size=8192"
}

resolve_output_base_path() {
  if [ -n "${FAST_LINE_OUTPUT_BASE:-}" ]; then
    case "${FAST_LINE_OUTPUT_BASE}" in
      /*) printf "%s\n" "${FAST_LINE_OUTPUT_BASE}" ;;
      *)
        if [ -d "${FAST_LINE_OUTPUT_BASE}" ]; then
          printf "%s\n" "$(cd "${FAST_LINE_OUTPUT_BASE}" && pwd)"
        else
          if [ "${CANONICAL_FAST_LINE}" = true ]; then
            local generated_root
            generated_root="$(cd "${PROJECT_PARENT_DIR}/../../.." && pwd)"
            printf "%s\n" "${generated_root}/Runtime/frontend/html"
          else
            printf "%s\n" "$(cd "${PROJECT_DIR}" && pwd)/dist-export"
          fi
        fi
        ;;
    esac
    return
  fi

  if [ "${CANONICAL_FAST_LINE}" = true ]; then
    local generated_root
    generated_root="$(cd "${PROJECT_PARENT_DIR}/../../.." && pwd)"
    printf "%s\n" "${generated_root}/Runtime/frontend/html"
    return
  fi

  printf "%s\n" "$(cd "${PROJECT_DIR}" && pwd)/dist-export"
}

OUTPUT_BASE_PATH="$(resolve_output_base_path)"
# 产物目录：标准布局下为 Runtime 下的 <父目录名>；扁平布局下为 <项目>/dist-export/<slug>_fast
OUTPUT_DIR="${OUTPUT_BASE_PATH}/${PROJECT_FOLDER_NAME}"

if [ "${CANONICAL_FAST_LINE}" != true ]; then
  echo "ℹ️  扁平仓库布局：PROJECT_ID=${PROJECT_ID}，产物目录 ${OUTPUT_DIR}"
  echo "   （流水线请在 …/PROJ_xxx/aigcode-demo 或 …/PROJ_xxx_fast/aigcode-demo 下执行；或设置 FAST_LINE_OUTPUT_BASE）"
fi

calc_workspace_num() {
  local project_id="$1"
  if [[ "$project_id" =~ ^PROJ_([0-9a-fA-F]{8})$ ]]; then
    local hex_part="${BASH_REMATCH[1]}"
    local value=$((16#$hex_part))
    echo $(((value % 10) + 1))
    return
  fi

  local checksum
  checksum=$(printf "%s" "$project_id" | cksum | awk '{print $1}')
  echo $(((checksum % 10) + 1))
}

restore_workspace_files() {
  local workspace_root="$1"
  local project_dir="$2"

  rm -f "${workspace_root}/package.json" || true

  if [ -f "${project_dir}/pnpm-lock.yaml.bak" ]; then
    cp -f "${project_dir}/pnpm-lock.yaml.bak" "${workspace_root}/pnpm-lock.yaml"
  else
    cp -f "${project_dir}/pnpm-lock.yaml" "${workspace_root}/pnpm-lock.yaml"
  fi

  if [ -f "${project_dir}/pnpm-workspace.yaml.bak" ]; then
    cp -f "${project_dir}/pnpm-workspace.yaml.bak" "${workspace_root}/pnpm-workspace.yaml"
  else
    cp -f "${project_dir}/pnpm-workspace.yaml" "${workspace_root}/pnpm-workspace.yaml"
  fi
}

run_install() {
  local install_log="$1"
  local frozen_opts=( --frozen-lockfile --prefer-offline )
  local loose_opts=( --no-frozen-lockfile --prefer-offline )
  if [ "${FAST_LINE_INSTALL_IGNORE_SCRIPTS:-0}" = "1" ]; then
    frozen_opts+=( --ignore-scripts )
    loose_opts+=( --ignore-scripts )
  fi

  if pnpm install "${frozen_opts[@]}" > "${install_log}" 2>&1; then
    return 0
  fi

  echo "⚠️  pnpm install --frozen-lockfile 失败，回退到 --no-frozen-lockfile"
  pnpm install "${loose_opts[@]}" >> "${install_log}" 2>&1
}

run_install_if_needed() {
  if [ "${FAST_LINE_SKIP_INSTALL:-0}" = "1" ]; then
    echo "⏭️  FAST_LINE_SKIP_INSTALL=1，跳过 pnpm install"
    return 0
  fi
  if [ "${FAST_LINE_FORCE_INSTALL:-0}" != "1" ] && { [ -x "node_modules/.bin/rsbuild" ] || [ -x "node_modules/.bin/next" ]; } && node -e 'const p=require("./package.json"); if(p.devDependencies?.parse5) for(const n of ["parse5","postcss","postcss-value-parser"]) require.resolve(n);' >/dev/null 2>&1; then
    echo "✓ 检测到 node_modules/.bin/rsbuild（或 next），跳过 pnpm install（设 FAST_LINE_FORCE_INSTALL=1 可强制安装）"
    return 0
  fi

  local install_log
  install_log="$(mktemp "/tmp/pnpm-install-${PROJECT_ID}-XXXXXX")"
  run_install "${install_log}"
  rm -f "${install_log}"
}

cleanup() {
  if [ "${DEBUG_BUILD_MODE}" = "1" ]; then
    return
  fi

  if [ "${IS_LINUX}" = true ] && [ -n "${WORKSPACE_PROJECT_DIR:-}" ] && [ -d "${WORKSPACE_PROJECT_DIR}" ]; then
    rm -rf "${WORKSPACE_PROJECT_DIR}"
  fi
}

trap cleanup EXIT

IS_LINUX=false
if [ "$(uname)" = "Linux" ]; then
  IS_LINUX=true
fi

if [ "${IS_LINUX}" = true ] && [ "${CANONICAL_FAST_LINE}" != true ]; then
  echo "❌ 错误: Linux 构建需在 …/PROJ_xxx/aigcode-demo（或 …/PROJ_xxx_fast/aigcode-demo）目录执行（当前为扁平仓库，无法在 workspace 中 rsync）。"
  exit 1
fi

if [ "${IS_LINUX}" = true ]; then
  if [ -n "${FAST_LINE_WORKSPACE_NUM:-}" ]; then
    if ! [[ "${FAST_LINE_WORKSPACE_NUM}" =~ ^[1-9]$|^10$ ]]; then
      echo "❌ 错误: FAST_LINE_WORKSPACE_NUM 必须是 1-10 之间的数字"
      exit 1
    fi
    WORKSPACE_NUM="${FAST_LINE_WORKSPACE_NUM}"
  else
    WORKSPACE_NUM="$(calc_workspace_num "${PROJECT_ID}")"
  fi
  BUILD_WORKSPACE_DIR="/root/code/generated/pnpm_node_modules/build-workspace"
  WORKSPACE_DIR="${BUILD_WORKSPACE_DIR}/workspace${WORKSPACE_NUM}"
  WORKSPACE_PROJECT_DIR="${WORKSPACE_DIR}/${PROJECT_FOLDER_NAME}"

  mkdir -p "${WORKSPACE_PROJECT_DIR}"

  RSYNC_ARGS=( -a --delete )
  if [ "${FAST_LINE_RSYNC_WHOLE_FILE:-1}" != "0" ]; then
    RSYNC_ARGS+=( -W )
  fi
  RSYNC_ARGS+=(
    --exclude ".next"
    --exclude "out"
    --exclude "dist"
    --exclude "__pycache__"
    --exclude "*.pyc"
    --exclude "logs"
    --exclude ".git"
    --exclude ".turbo"
    --exclude "coverage"
    --exclude "*.log"
  )
  if [ "${FAST_LINE_RSYNC_NODE_MODULES:-0}" != "1" ]; then
    RSYNC_ARGS+=( --exclude "node_modules" )
  else
    echo "⚡ FAST_LINE_RSYNC_NODE_MODULES=1：rsync 将复制 node_modules（请确认与 Linux 构建机架构一致，否则勿开）"
  fi
  rsync "${RSYNC_ARGS[@]}" "${PROJECT_PARENT_DIR}/" "${WORKSPACE_PROJECT_DIR}/"

  WORKSPACE_FAST_LINE_DIR="${WORKSPACE_PROJECT_DIR}/aigcode-demo"
  if [ ! -d "${WORKSPACE_FAST_LINE_DIR}" ]; then
    echo "❌ 错误: workspace 中不存在 aigcode-demo: ${WORKSPACE_FAST_LINE_DIR}"
    exit 1
  fi

  restore_workspace_files "${WORKSPACE_DIR}" "${WORKSPACE_FAST_LINE_DIR}"
else
  WORKSPACE_FAST_LINE_DIR="${PROJECT_DIR}"
fi

cd "${WORKSPACE_FAST_LINE_DIR}"

INSTALL_START_TS=$(date +%s)
run_install_if_needed
INSTALL_END_TS=$(date +%s)
echo "⏱️  依赖阶段（install / 跳过）: $((INSTALL_END_TS - INSTALL_START_TS))s"

if [ "${IS_LINUX}" = true ]; then
  cp -f "${WORKSPACE_DIR}/pnpm-lock.yaml" "./pnpm-lock.yaml.bak"
  cp -f "${WORKSPACE_DIR}/pnpm-workspace.yaml" "./pnpm-workspace.yaml.bak"
else
  if [ -f "./pnpm-lock.yaml" ]; then
    cp -f "./pnpm-lock.yaml" "./pnpm-lock.yaml.bak"
  fi
  if [ -f "./pnpm-workspace.yaml" ]; then
    cp -f "./pnpm-workspace.yaml" "./pnpm-workspace.yaml.bak"
  fi
fi

# 注入 Rsbuild / 前端可读环境变量（rsbuild.config.ts source.define 与 HTML 模板会读取）
export NEXT_TELEMETRY_DISABLED=1
export NODE_ENV="${NODE_ENV:-production}"
export MODE="${MODE:-${FAST_LINE_BUILD_MODE:-preview}}"
if [ "${MODE}" = "preview" ]; then
  # AutoSize（iframe + scale）默认关闭，保留代码；显式 AUTOSIZE_ENABLED=true 才启用
  export AUTOSIZE_ENABLED="${AUTOSIZE_ENABLED:-false}"
else
  export AUTOSIZE_ENABLED=false
fi
export PROJECT_ID
export PROJECT_FOLDER_NAME
export OUTPUT_BASE_PATH
export NEXT_PUBLIC_PROJECT_ID="${PROJECT_ID}"
if [ "${MODE}" = "root" ]; then
  export NEXT_PUBLIC_BASE_PATH="/"
elif [ -n "${FAST_LINE_NEXT_PUBLIC_BASE_PATH:-}" ]; then
  export NEXT_PUBLIC_BASE_PATH="${FAST_LINE_NEXT_PUBLIC_BASE_PATH}"
elif [ "${CANONICAL_FAST_LINE}" != true ]; then
  export NEXT_PUBLIC_BASE_PATH="/${PROJECT_FOLDER_NAME}"
else
  export NEXT_PUBLIC_BASE_PATH="${NEXT_PUBLIC_BASE_PATH:-/${PROJECT_FOLDER_NAME}}"
fi
export NEXT_PUBLIC_DYNAMIC_BASE="${NEXT_PUBLIC_DYNAMIC_BASE:-}"

: "${NEXT_DISABLE_SWC_WASM:=1}"
export NEXT_DISABLE_SWC_WASM
ensure_node_heap

if [ "${FAST_LINE_LINT:-0}" = "1" ]; then
  echo "🔎 FAST_LINE_LINT=1：构建前运行 eslint..."
  pnpm exec eslint . --max-warnings 0
fi

echo "📦 NEXT_PUBLIC 环境变量:"
echo "   NEXT_PUBLIC_PROJECT_ID=${NEXT_PUBLIC_PROJECT_ID}"
echo "   NEXT_PUBLIC_BASE_PATH=${NEXT_PUBLIC_BASE_PATH}"
echo "   NEXT_PUBLIC_DYNAMIC_BASE=${NEXT_PUBLIC_DYNAMIC_BASE}"

if [ "${FAST_LINE_EXTRACT_DESIGN_TOKENS:-0}" = "1" ]; then
  if [ -f "./rsbuild-migration-files/extract-design-tokens.mjs" ]; then
    echo "🎨 FAST_LINE_EXTRACT_DESIGN_TOKENS=1：运行 extract-design-tokens.mjs …"
    node ./rsbuild-migration-files/extract-design-tokens.mjs || echo "⚠️  extract-design-tokens 失败或非致命（继续构建）"
  else
    echo "⚠️  未找到 ./rsbuild-migration-files/extract-design-tokens.mjs，跳过"
  fi
fi

BUILD_START_TS=$(date +%s)
if [ "${FAST_LINE_CLEAN_NEXT:-0}" = "1" ]; then
  rm -rf .next
fi
mkdir -p "${OUTPUT_DIR}"
RSBUILD_CONFIG="./rsbuild-migration-files/rsbuild.config.ts"
if [ ! -f "${RSBUILD_CONFIG}" ]; then
  echo "❌ 错误: 未找到 Rsbuild 配置: ${RSBUILD_CONFIG}"
  exit 1
fi
# shellcheck disable=SC2086
pnpm exec rsbuild build --config "${RSBUILD_CONFIG}" ${FAST_LINE_NEXT_BUILD_EXTRA_ARGS:-}
BUILD_END_TS=$(date +%s)
echo "⏱️  rsbuild build 耗时: $((BUILD_END_TS - BUILD_START_TS))s"

if [ ! -f "${OUTPUT_DIR}/index.html" ]; then
  echo "❌ 错误: rsbuild 完成后输出目录缺少 index.html: ${OUTPUT_DIR}"
  exit 1
fi

SCRIPT_END_TS=$(date +%s)
echo "⏱️  脚本总耗时: $((SCRIPT_END_TS - SCRIPT_START_TS))s"

echo "✅ fast-line build 完成"
echo "   project_folder: ${PROJECT_FOLDER_NAME}"
echo "   project_id: ${PROJECT_ID}"
echo "   output_base: ${OUTPUT_BASE_PATH}"
echo "   output: ${OUTPUT_DIR}"
if [ "${IS_LINUX}" = true ]; then
  echo "   workspace: workspace${WORKSPACE_NUM}"
fi
