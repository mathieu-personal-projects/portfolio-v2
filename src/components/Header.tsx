import { Mail, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon, GitLabIcon, LinkedInIcon } from "./icons";
import { useTranslation } from "@/lib/i18n";
import logoSrc from "../assets/ma-logo.png";

export function Header() {
  const { lang, setLang, t } = useTranslation();

  const navLinks = [
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#education", label: t.nav.education },
    { href: "#skills", label: t.nav.skills },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-14 px-6">
        <a href="#" className="flex items-center">
          <img src={logoSrc} alt="MA" className="h-8 w-auto" />
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="gap-1.5 text-xs font-mono font-semibold"
            aria-label={lang === "en" ? "Switch to French" : "Switch to English"}
          >
            <Languages className="size-3.5" />
            {lang === "en" ? "EN" : "FR"}
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <a href="mailto:mathieu.audibert27@gmail.com" aria-label="Email">
              <Mail className="size-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <a
              href="https://linkedin.com/in/mathieu-audibert"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <a
              href="https://github.com/MathieuAudibert"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon className="size-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <a
              href="https://gitlab.com/MathieuAudibert"
              target="_blank"
              rel="noopener noreferrer" 
              aria-label="Gitlab"
            >
              <GitLabIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
