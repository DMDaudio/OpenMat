---
id: quant-arithmetic-exponents-roots-0017
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: easy
tags: [exponents, exponent-laws]
choices:
  A: "15"
  B: "25"
  C: "125"
  D: "625"
  E: "3125"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the value of \(\dfrac{5^{6}}{5^{2}\cdot 5}\)?

## Explanation

Combine the powers in the denominator first, then subtract exponents.

The denominator is \(5^{2}\cdot 5 = 5^{2}\cdot 5^{1} = 5^{2+1} = 5^{3}\). (The lone \(5\) is
\(5^{1}\) — it's easy to skip.)

Now divide, subtracting exponents:

\[\frac{5^{6}}{5^{3}} = 5^{6-3} = 5^{3} = 125\]

So the answer is **125**.

**The traps:**
- **E (3125 = \(5^{5}\))** comes from *adding* the lone \(5\) instead of subtracting it: \(5^{6-2+1}\).
- **D (625 = \(5^{4}\))** comes from ignoring the lone \(5\) entirely: \(5^{6-2}\).
- **B (25)** comes from *dividing* the exponents (\(6\div 3\)) instead of subtracting them.
- **A (15)** comes from reading \(5^{3}\) as \(5\times 3\).

## Hints

- Rewrite the lone \(5\) as \(5^{1}\) and combine the whole denominator into a single power.
- Dividing powers of the same base means **subtracting** exponents, not dividing them.
