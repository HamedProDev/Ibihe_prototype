import { useState } from "react";
import { Link } from "react-router-dom";
import { NEWS_ARTICLES } from "../data/mockData";

const CATEGORIES = ["All", "Politics", "Business", "Technology", "Health", "Agriculture", "Sports", "Culture", "Climate", "World"];
const COUNTRIES_LIST = ["All Countries", "Rwanda", "Kenya", "Nigeria", "Ghana", "South Africa", "Ethiopia", "Egypt", "Uganda", "Tanzania", "Senegal"];
const TIME_FILTERS = ["Latest", "Last hour", "Today", "This week", "This month"];
const SORT_OPTIONS = ["Latest", "Most read", "Trending", "Most discussed"];
const VERIFICATION = ["All", "Verified", "Under review", "AI-assisted"];

function VerifiedBadge({ verified, aiAssisted }: { verified: boolean; aiAssisted: boolean }) {
  if (verified) return (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#087443] bg-[#EAF7EF] px-1.5 py-0.5 rounded">
      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      Verified
    </span>
  );
  if (aiAssisted) return (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1D6BFF] bg-blue-50 px-1.5 py-0.5 rounded">
      AI-assisted
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#F59E0B] bg-amber-50 px-1.5 py-0.5 rounded">
      Under review
    </span>
  );
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCountry, setActiveCountry] = useState("All Countries");
  const [activeTime, setActiveTime] = useState("Latest");
  const [activeSort, setActiveSort] = useState("Latest");
  const [activeVerification, setActiveVerification] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");

  const filtered = NEWS_ARTICLES.filter(a => {
    if (activeCategory !== "All" && a.category !== activeCategory) return false;
    if (activeCountry !== "All Countries" && a.country !== activeCountry) return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (activeVerification === "Verified" && !a.verified) return false;
    if (activeVerification === "AI-assisted" && !a.aiAssisted) return false;
    return true;
  });

  return (
    <div className="bg-[#F7F9F7] min-h-screen">
      {/* Page header */}
      <div className="bg-[#071412] border-b border-[#1C3930]">
        <div className="max-w-[1440px] mx-auto px-6 py-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0DBF6B] mb-3">
            <span className="w-4 h-px bg-[#0DBF6B]" />
            News Discovery
          </div>
          <h1 className="text-3xl font-bold text-[#F5FAF7] mb-1" style={{ fontFamily: "var(--font-editorial)" }}>Amakuru</h1>
          <p className="text-[#9AAFA5] text-sm">Explore verified stories from Africa and around the world.</p>

          {/* Search */}
          <div className="mt-6 max-w-2xl relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9AAFA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search stories, countries, topics…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#0D1D18] border border-[#1C3930] rounded-sm text-[#F5FAF7] placeholder-[#9AAFA5] text-sm focus:outline-none focus:border-[#087443]"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-[#DDE7E1] sticky top-[105px] z-30">
        <div className="max-w-[1440px] mx-auto px-6 py-3">
          <div className="flex flex-wrap items-center gap-4">
            {/* Category pills */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`flex-shrink-0 px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
                    activeCategory === c
                      ? "bg-[#087443] text-white"
                      : "text-[#68756F] hover:text-[#087443] hover:bg-[#EAF7EF]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-[#DDE7E1] hidden md:block" />

            {/* Country select */}
            <select
              value={activeCountry}
              onChange={e => setActiveCountry(e.target.value)}
              className="text-xs text-[#68756F] border border-[#DDE7E1] rounded-sm px-2 py-1.5 bg-white focus:outline-none focus:border-[#087443]"
            >
              {COUNTRIES_LIST.map(c => <option key={c}>{c}</option>)}
            </select>

            {/* Time filter */}
            <select
              value={activeTime}
              onChange={e => setActiveTime(e.target.value)}
              className="text-xs text-[#68756F] border border-[#DDE7E1] rounded-sm px-2 py-1.5 bg-white focus:outline-none focus:border-[#087443]"
            >
              {TIME_FILTERS.map(t => <option key={t}>{t}</option>)}
            </select>

            {/* Verification */}
            <select
              value={activeVerification}
              onChange={e => setActiveVerification(e.target.value)}
              className="text-xs text-[#68756F] border border-[#DDE7E1] rounded-sm px-2 py-1.5 bg-white focus:outline-none focus:border-[#087443]"
            >
              {VERIFICATION.map(v => <option key={v}>{v}</option>)}
            </select>

            {/* Sort */}
            <select
              value={activeSort}
              onChange={e => setActiveSort(e.target.value)}
              className="text-xs text-[#68756F] border border-[#DDE7E1] rounded-sm px-2 py-1.5 bg-white focus:outline-none focus:border-[#087443]"
            >
              {SORT_OPTIONS.map(s => <option key={s}>{s}</option>)}
            </select>

            {/* View toggle */}
            <div className="ml-auto flex items-center gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded transition-colors ${viewMode === "grid" ? "text-[#087443]" : "text-[#68756F] hover:text-[#087443]"}`}
                title="Grid view"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded transition-colors ${viewMode === "list" ? "text-[#087443]" : "text-[#68756F] hover:text-[#087443]"}`}
                title="List view"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#68756F]">
            <span className="font-semibold text-[#10201A]">{filtered.length}</span> stories found
            {activeCategory !== "All" && <span> in <span className="font-semibold text-[#087443]">{activeCategory}</span></span>}
          </p>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(a => (
              <Link key={a.id} to={`/article/${a.id}`} className="group bg-white border border-[#DDE7E1] rounded-sm overflow-hidden hover:border-[#087443] hover:shadow-sm transition-all">
                <div className="aspect-[5/3] bg-[#EAF7EF] overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#087443]">{a.category}</span>
                    <span className="text-[10px] text-[#68756F]">· {a.country}</span>
                  </div>
                  <h3 className="font-semibold text-[#10201A] text-sm leading-snug line-clamp-2 group-hover:text-[#087443] transition-colors mb-2" style={{ fontFamily: "var(--font-editorial)" }}>
                    {a.title}
                  </h3>
                  <p className="text-xs text-[#68756F] leading-relaxed line-clamp-2 mb-3">
                    {a.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] text-[#68756F]">
                      <span>{a.author}</span>
                      <span>·</span>
                      <span>{a.time}</span>
                      <span>·</span>
                      <span>{a.readTime}</span>
                    </div>
                    <VerifiedBadge verified={a.verified} aiAssisted={a.aiAssisted} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map(a => (
              <Link key={a.id} to={`/article/${a.id}`} className="group flex gap-4 bg-white border border-[#DDE7E1] rounded-sm p-4 hover:border-[#087443] transition-colors">
                <div className="w-24 h-16 flex-shrink-0 bg-[#EAF7EF] rounded-sm overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#087443]">{a.category}</span>
                    <span className="text-[10px] text-[#68756F]">· {a.country} · {a.time}</span>
                    <VerifiedBadge verified={a.verified} aiAssisted={a.aiAssisted} />
                  </div>
                  <h3 className="font-semibold text-[#10201A] text-sm leading-snug group-hover:text-[#087443] transition-colors" style={{ fontFamily: "var(--font-editorial)" }}>
                    {a.title}
                  </h3>
                  <p className="text-xs text-[#68756F] mt-1 line-clamp-1">{a.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-3">📰</div>
            <p className="text-[#68756F] text-sm">No stories match your current filters.</p>
            <button onClick={() => { setActiveCategory("All"); setActiveCountry("All Countries"); setSearch(""); }} className="mt-4 text-xs font-semibold text-[#087443] hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
