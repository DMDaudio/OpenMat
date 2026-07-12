---
id: quant-number-properties-remainders-0018
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, modular-arithmetic]
choices:
  A: "11"
  B: "14"
  C: "18"
  D: "23"
  E: "32"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A positive integer \(n\) leaves a remainder of 3 when divided by 5 and a remainder of 4 when
divided by 7. What is the remainder when \(n\) is divided by 35?

## Explanation

Two modular conditions together pin \(n\) down modulo \(5 \times 7 = 35\), so there is a single
remainder to find.

List the numbers that leave remainder 4 on division by 7:

\[4,\ 11,\ 18,\ 25,\ 32,\ \dots\]

Now check which of these also leaves remainder 3 on division by 5 (i.e. ends in 3 or 8):

- \(4 \to\) remainder 4. No.
- \(11 \to\) remainder 1. No.
- \(18 \to 18 = 3\times 5 + 3\), remainder 3. **Yes.**

So \(n = 18\) works, and every valid \(n\) has the form \(35k + 18\). Dividing any of them by 35
leaves remainder **18**.

Check: \(18 \div 5 = 3\) remainder 3 ✓, and \(18 \div 7 = 2\) remainder 4 ✓.

The distractors 11, 23, and 32 satisfy exactly *one* of the two conditions, which is why scanning
both is essential.

## Hints

- Each condition alone allows infinitely many numbers; together they fix the remainder mod \(5\times7 = 35\).
- List multiples-plus-4 of 7 and stop at the first one that also leaves remainder 3 mod 5.
