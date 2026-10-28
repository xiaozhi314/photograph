#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logHeader(message) {
  console.log('\n' + '='.repeat(60));
  log(message, 'bright');
  console.log('='.repeat(60));
}

function logSection(message) {
  console.log('\n' + '-'.repeat(40));
  log(message, 'cyan');
  console.log('-'.repeat(40));
}

// 获取文件大小
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 计算目录总大小
function calculateDirSize(dirPath) {
  let totalSize = 0;
  
  function traverse(currentPath) {
    if (!fs.existsSync(currentPath)) return;
    
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        traverse(itemPath);
      } else {
        totalSize += stats.size;
      }
    }
  }
  
  traverse(dirPath);
  return totalSize;
}

// 获取构建产物信息
function getBuildInfo(buildDir) {
  if (!fs.existsSync(buildDir)) {
    return { totalSize: 0, fileCount: 0, files: [] };
  }
  
  const files = [];
  let totalSize = 0;
  let fileCount = 0;
  
  function traverse(currentPath, relativePath = '') {
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const relativeItemPath = path.join(relativePath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        traverse(itemPath, relativeItemPath);
      } else {
        const size = stats.size;
        files.push({
          name: relativeItemPath,
          size: size,
          formattedSize: formatFileSize(size)
        });
        totalSize += size;
        fileCount++;
      }
    }
  }
  
  traverse(buildDir);
  
  return {
    totalSize,
    fileCount,
    files: files.sort((a, b) => b.size - a.size) // 按大小降序排列
  };
}

// 执行构建命令并计时
function executeBuild(command, name) {
  logSection(`开始 ${name} 构建`);
  
  const startTime = Date.now();
  try {
    execSync(command, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    log(`✅ ${name} 构建完成`, 'green');
    log(`⏱️  构建时间: ${duration}ms (${(duration / 1000).toFixed(2)}s)`, 'yellow');
    
    return { success: true, duration };
  } catch (error) {
    log(`❌ ${name} 构建失败`, 'red');
    return { success: false, duration: 0 };
  }
}

// 主函数
async function main() {
  logHeader('🚀 Rsbuild vs Vite 构建对比工具');
  
  // 设置环境变量
  process.env.MODE = 'preview';
  process.env.PROJECT_ID = 'build-compare-test';
  process.env.OUTPUT_BASE_PATH = './dist';
  
  const projectRoot = process.cwd();
  const rsbuildOutputDir = path.join(projectRoot, 'dist', 'build-compare-test');
  const viteOutputDir = path.join(projectRoot, 'dist', 'build-compare-test');
  
  // 清理之前的构建产物
  logSection('清理之前的构建产物');
  if (fs.existsSync(rsbuildOutputDir)) {
    fs.rmSync(rsbuildOutputDir, { recursive: true, force: true });
    log('已清理 Rsbuild 构建产物', 'yellow');
  }
  if (fs.existsSync(viteOutputDir)) {
    fs.rmSync(viteOutputDir, { recursive: true, force: true });
    log('已清理 Vite 构建产物', 'yellow');
  }
  
  // 执行 Rsbuild 构建
  const rsbuildResult = executeBuild('rsbuild build --config rsbuild.config.ts', 'Rsbuild');
  
  // 执行 Vite 构建
  const viteResult = executeBuild('vite build --config vite.config.ts', 'Vite');
  
  // 等待一下确保文件写入完成
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 分析构建产物
  logSection('📊 构建产物分析');
  
  const rsbuildInfo = getBuildInfo(rsbuildOutputDir);
  const viteInfo = getBuildInfo(viteOutputDir);
  
  // 输出 Rsbuild 构建信息
  log('\n📦 Rsbuild 构建产物:', 'blue');
  log(`   总文件数: ${rsbuildInfo.fileCount}`, 'reset');
  log(`   总大小: ${formatFileSize(rsbuildInfo.totalSize)}`, 'reset');
  if (rsbuildInfo.files.length > 0) {
    log('   主要文件:', 'reset');
    rsbuildInfo.files.slice(0, 5).forEach(file => {
      log(`     ${file.name}: ${file.formattedSize}`, 'reset');
    });
  }
  
  // 输出 Vite 构建信息
  log('\n📦 Vite 构建产物:', 'blue');
  log(`   总文件数: ${viteInfo.fileCount}`, 'reset');
  log(`   总大小: ${formatFileSize(viteInfo.totalSize)}`, 'reset');
  if (viteInfo.files.length > 0) {
    log('   主要文件:', 'reset');
    viteInfo.files.slice(0, 5).forEach(file => {
      log(`     ${file.name}: ${file.formattedSize}`, 'reset');
    });
  }
  
  // 对比结果
  logSection('📈 对比结果');
  
  if (rsbuildResult.success && viteResult.success) {
    const timeDiff = rsbuildResult.duration - viteResult.duration;
    const sizeDiff = rsbuildInfo.totalSize - viteInfo.totalSize;
    
    log('⏱️  构建时间对比:', 'yellow');
    log(`   Rsbuild: ${rsbuildResult.duration}ms (${(rsbuildResult.duration / 1000).toFixed(2)}s)`, 'reset');
    log(`   Vite: ${viteResult.duration}ms (${(viteResult.duration / 1000).toFixed(2)}s)`, 'reset');
    
    if (timeDiff > 0) {
      log(`   Vite 快 ${timeDiff}ms (${(timeDiff / 1000).toFixed(2)}s)`, 'green');
    } else {
      log(`   Rsbuild 快 ${Math.abs(timeDiff)}ms (${(Math.abs(timeDiff) / 1000).toFixed(2)}s)`, 'green');
    }
    
    log('\n📦 构建产物大小对比:', 'yellow');
    log(`   Rsbuild: ${formatFileSize(rsbuildInfo.totalSize)}`, 'reset');
    log(`   Vite: ${formatFileSize(viteInfo.totalSize)}`, 'reset');
    
    if (sizeDiff > 0) {
      log(`   Vite 小 ${formatFileSize(sizeDiff)}`, 'green');
    } else {
      log(`   Rsbuild 小 ${formatFileSize(Math.abs(sizeDiff))}`, 'green');
    }
    
    log('\n📊 文件数量对比:', 'yellow');
    log(`   Rsbuild: ${rsbuildInfo.fileCount} 个文件`, 'reset');
    log(`   Vite: ${viteInfo.fileCount} 个文件`, 'reset');
    
  } else {
    log('❌ 构建失败，无法进行对比', 'red');
    if (!rsbuildResult.success) {
      log('   Rsbuild 构建失败', 'red');
    }
    if (!viteResult.success) {
      log('   Vite 构建失败', 'red');
    }
  }
  
  logHeader('🎉 对比完成');
  
  // 生成对比报告
  const report = {
    timestamp: new Date().toISOString(),
    rsbuild: {
      success: rsbuildResult.success,
      duration: rsbuildResult.duration,
      totalSize: rsbuildInfo.totalSize,
      fileCount: rsbuildInfo.fileCount,
      files: rsbuildInfo.files.slice(0, 10) // 只保存前10个文件
    },
    vite: {
      success: viteResult.success,
      duration: viteResult.duration,
      totalSize: viteInfo.totalSize,
      fileCount: viteInfo.fileCount,
      files: viteInfo.files.slice(0, 10) // 只保存前10个文件
    }
  };
  
}

// 错误处理
process.on('unhandledRejection', (reason, promise) => {
  log('❌ 未处理的 Promise 拒绝:', 'red');
  console.error(reason);
  process.exit(1);
});

// 运行主函数
main().catch(error => {
  log('❌ 脚本执行失败:', 'red');
  console.error(error);
  process.exit(1);
});
