import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Crédit Agricole Assurances",
    role: "Data Engineer · Apprentice",
    period: "Sep 2025 – Present",
    location: "Paris",
    bullets: [
      "Featured new management rules on Java Spring Boot Kafka Streams & ksqlDB Big Data pipelines.",
      "Upgraded an API handling insurance claims from Spring Boot 3 to Spring Boot 4 (Spring Security, K8s, SVC, Composites).",
      "Refactored 8+ projects from legacy SQL to clean Spark sessions, with Jenkins pipelines and code coverage up to ≥ 75%.",
      "Deployed and assisted deployments (SAFe context) on all environments using Artifactory, Docker, K8s and ArgoCD.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Spark", "Docker", "Kubernetes", "ArgoCD", "Jenkins"],
  },
  {
    company: "Caisse Primaire d'Assurance Maladie",
    role: "Application Designer & Developer · Apprentice",
    period: "Sep 2024 – Jul 2025",
    location: "Créteil",
    bullets: [
      "Rebuilt a local IT asset management tool in PHP, used by secretaries and technicians to streamline administrative processes.",
      "Designed and developed a Symfony web platform supporting the monitoring of 800k beneficiaries of the MisAS health aid campaigns.",
      "Introduced a DevOps culture to bring the department up to modern standards.",
    ],
    tech: ["PHP", "Symfony", "PostgreSQL", "Docker", "Git"],
  },
  {
    company: "Société Générale",
    role: "DevOps Hybrid Cloud · Trainee",
    period: "Apr 2024 – Jun 2024",
    location: "Val-de-Fontenay",
    bullets: [
      "Discovered hybrid-cloud network and architecture, DevOps practices and agility.",
      "Built a Python script to interrogate and report AWS Public Cloud transit gateways.",
    ],
    tech: ["Python", "AWS", "DevOps"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        <p className="text-sm text-muted-foreground mt-1">Professional career</p>
        <div className="mt-10 space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.company} className="shadow-none">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <CardTitle className="text-base">{exp.company}</CardTitle>
                  <span className="text-sm text-muted-foreground font-normal">{exp.period}</span>
                </div>
                <CardDescription>
                  {exp.role} · {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-muted-foreground mt-1 shrink-0">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
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
