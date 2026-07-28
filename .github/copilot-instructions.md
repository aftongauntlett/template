# Copilot Workspace Instructions

Always treat this repository as a reusable Astro project template.

## Operating Modes

Pick one mode before making changes:

1. Template Maintainer mode:
	- Use when working on this source template repository itself.
	- You may add or refactor template code, components, and architecture.
	- Read `docs/agents/template-maintainer/README.md` first.
2. Site Builder mode:
	- Use when working in a repository cloned from this template.
	- Default to content/theme/layout updates using existing assets only.
	- Read `docs/agents/site-builder/README.md` first.

## Required Standards

- Enforce WCAG 2.2 AA baseline for all UI.
- Keep full keyboard navigation and visible focus styles.
- Use semantic HTML first, ARIA only when needed.
- Use design tokens and theme variables; avoid hard-coded component colors.
- Motion and hover effects are allowed when purposeful; always respect reduced-motion preferences and keep non-motion state cues.
- Prefer reusable components and clear APIs.
- Keep code readable and maintainable.
- Keep page structure consistent across sections/pages: shared container spacing, gap scale, typography rhythm, and heading hierarchy.

## Component Reuse Policy

Before creating any new UI primitive, check and reuse existing components in `src/components/ui/` and `src/components/layout/`.

- Use `src/components/ui/StyledDropdown.astro` for themed select controls. Do not create ad-hoc custom dropdowns.
- Keep the native `<select>` as the data source for styled dropdowns (progressive enhancement only).
- Use `src/components/ui/Button.astro` for button-like actions/links before creating one-off button markup.
- Use `src/components/ui/Card.astro` for card surfaces before creating new one-off card patterns. Reserve Card for browsable collections (blog posts, workshop listings) — use `FeatureItem.astro`, `TimelineItem.astro`, or `InfoBlock.astro` for pillars/values, process steps, or contact info instead of defaulting to a card grid.
- If an icon primitive is needed and no reusable icon component exists, create one reusable icon component first, then consume it.
- Prefer extending existing component APIs over duplicating similar components.

## Site Builder Constraints (Default For Cloned Projects)

- Do not create new components, routes, endpoints, or utilities.
- Do not add backend integrations or new dependencies.
- Reuse existing pages, sections, components, and design tokens.
- Focus on rearranging component placement, updating copy, updating metadata, and tuning tokens/theme values.
- If custom feature work is requested, recommend implementing it in the template source repo first.

## Required Validation Before Completion

Run and pass:

1. npm run typecheck
2. npm run lint
3. npm run test
4. npm run build
5. npm run precommit:check

## Required Docs To Read First

1. PROJECT_BRIEF.md (if present)
2. README.md
3. docs/STANDARDS.md
4. docs/WCAG_2.2_CHECKLIST.md
5. docs/AGENT_QUICKSTART.md
6. docs/agents/template-maintainer/README.md (template source mode)
7. docs/agents/site-builder/README.md (cloned project mode)
8. docs/agents/template-maintainer/ACCESSIBILITY_AUDIT_NOTE.md (when changing shared layout/styles/components)
9. docs/agents/template-maintainer/BACKEND_ENABLEMENT.md (only if backend is explicitly requested)

## Backend Default

Backend is opt-in. Do not add backend scaffolding unless explicitly requested.
