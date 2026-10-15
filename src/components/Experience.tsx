import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import creditAgricoleLogo from "../assets/logos/credit-agricole.png";
import cpamLogo from "../assets/logos/cpam-icon.png";
import societeGeneraleLogo from "../assets/logos/societe-generale-icon.png";
import aphpLogo from "../assets/logos/aphp.jpg";

const experiences = [
  {
    company: "Crédit Agricole Assurances",
    role: "Data Engineer · Apprentice",
    period: "Sep 2025 – Present",
    location: "Paris",
    logo: creditAgricoleLogo,
    bullets: [
      "Featured new management rules on Java Spring Boot Kafka Streams & ksqlDB Big Data pipelines.",
      "Upgraded an API handling insurance claims from Spring Boot 3 to Spring Boot 4 (Spring Security, K8s, SVC, Composites).",
      "Refactored 8+ projects from legacy SQL to clean Spark sessions, with Jenkins pipelines and code coverage up to ≥ 75%.",
      "Updated technical documentation and coached colleagues on Git workflows and code quality improvements.",
      "Deployed and assisted deployments (SAFe context) on all environments using Artifactory, Docker, K8s and ArgoCD.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Spark", "Docker", "Kubernetes", "ArgoCD", "Jenkins"],
  },
  {
    company: "Caisse Primaire d'Assurance Maladie (CPAM)",
    role: "Application Designer & Developer · Apprentice",
    period: "Sep 2024 – Jul 2025",
    location: "Créteil",
    logo: cpamLogo,
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
    logo: societeGeneraleLogo,
    bullets: [
      "Discovered hybrid-cloud network and architecture, DevOps practices and agility.",
      "Built a Python script to interrogate and report AWS Public Cloud transit gateways.",
    ],
    tech: ["Python", "AWS", "DevOps"],
  },
  {
    company: "Assistance Publique des Hopitaux de Paris (APHP)",
    role: "Administrative Assistant · Trainee",
    period: "Jun 2024 – Jul 2024",
    location: "Boulogne Billancourt",
    logo: aphpLogo,
    bullets: [
      "Regular and emergency patient admissions",
      "Helped patients with their records",
    ],
    tech: ["Emergencies", "Patience", "Communication"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="01" title="Experience" subtitle="Professional career" />
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card
              key={exp.company}
              className="group border-l-2 border-l-transparent hover:border-l-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-8 w-8 object-contain shrink-0"
                    />
                    <CardTitle className="text-base">{exp.company}</CardTitle>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                </div>
                <CardDescription>
                  {exp.role} · {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="font-mono text-xs">
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
