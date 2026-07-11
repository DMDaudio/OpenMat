---
id: data-insights-table-analysis-ratios-thresholds
section: data-insights
topic: table-analysis
subtopic: ratios-thresholds
title: "Table Analysis: Ratios & Thresholds"
tags: [table-analysis, percent-change, ratios, thresholds]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Table Analysis presents a sortable table and a set of **Yes/No** (or True/False) statements you
must judge one at a time. Each row of statements is graded independently, so a single question is
really several mini-questions. The skill is reading the table precisely and testing each claim with
the least arithmetic possible.

## Core concepts

**Read the claim's quantifier first.** "Every," "at least one," "the greatest," "more than" — the
quantifier tells you what evidence settles the claim. An "every"/"all" claim is disproved by **one**
counterexample; a "there exists" claim is proved by one supporting case. Find that one case fast.

**Percent change is measured against the original.** For a jump from an old value to a new value,

\[\text{percent change} = \frac{\text{new} - \text{old}}{\text{old}} \times 100\%.\]

Always divide by the **old** value, not the new one — the most common table-analysis error.

**Turn a threshold into a target number.** Instead of computing an exact percent, convert "more than
40% above 90" into a concrete bar: 40% of 90 is 36, so the target is \(90 + 36 = 126\). Now you just
compare: is the new value above 126? This is faster and less error-prone than dividing.

**Only compute what the claim needs.** You rarely need every cell. For "greatest two-quarter total,"
sum each store's two columns and compare — ignore everything else.

## Worked examples

Using a table with Q1/Q2 units — Alpha (120, 150), Beta (200, 180), Gamma (90, 140):

**"Every store grew in Q2." → No.** Beta fell from 200 to 180. One counterexample settles it; you
needn't check the others once you find it.

**"Beta had the greatest two-quarter total." → Yes.** Totals: 270, 380, 230. Beta's 380 wins.

**"Gamma rose more than 40% from Q1 to Q2." → Yes.** Threshold: 40% of 90 = 36, target 126. Since
\(140 > 126\), the increase clears 40%. (Exact: \(50/90 \approx 55.6\%\).)

## Common traps

- **Dividing by the new value** when finding percent change — use the original as the base.
- **Over-computing.** Don't calculate every percent; convert thresholds to target numbers and compare.
- **Treating the statements as linked.** Each Yes/No row stands alone — judge it on its own evidence.

## Key takeaways

- Let the quantifier ("every," "at least one," "greatest") tell you what evidence to look for.
- Percent change divides by the **original** value.
- Convert a percent threshold into a concrete target number, then just compare.
- Evaluate each statement independently and compute only what that statement requires.
