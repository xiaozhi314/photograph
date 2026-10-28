// transform-add-bindings.js
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');
const fs = require('fs');
const path = require('path');

// ==========================================
// Phase 1: 提取内联数组 & 标准化 index
// ==========================================

const extractArrayVisitor = {
  CallExpression(path) {
    const { node, scope } = path;
    const callee = node.callee;

    // 1. 检查是否是 .map 调用
    if (!t.isMemberExpression(callee) || 
        !t.isIdentifier(callee.property, { name: 'map' })) {
      return;
    }

    const callback = node.arguments[0];
    if (!callback || !t.isArrowFunctionExpression(callback)) return;

    // 2. 统一 index 参数名
    handleIndexParameter(path, callback);

    // 3. 提取内联数组
    if (t.isArrayExpression(callee.object)) {
      extractInlineArrayToVar(path, callee);
    }
  }
};

/**
 * 使用 Babel Scope API 优雅处理参数重命名
 * 对于嵌套 map，使用带层级后缀的 index 名称避免冲突
 */
function handleIndexParameter(path, callback) {
  const callbackPath = path.get('arguments.0');
  const scope = callbackPath.scope;
  
  // 计算嵌套层级，生成唯一的 index 名称
  const nestingLevel = getMapNestingLevel(path);
  const targetName = nestingLevel === 0 ? 'index' : `index${nestingLevel}`;

  // 情况 A: 已经有 >= 2 个参数 (需要重命名)
  if (callback.params.length >= 2) {
    const indexParam = callback.params[1];
    
    if (!t.isIdentifier(indexParam) || indexParam.name === targetName) {
        return; // 已经是目标名称或不是标识符，跳过
    }

    const oldName = indexParam.name;
    
    // 1. 检查目标名称是否已被内部绑定占据
    if (scope.hasBinding(targetName)) {
        const binding = scope.getBinding(targetName);
        if (binding && binding.scope === scope) {
            scope.rename(targetName, scope.generateUid(targetName));
        }
    }
    
    // 2. 执行参数重命名
    scope.rename(oldName, targetName);
  } 
  
  // 情况 B: 只有一个参数 (添加 index)
  else if (callback.params.length === 1) {
    if (scope.hasBinding(targetName)) {
      scope.rename(targetName, scope.generateUid(targetName));
    }
    callback.params.push(t.identifier(targetName));
  }
}

/**
 * 获取当前 map 调用的嵌套层级 (0 = 顶层)
 */
function getMapNestingLevel(path) {
  let level = 0;
  let current = path.parentPath;
  
  while (current) {
    if (current.isArrowFunctionExpression() || current.isFunctionExpression()) {
      const callExpr = current.parentPath;
      if (callExpr && callExpr.isCallExpression()) {
        const callee = callExpr.node.callee;
        if (t.isMemberExpression(callee) && 
            t.isIdentifier(callee.property, { name: 'map' })) {
          level++;
        }
      }
    }
    current = current.parentPath;
  }
  
  return level;
}

/**
 * 递归遍历 AST 节点，收集所有标识符
 */
function collectIdentifiers(node, identifiers = new Set()) {
  if (!node) return identifiers;

  if (t.isIdentifier(node)) {
    identifiers.add(node.name);
    return identifiers;
  }

  // 跳过对象属性的 key（我们只关心值中的标识符）
  if (t.isObjectProperty(node)) {
    collectIdentifiers(node.value, identifiers);
    return identifiers;
  }

  // 递归遍历所有子节点
  for (const key in node) {
    if (key === 'parent' || key === 'leadingComments' || key === 'trailingComments') {
      continue;
    }
    const child = node[key];
    if (Array.isArray(child)) {
      child.forEach(item => collectIdentifiers(item, identifiers));
    } else if (child && typeof child === 'object' && child.type) {
      collectIdentifiers(child, identifiers);
    }
  }

  return identifiers;
}

/**
 * 检查数组表达式是否包含外部变量引用
 * 如果数组中的元素引用了当前作用域外部定义的变量，则不应该提取
 */
function hasExternalVariableReferences(arrayExpr, scope) {
  if (!t.isArrayExpression(arrayExpr) || !arrayExpr.elements) {
    return false;
  }

  // 收集数组表达式中的所有标识符
  const identifiers = collectIdentifiers(arrayExpr);

  // 检查每个标识符是否引用了外部变量
  for (const identifierName of identifiers) {
    // 跳过一些常见的全局对象和内置类型（这些可以安全提取）
    const safeGlobals = ['Array', 'Object', 'String', 'Number', 'Boolean', 'Date', 'Math', 'console', 'window', 'document', 'undefined', 'null', 'true', 'false'];
    if (safeGlobals.includes(identifierName)) {
      continue;
    }

    // 检查这个标识符是否在当前作用域中定义
    // getBinding 会向上查找所有父作用域，所以如果返回 null，说明没有定义
    const binding = scope.getBinding(identifierName);
    
    // 如果没有绑定，可能是外部变量或未定义的变量，为了安全起见，不提取
    if (!binding) {
      return true;
    }

    // 如果找到了绑定，检查它是否定义在当前作用域或其子作用域中
    // 如果 binding.scope 是当前作用域的父级，说明变量定义在外部作用域
    let bindingScope = binding.scope;
    let currentScope = scope;
    
    // 检查 bindingScope 是否是 currentScope 的父级
    // 如果是，说明变量定义在外部作用域，不应该提取
    let isParentScope = false;
    let checkScope = currentScope.parent;
    while (checkScope) {
      if (checkScope === bindingScope) {
        isParentScope = true;
        break;
      }
      checkScope = checkScope.parent;
    }
    
    // 如果绑定在父级作用域中，说明是外部变量
    if (isParentScope) {
      return true;
    }
  }

  return false;
}

/**
 * 提取数组到变量
 * 只提取直接用于 .map() 的内联数组，忽略其他上下文中的数组
 */
function extractInlineArrayToVar(path, callee) {
  const arrayExpr = callee.object;
  
  // ⚠️ 关键检查：确保这个数组表达式不是在 spread 语法中
  // 例如 {...Array(n)} 或 [...Array(n)]
  const parent = path.parent;
  
  // 如果父节点是 SpreadElement，说明这是 spread 语法，不提取
  if (t.isSpreadElement(parent)) {
    return;
  }
  
  // 如果数组为空或只有一个元素，可能不值得提取
  if (arrayExpr.elements && arrayExpr.elements.length <= 1) {
    return;
  }
  
  // ⚠️ 关键检查：如果数组包含外部变量引用，不进行提取
  // 例如数组元素中使用了外部作用域的变量（如 data.kpi.totalRevenue）
  if (hasExternalVariableReferences(arrayExpr, path.scope)) {
    return;
  }
  
  const varName = path.scope.generateUid(guessVariableName(arrayExpr));
  
  const varDeclaration = t.variableDeclaration('const', [
    t.variableDeclarator(t.identifier(varName), arrayExpr)
  ]);

  const statementPath = path.getStatementParent();

  if (statementPath) {
    
    varDeclaration.leadingComments = [{ 
        type: 'CommentBlock', 
        value: ` Extracted array: ${varName} `,
    }];

    statementPath.insertBefore(varDeclaration);
    callee.object = t.identifier(varName);
  }
}


// ==========================================
// Phase 2: 添加 Data Bindings (支持嵌套 map 复合索引)
// ==========================================

// 使用 WeakMap 存储遍历过程中的上下文
const mapContexts = new WeakMap();

const addBindingsVisitor = {
  CallExpression: {
    enter(path) {
      const { node } = path;
      const callee = node.callee;

      if (t.isMemberExpression(callee) && 
          t.isIdentifier(callee.property, { name: 'map' })) {
        
        const arrayName = getArrayName(callee.object);
        const callback = node.arguments[0];

        // ⚠️ 跳过从 state 中取到的数据
        if (arrayName && isStateData(arrayName)) {
          return;
        }

        if (callback && t.isArrowFunctionExpression(callback)) {
          const itemParam = callback.params[0]?.name;
          const indexParam = callback.params[1]?.name || 'index';

          if (itemParam) {
            // 收集所有父级 map 的上下文，用于生成复合索引
            const parentContexts = collectParentMapContexts(path);
            
            mapContexts.set(callback, {
              arrayName: arrayName || 'list',
              itemParam,
              indexParam,
              dynamicComponents: new Map(),
              parentContexts // 父级 map 上下文链
            });
          }
        }
      }
    }
  },
  
  // 处理组件变量别名: const Icon = feature.icon
  VariableDeclarator(path) {
    const fnParent = findNearestMapCallback(path);
    if (!fnParent) return;
    
    const context = mapContexts.get(fnParent.node);
    if (!context) return;

    const { id, init } = path.node;
    if (t.isIdentifier(id) && t.isMemberExpression(init)) {
      const root = getMemberExpressionRoot(init);
      if (root === context.itemParam) {
        context.dynamicComponents.set(id.name, getMemberExpressionPath(init));
      }
    }
  },

  // 处理 JSX 元素
  JSXElement(path) {
    const fnParent = findNearestMapCallback(path);
    if (!fnParent) return;
    
    const context = mapContexts.get(fnParent.node);
    if (!context) return;

    const openingElement = path.node.openingElement;
    
    if (hasAttribute(openingElement, 'data-api-bind-info')) return;

    let fieldPath = null;

    // 1. <Icon /> (动态组件)
    if (t.isJSXIdentifier(openingElement.name)) {
      const name = openingElement.name.name;
      if (context.dynamicComponents.has(name)) {
        fieldPath = context.dynamicComponents.get(name);
      }
    }
    
    // 2. <item.icon /> (Member Expression)
    if (t.isJSXMemberExpression(openingElement.name)) {
      const memberInfo = parseJSXMemberExpression(openingElement.name, context);
      if (memberInfo) fieldPath = memberInfo.fieldPath;
    }

    if (fieldPath) {
      addAttributes(openingElement, context, fieldPath);
    }
  },

  // 处理 JSX 表达式容器 {item.title} 或 {itemParam}
  JSXExpressionContainer(path) {
    if (path.parentPath.isJSXAttribute()) return;

    const fnParent = findNearestMapCallback(path);
    if (!fnParent) return;

    const context = mapContexts.get(fnParent.node);
    if (!context) return;

    const expression = path.node.expression;
    
    // 情况 1: MemberExpression - {item.title}
    if (t.isMemberExpression(expression)) {
      const root = getMemberExpressionRoot(expression);
      if (root === context.itemParam) {
        const fieldPath = getMemberExpressionPath(expression);
        
        const jsxElementPath = path.findParent(p => p.isJSXElement());
        if (jsxElementPath) {
          const openingElement = jsxElementPath.node.openingElement;
          if (!hasAttribute(openingElement, 'data-api-bind-info') && fieldPath) {
            addAttributes(openingElement, context, fieldPath);
          }
        }
      }
    }
    
    // 情况 2: Identifier - {groupName} (直接使用 map 的 item 参数)
    else if (t.isIdentifier(expression) && expression.name === context.itemParam) {
      const jsxElementPath = path.findParent(p => p.isJSXElement());
      if (jsxElementPath) {
        const openingElement = jsxElementPath.node.openingElement;
        if (!hasAttribute(openingElement, 'data-api-bind-info')) {
          addAttributes(openingElement, context, '$item');
        }
      }
    }
  }
};

// ==========================================
// 辅助函数 (Utils)
// ==========================================

/**
 * 检查数组名是否来自 state
 */
function isStateData(arrayName) {
  if (!arrayName) return false;
  return arrayName.startsWith('state.') || arrayName === 'state';
}

/**
 * 收集所有父级 map 的上下文信息，用于生成复合索引
 */
function collectParentMapContexts(path) {
  const contexts = [];
  let current = path.parentPath;
  
  while (current) {
    if (current.isArrowFunctionExpression() || current.isFunctionExpression()) {
      const callExpr = current.parentPath;
      if (callExpr && callExpr.isCallExpression()) {
        const callee = callExpr.node.callee;
        if (t.isMemberExpression(callee) && 
            t.isIdentifier(callee.property, { name: 'map' })) {
          // 找到父级 map
          const parentCallback = callExpr.node.arguments[0];
          if (parentCallback && mapContexts.has(parentCallback)) {
            contexts.unshift(mapContexts.get(parentCallback));
          }
        }
      }
    }
    current = current.parentPath;
  }
  
  return contexts;
}

/**
 * 找到最近的、已注册 context 的 .map() 回调函数
 */
function findNearestMapCallback(path) {
  let current = path.parentPath;
  
  while (current) {
    if (current.isArrowFunctionExpression() || current.isFunctionExpression()) {
      if (mapContexts.has(current.node)) {
        return current;
      }
    }
    current = current.parentPath;
  }
  
  return null;
}

function guessVariableName(arrayExpr) {
  if (t.isArrayExpression(arrayExpr) && arrayExpr.elements.length > 0) {
    const first = arrayExpr.elements[0];
    if (t.isObjectExpression(first)) {
      const priority = ['title', 'name', 'label', 'text', 'desc', 'icon'];
      for (const field of priority) {
        for (const prop of first.properties) {
          if (t.isObjectProperty(prop) && t.isIdentifier(prop.key) && prop.key.name === field) {
             // 简单的复数化逻辑，实际项目中可以使用 'pluralize' 库
            return field.endsWith('s') ? field : field + 's';
          }
        }
      }
    }
  }
  return 'items';
}

function getArrayName(node) {
  if (t.isIdentifier(node)) return node.name;
  if (t.isMemberExpression(node)) {
    const obj = getArrayName(node.object);
    const prop = node.property.name || node.property.value;
    return obj ? `${obj}.${prop}` : null;
  }
  // 处理链式调用如 MENU_ITEMS.filter(...).map(...)
  if (t.isCallExpression(node)) {
    if (t.isMemberExpression(node.callee)) {
      return getArrayName(node.callee.object);
    }
  }
  return null;
}

function getMemberExpressionRoot(node) {
  if (t.isIdentifier(node)) return node.name;
  if (t.isMemberExpression(node)) return getMemberExpressionRoot(node.object);
  return null;
}

function getMemberExpressionPath(node) {
  if (t.isIdentifier(node)) return '';
  if (t.isMemberExpression(node)) {
    const parent = getMemberExpressionPath(node.object);
    const prop = node.property.name || node.property.value;
    return parent ? `${parent}.${prop}` : prop;
  }
  return '';
}

function parseJSXMemberExpression(expr, context) {
  let root = expr;
  while (t.isJSXMemberExpression(root.object)) root = root.object;
  
  if (t.isJSXIdentifier(root.object) && root.object.name === context.itemParam) {
    const parts = [];
    let current = expr;
    while(t.isJSXMemberExpression(current)) {
      parts.unshift(current.property.name);
      current = current.object;
    }
    return { fieldPath: parts.join('.') };
  }
  return null;
}

function hasAttribute(openingElement, attrName) {
  return openingElement.attributes.some(attr => 
    t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name, { name: attrName })
  );
}

/**
 * 添加绑定属性，支持复合索引
 * 生成格式: parentArray-${parentIndex}-currentArray-${currentIndex}-fieldPath
 */
function addAttributes(openingElement, context, fieldPath) {
  const { parentContexts = [], arrayName, indexParam, itemParam } = context;
  
  // 构建复合索引的模板字符串
  // quasis 数量必须比 expressions 多 1
  const quasis = [];
  const expressions = [];
  
  // 添加父级上下文的索引
  for (const parentCtx of parentContexts) {
    quasis.push(t.templateElement({ raw: `${parentCtx.arrayName}-`, cooked: `${parentCtx.arrayName}-` }));
    expressions.push(t.identifier(parentCtx.indexParam));
  }
  
  // 添加当前层级的前缀
  const currentPrefix = parentContexts.length > 0 ? `-${arrayName}-` : `${arrayName}-`;
  quasis.push(t.templateElement({ raw: currentPrefix, cooked: currentPrefix }));
  expressions.push(t.identifier(indexParam));
  
  // 添加最后的 fieldPath (tail)
  quasis.push(t.templateElement({ raw: `-${fieldPath}`, cooked: `-${fieldPath}` }, true));

  const bindingTemplate = t.templateLiteral(quasis, expressions);

  openingElement.attributes.push(
    t.jsxAttribute(t.jsxIdentifier('data-api-bind-info'), t.jsxExpressionContainer(bindingTemplate)),
    t.jsxAttribute(t.jsxIdentifier('data-api-map-var-name'), t.stringLiteral(itemParam))
  );
}

// ==========================================
// 核心处理流程
// ==========================================

function processCode(code, filePath) {
  try {
    const ast = parser.parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript', 'classProperties']
    });

    // Phase 1: 结构变换 (Extract Arrays, Fix Index)
    traverse(ast, extractArrayVisitor);
    
    // Phase 2: 属性注入 (Data Bindings)
    // 必须分开两次 traverse (或使用 pass)，因为 Phase 2 依赖 Phase 1 生成的变量名
    traverse(ast, addBindingsVisitor);

    // 优化格式化配置
    const output = generate(ast, {
      retainLines: false, // 改为 false,让 Babel 自动格式化
      compact: false,
      comments: true,
      concise: false,
      jsescOption: {
        quotes: 'single',
        minimal: true
      }
    }, code);

    return output.code;
  } catch (error) {
    console.error(`Error parsing/generating ${filePath}:`, error);
    throw error;
  }
}

// ==========================================
// File System & CLI
// ==========================================

function processPath(targetPath, recursive = true) {
  if (!fs.existsSync(targetPath)) {
    console.warn(`Path not found, skipping: ${targetPath}`);
    return { processed: 0, failed: 0 };
  }
  
  const stat = fs.statSync(targetPath);
  
  // 处理单个文件
  if (stat.isFile()) {
    if (!/\.(tsx?|jsx?)$/.test(targetPath)) return { processed: 0, failed: 0 };
    try {
      const code = fs.readFileSync(targetPath, 'utf-8');
      const newCode = processCode(code, targetPath);
      // 只在内容变化时写入
      if (newCode !== code) {
        fs.writeFileSync(targetPath, newCode, 'utf-8');
        console.log(`✓ Modified: ${targetPath}`);
      }
      return { processed: 1, failed: 0 };
    } catch (e) {
      console.error(`✗ Failed: ${targetPath}`);
      return { processed: 0, failed: 1 };
    }
  }

  // 处理目录
  if (stat.isDirectory()) {
    let results = { processed: 0, failed: 0 };
    const files = fs.readdirSync(targetPath);
    
    files.forEach(file => {
      const fullPath = path.join(targetPath, file);
      if (recursive || fs.statSync(fullPath).isFile()) {
        const subResult = processPath(fullPath, recursive);
        results.processed += subResult.processed;
        results.failed += subResult.failed;
      }
    });
    return results;
  }
  
  return { processed: 0, failed: 0 };
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('Usage: node transform.js <file_or_dir>...');
    return;
  }

  const paths = args.flatMap(a => a.split(','))
                    .map(s => s.trim())
                    .filter(Boolean);

  let total = { processed: 0, failed: 0 };

  paths.forEach(p => {
    const full = path.isAbsolute(p) ? p : path.resolve(process.cwd(), p);
    if (!fs.existsSync(full)) {
      console.error(`Not found: ${full}`);
      total.failed++;
      return;
    }
    const result = walkAndProcess(full);
    total.processed += result.processed;
    total.failed += result.failed;
  });

  console.log(`\nDone. Processed: ${total.processed}, Failed: ${total.failed}`);
  if (total.failed > 0) process.exitCode = 1;
}

/**
 * 深度遍历（跳过 ui/）并调用 processPath
 */
function walkAndProcess(start) {
  let total = { processed: 0, failed: 0 };
  const stack = [start];

  while (stack.length) {
    const cur = stack.pop();
    const name = path.basename(cur);

    // 跳过 ui 文件夹
    if (name === 'ui') continue;

    let stat;
    try {
      stat = fs.statSync(cur);
    } catch (e) {
      console.error(`Cannot stat: ${cur}`);
      total.failed++;
      continue;
    }

    // 调用 processPath
    try {
      const res = processPath(cur);
      total.processed += res?.processed || 0;
      total.failed += res?.failed || 0;
    } catch (err) {
      console.error(`processPath failed: ${cur}`);
      total.failed++;
    }

    // 如果是目录，继续遍历子项
    if (stat.isDirectory()) {
      try {
        const items = fs.readdirSync(cur);
        for (const item of items) {
          stack.push(path.join(cur, item));
        }
      } catch (e) {
        console.error(`Cannot read dir: ${cur}`);
        total.failed++;
      }
    }
  }

  return total;
}

main();
