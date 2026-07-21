---
id: quant-number-properties-factors-0001
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: easy
tags: [multiples, counting]
choices:
  A: "15"
  B: "16"
  C: "17"
  D: "18"
  E: "20"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

How many multiples of 6 are there between 1 and 100, inclusive?

## Explanation

A multiple of 6 has the form \(6k\) for a positive integer \(k\). The largest one that does not
exceed 100 satisfies \(6k \le 100\), so \(k \le 16.67\), meaning \(k\) runs from 1 to 16.

You can also just divide and take the whole-number part:

\[\left\lfloor \frac{100}{6} \right\rfloor = 16\]

Check the endpoints: \(6 \times 16 = 96 \le 100\) and \(6 \times 17 = 102 > 100\). So there are
**16** multiples of 6 in the range.

## Hints

- Every multiple of 6 looks like \(6 \times (\text{an integer})\). What is the biggest such number that stays at or below 100?
- Divide 100 by 6 and keep only the whole-number part.
