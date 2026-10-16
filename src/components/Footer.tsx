import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, GitLabIcon } from "./icons";
import { useTranslation } from "@/lib/i18n";
import { FaStackOverflow } from "react-icons/fa";

const links = [
  {
    label: "Email",
    href: "mailto:mathieu.audibert27@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/MathieuAudibert",
    icon: GitHubIcon,
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/MathieuAudibert",
    icon: GitLabIcon,
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/29716694/mathieu",
    icon: FaStackOverflow,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mathieu-audibert",
    icon: LinkedInIcon,
  },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="text-sm font-mono opacity-50 mb-3">{t.footer.contact}</p>
            <h3 className="text-3xl font-bold tracking-tight">{t.footer.title}</h3>
            <p className="opacity-60 mt-3 max-w-md text-sm leading-relaxed">
              {t.footer.subtitle}
            </p>
          </div>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <a href="mailto:mathieu.audibert27@gmail.com">
              <Mail className="size-4" />
              {t.footer.getInTouch}
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 mt-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              <link.icon className="size-4" />
              {link.label}
            </a>
          ))}
        </div>

        <div className="h-px bg-background/10 mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm opacity-40">Mathieu Audibert — {t.hero.title}</p>
          <p className="text-sm opacity-40 font-mono">{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
