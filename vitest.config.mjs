import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 从目录结构提取 project_id（.../PROJ_xxx/aigcode-demo/）
const _parentDir = path.basename(path.dirname(__dirname));
const _projectId = _parentDir.startsWith('PROJ_') ? _parentDir : '';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    // Use absolute path to avoid cwd issues when running from repo root or scripts
    setupFiles: [path.resolve(__dirname, './tests/setupTests.ts')],
    testTimeout: 5000,
    exclude: ['**/checkpoint/**', '**/node_modules/**'],
    alias: {
      // rpc-generated 优先：让 vitest 里 import action 走 rpc 代理，确保 pipeline test 数据库隔离生效
      '@/frontend/actions': path.resolve(__dirname, './lib/rpc-generated/src/frontend/actions'),
      '@/backend/actions': path.resolve(__dirname, './lib/rpc-generated/src/backend/actions'),
      '@/app/actions': path.resolve(__dirname, './lib/rpc-generated/src/app/actions'),
      '@/frontend/action_utils': path.resolve(__dirname, './lib/rpc-generated/src/frontend/action_utils'),
      '@/backend/action_utils': path.resolve(__dirname, './lib/rpc-generated/src/backend/action_utils'),
      '@/app/action_utils': path.resolve(__dirname, './lib/rpc-generated/src/app/action_utils'),
      '@/thirdparty': path.resolve(__dirname, './server/thirdparty'),
      '@': path.resolve(__dirname, './src'),
    },
    // 注入 NEXT_PUBLIC_PROJECT_ID，让 rpc-client 在 vitest 环境下能找到正确的项目
    env: {
      ...(_projectId ? { NEXT_PUBLIC_PROJECT_ID: _projectId } : {}),
      // Linux 容器环境用 k8s service 地址，macOS 本地用 localhost（不设置则走默认）
      ...(os.platform() === 'linux'
        ? { VITEST_RPC_HOST: 'http://multiple-prisma-runtime:3100' }
        : { VITEST_RPC_HOST: 'http://localhost:3100' }),
    },
  },
});
