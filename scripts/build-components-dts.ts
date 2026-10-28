import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';

type PropInfo = { type: string; optional: boolean };
type NamedComp = { name: string; props: Record<string, PropInfo> };

function walk(dir: string, out: string[] = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    if (it.name.startsWith('.')) continue;
    const full = path.join(dir, it.name);
    if (it.isDirectory()) {
      if (full.includes(`${path.sep}ui${path.sep}`)) continue; // skip ui
      walk(full, out);
    } else if (it.isFile()) {
      if (it.name.endsWith('.tsx')) out.push(full);
    }
  }
  return out;
}

function hasModifier(node: ts.Node, kind: ts.SyntaxKind) {
  return !!node.modifiers?.some(m => m.kind === kind);
}

function getDefaultExportedFunction(sourceFile: ts.SourceFile) {
  const funcs = sourceFile.statements.filter((s): s is ts.FunctionDeclaration =>
    ts.isFunctionDeclaration(s) && hasModifier(s, ts.SyntaxKind.ExportKeyword) && hasModifier(s, ts.SyntaxKind.DefaultKeyword)
  );
  if (funcs.length > 0) return funcs[0];
  const exportAssign = sourceFile.statements.find(ts.isExportAssignment);
  if (exportAssign && ts.isIdentifier(exportAssign.expression)) {
    const name = exportAssign.expression.text;
    const decl = sourceFile.statements.find(s => (
      (ts.isFunctionDeclaration(s) && s.name?.text === name) ||
      (ts.isVariableStatement(s) && s.declarationList.declarations.some(d => ts.isIdentifier(d.name) && d.name.text === name))
    ));
    if (decl && ts.isFunctionDeclaration(decl)) return decl;
  }
  return undefined;
}

function normalizeTypeString(typeStr: string, optional: boolean) {
  let s = typeStr.trim();
  if (optional) {
    s = s.replace(/\bundefined\s*\|\s*/g, '');
    s = s.replace(/\|\s*undefined\b/g, '');
    s = s.trim();
    if (s.startsWith('(') && s.endsWith(')')) s = s.slice(1, -1).trim();
  }
  return s;
}

function typeToPrettyString(checker: ts.TypeChecker, t: ts.Type, depth = 0): string {
  // Prevent runaway recursion depth on complex nested shapes
  if (depth > 4) return checker.typeToString(t);

  // Handle union and intersection explicitly to avoid TS ellipsis formatting
  if ((t.flags & ts.TypeFlags.Union) !== 0) {
    const u = t as ts.UnionType;
    return u.types.map(tt => typeToPrettyString(checker, tt, depth + 1)).join(' | ');
  }
  if ((t.flags & ts.TypeFlags.Intersection) !== 0) {
    const i = t as ts.IntersectionType;
    return i.types.map(tt => typeToPrettyString(checker, tt, depth + 1)).join(' & ');
  }

  // If the printed type is a well-known builtin, keep it as-is
  const printed = checker.typeToString(t);
  if (printed === 'Date') return printed;

  // Prefer explicit object property enumeration for anonymous object types only
  if ((t.flags & ts.TypeFlags.Object) !== 0) {
    const objType = t as ts.ObjectType;
    const objFlags = objType.objectFlags || 0;
    const isAnonymous = (objFlags & ts.ObjectFlags.Anonymous) !== 0 || (objFlags & ts.ObjectFlags.ObjectLiteral) !== 0;
    if (isAnonymous) {
      const props = checker.getPropertiesOfType(t);
      if (props.length > 0) {
        const parts: string[] = [];
        for (const p of props) {
          const decl = p.getDeclarations()?.[0] ?? (p.valueDeclaration || p.declarations?.[0]);
          const isOpt = !!(decl && ts.isPropertySignature(decl) && decl.questionToken);
          const pt = checker.getTypeOfSymbolAtLocation(p, decl ?? (p as any));
          const val = typeToPrettyString(checker, pt, depth + 1);
          parts.push(`${p.getName()}${isOpt ? '?' : ''}: ${val}`);
        }
        return `{ ${parts.join('; ')} }`;
      }
    }
  }

  // Fallback to default printer for primitives/functions/arrays/tuples
  return checker.typeToString(t);
}

function extractPropsInfo(checker: ts.TypeChecker, fn: ts.FunctionDeclaration) {
  const param = fn.parameters?.[0];
  if (!param) return {} as Record<string, PropInfo>;
  const typeNode = param.type;
  let paramType: ts.Type | undefined;
  if (typeNode) paramType = checker.getTypeFromTypeNode(typeNode);
  else paramType = checker.getTypeAtLocation(param);
  if (!paramType) return {} as Record<string, PropInfo>;

  const result: Record<string, PropInfo> = {};
  const props = paramType.getProperties();
  for (const prop of props) {
    const declarations = prop.getDeclarations() || [];
    const firstDecl = declarations[0];
    const optional = !!(firstDecl && ts.isPropertySignature(firstDecl) && !!firstDecl.questionToken);
    const propType = checker.getTypeOfSymbolAtLocation(prop, firstDecl ?? fn);
    const typeStr = typeToPrettyString(checker, propType);
    const cleaned = normalizeTypeString(typeStr, optional);
    result[prop.getName()] = { type: cleaned, optional };
  }
  return result;
}

function deriveComponentName(filePath: string) {
  const base = path.basename(filePath).replace(/\.(tsx|ts)$/, '');
  return base.replace(/[^A-Za-z0-9_]/g, '_');
}

function collectLocalTypeDecls(sf: ts.SourceFile) {
  const map = new Map<string, ts.InterfaceDeclaration | ts.TypeAliasDeclaration>();
  for (const stmt of sf.statements) {
    if (ts.isInterfaceDeclaration(stmt) && stmt.name) {
      map.set(stmt.name.text, stmt);
    } else if (ts.isTypeAliasDeclaration(stmt) && stmt.name) {
      map.set(stmt.name.text, stmt);
    }
  }
  return map;
}

function findReferencedLocalTypes(texts: string[], localDecls: Map<string, ts.InterfaceDeclaration | ts.TypeAliasDeclaration>) {
  const names = new Set<string>();
  const allText = texts.join(' \n ');
  for (const name of localDecls.keys()) {
    const re = new RegExp(`\\b${name}\\b`);
    if (re.test(allText)) names.add(name);
  }
  // naive dependency closure: include other local types referenced by selected ones
  let changed = true;
  while (changed) {
    changed = false;
    const currentTexts = Array.from(names).map(n => localDecls.get(n)!.getText());
    const combined = currentTexts.join(' \n ');
    for (const name of localDecls.keys()) {
      if (names.has(name)) continue;
      const re2 = new RegExp(`\\b${name}\\b`);
      if (re2.test(combined)) {
        names.add(name);
        changed = true;
      }
    }
  }
  return Array.from(names);
}

function indent(text: string, n = 2) {
  const pad = ' '.repeat(n);
  return text.split('\n').map(l => (l.length ? pad + l : l)).join('\n');
}

function propsToInline(props: Record<string, PropInfo>) {
  const entries = Object.entries(props);
  if (entries.length === 0) return '{}';
  return `{ ${entries.map(([k, v]) => `${k}${v.optional ? '?' : ''}: ${v.type}`).join('; ')} }`;
}

function buildDtsModule(
  importPath: string,
  defaultEntry: { name: string; props: Record<string, PropInfo> } | null,
  namedEntries: NamedComp[],
  localTypes: string[]
) {
  const typesBlock = localTypes.length ? indent(localTypes.join('\n\n')) + '\n\n' : '';
  const lines: string[] = [];
  if (defaultEntry) {
    lines.push(`  export default function ${defaultEntry.name}(props: ${propsToInline(defaultEntry.props)}): JSX.Element;`);
  }
  for (const n of namedEntries) {
    lines.push(`  export function ${n.name}(props: ${propsToInline(n.props)}): JSX.Element;`);
  }
  const body = lines.join('\n');
  return `/* Auto-generated for ${importPath} */\n` +
         `declare module "${importPath}" {\n` +
         `${typesBlock}` +
         `${body}\n` +
         `}\n`;
}

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

function main() {
  const root = path.resolve(process.cwd());
  const args = process.argv.slice(2).filter(Boolean);
  let files: string[];
  if (args.length > 0) {
    files = args.map(p => path.resolve(root, p));
  } else {
    const compDir = path.join(root, 'src', 'components');
    files = walk(compDir);
  }

  const options: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.CommonJS,
    jsx: ts.JsxEmit.ReactJSX,
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
    baseUrl: '.',
    paths: { '@/*': ['src/*'] },
  };
  const host = ts.createCompilerHost(options);
  const program = ts.createProgram(files, options, host);
  const checker = program.getTypeChecker();

  let count = 0;
  for (const filePath of files) {
    // Skip ui directory outputs entirely
    if (filePath.split(path.sep).includes('ui')) continue;
    const sf = program.getSourceFile(filePath);
    if (!sf) continue;
    const fn = getDefaultExportedFunction(sf);
    const relPath = path.relative(root, filePath).split(path.sep).join('/');
    const aliasImportPath = relPath.startsWith('src/') ? relPath.replace(/^src\//, '@/') : relPath;

    // Collect named export components
    const namedEntries: NamedComp[] = [];
    for (const stmt of sf.statements) {
      // export function Comp(props: P) {}
      if (ts.isFunctionDeclaration(stmt) && hasModifier(stmt, ts.SyntaxKind.ExportKeyword) && !hasModifier(stmt, ts.SyntaxKind.DefaultKeyword) && stmt.name) {
        // Only include if it has at least one parameter (likely a component)
        const p0 = stmt.parameters[0];
        if (p0) {
          const props = extractPropsInfo(checker, stmt);
          namedEntries.push({ name: stmt.name.text, props });
        }
      }
      // export const Comp = (...) => { }
      if (ts.isVariableStatement(stmt) && hasModifier(stmt, ts.SyntaxKind.ExportKeyword)) {
        for (const d of stmt.declarationList.declarations) {
          if (!ts.isIdentifier(d.name)) continue;
          const varName = d.name.text;
          let propsType: ts.Type | undefined;
          // Annotation like const Comp: React.FC<P>
          if (d.type && ts.isTypeReferenceNode(d.type)) {
            const tr = d.type;
            const arg = tr.typeArguments?.[0];
            if (arg) propsType = checker.getTypeFromTypeNode(arg);
          }
          // Arrow/function expression with typed first param
          if (!propsType && d.initializer && (ts.isArrowFunction(d.initializer) || ts.isFunctionExpression(d.initializer))) {
            const p0 = d.initializer.parameters[0];
            if (p0) {
              propsType = p0.type ? checker.getTypeFromTypeNode(p0.type) : checker.getTypeAtLocation(p0);
            }
          }
          if (propsType) {
            // Convert to PropInfo map using similar logic
            const props: Record<string, PropInfo> = {};
            for (const prop of propsType.getProperties()) {
              const decl = prop.getDeclarations()?.[0];
              const optional = !!(decl && ts.isPropertySignature(decl) && decl.questionToken);
              const pt = checker.getTypeOfSymbolAtLocation(prop, decl ?? (prop as any));
              const typeStrRaw = typeToPrettyString(checker, pt);
              const typeStr = normalizeTypeString(typeStrRaw, optional);
              props[prop.getName()] = { type: typeStr, optional };
            }
            namedEntries.push({ name: varName, props });
          }
        }
      }
    }

    // Default export entry
    let defaultEntry: { name: string; props: Record<string, PropInfo> } | null = null;
    if (!fn) {
      // no default export function; if at least one named, generate only named
      const name = deriveComponentName(filePath);
      const content = buildDtsModule(aliasImportPath, defaultEntry, namedEntries, []);
      const target = filePath.replace(/\.(tsx|ts)$/, '.d.ts');
      ensureDir(path.dirname(target));
      fs.writeFileSync(target, content, 'utf8');
      count++;
      continue;
    }
    const componentName = fn.name?.text || deriveComponentName(filePath);
    const props = extractPropsInfo(checker, fn);
    defaultEntry = { name: componentName, props };
    const localDecls = collectLocalTypeDecls(sf);
    const allTypeTexts = [
      ...Object.values(props).map(p => p.type),
      ...namedEntries.flatMap(ne => Object.values(ne.props).map(p => p.type)),
    ];
    const referencedNames = findReferencedLocalTypes(allTypeTexts, localDecls);
    const localTypesTexts = referencedNames.map(n => localDecls.get(n)!.getText());
    const content = buildDtsModule(aliasImportPath, defaultEntry, namedEntries, localTypesTexts);
    const target = filePath.replace(/\.(tsx|ts)$/, '.d.ts');
    ensureDir(path.dirname(target));
    fs.writeFileSync(target, content, 'utf8');
    count++;
  }

  console.log(`Wrote ${count} .d.ts files next to source files`);
}

if (require.main === module) {
  main();
}
