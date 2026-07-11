---
id: quant-number-properties-odds-evens-signs-0017
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: easy
tags: [parity, odd-even, must-be-true]
choices:
  A: "xy"
  B: "x - y"
  C: "x^2 + y^2"
  D: "2x + y"
  E: "xy + 1"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(x\) and \(y\) are integers and \(x + y\) is odd, which of the following must be even?

## Explanation

If \(x + y\) is odd, then one of \(x, y\) is even and the other is odd (a sum is odd only when you
mix parities). Test each choice against that fact.

- **A. \(xy\)** — one factor is even, and a product with any even factor is even. So \(xy\) is
  **always even**. ✓
- **B. \(x - y\)** — a difference has the same parity as the corresponding sum, so \(x - y\) is
  odd, just like \(x + y\).
- **C. \(x^2 + y^2\)** — squaring preserves parity, so this is \(\text{even} + \text{odd} = \text{odd}\).
- **D. \(2x + y\)** — \(2x\) is even, so this has the parity of \(y\), which could be either. Not
  guaranteed.
- **E. \(xy + 1\)** — from A, \(xy\) is even, so \(xy + 1\) is odd.

Only choice **A** must be even.

## Hints

- A sum of two integers is odd only when one is even and one is odd — so exactly one of \(x, y\) is even here.
- A product is even as soon as *any* factor is even.
