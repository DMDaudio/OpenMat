---
id: quant-counting-probability-combinatorics-0019
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, combinations]
choices:
  A: "24"
  B: "56"
  C: "112"
  D: "168"
  E: "336"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A committee of 3 people is to be selected from a group of 8. How many different committees are
possible?

## Explanation

A committee is an **unordered** selection — the same three people form the same committee no matter
what order they're picked in — so this is a combination:

\[C(8,3) = \frac{8!}{3!\,5!} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = \frac{336}{6} = 56\]

**Traps:**
- **E (336)** is \(P(8,3) = 8 \times 7 \times 6\) — treating order as mattering, so each committee is
  counted \(3! = 6\) times.
- **C (112)** divides by 3 instead of \(3! = 6\) \((336/3)\).
- **D (168)** divides by \(2!\) instead of \(3!\) \((336/2)\).
- **A (24)** just computes \(8 \times 3\).

## Hints

- "Committee," "group," "selection" → order doesn't matter → combination.
- A combination is the permutation \(P(n,k)\) divided by \(k!\) to remove the internal orderings.
