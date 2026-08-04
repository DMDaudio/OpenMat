---
id: quant-arithmetic-exponents-roots-0023
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: hard
tags: [exponents, common-base, factoring-powers]
choices:
  A: "1/9"
  B: "2"
  C: "8"
  D: "9"
  E: "\(3^{38}\)"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(x = 3^{20}\) and \(y = 3^{18}\), what is the value of \(\dfrac{x - y}{y}\)?

## Explanation

Do not try to evaluate \(3^{20}\) or \(3^{18}\) — they are enormous. Split the fraction so the huge
powers turn into a ratio you can simplify:

\[\frac{x - y}{y} = \frac{x}{y} - \frac{y}{y} = \frac{3^{20}}{3^{18}} - 1\]

Dividing like bases means **subtracting** exponents:

\[\frac{3^{20}}{3^{18}} = 3^{\,20 - 18} = 3^{2} = 9\]

So the value is \(9 - 1 = 8\).

**The traps:**

- **D (9)** is \(\dfrac{x}{y} = 3^{2}\) — correct so far, but it forgets to subtract the \(\dfrac{y}{y} = 1\)
  term.
- **B (2)** stops at the exponent difference \(20 - 18 = 2\), as if the whole expression equaled
  \(3^{20-18}\) without the "\(-1\)".
- **E (\(3^{38}\))** comes from *multiplying* the powers (adding exponents \(20 + 18\)) instead of
  dividing.

## Hints

- Break \(\dfrac{x - y}{y}\) into \(\dfrac{x}{y} - 1\) before touching the exponents.
- Dividing like bases subtracts exponents: \(\dfrac{3^{20}}{3^{18}} = 3^{2}\).
