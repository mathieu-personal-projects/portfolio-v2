import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { useTranslation } from "@/lib/i18n";
import esilvLogo from "../assets/logos/esilv-favicon.png";
import efreiLogo from "../assets/logos/assas-favicon.png";
import lyceeLogo from "../assets/logos/lycee-alexandre-dumas.png";
import { FaAws } from "react-icons/fa";
import franceTravailLogo from "../assets/logos/mariane.png";

const logos = [esilvLogo, efreiLogo, lyceeLogo];

const certifications = [
  {
    name: "AWS Cloud Quest Practitioner",
    proof: "ID: 6584e3b1-db1e-49a4-adfe-4e0b82eaf6fd",
    logo: FaAws,
    date: "Nov 2025",
  },
  {
    name: "Concepteur Développeur d'Applications",
    proof: "ID: 988224272263",
    logo: franceTravailLogo,
    date: "Apr 2025",
  },
];

export function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="03" title={t.education.title} subtitle={t.education.subtitle} />

        <div className="relative">
          {t.education.items.map((edu, i) => (
            <div key={edu.school} className="relative flex gap-6 sm:gap-10 pb-14 last:pb-0">
              {/* Timeline track */}
              <div className="flex flex-col items-center shrink-0 pt-1">
                {logos[i] ? (
                  <div className="w-10 h-10 rounded-full ring-4 ring-background relative z-10 overflow-hidden shrink-0">
                    <img src={logos[i]} alt={edu.school} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div
                    className={`w-3.5 h-3.5 rounded-full ring-4 ring-background relative z-10 ${i === 0 ? "bg-primary" : "bg-muted-foreground/30"}`}
                  />
                )}
                {i < t.education.items.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
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
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
            {t.education.certifications}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => {
              const LogoComponent = cert.logo;
              const isReactIcon = typeof cert.logo === "function" || (cert.logo as any).$$typeof;

              return (
                <div
                  key={cert.name}
                  className="flex items-start gap-4 rounded-xl border p-4 hover:border-primary/40 transition-colors bg-card"
                >
                  {/* Logo on the left - customized to fill the square completely */}
                  <div className="w-10 h-10 rounded-lg border bg-background flex items-center justify-center shrink-0 overflow-hidden p-0">
                    {isReactIcon ? (
                      <LogoComponent className="w-6 h-6 text-foreground" />
                    ) : (
                      <img src={cert.logo as string} alt={cert.name} className="w-full h-full object-cover" />
                    )}
                  </div>

                  {/* Name and proof underneath */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-sm tracking-tight leading-snug">{cert.name}</h4>
                      <span className="text-xs text-muted-foreground font-mono shrink-0">{cert.date}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      {cert.proof}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
