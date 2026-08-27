// Featured projects grid: numbered cards with stack chips, dates, repo links.
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./SectionHeading";
import TechIcon from "./TechIcons";

function ProjectCard({
  index,
  title,
  date,
  stack,
  description,
  repo,
  viewLabel,
}: {
  index: number;
  title: string;
  date: string;
  stack: string[];
  description: string;
  repo: string;
  viewLabel: string;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 p-6 transition-colors hover:border-emerald-500/40 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-widest text-emerald-400/70">
          {number}
        </span>
        <div className="flex items-center gap-3">
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {date}
          </span>
          <a
            href={repo}
            target={repo === "#" ? undefined : "_blank"}
            rel={repo === "#" ? undefined : "noopener noreferrer"}
            aria-label={`${viewLabel}: ${title}`}
            title={viewLabel}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-emerald-400/60 hover:text-emerald-300"
          >
            <ArrowUpRight className="h-4 w-4 rtl-mirror" />
          </a>
        </div>
      </div>

      <h3 className="mt-5 font-display text-2xl leading-snug tracking-tight text-slate-50">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={stack.join(", ")}>
        {stack.map((tech) => (
          <li
            key={tech}
            className="flex cursor-default items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-slate-400"
          >
            <TechIcon name={tech} className="h-3.5 w-3.5" />
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="border-t border-white/5 py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01 /" title={t.sections.projects} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={t.projects.titles[project.id] ?? project.title}
              date={project.date}
              stack={project.stack}
              repo={project.repo}
              description={t.projects.details[project.id] ?? project.details}
              viewLabel={t.projects.viewLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
