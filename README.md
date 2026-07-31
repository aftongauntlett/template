# Astro Mission-First Template

Reusable Astro starter for nonprofits and organizations doing public-good work.

This template is static-first, accessibility-first, and designed to be cloned for new projects with minimal setup.

## Purpose

- Ship maintainable static websites quickly.
- Preserve high quality standards on every project.
- Keep cloned projects focused on content, layout, tokens, and accessibility.
- Provide agent-ready docs with clear rules for template maintenance vs cloned-site editing.

## Standards

All projects cloned from this template must follow:

- WCAG 2.2 AA baseline.
- Full keyboard navigation and visible focus styles.
- Semantic HTML first, ARIA only when required.
- Theme tokens and reusable components (no hard-coded component colors).
- Validation before completion: typecheck, lint, tests, build.

Reference docs:

- docs/STANDARDS.md
- docs/WCAG_2.2_CHECKLIST.md
- docs/AGENT_PROMPT_OPENERS.md
- docs/AGENT_QUICKSTART.md

<!-- template-maintainer-only:start -->

- docs/agents/template-maintainer/README.md

<!-- template-maintainer-only:end -->

- docs/agents/site-builder/README.md

<!-- template-maintainer-only:start -->

- docs/agents/template-maintainer/ACCESSIBILITY_AUDIT_NOTE.md

<!-- template-maintainer-only:end -->

## Create New Projects From This Template (GitHub)

1. Open this repository on GitHub.
2. Click Use this template.
3. Select Create a new repository.
4. Choose owner, repository name, and visibility.
5. Leave Include all branches unchecked unless you intentionally want every branch copied.
6. Click Create repository from template.

Notes:

- A repository created from a template starts with unrelated history.
- Use this template repo as your source of truth, then do client work in newly generated repos.

## Local Quick Start

1. Clone this repository.
2. Rename the local folder to your new project name.
3. Update package metadata in package.json.
4. Install dependencies.
5. Start development server.
6. Confirm git hooks are installed for commit-time checks.
7. If this project was generated from "Use this template" (not the template
   source repo itself), run the one-time detach step to remove
   maintainer-only docs/prompts: `npm run detach-template`.

Commands:

- npm install
- npm run dev
- npm run hooks:install
- npm run detach-template (new client projects only — see note above)

## Validation Commands

- npm run typecheck
- npm run lint
- npm run test
- npm run build
- npm run validate

CI:

- GitHub Actions workflow: .github/workflows/ci.yml

## Dependency Updates (Dependabot)

`.github/dependabot.yml` is tuned for throwaway client sites: monthly instead
of weekly, one combined update group, and a low open-PR cap. Most projects
cloned from this template ship once and are never revisited, so there is no
need for frequent version-bump PRs.

This file only controls scheduled version-bump PRs. It does **not** control
Dependabot's separate vulnerability alert / security-PR feature — that is a
repo-level setting under **Settings > Code security** (or an org-level
default), and it stays on by default regardless of what this yaml says. If a
client site should not receive Dependabot security PRs either, that setting
has to be turned off per-repo after the site is created.

`package.json` also pins an `overrides` entry for `brace-expansion` to a
patched version. Several dev-only tools (eslint, eslint-plugin-jsx-a11y)
bundle old transitive copies of `minimatch`/`brace-expansion` that npm audit
flags as high severity (GHSA-mh99-v99m-4gvg); the override forces the whole
tree onto a fixed version without changing any tool's declared major
version. Re-check `npm audit` after bumping eslint or eslint-plugin-jsx-a11y
in case upstream has since fixed this natively and the override can be
dropped.

## Commit Guardrails (Solo Main Workflow)

This template installs a local pre-commit hook from `.githooks/pre-commit`.

- Hook command: `npm run precommit:check`
- Checks run on commit: typecheck, lint, tests
- Manual install/reinstall: `npm run hooks:install`

This gives fast local quality checks before each commit, even when working directly on `main`.

## Project Structure

```text
.
├── .github/
│   ├── copilot-instructions.md
│   ├── instructions/
│   └── prompts/
├── docs/
│   ├── agents/
│   │   ├── site-builder/
│   │   └── template-maintainer/
│   ├── AGENT_QUICKSTART.md
│   ├── STANDARDS.md
│   └── WCAG_2.2_CHECKLIST.md
├── src/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── config/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── .env.example
└── package.json
```

## Included Baseline UI

- Reusable layout with skip link, navbar, and footer.
- Reusable card and button components.
- Theme token system with primary/secondary/accent colors defined in src/styles/global.css.
- Local Example Client Snapshot tab with save-to-browser fields and generated PROJECT_BRIEF/prompt drafts.
- Reusable styled dropdown with progressive enhancement (native select fallback).
- Two default pages: `/` (Home) and `/example` (component catalog).
- New pages should start from the Example page scaffold to preserve spacing and structure consistency.

Note: `/example` is intended for local template work and is redirected to Home outside local dev.

## Agent Workflow

For AI-assisted implementation:

1. Fill in PROJECT_BRIEF.md with whatever the client gave you (name, type, URL, colors, logo/images).
2. Select agent mode in docs/AGENT_QUICKSTART.md.
3. In cloned projects, prioritize rearranging existing components, updating copy, metadata, and tokens.

<!-- template-maintainer-only:start -->

4. In this template source repo, implement reusable code changes when new features are requested.

<!-- template-maintainer-only:end -->

5. Run npm run validate and resolve failures.

Prompt starters:

<!-- template-maintainer-only:start -->

- .github/prompts/template-maintainer/maintain-template.prompt.md

<!-- template-maintainer-only:end -->

- .github/prompts/site-builder/use-template-without-new-code.prompt.md
- .github/prompts/new-site-kickoff.prompt.md (first production draft from PROJECT_BRIEF.md)

## Notes

- This repo is meant to be copied and adapted, not treated as a single product codebase.
- Keep docs current as your process evolves.
