import { defineConfig, mergeRsbuildConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';
import CompressionPlugin from './src/default/CompressionPlugin';
// 不要动这段，404兼容用的
import autoNotFoundRoutePlugin from './src/default/rsbuild-plugin-generate-route-layout';
// 前端定位插件
import VitePluginReactInspectorSimple from './src/default/rsbuild-plugin-react-inspector-simple'
// 手动编辑标记
import apiDataMarkerPlugin from './src/default/rsbuild-plugin-api-data-marker';

const externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  '@ant-design/charts': 'Charts',
  'antd': 'antd',
  'lodash': '_',
};

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

  return { basePath, outputDir, projectId, viteBasePath };
};

// 生成智能标识生成。根据将选取的数据采用GB 1988给 出的编码规则，生成唯一标识。
// ContentProducer = AutoCoder.cc AIGCode的AI大模型生成 
// Label = 1
// ProduceID =  process.env.PROJECT_ID || 'PROJ_5c806e0f';
// 根据上述生成ReservedCode1
function generateReservedCode() {
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

// 开发配置
const baseConfig = {
  plugins: [
    pluginReact() as any,
    apiDataMarkerPlugin(),

  ],
  tools: {
    postcss: {
      plugins: [
        require('@tailwindcss/postcss'), // TailwindCSS v4
        require('autoprefixer'),
      ],
    },
    cssLoader: {
      // 仅对 /api/...（或你指定的模式）禁用模块解析
      url: {
        filter: (url: string /*, resourcePath?: string */) => {
          console.log('url', url);
          // 返回 true 表示交给 css-loader 解析，false 表示忽略并原样输出
          if (url.startsWith('/api/')) return false;        // 忽略 /api/...
          if (url.startsWith('http://') || url.startsWith('https://')) return false; // 可选：忽略外链
          return true; // 其他静态资源仍按正常流程打包（如 /fonts/**, /images/**）
        },
      },
    }
  },
  html: {
    template: './index.html',
    templateParameters: {
      PROJECT_ID: process.env.PROJECT_ID,
      SIGNATURE: generateReservedCode(),
    }
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  resolve: {
    alias: {
      "@repo/shadcn-ui/lib/utils": path.resolve(__dirname, "./src/lib/utils"),
      "@repo/shadcn-ui/components/ui": path.resolve(__dirname, "./src/components/ui"),
      "@repo": path.resolve(__dirname, "./src/components/ui/shadcn-io"),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@/server/*': path.resolve(__dirname, './server/*'),
      '@': path.resolve(__dirname, './src'),
      '@/*': path.resolve(__dirname, './src/*'),
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
      },
      // TODO 正式记得去掉
      '/api/project_pz/getimage': {
        target: 'REDACTED_INTERNAL_URL_3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/project_pz\/getimage/, '/api/project_pz/getimage'),
        secure: true
      }
    }
  },
  output: {
    cleanDistPath: true,
    distPath: {
      root: config.outputDir
    },
    legalComments: 'none',
    disableNodePolyfill: true,
    sourceMap: false,
    externals
    // 根据环境设置 publicPath
  } as any,

  performance: {
    buildCache: false,
    chunkSplit: {
      strategy: 'single-vendor',
    },
    printFileSize:false,
  },
}

// 打包配置
const buildConfig = mergeRsbuildConfig(baseConfig, {
  plugins: [
    CompressionPlugin,
    autoNotFoundRoutePlugin(config.basePath),
    VitePluginReactInspectorSimple(),
    pluginReact(),
    apiDataMarkerPlugin(),
  ],
  
 
  performance:{
    removeConsole:true,
    printFileSize:false
  },
  tools: {
    plugins: [
      require('tailwindcss'), // TailwindCSS
      require('autoprefixer'),
    ],
    rspack: {
      output: {
        publicPath: '/__dynamic_base__/'
      }
    },
    cssLoader: {
      // 仅对 /api/...（或你指定的模式）禁用模块解析
      url: {
        filter: (url: string /*, resourcePath?: string */) => {
          console.log('url', url);
          // 返回 true 表示交给 css-loader 解析，false 表示忽略并原样输出
          if (url.startsWith('/api/')) return false;        // 忽略 /api/...
          if (url.startsWith('http://') || url.startsWith('https://')) return false; // 可选：忽略外链
          return true; // 其他静态资源仍按正常流程打包（如 /fonts/**, /images/**）
        },
      },
    }


  }
} as any)

export default defineConfig((process.env.NODE_ENV==='development') ? baseConfig : buildConfig);