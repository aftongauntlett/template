# Agent Quickstart

Choose your mode first, then follow the matching instructions.

For copy-ready chat starters, use docs/AGENT_PROMPT_OPENERS.md.

## Mode A: Template Maintainer (Source Template Repo)

Use this mode when you are editing the reusable template itself.

Read in order:

1. PROJECT_BRIEF.md (if present)
2. README.md
3. docs/STANDARDS.md
4. docs/WCAG_2.2_CHECKLIST.md
5. docs/agents/template-maintainer/README.md
6. docs/agents/template-maintainer/ACCESSIBILITY_AUDIT_NOTE.md (when changing shared layout/styles/components)
7. docs/agents/template-maintainer/BACKEND_ENABLEMENT.md (only when backend is explicitly requested)

## Mode B: Site Builder (Cloned Project)

Use this mode when you are working in a repository generated from this template.

Read in order:

1. PROJECT_BRIEF.md (if present)
2. README.md
3. docs/STANDARDS.md
4. docs/WCAG_2.2_CHECKLIST.md
5. docs/agents/site-builder/README.md

## Project Intent

1. Confirm the mission, audience, and core pages from PROJECT_BRIEF.md when available.

Default build style:

- Static-first Astro sites
- Token-based CSS themes
- Reusable components
- Accessibility-first UI

Optional backend support:

- Only when explicitly requested.
- Follow `docs/agents/template-maintainer/BACKEND_ENABLEMENT.md`.

## Required Workflow for Agents

1. Confirm the mission, audience, and core pages.
2. Reuse existing components before creating new ones.
3. For form selects, use `src/components/ui/StyledDropdown.astro` instead of ad-hoc/native-styled dropdown implementations.
4. For actions and surfaces, use `src/components/ui/Button.astro` and `src/components/ui/Card.astro` before creating one-off variants. Reserve `Card` for browsable collections (blog posts, workshop listings); for pillars/values, process steps, or contact info, use `FeatureItem.astro`, `TimelineItem.astro`, or `InfoBlock.astro` instead of defaulting to a card grid.
5. If icons are needed and no icon primitive exists, create a reusable icon component first, then use it everywhere.
6. Keep styles tokenized and theme-aware.
7. Maintain semantic HTML and keyboard accessibility.
8. Motion and hover effects are allowed when purposeful, reduced-motion-safe, and not the only interaction cue.
9. In Site Builder mode, do not create new components/routes/endpoints/utilities unless explicitly requested.
10. Add tests for new logic.
11. Run full validation before finishing:
   - npm run validate
12. Ensure commit-time checks pass:
   - npm run precommit:check

## Default Deliverables

- Updated page content and components
- Updated docs for setup or architecture changes
- Passing checks (typecheck, lint, tests, build)
