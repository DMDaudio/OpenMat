---
id: quant-number-properties-remainders-0017
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: easy
tags: [remainders, divisibility]
choices:
  A: "2"
  B: "3"
  C: "4"
  D: "5"
  E: "6"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When a positive integer \(n\) is divided by 7, the remainder is 4. What is the remainder when
\(3n\) is divided by 7?

## Explanation

Write \(n\) with the division identity: \(n = 7q + 4\) for some integer \(q\). Then

\[3n = 3(7q + 4) = 21q + 12.\]

The \(21q\) part is a multiple of 7 and contributes no remainder, so the remainder of \(3n\) is
just the remainder of \(12\) on division by 7:

\[12 = 7 + 5,\]

which leaves **5**.

The shortcut: you can multiply the remainder directly. \(3 \times 4 = 12\), then reduce mod 7 to
get 5. You never need the actual value of \(n\).

The trap answer is **4** — reusing the original remainder as if multiplying by 3 didn't change it.

## Hints

- Write \(n = 7q + 4\) and multiply through by 3.
- Multiply the remainder (\(3 \times 4 = 12\)), then subtract 7 until it drops below 7.
