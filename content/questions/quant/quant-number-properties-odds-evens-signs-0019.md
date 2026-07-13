---
id: quant-number-properties-odds-evens-signs-0019
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [parity, consecutive-integers, must-be-true]
choices:
  A: "\(k^2 + 1\)"
  B: "\(k^2 + k\)"
  C: "\(2k + 1\)"
  D: "\(k^2 + k + 1\)"
  E: "\(3k\)"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(k\) is a positive integer, which of the following is always even?

## Explanation

Test each choice against both parities of \(k\), or use parity rules directly.

- **A. \(k^2 + 1\):** if \(k\) is even, \(k^2\) is even and \(k^2 + 1\) is **odd**. Not always even.
- **B. \(k^2 + k = k(k+1)\):** this is the product of two **consecutive** integers, one of which is
  always even. So \(k(k+1)\) is **always even**. ✓
- **C. \(2k + 1\):** \(2k\) is even, so \(2k + 1\) is always **odd**.
- **D. \(k^2 + k + 1 = k(k+1) + 1\):** an even number plus \(1\) is always **odd**.
- **E. \(3k\):** has the parity of \(k\); if \(k\) is odd (e.g. \(k = 1\)), \(3k = 3\) is **odd**.

Only **B** is guaranteed even.

## Hints

- Try \(k = 1\) and \(k = 2\) in each choice and keep only the ones that stay even.
- Factor \(k^2 + k\) — what do you know about the product of two consecutive integers?
