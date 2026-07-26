# Provoked Pixels — DaaS Storefront Gap Analysis

**Date:** 24 Jul 2026  
**Scope:** Homepage content, design, and conversion flow  
**Benchmark:** Designjoy-style productized design (DaaS) agencies  

---

## Executive verdict

The site **does project Provoked Pixels as a design subscription (DaaS)**. A visitor can learn the price (₹49,990/month), the model (one active request, unlimited queue, Notion board, 24–48h), and the flexibility (pause anytime).

It does **not** yet feel like a complete DaaS agency storefront. It reads more like a **strong marketing landing page for a sales-led subscription** than a **self-serve productized design product**.

| Question | Answer |
|----------|--------|
| Does the client understand what you’re offering? | **Mostly yes** — model, price, scope, and process are clear. Gaps remain around “how do I actually start paying?”, revisions depth, and who does the work. |
| Does the site project Provoked as a DaaS agency? | **Yes, directionally** — eyebrow “Design on subscription”, hero, process, single plan, FAQ. Weakened by call-only CTAs, thin proof, and “Subscribe” copy without a subscribe action. |
| What’s the biggest gap vs a perfect DaaS site? | **Trust + close the loop** — testimonials/logos/real work, then either self-serve payment or a crystal-clear “book → pay → Notion” journey. |

---

## Current flow (what exists)

```
Header → Hero → How it works → Benefits → Recent work → Pricing → FAQ → Footer
```

| Section | What it does well |
|---------|-------------------|
| Hero | Clear value prop; dual CTAs (pricing + book call) |
| How it works | Simple 3-step mental model |
| Benefits | Founder-relevant reasons to switch |
| Work | Capability chips + gallery (partially real) |
| Pricing | One plan, hire/agency comparison, trust notes |
| FAQ | Strong India-friendly answers (pause, GST, hire vs subscribe) |
| Footer | Minimal — logo + copyright only |

**Conversion today:** every money-intent path ends at **Book a 15-min intro call** (Cal.com) or mailto fallback — not checkout.

---

## What a client clearly understands

- This is a **monthly design subscription**, not a classic project agency.
- Price is **₹49,990 / month**, flat.
- Work model: **one active request**, unlimited queue, **~24–48 hour** turnaround.
- Tooling: **shared Notion board**.
- Scope examples: decks, UI, campaigns, Framer, brand, stage visuals.
- Flex: **pause / cancel anytime**, month-to-month.
- Not for: custom software, heavy 3D, shoots, print production, media buying.

---

## Gaps (prioritized)

### P0 — Blocks “perfect DaaS” clarity or conversion

#### 1. Copy says “Subscribe”; product asks you to book a call
- How-it-works step 01 is titled **Subscribe** (“Pick the monthly plan…”).
- Pricing CTA is **Book a 15 min intro call**.
- There is **no** Start / Subscribe / Pay action on the site.

**Gap:** Prospect hears “productized self-serve” but experiences “sales call first.” That mismatch undermines DaaS positioning.

**Fix options:**
- A) Keep sales-led: rename step 01 to **Book intro** / **Get started**, and spell out `Call → invoice → Notion`.
- B) True DaaS: add self-serve payment (when ready) and keep Subscribe language.

#### 2. No closed loop after the call
FAQ describes: subscribe → Notion invite within a day.  
Site never shows: **what happens after the 15-min call** (payment, GST invoice, board access, first brief).

**Gap:** Client understands the *product*, not the *path to become a client*.

#### 3. Trust layer is thin for a B2B purchase of ~₹50k/month
Missing:
- Testimonials / founder quotes
- Client logo strip
- Named case studies with outcomes
- Founder / team face (“who you’re hiring”)
- Guarantee / revision policy as a visible block (not only FAQ)

**Gap:** DaaS sites sell *confidence*. Provoked sells *explanation*. Explanation without proof feels like an agency brochure.

#### 4. Portfolio proof is incomplete
- Real work: Abhyudaya pieces.
- Several items still use generic `/images/img/*.jpg` with aspirational titles (SaaS site, B2B UI, stage loops).

**Gap:** Weakens “senior studio craft” claim. A DaaS buyer judges quality from the gallery first.

---

### P1 — Strong DaaS storefront patterns missing

#### 5. No “what’s included / what’s not” matrix on-page
Capabilities chips + FAQ exclusions exist, but Designjoy-style two-column **Included / Not included** is gone (services section was removed).

**Gap:** Scope anxiety remains until FAQ is opened.

#### 6. No Notion board preview
Copy promises a shared board; there is no screenshot or walkthrough UI.

**Gap:** Process feels abstract. Seeing the board is a major DaaS conversion asset.

#### 7. No final CTA band before footer
FAQ ends → sparse footer. No last “₹49,990 · Book a call / Subscribe” strip.

**Gap:** Lost conversion moment after FAQ resolves objections.

#### 8. Footer is incomplete
`Footer.jsx` defines `FOOTER_LINKS` and `SOCIAL_LINKS` but does not render them. No email, social, section nav, or legal links.

**Gap:** Feels unfinished; weak for B2B trust and SEO crawl paths.

#### 9. No legal / policy pages
No Privacy, Terms, or refund/pause policy page.

**Gap:** Especially important with GST invoicing and Indian startups paying by UPI/NEFT.

#### 10. Dead / half-wired code signals
- `getClientSlots()` in `DaasHero.jsx` is unused; status pill is hardcoded “Avg. 48-hour delivery”.
- `NEXT_PUBLIC_CLIENT_SLOTS` in env is unused.
- Footer constants unused.

**Gap:** Product polish; also suggests unfinished features.

---

### P2 — Clarity refinements (offer is mostly clear)

#### 11. ICP is broad
“Startups and growing businesses” — no stage, team size, India-first vs global, or “best for / not for” beyond FAQ exclusions.

#### 12. Revision rules are soft
“Revise until you’re happy” — no note on what counts as a new request vs a revision, or typical revision turnaround.

#### 13. Billing mechanics under-explained on-page
FAQ mentions GST-ready invoicing; pricing does not surface payment methods, invoice timing, or when the month starts.

#### 14. Brand name vs product name
Site sells DaaS well; “Provoked Pixels” still reads as a **studio brand**. Little “product name” framing (e.g. membership name) that Designjoy uses to feel like a product, not a service firm.

#### 15. Work cards are not deep
No case study click-through, problem → solution → outcome. Gallery is browse-only.

#### 16. No mobile sticky CTA
Sticky header helps; many DaaS sites also use a persistent mobile bottom bar (price + book).

#### 17. Analytics / conversion instrumentation unknown
Need clear events: pricing view, book-call click, Cal.com booked — to iterate like a product.

---

## Does the site project Provoked as a DaaS agency?

### Signals that say yes
- Eyebrow: “Design on subscription”
- Hero: “Your design team — without the full-time hire”
- Meta title/description: design subscription, ₹49,990, pause anytime
- Process: Subscribe → Request → Receive
- Single flat plan + unlimited queue + one-at-a-time
- Pause / cancel messaging throughout
- Benefits oriented to founders, not project SOWs

### Signals that weaken it
- Every CTA is **Book a call**, not **Subscribe**
- No self-serve checkout
- Thin social proof (agency brochure feel)
- Placeholder work assets
- Minimal footer / no policies
- Step titled Subscribe without a subscribe action

**Net:** Positioning is **DaaS-correct**. Experience is still **agency-intro-call**. For a perfect DaaS agency site, positioning and experience must match.

---

## Perfect DaaS checklist (Provoked status)

| Pattern | Status |
|---------|--------|
| Clear subscription offer in hero | Done |
| Single transparent price | Done |
| How it works (3 steps) | Done |
| Benefits / why switch | Done |
| Work / capabilities | Partial (placeholders) |
| Pricing + comparison | Done |
| FAQ for objections | Done |
| Self-serve subscribe / pay | Missing (call-led by choice) |
| Scarcity / availability | Env unused; pill is delivery speed |
| Testimonials | Missing |
| Logo wall | Missing |
| Founder / team | Missing |
| Scope included / excluded UI | Partial (FAQ only) |
| Board / workflow preview | Missing |
| Closing CTA section | Missing |
| Full footer + legal | Missing |
| Case study depth | Missing |
| Post-purchase onboarding path on-site | Described only |

---

## Recommended content & flow upgrades (ordered)

1. **Align language with funnel** — either rename “Subscribe” or add real subscribe.
2. **Add “How you start” strip** — Book call → Pay (invoice/UPI) → Notion board → First brief (even while payment is manual).
3. **Replace placeholder work** with real Provoked projects only (fewer, better).
4. **Add testimonials + logos** (even 3 short founder quotes).
5. **Add included / not included** block above FAQ.
6. **Add Notion screenshot** in How it works or Benefits.
7. **Add closing CTA** after FAQ.
8. **Complete footer** — links, email, social, privacy/terms.
9. **Optional:** founder note / “Meet the studio” for human trust.
10. **Later:** self-serve payment that mints a unique checkout per customer (Razorpay API / serverless).

---

## Suggested section order (target)

```
Hero
How it works (+ Notion preview)
What’s included / not included
Benefits
Recent work (real only)
Social proof (logos + testimonials)
Pricing
How you start (call → pay → board)   ← new, if staying sales-led
FAQ
Final CTA
Footer (nav, contact, legal)
```

---

## Content clarity scorecard

| Dimension | Score (1–5) | Note |
|-----------|-------------|------|
| Offer type (DaaS vs agency) | 4 | Strong; CTA mismatch softens it |
| Price clarity | 5 | Excellent |
| Delivery model | 5 | One-at-a-time + queue clear |
| Scope clarity | 3 | Chips + FAQ; no matrix |
| Trust / proof | 2 | Thin |
| Path to become a client | 2 | Call only; post-call unclear |
| Brand as productized studio | 3 | Good copy, incomplete storefront |
| India-fit language | 4 | Pause, GST, hire costs — good |

**Overall:** Strong foundation. Main gaps are **trust**, **start path honesty**, and **proof quality** — not the core offer explanation.

---

## Source files reviewed

- `app/page.jsx`, `app/layout.jsx`
- `content/daasHome.js`, `daasPricing.js`, `daasFaqs.js`, `daasWork.js`
- `components/daas/*`, `Header.jsx`, `Footer.jsx`, `FullPageMenu.jsx`
- `.env.example`

---

## Task list — close the gaps

Track progress with checkboxes. Do **P0** before **P1**, then **P2**. Stay sales-led (book a call) until a later payment phase unless noted.

### P0 — Clarity & conversion honesty

- [x] **T1 — Align Subscribe language with the real funnel**  
  Rename How-it-works step 01 from “Subscribe” to something accurate (e.g. “Book intro” / “Get started”), or rewrite the step so it doesn’t imply self-serve checkout. Update any FAQ/onboarding lines that assume “after you subscribe” without explaining the call-first path.  
  *Files:* `content/daasHome.js`, `content/daasFaqs.js`

- [x] **T2 — Add “How you start” section**  
  New section (or pricing trust strip) showing: Book 15-min call → Pay (invoice / UPI) → Notion board invite → First brief. Place near Pricing or after Pricing, before FAQ.  
  *Files:* new content + component; wire in `app/page.jsx`

- [x] **T3 — Replace placeholder portfolio images**  
  Keep only real Provoked work (e.g. Abhyudaya). Remove or replace `/images/img/1.jpg`–`6.jpg` items with real projects or drop them. Prefer fewer, stronger cards.  
  *Files:* `content/daasWork.js`, `public/images/`

- [x] **T4 — Add social proof (testimonials)** — **Done with draft placeholders** (replace with real quotes)  
  Collect 3+ short founder/PM quotes (name, role, company). Add a testimonials section between Work and Pricing (or after Pricing).  
  *Files:* new `content/daasTestimonials.js` + component; `app/page.jsx`

- [x] **T5 — Add client logo strip** — **Done with draft logo slots** (replace with real logos)  
  “Trusted by” / “Worked with” logos for past clients (with permission). Place above or with testimonials.  
  *Files:* content + component; logo assets

### P1 — Complete DaaS storefront patterns

- [x] **T6 — Included / not included scope matrix**  
  Two-column (or split) block above FAQ: what’s in the plan vs what’s out (mirror FAQ exclusions).  
  *Files:* new content + component; `app/page.jsx`

- [ ] **T7 — Notion board preview** — **Skipped this pass** (needs screenshot)  
  Screenshot or short visual of the request board; place in How it works or Benefits.  
  *Files:* asset + `HowItWorks.jsx` / content update

- [x] **T8 — Closing CTA band after FAQ**  
  Repeat price + “Book a 15 min intro call” (+ optional “See pricing” scroll).  
  *Files:* new component; `app/page.jsx`

- [x] **T9 — Complete footer**  
  Render section nav (`FOOTER_LINKS`), social (`SOCIAL_LINKS`), contact email (`hello@provoked.in`), tagline. Remove dead constants if unused after.  
  *Files:* `components/Footer.jsx`

- [x] **T10 — Legal pages**  
  Add Privacy Policy and Terms (and short pause/refund note). Link from footer.  
  *Files:* `app/privacy/page.jsx`, `app/terms/page.jsx` (or similar); Footer links; sitemap if needed

- [x] **T11 — Clean half-wired hero code**  
  Remove unused `getClientSlots()` / wire status pill from content only; drop or document `NEXT_PUBLIC_CLIENT_SLOTS` in `.env.example` if unused.  
  *Files:* `components/daas/DaasHero.jsx`, `.env.example`, `.env.local`

### P2 — Polish & product depth

- [x] **T12 — Tighten ICP copy**  
  Clarify who it’s best for (e.g. early–growth startups, conference/SaaS founders in India) and who it’s not for, beyond FAQ.  
  *Files:* `content/daasHome.js`, possibly hero/benefits

- [x] **T13 — Clarify revision rules**  
  Short copy: what counts as a revision vs a new request; typical revision turnaround. Surface in FAQ and optionally near Pricing.  
  *Files:* `content/daasFaqs.js`, optional pricing note

- [x] **T14 — Billing callout on Pricing**  
  Near price: GST-ready invoice on request; how the month starts; pause reminder.  
  *Files:* `content/daasPricing.js`, `PricingSection.jsx`

- [x] **T15 — Founder / Meet the studio block** — **Done with draft photo/bio** (replace with real assets)  
  Photo + short note on who does the work (optional but high trust).  
  *Files:* new content + component; asset

- [x] **T16 — Case study depth (optional)** — Abhyudaya modal with problem/work/outcome  
  Click-through or modal for 1–2 projects: problem → work → outcome.  
  *Files:* work content + UI

- [x] **T17 — Mobile sticky CTA (optional)**  
  Bottom bar on small screens: price or “Book a call”.  
  *Files:* new component + styles

- [x] **T18 — Analytics events**  
  Track: pricing section view, book-call clicks, Cal.com embed open.  
  *Files:* GTM/events in booking + CTA components

### Later — self-serve payment (Phase 2)

- [ ] **T19 — Unique checkout per customer** — **Deferred (Phase 2)**  
  Serverless (e.g. Vercel) creates Razorpay subscription/payment per click; redirect to hosted checkout; optional `/thanks`. Do not reuse a single paid Subscription Link.  
  *Depends on:* Razorpay recurring enabled on account

- [ ] **T20 — Reintroduce Subscribe CTAs** — **Deferred (Phase 2)**  
  After T19 works: change pricing/hero CTAs from book-only to Subscribe (keep Book a call as secondary). Align How-it-works step 01 with real subscribe again.

---



#### Phase 2 outline (not implemented)

When Razorpay recurring is enabled and you want self-serve:

1. Add a Vercel Route Handler that creates a **new** Razorpay Subscription (or Payment Link) per click using `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` (server-only env — never `NEXT_PUBLIC_`).
2. Redirect the customer to the returned `short_url`; set `callback_url` to `/thanks` if using Payment Links.
3. Flip primary CTAs to Subscribe; keep Book a call secondary; restore “Subscribe” language in How it works.

Blocked until: recurring payments enabled on the Razorpay MID + server secrets configured.

### Suggested implementation order

| Sprint | Tasks |
|--------|--------|
| 1 — Honesty + proof | T1, T2, T3, T11 |
| 2 — Trust | T4, T5, T9, T10 |
| 3 — Storefront completeness | T6, T7, T8 |
| 4 — Polish | T12–T18 as needed |
| 5 — Payment product | T19, T20 |

---

### Target page order (after tasks)

```
Hero
How it works (+ Notion preview)     ← T7
What’s included / not included      ← T6
Benefits
Recent work (real only)             ← T3
Social proof (logos + testimonials) ← T4, T5
Pricing (+ billing callout)         ← T14
How you start                       ← T2
FAQ (+ revision clarity)            ← T13
Final CTA                           ← T8
Footer (nav, contact, legal)        ← T9, T10
```

---

*Update checkboxes in this section as work ships. Keep the gap analysis above as the rationale.*
