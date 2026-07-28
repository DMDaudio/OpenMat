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
  B: "9"
  C: "18"
  D: "729"
  E: "6"
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

A fractional exponent is a root and a power: the **denominator** is the root, the **numerator** is
the power. So \(27^{2/3}\) means "take the cube root of 27, then square it":

\[27^{2/3} = \left(\sqrt[3]{27}\right)^{2} = 3^2 = 9\]

(Doing it in the other order gives the same result: \(\sqrt[3]{27^2} = \sqrt[3]{729} = 9\).)

**The traps:**

- **A (3)** = \(\sqrt[3]{27}\) — you took the cube root but forgot to square it.
- **C (18)** = \(27 \times \tfrac23\), from *multiplying* the base by the fraction instead of
  treating \(\tfrac23\) as a root-and-power.
- **D (729)** = \(27^2\), from squaring but never taking the cube root.
- **E (6)** = \(3 \times 2\), from taking the cube root (3) and multiplying by the numerator (2)
  instead of raising to that power.

## Hints

- In \(a^{m/n}\), the denominator \(n\) is a root and the numerator \(m\) is a power.
- Take the cube root of 27 first (it's a perfect cube), then apply the power of 2.
