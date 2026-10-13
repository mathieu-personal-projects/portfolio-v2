import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight">Research & Achievements</h2>
        <p className="text-sm text-muted-foreground mt-1">Publications, challenges, and competitions</p>

        <div className="mt-10 space-y-6">
          <Card className="shadow-none">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Paper</Badge>
              </div>
              <CardTitle className="text-base mt-2">Intelligent Monitoring of Micro-Services Prototype</CardTitle>
              <CardDescription>Anomaly Detection · Dynamic Weight Selection · Log Analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Demo paper addressing: "To what extent can a dynamic model-selection mechanism, guided by a Region of
                Competence and Dynamic Weight Selection, improve anomaly detection in heterogeneous microservice systems
                compared with single static detectors?"
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-none">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Hackathon</Badge>
                  <span className="text-xs text-muted-foreground">Sep 2026</span>
                </div>
                <CardTitle className="text-base mt-2">Crédit Agricole Data x AI Hackathon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Placed 2nd among 160+ participants. Built agents that modified functional documentation based on
                  developers' Jira ticket states, created dashboards for managers, and proposed documentation
                  improvements.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Puzzle</Badge>
                  <span className="text-xs text-muted-foreground">Aug 2026</span>
                </div>
                <CardTitle className="text-base mt-2">Jane Street Puzzle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Solved "Andy's Afternoon Amble", a probability puzzle, using Java 21.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
