---
description: 'Kick off a new website using this template when only mission, audience, and content are known'
mode: 'agent'
model: 'GPT-5'
---

You are starting a new project from this template in Site Builder mode.

Input I will provide:

- Organization mission
- Audience
- Page/content outline
- Any visual direction notes

Use this repo's standards and docs to implement the first production-ready draft.

Required process:

1. Read PROJECT_BRIEF.md (if present), docs/PROJECT_BRIEF_TEMPLATE.md, README.md, docs/STANDARDS.md, docs/WCAG_2.2_CHECKLIST.md, and docs/agents/site-builder/README.md.
2. Build required pages/sections using existing components and tokens.
3. Rearrange structure and update copy before introducing any custom implementation.
4. Keep everything accessible and keyboard navigable.
5. Keep styles tokenized and theme-aware.
6. Do not create new components/routes/endpoints/utilities unless explicitly requested.
7. Run npm run validate and fix failures.
8. Run npm run precommit:check and fix failures.
9. Summarize what was built and list any remaining decisions.

Output format:

- What was implemented
- Which files changed
- Validation command results
- Follow-up questions for the project owner
