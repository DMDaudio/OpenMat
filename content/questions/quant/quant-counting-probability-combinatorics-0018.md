---
id: quant-counting-probability-combinatorics-0018
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: easy
tags: [combinatorics, factorial, arrangements]
choices:
  A: "5"
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

In how many different orders can 5 distinct books be arranged in a row on a shelf?

## Explanation

Arranging \(n\) **distinct** items in a row is a straight factorial count. There are 5 choices for
the leftmost slot, then 4 for the next (one book is already placed), then 3, then 2, then 1:

\[5! = 5 \times 4 \times 3 \times 2 \times 1 = 120\]

**The trap:** answer **B (20)** stops after two factors (\(5 \times 4\)), as if only the first two
positions mattered — but every one of the 5 positions still needs to be filled. **C (25)** squares
the count (\(5^2\)), which would let a book repeat in multiple slots; here each book is used exactly
once. **D (60)** is \(5!/2\), an unwarranted division by 2 (there is no symmetry to remove — the
books are all different and the shelf has a fixed left-to-right order). **A (5)** just counts the
books, not their orderings.

## Hints

- Fill the positions one at a time: how many books can go first, then second, and so on?
- Arranging \(n\) distinct items in a row is \(n!\).
