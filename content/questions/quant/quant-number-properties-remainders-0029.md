---
id: quant-number-properties-remainders-0029
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, squares, could-be]
choices:
  A: "2"
  B: "3"
  C: "4"
  D: "6"
  E: "0"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

The positive integer \(n\) is such that \(n^2\) leaves a remainder of 4 when divided by 7. Which of
the following could be the remainder when \(n\) is divided by 7?

## Explanation

The remainder of \(n^2\) depends only on the remainder of \(n\), so test every possible remainder
\(r = 0, 1, 2, \dots, 6\) and see which give \(r^2 \equiv 4 \pmod 7\):

\[0^2 \to 0,\quad 1^2 \to 1,\quad 2^2 \to 4,\quad 3^2 \to 2,\quad 4^2 \to 2,\quad 5^2 \to 4,\quad 6^2 \to 1.\]

(For example, \(5^2 = 25 = 7 \times 3 + 4\).) The value 4 appears when \(r = 2\) or \(r = 5\). Of the
answer choices, only **2** is possible.

Check: if \(n = 2\), then \(n^2 = 4\), and \(4 \div 7\) leaves remainder 4. ✓

**Traps:** answer **C (4)** assumes \(n\) leaves the *same* remainder as \(n^2\) — but a number and
its square rarely share a remainder (here \(4^2 = 16\) leaves remainder 2, not 4). Answers **B (3)**,
**D (6)**, and **E (0)** all fail: their squares leave remainders 2, 1, and 0 respectively.

## Hints

- The remainder of \(n^2\) depends only on the remainder of \(n\), so just test \(r = 0\) through 6.
- Don't assume \(n\) and \(n^2\) leave the same remainder — square each candidate and check.
