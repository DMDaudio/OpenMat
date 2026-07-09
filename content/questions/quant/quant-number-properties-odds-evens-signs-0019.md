---
id: quant-number-properties-odds-evens-signs-0019
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [parity, must-be-true]
choices:
  A: "\(x + y\) is odd"
  B: "\(x + y\) is even"
  C: "\(x\) is even"
  D: "\(x - y\) is odd"
  E: "\(x^2 + y^2\) is odd"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(x\) and \(y\) are integers and the product \(xy\) is odd, which of the following must be true?

## Explanation

A product is odd **only when every factor is odd**. So \(xy\) odd forces **both** \(x\) and \(y\) to
be odd. Now test each choice with "odd, odd":

- **A.** odd \(+\) odd \(=\) even, so \(x + y\) is *not* odd. Eliminate.
- **B.** odd \(+\) odd \(=\) **even**. This must be true. ✓
- **C.** \(x\) is odd, not even. Eliminate.
- **D.** odd \(-\) odd \(=\) even, so \(x - y\) is not odd. Eliminate.
- **E.** \(x^2\) and \(y^2\) are both odd, and odd \(+\) odd \(=\) even, so \(x^2 + y^2\) is even, not
  odd. Eliminate.

Only **B** holds. The answer is **\(x + y\) is even**.

## Hints

- What does an *odd product* tell you about each of the two factors?
- Once you know the parity of \(x\) and \(y\), just apply odd/even sum rules to each choice.
