import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import vitePluginExternal from 'vite-plugin-external'
import viteCompression from 'vite-plugin-compression';
import path from 'path'
import { dynamicBase } from 'vite-plugin-dynamic-base'
// 不要动这段，404兼容用的
import autoNotFoundRoutePlugin from './src/default/vite-plugin-generate-route-layout';
// 前端定位插件
import VitePluginReactInspectorSimple from './src/default/vite-plugin-react-inspector-simple'

const externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  '@ant-design/charts': 'Charts',
  'antd': 'antd',

  'lodash': '_',

}

// 解析命令行参数
const getBuildConfig = () => {
  const buildMode = process.env.MODE || 'preview';
  const projectId = process.env.PROJECT_ID || 'PROJ_47bdb6f4';
  const outputBasePath = process.env.OUTPUT_BASE_PATH || '../../Runtime/frontend/html';
  const version = process.env.VERSION || '1';

  let basePath = '/';
  let outputDir = '';
  let viteBasePath = '';
  if (buildMode === 'preview') {
    viteBasePath = `/${projectId}`;
    outputDir = `${outputBasePath}/${projectId}`;
  } else {
    viteBasePath = `/${projectId}_${version}`;
    outputDir = `${outputBasePath}/${projectId}_${version}`
  }

  // 输出构建配置信息
  console.log('\n🔧 构建配置:');
  console.log(`   模式: ${buildMode}`);
  console.log(`   项目ID: ${projectId}`);
  console.log(`   版本: ${version}`);
  console.log(`   Base路径: ${basePath}`);
  console.log(`   输出目录: ${outputDir}\n`);

  return { basePath, outputDir, projectId,viteBasePath };
};

// 生成智能标识生成。根据将选取的数据采用GB 1988给 出的编码规则，生成唯一标识。
// ContentProducer = AutoCoder.cc AIGCode的AI大模型生成 
// Label = 1
// ProduceID =  process.env.PROJECT_ID || 'PROJ_47bdb6f4';
// 根据上述生成ReservedCode1

function generateReservedCode1() {
    // 固定输入数据
    const ContentProducer = "AutoCoder.cc AIGCode的AI大模型生成";
    const Label = 1;
    const ProduceID = typeof process !== 'undefined' && process.env.PROJECT_ID 
                     ? process.env.PROJECT_ID 
                     : 'PROJ_47bdb6f4';

    // 组合数据并处理非ASCII字符
    const combinedString = ContentProducer + Label + ProduceID;
    let hexIdentifier = '';

    for (let i = 0; i < combinedString.length; i++) {
        const charCode = combinedString.charCodeAt(i);
        // 根据GB 1988处理非ASCII字符（>127的替换为?的ASCII码）
        const asciiValue = charCode > 127 ? 63 : charCode;
        // 转换为两位十六进制表示
        hexIdentifier += asciiValue.toString(16).padStart(2, '0');
    }

    return hexIdentifier;
}



const config = getBuildConfig();

export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/ui'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/dist/**',
        '**/checkpoint/**',
        '**/dist_server/**',
        '**/bmap-offline/**'
      ]
    },
    proxy: {
      '/BACKEND_PROJ_47bdb6f4': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  },

  base: command === 'serve' ? "/" + config.projectId + "/" : "/__dynamic_base__/",

  build: {
    outDir: config.outputDir,
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    cssMinify: 'esbuild',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 5000,
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除所有 console
        ecma: 2020 // 使用最新压缩标准
      },
      format: {
        comments: false // 移除注释
      },
      maxWorkers: 8,

    },
    rollupOptions: {
      cache: true,
      output: {
        manualChunks(id: string | string[]) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      },

    }
  },

  plugins: [
    react() as any,
    VitePluginReactInspectorSimple() as any,
    autoNotFoundRoutePlugin(config.viteBasePath),
    vitePluginExternal({
      interop: 'auto',
      externals
    }) as any,
    // 动态 base 路径插件，通过全局变量 window.PUBLIC_PATH 动态设置 base 路径
    dynamicBase({
      publicPath: 'window.__dynamic_base__',
      transformIndexHtml: false
    }) as any,
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // 仅压缩大于 10KB 的文件
      deleteOriginFile: false, // 是否删除原始文件
    }) as any,
    createHtmlPlugin({
      inject: {
        data: {
          PROJECT_ID: process.env.PROJECT_ID || 'PROJ_47bdb6f4',
          SIGNATURE: generateReservedCode1(),
        }
      }
    }),
  ],

  esbuild: {
    pure: ['console.log'],
    target: 'es2020',
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  }
}))