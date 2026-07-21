---
id: quant-number-properties-remainders-0001
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, division]
choices:
  A: "1"
  B: "2"
  C: "3"
  D: "4"
  E: "5"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When a positive integer \(n\) is divided by 7, the remainder is 4. What is the remainder when
\(3n + 5\) is divided by 7?

## Explanation

Write \(n\) in terms of its division by 7:

\[n = 7k + 4\]

for some non-negative integer \(k\). Then

\[3n + 5 = 3(7k + 4) + 5 = 21k + 12 + 5 = 21k + 17\]

The \(21k\) term is a multiple of 7, so it contributes remainder 0. That leaves the remainder of
17 upon division by 7:

\[17 = 7 \times 2 + 3\]

So the remainder is **3**. (Sanity check with \(n = 4\): \(3(4) + 5 = 17\), and \(17 \div 7\)
leaves 3.)

## Hints

- Replace \(n\) with \(7k + 4\) and expand — any multiple of 7 drops out of the remainder.
- Reduce the leftover constant modulo 7.
