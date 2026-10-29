# beyondchurch.org — Full Site Audit
**Date:** October 28, 2026  
**Method:** Live Chrome browser inspection + JS DOM queries  
**Site platform:** Subsplash / SnapPages  
**Site ID:** 7Q8RJ5  
**Image base URL:** `https://storage1.snappages.site/7Q8RJ5/assets/images/`

---

## NAV STRUCTURE (live)

**Top-level nav links:**
- Home
- Ministries ▾ (Beyond Kids, Beyond Youth, Young Adults, Frontline Men, Flourish Women, Wednesday Nights, Bible Class)
- About ▾ (Purpose, Values, What We Believe, Leadership, Daily Bible Reading, Resources, Contact Us, Annual Report 25)
- Connect ▾ (Small Groups → groups.beyondchurch.org, Starting Point, Upcoming Events)
- I'm New
- Watch → youtube.com/c/BeyondChurch
- The Hill
- Give → donate.overflow.co/beyondchurch

**Footer links:** Purpose, What We Believe, Values, Leadership, Resources | Beyond Kids, Beyond Youth, Young Adults, Frontline Men, Flourish Women | Small Groups, Starting Point, Upcoming Events | Watch (YT), Give (Overflow), Contact Us | Social: Instagram, YouTube, TikTok, Facebook  
**Address:** 4510 Hwy 71 N. Alma, AR 72921

**404 pages:** /connect, /about (both nav items in dropdown with no actual page behind them)

---

## PAGE INVENTORY (26 total, 2 broken)

### 1. HOME `/`
**Status:** ✅ Good  
**Hero:** YouTube video loop background — ID `RKSgdYDr9zY` (encoded in `data-background-video` attribute as JSON: `{"type":"video","source":"youtube","id":"RKSgdYDr9zY"}`)  
**Current week's sermon embed:** YouTube `rI-dujRBYE4`  
**Content:**
- Purpose statement (word-by-word scroll illumination effect)
- Plan a Visit + Get the App CTAs
- Ministry preview section

**Real image assets (snappages storage):**
- Logo/header: `22781010_3750x688_500.png`
- Hero photos: `26367652_1920x1080_500.png`, `26205195_1920x1080_500.png`
- Square ministry cards: `14819502_2000x2000_500.png`, `19461042_2000x2000_500.png`, `19461047_2000x2000_500.png`
- Footer social icons: `12988918_360x360_500.png`, `12988942_320x320_500.png`, `12988892_938x970_500.png`, `12988897_325x325_500.png`

**v2 file:** `/mnt/user-data/outputs/beyondchurch-homepage-v2.html` (in progress)

---

### 2. I'M NEW `/i-m-new`
**Status:** ✅ Has content, needs redesign  
**Content:**
- Contact form: First Name, Last Name, Phone, Email
- "What You Can Expect": Sundays 10am, Wednesdays 6:30pm
- Family ministries section (Beyond Kids + Beyond Youth info)
- 3 content images

**Rebuild notes:** Merge with Starting Point or create a clear funnel path: I'm New → Starting Point. Both serve first-time visitors.

---

### 3. WATCH `/watch`
**Status:** ❌ COMPLETELY EMPTY  
**Content:** Nav + footer only. Zero content — no video embeds, no text, nothing.  
**Decision needed:** The nav "Watch" link now goes directly to `youtube.com/c/BeyondChurch`. This page at `/watch` is orphaned dead space. **Recommend: either delete this page entirely, or rebuild it as a sermon archive / latest message hub.**

---

### 4. BEYOND KIDS `/beyond-kids`
**Status:** ✅ Rich content  
**Content:**
- Age groups: Nursery (0-18mo), Toddlers (18-36mo), Preschool (3-5yr), Elementary A (K-2nd), Elementary B (3rd-5th)
- Safety & check-in process info
- 5 large congregation photos

**Real image assets (snappages):**
- `25508843_9504x6336_500.JPG`
- `25509997_9504x6336_500.jpeg`
- `25508894_9504x6336_500.jpeg`
- `25508863_9504x6336_500.jpeg`
- `25509987_9504x6336_500.jpeg`

---

### 5. BEYOND YOUTH `/beyond-youth`
**Status:** ⚠️ Functional but sparse  
**Content:**
- About text (meets Wed 6:30pm + Sunday)
- Social links: Instagram `@beyond_yth`, Facebook `BeyondYTH`
- Subsplash Events iframe — calendar ID: `+hv4pvnj`
- **No latest message/sermon embed**

**Rebuild notes:** Add a latest message embed (need YT video ID from Landon). Events section is correct — empty = no events.

---

### 6. YOUNG ADULTS `/young-adults`
**Status:** ✅ Good content  
**Content:**
- Ages 18-28, "the hardest season, the best community"
- Latest message YouTube embed: `gax54Ay8YD4`
- Small Group Nights: 1st and 3rd Wednesdays
- Hang Nights: 2nd Sunday
- Instagram: `@beyond_youngadults`
- Subsplash Events iframe — calendar ID: `+53yk86h`

---

### 7. FRONTLINE MEN `/frontline-men`
**Status:** ✅ Built (our v1 file)  
**Current site content:**
- About text with David quote
- Latest message YouTube embed: `BF_l8XlB4C4`
- Canada 2027 fishing trip promo
- Subsplash Events iframe — calendar ID: `+bd8bqcp`
- Fishing brochure image

**v1 file:** `/mnt/user-data/outputs/frontline-men.html`  
**Still needed:** Upload fishing PDF, replace `YOUR_PDF_LINK_HERE`

---

### 8. FLOURISH WOMEN `/flourish-women`
**Status:** ✅ Has content  
**Content:**
- Philippians 1:9-11 quote
- Two YouTube embeds: `izTDq2vwDpI`, `8m3Ic1A6vn4`
- YouTube Channel + Facebook Group links
- Subsplash Events iframe — calendar ID: `+7gzwkw6`

---

### 9. WEDNESDAY NIGHTS `/wednesday-nights`
**Status:** ✅ Good content  
**Content:**
- Weekly schedule breakdown:
  - 1st & 3rd Wednesday: Small Groups
  - 2nd Wednesday: Midweek Service
  - 4th Wednesday: Night of Prayer
- Two YouTube embeds: `0y39ZQj-aBg`, `cmpJYftiHjM`

---

### 10. BIBLE CLASS `/bible-class`
**Status:** ✅ Active, well-structured  
**Content:**
- "A seasonal deep-dive into God's Word — offered each spring and fall"
- **Fall 2026 session** (IN SESSION): "Holiness & Led by the Spirit"
  - Dates: Aug 25 – Sep 15, 2026 (Tuesdays, 6:30 PM)
  - Cost: Free
- Class Archive: Fall 2026, Spring 2026, Fall 2025, Spring 2025

**Rebuild notes:** Good candidate for a clean redesign. The archive tabs are interesting. Need to see if archive links go anywhere.

---

### 11. PURPOSE `/purpose`
**Status:** ⚠️ Good copy, thin design  
**Content (full text captured):**
- Hero: "Preaching Jesus. Everyone. Everywhere. Everyday."
- Matthew 5:14-15 quote
- Body paragraphs about equipping believers, Ephesians 4:11-12, Mark 16:15, Mark 16:20, 2 Cor 5:20
- Closing call to action: "Everyone at Beyond Church is a messenger who is called to preach the Gospel everywhere."
- Signature phrase: "Light a candle, light a house. Light a house, light a city. Light a city, reach the world." — Matthew 5:14-16

**Rebuild notes:** Beautiful copy. Design needs to match the weight of the words — this could be one of the most striking pages on the site. Word-by-word scroll illumination would be perfect here (like what v2 homepage uses).

---

### 12. VALUES `/values`
**Status:** ⚠️ Good copy, thin design  
**Content — 10 Values:**
1. We Believe — faith, miracles, walk by faith
2. We Remember — "But God!" — remembering redemption to reach others
3. We Love — love as filter, honor, unity, strife-free
4. We Hold — Bible as final authority, inspired Word of God
5. We Dream — dreaming with God, kingdom culture, eternal success
6. We Give — tithe = "bringing" not giving, blessed to be a blessing
7. We Honor — excellence as worship, nothing half-hearted
8. We Belong — family, planted, generational church
9. We Serve — church is not spectator sport, no task beneath us
10. We Worship — God as first love, His presence, gathering together
11. We Real — authentic, pure motives, no people-pleasing
12. We Pray — prayer as trust, partnering with God's power

**Rebuild notes:** These could be stunning as scroll-activated cards. Each value is a full paragraph — rich content worth featuring, not just listing.

---

### 13. WHAT WE BELIEVE `/what-we-believe`
**Status:** ⚠️ Expandable accordion format, basic design  
**Content — 14 Belief Sections (expandable):**
1. The Bible is the inspired, inerrant, infallible Word of God
2. Our Need — Man's Fall and Redemption ("You must be born again")
3. Real Growth — Sanctification
4. Things to Come — The Return of Our Lord
5. Biblical Prosperity
6. God — The Godhead
7. Jesus is the Son of God
8. Three Baptisms
9. Divine Healing
10. Final Destination — Hell and Eternal Retribution
11. God's Design — Biblical Manhood and Womanhood
12. The Church
13. Baptism in the Holy Spirit
14. Women in Ministry

Opening quote: "What comes into our minds when we think about God is the most important thing about us." — A.W. Tozer  
Closing: 1 Timothy 4:16 NIV

**Rebuild notes:** Keep accordion format for the expanded detail. Design the page as a statement of conviction, not a legal document.

---

### 14. LEADERSHIP `/leadership`
**Status:** ⚠️ Names only, no bios, no photos  
**Current content:**
- Nate & Evan Schlegel — Senior Pastors
- Landon Parker — Executive Pastor
- Kiley Morris — Family Connections
- Mona Parker — Executive Assistant

**Rebuild notes:** This is a major gap. No bios, no photos. Should be one of the best pages for first-time visitors and potential new members. Needs headshots and short bios for each person.

---

### 15. DAILY BIBLE READING `/daily-bible-reading`
**Status:** ✅ Interactive feature  
**Content:**
- "Bible in a Year Reading Plan 2026"
- Each day linked to a Bible Project video
- Interactive images — tap to watch preview video
- "You can zoom in on the images and tap any day"

**Rebuild notes:** This is a great feature. Presumably renders as an image grid or calendar. Would benefit from a clean, minimal design frame.

---

### 16. RESOURCES `/resources`
**Status:** ✅ Most actively updated page on the site  
**Content:**

**Materials (11 PDFs/documents):**
1. Daily Confessions
2. Beyond Church Prayer Points
3. HELP. For When You Don't Know
4. 'In Christ' Scriptures
5. Beyond Church Prophetic Words
6. Giving Declaration
7. God's Will to Heal — Keith Moore
8. God's Medicine — Kenneth E. Hagin
9. 365 Prophecies Fulfilled by Christ
10. Now What? A Guidebook for Christian Living
11. Your Promise of Protection — The Power of the 91st Psalm

**Devotionals (10 most recent — weekly cadence):**
1. How Do I Know If God Is Trying to Show Me Something? — Oct 27, 2026
2. Can God Use Me If I'm Not Perfect? — Oct 26, 2026
3. Should Christians Be Afraid of the End Times? — Oct 26, 2026
4. How to Stir Up Your Faith When You Feel Spiritually Dry — Oct 19, 2026
5. What Does It Mean to Surrender Your Will to God? — Oct 5, 2026
6. How Do I Know If I'm Holding Something Back From God? — Sep 28, 2026
7. What Should You Do When Your Prayers Aren't Answered? — Sep 24, 2026
8. Why Does God Keep Correcting Me? — Sep 21, 2026
9. Why Does God Feel Silent Lately? — Sep 14, 2026
10. How To Stop Talking Yourself Out Of Obedience — Aug 31, 2026

**Rebuild notes:** THIS is the most important page to redesign. Updated 1-2x per week. Currently buried under About → Resources. Should be surfaced higher — possibly as a homepage section ("This Week's Devotional") or top-level nav item.

---

### 17. CONTACT US `/contact-us`
**Status:** ✅ Functional  
**Content:**
- "What can we help you with today?" — multi-step intent selector:
  - "How can I find out more about Beyond Church?"
  - "I need prayer." → Prayer request form (First Name, Last Name, Email, Phone, message)
  - "I have a testimony to share." → Testimony form (First Name, Last Name, Email, Phone, message)
  - "I have a question."
  - "Text us!"
- "Find Us!" section (map embed presumably)
- "Leave Us A Review!" CTA

**Rebuild notes:** Good intent-selector UX. Could benefit from cleaner design and adding the church address/service times prominently.

---

### 18. ANNUAL REPORT 25 `/annual-report-25`
**Status:** ✅ EXCELLENT — this is the best-designed page on the site  
**Content (rich, full report):**
- Hero: "What God did in 2025"
- Stats section: Salvations, Testimonies, New Guests (numbers load dynamically — showed 0 on first render)
- The Hill progress: $281,795 raised of $1,200,000 goal (23.5%)
- "Because You Gave" — 11.8% of income given away (goal was 12%):
  - Missions: $36,583.61
  - Ministry Partners: $23,742.49
  - Pastoral Care & Benevolence: $14,163.93
  - Local Outreach: $9,367.25
- Outreach highlights: soup kitchen, nursing home, jail ministry, kids/youth outreach, Angel Tree
- Testimonies: 77+ shared in 2025 (includes full Cheryl Baugh testimony)
- Ministry quotes: Kiley Morris (Beyond Kids), Pastor Austin (Beyond Youth)
- Media reach statistics (showed 0s — animated counters)
- Top countries: USA, Australia, Norway, Germany, Lithuania
- Digital presence: YouTube, TikTok, Facebook, Instagram, Going Beyond Podcast
- Thank You from Pastors

**Notes:** The annual report is actually the most polished page on the site — scroll-driven with animated counters, photo swipes, and progress bars. The rebuild should match or exceed this level of design.

---

### 19. THE HILL `/the-hill`
**Status:** ✅ Feature page — ongoing capital campaign  
**Content:**
- Vision: community park and recreation area ("a Kingdom Hub")
- Matthew 5:14-16 as foundation scripture
- "The Story" section — features list: trails, ponds, playground, splashpad, basketball, pickleball, flag football, stage, open lawn
- Live giving progress: **$281,795 raised of $1,200,000 (23.5%)**
- Last week's giving: $1,597
- Construction phase started: end of August 2025
- Full FAQ section (9 questions with detailed answers)
- "Get Involved" CTA + "Give Now" → donate.overflow.co/beyondchurch
- Full budget breakdown by line item (total: $1.2M)
- Location: Hwy 282, directly across from Workman's Travel Center, Alma, AR

**Notes:** This is a live capital campaign page — updated monthly. Major feature of the church right now. Rebuild should honor this priority.

---

### 20. STARTING POINT `/starting-point`
**Status:** ✅ Good content, likely needs design refresh  
**Content:**
- Letter from Pastors Nate & Evan Schlegel
- Amos 3:3 ("two cannot walk together unless they are agreed")
- Intro video (presumably a YouTube embed — need to confirm video ID)
- "Let's Begin" CTA

**Rebuild notes:** This is the church membership discovery funnel. Should flow: I'm New → Starting Point → Connect/Join. The intro video YT ID is unknown — needs confirmation.

---

### 21. UPCOMING EVENTS `/upcoming-events`
**Status:** ✅ Correct behavior (currently empty)  
**Content:** Header only — "UPCOMING EVENTS" — no events listed  
**Notes:** Per Landon: this pulls from Subsplash Events master calendar. Empty = no events currently loaded. The Subsplash embed is there; it just has nothing to show. This is working as intended.

---

## PAGES NOT AUDITED (404s / redirect)

| Page | URL | Status |
|------|-----|--------|
| About (landing) | `/about` | 404 — nav dropdown parent with no page |
| Connect (landing) | `/connect` | 404 — nav dropdown parent with no page |
| Small Groups | `groups.beyondchurch.org` | External PCO/Church Center link |
| Ministries (landing) | `/ministries` | Not tested — likely 404 like /about |

---

## KEY FINDINGS & REBUILD PRIORITIES

### 🔴 CRITICAL ISSUES
1. **Watch page `/watch` is dead empty** — nav Watch link goes to YouTube directly, making `/watch` a zombie page. Delete or rebuild as sermon hub.
2. **`/connect` and `/about` are 404s** — both are nav dropdown parents. Users who click "About" or "Connect" (not a submenu item) hit a 404.
3. **Leadership has no photos or bios** — just names and titles. Major gap for a people-first church.

### 🟡 HIGH PRIORITY REBUILDS
4. **Resources** — Most actively updated page, buried in About dropdown. Devotionals are 1-2x/week. Surface on homepage and in nav.
5. **The Hill** — Active capital campaign at 23.5% of $1.2M. Needs modern, visually compelling design to drive giving.
6. **Purpose & Values** — Rich, powerful copy sitting in plain text. Purpose especially should be one of the most stunning pages.
7. **Starting Point → I'm New funnel** — Overlapping pages serving same audience. Needs clarity of flow.

### 🟢 GOOD SHAPE / STYLE UPDATE ONLY
8. Bible Class — well-structured, active
9. What We Believe — good accordion format, just needs visual upgrade
10. Contact Us — functional intent-selector, clean enough
11. Annual Report 25 — actually the best designed page on the site currently
12. Young Adults — good content
13. Frontline Men — our v1 already done
14. Wednesday Nights — good schedule content

---

## YOUTUBE VIDEO IDs BY PAGE

| Page | YT ID | Role |
|------|--------|------|
| Home (hero loop) | `RKSgdYDr9zY` | Background video loop |
| Home (current sermon) | `rI-dujRBYE4` | This week's message |
| Frontline Men | `BF_l8XlB4C4` | Latest message |
| Young Adults | `gax54Ay8YD4` | Latest message |
| Flourish Women | `izTDq2vwDpI` | Video 1 |
| Flourish Women | `8m3Ic1A6vn4` | Video 2 |
| Wednesday Nights | `0y39ZQj-aBg` | Video 1 |
| Wednesday Nights | `cmpJYftiHjM` | Video 2 |
| Beyond Youth | ❓ MISSING | Need latest message embed |
| Starting Point | ❓ MISSING | Intro video ID unknown |

---

## SUBSPLASH EVENTS IFRAME IDs

| Ministry | Calendar ID |
|----------|-------------|
| Beyond Youth | `+hv4pvnj` |
| Young Adults | `+53yk86h` |
| Frontline Men | `+bd8bqcp` |
| Flourish Women | `+7gzwkw6` |
| Upcoming Events | (master calendar — unknown ID) |

Embed URL pattern: `https://subsplash.com/+b8rw/lb/ca/+[ID]?embed&branding`

---

## WEEKLY UPDATE AUTOMATION TARGETS

Items that change weekly and need a simple swap workflow:
1. **Homepage hero sermon embed** — YouTube video ID (currently `rI-dujRBYE4`)
2. **Ministry page latest message embeds** — Frontline, Young Adults, Flourish (when updated)
3. **Resources page devotionals** — new post 1-2x/week (appears to be a CMS already in Subsplash)
4. **The Hill progress** — monthly giving update (live counter already on page)

**Proposed automation:** Single "weekly update" HTML template or Subsplash page with just 2-3 YouTube IDs and a devotional link that Landon swaps in one edit session (~5 min/week)

---

## PROPOSED NEW SITE MAP

**Compared to current 20+ pages → consolidate to ~12 live pages**

| # | Page | Status | Priority |
|---|------|--------|----------|
| 1 | Home | Rebuild (v2 in progress) | Done |
| 2 | The Hill | Rebuild | 🔴 High |
| 3 | Resources | Rebuild + surface | 🔴 High |
| 4 | I'm New | Rebuild (merge w/ Starting Point) | 🟡 Medium |
| 5 | Watch → YouTube | Keep as external redirect | ✅ Keep |
| 6 | Give → Overflow | Keep as external redirect | ✅ Keep |
| 7 | Beyond Kids | Rebuild | 🟡 Medium |
| 8 | Beyond Youth | Rebuild | 🟡 Medium |
| 9 | Young Adults | Rebuild | 🟡 Medium |
| 10 | Frontline Men | ✅ Done (v1) | Done |
| 11 | Flourish Women | Rebuild | 🟡 Medium |
| 12 | Wednesday Nights | Rebuild | 🟡 Medium |
| 13 | About (hub) | Create actual page | 🟡 Medium |
| 14 | Purpose | Rebuild | 🟡 Medium |
| 15 | Values | Rebuild | 🟡 Medium |
| 16 | Leadership | Rebuild w/ bios + photos | 🟡 Medium |
| 17 | What We Believe | Design refresh | 🟢 Low |
| 18 | Contact Us | Design refresh | 🟢 Low |
| 19 | Bible Class | Design refresh | 🟢 Low |
| 20 | Annual Report 25 | Keep as-is (already good) | ✅ Keep |
| 21 | Daily Bible Reading | Design refresh | 🟢 Low |
| — | Starting Point | Merge into I'm New | Delete |
| — | /watch (empty) | Delete | Delete |
| — | Upcoming Events | Keep (Subsplash auto) | ✅ Keep |

**Nav to simplify to:**
Home · Ministries · Resources · The Hill · I'm New · Watch (YT) · Give
