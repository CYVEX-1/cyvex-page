import {
	Award,
	Clock,
	Compass,
	Lock,
	type LucideIcon,
	Radar,
	Users,
} from "lucide-react";
import { CyberBg } from "@/components/brand/cyber-bg";

type Differential = {
	icon: LucideIcon;
	title: string;
	description: string;
	metric: string;
};

const DIFFERENTIALS: Differential[] = [
	{
		icon: Users,
		title: "Equipe especializada",
		description:
			"Operadores sêniores com certificações reconhecidas (OSCP, OSCE, CISSP, CEH) e experiência em adversários reais.",
		metric: "20+ anos combinados",
	},
	{
		icon: Clock,
		title: "Resposta rápida",
		description:
			"SLA agressivo de resposta a incidentes com runbooks prontos para conter, investigar e remediar em minutos.",
		metric: "MTTR < 15min",
	},
	{
		icon: Lock,
		title: "Segurança avançada",
		description:
			"Stack tecnológico de ponta com EDR/XDR, NDR, SIEM e automação SOAR integrada à inteligência da casa.",
		metric: "Defense-in-Depth",
	},
	{
		icon: Radar,
		title: "Monitoramento contínuo",
		description:
			"Visão 360º em tempo real do ambiente, com correlação de eventos, threat hunting e cobertura 24/7.",
		metric: "24/7/365",
	},
	{
		icon: Compass,
		title: "Metodologias modernas",
		description:
			"MITRE ATT&CK, NIST CSF, OWASP, PTES e CIS Controls aplicados de forma pragmática, não burocrática.",
		metric: "Frameworks-driven",
	},
	{
		icon: Award,
		title: "Conformidade & privacidade",
		description:
			"Operações alinhadas a LGPD, ISO 27001/27701, PCI-DSS e SOC 2, com confidencialidade absoluta.",
		metric: "LGPD · ISO 27001",
	},
];

export function Differentials() {
	return (
		<section
			id="diferenciais"
			className="relative isolate overflow-hidden py-24 sm:py-32"
		>
			<CyberBg variant="dots" />

			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
				<div className="mx-auto max-w-2xl text-center">
					<span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 font-medium text-cyvex-cyan-strong text-xs backdrop-blur">
						<span className="size-1.5 rounded-full bg-cyvex-cyan" />{" "}
						Diferenciais Cyvex
					</span>
					<h2 className="mt-5 text-balance font-semibold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
						Por que líderes confiam na{" "}
						<span className="text-gradient-cyber">Cyvex</span>.
					</h2>
					<p className="mt-5 text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
						Combinamos pessoas, processos e tecnologia em uma operação enxuta,
						transparente e altamente eficaz contra ameaças modernas.
					</p>
				</div>

				<div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
					{DIFFERENTIALS.map(({ icon: Icon, title, description, metric }) => (
						<article
							key={title}
							className="card-cyber group/d relative flex flex-col gap-4 p-6 sm:p-7"
						>
							<div className="flex items-center justify-between">
								<span className="grid size-12 place-items-center rounded-xl border border-cyvex-cyan/20 bg-gradient-to-br from-cyvex-cyan/15 to-cyvex-blue/10 text-cyvex-cyan transition-transform group-hover/d:scale-110">
									<Icon className="size-5" />
								</span>
								<span className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
									{metric}
								</span>
							</div>
							<div>
								<h3 className="font-semibold text-lg tracking-tight">
									{title}
								</h3>
								<p className="mt-2 text-muted-foreground text-sm leading-relaxed">
									{description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
