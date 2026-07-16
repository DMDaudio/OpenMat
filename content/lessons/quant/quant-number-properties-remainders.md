---
id: quant-number-properties-remainders
section: quant
topic: number-properties
subtopic: remainders
title: "Remainders & Modular Thinking"
tags: [remainders, modular-arithmetic, divisibility]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

A remainder question is really the statement "\(n\) is a multiple of \(d\), plus a little extra."
Writing that extra as an equation — \(n = dq + r\) — turns nearly every remainder problem into
straightforward algebra. The two reliable tools are the **division equation** and, when a problem
is small, **testing the smallest value** that fits.

## Core concepts

**The division equation.** When \(n\) divided by \(d\) leaves remainder \(r\),
\[n = dq + r, \quad 0 \le r < d\]
where \(q\) is the quotient. The remainder is always at least 0 and strictly less than the divisor.

**Remainders combine.** To find the remainder of a sum, product, or multiple, you can work with the
remainders themselves. If \(n\) leaves remainder \(4\) on division by \(7\), then \(3n\) leaves the
same remainder as \(3 \times 4 = 12\), i.e. \(12 - 7 = 5\). Reduce at each step to keep numbers small.

**Substitute the general form.** For "\(n\) has remainder \(4\) mod \(7\); find the remainder of
\(3n+2\)," write \(n = 7k + 4\):
\[3n + 2 = 3(7k+4) + 2 = 21k + 14 = 7(3k + 2)\]
That's a multiple of 7, so the remainder is \(0\). The \(21k\) term is always divisible by 7, so only
the constant part decides the remainder.

**Two simultaneous conditions.** "Remainder 3 mod 5 and remainder 2 mod 4" — list one sequence and
scan for a value that fits the other. \(3, 8, 13, 18, \dots\) (mod 5); the first that is also
\(\equiv 2 \pmod 4\) is \(18\).

## Worked examples

**Constant-only shortcut.** \(n = 7k + 4\Rightarrow 3n+2 = 7(3k+2)\), remainder \(\mathbf{0}\).
Only the "+4 → +12 → +2 after adding 2 → then ×... " reasoning matters; drop the \(7k\).

**Smallest common value.** Numbers with remainder 3 mod 5: \(3, 8, 13, 18\). Check each against
mod 4: \(18 \div 4 = 4\) r \(2\). So \(18\) is the smallest value satisfying both.

## Common traps

- **A remainder can't equal or exceed the divisor.** "Remainder 7 on division by 5" is impossible —
  it would reduce to remainder 2.
- **Forgetting remainder 0 is allowed.** If the algebra gives a clean multiple, the answer is 0.
- **Testing only one value for "could be."** A single value proves *possible*; ruling something out
  needs the general form \(n = dq + r\).

## Key takeaways

- Write \(n = dq + r\) with \(0 \le r < d\) — this equation solves most remainder problems.
- To combine remainders, reduce at each step; multiples of the divisor drop out.
- For simultaneous conditions, list one sequence and scan for the first term fitting the other.
- A remainder is always less than the divisor, and 0 is a valid remainder.
