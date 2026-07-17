---
id: quant-number-properties-remainders-0019
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, divisibility, substitution]
choices:
  A: "1"
  B: "2"
  C: "3"
  D: "4"
  E: "9"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 5, the remainder is 3. What is the remainder when
\(3n\) is divided by 5?

## Explanation

Write \(n\) in the form that captures "remainder 3 when divided by 5":
\[n = 5k + 3\]
for some non-negative integer \(k\). Then
\[3n = 3(5k + 3) = 15k + 9.\]

The term \(15k\) is a multiple of 5, so it contributes remainder 0. That leaves the 9:
\[9 = 5 + 4,\]
so the remainder when \(3n\) is divided by 5 is **4**. **Correct: (D).**

**Shortcut:** remainders pass through multiplication. The remainder of \(3 \times 3 = 9\),
reduced mod 5, is 4.

**Traps:**

- **(E) 9** forgets the final step — a remainder when dividing by 5 must be less than 5, so 9
  must be reduced.
- **(C) 3** assumes multiplying \(n\) by 3 leaves the remainder unchanged. It does not.

You can confirm with a concrete value: \(n = 8\) leaves remainder 3 over 5, and
\(3n = 24 = 5 \cdot 4 + 4\) — remainder 4.

## Hints

- Represent \(n\) as \(5k + 3\) and multiply through by 3.
- Any final remainder over 5 has to be one of \(0,1,2,3,4\) — reduce if you land on 9.
