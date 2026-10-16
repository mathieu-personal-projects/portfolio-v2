import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Achievements() {
  const { t } = useTranslation();

  return (
    <section id="achievements" className="py-24 px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="04"
          title={t.achievements.title}
          subtitle={t.achievements.subtitle}
        />

        {/* Thesis / Paper Card with GitLab Link */}
        <a
          href="https://gitlab.com/proteus2583324"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <Card className="relative group-hover:border-primary/50 group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            <CardHeader className="relative pr-10">
              <Badge variant="outline" className="w-fit text-primary border-primary/30">
                {t.achievements.paper}
              </Badge>
              <ExternalLink className="absolute top-6 right-6 w-4 h-4 text-muted-foreground/70 group-hover:text-primary transition-colors" />
              <CardTitle className="text-base mt-2">
                Intelligent Monitoring of Micro-Services Prototype
              </CardTitle>
              <CardDescription>Anomaly Detection · Dynamic Weight Selection · Log Analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.achievements.paperDesc}
              </p>
            </CardContent>
          </Card>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Hackathon Card */}
          <Card className="group hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary border-primary/30">
                  {t.achievements.hackathon}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">Sep 2026</span>
              </div>
              <CardTitle className="text-base mt-2">
                Crédit Agricole Data x AI Hackathon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.achievements.hackathonDesc}
              </p>
            </CardContent>
          </Card>

          {/* Jane Street Puzzle Card with GitHub Link */}
          <a
            href="https://github.com/mathieu-personal-projects/jane-street-puzzles"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="relative h-full group-hover:border-primary/50 group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between">
              <CardHeader className="relative pr-10">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-primary border-primary/30">
                    {t.achievements.puzzle}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">Aug 2026</span>
                </div>
                <ExternalLink className="absolute top-6 right-6 w-4 h-4 text-muted-foreground/70 group-hover:text-primary transition-colors" />
                <CardTitle className="text-base mt-2">Jane Street Puzzle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.achievements.puzzleDesc}
                </p>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}
