---
id: quant-algebra-sequences-functions-0054
section: quant
topic: algebra
subtopic: sequences-functions
type: problem-solving
difficulty: medium
tags: [arithmetic-sequence, series-sum]
choices:
  A: "855"
  B: "900"
  C: "950"
  D: "1000"
  E: "1900"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

An arithmetic sequence has first term 5 and last term 95, and it contains 19 terms in all. What is
the sum of all 19 terms?

## Explanation

The sum of an arithmetic sequence is the number of terms times the **average** of the first and last
term:

\[S_n = \frac{n\,(a_1 + a_n)}{2}.\]

You don't need the common difference — the first and last terms and the count are enough. Here
\(n = 19\), \(a_1 = 5\), \(a_{n} = 95\):

\[S_{19} = \frac{19\,(5 + 95)}{2} = \frac{19 \cdot 100}{2} = 19 \cdot 50 = 950.\]

So the sum is **950**.

(As a check, the common difference is \(d = \frac{95 - 5}{19 - 1} = \frac{90}{18} = 5\), so the terms
are \(5, 10, 15, \dots, 95\) — exactly 19 of them.)

## Hints

- Sum \(= \dfrac{n(a_1 + a_n)}{2}\): count of terms times the average of the ends.
- The average of the first and last term is \(\frac{5+95}{2} = 50\); you have 19 of them.

