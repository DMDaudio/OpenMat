---
id: quant-arithmetic-exponents-roots-0021
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: medium
tags: [exponents, exponent-laws]
choices:
  A: "35"
  B: "96"
  C: "128"
  D: "256"
  E: "512"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(2^{x} = 32\), what is the value of \(2^{x+3}\)?

## Explanation

You don't even need to find \(x\) — split the power using the product rule.

\[2^{x+3} = 2^{x}\cdot 2^{3}\]

You're told \(2^{x} = 32\), and \(2^{3} = 8\), so:

\[2^{x+3} = 32 \times 8 = 256\]

So the answer is **256**. (As a check: \(32 = 2^{5}\), so \(x = 5\) and \(2^{x+3} = 2^{8} = 256\).)

**The traps:**
- **A (35)** *adds* the exponent as if it were a plain number: \(32 + 3\).
- **B (96)** multiplies by \(3\) instead of by \(2^{3} = 8\): \(32 \times 3\).
- **C (128)** multiplies by only \(2^{2} = 4\) (an off-by-one on the exponent): \(32 \times 4\).
- **E (512)** multiplies by \(2^{4} = 16\), doubling one time too many.

## Hints

- \(2^{x+3}\) is not \(2^{x} + 3\); a sum in the exponent means a **product** of powers.
- Rewrite \(2^{x+3}\) as \(2^{x}\cdot 2^{3}\) and substitute the value you're given.
