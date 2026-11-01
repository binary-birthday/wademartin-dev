# Spec: wademartin.dev

This file describes what the site should be now. Any PR that changes what
the site does also updates this file.

Status: draft. Items marked _(open)_ are not decided yet.

Domain: `wademartin.dev`.

## 1. Purpose

A public notebook where I try out ideas in platform engineering, DevOps,
MLOps and agentic development, and write up what I find.

Experiments live in their own repos. A note here sums up an experiment and
links to it. It doesn't copy the repo's docs.

Why a notebook: dated notes with a status stay accurate without upkeep. A
set of topic pages would need regular updates, and a plain list of repos
would lose the reasoning. A note can be updated or marked `outdated`, but it
never has to be.

## 2. Audience

Developers.

## 3. Success

- Writing and publishing a note takes little effort.
- Someone who only has the link can understand the note.

## 4. Constraints

- I have very little time to maintain it. Nothing on the site should need
  regular updates to stay correct.

## 5. Content model

The site has one kind of content: the note. Short and long notes are the
same thing at different lengths.

### 5.1 Fields

| Field | Required | Notes |
|-------|----------|-------|
| `title` | yes | |
| `date` | yes | First published. |
| `summary` | yes | One sentence. Used for link previews and lists. |
| `status` | yes | `exploring`, `settled` or `outdated` (see 5.2). |
| `tags` | yes | One or more, from the fixed list (see 5.3). |
| `updated` | no | Set when a note changes in a meaningful way. |
| `superseded_by` | no | Slug of the newer note. Used with `outdated`. |
| `links` | no | Repos and other evidence. |

### 5.2 Status

- `exploring`: rough thinking; may change.
- `settled`: I'd stand behind this.
- `outdated`: kept for history; points to its replacement if one exists.

### 5.3 Tags

Tags come from a fixed list kept in one config file. To add a tag, add it
to the list.

Initial list _(open)_: `platform`, `devops`, `mlops`, `sdd`, `agents`.

## 6. Pages

| Page | Contents |
|------|----------|
| Home | One-line description and the latest notes. |
| Note | The note. Status and dates are easy to see. |
| Tag | All notes with that tag. |
| About | Who I am, in a few lines. |
| Feed | RSS of all notes. |

## 7. URLs

- Notes live at `/notes/<slug>`. No date in the URL.
- A published URL never breaks. Renamed notes redirect from the old slug.

## 8. Acceptance criteria

### Content
- The build fails if a note is missing a required field.
- The build fails if a note uses a tag not in the fixed list.
- The build fails if `status` is not one of the allowed values.
- The build fails if `superseded_by` points to a note that doesn't exist.

### Display
- Each note shows its status, date and, if set, updated date.
- `outdated` notes show a banner, with a link to `superseded_by` if set.
- Each note page has a title and description for link previews, taken from
  `title` and `summary`.
- Home lists notes newest first.
- Each tag has a page listing its notes newest first.
- The feed includes every note with title, summary, date and link.

### Quality
- Lighthouse ≥ 95 in every category on Home and a typical note.
- Accessible to WCAG 2.2 AA.
- No broken internal or external links.
- Every merge to `main` deploys automatically.
- Every PR gets a preview build.

## 9. Non-goals

- Other content types: case studies, series, a "now" page, a projects index.
- Search, comments, featured or curated sections.
- A separate drafts area (`exploring` covers it).
- CMS, backend, auth or contact forms.
- Tracking cookies.
- Running experiments in this repo; they get their own repos.

## 10. Open questions

- Initial tag list (5.3).
- Content format and where content is stored.
- Stack and hosting.
