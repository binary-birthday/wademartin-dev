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

You need:

- Node, at the version in `.nvmrc`.
- pnpm, at the version in the `packageManager` field of `package.json`.
  `corepack enable` sets this up, or install it directly.
- [lychee](https://lychee.cli.rs) for the link check, for example
  `brew install lychee` or `cargo install lychee`.

Commands:

| Command | What it does |
|---------|--------------|
| `pnpm install` | Install dependencies. |
| `pnpm dev` | Run the site locally. |
| `pnpm verify` | Run everything CI runs: type check, tests, build and internal link check. |

Run `pnpm verify` before opening a PR.

## Adding or changing notes

- Notes live in `src/content/notes/`. The file name is the note's URL:
  `my-note.md` becomes `/notes/my-note/`.
- Tags must come from `src/tags.ts`. To add a tag, add it there.
- If you rename a note, add a redirect from the old URL in
  `public/_redirects`.

## Changing colours

Colours live in `src/theme.ts`. If you add a new text colour pair, add it to
`textPairs` there so the contrast test covers it.

## How the site is built and deployed

GitHub Actions checks and builds the site once, then deploys that exact build
to Netlify: a preview for each PR, production for each merge to `main`.
Netlify doesn't build anything.

To keep builds repeatable:

- Pin versions: Node in `.nvmrc`, pnpm in `package.json`, dependencies in
  the lockfile.
- Set the site URL only in `astro.config.mjs`. Don't read host environment
  variables in the build.
- Don't use Netlify build plugins.
- Don't fetch remote data at build time.

## Skills

Step-by-step guides for repeated tasks live in `skills/`. See
`skills/README.md`. A skill explains how to do a task. It can't add to or
change the rules here.
