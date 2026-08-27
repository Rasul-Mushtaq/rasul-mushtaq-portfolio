// Hero section: portrait, name and bio, resume CTA, and social links.
import { type ComponentType } from "react";
import { FileText } from "lucide-react";
import { portfolioData, type SocialLink } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { GitHubIcon, LinkedInIcon, EmailIcon, type IconProps } from "./Icons";

const socialIconMap: Record<SocialLink["icon"], ComponentType<IconProps>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
};

function ProfilePortrait() {
  return (
    <img
      src="/profile.png"
      alt="Portrait of Rasul Mushtaq"
      width={256}
      height={256}
      className="mx-auto mb-10 h-44 w-44 rounded-full object-cover ring-2 ring-emerald-500/40 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
    />
  );
}

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="pt-36 pb-20 text-center sm:pt-44">
      <div className="mx-auto max-w-4xl px-6">
        <ProfilePortrait />

        <h1 className="font-display text-6xl leading-[0.95] tracking-tight text-slate-50 sm:text-7xl lg:text-8xl rtl-serif">
          {t.hero.name}
          {t.hero.nameAccent && (
            <>
              {" "}
              <span className="italic text-emerald-300">
                {t.hero.nameAccent}
              </span>
            </>
          )}
        </h1>

        <p className="mt-6 font-body text-xs font-medium uppercase tracking-[0.35em] text-slate-400 sm:text-sm">
          {t.hero.role}
          <span className="mx-3 text-emerald-500/60">|</span>
          {portfolioData.location}
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {t.hero.bio}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/Rasul_Mushtaq_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3 text-sm font-bold tracking-wide text-brand-ink no-underline transition-colors hover:bg-emerald-300"
          >
            <FileText className="h-4 w-4 rtl-mirror" />
            {t.hero.viewResume}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-slate-200 no-underline transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
          >
            {t.nav.projects} ↓
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {portfolioData.socials.map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.icon === "email" ? undefined : "_blank"}
                rel={
                  social.icon === "email" ? undefined : "noopener noreferrer"
                }
                aria-label={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
