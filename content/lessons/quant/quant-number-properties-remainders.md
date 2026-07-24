---
id: quant-number-properties-remainders
section: quant
topic: number-properties
subtopic: remainders
title: "Remainders"
tags: [remainders, divisibility, modular-arithmetic, number-properties]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Remainder questions look like they need long division, but almost none of them do. The whole
topic rests on one identity and a few rules for how remainders behave when you **add**,
**multiply**, and take **powers**. Master those and you can answer most remainder questions in
under a minute — often just by picking the smallest number that fits and testing it.

## Core concepts

**The division identity.** When a positive integer \(n\) is divided by a positive divisor \(d\),
there is a unique quotient \(q\) and remainder \(r\) with

\[n = dq + r, \qquad 0 \le r < d.\]

The remainder is always **less than the divisor** (a remainder of 7 is impossible when dividing
by 5). Reading a word problem, "quotient 7, remainder 4, divisor 6" becomes
\(n = 6\cdot 7 + 4 = 46\) — nothing more.

**Remainders add and multiply, then reduce.** If you only care about the remainder mod \(d\), you
may replace any number by its remainder at every step, as long as you **reduce again at the end**:

\[\text{rem}(a+b) = \text{rem}\big(\text{rem}(a) + \text{rem}(b)\big), \qquad
\text{rem}(ab) = \text{rem}\big(\text{rem}(a)\cdot \text{rem}(b)\big).\]

So if \(a\) leaves remainder 5 and \(b\) leaves remainder 8 when divided by 12, then \(ab\) leaves
the remainder of \(5\times 8 = 40\), which is \(40 - 36 = 4\). The single most common mistake is
stopping at 40 (or at \(5+8=13\)) and forgetting the final reduction.

**Powers cycle.** Remainders of \(a^1, a^2, a^3, \dots\) repeat in a short cycle. Dividing by 10
is the same as asking for the **units digit**, and units digits cycle with period at most 4:

\[7^1 \to 7,\quad 7^2 \to 9,\quad 7^3 \to 3,\quad 7^4 \to 1,\quad 7^5 \to 7,\ \dots\]

To find \(7^{20} \bmod 10\), note the cycle length is 4 and \(20\) is a multiple of 4, so \(7^{20}\)
lands on the **last** entry of the cycle: remainder **1**. Match the exponent to its position with
"exponent mod cycle-length," and remember that a remainder of 0 means the *end* of the cycle, not
the start.

**Pick the smallest number that fits.** "\(n\) leaves remainder 2 when divided by 5" just means
\(n\) is one of \(2, 7, 12, 17, \dots\). For two conditions at once, list each and find the first
overlap; the pattern then repeats every \(\text{lcm}\) of the divisors.

## Worked examples

**Translate and compute.** A positive integer divided by 6 gives quotient 7 and remainder 4.
The integer is \(6\cdot 7 + 4 = 46\). (Swapping quotient and remainder — \(6\cdot 4 + 7 = 31\) — is
the classic trap.)

**Combine two conditions.** Find the smallest integer above 10 that leaves remainder 2 mod 5 and
remainder 1 mod 3. Numbers \(\equiv 2 \pmod 5\): \(2, 7, 12, 17, 22, \dots\); of these, the ones
\(\equiv 1 \pmod 3\) are \(7, 22, 37, \dots\) (they repeat every \(\text{lcm}(5,3)=15\)). The first
one above 10 is **22**.

**Reason with squares.** If \(n^2\) leaves remainder 4 when divided by 7, what can \(n\) leave?
Test each possible remainder \(r = 0,1,\dots,6\): \(r^2 \bmod 7\) gives \(0,1,4,2,2,4,1\). The value
4 appears at \(r = 2\) and \(r = 5\), so \(n\) leaves remainder **2 or 5** — *not* 4. The remainder of
\(n\) is generally **not** the same as the remainder of \(n^2\).

## Common traps

- **Forgetting to reduce at the end.** \(5\times 8 = 40\) is not the answer when dividing by 12; the
  remainder is \(40 - 36 = 4\).
- **Adding remainders when the numbers are multiplied** (or vice versa). Combine remainders the
  same way you combine the numbers, then reduce.
- **Swapping quotient and remainder** in \(n = dq + r\).
- **A remainder as large as the divisor.** Dividing by \(d\), the remainder must be \(0\) to \(d-1\).
- **Assuming \(n\) and \(n^2\) (or \(n\) and \(2n\)) share a remainder.** They usually don't — test it.

## Key takeaways

- Everything flows from \(n = dq + r\) with \(0 \le r < d\).
- To combine numbers, combine their remainders **and reduce again**: works for sums and products.
- Powers of a number cycle; use "exponent mod cycle-length," and treat a result of 0 as the end of
  the cycle.
- For "which could be" and two-condition problems, list the smallest values that fit and look for
  the overlap; it repeats every lcm of the divisors.
