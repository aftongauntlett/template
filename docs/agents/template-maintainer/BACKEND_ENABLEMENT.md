# Optional Backend Enablement

This template is static-first by default.

Only use this guide when backend features are explicitly requested.

## What Agents Can Do In Template Maintainer Mode

- Add server routes under src/pages/api/.
- Add utility modules under src/utils/ for backend-related logic.
- Add and document environment variables in .env.example.
- Add tests for new server and utility logic.
- Add provider integrations when requested (email, auth, payments, scheduling, data).

## Trigger Conditions

Enable backend work only when at least one applies:

1. Contact form requires server-side delivery or anti-abuse checks.
2. Project needs authentication or protected routes.
3. Project needs payments, orders, subscriptions, or webhooks.
4. Project needs server-side scheduling workflows or private data APIs.

## Safe Rollout Process

1. Confirm the exact requested feature scope.
2. Implement the minimum backend surface required.
3. Keep public pages static whenever possible.
4. Document all env keys and ownership in docs.
5. Add tests and run validation gates.

## Important Rule

Do not add backend by default in cloned websites.

If backend is needed for many future projects, implement it in this template repo first, then update the template docs and prompts.
