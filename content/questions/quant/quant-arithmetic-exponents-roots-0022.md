---
id: quant-arithmetic-exponents-roots-0022
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: hard
tags: [exponents, common-base, equations]
choices:
  A: "1"
  B: "2"
  C: "5"
  D: "-5"
  E: "3"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(4^{\,x+1} = 8^{\,x-1}\), what is the value of \(x\)?

## Explanation

The bases 4 and 8 aren't equal, but both are powers of 2. Rewrite everything with base 2, using
\(4 = 2^2\) and \(8 = 2^3\):

\[4^{\,x+1} = \left(2^2\right)^{x+1} = 2^{\,2(x+1)}, \qquad 8^{\,x-1} = \left(2^3\right)^{x-1} = 2^{\,3(x-1)}\]

With the same base, the exponents must be equal:

\[2(x+1) = 3(x-1) \;\Rightarrow\; 2x + 2 = 3x - 3 \;\Rightarrow\; x = 5\]

Check: \(4^{6} = 4096\) and \(8^{4} = 4096\). ✓

**The traps:**

- **E (3)** comes from writing \(8 = 2^4\) instead of \(2^3\): then \(2(x+1) = 4(x-1)\) gives
  \(x = 3\). Remember \(8 = 2^3\).
- **B (2)** comes from not distributing the multiplier over the constant — writing
  \(2x + 1 = 3x - 1\) instead of \(2(x+1) = 3(x-1)\).
- **A (1)** and **D (−5)** are sign slips when moving terms across the equation.

## Hints

- Rewrite both sides as powers of the same base (2), then set the exponents equal.
- Be careful to distribute: \((2^2)^{x+1} = 2^{2(x+1)}\), and \(2(x+1)\) means \(2x+2\).
