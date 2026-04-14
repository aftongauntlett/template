# Copilot Workspace Instructions

Always treat this repository as a reusable Astro project template.

## Required Standards

- Enforce WCAG 2.2 AA baseline for all UI.
- Keep full keyboard navigation and visible focus styles.
- Use semantic HTML first, ARIA only when needed.
- Use design tokens and theme variables; avoid hard-coded component colors.
- Prefer reusable components and clear APIs.
- Keep code readable and maintainable.

## Required Validation Before Completion

Run and pass:

1. npm run typecheck
2. npm run lint
3. npm run test
4. npm run build

## Required Docs To Read First

1. README.md
2. docs/STANDARDS.md
3. docs/WCAG_2.2_CHECKLIST.md
4. docs/RESEND_SETUP.md

## Contact Stack Notes

When implementing contact forms or email delivery, follow docs/RESEND_SETUP.md exactly, including env names and anti-abuse controls.
