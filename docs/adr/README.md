# Architecture Decision Records

Record **architecturally significant** decisions only: ones that shape the
system's structure, quality attributes, dependencies, interfaces, or how it is
built and deployed. Expect few.

Write one when most of these hold:

1. **Hard to reverse.** Changing course later means real effort or migration.
2. **Real alternatives.** It was a trade-off, not an obvious default.
3. **Future "why?".** Someone will later wonder why it was done this way.
4. **Technical.** Product decisions belong in `SPEC.md`; conventions belong
   in config and tooling.

If a decision is cheap to undo, don't write an ADR. Note it in the PR.

- Number sequentially: `NNNN-short-title.md`.
- Once accepted, an ADR is not edited. To change a decision, write a new ADR
  that supersedes it and update the old one's status.

## Template

```markdown
# NNNN. Title

**Status:** Proposed | Accepted | Superseded by NNNN
**Date:** YYYY-MM-DD

## Context
What forces are at play and why a decision is needed.

## Decision
What we chose.

## Consequences
What becomes easier, what becomes harder, what we'll revisit.
```

## Index

- [0001. Adopt minimal, tool-agnostic SDD](0001-adopt-minimal-tool-agnostic-sdd.md)
