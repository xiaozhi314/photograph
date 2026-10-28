#!/bin/bash

# ====== S3构建脚本开始 ======
echo "[INFO] S3构建脚本启动，参数: $@"

# 使用说明
echo "[INFO] 检查参数数量..."
if [ $# -lt 4 ] || [ $# -gt 5 ]; then
    echo "[ERROR] 参数数量错误。"
    echo "用法: $0 <构建模式> <项目ID> <输出基础路径> <S3地址> [版本号]"
    echo "参数说明:"
    echo "  构建模式: preview 或 deploy"
    echo "  项目ID: 例如 PROJ_abc123"
    echo "  输出基础路径: 例如 ../../Runtime/frontend/html"
    echo "  S3地址: 例如 https://your-bucket.s3.amazonaws.com"
    echo "  版本号: 可选，默认为 1"
    echo ""
    echo "示例:"
    echo "  $0 preview PROJ_abc123 ../../Runtime/frontend/html https://mybucket.s3.amazonaws.com"
    echo "  $0 deploy PROJ_abc123 ../../Runtime/frontend/html https://mybucket.s3.amazonaws.com 2"
    exit 1
fi
echo "[INFO] 参数数量检查通过。"

# 获取参数
echo "[INFO] 解析参数..."
BUILD_MODE=$1
PROJECT_ID=$2
OUTPUT_BASE_PATH=$3
S3_URL=$4
VERSION=${5:-1}  # 如果没有提供版本号，默认为 1

# 移除S3_URL末尾的斜杠（如果有）
S3_URL=$(echo "$S3_URL" | sed 's:/*$::')

echo "[INFO] BUILD_MODE=$BUILD_MODE, PROJECT_ID=$PROJECT_ID, OUTPUT_BASE_PATH=$OUTPUT_BASE_PATH, S3_URL=$S3_URL, VERSION=$VERSION"

# 计算输出目录（与 vite.config.ts 中的逻辑一致）
echo "[INFO] 计算输出目录..."
if [ "$BUILD_MODE" = "preview" ]; then
    OUTPUT_DIR="$OUTPUT_BASE_PATH/$PROJECT_ID"
    PROJECT_PATH="$PROJECT_ID"
else
    OUTPUT_DIR="$OUTPUT_BASE_PATH/${PROJECT_ID}_${VERSION}"
    PROJECT_PATH="${PROJECT_ID}_${VERSION}"
fi
echo "[INFO] 输出目录为: $OUTPUT_DIR"
echo "[INFO] 项目路径为: $PROJECT_PATH"

if [ "$BUILD_MODE" = "deploy" ]; then
  echo "🚀 开始S3构建..."
  echo "   模式: $BUILD_MODE"
  echo "   项目ID: $PROJECT_ID"
  echo "   版本: $VERSION"
  echo "   输出基础路径: $OUTPUT_BASE_PATH"
  echo "   S3地址: $S3_URL"
  echo "   最终输出目录: $OUTPUT_DIR"
  echo "   项目路径: $PROJECT_PATH"
  echo ""
fi

# 执行构建，传递所有必要的环境变量
echo "[INFO] 执行构建命令: npm run only_build ..."
echo "[INFO] 设置环境变量: MODE=$BUILD_MODE, PROJECT_ID=$PROJECT_ID, OUTPUT_BASE_PATH=$OUTPUT_BASE_PATH, VERSION=$VERSION"
export MODE=$BUILD_MODE
export PROJECT_ID=$PROJECT_ID
export OUTPUT_BASE_PATH=$OUTPUT_BASE_PATH
export VERSION=$VERSION
npm run only_build 2>&1
BUILD_STATUS=$?
if [ $BUILD_STATUS -ne 0 ]; then
  echo "[ERROR] 构建命令执行失败，退出码: $BUILD_STATUS"
  exit $BUILD_STATUS
else
  echo "[INFO] 构建命令执行成功。"
fi

# 构建后处理：替换 index.html 中的路径
INDEX_HTML_PATH="$OUTPUT_DIR/index.html"
echo "[INFO] 检查 index.html 是否存在: $INDEX_HTML_PATH"
if [ -f "$INDEX_HTML_PATH" ]; then
    if [ "$BUILD_MODE" = "deploy" ]; then
      echo "   正在处理 index.html 文件..."
    fi

    # 步骤1：根据构建模式计算动态路径值（与 vite.config.ts 中的逻辑一致）
    if [ "$BUILD_MODE" = "preview" ]; then
        DYNAMIC_BASE_VALUE="/$PROJECT_ID"
    else
        DYNAMIC_BASE_VALUE="/${PROJECT_ID}_${VERSION}"
    fi
    echo "[INFO] 步骤1: 替换 /__dynamic_base__ 为: $DYNAMIC_BASE_VALUE"

    # 使用 sed 替换 /__dynamic_base__ 为实际的路径值
    sed -i.bak1 "s|/__dynamic_base__|$DYNAMIC_BASE_VALUE|g" "$INDEX_HTML_PATH"
    SED_STATUS=$?
    if [ $SED_STATUS -ne 0 ]; then
      echo "[ERROR] 步骤1 sed 替换失败，退出码: $SED_STATUS"
      exit $SED_STATUS
    else
      echo "[INFO] 步骤1 sed 替换成功。"
    fi

    # 步骤2：替换项目相关的路径为S3地址
    echo "[INFO] 步骤2: 替换项目路径 /$PROJECT_PATH 为 S3 地址"
    S3_PROJECT_URL="$S3_URL/$PROJECT_PATH"
    echo "[INFO] S3项目地址: $S3_PROJECT_URL"

    # 替换所有以 /$PROJECT_PATH 开头的路径为 S3 地址
    sed -i.bak2 "s|\"/$PROJECT_PATH/|\"$S3_PROJECT_URL/|g" "$INDEX_HTML_PATH"
    SED_STATUS2=$?
    if [ $SED_STATUS2 -ne 0 ]; then
      echo "[ERROR] 步骤2 sed 替换失败，退出码: $SED_STATUS2"
      exit $SED_STATUS2
    else
      echo "[INFO] 步骤2 sed 替换成功。"
    fi

    # 步骤3：处理其他可能的引用格式（单引号）
    echo "[INFO] 步骤3: 处理单引号引用"
    sed -i.bak3 "s|'/$PROJECT_PATH/|'$S3_PROJECT_URL/|g" "$INDEX_HTML_PATH"
    SED_STATUS3=$?
    if [ $SED_STATUS3 -ne 0 ]; then
      echo "[ERROR] 步骤3 sed 替换失败，退出码: $SED_STATUS3"
      exit $SED_STATUS3
    else
      echo "[INFO] 步骤3 sed 替换成功。"
    fi

    # 步骤4：处理没有引号的引用（如果有）
    echo "[INFO] 步骤4: 处理无引号引用"
    sed -i.bak4 "s|=/$PROJECT_PATH/|=$S3_PROJECT_URL/|g" "$INDEX_HTML_PATH"
    SED_STATUS4=$?
    if [ $SED_STATUS4 -ne 0 ]; then
      echo "[ERROR] 步骤4 sed 替换失败，退出码: $SED_STATUS4"
      exit $SED_STATUS4
    else
      echo "[INFO] 步骤4 sed 替换成功。"
    fi

    # 步骤5：专门处理 window.__dynamic_base__ 变量
    echo "[INFO] 步骤5: 处理 window.__dynamic_base__ 变量"

    # 首先尝试检测当前的window.__dynamic_base__值
    CURRENT_DYNAMIC_BASE=$(grep -o "window\\.__dynamic_base__ = '[^']*'" "$INDEX_HTML_PATH" | head -1 | sed "s|window\\.__dynamic_base__ = '||g" | sed "s|'||g" || true)
    if [ -z "$CURRENT_DYNAMIC_BASE" ]; then
        CURRENT_DYNAMIC_BASE=$(grep -o "window\\.__dynamic_base__ = \"[^\"]*\"" "$INDEX_HTML_PATH" | head -1 | sed "s|window\\.__dynamic_base__ = \"||g" | sed "s|\"||g" || true)
    fi

    if [ -n "$CURRENT_DYNAMIC_BASE" ]; then
        echo "[INFO] 检测到当前 window.__dynamic_base__ 值: $CURRENT_DYNAMIC_BASE"
        # 使用通用替换，替换任何形式的window.__dynamic_base__
        sed -i.bak5 "s|window\\.__dynamic_base__ = '[^']*'|window.__dynamic_base__ = '$S3_PROJECT_URL'|g" "$INDEX_HTML_PATH"
        sed -i.bak5a "s|window\\.__dynamic_base__ = \"[^\"]*\"|window.__dynamic_base__ = \"$S3_PROJECT_URL\"|g" "$INDEX_HTML_PATH"
    else
        echo "[INFO] 未找到 window.__dynamic_base__ 变量，尝试标准替换"
        # 处理可能的几种格式：单引号不带尾部斜杠、单引号带尾部斜杠、双引号格式
        sed -i.bak5 "s|window\\.__dynamic_base__ = '/$PROJECT_PATH'|window.__dynamic_base__ = '$S3_PROJECT_URL'|g" "$INDEX_HTML_PATH"
        sed -i.bak5a "s|window\\.__dynamic_base__ = '/$PROJECT_PATH/'|window.__dynamic_base__ = '$S3_PROJECT_URL'|g" "$INDEX_HTML_PATH"
        sed -i.bak5b "s|window\\.__dynamic_base__ = \"/$PROJECT_PATH\"|window.__dynamic_base__ = \"$S3_PROJECT_URL\"|g" "$INDEX_HTML_PATH"
        sed -i.bak5c "s|window\\.__dynamic_base__ = \"/$PROJECT_PATH/\"|window.__dynamic_base__ = \"$S3_PROJECT_URL\"|g" "$INDEX_HTML_PATH"
    fi
    SED_STATUS5=$?
    if [ $SED_STATUS5 -ne 0 ]; then
      echo "[ERROR] 步骤5 sed 替换失败，退出码: $SED_STATUS5"
      exit $SED_STATUS5
    else
      echo "[INFO] 步骤5 sed 替换成功。"
    fi

    # 删除所有备份文件
    echo "[INFO] 清理备份文件..."
    rm -f "$INDEX_HTML_PATH.bak1" "$INDEX_HTML_PATH.bak2" "$INDEX_HTML_PATH.bak3" "$INDEX_HTML_PATH.bak4" "$INDEX_HTML_PATH.bak5" "$INDEX_HTML_PATH.bak5a" "$INDEX_HTML_PATH.bak5b" "$INDEX_HTML_PATH.bak5c"
    RM_STATUS=$?
    if [ $RM_STATUS -ne 0 ]; then
      echo "[WARN] 备份文件删除失败，退出码: $RM_STATUS"
    else
      echo "[INFO] 备份文件删除成功。"
    fi

    if [ "$BUILD_MODE" = "deploy" ]; then
      echo "   已将 /__dynamic_base__ 替换为: $DYNAMIC_BASE_VALUE"
      echo "   已将项目路径 /$PROJECT_PATH/ 替换为: $S3_PROJECT_URL/"
      echo "   已将 window.__dynamic_base__ 替换为: $S3_PROJECT_URL"
    fi

    # 验证替换结果
    echo "[INFO] 验证替换结果..."
    S3_REFS=$(grep -c "$S3_PROJECT_URL" "$INDEX_HTML_PATH" || true)
    echo "[INFO] 发现 $S3_REFS 个S3引用"
    
    if [ "$S3_REFS" -gt 0 ]; then
        echo "[INFO] S3路径替换成功！"
        if [ "$BUILD_MODE" = "deploy" ]; then
            echo "   示例S3引用："
            grep "$S3_PROJECT_URL" "$INDEX_HTML_PATH" | head -3 | sed 's/^/     /'
        fi
    else
        echo "[WARN] 未发现S3引用，可能没有需要替换的资源路径"
    fi

else
    echo "⚠️  [WARN] 未找到 index.html 文件: $INDEX_HTML_PATH"
fi

if [ "$BUILD_MODE" = "deploy" ]; then
  echo ""
  echo "✅ S3构建完成！"
  echo "   构建包路径：$OUTPUT_DIR"
  echo "   S3项目地址：$S3_PROJECT_URL"
fi
echo "[INFO] S3构建脚本结束。"