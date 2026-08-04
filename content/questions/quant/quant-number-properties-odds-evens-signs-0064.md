---
id: quant-number-properties-odds-evens-signs-0064
section: quant
topic: number-properties
subtopic: odds-evens-signs
type: problem-solving
difficulty: hard
tags: [consecutive-integers, divisibility, cannot-be-true]
choices:
  A: "18"
  B: "33"
  C: "44"
  D: "57"
  E: "72"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Which of the following **cannot** be the sum of three consecutive integers?

## Explanation

Write three consecutive integers as \(n-1\), \(n\), and \(n+1\). Their sum is

\[(n-1) + n + (n+1) = 3n,\]

which is exactly \(3\) times the middle integer. So the sum of any three consecutive integers is
**always a multiple of 3**. A number that is *not* divisible by 3 cannot be such a sum.

Check each option's divisibility by 3 (add the digits):

- **A. 18** → \(1+8 = 9\), divisible by 3. Possible: \(5 + 6 + 7\).
- **B. 33** → \(3+3 = 6\), divisible by 3. Possible: \(10 + 11 + 12\).
- **C. 44** → \(4+4 = 8\), **not** divisible by 3. **Impossible.** ✓
- **D. 57** → \(5+7 = 12\), divisible by 3. Possible: \(18 + 19 + 20\).
- **E. 72** → \(7+2 = 9\), divisible by 3. Possible: \(23 + 24 + 25\).

Only \(44\) fails, so the answer is **C**.

**The trap:** without the "sum \(= 3n\)" insight, every option looks equally plausible and you are
left guessing. The four wrong answers are all deliberately multiples of 3 so that only the
divisibility test separates them.

## Hints

- Represent the three integers as \(n-1,\ n,\ n+1\) and add them.
- The sum simplifies to \(3n\), so it must be divisible by 3 — test each choice.
