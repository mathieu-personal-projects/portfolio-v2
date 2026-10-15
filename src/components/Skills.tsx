import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";

const skillCategories = [
  {
    label: "Languages",
    items: ["Java", "Python", "Rust", "PHP", "SQL", "Bash", "Kotlin"],
  },
  {
    label: "Technologies",
    items: [
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
  },
  {
    label: "Frameworks",
    items: ["Spring Boot", "FastAPI", "Jupyter", "Polars", "Symfony"],
  },
  {
    label: "Concepts",
    items: [
      "Linux Kernel",
      "Cryptography",
      "AI & Neural Networks",
      "APIs",
      "DevOps",
      "Clean Code",
      "Cloud Computing",
      "OOP",
    ],
  },
  {
    label: "AI Tools",
    items: ["Copilot", "OpenCode", "Amazon Nova", "Kimi K3", "Mistral 7b"],
  },
  {
    label: "Spoken Languages",
    items: ["French (native)", "English (fluent)", "Spanish (partial)", "Portuguese (notions)"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="05" title="Skills" subtitle="Technologies and tools" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.label} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
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
