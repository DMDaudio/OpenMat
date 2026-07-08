---
id: quant-word-problems-overlapping-sets-0006
section: quant
topic: word-problems
subtopic: overlapping-sets
type: problem-solving
difficulty: medium
tags: [overlapping-sets, inclusion-exclusion]
choices:
  A: "3"
  B: "5"
  C: "8"
  D: "10"
  E: "12"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

In a class of 30 students, 18 study French and 15 study Spanish. If 5 students study neither
language, how many students study both French and Spanish?

## Explanation

Use the two-set inclusion-exclusion formula. First, the number studying **at least one**
language is everyone minus those studying neither:

\[30 - 5 = 25 \text{ study at least one language}\]

Now apply:

\[\text{(at least one)} = \text{French} + \text{Spanish} - \text{both}\]
\[25 = 18 + 15 - \text{both} \implies \text{both} = 33 - 25 = 8\]

So **8** students study both.

**Why subtract "both":** the 18 French and 15 Spanish counts each include the both-language
students, so adding 18 + 15 double-counts them once. Subtracting "both" removes the duplicate.

## Hints

- First find how many study at least one language (total minus "neither").
- Then use: (at least one) = A + B − (both), and solve for "both".
