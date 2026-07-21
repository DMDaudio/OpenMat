---
id: quant-number-properties-remainders-0002
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
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the remainder when \(7^{100}\) is divided by 5?

## Explanation

Only the remainder of the base matters, so reduce it first: \(7 \equiv 2 \pmod 5\). The problem
becomes the remainder of \(2^{100}\) upon division by 5.

Look at the pattern of remainders of successive powers of 2 mod 5 — they **cycle**:

\[2^1 \equiv 2,\quad 2^2 \equiv 4,\quad 2^3 \equiv 3,\quad 2^4 \equiv 1,\quad 2^5 \equiv 2,\ \dots\]

The cycle has length 4: \((2, 4, 3, 1)\), repeating. The exponent that gives remainder 1 is any
multiple of 4. Since \(100 = 4 \times 25\) is a multiple of 4, it lands on the end of a full
cycle:

\[2^{100} = (2^4)^{25} \equiv 1^{25} = 1 \pmod 5\]

So the remainder is **1**.

## Hints

- First reduce the base modulo 5: \(7 \equiv 2\), so you only need powers of 2.
- Powers of 2 mod 5 repeat every 4 steps. Where does exponent 100 fall in that cycle?
