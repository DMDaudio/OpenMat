---
id: quant-arithmetic-exponents-roots-0020
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: medium
tags: [exponents, fractional-exponents, roots]
choices:
  A: "3"
  B: "6"
  C: "9"
  D: "18"
  E: "27"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the value of \(27^{2/3}\)?

## Explanation

A fractional exponent packages a root and a power together: the denominator is the root, the
numerator is the power. Take the **root first** to keep the numbers small:

\[27^{2/3} = \left(\sqrt[3]{27}\right)^{2}\]

The cube root of \(27\) is \(3\), and then:

\[3^{2} = 9\]

So the answer is **9**. (You can also do it the other way — \(27^{2} = 729\), then \(\sqrt[3]{729} = 9\) — but the numbers are uglier.)

**The traps:**
- **A (3)** stops at the cube root and forgets to apply the power of \(2\).
- **B (6)** takes the cube root (\(3\)) but then *multiplies* by \(2\) instead of squaring.
- **D (18)** multiplies the base by the exponent: \(27 \times \tfrac{2}{3}\).
- **E (27)** ignores the exponent altogether and leaves the base.

## Hints

- Read \(a^{m/n}\) as "take the \(n\)th root, then raise to the \(m\)th power."
- The denominator of the fraction is the **root**; taking it first keeps the arithmetic easy.
