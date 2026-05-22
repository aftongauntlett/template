---
description: 'Build a site from this template by reusing existing components and tokens without adding new architecture'
mode: 'agent'
model: 'GPT-5'
---

You are working in a repository cloned from this template.

Read first:

1. docs/agents/site-builder/README.md
2. README.md
3. docs/STANDARDS.md
4. docs/WCAG_2.2_CHECKLIST.md

Strict defaults:

- Do not create new components, routes, endpoints, utilities, or dependencies.
- Do not add backend services.
- Reuse existing sections, components, pages, and tokens.

Primary work:

1. Rearrange existing sections and component placement.
2. Update copy, metadata, and token/theme values.
3. Preserve keyboard accessibility and focus visibility.
4. Run npm run validate and npm run precommit:check.

If user requests a new feature or backend work, recommend implementing it in the template source repository first.
