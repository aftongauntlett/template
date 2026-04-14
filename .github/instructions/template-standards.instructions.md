---
description: 'Use when building or editing Astro pages, components, styles, docs, and config in this template repo'
applyTo: 'src/**/*.astro,src/**/*.ts,src/**/*.css,README.md,docs/**/*.md,.env.example,package.json'
---

Follow these standards when generating or editing code:

- Accessibility first: semantic HTML, keyboard support, visible focus, ARIA only when needed.
- Meet WCAG 2.2 AA baseline.
- Use design tokens and theme variables. Avoid hard-coded component colors.
- Prefer reusable components over one-off markup.
- Keep TypeScript strict and avoid any.
- Add tests for new logic modules.
- Update docs when behavior or setup changes.

Before completion, run full validation:

- npm run validate
