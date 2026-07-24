---
id: quant-number-properties-remainders-0030
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, simultaneous-conditions, lcm]
choices:
  A: "1"
  B: "5"
  C: "7"
  D: "9"
  E: "11"
answer: E
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 4, the remainder is 3, and when \(n\) is divided by 6,
the remainder is 5. What is the remainder when \(n\) is divided by 12?

## Explanation

Find a number that satisfies both conditions, then reduce mod 12. List each:

- Remainder 3 when divided by 4: \(3, 7, 11, 15, 19, 23, \dots\)
- Remainder 5 when divided by 6: \(5, 11, 17, 23, 29, \dots\)

The first common value is **11**. Both divisors go into \(\text{lcm}(4, 6) = 12\), so the solutions
repeat every 12: \(11, 23, 35, \dots\), all of which leave remainder **11** when divided by 12.

Check: \(11 = 4 \times 2 + 3\) (remainder 3) and \(11 = 6 \times 1 + 5\) (remainder 5). ✓

**Traps:** answers **B (5)** and **C (7)** grab one of the given remainders (or their sum minus one)
without combining the conditions. Answer **D (9)** and answer **A (1)** come from guessing a value
that fits only one of the two divisions. A shortcut worth noticing: each condition says \(n\) is one
short of a multiple (\(n + 1\) is divisible by 4 **and** by 6, hence by 12), so \(n\) is one less than
a multiple of 12 — remainder **11**.

## Hints

- Find the smallest \(n\) satisfying both conditions, then take its remainder mod 12.
- Notice that \(n + 1\) is divisible by both 4 and 6 — what does that say about \(n + 1\) and 12?
