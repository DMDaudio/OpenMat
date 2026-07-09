---
id: quant-number-properties-factors-multiples-0017
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: medium
tags: [lcm, cycles, multiples]
choices:
  A: "6"
  B: "36"
  C: "54"
  D: "72"
  E: "216"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A red beacon flashes every 12 seconds and a green beacon flashes every 18 seconds. If both beacons
flash at the same instant right now, how many seconds from now will they next flash at the same
instant?

## Explanation

"Flash together again" means the first time that is a multiple of **both** 12 and 18 — the **least
common multiple**.

Factor each interval into primes:

\[12 = 2^2 \cdot 3, \qquad 18 = 2 \cdot 3^2\]

The LCM takes each prime at its **highest** power:

\[\operatorname{lcm}(12, 18) = 2^2 \cdot 3^2 = 36\]

So the beacons next coincide after **36** seconds.

Watch the two classic traps: \(6\) is the *greatest common divisor* (lower powers), not the LCM,
and \(12 \times 18 = 216\) is *a* common multiple but not the *least* one.

## Hints

- "Line up again" points to a common multiple — and you want the *least* one.
- Factor both numbers into primes; the LCM uses the higher power of each prime, the GCD the lower.
