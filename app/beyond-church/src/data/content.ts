// Beyond Church — Static Content Config
// This file is the single source of truth for content that changes weekly.
// Update LATEST_SERMON_ID and HERO_LOOP_ID each week (same as homepage.html).

export const YOUTUBE_CHANNEL_ID = 'UCqeEoRE9kgVKhVEgRTGtKzg'; // verify this

export const CONTENT = {
  // --- Update these weekly ---
  LATEST_SERMON_ID: 'rI-dujRBYE4',
  HERO_LOOP_ID: 'RKSgdYDr9zY',

  // --- Static ---
  CHURCH_NAME: 'Beyond Church',
  CHURCH_TAGLINE: 'Alma, Arkansas',
  GIVING_URL: 'https://donate.overflow.co/beyondchurch',
  CONNECT_FORM_URL: 'https://beyondchurch.org/connect', // update when rebuilt
  WEBSITE_URL: 'https://beyondchurch.org',

  // Devotional & Bible Plan — hosted as JSON files in this repo under /content
  // Served via GitHub raw content or a simple CDN once we move off Subsplash
  DEVOTIONAL_FEED_URL: 'https://raw.githubusercontent.com/68ClubConsulting/beyondchurch-web/main/content/devotionals.json',
  BIBLE_PLAN_URL: 'https://raw.githubusercontent.com/68ClubConsulting/beyondchurch-web/main/content/bible-plan-2026.json',

  // Overflow API — stub for native integration (check API availability early next week)
  OVERFLOW_API_BASE: 'https://api.overflow.co/v1', // TBD — verify with Overflow docs
  OVERFLOW_ORG_SLUG: 'beyondchurch',
};

// --- Sermon Series (placeholder — replace with PCO Publishing feed or YouTube API) ---
export type Sermon = {
  id: string;
  title: string;
  series: string;
  speaker: string;
  date: string;
  youtubeId: string;
  thumbnailUrl?: string;
};

// --- Events (placeholder — PCO Events module not active, use static until solution) ---
export type ChurchEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  registrationUrl?: string;
};

// --- Devotional entry ---
export type DevotionalEntry = {
  id: string;
  date: string;
  title: string;
  scripture: string;
  scriptureText: string;
  body: string;
  author?: string;
};

// --- Bible Plan day ---
export type BiblePlanDay = {
  day: number;
  date: string;
  passages: string[];
  completed?: boolean; // stored locally per user
};
