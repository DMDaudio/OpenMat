---
id: quant-counting-probability-combinatorics-0022
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: hard
tags: [combinatorics, arrangements, identical-items]
choices:
  A: "60"
  B: "90"
  C: "120"
  D: "360"
  E: "720"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

How many distinct arrangements can be made of all the letters of the word **BANANA**?

## Explanation

BANANA has 6 letters, but they are not all distinct: **A** appears 3 times, **N** appears 2 times,
and **B** appears once. If the 6 letters were all different there would be \(6! = 720\)
arrangements — but swapping two identical A's (or the two N's) produces no new visible word, so
\(6!\) overcounts. Divide by a factorial for each repeated letter:

\[\frac{6!}{3!\,\cdot\,2!} = \frac{720}{6 \times 2} = \frac{720}{12} = 60\]

**The trap:** answer **E (720)** is \(6!\), treating all six letters as distinguishable. **D (360)**
divides by only \(2!\) (correcting for the two N's but forgetting the three A's), and **C (120)**
divides by only \(3!\) (correcting for the A's but forgetting the N's). **B (90)** comes from
\(720 / (3! + 2!) = 720/8\) — *adding* the repeat-factorials in the denominator instead of
multiplying them.

## Hints

- All-distinct letters would give \(6!\); repeated letters make some of those arrangements
  identical.
- Divide by the factorial of each repeated letter's count, and multiply those factorials together
  in the denominator.
