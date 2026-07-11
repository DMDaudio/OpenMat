---
id: data-insights-two-part-analysis-simultaneous-conditions-0009
section: data-insights
topic: two-part-analysis
subtopic: simultaneous-conditions
type: two-part-analysis
difficulty: medium
tags: [two-part-analysis, system-of-equations, simultaneous-conditions]
parts:
  Nuts: "$1|$2|$3|$4|$5|$6"
  Juice: "$1|$2|$3|$4|$5|$6"
answer: "Nuts=$2; Juice=$3"
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A vending machine sells only two items: a bag of nuts and a bottle of juice, each at a fixed
whole-dollar price. A customer notes two receipts:

- 2 bags of nuts and 1 bottle of juice cost **$7** in total.
- 1 bag of nuts and 2 bottles of juice cost **$8** in total.

In the first column select the price of one **bag of nuts**, and in the second column select the
price of one **bottle of juice**, consistent with both receipts. Make only one selection per column.

## Explanation

Let \(n\) be the price of nuts and \(j\) the price of juice. The two receipts give a system:

\[2n + j = 7 \qquad\text{and}\qquad n + 2j = 8.\]

**Add** the equations to exploit the symmetry:

\[(2n + j) + (n + 2j) = 7 + 8 \;\Rightarrow\; 3n + 3j = 15 \;\Rightarrow\; n + j = 5.\]

Now subtract \(n + j = 5\) from \(2n + j = 7\):

\[(2n + j) - (n + j) = 7 - 5 \;\Rightarrow\; n = 2,\]

so \(j = 5 - 2 = 3\). Check the untouched equation: \(n + 2j = 2 + 6 = 8\). ✓

So **Nuts = $2** and **Juice = $3**.

A common slip is to solve only the first equation and guess a pair that fits it (e.g. \(n=3, j=1\)
gives \(2(3)+1 = 7\)) — but that pair fails the *second* condition (\(3 + 2 = 5 \ne 8\)). In two-part
questions both conditions must hold simultaneously.

## Hints

- Write one equation per receipt, then combine them — adding these two makes the numbers collapse nicely.
- A pair that satisfies only one condition is a trap; test your answer against **both** receipts.
