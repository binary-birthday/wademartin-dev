# Architecture Decision Records

An ADR records a big technical decision: one that affects how the system is
structured, how it performs, what it depends on, its interfaces, or how it is
built and deployed. There should be very few.

Write one when most of these are true:

1. It's hard to undo. Changing it later would take real work.
2. There were real options to choose between.
3. Someone will later ask why it was done this way.
4. It's technical. Product decisions go in `SPEC.md`. Conventions go in
   config and tooling.

If a decision is easy to undo, don't write an ADR. Mention it in the PR.

- Number sequentially: `NNNN-short-title.md`.
- Don't edit an ADR once it's accepted. To change the decision, write a new
  ADR and mark the old one as superseded.

## Template

```markdown
# NNNN. Title

**Status:** Proposed | Accepted | Superseded by NNNN
**Date:** YYYY-MM-DD

## Context
What the situation is and why a decision is needed.

## Decision
What we chose.

## Consequences
What becomes easier, what becomes harder, what we'll revisit.
```

## Index

- [0001. Use a minimal, tool-agnostic form of spec-driven development](0001-adopt-minimal-tool-agnostic-sdd.md)
- [0002. Store notes as Markdown files in this repo](0002-notes-as-markdown-files-in-repo.md)
