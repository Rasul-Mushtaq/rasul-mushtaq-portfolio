// Certifications and training: cards labeled by entry type from the translations.
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

// The first TRAINING_COUNT entries in the data are training programs.
const TRAINING_COUNT = 1;

function Certifications() {
  const { t } = useLanguage();

  return (
    <section
      id="certifications"
      className="border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="05 /" title={t.sections.certifications} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.certifications.items.map((cert, index) => (
            <article
              key={cert.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 p-6"
            >
              <span className="self-start rounded-full border border-emerald-400/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-300">
                {index < TRAINING_COUNT
                  ? t.certifications.trainingLabel
                  : t.certifications.certLabel}
              </span>
              <p className="flex-1 text-sm font-medium leading-relaxed text-slate-200">
                {cert.title}
              </p>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                {cert.date}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
