---
id: quant-algebra-sequences-functions-0053
section: quant
topic: algebra
subtopic: sequences-functions
type: problem-solving
difficulty: easy
tags: [geometric-sequence, nth-term]
choices:
  A: "32"
  B: "48"
  C: "96"
  D: "160"
  E: "192"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A geometric sequence has first term 3 and common ratio 2. What is its 6th term?

## Explanation

For a geometric sequence, the \(n\)th term is

\[a_n = a_1 \, r^{\,n-1}.\]

As with arithmetic sequences, the exponent is \((n-1)\): reaching the 6th term takes **5**
multiplications by the ratio, not 6.

\[a_6 = 3 \cdot 2^{6-1} = 3 \cdot 2^{5} = 3 \cdot 32 = 96.\]

So the 6th term is **96**. (Writing the terms out confirms it: 3, 6, 12, 24, 48, **96**.)

## Hints

- The \(n\)th term of a geometric sequence is \(a_1 r^{\,n-1}\).
- To land on the 6th term you multiply by the ratio 5 times, then don't forget the factor of 3.
