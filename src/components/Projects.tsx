import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Prodigieux Corp.",
    tagline: "Self-hosted Cloud",
    description:
      "Self-hosted cloud on a repurposed Dell Latitude and a Raspberry Pi. Includes Sentra, an API to remotely administrate the server through SSH tunnels, and a WireGuard VPN to bounce to the server's local network.",
    tech: ["Python", "Ubuntu Server", "WireGuard", "SSH"],
    url: "https://gitlab.com/prodigieux",
  },
  {
    name: "Gideon",
    tagline: "Military Topology & Streaming",
    description:
      "Military topology interactive map built on large GeoJSON datasets. ETL + ELT streaming pipeline ingesting raw data into PostGIS, building SQL analytical tables, publishing replayed events to Kafka and serving a Grafana dashboard.",
    tech: ["Python", "Kafka", "Airflow", "Grafana", "PostgreSQL", "PostGIS"],
    url: "https://github.com/MathieuAudibert/gideon",
  },
  {
    name: "Local ML Flow",
    tagline: "MLOps & Cloud Computing",
    description:
      "MLOps ecosystem automating the machine learning lifecycle through local cloud computing. Orchestrated data retrieval, model training and evaluation through serverless functions in a fully containerized environment.",
    tech: ["Python", "FastAPI", "LocalStack", "Docker", "CI/CD"],
    url: "https://github.com/mathieu-personal-projects/local-ml-flow",
  },
  {
    name: "Eco-pulse",
    tagline: "Carbon Emissions Pipeline",
    description:
      "ELT pipeline ingesting global carbon emissions: extraction into B2 buckets, cleaning/transformation and loading into Google Cloud BigQuery. Centralized secrets management with Aiven Valkey.",
    tech: ["Python", "Airflow", "GCP BigQuery", "CI/CD"],
    url: "https://github.com/mathieu-personal-projects/eco-pulse",
  },
  {
    name: "Cooloc",
    tagline: "Shared Housing Platform",
    description:
      "Shared-housing management web platform: full design and implementation. RESTful API on a custom Python HTTP server, React frontend, OWASP-compliant security with RBAC, ANSSI-grade passwords, and GDPR compliance.",
    tech: ["Python", "React", "PostgreSQL", "Docker", "SonarQube"],
    url: "https://github.com/mathieu-personal-projects/Cooloc",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="02" title="Projects" subtitle="Personal and academic work" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Row 1: featured wide + narrow */}
          <ProjectCard project={projects[0]!} index={0} className="md:col-span-7" featured />
          <ProjectCard project={projects[1]!} index={1} className="md:col-span-5" />

          {/* Row 2: three equal */}
          <ProjectCard project={projects[2]!} index={2} className="md:col-span-4" />
          <ProjectCard project={projects[3]!} index={3} className="md:col-span-4" />
          <ProjectCard project={projects[4]!} index={4} className="md:col-span-4" />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  className = "",
  featured = false,
}: {
  project: (typeof projects)[number];
  index: number;
  className?: string;
  featured?: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");
  const Wrapper = project.url ? "a" : "div";
  const linkProps = project.url
    ? { href: project.url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`group relative rounded-xl border bg-background p-6 ${featured ? "p-8" : ""} hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col overflow-hidden ${project.url ? "cursor-pointer" : ""} ${className}`}
    >
      <span className="absolute -right-1 -top-3 text-[5rem] font-black leading-none text-muted-foreground/[0.06] select-none pointer-events-none">
        {num}
      </span>

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono text-primary tracking-wider uppercase">{project.tagline}</p>
          {project.url && (
            <ExternalLink className="size-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
          )}
        </div>
        <h3 className={`font-bold mt-1.5 ${featured ? "text-xl" : "text-base"}`}>{project.name}</h3>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/50">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="font-mono text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
