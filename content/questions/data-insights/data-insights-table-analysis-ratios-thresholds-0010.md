---
id: data-insights-table-analysis-ratios-thresholds-0010
section: data-insights
topic: table-analysis
subtopic: ratios-thresholds
type: table-analysis
difficulty: medium
tags: [table-analysis, percent-change, thresholds]
parts:
  Claim1: "Yes|No"
  Claim2: "Yes|No"
  Claim3: "Yes|No"
answer: "Claim1=No; Claim2=Yes; Claim3=Yes"
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

The table shows units sold by three stores in the first two quarters of a year.

| Store | Q1 units | Q2 units |
|-------|---------:|---------:|
| Alpha |      120 |      150 |
| Beta  |      200 |      180 |
| Gamma |       90 |      140 |

For each claim, select **Yes** if it is supported by the table and **No** if it is not.

- **Claim 1.** Every store sold more units in Q2 than in Q1.
- **Claim 2.** Beta had the greatest two-quarter total (Q1 + Q2) of the three stores.
- **Claim 3.** Gamma's Q2 units were more than 40% above its Q1 units.

## Explanation

Work one claim at a time; each is a quick check, not a calculation marathon.

**Claim 1 — No.** Alpha (120 → 150) and Gamma (90 → 140) rose, but **Beta fell** from 200 to 180.
A single counterexample makes an "every" statement false.

**Claim 2 — Yes.** Compute the two-quarter totals: Alpha \(= 120 + 150 = 270\), Beta \(= 200 + 180 = 380\),
Gamma \(= 90 + 140 = 230\). Beta's 380 is the largest.

**Claim 3 — Yes.** Gamma went from 90 to 140, an increase of 50. As a percent of the original,

\[\frac{50}{90} \approx 55.6\% ,\]

which is more than 40%. (Shortcut: 40% of 90 is 36, so 90 + 36 = 126; since 140 > 126, the increase
clears the 40% threshold.)

So the answers are **No, Yes, Yes**.

The trap on Claim 3 is dividing by the wrong base — percent change is always measured against the
**original** value (90), not the new one (140).

## Hints

- For "every"-type claims, hunt for one counterexample before checking the rest.
- Percent increase = (new − old) / **old**. Or compare against a threshold: 40% of 90 is 36.
