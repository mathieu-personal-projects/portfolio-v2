import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Prodigieux Corp.",
    description:
      "Self-hosted cloud on a repurposed Dell Latitude and a Raspberry Pi. Includes Sentra, an API to remotely administrate the server through SSH tunnels, and a WireGuard VPN to bounce to the server's local network.",
    tech: ["Python", "Ubuntu Server", "WireGuard", "SSH"],
    link: null,
  },
  {
    name: "Gideon",
    description:
      "Military topology interactive map built on large GeoJSON datasets. ETL + ELT streaming pipeline ingesting raw data into PostGIS, building SQL analytical tables, publishing replayed events to Kafka and serving a Grafana dashboard.",
    tech: ["Python", "Kafka", "Airflow", "Grafana", "PostgreSQL", "PostGIS"],
    link: null,
  },
  {
    name: "Local Machine Learning Flow",
    description:
      "MLOps ecosystem automating the machine learning lifecycle through local cloud computing. Orchestrated data retrieval, model training and evaluation through serverless functions in a fully containerized environment.",
    tech: ["Python", "FastAPI", "LocalStack", "Docker", "CI/CD"],
    link: null,
  },
  {
    name: "Eco-pulse",
    description:
      "ELT pipeline ingesting global carbon emissions: extraction into B2 buckets, cleaning/transformation and loading into Google Cloud BigQuery. Centralized secrets management with Aiven Valkey.",
    tech: ["Python", "Airflow", "GCP BigQuery", "CI/CD"],
    link: null,
  },
  {
    name: "Cooloc",
    description:
      "Shared-housing management web platform: full design and implementation. RESTful API on a custom Python HTTP server, React frontend, OWASP-compliant security with RBAC, ANSSI-grade passwords, and GDPR compliance.",
    tech: ["Python", "React", "PostgreSQL", "Docker", "SonarQube"],
    link: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="text-sm text-muted-foreground mt-1">Personal and academic work</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="shadow-none flex flex-col">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  {project.name}
                  {project.link && <ArrowUpRight className="size-3.5 text-muted-foreground" />}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <CardDescription className="text-sm leading-relaxed flex-1">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
