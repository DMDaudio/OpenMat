---
id: quant-number-properties-remainders-0021
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, cyclicity, powers]
choices:
  A: "1"
  B: "2"
  C: "3"
  D: "4"
  E: "0"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the remainder when \(7^{100}\) is divided by 5?

## Explanation

You never compute \(7^{100}\). Since remainders multiply, replace the base by its remainder:
\(7 \equiv 2 \pmod 5\), so

\[7^{100} \bmod 5 = 2^{100} \bmod 5.\]

Now list the remainders of the powers of 2 modulo 5 until they repeat:

\[2^1 \equiv 2,\quad 2^2 \equiv 4,\quad 2^3 \equiv 3,\quad 2^4 \equiv 1,\quad 2^5 \equiv 2,\ \dots\]

The block \(2, 4, 3, 1\) repeats with period 4. The exponent 100 is a multiple of 4
(\(100 = 4 \times 25\)), so \(2^{100}\) lands on the **last** value of the block, which is **1**.

Check the idea in miniature: \(2^4 = 16 = 5 \times 3 + 1\) leaves remainder 1, and every exponent
that is a multiple of 4 behaves the same way.

**The trap:** answer **B (2)** comes from using the first term of the cycle instead of the term at
position \(100 \bmod 4\). When the exponent is an exact multiple of the period, use the *last*
value of the block, not the first.

## Hints

- Reduce the base first: \(7 \equiv 2 \pmod 5\), so you need \(2^{100} \bmod 5\).
- List remainders of \(2^1, 2^2, 2^3, \dots\) modulo 5 until they cycle, then find where exponent 100 falls in the cycle.
