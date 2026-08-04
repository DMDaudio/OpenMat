---
id: quant-arithmetic-exponents-roots-0019
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: medium
tags: [exponents, common-base, equations]
choices:
  A: "1"
  B: "2"
  C: "3"
  D: "4"
  E: "5"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(2^{\,x+1} = 8^{\,x-1}\), what is the value of \(x\)?

## Explanation

The two sides have different bases, so first rewrite them with the **same base**. Since
\(8 = 2^{3}\):

\[8^{\,x-1} = \left(2^{3}\right)^{x-1} = 2^{\,3(x-1)} = 2^{\,3x-3}\]

Now both sides are powers of 2, so the exponents must be equal:

\[x + 1 = 3x - 3 \;\Rightarrow\; 4 = 2x \;\Rightarrow\; x = 2\]

Check: \(2^{2+1} = 2^{3} = 8\) and \(8^{2-1} = 8^{1} = 8\). ✓

**The trap:** answer **A (1)** comes from forgetting to distribute the 3, i.e. writing the exponent
as \(3x - 1\) instead of \(3(x-1) = 3x - 3\). Distributing carefully is the whole question.

## Hints

- Rewrite \(8\) as a power of \(2\) so both sides share a base.
- When two equal powers have the same base, set the exponents equal — and distribute the exponent
  fully.
