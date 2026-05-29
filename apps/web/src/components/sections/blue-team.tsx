import { CyberBg } from "@/components/brand/cyber-bg";
import {
  Cloud,
  Database,
  Flame,
  HardDriveDownload,
  Laptop,
  Mail,
  ServerCog,
  ShieldHalf,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Laptop,
    title: "Endpoint Protection",
    description:
      "Proteção avançada para estações, servidores e dispositivos remotos com EDR/XDR e prevenção contra ameaças em tempo real.",
  },
  {
    icon: ShieldHalf,
    title: "Website Security",
    description:
      "Hardening, WAF, mitigação DDoS e monitoramento contínuo para manter aplicações web disponíveis e seguras.",
  },
  {
    icon: HardDriveDownload,
    title: "Data Recovery Solutions",
    description:
      "Resposta rápida a incidentes com recuperação forense de dados, backups imutáveis e planos de continuidade.",
  },
  {
    icon: ServerCog,
    title: "Endpoint Control",
    description:
      "Gestão centralizada de políticas, controle de aplicações, USB, atualizações e compliance em todos os dispositivos.",
  },
  {
    icon: Database,
    title: "Data Center Watch",
    description:
      "Monitoramento 24/7 de infraestrutura crítica com correlação de eventos, telemetria e alertas inteligentes.",
  },
  {
    icon: Flame,
    title: "Next Generation Firewall",
    description:
      "NGFW com inspeção profunda, prevenção de intrusão, segmentação Zero Trust e visibilidade de toda a rede.",
  },
  {
    icon: Mail,
    title: "Advanced Mail Security",
    description:
      "Defesa multicamadas contra phishing, BEC, ransomware e ameaças zero-day em e-mail corporativo.",
  },
  {
    icon: Cloud,
    title: "Cloud Suite",
    description:
      "CASB, CSPM e proteção de cargas em nuvem (AWS, Azure, GCP) com governança e detecção de ameaças nativa.",
  },
];

export function BlueTeam() {
  return (
    <section id="blue-team" className="relative isolate overflow-hidden py-24 sm:py-32">
      <CyberBg variant="grid" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyvex-cyan/25 bg-cyvex-cyan/8 px-3 py-1 text-xs font-medium text-cyvex-cyan-strong">
              <span className="size-1.5 rounded-full bg-cyvex-cyan" /> Blue Team
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Defesa <span className="text-gradient-cyber">corporativa</span> de elite, em camadas.
            </h2>
          </div>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Operações de defesa contínuas em SOC/NOC dedicado, com tecnologia
            líder de mercado e times especializados em detecção, contenção e
            recuperação rápida de incidentes — protegendo cada camada da sua
            operação.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }, idx) => (
            <article
              key={title}
              className="card-cyber group/s relative flex flex-col gap-4 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-cyvex-cyan/20 bg-cyvex-cyan/10 text-cyvex-cyan transition-all group-hover/s:scale-110 group-hover/s:bg-cyvex-cyan/15">
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-cyvex-cyan/30 to-transparent opacity-0 transition-opacity group-hover/s:opacity-100" />
            </article>
          ))}
        </div>

        {/* SOC live strip */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <SocMetric label="Eventos correlacionados" value="2.4M+" trend="+12% últimos 7d" />
          <SocMetric label="Incidentes contidos" value="1.328" trend="MTTR < 15 min" highlight />
          <SocMetric label="Cobertura de ativos" value="100%" trend="visibilidade total" />
        </div>
      </div>
    </section>
  );
}

function SocMetric({
  label,
  value,
  trend,
  highlight = false,
}: {
  label: string;
  value: string;
  trend: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "glass relative overflow-hidden rounded-2xl border border-border/70 p-6" +
        (highlight ? " ring-cyber" : "")
      }
    >
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>{label}</span>
        <span className="inline-flex items-center gap-1 text-cyvex-cyan">
          <span className="size-1.5 rounded-full bg-cyvex-cyan animate-pulse" />
          live
        </span>
      </div>
      <div className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        <span className={highlight ? "text-gradient-cyber" : "text-foreground"}>{value}</span>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{trend}</div>
      <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-cyvex-cyan/10 blur-2xl" />
    </div>
  );
}
