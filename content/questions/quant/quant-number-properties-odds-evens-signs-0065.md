---
id: quant-number-properties-odds-evens-signs-0065
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: hard
tags: [parity, consecutive-integers, always-odd]
choices:
  A: "n^2 + n + 1"
  B: "n^2 + n"
  C: "2n^2 + 3n"
  D: "n^3 + n"
  E: "3n + 3"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(n\) is an integer, which of the following is **always odd**?

## Explanation

The key building block is \(n^2 + n = n(n+1)\), the product of two consecutive integers, which is
**always even**. Use that to read off each option's parity.

- **A. \(n^2 + n + 1\)** — this is (always even) \(+\,1\), so it is **always odd**. ✓
- **B. \(n^2 + n\)** — always **even** (the consecutive-integer product itself).
- **C. \(2n^2 + 3n\)** — \(2n^2\) is even, and \(3n\) has the same parity as \(n\); the total has
  the parity of \(n\), so it is even when \(n\) is even. Not always odd.
- **D. \(n^3 + n = n(n^2 + 1)\)** — if \(n\) is even the whole thing is even; if \(n\) is odd then
  \(n^2 + 1\) is even, so it is even again. Always **even**.
- **E. \(3n + 3 = 3(n + 1)\)** — its parity matches \(n + 1\), so it is even when \(n\) is odd.
  Not always odd.

Only **A** is odd for every integer \(n\), so the answer is **A**.

**The traps:** **C** and **E** are odd for some values of \(n\) (try \(n = 1\)) but even for
others (try \(n = 2\)) — "sometimes odd" is not "always odd." **D** looks like it should alternate,
but factoring shows it is always even.

## Hints

- Anchor on the fact that \(n^2 + n = n(n+1)\) is always even, then adjust by the constant.
- "Always odd" must survive both an even and an odd test value — check \(n = 2\) and \(n = 3\).

