import { Badge } from "@/components/ui/badge";

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
    items: ["Linux Kernel", "Cryptography", "AI & Neural Networks", "APIs", "DevOps", "Clean Code", "Cloud Computing", "OOP"],
  },
  {
    label: "AI Tools",
    items: ["Copilot", "OpenCode", "Amazon Nova", "Kimi K3", "Mistral 7b"],
  },
  {
    label: "Languages (spoken)",
    items: ["French (native)", "English (fluent)", "Spanish (partial)", "Portuguese (notions)"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        <p className="text-sm text-muted-foreground mt-1">Technologies and tools</p>
        <div className="mt-10 space-y-8">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} variant="outline" className="text-sm py-1 px-3">
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
