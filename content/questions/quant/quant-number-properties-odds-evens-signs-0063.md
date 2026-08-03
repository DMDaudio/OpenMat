---
id: quant-number-properties-odds-evens-signs-0063
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [parity, consecutive-integers, must-be-true]
choices:
  A: "n^2 + n"
  B: "n^2 + 1"
  C: "2n + 1"
  D: "n^2"
  E: "n^2 - 1"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(n\) is a positive integer, which of the following must be **even**?

## Explanation

Factor where you can, and test each expression against both parities of \(n\).

- **A. \(n^2 + n = n(n + 1)\)** — this is the product of two **consecutive** integers, and one of
  any two consecutive integers is always even. So \(n(n+1)\) is **always even**. ✓
- **B. \(n^2 + 1\)** — if \(n\) is even, \(n^2 + 1\) is odd. Not always even.
- **C. \(2n + 1\)** — always **odd** (an even number plus 1).
- **D. \(n^2\)** — has the same parity as \(n\), so it is odd whenever \(n\) is odd.
- **E. \(n^2 - 1 = (n-1)(n+1)\)** — if \(n\) is even, both factors are odd, giving an odd result.

Only **A** is guaranteed even, so the answer is **A**.

**The traps:** **D (\(n^2\))** relies on the false belief that squaring always yields an even
number. **B** and **E** look symmetric to A but flip to odd when \(n\) is even — the deciding test
is trying an even value of \(n\).

## Hints

- \(n^2 + n\) factors into \(n(n+1)\) — what is special about two consecutive integers?
- For each option, just try \(n = 2\) and \(n = 3\); the "must be even" answer survives both.
