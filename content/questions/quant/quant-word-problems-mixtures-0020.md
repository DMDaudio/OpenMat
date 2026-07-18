---
id: quant-word-problems-mixtures-0020
section: quant
topic: word-problems
subtopic: mixtures
type: problem-solving
difficulty: hard
tags: [mixtures, replacement, concentration]
choices:
  A: "6"
  B: "8"
  C: "10"
  D: "12"
  E: "15"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A 40-liter tank is completely filled with a 25% antifreeze solution. Some of the solution is
drained off and replaced with an equal volume of **pure antifreeze**, leaving the tank full at
40% antifreeze. How many liters were drained and replaced?

## Explanation

Let \(x\) be the liters drained (and then replaced with pure antifreeze). Because you put back
exactly what you took out, the total volume stays **40 liters** throughout — that is what makes
this a "replacement" problem rather than a simple addition.

Draining \(x\) liters removes solution at its *current* 25% concentration, so it removes
\(0.25x\) liters of antifreeze. Antifreeze remaining:

\[0.25 \times 40 - 0.25x = 10 - 0.25x.\]

Now add \(x\) liters of pure antifreeze (100%):

\[10 - 0.25x + x = 10 + 0.75x.\]

This must equal \(40\%\) of the still-40-liter tank, i.e. \(0.40 \times 40 = 16\):

\[10 + 0.75x = 16 \implies 0.75x = 6 \implies x = 8.\]

So **8** liters were drained and replaced. Check: after draining 8 L you have \(10 - 2 = 8\) L of
antifreeze; adding 8 L pure gives \(16\) L in \(40\) L \(= 40\%\). ✓

**The trap:** it's tempting to treat draining \(x\) liters as removing \(x\) liters of pure
antifreeze, or to let the volume change. Draining removes solution at 25%, and the replacement
keeps the total fixed at 40 liters.

## Hints

- The volume stays 40 liters the whole time — you replace exactly what you remove.
- Draining \(x\) liters removes \(0.25x\) liters of antifreeze (the *current* concentration),
  not \(x\) liters of it.
