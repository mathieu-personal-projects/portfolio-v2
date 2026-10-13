import { Separator } from "@/components/ui/separator";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Mathieu Audibert</h1>
        <p className="text-lg text-muted-foreground mt-2 font-medium">Data Engineer</p>
        <Separator className="my-6 max-w-24" />
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          Data Engineer apprentice at Crédit Agricole Assurances, pursuing a MSc in Data Engineering &amp; AI at ESILV.
          Building data pipelines, cloud infrastructure, and full-stack applications.
        </p>
        <p className="text-sm text-muted-foreground mt-3">Garches, France</p>
      </div>
    </section>
  );
}
