---
id: quant-counting-probability-combinatorics-0002
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: easy
tags: [combinatorics, permutations, factorial]
choices:
  A: "15"
  B: "20"
  C: "24"
  D: "25"
  E: "120"
answer: E
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

In how many different ways can 5 distinct books be arranged in a row on a shelf?

## Explanation

Arranging \(n\) distinct items in a row is \(n!\). With 5 books:

\[5! = 5 \times 4 \times 3 \times 2 \times 1 = 120\]

Think of it as filling positions left to right: 5 choices for the first slot, 4 for the next, then
3, 2, 1 — multiplied together.

**Traps:**
- **A (15)** *adds* \(5 + 4 + 3 + 2 + 1\) instead of multiplying.
- **B (20)** stops after two factors \((5 \times 4)\).
- **C (24)** is \(4!\) — arranging only 4 of the books.
- **D (25)** is \(5^2\), treating each slot as having all 5 books available (no removal after
  placing one).

## Hints

- "Arrange all \(n\) distinct items in a row" is exactly \(n!\).
- Each book used up reduces the choices for the next slot: \(5 \times 4 \times 3 \times 2 \times 1\).
