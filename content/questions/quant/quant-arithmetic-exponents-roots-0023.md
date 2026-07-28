---
id: quant-arithmetic-exponents-roots-0023
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: hard
tags: [exponents, factoring, common-base]
choices:
  A: "9"
  B: "2"
  C: "8·3^10"
  D: "80"
  E: "8"
answer: E
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the value of \(\dfrac{3^{12} - 3^{10}}{3^{10}}\)?

## Explanation

You can't subtract \(3^{12} - 3^{10}\) directly (they're not like terms), but you can **factor out
the smaller power** — the common factor \(3^{10}\) — from the numerator:

\[3^{12} - 3^{10} = 3^{10}\left(3^{2} - 1\right) = 3^{10}(9 - 1) = 3^{10} \cdot 8\]

Now divide:

\[\frac{3^{10} \cdot 8}{3^{10}} = 8\]

(Equivalently, split the fraction: \(\dfrac{3^{12}}{3^{10}} - \dfrac{3^{10}}{3^{10}} = 3^{2} - 1 = 8\).)

**The traps:**

- **A (9)** = \(3^2\), from computing \(\tfrac{3^{12}}{3^{10}} = 9\) but forgetting to subtract the
  second term (the \(-1\)).
- **B (2)** just subtracts the exponents (\(12 - 10\)) and stops.
- **C (8·3^10)** correctly factors the numerator but forgets to divide by the \(3^{10}\) in the
  denominator.
- **D (80)** = \(3^4 - 1\), from miscounting the exponent difference as 4 instead of 2.

## Hints

- You cannot combine \(3^{12} - 3^{10}\) into a single power — factor out the common \(3^{10}\)
  first.
- After factoring, the \(3^{10}\) in the numerator cancels the denominator. What's left?
