---
id: quant-number-properties-remainders-0022
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, cannot-be-determined, divisors]
choices:
  A: "1"
  B: "3"
  C: "5"
  D: "7"
  E: "It cannot be determined from the information given."
answer: E
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 12, the remainder is 5. What is the remainder when
\(n\) is divided by 8?

## Explanation

Knowing the remainder for one divisor does **not** fix the remainder for an unrelated divisor. The
valid values of \(n\) are \(n = 12q + 5\): \(5, 17, 29, 41, \dots\) Divide each by 8:

- \(n = 5\): \(5 = 8 \times 0 + 5\) — remainder **5**.
- \(n = 17\): \(17 = 8 \times 2 + 1\) — remainder **1**.
- \(n = 29\): \(29 = 8 \times 3 + 5\) — remainder **5**.
- \(n = 41\): \(41 = 8 \times 5 + 1\) — remainder **1**.

The remainder alternates between 5 and 1, so it is not determined — the answer is **E**.

This works because 8 does not divide 12. The remainder modulo a new divisor \(d'\) is fixed by the
remainder modulo \(d\) only when \(d'\) divides \(d\) (for example, \(n \bmod 12 = 5\) *does* fix
\(n \bmod 6 = 5\), since 6 divides 12). Here \(8 \nmid 12\), so the extra multiples of 12 shift the
remainder modulo 8.

**The trap:** answer **C (5)** comes from testing only \(n = 5\) and assuming the remainder carries
over. Always test at least two values of the form \(12q + 5\); the second one (17) already breaks
the pattern.

## Hints

- List several values \(n = 12q + 5\) and divide each by 8 — do they all give the same remainder?
- A remainder modulo 12 fixes the remainder modulo \(d'\) only when \(d'\) divides 12; 8 does not.
