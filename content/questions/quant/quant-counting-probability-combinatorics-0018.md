---
id: quant-counting-probability-combinatorics-0018
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: easy
tags: [combinatorics, permutations, factorial, arrangements]
choices:
  A: "15"
  B: "20"
  C: "25"
  D: "60"
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

Arranging all 5 distinct books in order is a **permutation of 5 items**: the first position can be
any of 5 books, the next any of the remaining 4, then 3, then 2, then 1:

\[5! = 5 \times 4 \times 3 \times 2 \times 1 = 120\]

**The traps:**

- **A (15)** *adds* the descending counts \((5 + 4 + 3 + 2 + 1)\) instead of multiplying them.
- **B (20)** stops after two positions \((5 \times 4)\) — that counts arrangements of only 2 of the
  books, not all 5.
- **D (60)** stops after three positions \((5 \times 4 \times 3)\), arranging only 3 books.
- **C (25)** computes \(5^2\), as if each slot could independently be any of 5 books; but once a book
  is placed it can't be reused, so the pool shrinks each step.

Only **E (120)** multiplies all the way down to 1.

## Hints

- Once a book is placed in a spot, it can't go in another — so the number of choices drops by one at each position.
- Arranging all \(n\) distinct items in a row is \(n!\).
