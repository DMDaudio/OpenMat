---
id: quant-arithmetic-exponents-roots-0020
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: medium
tags: [exponents, fractional-exponents, roots]
choices:
  A: "6"
  B: "9"
  C: "18"
  D: "54"
  E: "729"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the value of \(27^{2/3}\)?

## Explanation

A fractional exponent \(m/n\) means "take the \(n\)th root, then raise to the \(m\)th power." The
denominator is the root; the numerator is the power. Take the root first to keep the numbers small:

\[27^{2/3} = \left(27^{1/3}\right)^{2} = \left(\sqrt[3]{27}\right)^{2} = 3^{2} = 9\]

**The traps:**

- **E (729)** ignores the cube-root denominator and just squares: \(27^{2} = 729\).
- **A (6)** multiplies the root by the numerator instead of raising to it: \(3 \times 2 = 6\).
- **C (18)** and **D (54)** treat the exponent as ordinary multiplication (\(27 \times \tfrac{2}{3} = 18\),
  or \(27 \times 2 = 54\)) rather than as a root-and-power.

## Hints

- The denominator of the exponent is a root; the numerator is a power.
- \(27^{2/3} = (\sqrt[3]{27})^{2}\) — take the cube root first.
