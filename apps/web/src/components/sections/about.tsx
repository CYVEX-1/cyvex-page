import { CyberBg } from "@/components/brand/cyber-bg";
import {
  Crosshair,
  Eye,
  Fingerprint,
  Radar,
  ShieldCheck,
  Target,
} from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Antecipar, neutralizar e responder a ameaças cibernéticas com inteligência, precisão e ética, protegendo o que sua organização e sua vida digital têm de mais valioso.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em segurança ofensiva e defensiva no Brasil e na América Latina, elevando o padrão de proteção contra ameaças digitais avançadas.",
  },
  {
    icon: ShieldCheck,
    title: "Valores",
    description:
      "Confidencialidade absoluta, excelência técnica, transparência com clientes, conformidade regulatória e responsabilidade em cada operação executada.",
  },
] as const;

const HIGHLIGHTS = [
  {
    icon: Crosshair,
    title: "Segurança Ofensiva",
    description:
      "Equipes Red Team simulando ataques reais para expor vulnerabilidades antes dos adversários.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Defensiva",
    description:
      "Blue Team monitorando, detectando e respondendo a incidentes 24/7 com SOC dedicado.",
  },
  {
    icon: Radar,
    title: "Inteligência de Ameaças",
    description:
      "Threat Intel contínua, OSINT e correlação de eventos para uma postura sempre atualizada.",
  },
  {
    icon: Fingerprint,
    title: "Proteção Individual",
    description:
      "Atendimento dedicado a pessoas físicas em casos de exposição, fraude e investigação digital.",
  },
] as const;

export function About() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden py-24 sm:py-32">
      <CyberBg variant="dots" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-cyvex-cyan-strong backdrop-blur">
            <span className="size-1.5 rounded-full bg-cyvex-cyan" /> Sobre a Cyvex
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Autoridade em <span className="text-gradient-cyber">cibersegurança</span> para um mundo
            em constante ataque.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Combinamos uma equipe sênior de ofensores e defensores com metodologias
            modernas para entregar proteção real — não apenas relatórios. Atuamos
            lado a lado com clientes corporativos e pessoas físicas em cada etapa
            da jornada de segurança.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="card-cyber group/p relative overflow-hidden p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl border border-cyvex-cyan/20 bg-cyvex-cyan/10 text-cyvex-cyan transition-transform group-hover/p:scale-110">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="pointer-events-none absolute -bottom-12 -right-12 size-40 rounded-full bg-cyvex-cyan/8 blur-2xl opacity-0 transition-opacity group-hover/p:opacity-100" />
            </article>
          ))}
        </div>

        {/* Expertise grid */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group/h relative bg-background/70 p-6 backdrop-blur transition-colors hover:bg-background/90"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-foreground/5 text-cyvex-cyan transition-colors group-hover/h:bg-cyvex-cyan/15">
                <Icon className="size-5" />
              </span>
              <h4 className="mt-4 text-base font-semibold tracking-tight">{title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
