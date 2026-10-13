import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Separator className="mb-12" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Mathieu Audibert</p>
            <p className="text-sm text-muted-foreground mt-1">Data Engineer</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:mathieu.audibert27@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/mathieu-audibert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MathieuAudibert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
