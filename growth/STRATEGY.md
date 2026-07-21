# OpenMat Growth Playbook

> **This is the canonical growth strategy for OpenMat, and the operating manual for the daily
> growth run.** It plays the same role for user/contributor acquisition that
> [`curriculum.md`](../curriculum.md) plays for content: every growth run consults this file,
> executes the next highest-value item, logs it in [`LOG.md`](./LOG.md), and stops.
>
> It is intentionally public. OpenMat is an open project; building in the open is on-brand and
> costs nothing.

## The goal

Three outcomes, in priority order:

1. **Users** — GMAT Focus test-takers who study on the site and come back.
2. **Contributors** — people who write/review questions and lessons, or improve the code.
3. **Feedback** — a tight loop so the product improves faster than we guess.

Users and contributors reinforce each other: a bigger question bank attracts more studiers, and
more studiers surface more contributors and better feedback. The strategy optimizes that flywheel.

## Who we're talking to (ICP)

| Audience | Where they are | What they want | Our hook |
|----------|----------------|----------------|----------|
| **Cost-sensitive test-takers** | r/GMAT, GMAT Club forums, GMAT Discord servers, YouTube comments | Free, current (Focus Edition) practice with real explanations | "Free forever, open-source. No paywall, no trial." |
| **High scorers / tutors** | r/GMAT, LinkedIn, GMAT Club | To give back, build a public teaching portfolio, signal expertise | "Your name on verified questions thousands study from." |
| **OSS / edtech developers** | Hacker News, Lobsters, dev.to, GitHub | Meaningful side projects, clean codebases to contribute to | "Plain Markdown + JSON, no DB, good-first-issues, MIT/CC-BY-SA." |
| **MBA applicants (broad)** | LinkedIn, r/MBA, Twitter/X | Anything that lowers the cost of applying | "The community-built GMAT prep." |

## Messaging pillars (use these consistently)

1. **Free forever, genuinely open** — CC-BY-SA content, MIT code. A real alternative to $150–350 courses.
2. **Built for the current exam** — GMAT **Focus Edition**, not the retired classic format (this is a real differentiator; a lot of free material online is stale).
3. **Quality-controlled, original** — `draft → in-review → verified`; no copied GMAC content; a wrong answer is worse than no question.
4. **Yours to build on** — fork it, translate it, remix it. Contributors get real credit.

Always link the study site (<https://dmdaudio.github.io/OpenMat/>) for users and the repo for contributors.

## Channels & tactics

**Owned / compounding (do these first — they work while we sleep):**
- **GitHub discoverability** — repo topics/tags, a crisp description, `good first issue` + `help wanted` labels, a pinned "start here" issue, badges. Gets us found by developers and shows up in GitHub search.
- **SEO-friendly content** — the study site itself; lesson pages are indexable, evergreen search bait for "free GMAT Focus [topic] practice."
- **"Awesome list" inclusion** — PRs adding OpenMat to relevant awesome-* and free-resources lists (respect each list's criteria).

**Community (highest user intent — respect each community's self-promo rules):**
- **r/GMAT** — by far the highest-intent audience. Lead with value (a free resource + a genuine ask for feedback), never a naked ad. Read the subreddit rules each time; many require flairing self-promo and limit frequency.
- **GMAT Club forums** — long-lived threads, strong SEO. A "free open-source question bank" thread.
- **GMAT Discord / study servers** — share in resource channels, offer to take feedback.

**Developer / launch (bursty — good for contributors & a traffic spike):**
- **Show HN** — the OSS + edtech angle. One good shot; time it when the bank is meaty enough to impress.
- **Lobsters / dev.to / Hashnode** — write-up of how it's built (Markdown-as-database, zero-dependency build).
- **Product Hunt** — later, once the site is polished and the bank is deep.

**Direct (relationship-building):**
- **LinkedIn / X** — short build-in-public updates ("this week OpenMat added X verified questions"). Compounds slowly, reaches applicants + tutors.

## The daily growth run: operating procedure

Each run does **one** unit of high-value work, end to end, and stops. Don't try to do everything.

1. **Read [`LOG.md`](./LOG.md)** to see what's already done and what's queued. Never repeat a post or re-file a duplicate issue.
2. **Pick the next item** — highest value not yet done. Rough weekly rotation to stay balanced:
   - *Owned/compounding* (discoverability, README, labels, awesome-lists) — bias here early; it compounds.
   - *A ready-to-publish post draft* for one channel (save under [`posts/`](./posts/), dated).
   - *Contributor onboarding* — create/curate 1–3 well-scoped `good first issue`s.
   - *Feedback synthesis* — read new issues/PRs/comments, distill into a short "what users are telling us" note and, if warranted, product issues.
3. **Produce the artifact** — a committed file (post draft, doc, label/README change) and/or an in-scope GitHub issue. Keep external *posting* for a human unless explicitly authorized (see guardrails).
4. **Log it** in `LOG.md` (date, what, where it lives, what a human still needs to do).
5. **Open/att­ach to the PR** for committed changes; **notify** the user with anything that needs them (posts to publish, decisions).

## Metrics to watch (report movement, not vanity)

- GitHub **stars, forks, unique contributors**, external issues/PRs opened.
- Study-site **traffic** (if/when analytics are added — see backlog).
- Community **engagement** (Reddit upvotes/comments, HN points, Discord reactions) on things we posted.
- **Content depth** (questions/lessons, % verified) — the product metric that makes all the above easier.

Baseline is roughly zero today; the first job is to establish the baseline and get the first non-founder star, user, and contributor.

## Guardrails (non-negotiable)

- **A human publishes external posts.** Drafts are prepared here; the account owner reviews and posts. Never assume prior approval carries to a new post.
- **No spam, no astroturfing.** One genuine post per community, following its rules. Never fabricate reviews, testimonials, upvotes, or sockpuppet accounts.
- **Be transparent.** Don't hide that the project is early or that content is community/AI-assisted where a community's norms expect disclosure.
- **No impersonation** of GMAC, tutors, or any person/org. OpenMat is unaffiliated with GMAC — say so where relevant.
- **Respect copyright.** Never reproduce real GMAT questions or paid-course material anywhere, including promo.
- **GitHub actions stay in scope** (`dmdaudio/openmat`) and proportionate — a few high-quality issues, not a flood.

## Backlog (living — check LOG.md for status)

- [ ] Set repo topics/description + `good first issue` / `help wanted` labels; pin a "Start here" issue.
- [ ] Draft the r/GMAT launch post (value-first, feedback ask).
- [ ] Draft the Show HN post (time it for when the bank is deeper).
- [ ] Create 3–5 `good first issue`s (write one question in an uncovered subtopic; review an in-review question; small site UX fixes).
- [ ] Add privacy-respecting, self-hosted-friendly analytics to the study site (so we can measure traffic) — as a product issue.
- [ ] Draft a GMAT Club forum intro post.
- [ ] Build a "free GMAT resources" awesome-list target list and submit PRs.
- [ ] Add a lightweight in-site feedback link (GitHub issue template deep-link) so users can report bad answers in one click.
- [ ] Build-in-public LinkedIn/X update template + weekly cadence.
