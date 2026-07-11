---
id: quant-number-properties-remainders-0022
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, simultaneous-conditions]
choices:
  A: "12"
  B: "16"
  C: "17"
  D: "22"
  E: "27"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A positive integer \(N\) leaves a remainder of 2 when divided by 5 and a remainder of 1 when
divided by 3. What is the least value of \(N\) greater than 10?

## Explanation

Handle the two conditions together by listing one and testing it against the other.

Numbers that leave remainder 2 when divided by 5: \(2, 7, 12, 17, 22, 27, \dots\)

Now keep only those that also leave remainder 1 when divided by 3:

- \(2 \to 2 \bmod 3 = 2\) ✗
- \(7 \to 7 \bmod 3 = 1\) ✓
- \(12 \to 12 \bmod 3 = 0\) ✗
- \(17 \to 17 \bmod 3 = 2\) ✗
- \(22 \to 22 \bmod 3 = 1\) ✓

Both conditions hold at \(N = 7\), and then again every \(\text{lcm}(5, 3) = 15\): \(7, 22, 37, \dots\)
The smallest such value **greater than 10** is **22**.

Check: \(22 = 4 \times 5 + 2\) (remainder 2 mod 5 ✓) and \(22 = 7 \times 3 + 1\) (remainder 1 mod 3 ✓).

The distractors each satisfy only one condition: 12 and 27 leave remainder 2 mod 5 but are
divisible by 3; 17 leaves remainder 2 mod 5 but remainder 2 (not 1) mod 3; 16 leaves remainder 1
mod 5. Only 22 satisfies both.

## Hints

- List the numbers satisfying one condition, then test each against the other — don't try to guess.
- Once you find the first value that works, the next ones repeat every \(\text{lcm}\) of the two divisors.
