// Education section: degree summary with university and college crest images.
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

function LogoSlot({ logo, label }: { logo: string; label: string }) {
  return (
    <div className="flex w-24 shrink-0 flex-col items-center gap-2 sm:w-28">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 p-2.5 sm:h-24 sm:w-24">
        <img
          src={logo}
          alt={label}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-center text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-slate-500">
        {label}
      </span>
    </div>
  );
}

function Education() {
  const { t } = useLanguage();

  const edu = portfolioData.education;
  const degree = t.education.degree;
  const institution = t.education.institution;

  return (
    <section
      id="education"
      className="border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading index="03 /" title={t.sections.education} />

        <div className="rounded-3xl border border-white/10 p-8 sm:p-10">
          <div className="flex items-start gap-7 max-sm:flex-col max-sm:items-center">
            <div className="flex gap-4">
              <LogoSlot
                logo="/university_logo.png"
                label="University of Baghdad"
              />
              <LogoSlot
                logo="/college_logo.png"
                label="College of Excellence"
              />
            </div>

            <div className="flex-1 max-sm:text-center">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <h3 className="font-display text-3xl leading-tight tracking-tight text-slate-50 rtl-serif">
                  {degree}
                </h3>
                <span className="max-w-full rounded-2xl sm:rounded-full border border-emerald-400/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-300">
                  {t.education.period || edu.period}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                {institution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
