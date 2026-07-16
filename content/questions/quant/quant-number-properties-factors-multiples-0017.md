---
id: quant-number-properties-factors-multiples-0017
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: medium
tags: [gcf, lcm, factors]
choices:
  A: "15"
  B: "30"
  C: "45"
  D: "54"
  E: "60"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

The greatest common factor of two positive integers is 6 and their least common multiple is 90.
If one of the integers is 18, what is the other integer?

## Explanation

Use the identity that ties GCF and LCM to the two numbers:

\[\text{GCF}(a,b) \times \text{LCM}(a,b) = a \times b\]

Here \(6 \times 90 = 18 \times b\), so \(540 = 18b\) and \(b = 30\).

Check it directly: \(18 = 2 \cdot 3^2\) and \(30 = 2 \cdot 3 \cdot 5\). The GCF takes the lower power
of shared primes: \(2 \cdot 3 = 6\) ✓. The LCM takes the higher power of all primes:
\(2 \cdot 3^2 \cdot 5 = 90\) ✓.

**The trap:** choice **A (15)** is \(\text{LCM} \div \text{GCF} = 90 \div 6\), a tempting but
meaningless combination here.

## Hints

- There's a fixed relationship between two numbers, their GCF, and their LCM.
- \(\text{GCF} \times \text{LCM} = \text{the product of the two numbers}\).
