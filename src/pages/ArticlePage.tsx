import { Link, useParams } from "react-router-dom";
import { NEWS_ARTICLES, FEATURED_ARTICLES } from "../data/mockData";

const ARTICLE_BODY = `
The African Union's 37th Extraordinary Summit concluded in Kigali on Thursday with an unprecedented multilateral agreement that analysts are calling the most significant diplomatic development on the continent in over a decade. Heads of state from 42 member nations signed the Kigali Cooperation Framework — a binding accord that sets enforceable targets across trade liberalization, regional security cooperation, climate resilience funding, and technology infrastructure investment.

The agreement, negotiated over eight months of closed-door sessions, commits signatories to eliminating tariffs on intra-African manufactured goods by 2030, establishing a new continental rapid-response security force under joint AU command, and channeling at least 5% of GDP toward climate adaptation programs by 2028.

"This is not a declaration. This is not a communiqué. This is a legal instrument," said the AU Commission Chairperson in a brief address to journalists. "Every government that has signed it is accountable to the African people — not to us, but to their own citizens."

The summit's outcomes surpassed expectations set by earlier draft frameworks, which had been significantly less ambitious on the security and climate provisions. Diplomatic sources credit Rwanda's presidency of the AU — which rotated to Kigali in January — with driving a harder bargain on enforcement mechanisms.

Regional analysts were cautiously optimistic. "The binding language is new," said one expert based in Nairobi. "Previous frameworks have had targets. This one has consequences."

The framework now enters a ratification process requiring approval by two-thirds of signatory parliaments within 18 months. Observers note that several key economies, including Nigeria and South Africa, will face their own domestic political tests before ratification can proceed.

Markets responded positively to the announcement. The Johannesburg Stock Exchange climbed 1.4% on the news, while the Nairobi Securities Exchange recorded its highest single-day volume since 2023.
`;

export default function ArticlePage() {
  const { id } = useParams();
  const article = NEWS_ARTICLES.find(a => a.id === id) || NEWS_ARTICLES[0];

  return (
    <div className="bg-[#F7F9F7] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content */}
          <main className="lg:col-span-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-[#68756F] mb-6">
              <Link to="/" className="hover:text-[#087443] transition-colors">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link to="/news" className="hover:text-[#087443] transition-colors">{article.country}</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-[#10201A]">{article.category}</span>
            </nav>

            {/* Category + badges */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#087443] border border-[#087443] px-2 py-0.5 rounded-sm">
                {article.category}
              </span>
              {article.verified && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#087443] bg-[#EAF7EF] px-2 py-0.5 rounded">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified by IbiheNews
                </span>
              )}
              {article.aiAssisted && (
                <span className="text-xs font-semibold text-[#1D6BFF] bg-blue-50 px-2 py-0.5 rounded">AI-assisted</span>
              )}
            </div>

            {/* Headline */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#10201A] leading-tight mb-3" style={{ fontFamily: "var(--font-editorial)" }}>
              {article.title}
            </h1>
            <p className="text-lg text-[#68756F] leading-relaxed mb-6" style={{ fontFamily: "var(--font-editorial)" }}>
              {article.summary}
            </p>

            {/* Author + meta */}
            <div className="flex items-center justify-between py-4 border-y border-[#DDE7E1] mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EAF7EF] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&auto=format" alt={article.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#10201A]">{article.author}</span>
                    <span className="inline-flex items-center text-[10px] font-semibold text-[#087443] bg-[#EAF7EF] px-1.5 py-0.5 rounded">
                      Verified Journalist
                    </span>
                  </div>
                  <div className="text-xs text-[#68756F] mt-0.5">
                    Published {article.time} · Updated just now · {article.readTime} read
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {["tw", "fb", "wa", "ln"].map(s => (
                  <button key={s} className="w-7 h-7 rounded-full border border-[#DDE7E1] flex items-center justify-center text-[10px] text-[#68756F] hover:border-[#087443] hover:text-[#087443] transition-colors uppercase font-bold">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="aspect-[16/9] bg-[#EAF7EF] rounded-sm overflow-hidden mb-6">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-[#68756F] mb-6 italic">Kigali Convention Centre — AU Extraordinary Summit, September 2026. Photo: IbiheNews.</p>

            {/* Article body */}
            <article className="article-body max-w-none">
              {ARTICLE_BODY.trim().split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </article>

            {/* Story production transparency */}
            <div className="mt-8 p-4 bg-[#EAF7EF] border border-[#DDE7E1] rounded-sm">
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#087443] mb-3">How this story was produced</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { label: "Sources monitored", done: true },
                  { label: "AI-assisted discovery", done: true },
                  { label: "AI-assisted translation", done: true },
                  { label: "Human fact-check", done: true },
                  { label: "Editor approval", done: true },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2 text-xs text-[#10201A]">
                    <svg className="w-3.5 h-3.5 text-[#087443] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Sources */}
            <div className="mt-6 border border-[#DDE7E1] rounded-sm overflow-hidden">
              <div className="bg-white px-4 py-3 border-b border-[#DDE7E1]">
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#10201A]">Sources</h4>
              </div>
              {[
                { name: "African Union Commission", type: "Official Statement", date: "13 Sep 2026", verified: true },
                { name: "Reuters Africa Wire", type: "Wire Service", date: "13 Sep 2026", verified: true },
                { name: "IbiheNews Correspondent — Kigali", type: "IbiheNews Reporting", date: "13 Sep 2026", verified: true },
                { name: "Diplomatic source (anonymous)", type: "Interview", date: "12 Sep 2026", verified: false },
              ].map((src, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-[#DDE7E1] last:border-0 bg-white hover:bg-[#F7F9F7] transition-colors">
                  <div>
                    <div className="text-xs font-semibold text-[#10201A]">{src.name}</div>
                    <div className="text-[10px] text-[#68756F] mt-0.5">{src.type} · {src.date}</div>
                  </div>
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${src.verified ? "bg-[#EAF7EF] text-[#087443]" : "bg-amber-50 text-[#F59E0B]"}`}>
                    {src.verified ? "Verified" : "Unconfirmed"}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["AU Summit", "Pan-Africa", "Trade", "Security", "Kigali", "Diplomacy", "African Union"].map(tag => (
                <Link key={tag} to={`/news?tag=${tag}`} className="text-xs text-[#68756F] border border-[#DDE7E1] px-3 py-1 rounded-sm hover:border-[#087443] hover:text-[#087443] transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Story timeline */}
            <div className="bg-white border border-[#DDE7E1] rounded-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-[#DDE7E1]">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#10201A]">Story Timeline</h3>
              </div>
              <div className="p-4 space-y-4">
                {[
                  { time: "2h ago", event: "Framework signed at AU Extraordinary Summit in Kigali" },
                  { time: "4h ago", event: "Final text agreed after overnight negotiations on security clause" },
                  { time: "Yesterday", event: "Draft circulated to 42 member states for review" },
                  { time: "3 days ago", event: "Summit convened with 54 heads of state present" },
                  { time: "8 months ago", event: "Negotiations launched under Rwanda AU presidency" },
                ].map((e, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-[#087443] mt-1" />
                      {i < 4 && <div className="w-px flex-1 bg-[#DDE7E1] my-1" />}
                    </div>
                    <div className="pb-2">
                      <div className="text-[10px] font-semibold text-[#68756F] mb-0.5">{e.time}</div>
                      <p className="text-xs text-[#10201A] leading-relaxed">{e.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related stories */}
            <div className="bg-white border border-[#DDE7E1] rounded-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-[#DDE7E1]">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#10201A]">Related Stories</h3>
              </div>
              <div className="divide-y divide-[#DDE7E1]">
                {FEATURED_ARTICLES.map(a => (
                  <Link key={a.id} to={`/article/${a.id}`} className="group flex gap-3 p-4 hover:bg-[#F7F9F7] transition-colors">
                    <div className="w-14 h-14 flex-shrink-0 bg-[#EAF7EF] rounded-sm overflow-hidden">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#10201A] leading-snug line-clamp-2 group-hover:text-[#087443] transition-colors">
                        {a.title}
                      </p>
                      <span className="text-[10px] text-[#68756F] mt-1 block">{a.time}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Most read */}
            <div className="bg-white border border-[#DDE7E1] rounded-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-[#DDE7E1]">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#10201A]">Most Read</h3>
              </div>
              <div className="divide-y divide-[#DDE7E1]">
                {[
                  { title: "M-Pesa records 50M daily transactions for first time", country: "Kenya", views: "22.1K" },
                  { title: "Rwanda Cabinet approves AI governance framework", country: "Rwanda", views: "18.4K" },
                  { title: "Dangote refinery begins first full crude export", country: "Nigeria", views: "15.2K" },
                  { title: "AU Summit: Continental free trade acceleration", country: "Pan-Africa", views: "12.4K" },
                ].map((a, i) => (
                  <Link key={i} to="/news" className="group flex items-start gap-3 p-4 hover:bg-[#F7F9F7] transition-colors">
                    <span className="text-2xl font-bold text-[#DDE7E1] group-hover:text-[#087443] transition-colors flex-shrink-0" style={{ fontFamily: "var(--font-editorial)" }}>
                      0{i + 1}
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[#10201A] group-hover:text-[#087443] transition-colors line-clamp-2">{a.title}</p>
                      <div className="flex gap-2 text-[10px] text-[#68756F] mt-1">
                        <span>{a.country}</span><span>·</span><span>{a.views} views</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
