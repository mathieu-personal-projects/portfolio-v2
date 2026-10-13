import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const education = [
  {
    school: "ESILV",
    degree: "MSc Data Engineering & AI",
    period: "Sep 2025 – Aug 2027",
    location: "Nanterre",
    coursework:
      "Advanced OOP (Java, Spring Boot), ETL & Pipeline Orchestration (Kafka, Airflow), DevOps (Ansible, Terraform, AWS, K8s, Docker), Databases (Oracle), Machine Learning (Scikit-learn, TensorFlow).",
  },
  {
    school: "Efrei Panthéon-Assas",
    degree: "BSc Développement & Data",
    period: "Sep 2022 – Aug 2025",
    location: "Villejuif",
    coursework:
      "OOP (Java, Spring Boot), Web Development (JavaScript, PHP, APIs), Cybersecurity (OWASP, CVEs, UML), Databases (PostgreSQL, MySQL, MongoDB), Linux Systems & Kernel.",
  },
  {
    school: "Lycée Alexandre Dumas",
    degree: "Baccalauréat NSI, Physics-Chemistry & Complementary Maths",
    period: "Sep 2019 – May 2022",
    location: "St-Cloud",
    coursework: "Graph Theory, Data Structures, Networking, Algorithms, Thermodynamics, Waves & Signals.",
  },
];

const certifications = [
  { name: "AWS Cloud Quest Practitioner", date: "Nov 2025" },
  { name: "Concepteur Développeur d'Applications", date: "Apr 2025" },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        <p className="text-sm text-muted-foreground mt-1">Academic background</p>
        <div className="mt-10 space-y-6">
          {education.map((edu) => (
            <Card key={edu.school} className="shadow-none">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <CardTitle className="text-base">{edu.school}</CardTitle>
                  <span className="text-sm text-muted-foreground font-normal">{edu.period}</span>
                </div>
                <CardDescription>
                  {edu.degree} · {edu.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{edu.coursework}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold tracking-tight">Certifications</h3>
          <div className="mt-4 space-y-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center justify-between text-sm">
                <span>{cert.name}</span>
                <span className="text-muted-foreground">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
