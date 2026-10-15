import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import esilvLogo from "../assets/logos/esilv-favicon.png";
import efreiLogo from "../assets/logos/assas-favicon.png";
import lyceeLogo from "../assets/logos/lycee-alexandre-dumas.png";

const education = [
  {
    school: "ESILV",
    degree: "MSc Data Engineering & AI",
    period: "Sep 2025 – Aug 2027",
    location: "Nanterre",
    logo: esilvLogo,
    coursework:
      "Relevant coursework : Advanced OOP (Java, Spring Boot), ETL & Pipeline Orchestration (Kafka, Airflow), DevOps (Ansible, Terraform, AWS, K8s, Docker), Databases (Oracle), Machine Learning (Scikit-learn, TensorFlow).",
    current: true,
  },
  {
    school: "Efrei Panthéon-Assas",
    degree: "BSc Développement & Data",
    period: "Sep 2022 – Aug 2025",
    location: "Villejuif",
    logo: efreiLogo,
    coursework:
      "Relevant coursework : OOP (Java, Spring Boot), Web Development (JavaScript, PHP, APIs), Cybersecurity (OWASP, CVEs, UML), Databases (PostgreSQL, MySQL, MongoDB), Linux Systems & Kernel.",
    current: false,
  },
  {
    school: "Lycée Alexandre Dumas",
    degree: "Baccalauréat NSI, Physics-Chemistry & Complementary Maths",
    period: "Sep 2019 – May 2022",
    location: "St-Cloud",
    logo: lyceeLogo,
    coursework: "Relevant coursework : Graph Theory, Data Structures, Networking, Algorithms, Thermodynamics, Waves & Signals.",
    current: false,
  },
];

const certifications = [
  { name: "AWS Cloud Quest Practitioner", date: "Nov 2025" },
  { name: "Concepteur Développeur d'Applications", date: "Apr 2025" },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="03" title="Education" subtitle="Academic background" />

        <div className="relative">
          {education.map((edu, i) => (
            <div key={edu.school} className="relative flex gap-6 sm:gap-10 pb-14 last:pb-0">
              {/* Timeline track */}
              <div className="flex flex-col items-center shrink-0 pt-1">
                {edu.logo ? (
                  <div className="w-10 h-10 rounded-full ring-4 ring-background relative z-10 overflow-hidden shrink-0">
                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div
                    className={`w-3.5 h-3.5 rounded-full ring-4 ring-background relative z-10 ${
                      edu.current ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                )}
                {i < education.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {edu.degree} · {edu.location}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-2xl">
                  {edu.coursework}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-5">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="inline-flex items-center gap-3 rounded-lg border px-4 py-2.5 text-sm hover:border-primary/40 transition-colors"
              >
                <span className="font-medium">{cert.name}</span>
                <span className="text-muted-foreground font-mono text-xs">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
