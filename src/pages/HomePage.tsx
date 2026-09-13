import { Link } from "react-router-dom";
import {
  BREAKING_STORIES, HERO_ARTICLE, FEATURED_ARTICLES, SMALL_ARTICLES,
  AFRICA_NOW, TRENDING, COUNTRIES
} from "../data/mockData";

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#087443] bg-[#EAF7EF] px-1.5 py-0.5 rounded">
      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      Verified
    </span>
  );
}

function AIBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1D6BFF] bg-blue-50 px-1.5 py-0.5 rounded">
      AI-assisted
    </span>
  );
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-bold tracking-widest uppercase text-[#087443]">
      {label}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#F7F9F7]">
      {/* Breaking Bar */}
      <div className="bg-[#071412] border-b border-[#1C3930] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center gap-4">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5484D] animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#E5484D]">Breaking</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-track">
              {[...BREAKING_STORIES, ...BREAKING_STORIES].map((s, i) => (
                <span key={i} className="text-xs text-[#9AAFA5] mr-16 whitespace-nowrap">
                  <span className="text-[#F5FAF7] font-medium">{s.text}</span>
                  <span className="ml-2 text-[#9AAFA5]">{s.time}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Grid */}
      <section className="max-w-[1440px] mx-auto px-6 pt-8 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Lead story */}
          <div className="lg:col-span-7">
            <Link to={`/article/${HERO_ARTICLE.id}`} className="group block">
              <div className="relative overflow-hidden rounded-sm aspect-[16/10] bg-[#0D1D18]">
                <img
                  src={HERO_ARTICLE.image}
                  alt={HERO_ARTICLE.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <CategoryBadge label={HERO_ARTICLE.category} />
                    <span className="text-[10px] text-[#9AAFA5]">·</span>
                    <span className="text-[10px] font-medium text-[#9AAFA5] uppercase tracking-wider">{HERO_ARTICLE.country}</span>
                    <span className="text-[10px] text-[#9AAFA5]">·</span>
                    <span className="text-[10px] text-[#9AAFA5]">{HERO_ARTICLE.time}</span>
                  </div>
                  <h2 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-2 group-hover:text-[#0DBF6B] transition-colors" style={{ fontFamily: "var(--font-editorial)" }}>
                    {HERO_ARTICLE.title}
                  </h2>
                  <p className="text-[#9AAFA5] text-sm leading-relaxed line-clamp-2 mb-3">
                    {HERO_ARTICLE.subtitle}
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={HERO_ARTICLE.author.avatar} alt={HERO_ARTICLE.author.name} className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-xs text-[#9AAFA5]">{HERO_ARTICLE.author.name}</span>
                    <span className="text-[#9AAFA5]">·</span>
                    <VerifiedBadge />
                    <AIBadge />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side stories */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {FEATURED_ARTICLES.map(a => (
              <Link key={a.id} to={`/article/${a.id}`} className="group flex gap-4 bg-white border border-[#DDE7E1] rounded-sm p-4 hover:border-[#087443] transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CategoryBadge label={a.category} />
                    <span className="text-[10px] text-[#68756F]">· {a.country}</span>
                  </div>
                  <h3 className="font-semibold text-[#10201A] text-sm leading-snug line-clamp-2 group-hover:text-[#087443] transition-colors" style={{ fontFamily: "var(--font-editorial)" }}>
                    {a.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-[10px] text-[#68756F]">
                    <span>{a.author.name}</span>
                    <span>·</span>
                    <span>{a.time}</span>
                  </div>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-[#EAF7EF] rounded-sm overflow-hidden">
                  <img src={a.image} alt={a.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Three small cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {SMALL_ARTICLES.map(a => (
            <Link key={a.id} to={`/article/${a.id}`} className="group flex gap-3 bg-white border border-[#DDE7E1] rounded-sm p-4 hover:border-[#087443] transition-colors">
              <div className="flex-shrink-0 w-1 bg-[#087443] rounded-full" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <CategoryBadge label={a.category} />
                  <span className="text-[10px] text-[#68756F]">· {a.country}</span>
                </div>
                <p className="text-sm font-medium text-[#10201A] leading-snug group-hover:text-[#087443] transition-colors line-clamp-2">
                  {a.title}
                </p>
                <span className="text-[10px] text-[#68756F] mt-1 block">{a.time}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-6 py-2">
        <div className="border-t border-[#DDE7E1]" />
      </div>

      {/* Africa Now + Trending */}
      <section className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Africa Now */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-xl font-bold text-[#10201A]" style={{ fontFamily: "var(--font-editorial)" }}>Africa Now</h2>
              <span className="flex-1 h-px bg-[#DDE7E1]" />
              <Link to="/news" className="text-xs font-semibold text-[#087443] hover:underline">View all</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {AFRICA_NOW.map((story, i) => (
                <Link key={i} to="/news" className="group flex items-start gap-3 bg-white border border-[#DDE7E1] rounded-sm p-4 hover:border-[#087443] transition-colors">
                  <span className="text-2xl leading-none mt-0.5 flex-shrink-0">{story.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#087443]">{story.country}</span>
                      <span className="text-[10px] text-[#68756F]">· {story.category}</span>
                    </div>
                    <p className="text-sm font-medium text-[#10201A] leading-snug line-clamp-2 group-hover:text-[#087443] transition-colors">
                      {story.headline}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] text-[#68756F]">{story.time}</span>
                      {story.verified && <VerifiedBadge />}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Trending */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-xl font-bold text-[#10201A]" style={{ fontFamily: "var(--font-editorial)" }}>Trending</h2>
              <span className="flex-1 h-px bg-[#DDE7E1]" />
            </div>
            <div className="space-y-0 divide-y divide-[#DDE7E1]">
              {TRENDING.map((t, i) => (
                <Link key={i} to="/news" className="group flex items-start gap-4 py-4 first:pt-0">
                  <span className="text-3xl font-bold text-[#DDE7E1] group-hover:text-[#087443] transition-colors leading-none flex-shrink-0 tabular-nums" style={{ fontFamily: "var(--font-editorial)" }}>
                    {t.rank}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#10201A] leading-snug group-hover:text-[#087443] transition-colors line-clamp-2">
                      {t.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] text-[#68756F]">{t.country}</span>
                      <span className="text-[10px] text-[#68756F]">·</span>
                      <span className="text-[10px] font-medium text-[#087443]">{t.reports} reports</span>
                      <span className="text-[10px] text-[#68756F]">· {t.time}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Daily Briefing */}
      <section className="bg-[#071412] border-y border-[#1C3930]">
        <div className="max-w-[1440px] mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0DBF6B] mb-3">
                <span className="w-4 h-px bg-[#0DBF6B]" />
                Intelligence
              </div>
              <h2 className="text-3xl font-bold text-[#F5FAF7] mb-3" style={{ fontFamily: "var(--font-editorial)" }}>
                Today in Africa
              </h2>
              <p className="text-[#9AAFA5] text-sm leading-relaxed mb-6">
                An intelligent summary of the stories shaping the continent — AI-curated, human-reviewed, delivered three times daily.
              </p>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#087443] text-white text-sm font-semibold rounded-sm hover:bg-[#0DBF6B] hover:text-[#071412] transition-colors"
              >
                Read today's briefing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { time: "Morning Briefing", hour: "07:00", stories: 12, topic: "AU Summit outcomes, East Africa trade update, Ethiopia energy milestone" },
                { time: "Afternoon Update", hour: "13:00", stories: 8, topic: "Nigerian fintech funding, Ghana electoral commission, South Africa energy bill" },
                { time: "Evening Briefing", hour: "19:00", stories: 15, topic: "Sahel climate warning, Senegal oil production, Egypt diplomatic talks" },
              ].map((b, i) => (
                <div key={i} className="bg-[#0D1D18] border border-[#1C3930] rounded-sm p-4 hover:border-[#087443] transition-colors">
                  <div className="text-xs font-bold tracking-widest uppercase text-[#0DBF6B] mb-1">{b.time}</div>
                  <div className="text-lg font-bold text-[#F5FAF7] mb-2">{b.hour}</div>
                  <p className="text-xs text-[#9AAFA5] leading-relaxed mb-3">{b.topic}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#9AAFA5]">{b.stories} stories</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#9AAFA5]">AI-assisted</span>
                      <span className="text-[10px] text-[#0DBF6B]">· Human reviewed</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Country Spotlight */}
      <section className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold text-[#10201A]" style={{ fontFamily: "var(--font-editorial)" }}>Country Spotlight</h2>
          <span className="flex-1 h-px bg-[#DDE7E1]" />
          <Link to="/news" className="text-xs font-semibold text-[#087443] hover:underline">All countries</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {COUNTRIES.map(c => (
            <Link
              key={c.code}
              to={`/news?country=${c.name}`}
              className="group bg-white border border-[#DDE7E1] rounded-sm p-4 text-center hover:border-[#087443] hover:bg-[#EAF7EF] transition-all"
            >
              <div className="text-3xl mb-2">{c.flag}</div>
              <div className="text-xs font-semibold text-[#10201A] group-hover:text-[#087443] transition-colors">{c.name}</div>
              <div className="text-[10px] text-[#68756F] mt-0.5">{c.stories} stories</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Business & Economy */}
      <section className="bg-white border-y border-[#DDE7E1]">
        <div className="max-w-[1440px] mx-auto px-6 py-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-[#087443] rounded-full" />
            <h2 className="text-xl font-bold text-[#10201A]" style={{ fontFamily: "var(--font-editorial)" }}>Business & Economy</h2>
            <span className="flex-1 h-px bg-[#DDE7E1]" />
            <Link to="/news?category=Business" className="text-xs font-semibold text-[#087443] hover:underline">More</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
            {["Markets", "Currencies", "Companies", "Investment", "Trade", "Jobs", "Technology"].map(tag => (
              <button
                key={tag}
                className="px-3 py-1.5 text-xs font-semibold text-[#68756F] border border-[#DDE7E1] rounded-sm hover:border-[#087443] hover:text-[#087443] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "African Development Bank raises $3.2B in bond issuance — largest in institution history", country: "Pan-Africa", category: "Investment", time: "1h ago", image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=400&h=240&fit=crop&auto=format" },
              { title: "East African Community launches new cross-border payment system", country: "East Africa", category: "Finance", time: "3h ago", image: "https://images.unsplash.com/photo-1694175271713-a6e2cc378980?w=400&h=240&fit=crop&auto=format" },
              { title: "Ghana cocoa board reports record harvest as global prices surge", country: "Ghana", category: "Trade", time: "5h ago", image: "https://images.unsplash.com/photo-1781504798134-31600e8579ba?w=400&h=240&fit=crop&auto=format" },
            ].map((a, i) => (
              <Link key={i} to="/news" className="group">
                <div className="aspect-[5/3] bg-[#EAF7EF] rounded-sm overflow-hidden mb-3">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CategoryBadge label={a.category} />
                <h3 className="text-sm font-semibold text-[#10201A] leading-snug mt-1 group-hover:text-[#087443] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-editorial)" }}>
                  {a.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-[10px] text-[#68756F]">
                  <span>{a.country}</span><span>·</span><span>{a.time}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Agriculture side by side */}
      <section className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technology */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-5 bg-[#1D6BFF] rounded-full" />
              <h2 className="text-lg font-bold text-[#10201A]" style={{ fontFamily: "var(--font-editorial)" }}>Technology & AI</h2>
              <span className="flex-1 h-px bg-[#DDE7E1]" />
              <Link to="/news?category=Technology" className="text-xs font-semibold text-[#087443] hover:underline">More</Link>
            </div>
            <div className="space-y-3">
              {[
                { title: "Nairobi's Silicon Savannah draws $800M in venture capital in 2026", country: "Kenya", time: "8h ago" },
                { title: "Rwanda launches Africa's first national AI governance framework", country: "Rwanda", time: "10h ago" },
                { title: "Nigerian startup Flutterwave expands to 12 new African markets", country: "Nigeria", time: "12h ago" },
                { title: "African Union commissions pan-continental fibre optic backbone study", country: "Pan-Africa", time: "14h ago" },
              ].map((a, i) => (
                <Link key={i} to="/news" className="group flex items-start gap-3 py-3 border-b border-[#DDE7E1] last:border-0">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1D6BFF] mt-2" />
                  <div>
                    <p className="text-sm font-medium text-[#10201A] group-hover:text-[#087443] transition-colors line-clamp-2">
                      {a.title}
                    </p>
                    <div className="flex gap-2 mt-1 text-[10px] text-[#68756F]">
                      <span>{a.country}</span><span>·</span><span>{a.time}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Agriculture */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-5 bg-[#F59E0B] rounded-full" />
              <h2 className="text-lg font-bold text-[#10201A]" style={{ fontFamily: "var(--font-editorial)" }}>Agriculture</h2>
              <span className="flex-1 h-px bg-[#DDE7E1]" />
              <Link to="/news?category=Agriculture" className="text-xs font-semibold text-[#087443] hover:underline">More</Link>
            </div>
            <div className="space-y-3">
              {[
                { title: "East Africa's smallholder farmers adopt AI crop monitoring tools", country: "East Africa", time: "2h ago" },
                { title: "Ghana cocoa board reports record harvest as global prices surge", country: "Ghana", time: "5h ago" },
                { title: "AGRA launches new $200M food security initiative across 11 nations", country: "Pan-Africa", time: "9h ago" },
                { title: "Tanzania rice exports hit decade high as irrigation programs expand", country: "Tanzania", time: "11h ago" },
              ].map((a, i) => (
                <Link key={i} to="/news" className="group flex items-start gap-3 py-3 border-b border-[#DDE7E1] last:border-0">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2" />
                  <div>
                    <p className="text-sm font-medium text-[#10201A] group-hover:text-[#087443] transition-colors line-clamp-2">
                      {a.title}
                    </p>
                    <div className="flex gap-2 mt-1 text-[10px] text-[#68756F]">
                      <span>{a.country}</span><span>·</span><span>{a.time}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sports + Culture */}
      <section className="bg-white border-y border-[#DDE7E1]">
        <div className="max-w-[1440px] mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                label: "Sports",
                color: "#E5484D",
                items: [
                  { title: "AFCON 2027: Morocco confirmed as host after record bid", country: "Morocco", time: "1h ago" },
                  { title: "Victor Osimhen breaks Nigerian goalscoring record in Champions League", country: "Nigeria", time: "3h ago" },
                  { title: "Rwanda's Jeanne d'Arc wins African Basketball Championship", country: "Rwanda", time: "7h ago" },
                ]
              },
              {
                label: "Culture",
                color: "#0DBF6B",
                items: [
                  { title: "Burna Boy's new album breaks streaming records across African markets", country: "Nigeria", time: "2h ago" },
                  { title: "Nollywood production secures Netflix deal worth $45M", country: "Nigeria", time: "6h ago" },
                  { title: "Kigali Art Week attracts 80 artists from 34 African nations", country: "Rwanda", time: "1d ago" },
                ]
              }
            ].map(section => (
              <div key={section.label}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-5 rounded-full" style={{ backgroundColor: section.color }} />
                  <h2 className="text-lg font-bold text-[#10201A]" style={{ fontFamily: "var(--font-editorial)" }}>{section.label}</h2>
                  <span className="flex-1 h-px bg-[#DDE7E1]" />
                </div>
                <div className="space-y-3">
                  {section.items.map((a, i) => (
                    <Link key={i} to="/news" className="group flex items-start gap-3 py-3 border-b border-[#DDE7E1] last:border-0">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: section.color }} />
                      <div>
                        <p className="text-sm font-medium text-[#10201A] group-hover:text-[#087443] transition-colors">
                          {a.title}
                        </p>
                        <div className="flex gap-2 mt-1 text-[10px] text-[#68756F]">
                          <span>{a.country}</span><span>·</span><span>{a.time}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
