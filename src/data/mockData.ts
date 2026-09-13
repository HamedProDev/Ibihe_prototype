export const BREAKING_STORIES = [
  { id: 1, text: "AU Summit: Leaders agree on continental free trade acceleration roadmap", time: "2 min ago" },
  { id: 2, text: "Rwanda GDP growth hits 8.2% in Q3 — fastest in East Africa", time: "14 min ago" },
  { id: 3, text: "Nigeria's fintech sector raises $1.4B in new funding rounds", time: "31 min ago" },
  { id: 4, text: "Ethiopia and Kenya sign landmark infrastructure corridor agreement", time: "1h ago" },
  { id: 5, text: "South Africa's Johannesburg Stock Exchange reaches record high", time: "2h ago" },
];

export const HERO_ARTICLE = {
  id: "regional-cooperation-2026",
  title: "Regional leaders announce sweeping new Pan-African cooperation framework",
  subtitle: "The historic agreement, signed in Kigali, covers trade, security, climate and technology — with binding targets for the first time",
  category: "Politics",
  country: "Rwanda",
  region: "East Africa",
  time: "2 hours ago",
  readTime: "6 min read",
  verified: true,
  aiAssisted: true,
  author: { name: "Amara Diallo", role: "Senior Correspondent", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=64&h=64&fit=crop&auto=format" },
  image: "https://images.unsplash.com/photo-1741991110666-88115e724741?w=1200&h=700&fit=crop&auto=format",
  imageAlt: "Kigali city during AU Summit"
};

export const FEATURED_ARTICLES = [
  {
    id: "nigeria-fintech-rise",
    title: "Nigeria's fintech revolution is reshaping finance for 200 million people",
    category: "Business",
    country: "Nigeria",
    time: "4h ago",
    verified: true,
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Lagos tech entrepreneur",
    author: { name: "Chidi Okonkwo", role: "Business Editor" }
  },
  {
    id: "sahel-climate-crisis",
    title: "Sahel drought reaches critical threshold — scientists warn of mass displacement",
    category: "Climate",
    country: "Sahel Region",
    time: "6h ago",
    verified: true,
    image: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Dry landscape in Sahel",
    author: { name: "Fatima Al-Rashid", role: "Environment Reporter" }
  },
  {
    id: "kenya-tech-hub",
    title: "Nairobi's Silicon Savannah draws $800M in venture capital in 2026",
    category: "Technology",
    country: "Kenya",
    time: "8h ago",
    verified: true,
    image: "https://images.unsplash.com/photo-1689763408012-8aa7d2dcd3d0?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Nairobi tech hub",
    author: { name: "Grace Wanjiku", role: "Tech Correspondent" }
  }
];

export const SMALL_ARTICLES = [
  {
    id: "ghana-election",
    title: "Ghana's electoral commission confirms biometric system upgrade ahead of 2027 polls",
    category: "Politics",
    country: "Ghana",
    time: "3h ago",
    verified: true
  },
  {
    id: "ethiopia-dam",
    title: "Grand Ethiopian Renaissance Dam reaches 90% of target output capacity",
    category: "Infrastructure",
    country: "Ethiopia",
    time: "5h ago",
    verified: true
  },
  {
    id: "south-africa-mining",
    title: "South Africa's platinum mining sector agrees to landmark wage accord",
    category: "Business",
    country: "South Africa",
    time: "7h ago",
    verified: true
  }
];

export const AFRICA_NOW = [
  { flag: "🇷🇼", country: "Rwanda", category: "Politics", headline: "Cabinet approves landmark AI governance policy framework", time: "1h ago", author: "James Bizimana", verified: true },
  { flag: "🇰🇪", country: "Kenya", category: "Technology", headline: "M-Pesa records 50 million daily transactions for first time in history", time: "2h ago", author: "Grace Wanjiku", verified: true },
  { flag: "🇳🇬", country: "Nigeria", category: "Business", headline: "Dangote refinery begins first full crude oil export cycle", time: "3h ago", author: "Chidi Okonkwo", verified: true },
  { flag: "🇬🇭", country: "Ghana", category: "Economy", headline: "Cedi hits strongest rate against dollar since 2019 amid IMF milestone", time: "4h ago", author: "Kwame Asante", verified: true },
  { flag: "🇿🇦", country: "South Africa", category: "Politics", headline: "President signs new energy independence bill into law", time: "5h ago", author: "Lindiwe Dube", verified: true },
  { flag: "🇪🇬", country: "Egypt", category: "Diplomacy", headline: "Egypt mediates new ceasefire talks between regional factions", time: "6h ago", author: "Amira Hassan", verified: false },
];

export const TRENDING = [
  { rank: "01", title: "African Union accelerates digital ID rollout across 32 member states", country: "Pan-Africa", reports: 48, time: "1h ago" },
  { rank: "02", title: "DR Congo lithium reserves emerge as key battleground in global battery race", country: "DR Congo", reports: 36, time: "2h ago" },
  { rank: "03", title: "East African Community finalises single-currency roadmap for 2028", country: "East Africa", reports: 29, time: "3h ago" },
  { rank: "04", title: "Senegal's new offshore oil field begins commercial production", country: "Senegal", reports: 24, time: "5h ago" },
  { rank: "05", title: "Somalia stabilisation force receives mandate extension from IGAD", country: "Somalia", reports: 18, time: "6h ago" },
];

export const COUNTRIES = [
  { code: "RW", name: "Rwanda", stories: 24, flag: "🇷🇼" },
  { code: "KE", name: "Kenya", stories: 31, flag: "🇰🇪" },
  { code: "NG", name: "Nigeria", stories: 58, flag: "🇳🇬" },
  { code: "GH", name: "Ghana", stories: 19, flag: "🇬🇭" },
  { code: "ZA", name: "South Africa", stories: 42, flag: "🇿🇦" },
  { code: "ET", name: "Ethiopia", stories: 28, flag: "🇪🇹" },
  { code: "EG", name: "Egypt", stories: 35, flag: "🇪🇬" },
  { code: "UG", name: "Uganda", stories: 16, flag: "🇺🇬" },
  { code: "TZ", name: "Tanzania", stories: 21, flag: "🇹🇿" },
  { code: "SN", name: "Senegal", stories: 14, flag: "🇸🇳" },
  { code: "CD", name: "DR Congo", stories: 33, flag: "🇨🇩" },
  { code: "SO", name: "Somalia", stories: 11, flag: "🇸🇴" },
];

export const NEWS_ARTICLES = [
  {
    id: "regional-cooperation-2026",
    title: "Regional leaders announce sweeping new Pan-African cooperation framework",
    summary: "The historic agreement, signed in Kigali, covers trade, security, climate and technology with binding targets.",
    category: "Politics",
    country: "Rwanda",
    time: "2h ago",
    readTime: "6 min",
    verified: true,
    aiAssisted: true,
    author: "Amara Diallo",
    image: "https://images.unsplash.com/photo-1741991110666-88115e724741?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "nigeria-fintech-rise",
    title: "Nigeria's fintech revolution is reshaping finance for 200 million people",
    summary: "A new wave of mobile-first financial services is transforming how Nigerians save, borrow, and invest.",
    category: "Business",
    country: "Nigeria",
    time: "4h ago",
    readTime: "5 min",
    verified: true,
    aiAssisted: false,
    author: "Chidi Okonkwo",
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "kenya-tech-hub",
    title: "Nairobi's Silicon Savannah draws $800M in venture capital",
    summary: "Kenya's startup ecosystem continues to attract global investors, setting a new annual record.",
    category: "Technology",
    country: "Kenya",
    time: "8h ago",
    readTime: "4 min",
    verified: true,
    aiAssisted: true,
    author: "Grace Wanjiku",
    image: "https://images.unsplash.com/photo-1689763408012-8aa7d2dcd3d0?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "sahel-climate",
    title: "Sahel drought reaches critical threshold as scientists warn of mass displacement",
    summary: "Unprecedented rainfall deficits across the Sahel belt are threatening the livelihoods of millions.",
    category: "Climate",
    country: "Sahel Region",
    time: "6h ago",
    readTime: "7 min",
    verified: true,
    aiAssisted: false,
    author: "Fatima Al-Rashid",
    image: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "ghana-election",
    title: "Ghana's electoral commission confirms biometric system upgrade ahead of 2027 polls",
    summary: "The commission unveiled the new fingerprint and facial recognition system in Accra on Thursday.",
    category: "Politics",
    country: "Ghana",
    time: "3h ago",
    readTime: "3 min",
    verified: true,
    aiAssisted: false,
    author: "Kwame Asante",
    image: "https://images.unsplash.com/photo-1781504798134-31600e8579ba?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "ethiopia-dam",
    title: "Grand Ethiopian Renaissance Dam reaches 90% of target generation capacity",
    summary: "The milestone marks a turning point for Ethiopia's energy independence ambitions and regional diplomacy.",
    category: "Infrastructure",
    country: "Ethiopia",
    time: "5h ago",
    readTime: "5 min",
    verified: true,
    aiAssisted: true,
    author: "Tigist Bekele",
    image: "https://images.unsplash.com/photo-1741991109902-98bf764fb35d?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "sa-mining",
    title: "South Africa's platinum mining sector agrees to landmark wage accord",
    summary: "The five-year agreement ends months of strike threats and brings stability to a crucial export sector.",
    category: "Business",
    country: "South Africa",
    time: "7h ago",
    readTime: "4 min",
    verified: true,
    aiAssisted: false,
    author: "Lindiwe Dube",
    image: "https://images.unsplash.com/photo-1771350369010-be9f01d71ba4?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "egypt-diplomacy",
    title: "Egypt mediates new ceasefire talks between regional factions in Libya",
    summary: "Cairo hosted senior envoys from rival Libyan factions in a bid to restart the stalled peace process.",
    category: "Diplomacy",
    country: "Egypt",
    time: "6h ago",
    readTime: "4 min",
    verified: false,
    aiAssisted: true,
    author: "Amira Hassan",
    image: "https://images.unsplash.com/photo-1741991110666-88115e724741?w=600&h=400&fit=crop&auto=format"
  },
  {
    id: "senegal-oil",
    title: "Senegal's new offshore oil field begins first commercial production cycle",
    summary: "The Sangomar field marks a new era for West African energy as Senegal joins the continental oil producers.",
    category: "Energy",
    country: "Senegal",
    time: "1d ago",
    readTime: "5 min",
    verified: true,
    aiAssisted: false,
    author: "Moussa Sow",
    image: "https://images.unsplash.com/photo-1689763408012-8aa7d2dcd3d0?w=600&h=400&fit=crop&auto=format"
  },
];

export const ADMIN_STATS = {
  totalArticles: 2847,
  published: 2631,
  pending: 84,
  drafts: 132,
  readers: "1.2M",
  dailyActive: "87K",
  pageViews: "4.8M",
  avgReadTime: "4m 23s",
};

export const ADMIN_RECENT = [
  { id: 1, title: "AU Summit: Leaders agree on continental free trade acceleration", author: "Amara Diallo", country: "Pan-Africa", status: "published", time: "2h ago", views: 12400 },
  { id: 2, title: "Rwanda Cabinet approves landmark AI governance framework", author: "James Bizimana", country: "Rwanda", status: "pending", time: "3h ago", views: 0 },
  { id: 3, title: "Nigeria fintech sector raises $1.4B in Q3 2026", author: "Chidi Okonkwo", country: "Nigeria", status: "review", time: "4h ago", views: 0 },
  { id: 4, title: "Sahel drought: UN issues emergency food security warning", author: "Fatima Al-Rashid", country: "Sahel", status: "draft", time: "6h ago", views: 0 },
  { id: 5, title: "South Africa energy bill signed into law", author: "Lindiwe Dube", country: "South Africa", status: "published", time: "8h ago", views: 8900 },
  { id: 6, title: "Kenya: M-Pesa reaches 50M daily transactions", author: "Grace Wanjiku", country: "Kenya", status: "published", time: "12h ago", views: 22100 },
];

export const SOURCES = [
  { name: "Reuters Africa", country: "Pan-Africa", category: "Wire Service", status: "active", lastChecked: "2 min ago", discovered: 1240, reliability: 96 },
  { name: "BBC Africa", country: "Pan-Africa", category: "Broadcast", status: "active", lastChecked: "5 min ago", discovered: 890, reliability: 94 },
  { name: "AllAfrica.com", country: "Pan-Africa", category: "Aggregator", status: "active", lastChecked: "8 min ago", discovered: 3400, reliability: 78 },
  { name: "The East African", country: "East Africa", category: "Newspaper", status: "active", lastChecked: "12 min ago", discovered: 460, reliability: 91 },
  { name: "Punch Nigeria", country: "Nigeria", category: "Newspaper", status: "active", lastChecked: "15 min ago", discovered: 720, reliability: 85 },
  { name: "Daily Nation Kenya", country: "Kenya", category: "Newspaper", status: "paused", lastChecked: "1h ago", discovered: 310, reliability: 88 },
];
