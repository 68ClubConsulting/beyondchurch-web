# Beyond Church Website Rebuild Plan

## Priority Order

1. **Homepage** (`pages/homepage.html`) — in progress, pending design review
2. **The Hill** (`pages/the-hill.html`) — active capital campaign, existing code in Subsplash needs style update
3. **Resources** (`pages/resources.html`) — devotionals buried in About dropdown; surface prominently
4. **Beyond Kids** (`pages/beyond-kids.html`) — 5 real photos available, strong rebuild candidate
5. **I'm New + Starting Point** (`pages/i-m-new.html`, `pages/starting-point.html`) — visitor funnel, may merge
6. **Beyond Youth** (`pages/beyond-youth.html`) — needs latest message embed (YouTube ID TBD from Landon)
7. **Young Adults** (`pages/young-adults.html`)
8. **Flourish Women** (`pages/flourish-women.html`)
9. **Wednesday Nights** (`pages/wednesday-nights.html`)
10. **Purpose** (`pages/purpose.html`) — powerful copy, needs a flagship design
11. **Values** (`pages/values.html`)
12. **Leadership** (`pages/leadership.html`) — needs bios + headshots
13. **About** (`pages/about.html`) — currently 404, needs a real page
14. **Connect** (`pages/connect.html`) — currently 404
15. **Watch** (`pages/watch.html`) — currently empty zombie page; rebuild as sermon hub or delete

## Pages Already Complete

- `pages/homepage.html` — v2, pending Landon's design review
- `pages/frontline-men.html` — complete (Canada 2027 fishing trip section, Overflow payment link)
  - TODO: Replace `YOUR_PDF_LINK_HERE` with hosted brochure PDF URL

## Weekly Update Targets (5 min/week)

Both in `pages/homepage.html`:
- Line ~771: hero YouTube loop ID (currently `RKSgdYDr9zY`)
- Line ~859: latest sermon embed ID (currently `rI-dujRBYE4`)

## Key Asset URLs

**Snappages CDN base:** `https://storage1.snappages.site/7Q8RJ5/assets/images/`

| File | Used for |
|------|----------|
| `26367652_1920x1080_500.png` | Hero poster / wide landscape |
| `26205195_1920x1080_500.png` | Young Adults card / wide landscape |
| `14819502_2000x2000_500.png` | Square photo |
| `19461042_2000x2000_500.png` | Frontline Men card |
| `19461047_2000x2000_500.png` | Flourish Women card |
| `25508843_9504x6336_500.JPG` | Beyond Kids photo 1 |
| `25509997_9504x6336_500.jpeg` | Beyond Kids photo 2 |
| `25508894_9504x6336_500.jpeg` | Beyond Kids photo 3 |
| `25508863_9504x6336_500.jpeg` | Beyond Kids photo 4 |
| `25509987_9504x6336_500.jpeg` | Beyond Kids photo 5 |

**YouTube IDs:**
- Hero loop: `RKSgdYDr9zY`
- Current sermon: `rI-dujRBYE4`
- Beyond Youth latest message: TBD (need from Landon)
- Starting Point intro video: TBD (need from Landon)

**Subsplash Events Calendar IDs** (for iframe embeds):
- See full audit: `docs/site-audit-2026-10-28.md`

## The Hill Campaign

- Goal: $1,200,000
- Raised: $281,795 (23.5%) as of audit date
- Overflow donation link: `https://donate.overflow.co/beyondchurch` (add The Hill fund designation)
- Existing page in Subsplash — needs redesign to match new design system

## Subsplash / SnapPages Constraints

- HTML goes in code blocks — no full page control
- Padding shorthand bug: never use `padding: X 0 Y` on `.container` — use longhand
- Use `#id` selectors and `!important` on link states to prevent SnapPages CSS bleed
- YouTube nocookie embed for background loop: `youtube-nocookie.com/embed/[ID]?autoplay=1&mute=1&loop=1&controls=0&playlist=[ID]`
- Base64 images too large for code blocks — always use hosted Snappages CDN URLs

## Future: Independent Native App

- Build under Landon's personal Apple/Google developer accounts (not church org)
- Mirrors how Alpha app was built (under Adam's credentials)
- Builds Landon's personal dev portfolio
- Subsplash app stays active in the meantime (Events sync, member hub)
- YouTube for all media views — never Subsplash native player
