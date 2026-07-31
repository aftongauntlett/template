// One-time cleanup for a project generated from this template via GitHub's
// "Use this template" button, which copies the entire tracked file tree —
// .gitignore has no effect on that copy, so maintainer-only docs/prompts
// ship into every new client repo unless removed explicitly.
//
// Run once, right after generating a new project: npm run detach-template
//
// Do NOT run this in the template source repo itself — it deletes the
// template-maintainer docs/prompts this repo needs to keep, and it removes
// itself plus its own package.json script entry when done.
//
// New maintainer-only content doesn't need this script updated: wrap it in
// <!-- template-maintainer-only:start --> / <!-- template-maintainer-only:end -->
// markers inside any Markdown file and this script will strip it.

import { existsSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const thisFile = path.join('scripts', 'detach-template.mjs');

const DIRS_TO_REMOVE = ['docs/agents/template-maintainer', '.github/prompts/template-maintainer'];

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro', 'coverage']);

const MARKER_RE =
  /[ \t]*<!-- template-maintainer-only:start -->[\s\S]*?<!-- template-maintainer-only:end -->\n?/g;

function walkMarkdown(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      walkMarkdown(full, files);
    } else if (entry.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

let removedDirs = 0;
for (const dir of DIRS_TO_REMOVE) {
  const full = path.join(root, dir);
  if (existsSync(full)) {
    rmSync(full, { recursive: true, force: true });
    removedDirs += 1;
    process.stdout.write(`Removed ${dir}/\n`);
  }
}

let strippedFiles = 0;
for (const file of walkMarkdown(root)) {
  const content = readFileSync(file, 'utf8');
  if (!content.includes('template-maintainer-only:start')) continue;
  const next = content.replace(MARKER_RE, '').replace(/\n{3,}/g, '\n\n');
  if (next !== content) {
    writeFileSync(file, next);
    strippedFiles += 1;
    process.stdout.write(`Cleaned maintainer-only content from ${path.relative(root, file)}\n`);
  }
}

const pkgPath = path.join(root, 'package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
delete pkg.scripts['detach-template'];
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

rmSync(path.join(root, thisFile), { force: true });

process.stdout.write(
  `\nDone: removed ${removedDirs} maintainer-only dir(s), cleaned ${strippedFiles} doc(s), and removed this script.\n`,
);
