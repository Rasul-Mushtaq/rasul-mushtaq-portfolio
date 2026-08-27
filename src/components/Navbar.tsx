// Fixed pill navigation: desktop links, mobile menu, resume button, language toggle.
import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex shrink-0 items-center rounded-full border border-white/10 bg-black/40 p-0.5 backdrop-blur-md"
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-widest transition-colors ${
          language === "en"
            ? "bg-emerald-400/15 text-emerald-300"
            : "text-slate-500 hover:text-slate-300"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("ar")}
        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-widest transition-colors ${
          language === "ar"
            ? "bg-emerald-400/15 text-emerald-300"
            : "text-slate-500 hover:text-slate-300"
        }`}
        aria-pressed={language === "ar"}
      >
        AR
      </button>
    </div>
  );
}

const RESUME_PATH = "/Rasul_Mushtaq_CV.pdf";

function ResumeButton({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  const { t } = useLanguage();

  return (
    <a
      href={RESUME_PATH}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-400 font-bold text-brand-ink no-underline transition-colors hover:bg-emerald-300 ${
        compact ? "px-3.5 py-1.5 text-[11px]" : "px-4 py-2 text-xs"
      } ${className}`}
    >
      <FileText className="h-3.5 w-3.5 rtl-mirror" />
      {t.nav.viewResume}
    </a>
  );
}

function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const hasAccent = Boolean(t.hero.nameAccent);

  const links = [
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.honors, href: "#honors" },
    { label: t.nav.certifications, href: "#certifications" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-5xl items-center gap-3">
        <nav
          className="flex min-w-0 sm:flex-1 items-center justify-between gap-3 rounded-full border border-white/10 bg-black/40 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-4"
          aria-label="Main navigation"
        >
          <a
            href="#top"
            onClick={closeMenu}
            className="flex items-center gap-2.5 no-underline"
          >
            <img
              src="/logo_v1.png"
              alt={t.hero.name}
              className="h-9 w-9 shrink-0 rounded-full object-contain"
            />
            <span className="hidden sm:inline font-display text-lg leading-none tracking-tight text-slate-50 rtl-serif">
              {t.hero.name}
              {hasAccent && (
                <>
                  {" "}
                  <span className="italic text-emerald-300">
                    {t.hero.nameAccent}
                  </span>
                </>
              )}
            </span>
          </a>

          <ul className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 no-underline transition-colors hover:text-emerald-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="leading-none">
              <ResumeButton compact />
            </li>
          </ul>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
            >
              {menuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>

        <LanguageToggle />
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-black/70 p-6 shadow-[0_16px_48px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 font-body text-base text-slate-200 no-underline transition-colors hover:bg-emerald-400/10 hover:text-emerald-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-white/10 pt-4">
            <ResumeButton className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
