---
id: quant-counting-probability-combinatorics
section: quant
topic: counting-probability
subtopic: combinatorics
title: "Combinatorics: Counting Without Listing"
tags: [combinatorics, counting, permutations, combinations, factorials]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Combinatorics is the art of counting arrangements and selections without writing them all out.
Almost every Focus counting problem reduces to two questions: **do I multiply or add?** and **does
order matter?** Get those two right and the formulas fall into place.

## Core concepts

**Fundamental counting principle (multiply for "and").** If one choice can be made \(m\) ways and
an independent next choice \(n\) ways, the two together can be made \(m \times n\) ways. Multiply
stages that happen *together*; **add** only mutually exclusive *cases* ("or").

**Factorial — arranging distinct things in a row.** \(n\) distinct items in a row:

\[n! = n \times (n-1) \times \cdots \times 2 \times 1\]

By convention \(0! = 1\).

**Permutations — order matters.** Choosing and arranging \(k\) of \(n\) distinct items:

\[P(n, k) = \frac{n!}{(n-k)!} = n(n-1)\cdots(n-k+1)\]

**Combinations — order does not matter.** Choosing \(k\) of \(n\) with no regard to order:

\[C(n, k) = \binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \frac{P(n,k)}{k!}\]

A combination is a permutation with the \(k!\) internal orderings divided out. "Committee,"
"group," "selection," "handshake" → combination. "Ranking," "arrangement," "line," "code" →
permutation.

**Identical items.** Arranging \(n\) items where some repeat (\(a\) alike, \(b\) alike, …):

\[\frac{n!}{a!\,b!\,\cdots}\]

Divide out the interchangeable duplicates. (This is why `LEVEL` has \(5!/(2!\,2!)\) arrangements,
not \(5!\).)

**Restrictions — two standard moves.**
- *Must be together:* glue the group into one block, arrange the blocks, then multiply by the
  internal arrangements of the block.
- *Must be apart (no two adjacent):* seat the unrestricted items first, then drop the restricted
  ones into the **gaps** between and around them.

## Worked examples

**Multiply.** A menu has 4 breads, 3 fillings, 2 spreads; one of each → \(4\times 3\times 2 = 24\)
sandwiches.

**Combination vs. permutation.** From 8 people, a *committee* of 3 is \(C(8,3) = 56\); a *ranked*
top-3 is \(P(8,3) = 336\). The ratio is \(3! = 6\), the orderings a committee ignores.

**Together.** Six people in a row with two specific people adjacent: treat the pair as one block →
\(5!\) arrangements of the 5 units, times \(2!\) for the pair's order \(= 240\).

## Common traps

- **Adding when you should multiply.** Independent successive choices multiply; \(4+3+2\) is wrong
  for the sandwich count.
- **Permutation vs. combination.** Using \(P(n,k)\) for an unordered selection over-counts by
  \(k!\); using \(C(n,k)\) for an ordered one under-counts.
- **Forgetting to divide out identical items.** \(5!\) over-counts `LEVEL` because swapping the two
  L's (or two E's) changes nothing.
- **"At least one" head-on.** Counting cases one by one invites double-counting. Use the
  complement: (total) − (none) is almost always cleaner.
- **Restriction, then forget the internal order.** After gluing a block, remember to multiply by
  the block's own arrangements.

## Key takeaways

- Decide multiply-vs-add and order-matters-vs-not *before* reaching for a formula.
- \(C(n,k) = P(n,k)/k!\) — a combination is a permutation with the orderings removed.
- Identical items: divide \(n!\) by the factorial of each repeat count.
- "At least one" → subtract the complement from the total.
- Restrictions: glue for "together," use gaps for "apart."
