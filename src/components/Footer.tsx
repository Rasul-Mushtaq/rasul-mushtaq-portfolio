// Site footer: social icon row and copyright notice.
import { Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { GitHubIcon, LinkedInIcon } from "./Icons";

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14">
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.socials[0]?.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={portfolioData.socials[1]?.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="text-sm text-slate-400">
            © {year} {portfolioData.name}. {t.footer.rights}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
