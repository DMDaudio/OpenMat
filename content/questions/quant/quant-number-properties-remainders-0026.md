---
id: quant-number-properties-remainders-0026
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, products]
choices:
  A: "1"
  B: "2"
  C: "4"
  D: "8"
  E: "11"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integers \(a\) and \(b\) are each divided by 12, the remainders are 5 and 8
respectively. What is the remainder when the product \(ab\) is divided by 12?

## Explanation

To get the remainder of a product, multiply the remainders and then reduce mod 12:

\[\text{remainder of } ab = \text{remainder of } (5 \times 8) = \text{remainder of } 40.\]

Since \(40 = 12 \times 3 + 4\), the remainder is **4**.

Confirm with the smallest values: \(a = 5\), \(b = 8\), so \(ab = 40\), and \(40 \div 12\) leaves
remainder **4**. ✓

**Traps:** answer **A (1)** *adds* the remainders (\(5 + 8 = 13\), then \(13 - 12 = 1\)) instead of
multiplying them. Answer **D (8)** and answer **E (11)** come from botching the final reduction of
40 (subtracting 32 or 29 rather than a multiple of 12). The key discipline: combine the remainders
the same way the numbers are combined — here, multiply — then reduce one last time.

## Hints

- The remainder of a product is the remainder of (remainder \(\times\) remainder).
- \(5 \times 8 = 40\) is not the final answer — reduce 40 modulo 12.
