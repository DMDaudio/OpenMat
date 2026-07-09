---
id: quant-number-properties-remainders
section: quant
topic: number-properties
subtopic: remainders
title: "Remainders & Modular Thinking"
tags: [remainders, modular, divisibility, cycles]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

A remainder question is really a statement about form. "\(n\) leaves remainder 4 when divided by 7"
just means \(n = 7k + 4\) for some integer \(k\). Write that form down and most remainder problems
turn into ordinary algebra or a short list.

## Core concepts

**The division form.** "\(n\) divided by \(d\) leaves remainder \(r\)" means

\[n = dq + r, \qquad 0 \le r < d\]

The remainder is always **less than the divisor** — a remainder of 7 (mod 7) is impossible; it is 0.

**Remainders add and multiply.** To find the remainder of a sum or product, you may reduce each
piece to its remainder first. If \(n\) leaves remainder 4 mod 7, then \(3n\) leaves the remainder of
\(3 \times 4 = 12\), which is \(12 - 7 = 5\).

**Testing the smallest case.** When only the remainder is given, plug in the smallest value that
fits (here \(n = 4\)) — the remainder of any sum/product won't depend on which valid \(n\) you pick.

**Two conditions at once.** "\(n\) leaves remainder 3 mod 5 **and** remainder 2 mod 3": list each,

\[n \equiv 3 \pmod 5: \; 3, 8, 13, 18, 23, \dots \qquad n \equiv 2 \pmod 3: \; 2, 5, 8, 11, 14, 17, 20, 23, \dots\]

The first common value is 8, and solutions then repeat every \(\operatorname{lcm}(5,3) = 15\):
\(8, 23, 38, \dots\)

## Worked examples

**Scaling a remainder.** \(n\) leaves remainder 4 mod 7. Remainder of \(3n\) mod 7? Reduce:
\(3 \cdot 4 = 12 \equiv 5\). So the remainder is **5**.

**Combining two moduli.** Smallest \(n > 10\) with remainder 3 mod 5 and remainder 2 mod 3? From the
lists above the pattern is \(8, 23, 38, \dots\); the first one over 10 is **23**.

## Common traps

- **Remainder \(\ge\) divisor.** The remainder must be strictly smaller than what you divide by.
  Always reduce (e.g. \(12 \bmod 7 = 5\)).
- **Forgetting the small cases.** \(n\) could be the remainder itself (e.g. \(n = 4\)) — don't
  assume \(n\) is large.
- **Checking only one condition.** With two divisors, verify a candidate against **both** before
  choosing it.

## Key takeaways

- Rewrite "remainder \(r\) mod \(d\)" as \(n = dq + r\) with \(0 \le r < d\).
- Reduce sums and products to their remainders, then reduce again if the result exceeds the divisor.
- Two simultaneous conditions repeat every LCM of the divisors — list a few terms and find the overlap.
