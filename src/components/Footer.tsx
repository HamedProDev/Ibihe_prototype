import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-[#071412] text-[#9AAFA5]">
      {/* Newsletter */}
      <div className="border-b border-[#1C3930]">
        <div className="max-w-[1440px] mx-auto px-6 py-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0DBF6B] mb-3">
              <span className="w-4 h-px bg-[#0DBF6B]" />
              Newsletter
            </div>
            <h3 className="text-2xl font-bold text-[#F5FAF7] mb-2" style={{ fontFamily: "var(--font-editorial)" }}>
              Stay informed about Africa.
            </h3>
            <p className="text-sm text-[#9AAFA5] mb-6">
              Get the IbiheNews Daily Briefing — AI-curated, human-verified — delivered to your inbox every morning.
            </p>
            {submitted ? (
              <p className="text-[#0DBF6B] font-medium">Thank you — your briefing is on its way.</p>
            ) : (
              <div className="flex gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-[#0D1D18] border border-[#1C3930] rounded-md text-sm text-[#F5FAF7] placeholder-[#9AAFA5] focus:outline-none focus:border-[#087443]"
                />
                <button
                  onClick={() => setSubmitted(true)}
                  className="px-5 py-2.5 bg-[#087443] text-white text-sm font-semibold rounded-md hover:bg-[#0DBF6B] hover:text-[#071412] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-4">
              <div className="text-[#F5FAF7] font-bold text-lg" style={{ fontFamily: "var(--font-editorial)" }}>
                IbiheNews
              </div>
              <div className="text-[10px] tracking-widest uppercase text-[#9AAFA5]">African News & Intelligence</div>
            </div>
            <p className="text-xs leading-relaxed mb-4">
              Africa, Connected by Information.<br />
              Powered by AI. Verified by People.
            </p>
            <div className="flex gap-3">
              {["tw", "fb", "yt", "tg"].map(s => (
                <button key={s} className="w-7 h-7 rounded-full border border-[#1C3930] flex items-center justify-center text-[10px] text-[#9AAFA5] hover:border-[#087443] hover:text-[#0DBF6B] transition-colors uppercase font-bold">
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F5FAF7] mb-4">Sections</h4>
            <ul className="space-y-2 text-sm">
              {["Ahabanza", "Amakuru", "Politiki", "Ubukungu", "Ikoranabuhanga", "Ubuzima", "Imikino"].map(s => (
                <li key={s}><Link to="/news" className="hover:text-[#0DBF6B] transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F5FAF7] mb-4">Countries</h4>
            <ul className="space-y-2 text-sm">
              {["Rwanda", "Kenya", "Nigeria", "Ghana", "South Africa", "Ethiopia", "Egypt"].map(c => (
                <li key={c}><Link to={`/news?country=${c}`} className="hover:text-[#0DBF6B] transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F5FAF7] mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About IbiheNews", "Editorial Policy", "Verification Policy", "AI Policy", "Contact", "Careers"].map(item => (
                <li key={item}><a href="#" className="hover:text-[#0DBF6B] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F5FAF7] mb-4">Languages</h4>
            <ul className="space-y-2 text-sm">
              {["Kinyarwanda", "English", "Français", "Kiswahili", "العربية", "Hausa"].map(l => (
                <li key={l}><a href="#" className="hover:text-[#0DBF6B] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#1C3930] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 IbiheNews. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0DBF6B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0DBF6B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0DBF6B] transition-colors">Cookie Settings</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0DBF6B]" />
            <span>AI-assisted · Human verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
