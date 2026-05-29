import { CyberBg } from "@/components/brand/cyber-bg";
import {
  Bug,
  Cpu,
  Globe,
  Network,
  Smartphone,
  Swords,
  UserCog,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
};

const SERVICES: Service[] = [
  {
    icon: Globe,
    title: "Pentest Web",
    description:
      "Avaliação ofensiva completa em aplicações web seguindo OWASP, com exploração controlada e relatório executivo + técnico.",
    tag: "OWASP",
  },
  {
    icon: Smartphone,
    title: "Pentest Mobile",
    description:
      "Análise de segurança em apps iOS e Android: binário, runtime, comunicação, armazenamento e backend exposto.",
    tag: "iOS / Android",
  },
  {
    icon: Cpu,
    title: "Pentest IoT",
    description:
      "Hardware hacking, firmware analysis e exploração de protocolos para dispositivos conectados e ambientes OT.",
    tag: "Firmware",
  },
  {
    icon: Network,
    title: "Pentest de Redes",
    description:
      "Reconhecimento, movimentação lateral e escalonamento de privilégios em redes internas, externas e Wi-Fi.",
    tag: "Internal / External",
  },
  {
    icon: UserCog,
    title: "Engenharia Social",
    description:
      "Campanhas de phishing, vishing, smishing e cenários presenciais para medir resiliência humana e processual.",
    tag: "Phishing",
  },
  {
    icon: Swords,
    title: "Simulação de Ataques",
    description:
      "Red Team realístico com TTPs de adversários reais (MITRE ATT&CK), Purple Team e exercícios contínuos.",
    tag: "MITRE ATT&CK",
  },
  {
    icon: Bug,
    title: "Exploração Controlada",
    description:
      "Desenvolvimento e validação de exploits sob escopo, com prova de impacto e plano de remediação priorizado.",
    tag: "PoC",
  },
];

export function RedTeam() {
  return (
    <section id="red-team" className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Custom darker background for red team */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial-fade opacity-40" />
        <div className="absolute -top-32 left-1/4 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-cyvex-violet/14 blur-3xl animate-aurora" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyvex-blue/12 blur-3xl animate-aurora [animation-delay:-6s]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyvex-violet/30 bg-cyvex-violet/10 px-3 py-1 text-xs font-medium text-cyvex-violet">
              <span className="size-1.5 rounded-full bg-cyvex-violet" /> Red Team
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Pensamos como o <span className="text-gradient-cyber">adversário</span>. Antes que ele apareça.
            </h2>
          </div>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Operações ofensivas conduzidas por especialistas certificados, em
            escopo controlado e com foco em impacto real. Nosso objetivo é
            transformar achados técnicos em decisões executivas — e elevar a
            postura de segurança a cada engajamento.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Services list */}
          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICES.slice(0, 6).map(({ icon: Icon, title, description, tag }, idx) => (
              <article
                key={title}
                className="card-cyber group/r relative flex h-full flex-col gap-3 p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-lg border border-cyvex-violet/30 bg-cyvex-violet/10 text-cyvex-violet transition-transform group-hover/r:scale-110">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                  <span>op_{String(idx + 1).padStart(3, "0")}</span>
                  <span>•</span>
                  <span className="text-cyvex-violet/80">authorized</span>
                </div>
              </article>
            ))}
          </div>

          {/* Right column — Terminal + last card */}
          <div className="grid gap-6">
            {/* Terminal */}
            <div className="glass-strong relative overflow-hidden rounded-2xl border border-border/70">
              <div className="flex items-center justify-between border-b border-border/60 bg-background/30 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-500/70" />
                  <span className="size-2.5 rounded-full bg-yellow-500/70" />
                  <span className="size-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  redteam@cyvex — engagement
                </span>
                <span className="text-[10px] text-cyvex-violet">● scope: authorized</span>
              </div>
              <div className="space-y-1 p-5 font-mono text-[12px] leading-relaxed">
                <Line prompt="redteam@cyvex">
                  ./engage --target=client.corp --mode=stealth
                </Line>
                <p className="text-muted-foreground">[*] Phase 1 · Reconnaissance</p>
                <p className="text-emerald-400/90">  ✓ 47 subdomínios mapeados</p>
                <p className="text-emerald-400/90">  ✓ 12 portas expostas</p>
                <p className="text-muted-foreground">[*] Phase 2 · Initial Access</p>
                <p className="text-yellow-300/90">  ! credencial vazada (dataleak: 2024-Q4)</p>
                <p className="text-muted-foreground">[*] Phase 3 · Lateral Movement</p>
                <p className="text-cyvex-violet/90">  → privilege escalation: SYSTEM</p>
                <p className="text-cyvex-violet/90">  → 3 servidores comprometidos (PoC)</p>
                <p className="text-muted-foreground">[*] Phase 4 · Report &amp; Remediation</p>
                <p className="text-emerald-400/90">  ✓ relatório executivo gerado</p>
                <p className="mt-3 flex items-center gap-2 text-foreground/90">
                  <span className="text-cyvex-violet">redteam@cyvex:~$</span>
                  <span className="inline-block h-4 w-2 animate-blink bg-cyvex-violet" />
                </p>
              </div>
            </div>

            {/* Last service card with emphasis */}
            <article className="card-cyber relative overflow-hidden p-6">
              <div className="flex items-start gap-4">
                <span className="grid size-11 place-items-center rounded-xl border border-cyvex-violet/30 bg-cyvex-violet/10 text-cyvex-violet">
                  <Bug className="size-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold tracking-tight">
                      Exploração Controlada de Vulnerabilidades
                    </h3>
                    <span className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      PoC
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Desenvolvemos e validamos provas de conceito reais sob escopo
                    formal, traduzindo risco técnico em impacto de negócio claro
                    para a tomada de decisão executiva.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    {[
                      { label: "Findings", value: "+1.2k" },
                      { label: "Críticos", value: "180+" },
                      { label: "Aproveitamento", value: "94%" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-lg border border-border/60 bg-background/30 p-2"
                      >
                        <div className="font-mono text-base font-semibold text-foreground">
                          {s.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({ prompt, children }: { prompt: string; children: React.ReactNode }) {
  return (
    <p>
      <span className="text-cyvex-violet">{prompt}</span>
      <span className="text-muted-foreground">:~$</span>{" "}
      <span className="text-foreground/90">{children}</span>
    </p>
  );
}
