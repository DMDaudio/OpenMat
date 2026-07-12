---
id: quant-number-properties-factors-0020
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: medium
tags: [lcm, divisors, prime-factorization]
choices:
  A: "6"
  B: "8"
  C: "9"
  D: "12"
  E: "36"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Let \(N\) be the smallest positive integer that is divisible by both 12 and 18. How many positive
divisors does \(N\) have?

## Explanation

The smallest positive integer divisible by both is the **least common multiple**. Use prime
factorizations:

\[12 = 2^2 \times 3, \qquad 18 = 2 \times 3^2.\]

The LCM takes the **highest power of each prime** that appears:

\[N = \operatorname{lcm}(12, 18) = 2^2 \times 3^2 = 36.\]

Now count divisors. For \(N = p^a \times q^b\), the number of positive divisors is
\((a+1)(b+1)\), because each divisor uses \(p\) to a power from \(0\) to \(a\) and \(q\) to a power
from \(0\) to \(b\):

\[(2+1)(2+1) = 3 \times 3 = 9.\]

So \(N = 36\) has **9** divisors: 1, 2, 3, 4, 6, 9, 12, 18, 36.

Watch two traps: taking the *lowest* powers gives the GCD (6), not the LCM; and answering **36** by
reporting \(N\) itself instead of its divisor count.

## Hints

- "Smallest number divisible by both" is the LCM — take the highest power of each prime.
- For \(N = p^a q^b\), the divisor count is \((a+1)(b+1)\), not \(N\) itself.
