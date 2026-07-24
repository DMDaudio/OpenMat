---
id: quant-arithmetic-exponents-roots-0022
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: hard
tags: [exponents, factoring-powers, common-base]
choices:
  A: "3"
  B: "6"
  C: "10"
  D: "12"
  E: "48"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(2^{n} + 2^{n} + 2^{n} + 2^{n} = 2^{12}\), what is the value of \(n\)?

## Explanation

The left side is **four copies of the same term**, so factor — do not treat it as a new base.
Adding four equal terms is multiplying by 4:

\[2^{n} + 2^{n} + 2^{n} + 2^{n} = 4 \cdot 2^{n}\]

Now write the coefficient as a power of 2 so both sides share a base. Since \(4 = 2^{2}\):

\[4 \cdot 2^{n} = 2^{2} \cdot 2^{n} = 2^{\,n+2}\]

Setting \(2^{\,n+2} = 2^{12}\) gives \(n + 2 = 12\), so \(n = 10\).

**The traps:**

- **A (3)** treats the sum as a *product* of the four terms, \((2^{n})^{4} = 2^{4n} = 2^{12}\),
  giving \(4n = 12\). Adding equal powers is not the same as multiplying them.
- **B (6)** correctly writes \(4 \cdot 2^{n}\) but then *multiplies* the exponents (\(2 \cdot n = 12\))
  instead of adding: \(2^{2} \cdot 2^{n} = 2^{n+2}\), not \(2^{2n}\).
- **D (12)** simply ignores the coefficient of 4.

## Hints

- Four copies of \(2^{n}\) is \(4 \cdot 2^{n}\), not \((2^{n})^{4}\).
- Rewrite \(4\) as \(2^{2}\), then combine with \(2^{n}\) by **adding** exponents.
