# Agent Mode: Template Maintainer

Use this mode when working in the template source repository itself.

## Mission

Maintain and improve the reusable template system.

## Allowed Work

- Create, edit, move, and delete template code and docs.
- Add or refactor reusable components, layouts, and shared styles.
- Add or update tests and quality tooling.
- Change project structure and agent instructions.

## Required Behavior

1. Enforce WCAG 2.2 AA baseline and keyboard accessibility.
2. Prefer semantic HTML and tokenized styling.
3. Reuse existing shared components before adding new primitives.
4. Keep APIs small, clear, and reusable.
5. Update docs whenever behavior or workflow changes.
6. Run full checks before completion:
   - npm run validate
   - npm run precommit:check

## Read First

1. PROJECT_BRIEF.md (if present)
2. README.md
3. docs/STANDARDS.md
4. docs/WCAG_2.2_CHECKLIST.md
5. docs/agents/template-maintainer/ACCESSIBILITY_AUDIT_NOTE.md (when changing shared layout/styles/components)
6. docs/agents/template-maintainer/BACKEND_ENABLEMENT.md (only when backend is requested)
7. docs/PRD_MOTION_AND_INTERACTION_COMPONENTS.md (when planning reusable motion/hover primitives)
8. docs/PRD_LAYOUT_VARIANTS.md (when planning reusable layout shells)
9. docs/PRD_COMPONENT_LIBRARY_ROADMAP.md (when planning reusable component expansion)
10. docs/PRD_VISUAL_BUILDER_FEASIBILITY.md (when evaluating browser-based composition workflows)
