---
id: quant-arithmetic-exponents-roots-0022
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: hard
tags: [exponents, exponential-equations, same-base]
choices:
  A: "2"
  B: "3"
  C: "4"
  D: "5"
  E: "7"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(4^{x+1} = 8^{x-1}\), what is the value of \(x\)?

## Explanation

The bases 4 and 8 are both powers of 2, so rewrite everything with base 2:

\[4^{x+1} = \left(2^{2}\right)^{x+1} = 2^{2(x+1)}, \qquad 8^{x-1} = \left(2^{3}\right)^{x-1} = 2^{3(x-1)}\]

With a common base, the exponents must be equal:

\[2(x+1) = 3(x-1)\]
\[2x + 2 = 3x - 3\]
\[x = 5\]

The answer is **5**.

**Check:** \(4^{6} = 4096\) and \(8^{4} = 4096\). ✓

**The trap:** trying to compare 4 and 8 directly, or guessing a small value, misses the key move —
express both sides as powers of the same prime, then set the exponents equal.

## Hints

- Both 4 and 8 are powers of 2. Rewrite each side with base 2.
- Once the bases match, the exponents must be equal — solve the resulting linear equation.
