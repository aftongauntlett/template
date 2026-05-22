---
description: 'Maintain and improve the template source repository (allows code changes and architecture updates)'
mode: 'agent'
model: 'GPT-5'
---

You are working in the template source repository.

Read first:

1. docs/agents/template-maintainer/README.md
2. README.md
3. docs/STANDARDS.md
4. docs/WCAG_2.2_CHECKLIST.md
5. docs/agents/template-maintainer/ACCESSIBILITY_AUDIT_NOTE.md (when changing shared layout/styles/components)

If backend is explicitly requested, also read:

- docs/agents/template-maintainer/BACKEND_ENABLEMENT.md

Required process:

1. Confirm requested scope.
2. Reuse existing shared components before adding primitives.
3. Keep styles tokenized and accessible.
4. Add tests for new logic.
5. Run npm run validate.
6. Run npm run precommit:check.
7. Summarize changes and any follow-up decisions.
