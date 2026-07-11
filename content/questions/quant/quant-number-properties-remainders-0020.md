---
id: quant-number-properties-remainders-0020
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, division]
choices:
  A: "0"
  B: "1"
  C: "2"
  D: "3"
  E: "5"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 7, the remainder is 4. What is the remainder when
\(3n + 5\) is divided by 7?

## Explanation

Start from the division identity: "\(n\) divided by 7 leaves remainder 4" means
\(n = 7q + 4\) for some integer \(q \ge 0\). Substitute:

\[3n + 5 = 3(7q + 4) + 5 = 21q + 12 + 5 = 21q + 17.\]

The \(21q\) term is a multiple of 7, so it contributes no remainder. That leaves the remainder of
\(17\) on division by 7:

\[17 = 2 \times 7 + 3,\]

so the remainder is **3**.

Shortcut: work with the remainder directly. Replace \(n\) by its remainder 4, compute
\(3(4) + 5 = 17\), then reduce mod 7 to get 3. (Sanity check with \(n = 11\): \(3(11) + 5 = 38 = 5 \times 7 + 3\). ✓)

The trap answer is **E (5)**, from stopping at "\(+5\)" without accounting for the \(3 \times 4 = 12\),
which itself contributes \(12 = 7 + 5\), i.e. another 5 — the two combine to 17, not 5.

## Hints

- Write \(n = 7q + 4\) and substitute into \(3n + 5\).
- Any multiple of 7 drops out; you only need the remainder of the leftover constant.
