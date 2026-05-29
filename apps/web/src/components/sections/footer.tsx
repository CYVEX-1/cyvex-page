import { Logo } from "@/components/brand/logo";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const LINK_GROUPS = [
  {
    title: "Soluções",
    links: [
      { label: "Blue Team", href: "#blue-team" },
      { label: "Red Team", href: "#red-team" },
      { label: "Investigação Social", href: "#investigacao" },
      { label: "Engenharia Social", href: "#red-team" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre a Cyvex", href: "#sobre" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Contato", href: "#contato" },
      { label: "Carreiras", href: "#contato" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de privacidade", href: "#" },
      { label: "Termos de uso", href: "#" },
      { label: "LGPD", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
] as const;

const SOCIAL = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative isolate border-t border-border/60 bg-background/60 pt-16 pb-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyvex-cyan/40 to-transparent" />
        <div className="absolute -bottom-32 left-1/2 h-[260px] w-[820px] -translate-x-1/2 rounded-full bg-cyvex-cyan/8 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size={32} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A Cyvex é referência em cibersegurança ofensiva e defensiva.
              Protegemos empresas e pessoas contra ameaças digitais avançadas com
              metodologia moderna e resposta rápida.
            </p>

            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-cyvex-cyan" />
                <a
                  href="mailto:contato@cyvex.com.br"
                  className="transition-colors hover:text-foreground"
                >
                  contato@cyvex.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-cyvex-cyan" />
                <a
                  href="tel:+5511900000000"
                  className="transition-colors hover:text-foreground"
                >
                  +55 (11) 9 0000-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-cyvex-cyan" />
                <span>São Paulo, Brasil — atendimento global</span>
              </li>
            </ul>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold tracking-tight text-foreground">
                {group.title}
              </h4>
              <ul className="mt-4 grid gap-2.5">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href as never}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cyvex Cybersecurity. Todos os direitos
            reservados. CNPJ 00.000.000/0001-00.
          </p>

          <div className="flex items-center gap-2">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-9 place-items-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-all hover:border-cyvex-cyan/40 hover:text-cyvex-cyan"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 flex items-center justify-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
            // secure · monitor · respond · protect
          </div>
        </div>
      </div>
    </footer>
  );
}
