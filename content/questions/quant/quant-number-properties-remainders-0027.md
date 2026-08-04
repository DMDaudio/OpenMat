---
id: quant-number-properties-remainders-0027
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, powers, cyclicity, units-digit]
choices:
  A: "1"
  B: "3"
  C: "7"
  D: "9"
  E: "0"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the remainder when \(7^{20}\) is divided by 10?

## Explanation

Dividing by 10 asks for the **units digit**. The units digit of powers of 7 repeats in a cycle of
length 4:

\[7^1 \to 7, \quad 7^2 \to 9, \quad 7^3 \to 3, \quad 7^4 \to 1, \quad 7^5 \to 7, \ \dots\]

To find where \(7^{20}\) lands, divide the exponent by the cycle length: \(20 = 4 \times 5\), so 20 is
a multiple of 4 and \(7^{20}\) sits at the **end** of a cycle — the same spot as \(7^4\), whose units
digit is **1**. The remainder when \(7^{20}\) is divided by 10 is **1**.

**Traps:** answer **C (7)** treats "\(20 \div 4\) has remainder 0" as if it pointed to the *first*
entry (7) — but a remainder of 0 means the *last* entry of the cycle, not the first. Answers
**D (9)** and **B (3)** are the units digits of \(7^2\) and \(7^3\), chosen by miscounting the
position. Answer **E (0)** wrongly assumes any large power is divisible by 10.

## Hints

- Remainder mod 10 is just the units digit.
- Units digits of \(7^n\) cycle 7, 9, 3, 1; use "exponent mod 4," and treat a result of 0 as the end
  of the cycle.
