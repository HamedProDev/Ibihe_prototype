import { useState } from "react";
import { Link } from "react-router-dom";

const WORKFLOW_STEPS = ["Draft", "Review", "Fact Check", "Editor Approval", "Published"];

export default function AdminCreateArticle() {
  const [status, setStatus] = useState("Draft");
  const [activeTab, setActiveTab] = useState("content");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("Politics");
  const [country, setCountry] = useState("Rwanda");
  const [language, setLanguage] = useState("English");
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);
  const [aiSummary] = useState("AI has detected this story is related to: Pan-African diplomacy, AU Summits, trade liberalization. Suggested tags: AU, Trade, Diplomacy, Kigali. Confidence: 94%.");

  const TABS = [
    { id: "content", label: "Content" },
    { id: "media", label: "Media" },
    { id: "seo", label: "SEO" },
    { id: "sources", label: "Sources" },
    { id: "translation", label: "Translations" },
    { id: "ai", label: "AI Fields" },
  ];

  return (
    <div className="flex h-[calc(100vh-105px)] bg-[#F7F9F7]">
      {/* Narrow sidebar for admin nav */}
      <div className="w-48 flex-shrink-0 bg-[#071412] border-r border-[#1C3930] p-4">
        <Link to="/admin" className="flex items-center gap-2 text-xs text-[#9AAFA5] hover:text-[#F5FAF7] mb-6 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <div className="text-[10px] font-semibold tracking-widest uppercase text-[#9AAFA5] mb-3">Article Status</div>
        <div className="space-y-1">
          {WORKFLOW_STEPS.map((step, i) => {
            const currentIdx = WORKFLOW_STEPS.indexOf(status);
            const isDone = i < currentIdx;
            const isActive = step === status;
            return (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 ${
                  isActive ? "bg-[#087443] text-white" :
                  isDone ? "bg-[#0DBF6B] text-[#071412]" :
                  "border border-[#1C3930] text-[#9AAFA5]"
                }`}>
                  {isDone ? "✓" : i + 1}
                </div>
                <span className={`text-xs ${isActive ? "text-[#F5FAF7] font-medium" : isDone ? "text-[#0DBF6B]" : "text-[#9AAFA5]"}`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-[#1C3930]">
          <div className="text-[10px] font-semibold tracking-widest uppercase text-[#9AAFA5] mb-2">AI Confidence</div>
          <div className="text-2xl font-bold text-[#0DBF6B]" style={{ fontFamily: "var(--font-editorial)" }}>94%</div>
          <div className="text-[10px] text-[#9AAFA5] mt-0.5">Source reliability</div>
          <div className="mt-2 h-1.5 bg-[#1C3930] rounded-full overflow-hidden">
            <div className="h-full bg-[#0DBF6B] rounded-full" style={{ width: "94%" }} />
          </div>
        </div>
      </div>

      {/* Main editor area */}
      <div className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <div className="bg-white border-b border-[#DDE7E1] px-6 py-3 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-bold text-[#10201A]">Create Article</h1>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#EAF7EF] text-[#087443]">{status}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
              className="px-3 py-1.5 text-xs font-semibold text-[#68756F] border border-[#DDE7E1] rounded-sm hover:border-[#087443] hover:text-[#087443] transition-colors"
            >
              {saved ? "Saved ✓" : "Save Draft"}
            </button>
            <button className="px-3 py-1.5 text-xs font-semibold text-[#1D6BFF] border border-[#1D6BFF] rounded-sm hover:bg-blue-50 transition-colors">
              Send for Review
            </button>
            <button className="px-3 py-1.5 text-xs font-semibold text-[#F59E0B] border border-[#F59E0B] rounded-sm hover:bg-amber-50 transition-colors">
              Schedule
            </button>
            <button
              onClick={() => setStatus("Published")}
              className="px-4 py-1.5 text-xs font-semibold bg-[#087443] text-white rounded-sm hover:bg-[#0DBF6B] hover:text-[#071412] transition-colors"
            >
              Publish
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: editor */}
            <div className="lg:col-span-2 space-y-4">
              {/* Title */}
              <div>
                <input
                  type="text"
                  placeholder="Article headline…"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full text-2xl font-bold text-[#10201A] bg-transparent border-0 border-b-2 border-[#DDE7E1] focus:border-[#087443] focus:outline-none pb-2 placeholder-[#DDE7E1]"
                  style={{ fontFamily: "var(--font-editorial)" }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subtitle / deck…"
                  value={subtitle}
                  onChange={e => setSubtitle(e.target.value)}
                  className="w-full text-base text-[#68756F] bg-transparent border-0 border-b border-[#DDE7E1] focus:border-[#087443] focus:outline-none pb-2 placeholder-[#DDE7E1]"
                  style={{ fontFamily: "var(--font-editorial)" }}
                />
              </div>

              {/* Tabs */}
              <div className="border-b border-[#DDE7E1]">
                <div className="flex gap-1">
                  {TABS.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 text-xs font-semibold border-b-2 -mb-px transition-colors ${
                        activeTab === tab.id
                          ? "border-[#087443] text-[#087443]"
                          : "border-transparent text-[#68756F] hover:text-[#10201A]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab content */}
              {activeTab === "content" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">Summary</label>
                    <textarea
                      placeholder="Brief summary for the article preview card…"
                      rows={3}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A] placeholder-[#68756F] resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">Article Body</label>
                    <textarea
                      placeholder="Write the full article here…"
                      rows={18}
                      value={content}
                      onChange={e => setContent(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A] placeholder-[#68756F] resize-none leading-relaxed"
                      style={{ fontFamily: "var(--font-editorial)" }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#68756F]">
                    <span>{content.split(/\s+/).filter(Boolean).length} words</span>
                    <span>~{Math.max(1, Math.ceil(content.split(/\s+/).filter(Boolean).length / 200))} min read</span>
                  </div>
                </div>
              )}

              {activeTab === "seo" && (
                <div className="space-y-4">
                  {[
                    { label: "SEO Title", placeholder: "Search engine title (max 60 chars)" },
                    { label: "SEO Description", placeholder: "Meta description (max 160 chars)", textarea: true },
                    { label: "SEO Keywords", placeholder: "Comma-separated keywords" },
                    { label: "Canonical URL", placeholder: "https://ibihenews.rw/article/slug" },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">{f.label}</label>
                      {f.textarea ? (
                        <textarea placeholder={f.placeholder} rows={3} className="w-full px-3 py-2 text-sm bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A] placeholder-[#68756F] resize-none" />
                      ) : (
                        <input type="text" placeholder={f.placeholder} className="w-full px-3 py-2 text-sm bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A] placeholder-[#68756F]" />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "sources" && (
                <div className="space-y-3">
                  <div className="bg-[#F7F9F7] border border-[#DDE7E1] rounded-sm p-4">
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <input type="text" placeholder="Source name" className="px-3 py-2 text-sm bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443]" />
                      <select className="px-3 py-2 text-sm bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#68756F]">
                        <option>Primary source</option>
                        <option>Secondary source</option>
                        <option>Official statement</option>
                        <option>Interview</option>
                        <option>IbiheNews reporting</option>
                      </select>
                    </div>
                    <input type="url" placeholder="Source URL" className="w-full px-3 py-2 text-sm bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] mb-2" />
                    <button className="text-xs font-semibold text-[#087443] hover:underline">+ Add source</button>
                  </div>
                </div>
              )}

              {activeTab === "translation" && (
                <div>
                  <div className="overflow-hidden border border-[#DDE7E1] rounded-sm">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-[#F7F9F7] border-b border-[#DDE7E1]">
                          <th className="text-left px-4 py-2.5 text-[10px] font-semibold tracking-widest uppercase text-[#68756F]">Language</th>
                          <th className="text-left px-4 py-2.5 text-[10px] font-semibold tracking-widest uppercase text-[#68756F]">Status</th>
                          <th className="px-4 py-2.5 text-[10px] font-semibold tracking-widest uppercase text-[#68756F]">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DDE7E1] bg-white">
                        {[
                          { lang: "Kinyarwanda", code: "RW", status: "Original" },
                          { lang: "English", code: "EN", status: "AI translated" },
                          { lang: "Français", code: "FR", status: "Not translated" },
                          { lang: "Kiswahili", code: "SW", status: "AI translated" },
                          { lang: "العربية", code: "AR", status: "Not translated" },
                          { lang: "Hausa", code: "HA", status: "Not translated" },
                        ].map(t => (
                          <tr key={t.code}>
                            <td className="px-4 py-3 font-medium text-[#10201A]">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold bg-[#F7F9F7] px-1.5 py-0.5 rounded text-[#68756F]">{t.code}</span>
                                {t.lang}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                                t.status === "Original" ? "bg-[#EAF7EF] text-[#087443]" :
                                t.status === "AI translated" ? "bg-blue-50 text-[#1D6BFF]" :
                                "bg-gray-100 text-[#68756F]"
                              }`}>
                                {t.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <button className="text-xs font-semibold text-[#087443] hover:underline">
                                {t.status === "Not translated" ? "Generate AI →" : "Review"}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "ai" && (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-100 rounded-sm p-4">
                    <div className="text-xs font-bold text-[#1D6BFF] mb-2">AI Analysis Result</div>
                    <p className="text-xs text-[#10201A] leading-relaxed">{aiSummary}</p>
                  </div>
                  {[
                    { label: "AI Generated Summary", placeholder: "AI will generate a summary here…" },
                    { label: "AI Suggested Title", placeholder: "AI alternative title suggestion…" },
                    { label: "AI Suggested Tags", placeholder: "AU, Trade, Diplomacy, Kigali, Pan-Africa" },
                    { label: "AI Detected Entities", placeholder: "People, organizations, locations detected…" },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">{f.label}</label>
                      <textarea
                        placeholder={f.placeholder}
                        rows={2}
                        className="w-full px-3 py-2 text-xs bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A] placeholder-[#68756F] resize-none"
                      />
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">AI Confidence</label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-[#DDE7E1] rounded-full overflow-hidden">
                          <div className="h-full bg-[#0DBF6B] rounded-full" style={{ width: "94%" }} />
                        </div>
                        <span className="text-sm font-bold text-[#087443]">94%</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">Duplicate Risk</label>
                      <span className="text-xs font-semibold text-[#087443] bg-[#EAF7EF] px-2 py-1 rounded">None detected</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "media" && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-[#DDE7E1] rounded-sm p-10 text-center hover:border-[#087443] transition-colors cursor-pointer">
                    <div className="text-3xl mb-2">🖼️</div>
                    <p className="text-sm font-medium text-[#10201A]">Drop featured image here</p>
                    <p className="text-xs text-[#68756F] mt-1">or click to browse · PNG, JPG, WebP</p>
                    <button className="mt-3 px-4 py-2 text-xs font-semibold bg-[#EAF7EF] text-[#087443] rounded-sm hover:bg-[#087443] hover:text-white transition-colors">
                      Upload Image
                    </button>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">Image Caption</label>
                    <input type="text" placeholder="Caption for the featured image…" className="w-full px-3 py-2 text-sm bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">Image Credit</label>
                    <input type="text" placeholder="Photo credit / source" className="w-full px-3 py-2 text-sm bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443]" />
                  </div>
                </div>
              )}
            </div>

            {/* Right: metadata panel */}
            <div className="space-y-4">
              {/* Core fields */}
              <div className="bg-white border border-[#DDE7E1] rounded-sm p-4 space-y-3">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#68756F]">Article Details</h3>

                {[
                  { label: "Category", options: ["Politics", "Business", "Technology", "Health", "Agriculture", "Sports", "Culture", "Climate", "World"], value: category, set: setCategory },
                  { label: "Country", options: ["Rwanda", "Kenya", "Nigeria", "Ghana", "South Africa", "Ethiopia", "Egypt", "Uganda", "Tanzania", "Pan-Africa"], value: country, set: setCountry },
                  { label: "Language", options: ["Kinyarwanda", "English", "Français", "Kiswahili", "العربية", "Hausa"], value: language, set: setLanguage },
                ].map(field => (
                  <div key={field.label}>
                    <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">{field.label}</label>
                    <select
                      value={field.value}
                      onChange={e => field.set(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A]"
                    >
                      {field.options.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">Author</label>
                  <select className="w-full px-3 py-2 text-xs bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A]">
                    <option>Amara Diallo</option>
                    <option>Grace Wanjiku</option>
                    <option>Chidi Okonkwo</option>
                    <option>James Bizimana</option>
                    <option>Fatima Al-Rashid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">Tags</label>
                  <input type="text" placeholder="Comma-separated tags…" className="w-full px-3 py-2 text-xs bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A] placeholder-[#68756F]" />
                </div>
              </div>

              {/* Editorial */}
              <div className="bg-white border border-[#DDE7E1] rounded-sm p-4 space-y-3">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#68756F]">Editorial</h3>
                {[
                  { label: "Reporter", placeholder: "Assigned reporter" },
                  { label: "Fact Checker", placeholder: "Assigned fact-checker" },
                  { label: "Editor", placeholder: "Assigning editor" },
                ].map(f => (
                  <div key={f.label}>
                    <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">{f.label}</label>
                    <input type="text" placeholder={f.placeholder} className="w-full px-3 py-2 text-xs bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A] placeholder-[#68756F]" />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">Verification Status</label>
                  <select className="w-full px-3 py-2 text-xs bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A]">
                    <option>Under review</option>
                    <option>Fact-checked</option>
                    <option>Verified</option>
                    <option>Disputed</option>
                  </select>
                </div>
              </div>

              {/* Publish settings */}
              <div className="bg-white border border-[#DDE7E1] rounded-sm p-4 space-y-3">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#68756F]">Publish</h3>
                <div>
                  <label className="block text-[10px] font-semibold tracking-widest uppercase text-[#68756F] mb-1">Publish Date</label>
                  <input type="datetime-local" className="w-full px-3 py-2 text-xs bg-white border border-[#DDE7E1] rounded-sm focus:outline-none focus:border-[#087443] text-[#10201A]" />
                </div>
                <div className="pt-2 space-y-2">
                  <button className="w-full py-2 text-xs font-semibold bg-[#087443] text-white rounded-sm hover:bg-[#0DBF6B] hover:text-[#071412] transition-colors">
                    Publish Now
                  </button>
                  <button className="w-full py-2 text-xs font-semibold text-[#68756F] border border-[#DDE7E1] rounded-sm hover:border-[#E5484D] hover:text-[#E5484D] transition-colors">
                    Delete Draft
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
