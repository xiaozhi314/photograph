#!/bin/bash

# ====== AI 项目构建脚本 ======
# 用法: ./build-simple.sh <构建模式> <项目ID> <输出基础路径> [版本号] [项目名称] [--skip-build] [--debug-build-paths <pagePath>]

set -e  # 遇到错误立即退出
exec 2>&1

LINEBUF_CMD=""
if command -v stdbuf >/dev/null 2>&1; then
    LINEBUF_CMD="stdbuf -oL -eL"
fi

# 获取毫秒时间戳（兼容 macOS 和 Linux）
get_timestamp_ms() {
    if [ "$(uname)" = "Darwin" ]; then
        # macOS: 使用 python3 获取毫秒时间戳
        python3 -c 'import time; print(int(time.time() * 1000))'
    else
        # Linux: 使用 date +%s%3N
        date +%s%3N
    fi
}

format_duration() {
    local ms=$1
    awk -v ms="$ms" 'BEGIN { printf "%.2f秒", ms / 1000 }'
}

format_duration_or_skip() {
    local ms=$1
    if [ "$ms" -lt 0 ]; then
        echo "跳过"
    else
        format_duration "$ms"
    fi
}

# 解析可选 flag
SKIP_BUILD=0
DEBUG_BUILD_MODE=0
DEBUG_BUILD_PATHS=""
POSITIONAL_ARGS=()
while [ $# -gt 0 ]; do
    case "$1" in
        --skip-build)
            SKIP_BUILD=1
            shift
            ;;
        --debug-build-paths)
            if [ -z "$2" ]; then
                echo "❌ 错误：--debug-build-paths 需要指定页面路径"
                exit 1
            fi
            DEBUG_BUILD_MODE=1
            DEBUG_BUILD_PATHS="$2"
            shift 2
            ;;
        *)
            POSITIONAL_ARGS+=("$1")
            shift
            ;;
    esac
done
set -- "${POSITIONAL_ARGS[@]}"

# 如果跳过打包，直接退出
if [ "$SKIP_BUILD" = "1" ]; then
    echo "⏭️  跳过构建（--skip-build），脚本已退出"
    exit 0
fi

# 使用说明
if [ $# -lt 3 ] || [ $# -gt 5 ]; then
    echo "❌ 错误：参数数量不正确"
    echo "用法: $0 <构建模式> <项目ID> <输出基础路径> [版本号] [项目名称] [--skip-build] [--debug-build-paths <pagePath>]"
    echo "参数说明:"
    echo "  构建模式: preview 或 deploy"
    echo "  项目ID: 例如 PROJ_abc123"
    echo "  输出基础路径: 例如 ../../Runtime/frontend/html"
    echo "  版本号: 可选，默认为 1（deploy 模式生效）"
    echo "  项目名称: 可选，用于日志记录"
    echo "  --skip-build: 可选，跳过打包"
    echo "  --debug-build-paths <pagePath>: 可选，启用单页面编译检查"
    echo ""
    echo "示例:"
    echo "  $0 preview PROJ_abc123 ../../Runtime/frontend/html 1"
    echo "  $0 deploy PROJ_abc123 ../../Runtime/frontend/html 2 1 'My Awesome Project'"
    echo "  $0 preview PROJ_abc123 ../../Runtime/frontend/html 1 1 'My Awesome Project' --skip-build"
    echo "  $0 preview PROJ_abc123 ../../Runtime/frontend/html 1 1 'My Awesome Project' --debug-build-paths app/(frontend)/layout-test/page.tsx"
    exit 1
fi

BUILD_MODE=$1
PROJECT_ID=$2
OUTPUT_BASE_PATH=$3
VERSION=${4:-1}
PROJECT_NAME=$5

# 计算输出目录
if [ "$BUILD_MODE" = "preview" ]; then
    OUTPUT_DIR="$OUTPUT_BASE_PATH/$PROJECT_ID"
    BASE_PATH="/$PROJECT_ID"
else
    OUTPUT_DIR="$OUTPUT_BASE_PATH/${PROJECT_ID}_${VERSION}"
    BASE_PATH="/${PROJECT_ID}_${VERSION}"
fi

DISPLAY_NAME=${PROJECT_NAME:-$PROJECT_ID}

# 记录构建开始时间
BUILD_START_TIME=$(get_timestamp_ms)
BUILD_START_DATE=$(date '+%Y-%m-%d %H:%M:%S')

# 分步耗时（毫秒），默认 -1 表示未执行
TIME_CLEAN_OUTPUT=-1
TIME_CLEAN_OUT=-1
TIME_API_SWAP=-1
TIME_ACTIONS_SWAP=-1
TIME_PNPM_BUILD=-1
TIME_MOVE_OUT=-1
TIME_RSYNC=-1
TIME_RESTORE_BAK=-1
TIME_MODIFY_CONFIG=-1
TIME_INSTALL_DEPS=-1


# 检测运行环境：直接在项目目录构建
IS_LINUX=false
if [ "$(uname)" = "Linux" ]; then
    IS_LINUX=true
fi

# 清理函数：确保退出时恢复 API Routes
# 清理函数：确保退出时恢复备份的目录
cleanup() {
    if [ -d ".api_backup_$$" ]; then
        echo ""
        echo "🔄 清理：恢复 API Routes..."
        mv ".api_backup_$$" "src/app/api" 2>/dev/null || true
    fi

    # Linux 环境：恢复所有备份的 actions 目录（适配 src/xxx/actions 结构）
    for backup_dir in .actions_backup_*_$$; do
        if [ -d "$backup_dir" ]; then
            # 从备份目录名提取原始路径（格式：.actions_backup_<path_with_underscores>_$$）
            # 例如：.actions_backup_src_xxx_actions_$$ -> src/xxx/actions
            path_part=$(echo "$backup_dir" | sed "s/\.actions_backup_\(.*\)_$$/\1/")
            if [ -n "$path_part" ] && [ "$path_part" != "$backup_dir" ]; then
                # 将下划线还原为斜杠
                original_path=$(echo "$path_part" | sed 's/_/\//g')
                echo ""
                echo "🔄 清理：恢复 actions 目录: $original_path"
                mv "$backup_dir" "$original_path" 2>/dev/null || true
            fi
        fi
    done

    # 非 Linux 环境：恢复被修改的 'use server' 文件
    for backup_file in $(find . -name "*.use_server_bak_$$" 2>/dev/null); do
        if [ -f "$backup_file" ]; then
            original_file="${backup_file%.use_server_bak_$$}"
            echo "🔄 清理：恢复文件: $original_file"
            mv "$backup_file" "$original_file" 2>/dev/null || true
        fi
    done
}

# 注册退出时的清理函数
trap cleanup EXIT

echo "🚀 开始构建 AI 项目"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 项目信息:"
echo "   构建模式: $BUILD_MODE"
echo "   项目 ID:   $PROJECT_ID"
echo "   Base Path: $BASE_PATH"
echo "   输出目录:   $OUTPUT_DIR"
echo "   构建版本:   $VERSION"
echo "   项目名称:   $DISPLAY_NAME"
if [ "$IS_LINUX" = true ]; then
    echo "   工作目录:   $BASE_PATH"
else
    echo "   构建模式:   本地开发环境（直接构建）"
fi
echo "   开始时间:   $BUILD_START_DATE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 1. 验证项目配置是否存在（可选）
# CONFIG_FILE="../ai-content/projects/$PROJECT_ID/config.json"
# if [ ! -f "$CONFIG_FILE" ]; then
#     echo "⚠️  警告: 未找到项目配置: $CONFIG_FILE"
#     read -p "是否继续构建? (y/N) " -n 1 -r
#     echo
#     if [[ ! $REPLY =~ ^[Yy]$ ]]; then
#         exit 1
#     fi
# fi

# 2. 清理之前的 out 目录（输出目录在构建成功后再清理）
if [ -d "out" ]; then
    echo "🗑️  清理 out 目录"
    CLEAN_OUT_START=$(get_timestamp_ms)
    rm -rf out
    CLEAN_OUT_END=$(get_timestamp_ms)
    TIME_CLEAN_OUT=$((CLEAN_OUT_END - CLEAN_OUT_START))
    echo "⏱️  清理 out 目录耗时: $(format_duration "$TIME_CLEAN_OUT")"
else
    echo "🗑️  清理 out 目录: 无 out 目录，跳过"
fi

# 3. 临时备份并移除 API Routes（静态导出不支持）
API_DIR="src/app/api"
API_BACKUP=".api_backup_$$"

if [ -d "$API_DIR" ]; then
    echo "📦 临时移除 API Routes（静态导出不支持）"
    API_SWAP_START=$(get_timestamp_ms)
    mv "$API_DIR" "$API_BACKUP"
    API_SWAP_END=$(get_timestamp_ms)
    TIME_API_SWAP=$((API_SWAP_END - API_SWAP_START))
    echo "⏱️  移除 API Routes 耗时: $(format_duration "$TIME_API_SWAP")"
fi

# 4. 生成 RPC 存根
echo ""
echo "🔧 生成 RPC 存根..."
$LINEBUF_CMD pnpm run gen_rpc

# 4.5 处理 actions 文件中的 'use server' 指令（静态导出不支持）
# Linux 环境：移除整个 actions 目录
# 非 Linux 环境：仅去掉文件开头的 'use server' 指令
ACTIONS_SWAP_START=$(get_timestamp_ms)
ACTIONS_COUNT=0

if [ "$IS_LINUX" = true ]; then
    # Linux 环境：临时移除原始 actions 目录
    # 适配 src/xxx/actions 目录结构
    if [ -d "src" ]; then
        echo "📦 查找并临时移除 actions 目录（静态导出不支持 'use server'）"
        for actions_dir in src/*/actions; do
            if [ -d "$actions_dir" ]; then
                # 将路径中的 / 替换为 _ 作为备份目录名的一部分
                backup_name=$(echo "$actions_dir" | sed 's/\//_/g')
                ACTIONS_BACKUP=".actions_backup_${backup_name}_$$"

                echo "   发现 actions 目录: $actions_dir"
                mv "$actions_dir" "$ACTIONS_BACKUP"
                ACTIONS_COUNT=$((ACTIONS_COUNT + 1))
            fi
        done

        # 兼容旧的 src/actions 目录结构
        if [ -d "src/actions" ]; then
            ACTIONS_BACKUP=".actions_backup_src_actions_$$"
            echo "   发现 actions 目录: src/actions"
            mv "src/actions" "$ACTIONS_BACKUP"
            ACTIONS_COUNT=$((ACTIONS_COUNT + 1))
        fi
    fi
else
    # 非 Linux 环境：仅去掉文件开头的 'use server' 指令，保留文件
    echo "📦 处理 actions 文件中的 'use server' 指令（本地开发环境）"

    # 查找所有 actions 目录下的 .ts/.tsx 文件
    for actions_dir in src/*/actions src/actions; do
        if [ -d "$actions_dir" ]; then
            echo "   扫描目录: $actions_dir"
            find "$actions_dir" -type f \( -name "*.ts" -o -name "*.tsx" \) | while read -r file; do
                # 检查文件开头是否有 'use server' 指令
                if head -n 5 "$file" | grep -q "^['\"]use server['\"]"; then
                    echo "   处理文件: $file"
                    # 备份原文件
                    cp "$file" "${file}.use_server_bak_$$"
                    # 使用 sed 去掉 'use server' 行（macOS 兼容写法）
                    sed -i.tmp "/^['\"]use server['\"][[:space:]]*;*[[:space:]]*$/d" "$file"
                    rm -f "${file}.tmp"
                    ACTIONS_COUNT=$((ACTIONS_COUNT + 1))
                fi
            done
        fi
    done
fi

ACTIONS_SWAP_END=$(get_timestamp_ms)
TIME_ACTIONS_SWAP=$((ACTIONS_SWAP_END - ACTIONS_SWAP_START))

if [ $ACTIONS_COUNT -gt 0 ]; then
    if [ "$IS_LINUX" = true ]; then
        echo "⏱️  移除 $ACTIONS_COUNT 个 actions 目录耗时: $(format_duration "$TIME_ACTIONS_SWAP")"
    else
        echo "⏱️  处理 $ACTIONS_COUNT 个文件的 'use server' 指令耗时: $(format_duration "$TIME_ACTIONS_SWAP")"
    fi
else
    echo "ℹ️  未找到需要处理的 actions 文件，跳过"
    TIME_ACTIONS_SWAP=-1
fi

# 5. 执行 Next.js 构建
echo ""
echo "📦 开始 Next.js 构建..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

set +e  # 允许捕获 pnpm build 的退出码
PNPM_BUILD_START=$(get_timestamp_ms)

# 根据环境变量 USE_WEBPACK_BUILD 决定是否使用 --webpack
WEBPACK_FLAG=""
if [ "${USE_WEBPACK_BUILD}" = "1" ]; then
    WEBPACK_FLAG="--webpack"
fi

# 使用标记包裹 Next.js 构建输出，方便解析器提取纯净的构建错误
echo "===NEXT_BUILD_OUTPUT_START==="

# 导出环境变量，确保 Next.js 构建时能读取到
# export NEXT_PUBLIC_BASE_PATH="$NEXT_PUBLIC_BASE_PATH"
export NEXT_PUBLIC_SITE_TITLE="$DISPLAY_NAME"
export NEXT_PUBLIC_PROJECT_ID="$PROJECT_ID"
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1

# 打印环境变量用于调试
echo "🔍 构建环境变量:"
echo "   NEXT_PUBLIC_BASE_PATH: ${NEXT_PUBLIC_BASE_PATH:-<未设置>}"
echo "   NEXT_PUBLIC_ASSET_PREFIX: ${NEXT_PUBLIC_ASSET_PREFIX:-<未设置>}"
echo "   NEXT_PUBLIC_PROJECT_ID: ${NEXT_PUBLIC_PROJECT_ID:-<未设置>}"
echo "   NEXT_PUBLIC_SITE_TITLE: ${NEXT_PUBLIC_SITE_TITLE:-<未设置>}"

BUILD_CMD=(pnpm build)
if [ -n "$WEBPACK_FLAG" ]; then
    BUILD_CMD+=(--webpack)
fi
if [ "$DEBUG_BUILD_MODE" = "1" ]; then
    BUILD_CMD+=(--debug-build-paths "$DEBUG_BUILD_PATHS")
fi
if [ -n "$LINEBUF_CMD" ]; then
    $LINEBUF_CMD "${BUILD_CMD[@]}"
else
    "${BUILD_CMD[@]}"
fi
BUILD_STATUS=$?
echo "===NEXT_BUILD_OUTPUT_END==="
set -e

PNPM_BUILD_END=$(get_timestamp_ms)
TIME_PNPM_BUILD=$((PNPM_BUILD_END - PNPM_BUILD_START))
echo "⏱️  pnpm build 耗时: $(format_duration "$TIME_PNPM_BUILD")"

if [ $BUILD_STATUS -ne 0 ]; then
    # 计算失败时的构建时间
    BUILD_END_TIME=$(get_timestamp_ms)
    BUILD_END_DATE=$(date '+%Y-%m-%d %H:%M:%S')
    BUILD_DURATION=$((BUILD_END_TIME - BUILD_START_TIME))

    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "❌ 构建失败！"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "⏱️  构建时间:"
    echo "   开始时间: $BUILD_START_DATE"
    echo "   失败时间: $BUILD_END_DATE"
    echo "   运行时长: $(format_duration "$BUILD_DURATION")"
    echo "   退出码:   $BUILD_STATUS"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit $BUILD_STATUS
fi

if [ "$DEBUG_BUILD_MODE" = "1" ]; then
    echo ""
    echo "✅ 单页面编译检查完成（--debug-build-paths），跳过产物迁移"
    exit 0
fi

# 6. 移动构建产物
echo ""
echo "📁 移动构建产物..."

# 检查 out 目录是否存在
if [ ! -d "out" ]; then
    echo "❌ 错误: out 目录不存在，构建可能失败"
    exit 1
fi

# 迁移构建产物到临时目录，再切换并后台清理旧产物
# macOS 的 tar 不支持 -I 选项，使用普通 cp -r 替代
MOVE_START=$(get_timestamp_ms)
NEW_DIR="${OUTPUT_DIR}.new"
OLD_DIR="${OUTPUT_DIR}.old.$(get_timestamp_ms)"
rm -rf "$NEW_DIR"
mkdir -p "$NEW_DIR"
if [ "$IS_LINUX" = true ] && command -v lz4 >/dev/null 2>&1; then
    # Linux 且有 lz4：使用 tar + lz4 压缩传输
    tar -C out -c -I lz4 -f - . | tar -x -I lz4 -C "$NEW_DIR"
else
    # macOS 或无 lz4：直接复制
    cp -r out/* "$NEW_DIR/"
fi
if [ -d "$OUTPUT_DIR" ]; then
    mv "$OUTPUT_DIR" "$OLD_DIR"
fi
mv "$NEW_DIR" "$OUTPUT_DIR"
if [ -d "$OLD_DIR" ]; then
    rm -rf "$OLD_DIR" &
fi
MOVE_END=$(get_timestamp_ms)
TIME_MOVE_OUT=$((MOVE_END - MOVE_START))
echo "⏱️  迁移输出目录耗时: $(format_duration "$TIME_MOVE_OUT")"

# 7. 计算构建时间并显示结果
BUILD_END_TIME=$(get_timestamp_ms)
BUILD_END_DATE=$(date '+%Y-%m-%d %H:%M:%S')
BUILD_DURATION=$((BUILD_END_TIME - BUILD_START_TIME))

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ 构建成功！"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📁 输出目录: $OUTPUT_DIR"
echo "📊 文件数量: $(find "$OUTPUT_DIR" -type f | wc -l)"
echo "💾 总大小:   $(du -sh "$OUTPUT_DIR" | cut -f1)"
echo ""
echo "⏱️  构建时间:"
echo "   开始时间: $BUILD_START_DATE"
echo "   结束时间: $BUILD_END_DATE"
echo "   总耗时:   $(format_duration "$BUILD_DURATION")"
echo ""
echo "⏱️  分步耗时:"
if [ "$IS_LINUX" = true ]; then
    echo "   项目迁移: $(format_duration_or_skip "$TIME_RSYNC")"
    echo "   还原配置文件: $(format_duration_or_skip "$TIME_RESTORE_BAK")"
    echo "   修改配置: $(format_duration_or_skip "$TIME_MODIFY_CONFIG")"
    echo "   安装依赖: $(format_duration_or_skip "$TIME_INSTALL_DEPS")"
fi
echo "   清理旧构建: $(format_duration_or_skip "$TIME_CLEAN_OUTPUT")"
echo "   清理 out 目录: $(format_duration_or_skip "$TIME_CLEAN_OUT")"
echo "   移除 API Routes: $(format_duration_or_skip "$TIME_API_SWAP")"
echo "   移除 actions: $(format_duration_or_skip "$TIME_ACTIONS_SWAP")"
echo "   pnpm build: $(format_duration_or_skip "$TIME_PNPM_BUILD")"
echo "   替换输出目录: $(format_duration_or_skip "$TIME_MOVE_OUT")"
echo ""
echo "🚀 部署命令:"
echo "   scp -r $OUTPUT_DIR/* user@server:/var/www/html/$PROJECT_ID/"
echo ""
echo "🌐 访问地址:"
echo "   http://yourdomain.com/$PROJECT_ID/"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
