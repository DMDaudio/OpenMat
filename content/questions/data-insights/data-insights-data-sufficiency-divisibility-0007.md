---
id: data-insights-data-sufficiency-divisibility-0007
section: data-insights
topic: data-sufficiency
subtopic: divisibility
type: data-sufficiency
difficulty: medium
tags: [divisibility, lcm]
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(n\) is a positive integer, is \(n\) divisible by 12?

1. \(n\) is divisible by 6.
2. \(n\) is divisible by 8.

*(Standard Data Sufficiency answer choices — see the DS section of
[CONTENT_SCHEMA.md](../../../CONTENT_SCHEMA.md).)*

## Explanation

\(12 = 2^2 \times 3\), so "divisible by 12" needs two factors of 2 and one factor of 3.

**Statement (1): divisible by 6** \((2 \times 3)\). Guarantees one 2 and one 3, but not a *second*
2. \(n = 6\) is not divisible by 12; \(n = 12\) is. **Not sufficient.**

**Statement (2): divisible by 8** \((2^3)\). Guarantees three 2s but no 3. \(n = 8\) is not
divisible by 12; \(n = 24\) is. **Not sufficient.**

**Together:** \(n\) is divisible by both 6 and 8, hence by their least common multiple,
\(\text{lcm}(6, 8) = 24\). Every multiple of 24 is divisible by 12. **Sufficient. Answer: (C).**

**Careful:** you can't just multiply \(6 \times 8 = 48\) — that double-counts the shared factor of
2. Use the LCM (24), which correctly keeps \(2^3 \times 3\).

## Hints

- Break 12 into primes: how many 2s and 3s does \(n\) need?
- Combine the statements via the least common multiple, not the product, to avoid double-counting shared factors.
