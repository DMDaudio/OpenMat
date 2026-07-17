---
id: quant-number-properties-remainders
section: quant
topic: number-properties
subtopic: remainders
title: "Remainders"
tags: [remainders, divisibility, modular-arithmetic, cyclicity]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

A remainder question is really a question about **structure**: what an integer looks like when
you write it in terms of the divisor. Once you write \(n = dq + r\), most remainder problems
become simple substitution or a short search over cases.

## Core concepts

**The division identity.** When a positive integer \(n\) is divided by a positive divisor \(d\),
there is a unique quotient \(q\) and remainder \(r\) with
\[n = dq + r, \qquad 0 \le r < d.\]
The remainder is always at least 0 and strictly less than the divisor. "Divided by 5" means the
remainder is one of \(0, 1, 2, 3, 4\).

**Remainders travel through addition and multiplication.** If you only care about the remainder
of a sum or product, you can replace each number by its own remainder first:

- remainder of \((a + b)\) = remainder of (remainder of \(a\) + remainder of \(b\));
- remainder of \((a \cdot b)\) = remainder of (remainder of \(a\) \(\times\) remainder of \(b\)).

Then reduce again if the result is still \(\ge d\). This lets you handle huge numbers without
ever computing them.

**Units digits cycle.** The units digit of a power repeats on a short cycle, which is a
remainder-mod-10 fact. For example, powers of 3 cycle \(3, 9, 7, 1, 3, 9, 7, 1, \ldots\) with
period 4.

## Worked examples

**Example 1 — substitute the form.** When \(n\) is divided by 5 the remainder is 3. What is the
remainder when \(3n\) is divided by 5?

Write \(n = 5k + 3\). Then \(3n = 15k + 9\). Since \(15k\) is a multiple of 5, only the 9
matters, and \(9 = 5 + 4\), so the remainder is **4**. (Shortcut with the multiplication rule:
remainder of \(3 \times 3 = 9\), reduce mod 5 to get 4.)

**Example 2 — combine two conditions.** A number leaves remainder 2 when divided by 3 and
remainder 2 when divided by 4. What is the smallest such positive integer greater than 2?

Numbers that are 2 more than a multiple of both 3 and 4 are 2 more than a multiple of 12:
\(12m + 2\). The smallest above 2 is \(14\).

**Example 3 — units digit via cyclicity.** What is the units digit of \(3^{23}\)?

The cycle of the units digit of powers of 3 has length 4: \(3, 9, 7, 1\). Divide the exponent by
4: \(23 = 4 \cdot 5 + 3\), so we are at position 3 in the cycle, which is **7**.

## Common traps

- **Remainder of at least the divisor.** A remainder when dividing by 5 can never be 5 or more.
  If your arithmetic gives 9, reduce it (\(9 \bmod 5 = 4\)).
- **Assuming the remainder is unchanged when you scale.** Multiplying \(n\) by 3 does *not* keep
  the remainder at 3 — you must recompute (Example 1).
- **Zero is a valid remainder.** "Divisible by \(d\)" is exactly "remainder 0."
- **Off-by-one on cyclicity.** A remainder of 0 in the exponent lands on the *last* term of the
  cycle, not the first.

## Key takeaways

- Write \(n = dq + r\) with \(0 \le r < d\); substitute and simplify.
- Remainders pass cleanly through addition and multiplication — reduce early, reduce often.
- For units digits of powers, find the cycle length and take the exponent mod that length.
- Always sanity-check that your final remainder is less than the divisor.
