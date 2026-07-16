---
id: quant-number-properties-remainders-0022
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, simultaneous-conditions]
choices:
  A: "8"
  B: "13"
  C: "14"
  D: "18"
  E: "23"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When a positive integer \(k\) is divided by 5, the remainder is 3, and when \(k\) is divided by 4,
the remainder is 2. What is the smallest possible value of \(k\)?

## Explanation

List the values that satisfy the first condition, then scan for one that also satisfies the second.

Remainder 3 when divided by 5: \(k = 3, 8, 13, 18, 23, \dots\)

Now test each against "remainder 2 when divided by 4":

- \(3 \div 4\) → remainder 3. No.
- \(8 \div 4\) → remainder 0. No.
- \(13 \div 4\) → remainder 1. No.
- \(18 \div 4 = 4\) remainder 2. **Yes.**

So the smallest value is **18**. Confirm both conditions: \(18 = 5(3) + 3\) ✓ and
\(18 = 4(4) + 2\) ✓.

**The traps:** **A (8)** fits the mod-5 condition but is divisible by 4 (remainder 0, not 2).
**C (14)** fits the mod-4 condition (remainder 2) but \(14 \div 5\) leaves remainder 4, failing the
mod-5 condition. Each wrong choice satisfies at most one of the two requirements.

## Hints

- List every value with remainder 3 mod 5, then check each against the mod-4 condition.
- The answer must satisfy *both* conditions at once — don't stop at the first one.
