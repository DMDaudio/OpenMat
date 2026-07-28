---
id: quant-arithmetic-exponents-roots-0018
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: easy
tags: [exponents, power-of-a-power]
choices:
  A: "128"
  B: "24"
  C: "4096"
  D: "81"
  E: "512"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the value of \(\left(2^3\right)^4\)?

## Explanation

To raise a power to a power, **multiply** the exponents:

\[\left(2^3\right)^4 = 2^{3 \times 4} = 2^{12}\]

And \(2^{12} = 4096\) (since \(2^{10} = 1024\), and \(2^{12} = 1024 \times 4\)).

**The traps:**

- **A (128)** = \(2^{3+4} = 2^7\), from *adding* the exponents. Adding is for multiplying like
  bases (\(2^3 \cdot 2^4\)); a power of a power multiplies them.
- **B (24)** = \(2 \times 3 \times 4\), from multiplying all three numbers together.
- **D (81)** = \(3^4\), from raising the *exponent* to the 4th power and dropping the base.
- **E (512)** = \(2^9\), a miscount of \(3 \times 4\).

## Hints

- A power raised to another power — do you add or multiply the exponents?
- \((a^m)^n = a^{mn}\). Multiply, then evaluate the single power.
