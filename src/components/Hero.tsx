import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, GitLabIcon, StackOverflowIcon } from "./icons";
import { useTranslation } from "@/lib/i18n";
import { FaStackOverflow } from "react-icons/fa";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-14 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.75 0 0) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 50% 60% at 80% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 60% at 80% 40%, black, transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto w-full py-16 relative">
        <div className="inline-flex items-center gap-2.5 text-sm text-primary font-mono mb-10 border border-primary/20 rounded-full px-4 py-1.5 bg-primary/5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          {t.hero.status}
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
          Mathieu <span className="text-primary">Audibert</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mt-5 font-medium">
          {t.hero.title}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mt-14 items-start">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4 max-w-xl">
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.hero.bio1}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.hero.bio2}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" className="text-white" asChild>
                <a href="mailto:mathieu.audibert27@gmail.com">
                  <Mail className="size-4 text-white" />
                  {t.hero.getInTouch}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="pointer-events-none opacity-50" asChild>
                <a href="path/to/cv" target="_blank" rel="noopener noreferrer">
                  <Download className="size-4" />
                  {t.hero.resume}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/MathieuAudibert" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://gitlab.com/MathieuAudibert" target="_blank" rel="noopener noreferrer">
                  <GitLabIcon className="size-4" />
                  GitLab
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://stackoverflow.com/users/29716694/mathieu" target="_blank" rel="noopener noreferrer">
                  <FaStackOverflow className="size-4" />
                  Stack Overflow
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/mathieu-audibert" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {t.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border bg-background/80 p-5 hover:border-primary/40 transition-colors"
                >
                  <p className="text-3xl font-black tracking-tight text-primary">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-1.5 uppercase tracking-widest font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
