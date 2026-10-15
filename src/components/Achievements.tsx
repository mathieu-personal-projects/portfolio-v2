import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="04"
          title="Research & Achievements"
          subtitle="Publications, challenges, and competitions"
        />

        <Card className="group hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
          <CardHeader>
            <Badge variant="outline" className="w-fit text-primary border-primary/30">
              Paper
            </Badge>
            <CardTitle className="text-base mt-2">
              Intelligent Monitoring of Micro-Services Prototype
            </CardTitle>
            <CardDescription>Anomaly Detection · Dynamic Weight Selection · Log Analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Demo paper addressing: &ldquo;To what extent can a dynamic model-selection mechanism,
              guided by a Region of Competence and Dynamic Weight Selection, improve anomaly detection
              in heterogeneous microservice systems compared with single static detectors?&rdquo;
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="group hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary border-primary/30">
                  Hackathon
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">Sep 2026</span>
              </div>
              <CardTitle className="text-base mt-2">
                Crédit Agricole Data x AI Hackathon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Placed <strong className="text-foreground">2nd among 160+ participants</strong>. Built
                agents that modified functional documentation based on developers&apos; Jira ticket
                states, created dashboards for managers, and proposed documentation improvements.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary border-primary/30">
                  Puzzle
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">Aug 2026</span>
              </div>
              <CardTitle className="text-base mt-2">Jane Street Puzzle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Solved &ldquo;Andy&apos;s Afternoon Amble&rdquo;, a probability puzzle, using Java 21.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
