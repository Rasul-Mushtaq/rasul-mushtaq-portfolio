// Contact section: email and phone CTAs, location line, and social links.
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./SectionHeading";
import { GitHubIcon, LinkedInIcon } from "./Icons";

function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading index="06 /" title={t.sections.contact} />

        <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-slate-400">
          {t.contact.subtitle}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${portfolioData.email}`}
            className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 no-underline transition-colors hover:border-emerald-400/50"
          >
            <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
            <span className="break-all text-sm text-slate-200">
              {portfolioData.email}
            </span>
          </a>

          <a
            href={`tel:${portfolioData.phone}`}
            className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 no-underline transition-colors hover:border-emerald-400/50"
          >
            <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
            <span className="text-sm text-slate-200">
              {portfolioData.phone}
            </span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-500">
          <MapPin className="h-3.5 w-3.5 text-emerald-400" />
          {portfolioData.location}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={portfolioData.socials[0]?.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <GitHubIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={portfolioData.socials[1]?.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <LinkedInIcon className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
