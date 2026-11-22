# Beyond Church — Native App

React Native / Expo app to replace Subsplash for Beyond Church, Alma, AR.  
Built under Landon Parker's personal Apple Developer / Google Play accounts.

---

## Tech Stack

- **Framework:** React Native + Expo (SDK 51+)
- **Navigation:** React Navigation v6 (bottom tabs + native stack)
- **Theme:** Custom light/dark system with user preference stored locally
- **State:** Local React state + AsyncStorage for preferences and Bible plan progress
- **Content:** GitHub-hosted JSON files (`/content/`) for devotionals and Bible plan
- **Giving:** Overflow WebView for v1; native integration pending API review
- **Media:** YouTube embeds / YouTube Data API for sermon archive

---

## Project Structure

```
app/beyond-church/
├── App.tsx                    # Root component
├── app.json                   # Expo config (bundle IDs, version, splash)
├── src/
│   ├── screens/
│   │   ├── HomeScreen.tsx     # Latest sermon + events + devotional teaser
│   │   ├── WatchScreen.tsx    # Sermon archive with filter tabs
│   │   ├── GrowScreen.tsx     # Daily devotional + Bible reading plan
│   │   ├── GiveScreen.tsx     # Overflow WebView (v1)
│   │   ├── ConnectScreen.tsx  # Connect card, groups, volunteer, prayer
│   │   └── SettingsScreen.tsx # Theme picker + notification toggles
│   ├── navigation/
│   │   └── AppNavigator.tsx   # Bottom tab navigator
│   ├── theme/
│   │   ├── colors.ts          # Brand palette + light/dark tokens
│   │   ├── typography.ts      # Font sizes, weights, spacing, radius
│   │   └── index.ts
│   ├── data/
│   │   └── content.ts         # URLs, IDs, type definitions
│   └── hooks/
│       └── useTheme.ts        # Theme hook with persistence
└── assets/                    # Icons, splash (replace with real BC assets)

content/                       # Served via GitHub raw for the app
├── devotionals.json
└── bible-plan-2026.json
```

---

## Weekly Content Updates (~5 min)

1. Update `LATEST_SERMON_ID` in `src/data/content.ts`
2. Add this week's devotional entry to `content/devotionals.json`
3. Commit and push — app pulls from GitHub raw automatically

---

## Developer Account Setup

**Apple Developer Program**
- Enroll at [developer.apple.com](https://developer.apple.com) under Landon's personal Apple ID
- $99/year — 1–3 day identity verification (longest lead time item)
- Bundle ID: `org.beyondchurch.app`
- Personal account builds the portfolio; church has no claim to developer assets

**Google Play Console**
- Enroll at [play.google.com/console](https://play.google.com/console)
- $25 one-time — typically same-day approval
- Package: `org.beyondchurch.app`

**EAS Build (Expo Application Services)**
- Free tier handles CI builds for both platforms
- Run `npx eas build --platform all` to generate .ipa / .aab for submission
- Update `extra.eas.projectId` in `app.json` after running `npx eas init`

---

## Pending Before Launch

| Item | Owner | Status |
|------|-------|--------|
| Apple Developer enrollment | Landon | ⏳ Not started |
| Google Play Console setup | Landon | ⏳ Not started |
| Overflow API availability check | Landon | 📅 Early next week |
| App icon (arrow logo, light + dark variants) | Landon / design | ⏳ Pending |
| Splash screen asset | Landon / design | ⏳ Pending |
| YouTube Data API key (sermon archive) | Landon | ⏳ Pending |
| Devotional content migration | Landon | ⏳ Pending |
| Bible Plan 2026 full year data | Landon | ⏳ Pending |
| Events solution (PCO Events or alternative) | Landon | 🔍 Evaluating |
| Push notification setup (Expo Push) | Dev | ⏳ Post-scaffold |
| TestFlight / Play internal testing | Dev + Landon | ⏳ Post-enrollment |

---

## Running Locally

```bash
cd app/beyond-church
npm install
npx expo start
```

Scan the QR code with the **Expo Go** app on your phone to preview immediately — no Apple/Google account needed for development testing.

---

## Target Launch

**Before January 24, 2027** (Subsplash renewal date)

Minimum viable app for launch:
- Home screen with latest sermon and events
- Watch tab with sermon archive
- Give tab (Overflow WebView)
- Connect tab
- Light/dark mode

Nice-to-have for launch:
- Devotional + Bible plan
- Native Overflow giving integration
- Push notifications
