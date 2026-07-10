---
id: quant-number-properties-remainders-0018
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: hard
tags: [remainders, simultaneous-conditions, divisibility]
choices:
  A: "2"
  B: "3"
  C: "5"
  D: "8"
  E: "11"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A positive integer \(n\) leaves a remainder of 3 when divided by 5 and a remainder of 2 when
divided by 3. What is the remainder when \(n\) is divided by 15?

## Explanation

Two conditions on divisors 5 and 3 — and since 5 and 3 share no common factor, together they pin
\(n\) down to a single remainder modulo \(5 \times 3 = 15\).

Start with the condition that has the larger divisor (fewer cases to scan). Numbers that leave
remainder 3 when divided by 5 are:

\[3,\ 8,\ 13,\ 18,\ 23,\ \dots\]

Now test each against the second condition, "remainder 2 when divided by 3":

- \(3 \div 3\) leaves remainder 0 — no.
- \(8 \div 3\) leaves remainder 2 — **yes**.

So the smallest such \(n\) is 8, and every valid \(n\) is 8 more than a multiple of 15
(\(8, 23, 38, \dots\)). Therefore \(n\) leaves a remainder of **8** when divided by 15.

Common traps: adding the two remainders to get \(3 + 2 = 5\) (C), or picking one of the given
remainders 3 (B) or 2 (A). None of those respects *both* conditions at once — only 8 does.

## Hints

- Because 5 and 3 have no common factor, the two conditions fix \(n\) modulo \(5 \times 3 = 15\).
- List the numbers satisfying one condition, then scan for the first that also satisfies the other.
