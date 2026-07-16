---
id: quant-number-properties-factors-multiples-0018
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: medium
tags: [lcm, multiples, word-problem]
choices:
  A: "60"
  B: "120"
  C: "160"
  D: "240"
  E: "480"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Three lighthouses flash at regular intervals of 8, 12, and 20 seconds, respectively. If all three
flash together at a certain instant, after how many seconds will they next all flash together?

## Explanation

Repeating cycles line up again after the **least common multiple** of their periods, so find
\(\text{LCM}(8, 12, 20)\).

Factor each into primes:

\[8 = 2^3, \quad 12 = 2^2 \cdot 3, \quad 20 = 2^2 \cdot 5\]

The LCM takes the highest power of every prime that appears:

\[\text{LCM} = 2^3 \cdot 3 \cdot 5 = 120\]

So all three flash together again after **120 seconds**.

**The trap:** choice **A (60)** is \(\text{LCM}(12, 20)\) — it ignores the 8-second light, which needs
the full \(2^3\). Multiplying all three periods (\(8 \cdot 12 \cdot 20 = 1920\)) gives a common
multiple, but not the *least* one.

## Hints

- "When do repeating cycles coincide again?" is always an LCM question.
- Factor each interval into primes and take the highest power of each prime.
