---
id: quant-arithmetic-exponents-roots-0022
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: hard
tags: [exponents, equations, common-base]
choices:
  A: "3"
  B: "2"
  C: "6"
  D: "0"
  E: "-1"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(2^{\,x+3} = 8^{\,x-1}\), what is the value of \(x\)?

## Explanation

The two sides have different bases, so rewrite them on a **common base**. Since \(8 = 2^3\):

\[8^{\,x-1} = \left(2^3\right)^{x-1} = 2^{\,3(x-1)} = 2^{\,3x-3}\]

Now both sides are powers of 2, so the exponents must be equal:

\[x + 3 = 3x - 3 \;\Rightarrow\; 6 = 2x \;\Rightarrow\; x = 3\]

Check: \(2^{3+3} = 2^6 = 64\) and \(8^{3-1} = 8^2 = 64\). ✓

**The trap:** choice **B (2)** comes from distributing the 3 only to the \(x\) and forgetting the
\(-1\): writing \(8^{x-1} = 2^{3x-1}\) gives \(x + 3 = 3x - 1\), so \(x = 2\). You must apply the
exponent 3 to the *entire* \((x-1)\). Choices **C**, **D**, and **E** come from arithmetic slips in
solving the linear equation.

## Hints

- Write 8 as a power of 2 so both sides share a base.
- \((2^3)^{x-1} = 2^{3(x-1)}\) — distribute the 3 across the whole exponent before setting them equal.
