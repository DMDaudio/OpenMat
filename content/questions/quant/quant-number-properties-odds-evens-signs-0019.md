---
id: quant-number-properties-odds-evens-signs-0019
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [parity, odd-even, consecutive-integers, must-be-true]
choices:
  A: "n^2 + n"
  B: "n^2 + n + 1"
  C: "2n^2 + 3n"
  D: "n^2 - 1"
  E: "3n"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(n\) is an integer, which of the following is always odd?

## Explanation

The unlock is recognizing \(n^2 + n = n(n+1)\), the product of two **consecutive** integers. One of
any two consecutive integers is even, so \(n(n+1)\) is **always even**. Now check each choice:

- **A. \(n^2 + n = n(n+1)\)** — always even, never odd.
- **B. \(n^2 + n + 1\)** — an even number plus 1 is **always odd**. ✓
- **C. \(2n^2 + 3n = n(2n + 3)\)** — if \(n\) is even this is even; if \(n\) is odd it is odd. Not
  always odd.
- **D. \(n^2 - 1\)** — for \(n = 3\) this is 8 (even), for \(n = 2\) it is 3 (odd). Not always odd.
- **E. \(3n\)** — has the same parity as \(n\), which varies.

Only **B** is odd for every integer \(n\).

## Hints

- Factor \(n^2 + n\). What do you notice about \(n\) and \(n + 1\)?
- A product of two consecutive integers is always even — so "that product plus 1" is always odd.
