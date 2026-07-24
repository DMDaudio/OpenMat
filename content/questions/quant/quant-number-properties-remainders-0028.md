---
id: quant-number-properties-remainders-0028
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, simultaneous-conditions]
choices:
  A: "12"
  B: "16"
  C: "17"
  D: "22"
  E: "31"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

The positive integer \(n\) leaves a remainder of 2 when divided by 5 and a remainder of 1 when
divided by 3. What is the least possible value of \(n\) that is greater than 10?

## Explanation

List the numbers that satisfy each condition and find the overlap.

- Remainder 2 when divided by 5: \(2, 7, 12, 17, 22, 27, \dots\)
- Remainder 1 when divided by 3: \(1, 4, 7, 10, 13, 16, 19, 22, 25, \dots\)

The values in **both** lists are \(7, 22, 37, \dots\) — they repeat every \(\text{lcm}(5, 3) = 15\).
The smallest one greater than 10 is **22**.

Check: \(22 = 5 \times 4 + 2\) (remainder 2) and \(22 = 3 \times 7 + 1\) (remainder 1). ✓

**Traps:** answer **A (12)** satisfies only the mod-5 condition (\(12 \div 3\) leaves remainder 0).
Answer **B (16)** satisfies only the mod-3 condition (\(16 \div 5\) leaves remainder 1). Answer
**C (17)** leaves remainder 2 mod 5 but remainder 2 mod 3, so it fails the second condition. Answer
**E (31)** leaves remainder 1 mod 5, satisfying neither cleanly. Only 22 meets both.

## Hints

- Write out the numbers that fit each condition separately, then look for the first common value.
- Above the first overlap, solutions repeat every lcm of the two divisors.
