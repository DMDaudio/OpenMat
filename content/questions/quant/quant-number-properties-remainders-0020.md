---
id: quant-number-properties-remainders-0020
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, units-digit, cyclicity, exponents]
choices:
  A: "0"
  B: "1"
  C: "3"
  D: "7"
  E: "9"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the remainder when \(7^{100}\) is divided by 10?

## Explanation

The remainder when any integer is divided by 10 is simply its **units digit**, so the question is
really: what is the units digit of \(7^{100}\)?

Units digits of powers repeat in a short cycle. List the units digit of successive powers of 7:

\[7^1 = 7,\quad 7^2 = 49,\quad 7^3 = 343,\quad 7^4 = 2401,\quad 7^5 = 16807,\ \dots\]

The units digits are \(7, 9, 3, 1, 7, \dots\) — a cycle of length **4**: \(\{7, 9, 3, 1\}\).

To find where \(7^{100}\) lands, divide the exponent by the cycle length: \(100 = 4 \times 25\), so
\(100\) is a multiple of 4. An exponent that is a multiple of the cycle length maps to the **last**
term of the cycle, which is \(1\) (just as \(7^4\) ends in 1).

So the units digit of \(7^{100}\) is 1, and the remainder when \(7^{100}\) is divided by 10 is
**1**.

Trap answers come from misreading the cycle position: 7 (as if \(7^{100}\) behaved like \(7^1\)),
9 (\(7^2\)), or 3 (\(7^3\)). The exponent being a multiple of 4 is the signal for the end of the
cycle, not the start.

## Hints

- The remainder upon division by 10 is just the units digit.
- Units digits of \(7^n\) cycle as \(7, 9, 3, 1\) with period 4 — reduce the exponent \(100\) modulo 4.
