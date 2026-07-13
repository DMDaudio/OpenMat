---
id: quant-number-properties-odds-evens-signs-0017
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: easy
tags: [parity, odd-even, must-be-true]
choices:
  A: "\(x - y\)"
  B: "\(xy\)"
  C: "\(x^2 + y^2\)"
  D: "\(x + 2y\)"
  E: "\(2x + y\)"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(x\) and \(y\) are integers and \(x + y\) is odd, which of the following must be even?

## Explanation

If \(x + y\) is odd, then exactly one of \(x\) and \(y\) is odd and the other is even.

- **A. \(x - y\):** subtraction has the same parity as addition, so \(x - y\) is **odd**, not even.
  This is the classic trap.
- **B. \(xy\):** the product of an even number and an odd number is always **even**. This must be even. ✓
- **C. \(x^2 + y^2\):** a square keeps the parity of its base, so \(x^2 + y^2\) has the same parity as
  \(x + y\), which is **odd**.
- **D. \(x + 2y\):** \(2y\) is even, so this has the parity of \(x\). Since \(x\) could be the odd one
  or the even one, this isn't guaranteed either way.
- **E. \(2x + y\):** similarly has the parity of \(y\), which isn't fixed.

Only **B** is guaranteed even.

## Hints

- If \(x + y\) is odd, one of the two is even and the other is odd — write that down first.
- A product is even whenever *any* factor is even.
