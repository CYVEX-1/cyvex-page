import {
	ArrowRight,
	Building2,
	CheckCircle2,
	Eye,
	FileSearch,
	Fingerprint,
	Network,
	Radar,
	User,
} from "lucide-react";
import Link from "next/link";
import { CyberBg } from "@/components/brand/cyber-bg";

const FEATURES = [
	{
		icon: FileSearch,
		title: "Investigação Digital",
		description:
			"Análise forense de evidências, rastreamento de fraudes e levantamento de provas digitais em ambientes corporativos e pessoais.",
	},
	{
		icon: Radar,
		title: "Análise de Riscos",
		description:
			"Mapeamento de exposição, perfil de risco digital e avaliação de superfícies de ataque em todo o ecossistema.",
	},
	{
		icon: Eye,
		title: "Monitoramento Contínuo",
		description:
			"Vigilância proativa em deep/dark web, vazamentos, menções e movimentações suspeitas em tempo real.",
	},
	{
		icon: Network,
		title: "Inteligência Social (OSINT)",
		description:
			"Coleta e correlação de dados públicos para investigação social, identificação de ameaças e tomada de decisão.",
	},
	{
		icon: Fingerprint,
		title: "Proteção de Identidade",
		description:
			"Defesa contra usurpação, deepfakes e exposição indevida — com plano de resposta dedicado por especialista.",
	},
	{
		icon: CheckCircle2,
		title: "Due Diligence Digital",
		description:
			"Background check digital, reputação e conformidade para fusões, contratações e parcerias estratégicas.",
	},
] as const;

const AUDIENCES = [
	{
		icon: Building2,
		badge: "Para empresas",
		title: "Investigação Corporativa",
		description:
			"Apoio a áreas jurídica, compliance, RH e segurança em casos de fraude interna, vazamento, concorrência desleal, due diligence e resposta a incidentes complexos.",
		bullets: [
			"Forense digital com cadeia de custódia",
			"Mapeamento de ameaças e adversários",
			"Suporte a litígio e compliance",
			"Relatórios executivos e técnicos",
		],
	},
	{
		icon: User,
		badge: "Para pessoas físicas",
		title: "Proteção Pessoal Digital",
		description:
			"Atendimento confidencial a pessoas expostas, executivos, figuras públicas e famílias em casos de fraude, ameaça, golpe, perseguição digital ou exposição indevida.",
		bullets: [
			"Resposta confidencial 24/7",
			"Remoção de conteúdo e contenção",
			"Investigação de ameaças e golpes",
			"Monitoramento contínuo de reputação",
		],
	},
] as const;

export function Investigation() {
	return (
		<section
			id="investigacao"
			className="relative isolate overflow-hidden py-24 sm:py-32"
		>
			<CyberBg variant="aurora" />

			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<span className="inline-flex items-center gap-2 rounded-full border border-cyvex-blue/30 bg-cyvex-blue/10 px-3 py-1 font-medium text-cyvex-blue text-xs">
						<span className="size-1.5 rounded-full bg-cyvex-blue" />{" "}
						Investigação Social
					</span>
					<h2 className="mt-5 text-balance font-semibold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
						<span className="text-gradient-cyber">Inteligência digital</span>{" "}
						aplicada à proteção de pessoas e organizações.
					</h2>
					<p className="mt-5 text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
						Operamos com discrição, ética e metodologia rigorosa, transformando
						dados em evidências e evidências em decisões. Atuação especializada
						para empresas e pessoas físicas em casos sensíveis.
					</p>
				</div>

				{/* Features grid */}
				<div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
					{FEATURES.map(({ icon: Icon, title, description }) => (
						<article
							key={title}
							className="card-cyber group/i relative flex gap-4 p-5"
						>
							<span className="grid size-10 shrink-0 place-items-center rounded-lg border border-cyvex-blue/25 bg-cyvex-blue/10 text-cyvex-blue transition-transform group-hover/i:scale-110">
								<Icon className="size-5" />
							</span>
							<div>
								<h3 className="font-semibold text-sm tracking-tight">
									{title}
								</h3>
								<p className="mt-1 text-muted-foreground text-sm leading-relaxed">
									{description}
								</p>
							</div>
						</article>
					))}
				</div>

				{/* Audiences */}
				<div className="mt-14 grid gap-5 lg:grid-cols-2">
					{AUDIENCES.map(
						({ icon: Icon, badge, title, description, bullets }) => (
							<div
								key={title}
								className="glass relative overflow-hidden rounded-3xl border border-border/70 p-7 sm:p-9"
							>
								<div className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-cyvex-cyan/12 blur-3xl" />
								<span className="inline-flex items-center gap-2 rounded-full border border-cyvex-cyan/25 bg-cyvex-cyan/8 px-3 py-1 font-medium text-[11px] text-cyvex-cyan-strong">
									<Icon className="size-3.5" /> {badge}
								</span>
								<h3 className="mt-5 font-semibold text-2xl tracking-tight sm:text-3xl">
									{title}
								</h3>
								<p className="mt-3 text-muted-foreground text-sm leading-relaxed sm:text-base">
									{description}
								</p>
								<ul className="mt-6 grid gap-2">
									{bullets.map((b) => (
										<li
											key={b}
											className="flex items-start gap-2.5 text-foreground/90 text-sm"
										>
											<CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyvex-cyan" />
											{b}
										</li>
									))}
								</ul>
								<Link
									href="#contato"
									className="mt-7 inline-flex items-center gap-1.5 font-semibold text-cyvex-cyan-strong text-sm transition-colors hover:text-cyvex-cyan"
								>
									Falar com um especialista
									<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
								</Link>
							</div>
						),
					)}
				</div>
			</div>
		</section>
	);
}
