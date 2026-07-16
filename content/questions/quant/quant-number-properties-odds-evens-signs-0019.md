---
id: quant-number-properties-odds-evens-signs-0019
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [parity, odd-even, must-be-true]
choices:
  A: "\(2n + 1\)"
  B: "\(3n\)"
  C: "\(n^2 + n\)"
  D: "\(n^2 + 1\)"
  E: "\(n^3 - n + 1\)"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(n\) is an integer, which of the following must be even?

## Explanation

"Must be even" means even for **every** integer \(n\) — so a single odd result kills a choice.

- **C: \(n^2 + n = n(n+1)\)** is the product of two *consecutive* integers. One of any two
  consecutive integers is even, so the product is always even. **This is the answer.**

Check the others fail for at least one \(n\):

- **A: \(2n + 1\)** is even plus 1 → always **odd**.
- **B: \(3n\)** — at \(n = 1\) it's 3, odd.
- **D: \(n^2 + 1\)** — at \(n = 2\) it's 5, odd.
- **E: \(n^3 - n + 1 = (n-1)n(n+1) + 1\)** — the product of three consecutive integers is even, so
  this is even + 1 → always **odd**.

## Hints

- "Must be even" fails the moment you find one odd result — try \(n = 1\) and \(n = 2\).
- A product of consecutive integers is always even. Can you rewrite a choice in that form?
