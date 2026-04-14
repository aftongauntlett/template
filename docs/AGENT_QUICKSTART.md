# Agent Quickstart

If you are an AI coding agent working in this repository, read these files in order:

1. README.md
2. docs/STANDARDS.md
3. docs/WCAG_2.2_CHECKLIST.md
4. docs/RESEND_SETUP.md
5. .env.example

## Project Intent

This repository is a cloneable template for websites supporting nonprofits and organizations doing public-good work.

Default build style:

- Static-first Astro sites
- Token-based CSS themes
- Reusable components
- Accessibility-first UI

Optional advanced integrations:

- Resend email delivery
- Cloudflare Turnstile
- Upstash Redis rate limiting
- Server/API routes for auth or data workflows

## Required Workflow for Agents

1. Confirm the mission, audience, and core pages.
2. Reuse existing components before creating new ones.
3. Keep styles tokenized and theme-aware.
4. Maintain semantic HTML and keyboard accessibility.
5. Add tests for new logic.
6. Run full validation before finishing:
   - npm run validate

## Default Deliverables

- Updated page content and components
- Updated docs for setup or architecture changes
- Passing checks (typecheck, lint, tests, build)
