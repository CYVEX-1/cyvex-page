import {
	Activity,
	ArrowRight,
	CheckCircle2,
	Globe2,
	Lock,
	ShieldCheck,
	Sparkles,
	Terminal,
} from "lucide-react";
import Link from "next/link";
import { CyberBg } from "@/components/brand/cyber-bg";

const STATS = [
	{ value: "500+", label: "Operações de defesa" },
	{ value: "24/7", label: "Monitoramento contínuo" },
	{ value: "99.9%", label: "Disponibilidade SOC" },
	{ value: "<15min", label: "Resposta a incidentes" },
] as const;

const TRUST_BADGES = [
	{ icon: ShieldCheck, label: "LGPD compliant" },
	{ icon: Lock, label: "ISO 27001 ready" },
	{ icon: Globe2, label: "Atendimento global" },
	{ icon: Activity, label: "SOC 24/7" },
] as const;

export function Hero() {
	return (
		<section
			id="topo"
			className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-44"
		>
			<CyberBg variant="grid" />

			{/* Scanline accent */}
			<div className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-px bg-gradient-to-r from-transparent via-cyvex-cyan/60 to-transparent" />
			<div className="pointer-events-none absolute inset-x-0 bottom-12 -z-10 h-px bg-gradient-to-r from-transparent via-cyvex-violet/40 to-transparent" />

			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
				<div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
					{/* Left column */}
					<div className="relative animate-fade-up">
						<div className="inline-flex items-center gap-2 rounded-full border border-cyvex-cyan/25 bg-cyvex-cyan/5 px-3 py-1.5 font-medium text-cyvex-cyan-strong text-xs backdrop-blur">
							<span className="relative flex size-1.5">
								<span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-cyvex-cyan/70" />
								<span className="relative inline-flex size-1.5 rounded-full bg-cyvex-cyan" />
							</span>
							<Sparkles className="size-3.5" />
							Cibersegurança ofensiva &amp; defensiva
						</div>

						<h1 className="mt-6 text-balance font-sans font-semibold text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
							<span className="text-foreground">
								Protegendo empresas e pessoas contra{" "}
							</span>
							<span className="text-gradient-cyber">
								ameaças digitais avançadas
							</span>
							<span className="text-foreground">.</span>
						</h1>

						<p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
							A Cyvex combina inteligência ofensiva e defesa de elite para
							blindar sua operação. Pentest, Blue Team, Red Team, Engenharia
							Social e Investigação Digital — executados por especialistas, com
							metodologia moderna e resposta rápida.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
							<Link
								href="#contato"
								className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyvex-cyan-strong via-cyvex-cyan to-cyvex-blue px-6 py-3.5 font-semibold text-background text-sm shadow-[0_18px_50px_-18px_var(--cyvex-cyan)] transition-transform hover:scale-[1.02]"
							>
								Solicitar análise gratuita
								<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
							</Link>
							<Link
								href="#blue-team"
								className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/40 px-6 py-3.5 font-semibold text-foreground/90 text-sm backdrop-blur transition-colors hover:border-cyvex-cyan/40 hover:text-foreground"
							>
								Conhecer soluções
								<ArrowRight className="size-4 opacity-70 transition-transform group-hover:translate-x-0.5" />
							</Link>
						</div>

						{/* Trust badges */}
						<ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-muted-foreground text-xs">
							{TRUST_BADGES.map(({ icon: Icon, label }) => (
								<li key={label} className="inline-flex items-center gap-1.5">
									<Icon className="size-3.5 text-cyvex-cyan/80" />
									{label}
								</li>
							))}
						</ul>
					</div>

					{/* Right column - Terminal visual */}
					<div className="relative animate-fade-up [animation-delay:120ms]">
						<div className="relative">
							<div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-cyvex-cyan/20 via-cyvex-blue/10 to-cyvex-violet/15 blur-2xl" />
							<div className="glass-strong relative overflow-hidden rounded-2xl border border-border/70 shadow-2xl">
								{/* Window chrome */}
								<div className="flex items-center justify-between border-border/60 border-b bg-background/30 px-4 py-2.5">
									<div className="flex items-center gap-1.5">
										<span className="size-2.5 rounded-full bg-red-500/70" />
										<span className="size-2.5 rounded-full bg-yellow-500/70" />
										<span className="size-2.5 rounded-full bg-green-500/70" />
									</div>
									<div className="flex items-center gap-1.5 font-medium text-[10px] text-muted-foreground uppercase tracking-wider">
										<Terminal className="size-3" />
										cyvex-soc — live
									</div>
									<span className="text-[10px] text-cyvex-cyan/80">
										● connected
									</span>
								</div>

								{/* Terminal body */}
								<div className="relative font-mono text-[12px] leading-relaxed">
									<div className="space-y-1 p-5 sm:p-6">
										<div>
											<span className="text-cyvex-cyan">cyvex@soc</span>
											<span className="text-muted-foreground">:</span>
											<span className="text-cyvex-violet">~</span>
											<span className="text-muted-foreground">$ </span>
											<span className="text-foreground/90">
												run threat-scan --target=client.corp
											</span>
										</div>
										<div className="text-muted-foreground">
											[+] Initializing recon modules…
										</div>
										<div className="text-muted-foreground">
											[+] OSINT collectors: 12 active
										</div>
										<div className="text-muted-foreground">
											[+] Surface mapping endpoints: 247
										</div>
										<div className="flex items-center gap-2">
											<CheckCircle2 className="size-3.5 text-emerald-400" />
											<span className="text-emerald-400/90">
												vuln-scan • completed
											</span>
											<span className="text-muted-foreground">(2.4s)</span>
										</div>
										<div className="flex items-center gap-2">
											<CheckCircle2 className="size-3.5 text-emerald-400" />
											<span className="text-emerald-400/90">
												credential-leak • clean
											</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="inline-block size-1.5 animate-pulse rounded-full bg-yellow-400" />
											<span className="text-yellow-300/90">
												threat-intel • streaming…
											</span>
										</div>
										<div className="mt-3 text-muted-foreground">
											<span className="text-cyvex-cyan">›</span> 3 vetores
											mitigados em tempo real
										</div>

										{/* Bars */}
										<div className="mt-5 grid gap-2">
											<BarRow
												label="Endpoint Defense"
												value={96}
												color="from-cyvex-cyan-strong to-cyvex-cyan"
											/>
											<BarRow
												label="Network Posture"
												value={88}
												color="from-cyvex-cyan to-cyvex-blue"
											/>
											<BarRow
												label="Identity / Access"
												value={92}
												color="from-cyvex-blue to-cyvex-violet"
											/>
											<BarRow
												label="Threat Intel"
												value={78}
												color="from-cyvex-violet to-cyvex-cyan"
											/>
										</div>

										<div className="mt-4 flex items-center gap-2">
											<span className="text-cyvex-cyan">cyvex@soc</span>
											<span className="text-muted-foreground">:~$</span>
											<span className="inline-block h-4 w-2 animate-blink bg-cyvex-cyan" />
										</div>
									</div>

									{/* Scan line overlay */}
									<div className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-cyvex-cyan/10 via-cyvex-cyan/0 to-transparent" />
								</div>
							</div>

							{/* Floating mini cards */}
							<div className="absolute -bottom-4 -left-6 hidden animate-float rounded-xl border border-border/70 bg-background/80 px-3 py-2 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-2">
								<span className="grid size-8 place-items-center rounded-lg bg-cyvex-cyan/15 text-cyvex-cyan">
									<ShieldCheck className="size-4" />
								</span>
								<div className="text-left">
									<div className="text-[10px] text-muted-foreground uppercase tracking-wider">
										Defesa ativa
									</div>
									<div className="font-semibold text-xs">
										Bloqueios: 14.2k/24h
									</div>
								</div>
							</div>
							<div className="absolute -top-4 -right-4 hidden animate-float rounded-xl border border-border/70 bg-background/80 px-3 py-2 shadow-xl backdrop-blur [animation-delay:-3s] sm:flex sm:items-center sm:gap-2">
								<span className="grid size-8 place-items-center rounded-lg bg-cyvex-violet/15 text-cyvex-violet">
									<Activity className="size-4" />
								</span>
								<div className="text-left">
									<div className="text-[10px] text-muted-foreground uppercase tracking-wider">
										Latência média
									</div>
									<div className="font-semibold text-xs">42ms · 99.9% SLA</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Stats strip */}
				<div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:mt-20 sm:grid-cols-4">
					{STATS.map((s) => (
						<div
							key={s.label}
							className="bg-background/60 px-5 py-6 backdrop-blur"
						>
							<div className="font-semibold text-2xl tracking-tight sm:text-3xl">
								<span className="text-gradient-cyber">{s.value}</span>
							</div>
							<div className="mt-1 text-muted-foreground text-xs sm:text-sm">
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function BarRow({
	label,
	value,
	color,
}: {
	label: string;
	value: number;
	color: string;
}) {
	return (
		<div>
			<div className="mb-1 flex items-center justify-between text-[11px]">
				<span className="text-muted-foreground">{label}</span>
				<span className="font-mono text-foreground/80">{value}%</span>
			</div>
			<div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/8">
				<div
					className={`h-full rounded-full bg-gradient-to-r ${color}`}
					style={{ width: `${value}%` }}
				/>
			</div>
		</div>
	);
}
