# Astro Mission-First Template

Reusable Astro starter for nonprofits and organizations doing public-good work.

This template is static-first, accessibility-first, and designed to be cloned for new projects with minimal setup.

## Purpose

- Ship maintainable static websites quickly.
- Preserve high quality standards on every project.
- Support optional advanced stacks (auth, APIs, data, dashboards) when needed.
- Provide agent-ready docs so implementation can start from mission + content brief.

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
- docs/AGENT_QUICKSTART.md
- docs/RESEND_SETUP.md

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

Commands:

- npm install
- npm run dev

## Validation Commands

- npm run typecheck
- npm run lint
- npm run test
- npm run build
- npm run validate

## Project Structure

```text
.
├── .github/
│   ├── copilot-instructions.md
│   ├── instructions/
│   └── prompts/
├── docs/
│   ├── AGENT_QUICKSTART.md
│   ├── RESEND_SETUP.md
│   ├── STANDARDS.md
│   └── WCAG_2.2_CHECKLIST.md
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
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
- Theme token system with live theme selector.
- Home page sections that can be replaced with client content.

## Contact Stack

When a project includes contact forms/email delivery, follow docs/RESEND_SETUP.md exactly:

- Resend for email
- Cloudflare Turnstile for bot protection
- Upstash Redis for rate limiting

## Agent Workflow

For AI-assisted implementation:

1. Provide mission, audience, and content outline.
2. Agent reads the docs listed in docs/AGENT_QUICKSTART.md.
3. Agent implements pages/components using existing patterns.
4. Agent runs npm run validate and resolves failures.

## Notes

- This repo is meant to be copied and adapted, not treated as a single product codebase.
- Keep docs current as your process evolves.
