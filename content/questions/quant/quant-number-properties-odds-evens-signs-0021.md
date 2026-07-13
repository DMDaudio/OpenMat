---
id: quant-number-properties-odds-evens-signs-0021
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: medium
tags: [parity, coefficients, must-be-true]
choices:
  A: "\(pq\)"
  B: "\(p + q\)"
  C: "\(2p + q\)"
  D: "\(p + 1\)"
  E: "\(pq + 1\)"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(p\) and \(q\) are integers and \(3p + 5q\) is even, which of the following must be even?

## Explanation

An odd coefficient doesn't change parity: \(3p\) has the parity of \(p\), and \(5q\) has the parity of
\(q\). So \(3p + 5q\) has the parity of \(p + q\). For that to be even, \(p\) and \(q\) must have the
**same parity** (both odd or both even).

- **A. \(pq\):** both even → even, but both odd → odd. Not guaranteed.
- **B. \(p + q\):** same parity means their sum is **even** every time. This must be even. ✓
- **C. \(2p + q\):** \(2p\) is even, so this has the parity of \(q\), which could be odd or even.
- **D. \(p + 1\):** flips the parity of \(p\); could be either.
- **E. \(pq + 1\):** since \(pq\) isn't fixed (see A), neither is \(pq + 1\).

The answer is **B**.

## Hints

- Drop the coefficients: \(3p + 5q\) has the same parity as \(p + q\).
- If \(p + q\) is even, what does that tell you about whether \(p\) and \(q\) match in parity?
