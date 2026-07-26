---
id: quant-counting-probability-combinatorics
section: quant
topic: counting-probability
subtopic: combinatorics
title: "Combinatorics: Counting Arrangements and Selections"
tags: [combinatorics, permutations, combinations, factorial, counting]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Combinatorics is the art of counting outcomes **without listing them all**. On GMAT Focus
Quant the whole game is deciding a single question: **does order matter?** Get that right and
pick the matching tool, and most counting problems collapse into one line of arithmetic.

## Core concepts

**The factorial.** The number of ways to arrange \(n\) distinct objects in a row is
\(n!\) (read "\(n\) factorial"):

\[n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1\]

So \(5! = 5\cdot4\cdot3\cdot2\cdot1 = 120\). By convention \(0! = 1\).

**Permutations — order matters.** The number of ways to arrange \(k\) objects chosen from
\(n\) distinct objects, where the order of the chosen objects matters, is

\[P(n,k) = \frac{n!}{(n-k)!} = n(n-1)\cdots(n-k+1)\]

Use permutations for rankings, seatings, passwords, or codes — anything where "A then B"
differs from "B then A."

**Combinations — order does NOT matter.** The number of ways to *choose* \(k\) objects from
\(n\), ignoring order, is

\[C(n,k) = \binom{n}{k} = \frac{n!}{k!\,(n-k)!}\]

Use combinations for committees, teams, handshakes, or any unordered selection. Notice
\(C(n,k) = \dfrac{P(n,k)}{k!}\): a combination is a permutation with the \(k!\) reorderings of
the same group divided out.

**Two governing principles.**

- **Multiplication (AND).** If a task is a sequence of independent stages, multiply the counts.
  Choosing 3 seniors *and* 2 juniors: multiply \(C(5,3)\times C(4,2)\).
- **Addition (OR).** If outcomes fall into mutually exclusive cases, add the counts.

**Identical items.** When some objects repeat, divide by the factorial of each repeat count.
Distinct arrangements of a word with letter counts \(n_1, n_2, \dots\) totalling \(n\) letters:

\[\frac{n!}{n_1!\,n_2!\cdots}\]

**Circular arrangements.** Seating \(n\) people around a round table gives \((n-1)!\)
arrangements, because rotations of the same circle are not distinct — fix one person, then
arrange the rest.

## Worked examples

**Combination.** A book club picks 3 of its 8 members to lead a discussion. Order does not
matter, so \(C(8,3) = \dfrac{8\cdot7\cdot6}{3!} = \dfrac{336}{6} = 56\) ways.

**Permutation.** Those same 8 members award a gold, silver, and bronze badge — now order
matters, so \(P(8,3) = 8\cdot7\cdot6 = 336\) ways. Same people, \(3! = 6\) times as many
outcomes because the badges are distinguishable.

**Complement ("at least").** From 4 men and 3 women, choose a 3-person team with at least one
woman. Count the total and subtract the unwanted case: \(C(7,3) - C(4,3) = 35 - 4 = 31\).

## Common traps

- **Order confusion.** The single biggest error. A committee is unordered (combination); a
  lineup or ranking is ordered (permutation). Using \(P\) where \(C\) belongs overcounts by
  exactly \(k!\).
- **Adding instead of multiplying.** "3 seniors AND 2 juniors" multiplies: \(C(5,3)\times C(4,2)\),
  not \(C(5,3)+C(4,2)\).
- **Forgetting repeated items.** Arranging the letters of a word with repeats requires dividing
  \(n!\) by the factorial of *each* repeated letter's count — miss one and you overcount.
- **"At least one" head-on.** Counting cases directly often double-counts. Use the complement:
  total minus "none."
- **Blocks that must stay together.** Glue the block into one unit, arrange the units, then
  multiply by the internal arrangements of the block.

## Key takeaways

- Ask first: **does order matter?** Yes → permutation \(P(n,k)\); no → combination \(C(n,k)\).
- \(C(n,k) = \dfrac{P(n,k)}{k!}\) — dividing out the reorderings is the whole difference.
- Independent stages **multiply**; mutually exclusive cases **add**.
- Repeated identical items → divide by each repeat's factorial; round tables → \((n-1)!\).
- For "at least one," count the complement and subtract.
