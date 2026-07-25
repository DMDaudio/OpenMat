---
id: quant-counting-probability-combinatorics-0021
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: hard
tags: [combinatorics, combinations, restricted-selection]
choices:
  A: "16"
  B: "60"
  C: "120"
  D: "126"
  E: "3024"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A 4-person committee is to be formed from a pool of 5 men and 4 women, and it must contain
**exactly 2 men and 2 women**. How many different committees are possible?

## Explanation

Handle the two requirements as independent stages and **multiply**. Choosing the men and choosing
the women are separate unordered selections:

\[\binom{5}{2} \times \binom{4}{2} = \frac{5 \times 4}{2} \times \frac{4 \times 3}{2} = 10 \times 6 = 60\]

Each of the 10 possible pairs of men can be teamed with each of the 6 possible pairs of women, so
the counts multiply.

**The trap:** answer **A (16)** *adds* the two combinations (\(10 + 6\)) instead of multiplying —
but you need one pair from each group *together*, which is a product, not a sum. **D (126)** is
\(\binom{9}{4}\), the number of ways to pick any 4 of the 9 people while **ignoring** the 2-and-2
restriction. **C (120)** counts the women as an *ordered* pair, using \({}_4P_2 = 12\) instead of
\(\binom{4}{2} = 6\) (\(10 \times 12 = 120\)) — but committee members have no order. **E (3024)** is
\({}_9P_4\), ordering all four choices and dropping the restriction entirely.

## Hints

- Split the committee into "pick the men" and "pick the women" — two separate choices.
- Each subgroup is unordered (a combination); then combine the two independent choices by
  multiplying.

