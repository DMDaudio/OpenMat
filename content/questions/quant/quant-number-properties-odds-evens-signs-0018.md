---
id: quant-number-properties-odds-evens-signs-0018
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [signs, positive-negative, must-be-true]
choices:
  A: "a > 0"
  B: "a < 0"
  C: "b > 0"
  D: "c < 0"
  E: "b + c < 0"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(a\), \(b\), and \(c\) are nonzero numbers with \(abc > 0\) and \(bc < 0\), which of the
following must be true?

## Explanation

The key is that you can recover the sign of one factor from the signs of the rest. Write \(a\) in
terms of the two given products:

\[a = \frac{abc}{bc} = \frac{(\text{positive})}{(\text{negative})} < 0.\]

So \(a\) must be **negative** — choice **B**.

Why the others fail: \(bc < 0\) tells you \(b\) and \(c\) have **opposite** signs, but not which is
which. So \(b\) could be positive or negative (C not forced), \(c\) could be positive or negative
(D not forced), and \(b + c\) could be positive or negative depending on magnitudes (E not forced).
Only the sign of \(a\) is pinned down.

Concretely, \(a = -2\) works with either \((b, c) = (3, -1)\) or \((b, c) = (-3, 1)\): both give
\(bc < 0\) and \(abc = (-2)(bc) > 0\). Across those cases \(b\), \(c\), and \(b+c\) all change sign,
but \(a\) stays negative.

## Hints

- Divide the two given products: \(abc \div bc\) isolates \(a\).
- \(bc < 0\) means \(b\) and \(c\) have opposite signs — so neither one's sign is determined alone.
