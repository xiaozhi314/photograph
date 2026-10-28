#!/usr/bin/env node

/**
 * JSX/TypeScript AST 解析和修改工具
 * 
 * 使用 @babel/parser 和 @babel/traverse 来准确解析和修改 JSX 代码
 * 
 * 安装依赖:
 * npm install @babel/parser @babel/traverse @babel/generator @babel/types
 */

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');
const fs = require('fs');

/**
 * 查找变量定义并返回其位置和内容
 */
function findVariableDefinition(code, variableName) {
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });

  let result = null;

  traverse(ast, {
    VariableDeclarator(path) {
      if (path.node.id.name === variableName) {
        const init = path.node.init;
        if (init) {
          result = {
            variableName: variableName,
            start: init.start,
            end: init.end,
            content: code.substring(init.start, init.end),
            type: init.type,
            node: init
          };
          path.stop();
        }
      }
    }
  });

  return result;
}

/**
 * 从数组表达式中提取指定索引的元素
 */
function getArrayItemByIndex(arrayNode, targetIndex) {
  if (!t.isArrayExpression(arrayNode)) {
    return null;
  }

  if (targetIndex < 0 || targetIndex >= arrayNode.elements.length) {
    return null;
  }

  return arrayNode.elements[targetIndex];
}

/**
 * 从对象表达式中查找字段值
 * 支持嵌套字段，如 ['user', 'name']
 */
function getObjectFieldValue(objectNode, fieldPath) {
  if (!t.isObjectExpression(objectNode)) {
    return null;
  }

  let currentNode = objectNode;

  for (let i = 0; i < fieldPath.length; i++) {
    const fieldName = fieldPath[i];
    let found = false;

    for (const prop of currentNode.properties) {
      if (t.isObjectProperty(prop)) {
        const key = prop.key;
        const keyName = t.isIdentifier(key) ? key.name : 
                       t.isStringLiteral(key) ? key.value : null;

        if (keyName === fieldName) {
          if (i === fieldPath.length - 1) {
            // 最后一层，返回值
            return prop.value;
          } else {
            // 还有嵌套，继续往下找
            if (t.isObjectExpression(prop.value)) {
              currentNode = prop.value;
              found = true;
              break;
            } else {
              return null; // 字段存在但不是对象
            }
          }
        }
      }
    }

    if (!found && i < fieldPath.length - 1) {
      return null; // 中间路径找不到
    }
  }

  return null;
}

/**
 * 更新对象字段的值
 */
function updateObjectField(objectNode, fieldPath, newValue, quoteValue = false) {
  if (!t.isObjectExpression(objectNode)) {
    return false;
  }

  let currentNode = objectNode;
  let parentNode = null;
  let targetProp = null;

  // 遍历字段路径
  for (let i = 0; i < fieldPath.length; i++) {
    const fieldName = fieldPath[i];
    let found = false;

    for (const prop of currentNode.properties) {
      if (t.isObjectProperty(prop)) {
        const key = prop.key;
        const keyName = t.isIdentifier(key) ? key.name : 
                       t.isStringLiteral(key) ? key.value : null;

        if (keyName === fieldName) {
          if (i === fieldPath.length - 1) {
            // 找到目标字段
            targetProp = prop;
            found = true;
            break;
          } else {
            // 继续往下找
            if (t.isObjectExpression(prop.value)) {
              parentNode = currentNode;
              currentNode = prop.value;
              found = true;
              break;
            } else {
              return false;
            }
          }
        }
      }
    }

    if (!found) {
      return false;
    }
  }

  if (!targetProp) {
    return false;
  }

  // 更新值
  if (quoteValue) {
    targetProp.value = t.stringLiteral(newValue);
  } else {
    // 尝试解析为表达式
    try {
      const valueAst = parser.parseExpression(newValue);
      targetProp.value = valueAst;
    } catch (e) {
      // 解析失败，当作字符串
      targetProp.value = t.stringLiteral(newValue);
    }
  }

  return true;
}

/**
 * 在对象中添加或更新字段
 */
function addOrUpdateObjectField(objectNode, fieldName, fieldValue, quoteValue = false) {
  if (!t.isObjectExpression(objectNode)) {
    return false;
  }

  // 查找是否已存在该字段
  let existingProp = null;
  for (const prop of objectNode.properties) {
    if (t.isObjectProperty(prop)) {
      const key = prop.key;
      const keyName = t.isIdentifier(key) ? key.name : 
                     t.isStringLiteral(key) ? key.value : null;
      if (keyName === fieldName) {
        existingProp = prop;
        break;
      }
    }
  }

  // 创建新值
  let valueNode;
  if (quoteValue) {
    valueNode = t.stringLiteral(fieldValue);
  } else {
    try {
      valueNode = parser.parseExpression(fieldValue);
    } catch (e) {
      valueNode = t.stringLiteral(fieldValue);
    }
  }

  if (existingProp) {
    // 更新现有字段
    existingProp.value = valueNode;
  } else {
    // 添加新字段（在第一个属性后面）
    const newProp = t.objectProperty(
      t.identifier(fieldName),
      valueNode
    );
    
    if (objectNode.properties.length > 0) {
      objectNode.properties.splice(1, 0, newProp);
    } else {
      objectNode.properties.push(newProp);
    }
  }

  return true;
}

/**
 * 主要的更新函数
 * 
 * @param {string} code - 源代码
 * @param {string} variableName - 变量名
 * @param {number} arrayIndex - 数组索引
 * @param {string[]} fieldPath - 字段路径，如果是 ['$item'] 则直接修改数组元素本身
 * @param {string} newValue - 新值
 * @param {boolean} quoteValue - 是否给值加引号
 * @param {string} operation - 操作类型: 'update' 或 'add_field'
 * @param {string} newFieldName - 新字段名（用于 add_field 操作）
 * @returns {object} 结果对象
 */
function updateArrayItemField(code, variableName, arrayIndex, fieldPath, newValue, quoteValue = false, operation = 'update', newFieldName = null) {
  try {
    const ast = parser.parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript']
    });

    let updated = false;
    
    // 检查是否是 $item 模式（直接修改数组元素本身）
    const isDirectItemUpdate = fieldPath.length === 1 && fieldPath[0] === '$item';

    traverse(ast, {
      VariableDeclarator(path) {
        if (path.node.id.name === variableName) {
          const init = path.node.init;
          
          if (!t.isArrayExpression(init)) {
            return;
          }

          // 检查索引是否有效
          if (arrayIndex < 0 || arrayIndex >= init.elements.length) {
            return;
          }

          // $item 模式：直接替换数组元素
          if (isDirectItemUpdate && operation === 'update') {
            let valueNode;
            if (quoteValue) {
              valueNode = t.stringLiteral(newValue);
            } else {
              try {
                valueNode = parser.parseExpression(newValue);
              } catch (e) {
                valueNode = t.stringLiteral(newValue);
              }
            }
            init.elements[arrayIndex] = valueNode;
            updated = true;
            path.stop();
            return;
          }

          // 获取目标数组元素
          const targetItem = getArrayItemByIndex(init, arrayIndex);
          if (!targetItem || !t.isObjectExpression(targetItem)) {
            return;
          }

          // 执行操作
          if (operation === 'update') {
            // 更新字段值
            updated = updateObjectField(targetItem, fieldPath, newValue, quoteValue);
          } else if (operation === 'add_field') {
            // 添加或更新字段
            updated = addOrUpdateObjectField(targetItem, newFieldName, newValue, quoteValue);
          }

          if (updated) {
            path.stop();
          }
        }
      }
    });

    if (!updated) {
      return {
        success: false,
        error: 'Failed to update field',
        code: code
      };
    }

    // 生成新代码
    const output = generate(ast, {
      retainLines: true,
      compact: false,
      comments: true
    });

    return {
      success: true,
      code: output.code,
      error: null
    };

  } catch (error) {
    return {
      success: false,
      error: error.message,
      code: code
    };
  }
}

/**
 * 命令行接口
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error(JSON.stringify({
      success: false,
      error: 'Usage: node parse_jsx_ast.js <command> <args...>'
    }));
    process.exit(1);
  }

  const command = args[0];

  try {
    if (command === 'find_variable') {
      // node parse_jsx_ast.js find_variable <code> <variableName>
      const code = args[1];
      const variableName = args[2];
      const result = findVariableDefinition(code, variableName);
      console.log(JSON.stringify({ success: true, result }));

    } else if (command === 'update_field') {
      // node parse_jsx_ast.js update_field <code> <variableName> <arrayIndex> <fieldPath> <newValue> <quoteValue>
      const code = args[1];
      const variableName = args[2];
      const arrayIndex = parseInt(args[3]);
      const fieldPath = JSON.parse(args[4]); // ["field"] or ["user", "name"]
      const newValue = args[5];
      const quoteValue = args[6] === 'true';

      const result = updateArrayItemField(
        code,
        variableName,
        arrayIndex,
        fieldPath,
        newValue,
        quoteValue,
        'update'
      );
      console.log(JSON.stringify(result));

    } else if (command === 'add_field') {
      // node parse_jsx_ast.js add_field <code> <variableName> <arrayIndex> <fieldName> <fieldValue> <quoteValue>
      const code = args[1];
      const variableName = args[2];
      const arrayIndex = parseInt(args[3]);
      const fieldName = args[4];
      const fieldValue = args[5];
      const quoteValue = args[6] === 'true';

      const result = updateArrayItemField(
        code,
        variableName,
        arrayIndex,
        [],
        fieldValue,
        quoteValue,
        'add_field',
        fieldName
      );
      console.log(JSON.stringify(result));

    } else if (command === 'parse_from_file') {
      // node parse_jsx_ast.js parse_from_file <inputFile> <outputFile> <operation_json>
      const inputFile = args[1];
      const outputFile = args[2];
      const operation = JSON.parse(args[3]);

      const code = fs.readFileSync(inputFile, 'utf-8');
      
      let result;
      if (operation.command === 'update_field') {
        result = updateArrayItemField(
          code,
          operation.variableName,
          operation.arrayIndex,
          operation.fieldPath,
          operation.newValue,
          operation.quoteValue || false,
          'update'
        );
      } else if (operation.command === 'add_field') {
        result = updateArrayItemField(
          code,
          operation.variableName,
          operation.arrayIndex,
          [],
          operation.fieldValue,
          operation.quoteValue || false,
          'add_field',
          operation.fieldName
        );
      }

      if (result.success) {
        fs.writeFileSync(outputFile, result.code, 'utf-8');
        console.log(JSON.stringify({ success: true, message: 'File updated successfully' }));
      } else {
        console.log(JSON.stringify(result));
      }

    } else {
      console.error(JSON.stringify({
        success: false,
        error: `Unknown command: ${command}`
      }));
      process.exit(1);
    }

  } catch (error) {
    console.error(JSON.stringify({
      success: false,
      error: error.message,
      stack: error.stack
    }));
    process.exit(1);
  }
}

// 如果作为脚本运行
if (require.main === module) {
  main();
}

// 导出函数供其他模块使用
module.exports = {
  findVariableDefinition,
  getArrayItemByIndex,
  getObjectFieldValue,
  updateObjectField,
  addOrUpdateObjectField,
  updateArrayItemField
};