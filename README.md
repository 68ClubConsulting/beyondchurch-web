# Beyond Church Website

HTML pages for beyondchurch.org, hosted on Subsplash/SnapPages via code blocks.

## Structure

```
pages/          Individual page HTML files (paste into Subsplash code blocks)
assets/images/  Image references and notes (images hosted on Snappages CDN)
docs/           Project notes, audit, rebuild plan
```

## Design System

- Background: #0D0D0D
- Text: #F0EBE0 (cream)
- Accent: #BCF910 (green — logo only, not dominant)
- Fonts: Inter (body), Bebas Neue (display), Allison (script)
- Snappages image base: `https://storage1.snappages.site/7Q8RJ5/assets/images/`

## Subsplash Notes

- Site ID: 7Q8RJ5
- Padding shorthand bug on `.container`: use `padding-top`/`padding-bottom` longhand
- YouTube embeds preferred over Subsplash native player (keeps views on YouTube channel)
- Events pulled live from Subsplash — no static embed needed

## Weekly Update

Swap two YouTube IDs per week (~5 min):
1. Hero loop video ID in `pages/homepage.html`
2. Latest sermon embed ID in `pages/homepage.html`
