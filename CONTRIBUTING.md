# Contributing

This is the working agreement for **anyone** changing this repo: humans and
AI agents alike. There are no agent-only rules.

## Sources of truth

| File | Holds |
|------|-------|
| `SPEC.md` | What the site should be, right now. |
| `docs/adr/` | Why significant decisions were made. |
| PR description | The spec for a single change. |

## The loop

1. **Spec first.** Before writing code, either update `SPEC.md` or describe
   the change in the PR using the template.
2. **Build** against the acceptance criteria.
3. **Verify.** CI checks what it can; review covers the rest.
4. **Close the loop.** On merge, `SPEC.md` matches reality.

## Rules

- Read `SPEC.md` before changing anything.
- Don't build what the spec doesn't describe. Propose a spec change first.
- Update `SPEC.md` in the same PR as any behaviour change.
- Write an ADR only for architecturally significant decisions (see `docs/adr/`).
- Keep changes small and scoped to one intent.

## Verifying locally

_To be defined once the stack is chosen._

## Skills

Reusable procedures live in `skills/`. See `skills/README.md`.
Skills describe *how* to do a task; they never add rules beyond this file.
