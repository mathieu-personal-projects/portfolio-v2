import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { useTranslation } from "@/lib/i18n";

const skillItems = [
  ["Java", "Python", "Rust", "PHP", "SQL", "Bash", "Kotlin"],
  [
    "AWS",
    "GCP",
    "Kafka",
    "Oracle",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub CI",
    "GitLab CI",
    "ArgoCD",
    "Artifactory",
  ],
  ["Spring Boot", "FastAPI", "Jupyter", "Polars", "Symfony"],
  [
    "Linux Kernel",
    "Cryptography",
    "AI & Neural Networks",
    "APIs",
    "DevOps",
    "Clean Code",
    "Cloud Computing",
    "OOP",
  ],
  ["Copilot", "OpenCode", "Amazon Nova", "Kimi K3", "Mistral 7b"],
  ["French (native)", "English (fluent)", "Spanish (partial)", "Portuguese (notions)"],
  ["Football", "Volleyball", "Motorsports", "Paintings", "Cinema", "Music"],
  ["Information by Informatics", "Medical assistance w/ robotics"],
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="05" title={t.skills.title} subtitle={t.skills.subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.skills.categories.map((category, i) => (
            <div key={category.label} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(skillItems[i] ?? []).map((item) => (
                  <Badge key={item} variant="secondary" className="font-mono text-xs py-1 px-2.5">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
