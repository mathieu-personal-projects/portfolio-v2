import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const names = ["Prodigieux Corp.", "Gideon", "Local ML Flow", "Eco-pulse", "Cooloc"];
const urls = [
  "https://gitlab.com/prodigieux",
  "https://github.com/MathieuAudibert/gideon",
  "https://github.com/mathieu-personal-projects/local-ml-flow",
  "https://github.com/mathieu-personal-projects/eco-pulse",
  "https://github.com/mathieu-personal-projects/Cooloc",
];
const techStacks = [
  ["Python", "Ubuntu Server", "WireGuard", "SSH"],
  ["Python", "Kafka", "Airflow", "Grafana", "PostgreSQL", "PostGIS"],
  ["Python", "FastAPI", "LocalStack", "Docker", "CI/CD"],
  ["Python", "Airflow", "GCP BigQuery", "CI/CD"],
  ["Python", "React", "PostgreSQL", "Docker", "SonarQube"],
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="02" title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <ProjectCard index={0} className="md:col-span-7" featured />
          <ProjectCard index={1} className="md:col-span-5" />
          <ProjectCard index={2} className="md:col-span-4" />
          <ProjectCard index={3} className="md:col-span-4" />
          <ProjectCard index={4} className="md:col-span-4" />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  index,
  className = "",
  featured = false,
}: {
  index: number;
  className?: string;
  featured?: boolean;
}) {
  const { t } = useTranslation();
  const item = t.projects.items[index]!;
  const num = String(index + 1).padStart(2, "0");
  const url = urls[index];

  const Wrapper = url ? "a" : "div";
  const linkProps = url
    ? { href: url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`group relative rounded-xl border bg-background p-6 ${featured ? "p-8" : ""} hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col overflow-hidden ${url ? "cursor-pointer" : ""} ${className}`}
    >
      <span className="absolute -right-1 -top-3 text-[5rem] font-black leading-none text-muted-foreground/[0.06] select-none pointer-events-none">
        {num}
      </span>

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono text-primary tracking-wider uppercase">{item.tagline}</p>
          {url && (
            <ExternalLink className="size-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
          )}
        </div>
        <h3 className={`font-bold mt-1.5 ${featured ? "text-xl" : "text-base"}`}>{names[index]}</h3>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/50">
          {(techStacks[index] ?? []).map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
