import { execFileSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

const tempDirs: string[] = [];
const generatorSource = path.resolve(
  __dirname,
  '../../../rsbuild-migration-files/gen-rpc-fast.mjs',
);

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

function createProject(): string {
  const projectRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-client-manifest-'));
  tempDirs.push(projectRoot);
  fs.mkdirSync(path.join(projectRoot, 'scripts'), { recursive: true });
  fs.copyFileSync(generatorSource, path.join(projectRoot, 'scripts', 'gen-rpc-fast.mjs'));
  return projectRoot;
}

function runGenerator(projectRoot: string, target?: string): string {
  execFileSync(
    process.execPath,
    [
      path.join(projectRoot, 'scripts', 'gen-rpc-fast.mjs'),
      ...(target ? [target] : []),
    ],
    { cwd: projectRoot, stdio: 'pipe' },
  );
  return fs.readFileSync(
    path.join(projectRoot, 'src', 'tools', 'ai-actions.generated.ts'),
    'utf8',
  );
}

describe('AI client action manifest', () => {
  it('generates canonical names and delivery metadata from AI wrappers', () => {
    const projectRoot = createProject();
    fs.mkdirSync(path.join(projectRoot, 'src', 'backend', 'actions'), { recursive: true });
    fs.writeFileSync(
      path.join(projectRoot, 'src', 'backend', 'actions', 'ArticleEditor.ts'),
      [
        'export const generateArticleContent = defineAIStreamAction({});',
        'export const generateArticleImage = defineAISyncAction({});',
      ].join('\n'),
    );

    const manifest = runGenerator(projectRoot);
    expect(manifest).toContain(
      '"src.backend.actions.ArticleEditor.generateArticleContent": { actionName: "src.backend.actions.ArticleEditor.generateArticleContent", delivery: "stream" }',
    );
    expect(manifest).toContain(
      '"src.backend.actions.ArticleEditor.generateArticleImage": { actionName: "src.backend.actions.ArticleEditor.generateArticleImage", delivery: "sync" }',
    );
  });

  it('keeps colocated app actions in incremental and full scans', () => {
    const projectRoot = createProject();
    const actionFile = path.join(
      projectRoot,
      'app',
      '(backend)',
      'reports',
      'Report.actions.ts',
    );
    fs.mkdirSync(path.dirname(actionFile), { recursive: true });
    fs.writeFileSync(
      actionFile,
      'export const summarizeReport = defineAISyncAction({});\n',
    );

    const incremental = runGenerator(projectRoot, actionFile);
    expect(incremental).toContain(
      '"app.backend.reports.Report.actions.summarizeReport"',
    );

    const full = runGenerator(projectRoot);
    expect(full).toContain(
      '"app.backend.reports.Report.actions.summarizeReport"',
    );
  });

  it('keeps AI wrappers with multiline generic arguments in incremental and full scans', () => {
    const projectRoot = createProject();
    const actionFile = path.join(
      projectRoot,
      'src',
      'frontend',
      'actions',
      'Planner.ts',
    );
    fs.mkdirSync(path.dirname(actionFile), { recursive: true });
    fs.writeFileSync(
      actionFile,
      [
        'export const planRoute = defineAISyncAction<',
        '  [input: { route: string }],',
        '  { confidence: number; transform: (value: string) => string }',
        '>({});',
        'export const streamRoute = defineAIStreamAction<',
        '  [input: { route: string }],',
        '  { chunk: string }',
        '>({});',
      ].join('\n'),
    );

    const incremental = runGenerator(projectRoot, actionFile);
    expect(incremental).toContain(
      '"src.frontend.actions.Planner.planRoute": { actionName: "src.frontend.actions.Planner.planRoute", delivery: "sync" }',
    );
    expect(incremental).toContain(
      '"src.frontend.actions.Planner.streamRoute": { actionName: "src.frontend.actions.Planner.streamRoute", delivery: "stream" }',
    );

    const full = runGenerator(projectRoot);
    expect(full).toContain('"src.frontend.actions.Planner.planRoute"');
    expect(full).toContain('"src.frontend.actions.Planner.streamRoute"');
  });

  it('removes deleted actions from the generated manifest', () => {
    const projectRoot = createProject();
    const actionFile = path.join(projectRoot, 'src', 'frontend', 'actions', 'Assistant.ts');
    fs.mkdirSync(path.dirname(actionFile), { recursive: true });
    fs.writeFileSync(
      actionFile,
      'export const askAssistant = defineAIStreamAction({});\n',
    );

    expect(runGenerator(projectRoot)).toContain(
      '"src.frontend.actions.Assistant.askAssistant"',
    );
    fs.rmSync(actionFile);
    expect(runGenerator(projectRoot)).not.toContain(
      '"src.frontend.actions.Assistant.askAssistant"',
    );
  });

  it('keeps empty manifest action references strict', () => {
    const projectRoot = createProject();
    const manifestPath = path.join(projectRoot, 'src', 'tools', 'ai-actions.generated.ts');
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
    fs.writeFileSync(manifestPath, 'export const AI_ACTIONS = {} as const;\n');

    const manifest = runGenerator(projectRoot);
    expect(manifest).toContain(
      'export type AIActionReference = (typeof AI_ACTIONS)[AIActionName]',
    );
    expect(manifest).toContain('AIStreamActionReference extends never');
    expect(manifest).not.toContain('EmptyAIActionReference');
  });
});
