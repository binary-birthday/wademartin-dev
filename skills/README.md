# Skills

A skill is a step-by-step guide for a task that comes up often. People and
agents can both use them. There are none yet. Add one only after doing a
task a few times, once the steps have stopped changing.

## Rules

- A skill explains how to do a task. The rules live in `CONTRIBUTING.md`. A
  skill can't add to them or change them.
- Write skills in plain Markdown. They must not need any particular tool.
- Each skill gets its own folder: `skills/<name>/SKILL.md`, plus any files it
  needs.

## Format

`SKILL.md` uses the open Agent Skills format, so tools that support it can
read it directly:

```markdown
---
name: write-note
description: Draft a note with the fields listed in SPEC.md section 5.
---

# Write a note

Steps...
```

If a tool looks for skills somewhere else, point it here with a local symlink
and git-ignore the link.

## Possible first skills

- `write-experiment-note`, if a common structure shows up in practice.
- `add-adr`, if ADRs become frequent.
