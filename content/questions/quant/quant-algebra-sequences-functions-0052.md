---
id: quant-algebra-sequences-functions-0052
section: quant
topic: algebra
subtopic: sequences-functions
type: problem-solving
difficulty: easy
tags: [arithmetic-sequence, nth-term]
choices:
  A: "76"
  B: "80"
  C: "83"
  D: "87"
  E: "91"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

An arithmetic sequence has first term 7 and common difference 4. What is its 20th term?

## Explanation

For an arithmetic sequence, the \(n\)th term is

\[a_n = a_1 + (n-1)\,d.\]

The key is the multiplier \((n-1)\): to reach the 20th term you add the common difference **19**
times, not 20, because the first term itself takes zero steps.

\[a_{20} = 7 + (20-1)\cdot 4 = 7 + 19\cdot 4 = 7 + 76 = 83.\]

So the 20th term is **83**.

## Hints

- The \(n\)th term is \(a_1 + (n-1)d\) — count the *gaps* between terms, not the terms.
- From the 1st term to the 20th term there are 19 steps of size 4.
