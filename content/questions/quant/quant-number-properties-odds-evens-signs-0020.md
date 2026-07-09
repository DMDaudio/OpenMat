---
id: quant-number-properties-odds-evens-signs-0020
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [signs, must-be-true]
choices:
  A: "\(x < 0\)"
  B: "\(y > 0\)"
  C: "\(z < 0\)"
  D: "\(xz > 0\)"
  E: "\(yz > 0\)"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(x\), \(y\), and \(z\) are nonzero numbers with \(xyz < 0\) and \(xy > 0\), which of the
following must be true?

## Explanation

Work with the sign of each product.

Since \(xy > 0\), \(x\) and \(y\) have the **same sign**, so their product is positive. Then

\[xyz = (xy) \cdot z < 0 \quad\text{with}\quad xy > 0 \;\Rightarrow\; z < 0.\]

So \(z\) must be negative — choice **C**.

The other choices aren't forced: \(x\) and \(y\) could **both** be positive or **both** be negative
(either keeps \(xy > 0\)), so A and B fail. And because \(x\)'s sign is unknown while \(z < 0\), the
product \(xz\) could be positive or negative, so D fails; the same reasoning kills E. The answer is
**\(z < 0\)**.

## Hints

- Treat \(xy\) as a single quantity — its sign is given directly.
- A product is negative when it has an odd number of negative factors; use that to pin down \(z\).
