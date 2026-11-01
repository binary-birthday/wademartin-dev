# Skills

Reusable, tool-agnostic procedures for recurring tasks, usable by humans and
agents. None yet: add one only when a task has been done a few times and the
steps have settled.

## Rules

- Skills describe **how** to do a task. Rules live in `CONTRIBUTING.md`;
  a skill never adds or overrides them.
- Plain Markdown, no tool-specific features required.
- One folder per skill: `skills/<name>/SKILL.md`, plus any supporting files.

## Format

`SKILL.md` follows the open Agent Skills layout, so tools that support it can
load it directly:

```markdown
---
name: write-note
description: Draft a note with the fields defined in SPEC.md §5.
---

# Write a note

Steps...
```

Tools that discover skills in their own location can be pointed here with a
local, git-ignored symlink.

## Candidates

- `write-experiment-note`: only if a common structure emerges from practice.
- `add-adr`: if ADRs become frequent.
