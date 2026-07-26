---
id: quant-counting-probability-combinatorics-0033
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, combinations, multiplication-principle]
choices:
  A: "16"
  B: "60"
  C: "40"
  D: "126"
  E: "3600"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A committee of 5 is to be formed from a group of 5 seniors and 4 juniors. If the committee must
contain exactly 3 seniors and exactly 2 juniors, how many different committees are possible?

## Explanation

Choosing the seniors and choosing the juniors are two independent stages, and within each stage
order does not matter — so use combinations and **multiply** (the "AND" principle):

\[C(5,3) \times C(4,2) = 10 \times 6 = 60\]

Here \(C(5,3) = \dfrac{5\cdot4\cdot3}{3!} = 10\) and \(C(4,2) = \dfrac{4\cdot3}{2!} = 6\).

**The trap:** answer **A (16)** *adds* the two counts (\(10 + 6\)) instead of multiplying — but you
need a group of seniors **and** a group of juniors together, so the counts multiply. Answer
**C (40)** swaps the roles, computing \(C(5,2)\times C(4,3) = 10 \times 4\) (2 seniors, 3 juniors).
Answer **D (126)** is \(C(9,5)\), which ignores the required senior/junior split. Answer
**E (3600)** treats each selection as ordered (\(P(5,3)\times P(4,2)\)).

## Hints

- Count the ways to pick the seniors and the ways to pick the juniors separately.
- "3 seniors AND 2 juniors" — do the two counts add or multiply?
- Within each group, does the order you pick people in matter?
