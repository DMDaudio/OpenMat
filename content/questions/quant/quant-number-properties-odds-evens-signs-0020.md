---
id: quant-number-properties-odds-evens-signs-0020
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [odd-even, parity, consecutive-integers]
choices:
  A: "n²"
  B: "n + 2"
  C: "3n"
  D: "n² + n"
  E: "2n + 1"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(n\) is an odd integer, which of the following must be even?

## Explanation

Track the parity of each expression when \(n\) is odd.

- **(A)** \(n^2\): odd \(\times\) odd \(=\) odd. Not even.
- **(B)** \(n + 2\): odd \(+\) even \(=\) odd. Not even.
- **(C)** \(3n\): odd \(\times\) odd \(=\) odd. Not even.
- **(D)** \(n^2 + n = n(n + 1)\): this is a product of **two consecutive integers**, \(n\) and
  \(n + 1\). Of any two consecutive integers, exactly one is even, so their product is always
  even. **Even — correct.**
- **(E)** \(2n + 1\): even \(+\) odd \(=\) odd. Not even.

So only (D) is guaranteed even. **Correct: (D).**

Note the reasoning for (D) doesn't even require \(n\) to be odd — \(n^2 + n = n(n+1)\) is even for
*every* integer \(n\), because consecutive integers always include one even number. Recognizing
\(n^2 + n\) as \(n(n+1)\) is the key move.

## Hints

- Test each choice with a small odd number like \(n = 3\), then confirm it always holds.
- Factor (D): \(n^2 + n = n(n+1)\). What's special about two consecutive integers?

