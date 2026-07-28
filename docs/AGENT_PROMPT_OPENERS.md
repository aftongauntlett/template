# Agent Prompt Openers

Use these copy-ready starters when opening a new Copilot chat.

Choose the opener that matches your mode.

## Global Guardrail Prefix

Start with this line for most chats:

Work in Site Builder mode unless I explicitly say Template Maintainer mode.

## Site Builder Openers (Cloned Project)

## 1) Rearrange existing page sections only

Use Site Builder mode.
Reference and follow these files first:
- docs/AGENT_QUICKSTART.md
- docs/agents/site-builder/README.md
- docs/STANDARDS.md
- docs/WCAG_2.2_CHECKLIST.md

Task:
Rearrange existing sections and components on the current page for better narrative flow.
Do not create new components, routes, endpoints, utilities, or dependencies.
Keep all existing accessibility behavior intact.
Run npm run validate and report what changed.

## 2) Update theme and token values only

Use Site Builder mode.
Reference and follow these files first:
- docs/AGENT_QUICKSTART.md
- docs/agents/site-builder/README.md
- docs/STANDARDS.md
- docs/WCAG_2.2_CHECKLIST.md

Task:
Update design token values for color, spacing, and typography rhythm to match this direction:
[insert mood/brand notes]
Do not add new components or one-off styling systems.
Keep contrast and focus visibility compliant.
Run npm run validate and summarize token changes.

## 3) Update copy and metadata only

Use Site Builder mode.
Reference and follow these files first:
- docs/AGENT_QUICKSTART.md
- docs/agents/site-builder/README.md

Task:
Update headings, body copy, CTA text, and page metadata using the content below.
Do not create new architecture or new components.
Only edit existing pages/components/config files.
Return a concise list of edited files and key copy changes.

## 4) Accessibility-focused pass without feature changes

Use Site Builder mode.
Reference and follow these files first:
- docs/WCAG_2.2_CHECKLIST.md
- docs/STANDARDS.md

Task:
Perform an accessibility hardening pass on the current page.
Do not add new features or new components.
Only make minimal fixes to semantics, focus behavior, contrast, labels, and reduced-motion behavior.
Run npm run validate and report changes by severity.

## Template Maintainer Openers (Template Source Repo)

## 5) Add reusable component primitive

Use Template Maintainer mode.
Reference and follow these files first:
- docs/AGENT_QUICKSTART.md
- docs/agents/template-maintainer/README.md
- docs/STANDARDS.md
- docs/WCAG_2.2_CHECKLIST.md

Task:
Add a reusable component primitive for [insert component idea].
Update any docs and tests needed.
Keep APIs small and token-driven.
Run npm run validate and npm run precommit:check.

## 6) Create new reusable layout variant

Use Template Maintainer mode.
Reference and follow these files first:
- docs/AGENT_QUICKSTART.md
- docs/agents/template-maintainer/README.md
- docs/STANDARDS.md

Task:
Add a reusable layout variant for [top nav, side nav, split content, landing hero, etc.].
Keep this as shared template architecture, not one-off page markup.
Document usage and constraints.
Run npm run validate and npm run precommit:check.

## Scope Control Openers

## 7) Force no-new-code behavior

Use Site Builder mode.
This task is strictly no-new-code.
Do not create files.
Do not create components, routes, endpoints, utilities, or dependencies.
Only rearrange existing component usage and edit text/tokens/metadata.
If you think new architecture is needed, stop and ask for explicit approval.

## 8) Ask for escalation before custom features

Use Site Builder mode.
If this request requires new components or custom feature logic, do not implement immediately.
First propose a short escalation plan for Template Maintainer mode and wait for my approval.

## Tip

For best results, paste one opener first, then paste your exact page/content/theme request in a second message.