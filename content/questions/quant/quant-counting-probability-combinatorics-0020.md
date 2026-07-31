---
id: quant-counting-probability-combinatorics-0020
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, combinations, groups, and-rule]
choices:
  A: "10"
  B: "16"
  C: "60"
  D: "126"
  E: "240"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A committee of 4 people is formed from 5 men and 4 women. How many committees consist of exactly
2 men and 2 women?

## Explanation

Build the committee in two independent stages — choose the men **and** choose the women — then
multiply the counts (order doesn't matter within either group, so use combinations):

\[C(5,2) \times C(4,2) = 10 \times 6 = 60\]

Here \(C(5,2) = \dfrac{5 \times 4}{2} = 10\) and \(C(4,2) = \dfrac{4 \times 3}{2} = 6\).

**The traps:**

- **B (16)** *adds* the two counts \((10 + 6)\) instead of multiplying. You need 2 men *and* 2 women,
  so the stages multiply.
- **A (10)** stops after choosing the men \((C(5,2))\) and forgets to choose the women.
- **D (126)** ignores the "exactly 2 and 2" requirement and just picks any 4 of the 9 people
  \((C(9,4) = 126)\).
- **E (240)** treats the picks as ordered, using permutations \(P(5,2) \times P(4,2) = 20 \times 12\);
  but the two men on a committee aren't ranked, so order shouldn't be counted.

Only **C (60)** multiplies the two combinations.

## Hints

- "Exactly 2 men and 2 women" is a choice from each group — choose men AND women, then multiply.
- Within each group the members aren't ranked, so use combinations, and \(C(5,2)=10\), \(C(4,2)=6\).
