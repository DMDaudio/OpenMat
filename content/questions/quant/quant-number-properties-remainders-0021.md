---
id: quant-number-properties-remainders-0021
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, cyclicity, powers]
choices:
  A: "0"
  B: "1"
  C: "2"
  D: "3"
  E: "4"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the remainder when \(3^{47}\) is divided by 5?

## Explanation

You never compute \(3^{47}\). Remainders of successive powers repeat in a **cycle**, so find the
cycle and then locate the exponent within it. Take powers of 3 mod 5:

- \(3^1 = 3\) → remainder 3
- \(3^2 = 9\) → remainder 4
- \(3^3 = 27\) → remainder 2
- \(3^4 = 81\) → remainder 1
- \(3^5 = 243\) → remainder 3 (the pattern restarts)

So the remainders cycle with **period 4**: \(3, 4, 2, 1, \;3, 4, 2, 1, \dots\)

Locate the exponent 47 in the cycle by dividing by the period:

\[47 = 4 \times 11 + 3,\]

so \(3^{47}\) sits at **position 3** in the cycle. The third entry is **2**, so the remainder is **2**.

Watch the counting: a remainder of 0 in "\(47 \bmod 4\)" would put you at the *end* of a cycle
(position 4, remainder 1), not the start. Here the remainder is 3, giving position 3.

## Hints

- Compute the remainders of \(3^1, 3^2, 3^3, \dots\) mod 5 until they repeat.
- Divide the exponent by the cycle length; the remainder tells you the position within the cycle.
