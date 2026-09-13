import { useState } from "react";
import { Link } from "react-router-dom";
import { ADMIN_STATS, ADMIN_RECENT, SOURCES } from "../data/mockData";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "⊞", path: "/admin" },
  { label: "News Management", icon: "📰", sub: ["All News", "Create Article", "Drafts", "Pending Review", "Published", "Archived"] },
  { label: "Authors", icon: "👤", sub: ["All Authors", "Add Author", "Verification"] },
  { label: "Categories", icon: "🏷️" },
  { label: "Countries", icon: "🌍" },
  { label: "Sources", icon: "🔗" },
  { label: "AI Automation", icon: "⚡", sub: ["News Ingestion", "AI Summaries", "Translation", "Duplicate Detection", "Daily Briefing"] },
  { label: "Media", icon: "🖼️" },
  { label: "Users", icon: "👥" },
  { label: "Analytics", icon: "📊" },
  { label: "Settings", icon: "⚙️" },
];

const STATUS_COLORS: Record<string, string> = {
  published: "bg-[#EAF7EF] text-[#087443]",
  pending: "bg-amber-50 text-[#F59E0B]",
  review: "bg-blue-50 text-[#1D6BFF]",
  draft: "bg-gray-100 text-[#68756F]",
};

function Sidebar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const [expanded, setExpanded] = useState<string | null>("News Management");

  return (
    <aside className="w-56 flex-shrink-0 bg-[#071412] border-r border-[#1C3930] flex flex-col">
      <div className="p-5 border-b border-[#1C3930]">
        <div className="text-[#F5FAF7] font-bold text-base" style={{ fontFamily: "var(--font-editorial)" }}>IbiheNews</div>
        <div className="text-[10px] tracking-widest uppercase text-[#9AAFA5]">Admin Console</div>
      </div>
      <nav className="flex-1 overflow-y-auto p-3">
        {NAV_ITEMS.map(item => (
          <div key={item.label}>
            <button
              onClick={() => {
                setActive(item.label);
                if (item.sub) setExpanded(expanded === item.label ? null : item.label);
              }}
              className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded text-xs font-medium transition-colors mb-0.5 ${
                active === item.label
                  ? "bg-[#087443] text-white"
                  : "text-[#9AAFA5] hover:text-[#F5FAF7] hover:bg-[#0D1D18]"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{item.icon}</span>
                {item.label}
              </span>
              {item.sub && (
                <svg className={`w-3 h-3 transition-transform ${expanded === item.label ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
            {item.sub && expanded === item.label && (
              <div className="ml-6 mb-1">
                {item.sub.map(sub => (
                  <Link
                    key={sub}
                    to={sub === "Create Article" ? "/admin/create" : "/admin"}
                    className="block px-3 py-1.5 text-[11px] text-[#9AAFA5] hover:text-[#0DBF6B] transition-colors"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-[#1C3930]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#087443] flex items-center justify-center text-white text-xs font-bold">A</div>
          <div>
            <div className="text-xs font-medium text-[#F5FAF7]">Admin User</div>
            <div className="text-[10px] text-[#9AAFA5]">Editor-in-Chief</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="flex h-[calc(100vh-105px)] bg-[#F7F9F7]">
      <Sidebar active={activeNav} setActive={setActiveNav} />

      {/* Main */}
      <div className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <div className="bg-white border-b border-[#DDE7E1] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-[#10201A]">Dashboard</h1>
            <p className="text-xs text-[#68756F]">Sunday, 13 September 2026 — 09:42 WAT</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/admin/create"
              className="flex items-center gap-2 px-4 py-2 bg-[#087443] text-white text-xs font-semibold rounded-sm hover:bg-[#0DBF6B] hover:text-[#071412] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Article
            </Link>
            <Link to="/" className="text-xs text-[#68756F] hover:text-[#087443] transition-colors">← View site</Link>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Articles", value: ADMIN_STATS.totalArticles.toLocaleString(), sub: `${ADMIN_STATS.published} published`, color: "#087443" },
              { label: "Readers This Month", value: ADMIN_STATS.readers, sub: `${ADMIN_STATS.dailyActive} daily active`, color: "#1D6BFF" },
              { label: "Page Views", value: ADMIN_STATS.pageViews, sub: "Last 30 days", color: "#0DBF6B" },
              { label: "Avg. Read Time", value: ADMIN_STATS.avgReadTime, sub: "Per article", color: "#F59E0B" },
            ].map(stat => (
              <div key={stat.label} className="bg-white border border-[#DDE7E1] rounded-sm p-4">
                <div className="text-xs text-[#68756F] mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-[#10201A]" style={{ fontFamily: "var(--font-editorial)" }}>{stat.value}</div>
                <div className="text-[10px] text-[#68756F] mt-1">{stat.sub}</div>
                <div className="mt-3 h-1 bg-[#DDE7E1] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "68%", backgroundColor: stat.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Article status summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Published", count: ADMIN_STATS.published, color: "#087443" },
              { label: "Pending Review", count: ADMIN_STATS.pending, color: "#F59E0B" },
              { label: "Drafts", count: ADMIN_STATS.drafts, color: "#68756F" },
              { label: "Archived", count: 84, color: "#1D6BFF" },
            ].map(s => (
              <div key={s.label} className="bg-white border border-[#DDE7E1] rounded-sm px-4 py-3 flex items-center gap-3">
                <div className="w-2 h-8 rounded-full" style={{ backgroundColor: s.color }} />
                <div>
                  <div className="text-lg font-bold text-[#10201A]">{s.count}</div>
                  <div className="text-[10px] text-[#68756F]">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent articles */}
            <div className="lg:col-span-2 bg-white border border-[#DDE7E1] rounded-sm overflow-hidden">
              <div className="px-5 py-3.5 border-b border-[#DDE7E1] flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#10201A]">Recent Articles</h3>
                <Link to="/admin/create" className="text-xs text-[#087443] font-semibold hover:underline">+ New</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[#DDE7E1] bg-[#F7F9F7]">
                      <th className="text-left px-5 py-2.5 text-[10px] font-semibold tracking-widest uppercase text-[#68756F]">Title</th>
                      <th className="text-left px-4 py-2.5 text-[10px] font-semibold tracking-widest uppercase text-[#68756F]">Author</th>
                      <th className="text-left px-4 py-2.5 text-[10px] font-semibold tracking-widest uppercase text-[#68756F]">Status</th>
                      <th className="text-left px-4 py-2.5 text-[10px] font-semibold tracking-widest uppercase text-[#68756F]">Views</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDE7E1]">
                    {ADMIN_RECENT.map(a => (
                      <tr key={a.id} className="hover:bg-[#F7F9F7] transition-colors">
                        <td className="px-5 py-3">
                          <div className="font-medium text-[#10201A] line-clamp-1 max-w-[260px]">{a.title}</div>
                          <div className="text-[#68756F] text-[10px] mt-0.5">{a.country} · {a.time}</div>
                        </td>
                        <td className="px-4 py-3 text-[#68756F] whitespace-nowrap">{a.author}</td>
                        <td className="px-4 py-3">
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded capitalize ${STATUS_COLORS[a.status]}`}>
                            {a.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-[#68756F] whitespace-nowrap">
                          {a.views > 0 ? a.views.toLocaleString() : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Source pipeline */}
            <div className="bg-white border border-[#DDE7E1] rounded-sm overflow-hidden">
              <div className="px-5 py-3.5 border-b border-[#DDE7E1] flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#10201A]">Source Pipeline</h3>
                <span className="flex items-center gap-1 text-[10px] text-[#0DBF6B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0DBF6B] animate-pulse" />
                  Live
                </span>
              </div>
              <div className="divide-y divide-[#DDE7E1]">
                {SOURCES.slice(0, 5).map(s => (
                  <div key={s.name} className="px-5 py-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-[#10201A]">{s.name}</span>
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${s.status === "active" ? "bg-[#EAF7EF] text-[#087443]" : "bg-amber-50 text-[#F59E0B]"}`}>
                        {s.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-[#68756F]">
                      <span>{s.country} · {s.lastChecked}</span>
                      <span>{s.discovered} articles · {s.reliability}% reliable</span>
                    </div>
                    <div className="mt-2 h-1 bg-[#DDE7E1] rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-[#087443]" style={{ width: `${s.reliability}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Workflow */}
          <div className="bg-white border border-[#DDE7E1] rounded-sm overflow-hidden">
            <div className="px-5 py-3.5 border-b border-[#DDE7E1]">
              <h3 className="text-sm font-semibold text-[#10201A]">Article Workflow</h3>
              <p className="text-xs text-[#68756F] mt-0.5">AI-assisted editorial pipeline</p>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-0 overflow-x-auto">
                {[
                  { label: "Source Detected", count: 284, active: false, done: true },
                  { label: "AI Analysis", count: 142, active: false, done: true },
                  { label: "Duplicate Check", count: 98, active: false, done: true },
                  { label: "AI Summary", count: 87, active: true, done: false },
                  { label: "Human Review", count: 84, active: false, done: false },
                  { label: "Fact Check", count: 31, active: false, done: false },
                  { label: "Editor Approval", count: 14, active: false, done: false },
                  { label: "Published", count: 2631, active: false, done: true },
                ].map((step, i, arr) => (
                  <div key={step.label} className="flex items-center">
                    <div className={`flex-shrink-0 px-3 py-2 rounded-sm text-center min-w-[90px] ${
                      step.active ? "bg-[#087443] text-white" :
                      step.done ? "bg-[#EAF7EF] text-[#087443]" :
                      "bg-[#F7F9F7] text-[#68756F]"
                    }`}>
                      <div className="text-[10px] font-semibold leading-tight">{step.label}</div>
                      <div className={`text-lg font-bold mt-0.5 ${step.active ? "text-white" : step.done ? "text-[#087443]" : "text-[#10201A]"}`} style={{ fontFamily: "var(--font-editorial)" }}>
                        {step.count}
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex-shrink-0 flex items-center px-1">
                        <svg className="w-4 h-4 text-[#DDE7E1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analytics snapshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Top Country", value: "Kenya", sub: "31 stories · 284K views", flag: "🇰🇪" },
              { label: "Top Category", value: "Politics", sub: "42% of total traffic", flag: "🏛️" },
              { label: "Top Author", value: "Grace Wanjiku", sub: "22.1K views this week", flag: "✍️" },
            ].map(item => (
              <div key={item.label} className="bg-white border border-[#DDE7E1] rounded-sm p-4 flex items-center gap-4">
                <span className="text-3xl">{item.flag}</span>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-[#68756F]">{item.label}</div>
                  <div className="text-base font-bold text-[#10201A] mt-0.5">{item.value}</div>
                  <div className="text-[10px] text-[#68756F]">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
