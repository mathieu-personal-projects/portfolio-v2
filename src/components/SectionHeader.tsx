export function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm font-mono font-semibold text-primary">{number}</span>
        <div className="h-px w-8 bg-primary/40" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
    </div>
  );
}
