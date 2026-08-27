// Numbered section heading with an italic accent on the last word (English only).
import { useLanguage } from "../context/LanguageContext";

interface SectionHeadingProps {
  index: string;
  title: string;
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  const { language } = useLanguage();
  const words = title.split(" ");
  const accent = words.pop() ?? "";
  const rest = words.join(" ");
  const isEnglish = language === "en";

  return (
    <div className="mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-emerald-400/70">
        {index}
      </p>
      <h2 className="font-display text-4xl leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl rtl-serif">
        {isEnglish ? (
          <>
            {rest}{" "}
            <span className="italic text-emerald-300">{accent}</span>
          </>
        ) : (
          title
        )}
      </h2>
      <div className="mt-6 h-1 w-20 rounded-full bg-emerald-400/70" />
    </div>
  );
}
