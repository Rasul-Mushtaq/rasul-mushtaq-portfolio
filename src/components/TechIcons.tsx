// Maps skill names to brand SVG paths, with lucide fallbacks when no mark exists.
import {
  Database,
  Bot,
  Workflow,
  FileSpreadsheet,
  BarChart3,
  Languages,
  Boxes,
  Sparkles,
} from "lucide-react";
import { techIconData } from "./techIconData";

const aliasMap: Record<string, string> = {
  python: "siPython",
  r: "siR",
  javascript: "siJavascript",
  typescript: "siTypescript",
  pytorch: "siPytorch",
  tensorflow: "siTensorflow",
  keras: "siKeras",
  "scikit-learn": "siScikitlearn",
  pandas: "siPandas",
  numpy: "siNumpy",
  react: "siReact",
  "tailwind css": "siTailwindcss",
  git: "siGit",
  github: "siGithub",
  html: "siHtml5",
  css: "siCss",
  plotly: "siPlotly",
  streamlit: "siStreamlit",
  gradio: "siGradio",
  netlify: "siNetlify",
};

type FallbackIcon = typeof Database;

// Lucide fallbacks for tags without a Simple Icons mark.
const fallbackMap: Record<string, FallbackIcon> = {
  sql: Database,
  dt: Database,
  matplotlib: BarChart3,
  "ai agents": Bot,
  "ai automation": Workflow,
  excel: FileSpreadsheet,
  "power bi": BarChart3,
  arabic: Languages,
  english: Languages,
  shiny: Boxes,
};

function normalize(name: string) {
  return name.trim().toLowerCase();
}

export function TechIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  const key = normalize(name);
  const brandKey = aliasMap[key];
  const brand = brandKey ? techIconData[brandKey] : undefined;

  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        role="img"
        aria-label={brand.title}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  // Prefix fallback for decorated language tags like "Arabic (Native)".
  const prefixMatch = Object.keys(fallbackMap).find(
    (candidate) => key.startsWith(candidate) || candidate.startsWith(key),
  );
  const Fallback = prefixMatch ? fallbackMap[prefixMatch] : Sparkles;
  return <Fallback className={className} aria-hidden="true" />;
}

export default TechIcon;

