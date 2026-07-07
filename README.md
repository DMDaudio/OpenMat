# OpenMat

**Open, community-sourced GMAT prep. Free forever.**

GMAT prep courses cost hundreds of dollars ($150–350 for a self-study course, far
more for tutoring). OpenMat is a community-built alternative: an openly-licensed
curriculum, lesson library, and original question bank for the **GMAT Focus Edition** —
written and reviewed by the people using it, and free for anyone to study, fork,
translate, or remix.

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
| [`curriculum.html`](curriculum.html) | The original interactive study-plan hub (legacy; kept while the new study site is built). |

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
