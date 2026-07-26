---
id: quant-counting-probability-combinatorics-0032
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: easy
tags: [combinatorics, permutations, factorial, arrangement]
choices:
  A: "20"
  B: "25"
  C: "60"
  D: "120"
  E: "3125"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

In how many different orders can 5 distinct books be arranged on a shelf?

## Explanation

Every book is distinct and every position is distinct, so this is a straight arrangement of all
5 objects:

\[5! = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120\]

**The trap:** answer **E (3125)** is \(5^5\), which would count arrangements as if each of the 5
slots could independently hold any of the 5 books — but once a book is placed it cannot be reused,
so the choices shrink \(5 \to 4 \to 3 \to \dots\). Answer **A (20)** is \(5 \times 4\) (arranging
only 2 of the books), and **C (60)** is \(\tfrac{5!}{2}\). Answer **B (25)** is \(5^2\).

## Hints

- Placing the first book leaves 4 choices for the next slot, then 3, and so on.
- Multiply the shrinking number of choices: that product is \(5!\).
