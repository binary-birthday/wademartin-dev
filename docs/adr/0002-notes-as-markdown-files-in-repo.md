# 0002. Store notes as Markdown files in this repo

**Status:** Accepted
**Date:** 2026-11-01

## Context

The site has one kind of content, the note (see `SPEC.md` section 5). Each
note has required fields that the build must check. The site needs very
little upkeep, and published links must never break. Once there are many
notes, changing their format means migrating all of them, so this is hard to
undo.

Options considered:

- Markdown files with YAML frontmatter, in this repo.
- MDX files in this repo. Allows components inside notes, but ties every note
  that uses one to a framework, and adds upkeep.
- An external writing tool (Notion, a headless CMS) pulled in at build time.
  Easiest to write in, but adds a third-party dependency, needs API keys,
  makes checks harder, and conflicts with the spec's "no CMS" non-goal.

## Decision

Each note is a plain Markdown file in this repo. Its fields go in YAML
frontmatter at the top of the file. Notes don't use components or
framework-specific syntax.

## Consequences

- Notes are plain text that any editor can open and any static site tool can
  read. Changing the site's stack later doesn't mean rewriting notes.
- Git history is each note's history.
- The build can check frontmatter against a schema.
- Writing needs an editor and git, which is awkward on a phone.
- No interactive content inside notes. Link to a demo in the experiment's
  repo instead.
- Diagrams need a build plugin (for example Mermaid) that works on standard
  Markdown code blocks.
