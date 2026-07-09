---
id: quant-number-properties-remainders-0022
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, simultaneous-conditions, lcm]
choices:
  A: "13"
  B: "18"
  C: "23"
  D: "28"
  E: "38"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A positive integer \(n\) leaves a remainder of 3 when divided by 5 and a remainder of 2 when divided
by 3. What is the least value of \(n\) that is greater than 10?

## Explanation

List the numbers satisfying each condition and find where they first overlap.

Remainder 3 mod 5: \(3, 8, 13, 18, 23, 28, \dots\)
Remainder 2 mod 3: \(2, 5, 8, 11, 14, 17, 20, 23, \dots\)

The values common to both are \(8, 23, 38, \dots\) (they repeat every
\(\operatorname{lcm}(5, 3) = 15\)). The first one **greater than 10** is **23**.

Check 23: \(23 = 5 \cdot 4 + 3\) (remainder 3 ✓) and \(23 = 3 \cdot 7 + 2\) (remainder 2 ✓).

The distractors satisfy only one condition: 13 and 18 both leave remainder 3 mod 5 but fail the
mod-3 test (\(13 \equiv 1\), \(18 \equiv 0\)), and 28 leaves remainder 3 mod 5 but \(28 \equiv 1
\pmod 3\). (38 satisfies both but isn't the *least* one over 10.) The answer is **23**.

## Hints

- Write out the first several numbers that fit each condition separately.
- The values satisfying both repeat every LCM of the two divisors — find the first overlap above 10.
