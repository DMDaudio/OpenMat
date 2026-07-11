---
id: quant-number-properties-remainders
section: quant
topic: number-properties
subtopic: remainders
title: "Remainders"
tags: [remainders, division, modular-arithmetic, cyclicity]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Remainder questions look intimidating but reduce to one equation and a few habits. The GMAT loves
them because they reward structure over brute force: you can answer "what is the remainder when
\(3^{47}\) is divided by 5?" without ever computing \(3^{47}\).

## Core concepts

**The division identity.** When a positive integer \(n\) is divided by a positive integer \(d\),
there is a unique quotient \(q\) and remainder \(r\) with

\[n = qd + r, \qquad 0 \le r < d.\]

The remainder is always at least 0 and strictly less than the divisor. Whenever a problem says
"the remainder is \(r\) when divided by \(d\)," immediately write \(n = qd + r\) — that single
substitution unlocks most questions.

**Remainders add and multiply.** You can do arithmetic on remainders directly (this is modular
arithmetic). If \(n\) leaves remainder \(r\) on division by \(d\), then to find the remainder of
\(an + b\), just compute \(ar + b\) and reduce mod \(d\). Substituting \(n = qd + r\) shows why:
the \(qd\) part is divisible by \(d\) and contributes nothing to the remainder.

**Cyclicity of powers.** Remainders of \(a^1, a^2, a^3, \dots\) on division by \(d\) eventually
repeat in a fixed-length cycle. Find the cycle, then use the exponent's position within it. For
\(3^k \bmod 5\): the remainders are \(3, 4, 2, 1, 3, 4, 2, 1, \dots\) — a cycle of length 4. To get
\(3^{47}\), note \(47 = 4(11) + 3\), so \(3^{47}\) sits at position 3 in the cycle → remainder \(2\).

**Combining two conditions.** "Leaves remainder 2 mod 5 and remainder 1 mod 3" defines a single
family of numbers. List the smaller list and check it against the other condition:
\(\{2, 7, 12, 17, 22, \dots\}\) against "\(\equiv 1 \bmod 3\)" first hits at \(7\), and then every
\(15\) (\(= 5 \times 3\)) after that: \(7, 22, 37, \dots\).

## Worked examples

**Linear expression.** When \(n\) is divided by 7 the remainder is 4. What is the remainder when
\(3n + 5\) is divided by 7? Work with the remainder: \(3(4) + 5 = 17\), and \(17 = 2(7) + 3\), so
the remainder is **3**. (Check with \(n = 11\): \(3(11)+5 = 38 = 5(7)+3\). ✓)

**Power.** Remainder of \(7^{100}\) mod 4? \(7 \equiv 3 \bmod 4\), and powers of 3 mod 4 cycle
\(3, 1, 3, 1, \dots\) (length 2). Even exponent → position 2 → remainder **1**.

## Common traps

- **Remainder ≥ divisor.** A remainder must be less than the divisor. If your work gives a
  remainder of 17 when dividing by 7, reduce it (\(17 \to 3\)).
- **Multiplying then forgetting to reduce.** \(3 \times 4 + 5 = 17\) is not the answer mod 7 —
  reduce it to 3.
- **Assuming a unique number.** "Remainder 3 when divided by 5" describes infinitely many numbers
  (\(3, 8, 13, \dots\)); pick the smallest that fits, or keep it as \(5q + 3\).
- **Miscounting the cycle position.** If the cycle has length 4 and the exponent is a multiple of
  4, you are at the *end* of the cycle (position 4), not position 0.

## Key takeaways

- Write \(n = qd + r\) with \(0 \le r < d\) the moment a remainder is mentioned.
- Do arithmetic on the remainders themselves, then reduce mod \(d\).
- For powers, find the repeating cycle of remainders and use the exponent's position in it.
- For two simultaneous remainder conditions, list one and test against the other; solutions repeat
  every \(\text{lcm}\) of the divisors.
