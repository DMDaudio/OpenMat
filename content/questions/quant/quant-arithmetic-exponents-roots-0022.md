---
id: quant-arithmetic-exponents-roots-0022
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: hard
tags: [exponents, common-base, power-of-a-power]
choices:
  A: "2"
  B: "3"
  C: "4"
  D: "5"
  E: "6"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(9^{x} \cdot 27 = 3^{7}\), what is the value of \(x\)?

## Explanation

Rewrite every term as a power of the common base 3.

- \(9 = 3^2\), so \(9^{x} = (3^2)^{x} = 3^{2x}\) (power of a power → multiply exponents).
- \(27 = 3^3\).

Substitute:

\[3^{2x} \cdot 3^{3} = 3^{7}\]

Multiplying like bases adds exponents on the left:

\[3^{2x + 3} = 3^{7}\]

Now the bases match, so set the exponents equal:

\[2x + 3 = 7 \;\Rightarrow\; 2x = 4 \;\Rightarrow\; x = 2\]

**The trap:** answer **C (4)** is the value of \(2x\) — easy to stop one step early. Answer **D (5)**
comes from forgetting to rewrite 27 and using \(2x + 2 = 7\) or a similar slip. Convert *every* term
to base 3 before equating exponents.

## Hints

- Rewrite 9 and 27 as powers of 3.
- \((3^2)^x = 3^{2x}\); then add exponents on the left and set them equal to 7.
