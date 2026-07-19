# OpenMat Curriculum — GMAT Focus Edition Taxonomy

> **This is the canonical topic taxonomy for OpenMat.** Every question and lesson is tagged with
> a `section`, `topic`, and `subtopic` drawn from the slugs in this document. It doubles as the
> study syllabus: work top to bottom within a section to cover the exam.
>
> When you add content, use the exact slugs below. Proposing a **new** topic or subtopic? Open a
> PR editing this file so the taxonomy stays the single source of truth.

The OpenMat curriculum targets the **GMAT Focus Edition**, the current exam (the classic format
with AWA and Sentence Correction was retired in early 2024). Three sections, 45 minutes each,
scored 60–90:

| Section (`section` slug) | Question count | What it covers |
|--------------------------|----------------|----------------|
| **Quantitative Reasoning** (`quant`) | 21 | Problem Solving only — algebra, arithmetic, word problems, number properties. **No geometry, no Data Sufficiency.** |
| **Verbal Reasoning** (`verbal`) | 23 | Critical Reasoning + Reading Comprehension. **No Sentence Correction.** |
| **Data Insights** (`data-insights`) | 20 | Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, Two-Part Analysis. |

---

## Quantitative Reasoning (`quant`)

All Quant questions are `type: problem-solving`. Focus Quant excludes geometry.

| `topic` | `subtopic` slugs |
|---------|------------------|
| `arithmetic` | `fractions-decimals`, `percents-ratios`, `exponents-roots` |
| `number-properties` | `factors-multiples`, `odds-evens-signs`, `remainders` |
| `algebra` | `linear-equations`, `quadratics`, `inequalities-absolute-value`, `sequences-functions` |
| `word-problems` | `translation`, `rates-speed-distance`, `work-rate`, `mixtures`, `overlapping-sets`, `interest` |
| `statistics` | `descriptive`, `standard-deviation` |
| `counting-probability` | `combinatorics`, `probability` |

## Verbal Reasoning (`verbal`)

Focus Verbal excludes Sentence Correction.

| `topic` | `type` | `subtopic` slugs |
|---------|--------|------------------|
| `critical-reasoning` | `critical-reasoning` | `argument-structure`, `assumptions`, `strengthen-weaken`, `inference`, `evaluate-flaw-boldface`, `paradox` |
| `reading-comprehension` | `reading-comprehension` | `main-idea`, `detail-inference`, `structure-tone`, `dense-passages` |

## Data Insights (`data-insights`)

Data Insights blends quantitative and verbal reasoning across five formats. Data Sufficiency
now lives here (not in Quant).

| `topic` | `type` | `subtopic` slugs |
|---------|--------|------------------|
| `data-sufficiency` | `data-sufficiency` | `fundamentals`, `divisibility`, `number-properties`, `algebra`, `statistics`, `word-problems`, `overlapping-sets` |
| `table-analysis` | `table-analysis` | `sorting-filtering`, `ratios-thresholds` |
| `graphics-interpretation` | `graphics-interpretation` | `charts-scatterplots`, `trends` |
| `two-part-analysis` | `two-part-analysis` | `tradeoffs`, `simultaneous-conditions` |
| `multi-source-reasoning` | `multi-source-reasoning` | `synthesis`, `inference` |

---

## Suggested study path

The taxonomy is ordered so you can study a section top to bottom. A balanced plan:

1. **Foundations** — Quant `arithmetic` and `number-properties`; Verbal `critical-reasoning/argument-structure`; Data Insights `data-sufficiency` basics.
2. **Core skills** — Quant `algebra` and `word-problems`; Verbal `assumptions`, `strengthen-weaken`, RC `main-idea`/`detail-inference`; Data Insights `table-analysis`, `graphics-interpretation`.
3. **Advanced** — Quant `statistics`, `counting-probability`; Verbal `evaluate-flaw-boldface`, `paradox`, RC `dense-passages`; Data Insights `two-part-analysis`, `multi-source-reasoning`.
4. **Test readiness** — timed mixed sets per section, error-log review, pacing (~1.9–2.2 min/question).

## Coverage status

Early days — the bank is growing. Rough coverage so far (a contributor could automate this
count from the front-matter):

- **Quant** — arithmetic (fractions, percents/ratios, exponents & roots), number properties, algebra (linear, quadratics, inequalities), word problems (rates, work, sets), counting & probability, statistics (mean, median, weighted average, standard deviation).
- **Verbal** — Critical Reasoning (assumptions, strengthen/weaken, inference, flaw) and Reading Comprehension (main idea, detail/inference).
- **Data Insights** — Data Sufficiency across fundamentals, divisibility, number properties, algebra, statistics, word problems, and overlapping sets.

Still thin everywhere, and the multi-part Data Insights formats (Table Analysis, Graphics
Interpretation, Two-Part Analysis, Multi-Source Reasoning) need a study-site UI before content
is added. See [`content/`](content/) for what exists, and [CONTRIBUTING.md](CONTRIBUTING.md) to add more.

---

*The legacy 60-day auto-generated plan and its interactive hub ([`curriculum.html`](curriculum.html))
are kept for reference while the community study site is built. New content should follow the
taxonomy above, not the old day-by-day schedule.*
