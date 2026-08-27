// Skills section: categorized skill groups rendered as icon-labeled chips.
import {
  Code2,
  Brain,
  BarChart3,
  Globe,
  Terminal,
  Languages,
} from "lucide-react";
import { portfolioData, type SkillGroup } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./SectionHeading";
import TechIcon from "./TechIcons";

const groupIcons: Record<string, typeof Code2> = {
  "Programming Languages": Code2,
  "AI & Machine Learning": Brain,
  "Data Analysis & Visualization": BarChart3,
  "Web Development": Globe,
  "Developer Tools": Terminal,
  Languages,
};

const fallbackIcon = Code2;

function SkillBlock({
  group,
  categoryLabel,
}: {
  group: SkillGroup;
  categoryLabel: string;
}) {
  const Icon = groupIcons[group.category] ?? fallbackIcon;

  return (
    <div className="h-full rounded-2xl border border-white/10 p-6 sm:p-7">
      <h3 className="flex items-center gap-3 text-lg font-bold tracking-tight text-slate-50">
        <Icon className="h-5 w-5 shrink-0 text-emerald-400" />
        {categoryLabel}
      </h3>

      <ul
        className="mt-5 flex flex-wrap gap-2"
        aria-label={group.skills.join(", ")}
      >
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="flex cursor-default items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-slate-300"
          >
            <TechIcon name={skill} className="h-4 w-4 text-slate-400" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const { t } = useLanguage();

  const categoryLabels: Record<string, string> = {
    "Programming Languages": t.skills.languages,
    "AI & Machine Learning": t.skills.ai,
    "Data Analysis & Visualization": t.skills.data,
    "Web Development": t.skills.web,
    "Developer Tools": t.skills.tools,
    Languages: t.skills.spoken,
  };

  return (
    <section
      id="skills"
      className="border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02 /" title={t.sections.skills} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skillGroups.map((group) => (
            <SkillBlock
              key={group.category}
              group={group}
              categoryLabel={categoryLabels[group.category] ?? group.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
