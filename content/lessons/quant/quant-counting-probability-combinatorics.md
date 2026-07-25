---
id: quant-counting-probability-combinatorics
section: quant
topic: counting-probability
subtopic: combinatorics
title: "Combinatorics: Counting Without Listing"
tags: [combinatorics, counting, permutations, combinations, factorial]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Combinatorics is the art of counting arrangements and selections **without writing them all
out**. On GMAT Focus Quant the numbers are kept small on purpose — the exam is testing whether
you can spot the *structure* of a counting problem, not whether you can grind through a large
factorial. Almost every problem reduces to three questions you ask in order:

1. Am I building the count from independent **stages** (pick a bread, then a cheese, then a drink)?
2. Does **order matter** among the things I select?
3. Are any of the items **identical**, so that some arrangements are really the same?

Answer those three and the right formula falls out.

## Core concepts

**The fundamental counting principle.** If one choice can be made in \(m\) ways and an
independent second choice in \(n\) ways, the two together can be made in \(m \times n\) ways.
Stages **multiply**; they never add. Three stages with 5, 4, and 2 options give
\(5 \times 4 \times 2 = 40\) outcomes.

**Factorial.** The number of ways to arrange \(n\) **distinct** items in a row is

\[n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1\]

with the convention \(0! = 1\). So 5 distinct books fill a shelf in \(5! = 120\) orders.

**Permutations — order matters.** Choosing \(k\) items from \(n\) and *arranging* them (distinct
roles, ranked positions, a seating order) is

\[{}_nP_k = \frac{n!}{(n-k)!} = n \times (n-1) \times \cdots \times (n-k+1)\]

Assigning president, vice-president, and treasurer to 8 people: \(8 \times 7 \times 6 = 336\).

**Combinations — order does not matter.** Choosing \(k\) items from \(n\) as an unordered
*group* (a committee, a handful, a subset) is

\[{}_nC_k = \binom{n}{k} = \frac{n!}{k!\,(n-k)!}\]

The extra \(k!\) in the denominator divides out the \(k!\) orderings of the same group, which the
permutation count treated as different. A committee of 3 from 7 people:
\(\binom{7}{3} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35\).

**A useful symmetry:** \(\binom{n}{k} = \binom{n}{n-k}\). Choosing which 5 of 7 to *include* is
the same as choosing which 2 to *leave out*.

**Arrangements with identical items.** When some of the \(n\) items are indistinguishable,
divide \(n!\) by a factorial for each repeated group. The distinct arrangements of the letters in
a word with counts \(n_1, n_2, \dots\) are

\[\frac{n!}{n_1!\,n_2!\cdots}\]

**Circular arrangements.** Seating \(n\) people around a round table has only \((n-1)!\) distinct
arrangements, because a rotation of everyone is the same seating — fix one person and arrange the
rest.

## Worked examples

**Stages multiply.** A lunch special picks one of 5 mains, one of 4 sides, one of 2 drinks. The
three choices are independent, so multiply: \(5 \times 4 \times 2 = 40\) specials. Adding
(\(5+4+2 = 11\)) answers a different question — "how many single items are on the menu."

**Order or not?** Pick 3 of 7 people. If you are ranking them 1st–2nd–3rd, order matters and the
count is \({}_7P_3 = 7 \times 6 \times 5 = 210\). If you are just forming a group of 3, order does
not matter and you divide by \(3! = 6\): \(\binom{7}{3} = 210 / 6 = 35\). Same selection, different
question — the word "committee," "group," or "set" signals a combination; "arrange," "order,"
"rank," or distinct titles signal a permutation.

**Split committees multiply.** Choose exactly 2 men from 5 **and** 2 women from 4:
\(\binom{5}{2} \times \binom{4}{2} = 10 \times 6 = 60\). The two selections are independent stages,
so the counts multiply — they are not added.

**Identical letters.** The word BANANA has 6 letters: A appears 3 times, N twice, B once. Treating
all 6 as distinct overcounts, so divide by the repeats:
\(\frac{6!}{3!\,2!} = \frac{720}{12} = 60\).

## Common traps

- **Adding when you should multiply.** Independent stages multiply. Add only when you are counting
  disjoint *cases* ("the number is red **or** blue"), never sequential choices.
- **Confusing permutations and combinations.** Distinct roles, rankings, or seatings ⇒ permutation
  (order matters). An unordered group, committee, or handful ⇒ combination (divide by \(k!\)).
- **Dividing by the wrong factorial.** For a combination of \(k\) items you divide by \(k!\), not by
  \(k\). \({}_7P_3 = 210\) becomes \(\binom{7}{3} = 210/3! = 35\), not \(210/3 = 70\).
- **Ignoring identical items.** Repeated letters or identical objects mean \(n!\) overcounts; divide
  by a factorial for each repeated group, and **multiply** those factorials in the denominator —
  never add them.
- **Forgetting a stage — or double-counting order in one.** In a split selection, count each group
  as a combination unless that group is itself ordered.

## Key takeaways

- Independent choices **multiply** (the fundamental counting principle); disjoint cases add.
- Arranging \(n\) distinct items uses \(n!\); arranging \(k\) of \(n\) uses \({}_nP_k\).
- **Order matters ⇒ permutation; order does not ⇒ combination.** A combination is a permutation
  divided by \(k!\).
- Identical items: divide \(n!\) by the factorial of each repeated group's count.
- Round table: \(n\) people seat in \((n-1)!\) ways — fix one seat to kill the rotations.
