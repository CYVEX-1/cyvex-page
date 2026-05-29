import {
	ArrowRight,
	CalendarClock,
	CheckCircle2,
	MessageSquare,
	ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const BENEFITS = [
	"Análise inicial sem custo",
	"NDA e confidencialidade absoluta",
	"Resposta em até 24h úteis",
	"Sem compromisso",
] as const;

export function CTA() {
	return (
		<section id="contato" className="relative isolate py-24 sm:py-32">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
				<div className="relative overflow-hidden rounded-3xl border border-cyvex-cyan/25 bg-gradient-to-br from-background/80 via-background/60 to-background/80 p-8 backdrop-blur sm:p-12 lg:p-16">
					{/* Decorative backgrounds */}
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 -z-10"
					>
						<div className="mask-radial-fade absolute inset-0 bg-grid-sm opacity-40" />
						<div className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 animate-aurora rounded-full bg-cyvex-cyan/20 blur-3xl" />
						<div className="absolute right-0 -bottom-32 h-[360px] w-[520px] animate-aurora rounded-full bg-cyvex-violet/15 blur-3xl [animation-delay:-5s]" />
					</div>

					<div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14">
						<div>
							<span className="inline-flex items-center gap-2 rounded-full border border-cyvex-cyan/30 bg-cyvex-cyan/10 px-3 py-1 font-medium text-cyvex-cyan-strong text-xs">
								<ShieldCheck className="size-3.5" /> Pronto para começar
							</span>
							<h2 className="mt-5 text-balance font-semibold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
								Receba uma{" "}
								<span className="text-gradient-cyber">
									análise de segurança
								</span>{" "}
								da Cyvex.
							</h2>
							<p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
								Solicite uma avaliação inicial, agende uma consultoria
								estratégica ou fale agora mesmo com um especialista. Em até 24h,
								nosso time retorna com um diagnóstico claro e próximos passos.
							</p>

							<ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
								{BENEFITS.map((b) => (
									<li
										key={b}
										className="flex items-center gap-2 text-foreground/90 text-sm"
									>
										<CheckCircle2 className="size-4 shrink-0 text-cyvex-cyan" />
										{b}
									</li>
								))}
							</ul>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
								<Link
									href="#contato"
									className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyvex-cyan-strong via-cyvex-cyan to-cyvex-blue px-6 py-3.5 font-semibold text-background text-sm shadow-[0_18px_50px_-18px_var(--cyvex-cyan)] transition-transform hover:scale-[1.02]"
								>
									Solicitar análise
									<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
								</Link>
								<Link
									href="#contato"
									className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/40 px-6 py-3.5 font-semibold text-foreground/90 text-sm backdrop-blur transition-colors hover:border-cyvex-cyan/40 hover:text-foreground"
								>
									<CalendarClock className="size-4" />
									Agendar consultoria
								</Link>
							</div>
						</div>

						{/* Right card */}
						<div className="relative">
							<div className="glass-strong relative overflow-hidden rounded-2xl border border-border/60 p-6 shadow-2xl sm:p-7">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<span className="grid size-10 place-items-center rounded-xl bg-cyvex-cyan/15 text-cyvex-cyan">
											<MessageSquare className="size-5" />
										</span>
										<div>
											<div className="font-semibold text-sm">
												Falar com especialista
											</div>
											<div className="text-muted-foreground text-xs">
												Resposta em até 24h úteis
											</div>
										</div>
									</div>
									<span className="inline-flex items-center gap-1 rounded-full border border-cyvex-cyan/30 bg-cyvex-cyan/10 px-2 py-0.5 text-[10px] text-cyvex-cyan-strong uppercase tracking-widest">
										<span className="size-1.5 rounded-full bg-cyvex-cyan" />{" "}
										online
									</span>
								</div>

								<div className="mt-5 grid gap-3">
									<ContactRow
										label="Whatsapp comercial"
										value="+55 (11) 9 0000-0000"
										href="https://wa.me/5511900000000"
									/>
									<ContactRow
										label="E-mail corporativo"
										value="contato@cyvex.com.br"
										href="mailto:contato@cyvex.com.br"
									/>
									<ContactRow
										label="Resposta a incidentes (24/7)"
										value="soc@cyvex.com.br"
										href="mailto:soc@cyvex.com.br"
										accent
									/>
								</div>

								<div className="mt-5 rounded-xl border border-border/60 bg-background/30 p-3 text-muted-foreground text-xs">
									<strong className="text-foreground/90">
										Sob ataque agora?
									</strong>{" "}
									Acione nosso canal 24/7 de resposta a incidentes — tempo é a
									sua maior defesa.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function ContactRow({
	label,
	value,
	href,
	accent = false,
}: {
	label: string;
	value: string;
	href: string;
	accent?: boolean;
}) {
	return (
		<a
			href={href}
			className={
				"group/c flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-background/30 px-4 py-3 transition-colors hover:border-cyvex-cyan/40" +
				(accent ? "ring-cyber" : "")
			}
		>
			<div>
				<div className="text-[10px] text-muted-foreground uppercase tracking-widest">
					{label}
				</div>
				<div className="mt-0.5 font-semibold text-foreground/95 text-sm">
					{value}
				</div>
			</div>
			<ArrowRight className="size-4 text-muted-foreground transition-all group-hover/c:translate-x-0.5 group-hover/c:text-cyvex-cyan" />
		</a>
	);
}
