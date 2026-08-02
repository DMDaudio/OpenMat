---
id: quant-algebra-sequences-functions-0056
section: quant
topic: algebra
subtopic: sequences-functions
type: problem-solving
difficulty: medium
tags: [recursive-sequence, recursion]
choices:
  A: "9"
  B: "16"
  C: "17"
  D: "31"
  E: "33"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A sequence is defined by \(a_1 = 2\) and \(a_{n+1} = 2a_n - 1\) for every \(n \ge 1\). What is the
value of \(a_5\)?

## Explanation

There's no shortcut needed — apply the rule one step at a time, labeling each term so you stop at the
right one:

\[a_1 = 2\]
\[a_2 = 2(2) - 1 = 3\]
\[a_3 = 2(3) - 1 = 5\]
\[a_4 = 2(5) - 1 = 9\]
\[a_5 = 2(9) - 1 = 17\]

So \(a_5 = 17\).

The most common slip is stopping one term early (\(a_4 = 9\)) or going one too far (\(a_6 = 33\)).
Labeling each line prevents the off-by-one. (If you spotted the pattern, the closed form is
\(a_n = 2^{\,n-1} + 1\), which also gives \(a_5 = 16 + 1 = 17\).)

## Hints

- Compute term by term: \(a_2, a_3, a_4, a_5\) — and write the index next to each so you stop at \(a_5\).
- Each step is "double the previous term, then subtract 1."
