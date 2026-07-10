---
id: quant-number-properties-remainders
section: quant
topic: number-properties
subtopic: remainders
title: "Remainders & Modular Thinking"
tags: [number-properties, remainders, divisibility, units-digit, cyclicity]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Remainder questions are a GMAT Focus favorite because they reward *thinking in terms of the
divisor* instead of grinding through big arithmetic. The whole topic rests on one identity: when
a positive integer \(n\) is divided by a positive divisor \(d\), there is a unique quotient \(q\)
and remainder \(r\) with

\[n = qd + r, \qquad 0 \le r < d.\]

The two constraints on \(r\) do a lot of work: the remainder is never negative, and it is always
**strictly less than the divisor**. A "remainder of 7 when divided by 5" is impossible.

## Core concepts

**Write the number in the form \(qd + r\).** The fastest move on almost every remainder problem is
to replace "\(n\) leaves remainder \(r\) when divided by \(d\)" with the algebraic statement
\(n = dk + r\) for some integer \(k\), then substitute. You rarely need to know \(n\) itself.

**Remainders add and multiply.** When you divide by \(d\), you can replace any number by its
remainder before adding or multiplying, then take the remainder again at the end:

\[(a + b) \bmod d = \big((a \bmod d) + (b \bmod d)\big) \bmod d,\]
\[(a \times b) \bmod d = \big((a \bmod d) \times (b \bmod d)\big) \bmod d.\]

This is why you can find the remainder of a huge product without ever computing it.

**Combining two conditions.** "\(n\) leaves remainder 3 mod 5 and remainder 2 mod 3" pins \(n\)
down modulo \(15\) (the two divisors multiplied, when they share no common factor). List the
numbers satisfying the harder condition and scan for the first that also satisfies the other.

**Units digit = remainder mod 10.** The units digit of a number *is* its remainder upon division
by 10. Powers cycle: \(7^1,7^2,7^3,7^4\) end in \(7, 9, 3, 1\) and then repeat with period 4. To
find the units digit of \(7^{100}\), reduce the exponent mod the cycle length.

## Worked examples

**Example 1 — substitute the form.** When \(n\) is divided by 7 the remainder is 4. What is the
remainder when \(2n + 5\) is divided by 7?

Write \(n = 7k + 4\). Then \(2n + 5 = 14k + 8 + 5 = 14k + 13 = 7(2k+1) + 6\). The remainder is
**6**. (Shortcut: work with the remainder only — \(2\times 4 + 5 = 13\), and \(13 \bmod 7 = 6\).)

**Example 2 — combine conditions.** \(n\) leaves remainder 3 when divided by 5 and remainder 2
when divided by 3. What is \(n \bmod 15\)?

Numbers that are \(3\) more than a multiple of 5: \(3, 8, 13, 18, \dots\). Check each against
"remainder 2 mod 3": \(3 \to 0\), \(8 \to 2\ \checkmark\). So \(n \equiv 8 \pmod{15}\).

**Example 3 — cyclicity.** Units digit of \(7^{100}\)? The cycle \(7, 9, 3, 1\) has length 4, and
\(100\) is a multiple of 4, so \(7^{100}\) lands on the **last** entry of the cycle: units digit
**1**.

## Common traps

- **Remainder \(\ge\) divisor.** The remainder must satisfy \(0 \le r < d\). If your work produces
  a remainder as large as the divisor, take one more step.
- **Forgetting to reduce at the end.** \(2\times 4 + 5 = 13\) is *not* the answer when dividing by
  7 — you still have to take \(13 \bmod 7 = 6\).
- **Off-by-one in the cycle.** An exponent that is a multiple of the cycle length maps to the
  *last* term of the cycle, not the first. \(7^4\) ends in 1, and so does \(7^{100}\).
- **Assuming you must find \(n\).** You almost never need the actual number — the form \(qd + r\)
  carries all the information the question uses.

## Key takeaways

- Replace "leaves remainder \(r\) mod \(d\)" with \(n = dk + r\) and substitute; the specific value
  of \(n\) rarely matters.
- You may reduce each term to its remainder *before* adding or multiplying, then reduce once more.
- Two coprime divisors pin a number down modulo their product — list one condition and scan.
- The units digit is the remainder mod 10; powers cycle, so reduce the exponent by the cycle length.
