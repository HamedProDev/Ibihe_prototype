import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LANGUAGES = ["RW", "EN", "FR", "SW", "AR", "HA"];

const NAV_LINKS = [
  { label: "Ahabanza", path: "/" },
  { label: "Amakuru", path: "/news" },
  { label: "Ubukungu", path: "/news?category=Business" },
  { label: "Politiki", path: "/news?category=Politics" },
  { label: "Ikoranabuhanga", path: "/news?category=Technology" },
  { label: "Ubuzima", path: "/news?category=Health" },
  { label: "Imikino", path: "/news?category=Sports" },
  { label: "Umuco", path: "/news?category=Culture" },
  { label: "Isi", path: "/news?category=World" },
];

export default function Header() {
  const [lang, setLang] = useState("EN");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#DDE7E1] shadow-sm">
      {/* Top bar */}
      <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center gap-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex flex-col">
          <span className="text-[#087443] font-bold text-xl tracking-tight leading-none" style={{ fontFamily: "var(--font-editorial)" }}>
            IbiheNews
          </span>
          <span className="text-[#68756F] text-[10px] font-medium tracking-widest uppercase leading-none mt-0.5">
            African News & Intelligence
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#68756F] w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search Africa, countries, stories…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F7F9F7] border border-[#DDE7E1] rounded-md focus:outline-none focus:border-[#087443] focus:ring-1 focus:ring-[#087443] text-[#10201A] placeholder-[#68756F]"
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Language selector */}
          <div className="hidden md:flex items-center gap-1">
            {LANGUAGES.map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                  lang === l
                    ? "bg-[#087443] text-white"
                    : "text-[#68756F] hover:text-[#087443]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md text-[#68756F] hover:text-[#087443] hover:bg-[#EAF7EF] transition-colors"
            title={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-md text-[#68756F] hover:text-[#087443] hover:bg-[#EAF7EF] transition-colors" title="Notifications">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#E5484D] rounded-full" />
          </button>

          {/* Admin link */}
          <Link
            to="/admin"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#087443] border border-[#087443] rounded-md hover:bg-[#087443] hover:text-white transition-colors"
          >
            Admin
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#10201A]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block border-t border-[#DDE7E1] bg-[#071412]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-0 overflow-x-auto">
            {NAV_LINKS.map(link => {
              const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path.split("?")[0]));
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`flex-shrink-0 px-4 py-3 text-sm font-medium tracking-wide transition-colors border-b-2 ${
                    isActive
                      ? "text-[#16D979] border-[#16D979]"
                      : "text-[#9AAFA5] border-transparent hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#071412] border-t border-[#1C3930] px-6 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                to={link.path}
                className="text-[#9AAFA5] hover:text-white py-2 text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 mt-4 pt-4 border-t border-[#1C3930]">
            {LANGUAGES.map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  lang === l ? "bg-[#087443] text-white" : "text-[#9AAFA5]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
