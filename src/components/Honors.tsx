// Honors and awards: tagged cards for recognitions, placements, and exhibitions.
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

const tagStyles =
  "rounded-full border border-emerald-400/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-300";

function HonorCard({
  honor,
}: {
  honor: { tag: string; date: string; title: string };
}) {
  return (
    <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-white/10 p-6">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className={tagStyles}>{honor.tag}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
          {honor.date}
        </span>
      </div>
      <p className="text-sm font-medium leading-relaxed text-slate-200">
        {honor.title}
      </p>
    </div>
  );
}

function Honors() {
  const { t } = useLanguage();

  return (
    <section
      id="honors"
      className="border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="honors-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="04 /" title={t.sections.honors} />

        <div className="grid gap-5 sm:grid-cols-2">
          {t.honors.items.map((honor) => (
            <HonorCard key={honor.title} honor={honor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Honors;
