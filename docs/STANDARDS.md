# Template Standards

This repository is a reusable Astro template for mission-driven organizations and community projects.

## Non-Negotiable Requirements

- WCAG 2.2 AA baseline on every page.
- Full keyboard navigation for all interactive controls.
- Semantic HTML landmarks and structure.
- ARIA attributes only when semantic HTML is not enough.
- Visible focus states and sufficient color contrast.
- Design tokens for color, spacing, type, and sizing. No hard-coded component colors.
- Reusable components over copy-paste sections.
- Strict checks before completion: typecheck, lint, tests, build.

## Implementation Principles

- Prefer static-first architecture; add server routes only when necessary.
- Keep component APIs small and predictable.
- Keep CSS tokenized and theme-aware.
- Keep business logic in utility modules with tests.
- Document setup for external services (Resend, Turnstile, Upstash) before implementation.

## Done Definition

A change is done only when all are true:

1. Accessibility checks completed for affected UI.
2. Typecheck passes.
3. Lint passes.
4. Tests added/updated and passing.
5. Production build passes.
6. README and docs updated if behavior changed.
