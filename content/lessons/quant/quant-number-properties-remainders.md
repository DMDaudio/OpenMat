---
id: quant-number-properties-remainders
section: quant
topic: number-properties
subtopic: remainders
title: "Remainders & Modular Thinking"
tags: [remainders, divisibility, modular-arithmetic]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

A remainder question is really a question about *structure*: every integer can be written as
"a multiple of the divisor, plus a leftover." Once you write that down, most remainder problems
turn into ordinary algebra. Focus Quant loves these because the slow way (plugging in numbers
until something works) is beatable by a one-line setup.

## Core concepts

**The division identity.** When a positive integer \(n\) leaves remainder \(r\) on division by
\(d\),

\[n = dq + r, \qquad 0 \le r < d\]

where \(q\) is the quotient. The remainder is always **non-negative and strictly less than the
divisor** — a remainder of \(7\) on division by \(5\) is impossible; reduce it.

**Remainders add and multiply.** You can do arithmetic on remainders directly and only reduce at
the end. If \(n\) leaves remainder \(r\), then:

- \(kn\) leaves the remainder of \(kr\) (then reduce mod \(d\)).
- \(n + m\) leaves the remainder of \(r_n + r_m\) (then reduce).

Example: \(n\) leaves remainder \(4\) on division by \(7\). Then \(3n\) leaves the remainder of
\(3 \times 4 = 12\), and \(12 = 7 + 5\), so the remainder is \(5\) — no need to know \(n\) itself.

**Two conditions at once.** "Remainder \(3\) mod \(5\) **and** remainder \(4\) mod \(7\)" pins the
number down modulo \(5 \times 7 = 35\). List one condition (\(4, 11, 18, 25, 32, \dots\) for
"\(\equiv 4 \bmod 7\)") and scan for the first that also satisfies the other. Here \(18\) works, so
every such number is \(35k + 18\).

**Remainder 0 means "divisible."** "Leaves no remainder" and "is a factor of" are the same
statement — translate freely between them.

## Worked examples

**Multiplying a remainder.** \(n\) divided by \(6\) leaves remainder \(5\). Remainder of \(4n\)?
\(4 \times 5 = 20 = 3\times 6 + 2\), so the remainder is \(2\).

**Combining two moduli.** \(n \equiv 2 \pmod 4\) and \(n \equiv 3 \pmod 5\). Numbers that are
\(3 \bmod 5\): \(3, 8, 13, 18, 23, \dots\); the first that is also \(2 \bmod 4\) is \(18\)
(\(18 = 4\times4 + 2\)). So \(n = 20k + 18\).

## Common traps

- **Leaving an oversized remainder.** After multiplying or adding, always reduce so the remainder
  is less than the divisor. \(12 \bmod 7\) is \(5\), not \(12\).
- **Assuming a unique value.** Conditions like "remainder 3 mod 5" describe an infinite family
  \(5k+3\); test the smallest valid case and, if the answer could change, a second case.
- **Ignoring 0 as a possibility.** The smallest non-negative value satisfying "remainder \(r\)" can
  be \(r\) itself (when the quotient is 0). Don't assume \(n > d\).

## Key takeaways

- Write \(n = dq + r\) with \(0 \le r < d\) — that single line unlocks most problems.
- You can multiply or add remainders and reduce at the end; you rarely need the actual number.
- Two modular conditions pin a value down modulo the product of the divisors — list and scan.
- "Remainder 0," "divisible by," and "is a factor of" all say the same thing.
