# r:clip Launch Plan

## The Story (use this everywhere)

I tried 15+ clipboard managers. Paid for 5 of them. None of them worked the way a clipboard should. Apple's own clipboard is a joke — `Cmd+Space` → `Cmd+4` → grab the mouse → scroll → right-click → copy → go back → paste. That's 7 steps for something that should take 1. And it still drops items. I've lost work to it.

So I built r:clip. Native Swift. Zero lag. Never loses your data — even if the app dies, your clipboard history is safe. One shortcut, done. No GUI drama, no electron bloat, no "please create an account". It just works.

## Positioning

**One-liner:** The clipboard manager that never fails.

**For whom:** Developers, writers, designers, and power users on macOS who are tired of clipboard managers that lag, lose data, or require a PhD to operate.

**Against whom:**
| Competitor | r:clip advantage |
|-----------|-----------------|
| Apple Clipboard | 1 shortcut vs 7 steps. Never drops items. |
| Paste ($24.99/yr subscription) | One-time purchase. Native performance. No subscription fatigue. |
| Maccy (free/open source) | Richer features: smart categories, previews, sensitive data masking |
| Raycast clipboard | Not locked into an ecosystem. Dedicated UX, not a feature inside a launcher. |
| CopyClip / Flycut | Modern UI. Actually maintained. Rich previews. |

**Differentiators to hammer:**
1. **Native Swift** — no Electron, no web views, instant response
2. **Never fails** — persistent storage, survives crashes, recovers on relaunch
3. **Keyboard-first** — one shortcut to open, arrow keys to navigate, Enter to paste
4. **For everyone** — casual users get simplicity, power users get depth
5. **No noise** — no accounts, no cloud sync to configure, no onboarding flow

## Pre-Launch Phase (Now → Apple Developer enrollment approved)

### Week 1-2: Foundation
- [x] Landing page live at rclip.refactory.co.za
- [ ] Add email waitlist capture to landing page (Formspree)
- [ ] Sharpen hero copy with founder story angle
- [ ] Record 30-60s demo video (Screen Studio or QuickTime)
- [ ] Create Twitter/X account or use personal account for build-in-public

### Week 3-4: Build Audience
- [ ] Post 3x/week on Twitter — GIFs of r:clip in action, dev insights, "why I built this"
- [ ] Write a "I tried 15 clipboard managers" blog post / Twitter thread
- [ ] Post in r/macapps with demo (not selling, just showing)
- [ ] Post in r/productivity, r/SwiftUI
- [ ] Submit to macmenubar.com, thriftmac.com for listing

### Ongoing: Content Ideas
- "Watch me paste 50 items in 30 seconds" — speed demo
- "Apple's clipboard takes 7 steps. r:clip takes 1." — side-by-side
- "I built a clipboard manager because I lost work" — founder story thread
- Keyboard shortcut tip series
- "Why native matters" — performance comparison vs Electron apps

## Launch Day Checklist

### Prerequisites
- [ ] Apple Developer enrollment approved
- [ ] App signed + notarized
- [ ] DMG built and hosted (or Mac App Store submission)
- [ ] Gumroad / LemonSqueezy / Paddle store page ready (for direct sales)
- [ ] Product Hunt page prepped (hunter lined up if possible)

### Launch Sequence
1. **Email waitlist** — "r:clip is live. You're first." with download link
2. **Product Hunt** — launch Tuesday-Thursday, 12:01 AM PT
3. **Twitter thread** — founder story + demo GIF + link
4. **Reddit** — r/macapps, r/productivity (authentic post, not an ad)
5. **Hacker News** — "Show HN: r:clip — a clipboard manager that never fails"
6. **Mac app directories** — macmenubar.com, thriftmac.com, etc.

## Pricing Strategy

**$29.99 one-time** (already on landing page)

Rationale:
- Paste charges $24.99/year (subscription) — r:clip is cheaper long-term
- One-time purchase builds trust with indie Mac users who hate subscriptions
- "Pay once, own forever" is a strong differentiator
- Include lifetime updates — builds loyalty and word-of-mouth

Consider later:
- Early bird pricing ($19.99) for waitlist subscribers
- Volume/team licensing
- Mac App Store listing (Apple takes 30% but adds discovery)

## Tools

| Tool | Purpose | Cost |
|------|---------|------|
| Formspree | Email waitlist capture | Free tier (50 submissions/mo) |
| Buttondown / Beehiiv | Email list + nurture sequences | Free tier |
| Screen Studio | Demo video recording | $89 one-time |
| Typefully | Schedule Twitter threads | Free tier |
| Gumroad / LemonSqueezy | Payment + license delivery | % per sale |
| Product Hunt | Launch day traffic | Free |

## Metrics to Track

- Waitlist signups (target: 200+ before launch)
- Landing page visits (check Firebase Analytics)
- Twitter impressions on build-in-public posts
- Launch day: PH upvotes, waitlist conversion rate, first-day sales
