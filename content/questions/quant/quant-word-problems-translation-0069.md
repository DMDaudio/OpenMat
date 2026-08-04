---
id: quant-word-problems-translation-0069
section: quant
topic: word-problems
subtopic: translation
type: problem-solving
difficulty: medium
tags: [translation, coins, systems, setup]
choices:
  A: "8"
  B: "14"
  C: "15"
  D: "16"
  E: "20"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A jar contains only nickels (5 cents each) and dimes (10 cents each). There are 30 coins in the jar
with a total value of $2.30. How many dimes are in the jar?

## Explanation

Two facts give two equations. Let \(n\) be the number of nickels and \(d\) the number of dimes, and
work in cents ($2.30 = 230 cents).

- "30 coins" → \(n + d = 30\)
- "total value is 230 cents" → \(5n + 10d = 230\)

From the first equation, \(n = 30 - d\). Substitute into the value equation:

\[5(30 - d) + 10d = 230\]
\[150 - 5d + 10d = 230\]
\[150 + 5d = 230 \quad\Rightarrow\quad 5d = 80 \quad\Rightarrow\quad d = 16\]

So there are **16 dimes** (and \(30 - 16 = 14\) nickels).
(Check: \(14 \times 5 + 16 \times 10 = 70 + 160 = 230\) cents. ✓)

**The traps:**
- **B (14)** is the number of *nickels* — the other unknown. The question asks for dimes.
- **C (15)** assumes the coins split evenly, \(30 \div 2\), ignoring the value equation.
- **E (20)** and **A (8)** come from mixing up the coin values (e.g. treating nickels as 10 cents
  and dimes as 5) or a sign slip in the substitution. Keep 5-cent and 10-cent coins straight.

## Hints

- Set up two equations: one counting coins (\(n + d = 30\)) and one totaling value in cents
  (\(5n + 10d = 230\)).
- Substitute \(n = 30 - d\) into the value equation, then make sure you report *dimes*, not nickels.
