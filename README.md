# OpenMat

**Open, community-sourced GMAT prep. Free forever.**

GMAT prep courses cost hundreds of dollars ($150–350 for a self-study course, far
more for tutoring). OpenMat is a community-built alternative: an openly-licensed
curriculum, lesson library, and original question bank for the **GMAT Focus Edition** —
written and reviewed by the people using it, and free for anyone to study, fork,
translate, or remix.

**▶ Study site: <https://dmdaudio.github.io/OpenMat/>** — practice with instant feedback,
worked explanations, hints, a per-question timer with GMAT-pace targets, and a local profile
that tracks your progress (saved in your browser, with export/import to move it between devices).

> **Status: early / bootstrapping.** OpenMat started as an auto-generated 60-day
> study course. It is being reworked into a collaborative platform. The scaffolding
> (contribution workflow, content schema, taxonomy) is in place; the content library
> and the study site are being built out. **Contributors welcome — this is the ground floor.**

## Why OpenMat

- **Free, forever.** No paywall, no "premium tier." Licensed openly (see [License](#license)).
- **Structured, not a forum dump.** Every question and lesson is structured data tagged
  to a shared topic taxonomy, so the content can power search, filtering, difficulty
  bands, and (eventually) adaptive practice — not just a pile of posts.
- **Quality-controlled.** Every question goes through a review workflow
  (`draft → in-review → verified`). A question with a wrong answer is worse than no
  question, so nothing ships as "verified" until a second contributor checks it.
- **Original content only.** We do **not** host real GMAT questions — those are
  copyrighted by GMAC. Everything here is written from scratch. See
  [CONTRIBUTING.md](CONTRIBUTING.md).
- **Portable.** It's plain Markdown + JSON in a Git repo. Fork it, translate it, build
  your own app on top of it.

## What's here

| Path | What it is |
|------|-----------|
| [`curriculum.md`](curriculum.md) | **The canonical GMAT Focus syllabus & topic taxonomy.** Section → topic → subtopic slugs that all content is tagged against. Start here. |
| [`CONTENT_SCHEMA.md`](CONTENT_SCHEMA.md) | The format for questions and lessons (Markdown + YAML front-matter) and how the fields work. |
| [`content/questions/`](content/questions/) | The question bank, one file per question, organized by section. |
| [`content/lessons/`](content/lessons/) | Concept lessons, one file per topic. |
| [`content/schema/`](content/schema/) | JSON Schema files that validate question/lesson front-matter. |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to add a question or lesson, the originality rules, and the review workflow. |
| [`docs/`](docs/) | The study site (static HTML/CSS/JS). Renders the content into a practice + browse + lessons experience. Deployed via GitHub Pages. |
| [`scripts/`](scripts/) | `build.mjs` regenerates the site's content index from `content/`; `serve.mjs` serves the site locally. |
| [`SETUP.md`](SETUP.md) | How to turn on optional GitHub sign-in + cross-device sync (Supabase). |
| [`supabase/`](supabase/) | Database schema + Row-Level Security for the optional accounts backend. |
| [`curriculum.html`](curriculum.html) | The original interactive study-plan hub (legacy). |

## Accounts & sync (optional)

Sign-in and cross-device progress sync are **built in but off by default** — the site works fully
local-only until configured. It uses [Supabase](https://supabase.com) client-side auth + Row-Level
Security, so there's still **no server to run and no cost** on the free tier. To enable it, follow
[`SETUP.md`](SETUP.md) (~10 min: create a Supabase project, a GitHub OAuth app, run
[`supabase/schema.sql`](supabase/schema.sql), and paste two public keys into
[`docs/config.js`](docs/config.js)).

## Run it locally

No dependencies — just Node.

```sh
node scripts/build.mjs   # regenerate docs/data/content.json from content/
node scripts/serve.mjs   # serve the site at http://localhost:8080
```

The `content.json` index is rebuilt automatically in CI whenever content changes, so the live
site stays current — you only need `build.mjs` locally to preview your own additions.

## The GMAT Focus Edition

OpenMat targets the **current** exam — the GMAT Focus Edition — not the retired classic
format. Three sections, 45 minutes each:

- **Quantitative Reasoning** — Problem Solving (algebra, arithmetic, word problems, number
  properties). *No geometry, no Data Sufficiency in this section.*
- **Verbal Reasoning** — Critical Reasoning + Reading Comprehension. *No Sentence Correction.*
- **Data Insights** — Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics
  Interpretation, Two-Part Analysis.

(The old AWA essay and Sentence Correction were removed when the classic GMAT was retired in
early 2024.)

## Contributing

The whole point is that you contribute. The highest-value things right now:

1. **Write original questions** with full worked explanations — see
   [CONTRIBUTING.md](CONTRIBUTING.md) and copy an example from
   [`content/questions/`](content/questions/).
2. **Write concept lessons** for topics in [`curriculum.md`](curriculum.md).
3. **Review and verify** existing `in-review` questions (check the answer, the explanation,
   and the difficulty tag).

You don't need to be an expert to help — reviewing, fixing typos, and reporting bad answers
all count. Open an issue or a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md) for the
full workflow and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community expectations.

## License

- **Content** (questions, lessons, curriculum, text) — [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0). See [LICENSE-CONTENT.md](LICENSE-CONTENT.md).
- **Code** (schemas, tooling, the site) — [MIT](LICENSE).

By contributing you agree your contribution is your **own original work** and is licensed
under the above.

---

*OpenMat is an independent, community project. It is not affiliated with or endorsed by GMAC,
the Graduate Management Admission Council, which owns the GMAT™ trademark and the official exam.*
