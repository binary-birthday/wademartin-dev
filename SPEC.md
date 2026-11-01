# Spec: wademartin.dev

> The single source of truth for what this site should be **right now**.
> Every change that alters behaviour updates this file in the same PR.

**Status:** Draft · items marked _(open)_ are not yet decided.

## 1. Purpose

A public lab notebook for exploring and documenting ideas in platform
engineering, DevOps, MLOps and agentic development.

Experiments live in their own repos. Notes here summarise and link to them;
they never duplicate a repo's docs.

**Why a notebook:** dated notes with a status are the cheapest shape to keep
honest. A topic-based knowledge base needs regular upkeep, and a repo-only
index loses the reasoning. A note can still be updated or marked `outdated`,
but never has to be.

## 2. Audience

Developers, primarily teammates who arrive through a shared link.
Hiring managers are incidental, not a design target.

## 3. Success

- Writing and publishing a note is low effort.
- A shared link is all a reader needs to understand a note.

## 4. Constraints

- Very little maintenance time. Nothing on the site may need regular upkeep
  to stay correct.

## 5. Content model

The site has one content type: the **note**. Short and long writing differ
only in length.

### 5.1 Fields

| Field | Required | Notes |
|-------|----------|-------|
| `title` | yes | |
| `date` | yes | First published. |
| `summary` | yes | One sentence. Used for link previews and lists. |
| `status` | yes | `exploring`, `settled` or `outdated` (see 5.2). |
| `tags` | yes | One or more, from the fixed list (see 5.3). |
| `updated` | no | Set when a note changes in substance. |
| `superseded_by` | no | Slug of the newer note. Used with `outdated`. |
| `links` | no | Repos and other evidence. |

### 5.2 Status

- `exploring`: rough thinking; may change.
- `settled`: I'd stand behind this.
- `outdated`: kept for history; points to its replacement if one exists.

### 5.3 Tags

A fixed list kept in one config file. Adding a tag is a deliberate change.

Initial list _(open)_: `platform`, `devops`, `mlops`, `sdd`, `agents`.

## 6. Pages

| Page | Contents |
|------|----------|
| Home | One-line description and the latest notes. |
| Note | The note, with status and dates prominent. |
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
- `outdated` notes show a clear banner, linking `superseded_by` if set.
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
- Domain.
