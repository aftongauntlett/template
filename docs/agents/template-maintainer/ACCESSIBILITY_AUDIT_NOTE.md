# Accessibility Audit Note (Template Maintainer)

Use this only when changing the template foundation, such as:

- src/layouts/BaseLayout.astro
- src/styles/global.css
- shared UI primitives in src/components/ui/

## Goal

Verify the template baseline still ships with strong accessibility defaults.

## Maintainer Audit Pass

1. Run quality gates:
   - npm run validate
   - npm run precommit:check
2. Do a keyboard-only pass through the home page and any affected flows.
3. Do a quick screen-reader smoke check (landmarks, headings, labels, errors).
4. Check zoom/reflow at 200 percent and narrow mobile width.
5. Check reduced-motion behavior.
6. Optionally run Lighthouse accessibility checks (mobile and desktop) before release.

## Reporting Guidance

Use evidence-based wording.

- Good: built and tested against WCAG 2.2 AA best practices.
- Avoid: absolute legal-compliance claims without formal audit evidence.
