import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { useTranslation } from "@/lib/i18n";
import creditAgricoleLogo from "../assets/logos/credit-agricole.png";
import cpamLogo from "../assets/logos/cpam-icon.png";
import societeGeneraleLogo from "../assets/logos/societe-generale-icon.png";
import aphpLogo from "../assets/logos/aphp.jpg";

const logos = [creditAgricoleLogo, cpamLogo, societeGeneraleLogo, aphpLogo];

const techStacks = [
  ["Java", "Spring Boot", "Kafka", "Spark", "Docker", "Kubernetes", "ArgoCD", "Jenkins"],
  ["PHP", "Symfony", "PostgreSQL", "Docker", "Git"],
  ["Python", "AWS", "DevOps"],
  ["Emergencies", "Patience", "Communication"],
];

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="01" title={t.experience.title} subtitle={t.experience.subtitle} />
        <div className="space-y-6">
          {t.experience.items.map((exp, i) => (
            <Card
              key={i}
              className="group border-l-2 border-l-transparent hover:border-l-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="flex items-center gap-3">
                    <img
                      src={logos[i]}
                      alt={exp.company ?? ""}
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
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {(techStacks[i] ?? []).map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
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
