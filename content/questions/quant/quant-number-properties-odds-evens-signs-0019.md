---
id: quant-number-properties-odds-evens-signs-0019
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [odd-even, parity]
choices:
  A: "a + b is odd"
  B: "a - b is even"
  C: "a·b + 1 is odd"
  D: "a is even"
  E: "2a + b is even"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(a\) and \(b\) are integers and the product \(ab\) is odd, which of the following **must** be
true?

- **A.** \(a + b\) is odd
- **B.** \(a - b\) is even
- **C.** \(ab + 1\) is odd
- **D.** \(a\) is even
- **E.** \(2a + b\) is even

## Explanation

A product of integers is odd only when **every factor is odd**. So \(ab\) odd forces both \(a\) and
\(b\) to be odd. Test each choice under "both odd":

- **A.** odd \(+\) odd \(=\) even, so \(a + b\) is even, not odd. False.
- **B.** odd \(-\) odd \(=\) even. **Always true.** ✓
- **C.** \(ab\) is odd, so \(ab + 1\) is even, not odd. False.
- **D.** \(a\) is odd, not even. False.
- **E.** \(2a\) is even and \(b\) is odd, so \(2a + b\) is even \(+\) odd \(=\) odd. False.

Only **B** must hold. The key parity facts: odd \(\pm\) odd is even, and a product is odd exactly
when all factors are odd.

The tempting wrong answer is **A** — many students recall "odd + odd" but misremember it as odd.

## Hints

- For a product to be odd, what has to be true of *each* factor?
- Once you know both are odd, use odd \(\pm\) odd \(=\) even.
