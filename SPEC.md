# Spec: wademartin.dev

This file describes what the site should be now. Any PR that changes what
the site does also updates this file.

Status: draft. Items marked _(open)_ are not decided yet.

Domain: `wademartin.dev`.

Stack: Astro with TypeScript, using pnpm. Built and checked in GitHub
Actions, hosted on Netlify.

## 1. Purpose

A public notebook where I try out ideas in DevOps, developer experience,
web development, AI apps, agents and spec-driven development, and write up
what I find.

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

Each note is a Markdown file in this repo, with its fields in YAML
frontmatter. See ADR-0002.

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

Initial list: `devops`, `dx`, `webdev`, `ai`, `agents`, `spec-driven`.

## 6. Pages

| Page | Contents |
|------|----------|
| Home | One-line description, the search box (6.1) and all notes, newest first. |
| Note | The note. Status and dates are easy to see. |
| Tag | All notes with that tag. |
| Browse | Notes grouped by status, and every tag with its count. Works without JavaScript. |
| About | Who I am, in a few lines. |
| Feed | RSS of all notes. |

### Look

- Dark theme only. The site ignores the visitor's light or dark setting.
- Colours: navy background, teal for links and `settled`, magenta for
  highlights and `exploring`. Exact values live in `src/theme.ts`.
- Fonts: Bricolage Grotesque for headings, Newsreader for body text,
  JetBrains Mono for code and metadata. Font files are served from the site
  itself, not a third-party font service.
- Layout: a lab notebook.
  - A faint teal grid behind the page.
  - In note lists, each note has a stripe down its left edge in its status
    colour.
  - On note pages, status, dates, tags and links sit in a margin beside the
    text. On narrow screens they move above it.
  - A code block can show its file name in a magenta tab
    (```` ```ts title="src/schema.ts" ````).

### 6.1 Search box

- One search box on the home page, labelled "Search notes".
- When opened, it lists every status and tag with the number of notes each
  would leave. Choices that would leave none are shown greyed out.
- Picking a status or tag adds it as a chip. Notes must match one of the
  picked statuses and all of the picked tags.
- Typed text filters notes by title, summary, tag and status. Matching notes
  are listed in the suggestions; picking one goes to it.
- The current filter is kept in the URL (`?status=…&tag=…&q=…`), so a
  filtered view has its own link.
- Works with a keyboard: `/` focuses the box, arrow keys move, Enter picks,
  Backspace removes the last chip, Esc closes the suggestions.
- Without JavaScript, the box is a link to the Browse page.

## 7. URLs

- Notes live at `/notes/<slug>/`. No date in the URL.
- Tag pages live at `/tags/<tag>/`.
- The Browse page lives at `/browse/`.
- The feed lives at `/rss.xml`.
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
- Every text colour pair in `src/theme.ts` has a contrast ratio of at least
  4.5:1. A unit test checks this.
- No broken internal or external links.
- Every merge to `main` deploys automatically.
- Every PR gets a preview build.

## 9. Non-goals

- Other content types: case studies, series, a "now" page, a projects index.
- Comments, featured or curated sections.
- A separate drafts area (`exploring` covers it).
- CMS, backend, auth or contact forms.
- Tracking cookies.
- Running experiments in this repo; they get their own repos.

## 10. Open questions

None right now.
