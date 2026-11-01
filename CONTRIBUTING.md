# Contributing

These rules apply to everyone who changes this repo, people and AI agents
alike. There are no separate rules for agents.

## Where things live

| File | What it holds |
|------|---------------|
| `SPEC.md` | What the site should be now. |
| `docs/adr/` | Why the big technical decisions were made. |
| PR description | What a single change does and why. |

## How to make a change

1. Before writing code, update `SPEC.md` or describe the change in the PR
   using the template.
2. Build it to meet the acceptance criteria.
3. Check it. CI checks what it can. Review covers the rest.
4. When it merges, `SPEC.md` should match what the site does.

## Rules

- Read `SPEC.md` before changing anything.
- Don't build anything the spec doesn't describe. Change the spec first.
- Update `SPEC.md` in the same PR as the change it describes.
- Only write an ADR for big technical decisions. See `docs/adr/`.
- Keep each PR small and about one thing.

## Writing style

This applies to everything: notes, docs, the spec, PRs and commit messages.

- Write the way you'd explain it to a colleague.
- Use short sentences and everyday words.
- Get to the point. Cut warm-up, filler and summaries that repeat what was
  just said.
- Be specific. A number, a name or an example beats an adjective.
- Say when you don't know something.
- Use "I" in notes. In docs, just say what is true.
- Use lists for steps or options and tables for comparisons. Use bold
  rarely.
- Avoid:
  - Buzzwords: leverage, robust, seamless, powerful, cutting-edge, unlock,
    elevate, game-changer, journey.
  - Filler: "it's worth noting", "in today's world", "at the end of the
    day", "let's dive in".
  - Stock patterns: "not just X, but Y", groups of three for rhythm,
    questions you answer yourself.
  - Em dashes. Use a full stop, a comma or brackets.

If you wouldn't say it out loud to a colleague, rewrite it.

## Checking locally

To be written once the stack is chosen.

## Skills

Step-by-step guides for repeated tasks live in `skills/`. See
`skills/README.md`. A skill explains how to do a task. It can't add to or
change the rules here.
