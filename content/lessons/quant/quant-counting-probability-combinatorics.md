---
id: quant-counting-probability-combinatorics
section: quant
topic: counting-probability
subtopic: combinatorics
title: "Combinatorics: Counting Arrangements & Selections"
tags: [combinatorics, counting-principle, permutations, combinations, factorial]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Combinatorics is the art of counting *how many* ways something can happen without listing them
all. On GMAT Focus Quant the numbers stay small, so the challenge is never the arithmetic — it is
deciding **which counting move applies**. Three questions sort out almost everything:

1. Am I making a sequence of independent choices? → **multiply** (fundamental counting principle).
2. Am I arranging items where **order matters**? → **permutation**.
3. Am I selecting a group where **order does not matter**? → **combination**.

Get the classification right and the formula is easy.

## Core concepts

**Fundamental counting principle.** If one stage can happen in \(m\) ways and a second, independent
stage in \(n\) ways, the two together happen in \(m \times n\) ways. This extends to any number of
stages — you **multiply**, never add. (You add only when the choices are mutually exclusive
alternatives — "either this *or* that" — not sequential steps.)

**Factorial.** \(n! = n \times (n-1) \times \cdots \times 2 \times 1\), the number of ways to arrange
\(n\) distinct items in a row. By convention \(0! = 1\).

**Permutations — order matters.** The number of ways to arrange \(k\) of \(n\) distinct items in
order:

\[P(n,k) = \frac{n!}{(n-k)!} = n \times (n-1) \times \cdots \times (n-k+1)\]

Example: 3 of 5 books in order = \(5 \times 4 \times 3 = 60\).

**Combinations — order does not matter.** The number of ways to *select* \(k\) of \(n\) distinct
items when arrangement is irrelevant:

\[C(n,k) = \binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \frac{P(n,k)}{k!}\]

A combination is just a permutation with the internal orderings divided out. Example: a committee of
3 from 8 people = \(\dfrac{8 \times 7 \times 6}{3!} = \dfrac{336}{6} = 56\).

Two handy facts: \(C(n,k) = C(n,\,n-k)\) (choosing who is *in* is the same as choosing who is *out*),
and \(C(n,0) = C(n,n) = 1\).

## Worked examples

**Multiply the stages.** A meal is one appetizer (4 options), one entrée (5), and one dessert (3).
Meals \(= 4 \times 5 \times 3 = 60\). Independent, sequential choices → multiply.

**Arrange with a restriction.** In how many ways can 5 people sit in a row if two specific people
must sit together? Glue the pair into a single block: now 4 units arrange in \(4! = 24\) ways, and the
pair can switch places inside the block in \(2! = 2\) ways, giving \(24 \times 2 = 48\).

**Split into groups.** Choose a committee of 4 from 5 men and 4 women with exactly 2 of each. Choose
the men *and* the women, so multiply: \(C(5,2) \times C(4,2) = 10 \times 6 = 60\).

**"At least" → count the complement.** From 9 people, how many teams of 4 include at least one of the
3 juniors? Counting "at least one" directly means adding several cases; it is faster to take *all*
teams minus the teams with *no* junior: \(C(9,4) - C(6,4) = 126 - 15 = 111\).

## Common traps

- **Adding when you should multiply.** Sequential independent stages multiply. Adding gives a number
  far too small.
- **Permutation vs. combination.** If the answer to "does rearranging the same items give a *different*
  outcome?" is no, use a combination. A committee of {A, B, C} is the same committee as {C, B, A} — do
  not count the orderings. Using \(P(n,k)\) for a selection over-counts by a factor of \(k!\).
- **Forgetting the internal order of a block.** When you glue items together for an
  "adjacent" restriction, remember to multiply by the arrangements *inside* the block.
- **Attacking "at least one" head-on.** Complementary counting (total − none) is almost always cleaner
  and avoids double-counting the overlap cases.

## Key takeaways

- Independent, sequential choices **multiply**; mutually exclusive alternatives add.
- **Order matters → permutation** \(\left(\tfrac{n!}{(n-k)!}\right)\); **order doesn't → combination**
  \(\left(\tfrac{n!}{k!(n-k)!}\right)\). A combination is a permutation divided by \(k!\).
- Break "and" problems into stages and multiply the counts for each stage.
- For "at least one," count the total and subtract the "none" case.
