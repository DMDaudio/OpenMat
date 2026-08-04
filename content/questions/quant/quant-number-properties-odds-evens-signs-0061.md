---
id: quant-number-properties-odds-evens-signs-0061
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [parity, products, must-be-true]
choices:
  A: "m and n are both odd"
  B: "m and n are both even"
  C: "m + n is odd"
  D: "at least one of m and n is even"
  E: "m - n is odd"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(m\) and \(n\) are integers and the product \(mn\) is odd, which of the following **must** be
true?

## Explanation

A product of integers is odd only when **every** factor is odd — a single even factor would make
the product even. Since \(mn\) is odd, both \(m\) and \(n\) must be odd. That makes **A** correct.

Check the rest against "both \(m\) and \(n\) are odd":

- **B** (both even) — impossible; even factors give an even product.
- **D** (at least one even) — same contradiction.
- **C** (\(m + n\) odd) — odd + odd = **even**, so \(m + n\) is even, not odd.
- **E** (\(m - n\) odd) — odd − odd = **even**, so this is false too.

The answer is **A**.

**The traps:** **C** and **E** bait the reflex that "odd things make odd results." Two odd numbers
*add and subtract* to an even number — parity flips only when the two numbers differ in parity.

## Hints

- A product is odd only if none of its factors is even.
- Once you know both numbers are odd, test what odd ± odd gives.
