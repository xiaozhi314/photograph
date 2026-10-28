# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# AigCode Demo

## Development Scripts

### Linting
- `npm run lint` - 标准 lint 检查（带缓存，基于默认配置）
- `npm run lint:fix` - 标准 lint 修复（带缓存，基于默认配置）
- `npm run lint:check <file>` - **单文件精准检查**（对齐 Cursor 的语法和导入检测）

#### 单文件精准检查 `lint:check`
这个配置专门设计来**对齐 Cursor 的语法和导入检测行为**：

```bash
# 检查单个文件
npm run lint:check src/main.tsx
npm run lint:check src/components/Button.tsx

# 检查多个文件
npm run lint:check src/**/*.tsx
```

#### 错误级别设计

**🚨 ERROR 级别 (会导致 build/运行失败)**
- 模块导入错误：`import 'non-existent-module'`
- 未定义变量：`someUndefinedVariable`  
- 严重语法错误：`@ts-ignore` 误用等

**🟡 WARN 级别 (代码质量问题，不影响功能)**
- 未使用变量、Hook 规则、代码风格、性能建议等
- 未定义组件：`<UndefinedComponent />` (降级为警告避免重复)

#### ⚠️ 配置限制和补充方案

**ESLint 无法检测的错误类型**（需要 TypeScript 编译器）：
```typescript
// ❌ 这种类型错误 ESLint 检测不到，需要 tsc
console.war23n("typo")  // 属性不存在
const x: string = 123   // 类型分配错误
function fn(a: number) {}; fn("text")  // 参数类型错误
```

**推荐的完整检查流程**：
```bash
# 1. 快速语法和导入检查（1-2秒）
npm run lint:check src/MyComponent.tsx

# 2. 类型检查（如需要，3-5秒）
npx tsc --noEmit src/MyComponent.tsx

# 3. 提交前完整检查
npm run lint:fix && npx tsc --noEmit
```

#### 特点
- ✅ **快速反馈**：~1.5秒，比标准 lint 快 2 倍
- ✅ **专注实用**：避免被无关紧要的错误干扰开发
- ✅ **智能分级**：区分致命错误 vs 代码质量问题
- ⚠️ **有边界**：类型安全依然需要 TypeScript 编译器

#### 使用场景对比

| 场景 | 推荐命令 | 检查内容 | 耗时 |
|------|----------|----------|------|
| **开发时快速检查** | `npm run lint:check` | 语法、导入、基础规则 | ~1.5秒 |
| **类型安全检查** | `npx tsc --noEmit` | 完整类型检查 | ~3-5秒 |
| **保存时自动检查** | `npm run lint:check` | 专注严重错误，不被警告干扰 | ~1.5秒 |
| **提交前检查** | `npm run lint:fix` + `tsc --noEmit` | 完整的代码质量+类型安全 | ~5-8秒 |
| **CI/CD 流水线** | `npm run lint:fix` + `tsc --noEmit` | 最严格的检查 | ~5-8秒 |

#### 配置文件
- `eslint.lint.config.mjs` - 快速检查配置（语法+导入+基础规则）
- `eslint.config.mjs` - 原始标准配置（完整类型检查）
- TypeScript 编译器 - 类型安全的最终保障

#### 最佳实践
1. **开发时**：用 `lint:check` 获得快速反馈
2. **IDE 配置**：Cursor/VSCode 会提供实时类型检查
3. **提交前**：组合使用 ESLint + tsc 确保完整质量
4. **不要过度依赖**：记住这是快速检查，不是类型安全的替代
