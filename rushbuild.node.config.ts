import { defineConfig } from '@rsbuild/core';
import path from 'path';

export default defineConfig({
    mode: 'production',
    source: {
        entry: {
            index: './server/index.ts',  // 你的入口文件
        },
    },
    output: {
        cleanDistPath: true,
        distPath: {
            root: path.resolve(__dirname, '../../Runtime/backend/modules/'),
        },
        filename: {
            js: 'PROJ_47bdb6f4.bundle.js',
        },
        legalComments: 'none',
        sourceMap: false,
        target: 'node',    // 目标环境为 Node.js
    },
    performance: {
        printFileSize:false,
      },
    tools: {
        bundlerChain: (chain) => {
            chain.output.libraryTarget('commonjs2');
        },
    },
});