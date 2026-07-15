---
id: quant-number-properties-remainders
section: quant
topic: number-properties
subtopic: remainders
title: "Remainders"
tags: [remainders, divisibility, cyclicity, number-properties]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Remainders show up all over Focus Quant and Data Insights, and almost every question rests on a
single identity plus a couple of rules for combining remainders. Learn the identity, learn how
remainders behave under addition and multiplication, and learn the one trap that catches most
test-takers: assuming a remainder is determined when it isn't.

## Core concepts

**The division identity.** When a positive integer \(n\) is divided by a positive divisor \(d\),
there is a unique quotient \(q\) and remainder \(r\):

\[n = dq + r, \qquad 0 \le r < d\]

The remainder is always at least \(0\) and strictly less than the divisor. So "remainder 7"
immediately tells you the divisor is **at least 8**.

**Remainders add and multiply.** To find the remainder of a sum or product, you may replace each
number by its own remainder first, then reduce again at the end:

\[(a + b) \bmod d = \big((a \bmod d) + (b \bmod d)\big) \bmod d\]
\[(a \times b) \bmod d = \big((a \bmod d) \times (b \bmod d)\big) \bmod d\]

That is why you never need the actual large number — only its remainder. For powers, this is just
repeated multiplication: \(n^k \bmod d\) depends only on \((n \bmod d)^k \bmod d\).

**Cyclicity for large powers.** The remainders of \(2^1, 2^2, 2^3, \dots\) modulo \(5\) run
\(2, 4, 3, 1, 2, 4, 3, 1, \dots\) — a repeating block of length \(4\). For any base and divisor
the remainders of the powers eventually cycle. Find the cycle length, then use the exponent's
position within the cycle. To locate \(2^{100}\), note \(100\) is a multiple of the period \(4\),
so it lands on the **last** value of the block.

## Worked examples

**Combining a sum.** When \(x\) is divided by \(12\) the remainder is \(5\), and when \(y\) is
divided by \(12\) the remainder is \(11\). The remainder of \(x + y\) is

\[(5 + 11) \bmod 12 = 16 \bmod 12 = 4.\]

Note \(16\) is not a legal remainder (it exceeds \(12\)); you must reduce once more.

**A power modulo a small number.** The remainder of \(7^{100}\) divided by \(5\): since
\(7 \equiv 2 \pmod 5\), this equals \(2^{100} \bmod 5\). The powers of \(2\) cycle with period
\(4\), and \(100 = 4 \times 25\), so \(2^{100}\) sits at the end of a block — remainder \(1\).

## Common traps

- **Leaving an illegal remainder.** \(5 + 11 = 16\) is not the answer mod \(12\); a remainder must
  be less than the divisor, so reduce again to \(4\).
- **Assuming a smaller divisor is determined.** Knowing \(n \bmod 12 = 5\) does **not** fix
  \(n \bmod 8\): \(n = 5\) gives remainder \(5\), but \(n = 17\) gives remainder \(1\). Unless the
  new divisor divides the old one, test a few values of \(n = dq + r\) before concluding.
- **Testing only one value.** When a question asks what "must be true," plug in at least two
  numbers of the form \(dq + r\) (e.g. \(q = 0\) and \(q = 1\)); a pattern from a single case is
  often a coincidence.

## Key takeaways

- Everything follows from \(n = dq + r\) with \(0 \le r < d\); a remainder of \(r\) forces the
  divisor to be greater than \(r\).
- Reduce each part first, combine, then reduce again — remainders add and multiply.
- For big powers, find the repeating cycle of remainders and use the exponent's position in it.
- A remainder for one divisor rarely fixes the remainder for a different divisor — test values before you commit.
