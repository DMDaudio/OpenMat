---
id: quant-number-properties-odds-evens-signs-0059
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: easy
tags: [parity, odd-even, must-be-true]
choices:
  A: "n + 1"
  B: "n + 2"
  C: "2n"
  D: "3n"
  E: "n^2"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(n\) is an even integer, which of the following must be **odd**?

## Explanation

Start from "\(n\) is even" and apply the parity rules to each option:

- **A. \(n + 1\)** — adding the odd number \(1\) flips even to **odd**. ✓
- **B. \(n + 2\)** — adding an even number keeps parity, so this stays **even**.
- **C. \(2n\)** — any integer times \(2\) is **even**.
- **D. \(3n\)** — odd × even is **even** (the even factor \(n\) wins).
- **E. \(n^2\)** — \(n \cdot n\) is even × even = **even**.

Only \(n + 1\) is guaranteed odd, so the answer is **A**.

**The traps:** **D (\(3n\))** tempts people who see the odd coefficient \(3\) and forget that
multiplying by the even \(n\) makes the product even. **E (\(n^2\))** catches the idea that
squaring changes parity — it does not; \(n^2\) has the same parity as \(n\).

## Hints

- Adding an even number leaves parity unchanged; adding an odd number flips it.
- A product is even the moment any single factor is even.
