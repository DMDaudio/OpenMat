---
id: quant-number-properties-odds-evens-signs-0019
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [parity, odd-even, must-be]
choices:
  A: "xy"
  B: "x + 2y"
  C: "x - y"
  D: "x^2 + y^2"
  E: "2x + y"
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

A sum of two integers is odd exactly when **one is even and the other is odd**. So among \(x\) and
\(y\), one is even and one is odd — you don't know which, but you know the parities differ.

Test each option with that fact (and remember: even × anything = even; adding an even number
never changes parity):

- **(A) \(xy\)** — one factor is even, so the product is **even**. This must be even. ✓
- (B) \(x + 2y\) — \(2y\) is even, so this has the same parity as \(x\), which could be odd or even.
  Not determined.
- (C) \(x - y\) — a difference of one even and one odd is **odd**. Never even.
- (D) \(x^2 + y^2\) — squaring preserves parity, so this is (even) + (odd) = **odd**. Never even.
- (E) \(2x + y\) — \(2x\) is even, so this has the same parity as \(y\), which could be odd or even.
  Not determined.

Only (A) is guaranteed to be even, so the answer is **A**.

The key trap is (C) and (D): both are guaranteed to have a *fixed* parity, but that parity is
**odd**, not even — the opposite of what the question asks.

## Hints

- "\(x + y\) is odd" forces one of \(x, y\) to be even and the other odd.
- A product with at least one even factor is always even; adding an even number never flips parity.
