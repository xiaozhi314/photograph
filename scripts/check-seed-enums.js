#!/usr/bin/env node
/**
 * 检测 seed 文件中 create 写入的枚举值是否与 Prisma schema 一致。
 *
 * 目标：宁可漏报，不误报。
 * 仅检测 prisma.<model>.create(...)。
 *
 * 用法: node scripts/check-seed-enums.js <schema.prisma路径> <seed文件1> [seed文件2] ...
 * 输出: JSON 数组到 stdout。始终 exit 0。
 */
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function stripInlineComment(line) {
  const idx = line.indexOf('//');
  return idx >= 0 ? line.slice(0, idx) : line;
}

function parseSchema(schema) {
  const enums = new Map();
  const models = new Map();

  const enumRe = /\benum\s+(\w+)\s*\{([\s\S]*?)\}/g;
  let em;
  while ((em = enumRe.exec(schema)) !== null) {
    const name = em[1];
    const values = em[2]
      .split('\n')
      .map((l) => stripInlineComment(l).trim())
      .filter(Boolean)
      .filter((l) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(l));
    enums.set(name, new Set(values));
  }

  const modelRe = /\bmodel\s+(\w+)\s*\{([\s\S]*?)\}/g;
  let mm;
  while ((mm = modelRe.exec(schema)) !== null) {
    const modelName = mm[1];
    const fieldMap = new Map();
    for (const raw of mm[2].split('\n')) {
      const line = stripInlineComment(raw).trim();
      if (!line || line.startsWith('@@')) continue;
      const fm = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s+([A-Za-z_][A-Za-z0-9_]*)(\?|\[\])?/);
      if (!fm) continue;
      const fieldName = fm[1];
      const fieldType = fm[2];
      if (enums.has(fieldType)) {
        fieldMap.set(fieldName, fieldType);
      }
    }
    models.set(modelName, fieldMap);
  }

  return { enums, models };
}

function unwrap(node) {
  let cur = node;
  while (cur && (cur.type === 'TSAsExpression' || cur.type === 'TSTypeAssertion' || cur.type === 'ParenthesizedExpression')) {
    cur = cur.expression;
  }
  return cur;
}

function getPropName(prop) {
  if (!prop || prop.type !== 'ObjectProperty' || prop.computed) return null;
  if (prop.key.type === 'Identifier') return prop.key.name;
  if (prop.key.type === 'StringLiteral') return prop.key.value;
  return null;
}

function findObjectProperty(objExpr, name) {
  if (!objExpr || objExpr.type !== 'ObjectExpression') return null;
  for (const p of objExpr.properties) {
    if (p.type !== 'ObjectProperty') continue;
    if (getPropName(p) === name) return p;
  }
  return null;
}

function getStringLiteralFromNode(node) {
  const n = unwrap(node);
  if (n && n.type === 'StringLiteral') return n;
  return null;
}

function resolveArrayObjectElementsFromBinding(binding) {
  if (!binding || !binding.path || !binding.path.node) return null;
  if (binding.path.node.type !== 'VariableDeclarator') return null;
  const init = unwrap(binding.path.node.init);
  if (!init || init.type !== 'ArrayExpression') return null;
  return init.elements.filter((el) => el && el.type === 'ObjectExpression');
}

function resolveFieldLiteralsFromRowVar(rowVarName, fieldName, callPath) {
  const rowBinding = callPath.scope.getBinding(rowVarName);
  if (!rowBinding || !rowBinding.path || !rowBinding.path.node) return [];
  if (rowBinding.path.node.type !== 'VariableDeclarator') return [];

  const rowInit = unwrap(rowBinding.path.node.init);
  if (!rowInit) return [];

  // const row = arr[i]
  if (rowInit.type === 'MemberExpression' && rowInit.computed && rowInit.object.type === 'Identifier') {
    const arrBinding = rowBinding.path.scope.getBinding(rowInit.object.name);
    const arrElements = resolveArrayObjectElementsFromBinding(arrBinding);
    if (!arrElements) return [];

    const out = [];
    for (const el of arrElements) {
      const fp = findObjectProperty(el, fieldName);
      if (!fp) continue;
      const lit = getStringLiteralFromNode(fp.value);
      if (lit) out.push(lit);
    }
    return out;
  }

  // const row = { ... }
  if (rowInit.type === 'ObjectExpression') {
    const fp = findObjectProperty(rowInit, fieldName);
    if (!fp) return [];
    const lit = getStringLiteralFromNode(fp.value);
    return lit ? [lit] : [];
  }

  return [];
}

function resolveFieldStringLiterals(valueNode, fieldName, callPath) {
  const n = unwrap(valueNode);
  if (!n) return [];

  // direct literal: status: "OPEN"
  if (n.type === 'StringLiteral') return [n];

  // reference: status: row.status
  if (
    n.type === 'MemberExpression' &&
    !n.computed &&
    n.object.type === 'Identifier' &&
    n.property.type === 'Identifier' &&
    n.property.name === fieldName
  ) {
    return resolveFieldLiteralsFromRowVar(n.object.name, fieldName, callPath);
  }

  // reference: status: row["status"]
  if (
    n.type === 'MemberExpression' &&
    n.computed &&
    n.object.type === 'Identifier' &&
    n.property.type === 'StringLiteral' &&
    n.property.value === fieldName
  ) {
    return resolveFieldLiteralsFromRowVar(n.object.name, fieldName, callPath);
  }

  // reference: status: tmp   (tmp = "OPEN")
  if (n.type === 'Identifier') {
    const b = callPath.scope.getBinding(n.name);
    if (b && b.path && b.path.node && b.path.node.type === 'VariableDeclarator') {
      const lit = getStringLiteralFromNode(b.path.node.init);
      if (lit) return [lit];
    }
  }

  return [];
}

function getCreateTarget(callExpr) {
  if (!callExpr || callExpr.type !== 'CallExpression') return null;
  const callee = callExpr.callee;
  if (!callee || callee.type !== 'MemberExpression' || callee.computed) return null;
  if (callee.property.type !== 'Identifier' || callee.property.name !== 'create') return null;

  const modelMember = callee.object;
  if (!modelMember || modelMember.type !== 'MemberExpression' || modelMember.computed) return null;
  if (modelMember.property.type !== 'Identifier') return null;
  if (modelMember.object.type !== 'Identifier' || modelMember.object.name !== 'prisma') return null;

  return { modelName: modelMember.property.name };
}

function checkSeedFile(filePath, schemaInfo) {
  const { enums, models } = schemaInfo;
  const errors = [];
  const content = fs.readFileSync(filePath, 'utf-8');

  let ast;
  try {
    ast = parser.parse(content, {
      sourceType: 'unambiguous',
      errorRecovery: true,
      plugins: ['typescript', 'jsx', 'objectRestSpread', 'optionalChaining', 'nullishCoalescingOperator'],
    });
  } catch (_) {
    return errors;
  }

  traverse(ast, {
    CallExpression(callPath) {
      const target = getCreateTarget(callPath.node);
      if (!target) return;

      const enumFields = models.get(target.modelName);
      if (!enumFields || enumFields.size === 0) return;

      const arg0 = callPath.node.arguments[0];
      const argObj = unwrap(arg0);
      if (!argObj || argObj.type !== 'ObjectExpression') return;

      const dataProp = findObjectProperty(argObj, 'data');
      if (!dataProp) return;

      const dataObj = unwrap(dataProp.value);
      if (!dataObj || dataObj.type !== 'ObjectExpression') return;

      for (const [fieldName, enumName] of enumFields.entries()) {
        const fieldProp = findObjectProperty(dataObj, fieldName);
        if (!fieldProp) continue;

        const literals = resolveFieldStringLiterals(fieldProp.value, fieldName, callPath);
        if (literals.length === 0) continue;

        const allowed = enums.get(enumName);
        if (!allowed) continue;

        for (const lit of literals) {
          if (allowed.has(lit.value)) continue;
          errors.push({
            enum_name: enumName,
            field_name: fieldName,
            model_name: target.modelName,
            line: lit.loc ? lit.loc.start.line : null,
            cur_value: lit.value,
            correct_value_list: Array.from(allowed),
          });
        }
      }
    },
  });

  return errors;
}

(function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    process.stdout.write('[]');
    return;
  }

  const schemaPath = path.resolve(args[0]);
  const seedFiles = args.slice(1).map((f) => path.resolve(f));

  if (!fs.existsSync(schemaPath)) {
    process.stdout.write('[]');
    return;
  }
  for (const f of seedFiles) {
    if (!fs.existsSync(f)) {
      process.stdout.write('[]');
      return;
    }
  }

  const schema = fs.readFileSync(schemaPath, 'utf-8');
  const schemaInfo = parseSchema(schema);

  const allErrors = [];
  for (const f of seedFiles) {
    allErrors.push(...checkSeedFile(f, schemaInfo));
  }

  process.stdout.write(JSON.stringify(allErrors));
})();
