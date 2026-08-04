---
id: quant-algebra-sequences-functions-0057
section: quant
topic: algebra
subtopic: sequences-functions
type: problem-solving
difficulty: hard
tags: [arithmetic-sequence, system-of-equations]
choices:
  A: "-3"
  B: "2"
  C: "5"
  D: "7"
  E: "12"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

In an arithmetic sequence, the 4th term is 17 and the 9th term is 42. What is the first term?

## Explanation

Write each given term with the formula \(a_n = a_1 + (n-1)d\):

\[a_4 = a_1 + 3d = 17\]
\[a_9 = a_1 + 8d = 42\]

Subtract the first equation from the second to eliminate \(a_1\):

\[(a_1 + 8d) - (a_1 + 3d) = 42 - 17 \;\Rightarrow\; 5d = 25 \;\Rightarrow\; d = 5.\]

Now back-substitute into \(a_1 + 3d = 17\):

\[a_1 + 3(5) = 17 \;\Rightarrow\; a_1 = 17 - 15 = 2.\]

So the first term is **2**.

Watch two traps: the question asks for the first term, not the common difference \(d = 5\); and the
4th term is \(a_1 + 3d\) (three steps), not \(a_1 + 4d\).

## Hints

- Set up \(a_1 + 3d = 17\) and \(a_1 + 8d = 42\), then subtract to find \(d\) first.
- There are 5 steps between the 4th and 9th terms, and the values differ by \(42 - 17 = 25\).
