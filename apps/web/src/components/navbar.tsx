"use client";

import { cn } from "@cyvex-page/ui/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";

const NAV_LINKS = [
	{ href: "#sobre", label: "Sobre" },
	{ href: "#blue-team", label: "Blue Team" },
	{ href: "#red-team", label: "Red Team" },
	{ href: "#investigacao", label: "Investigação" },
	{ href: "#diferenciais", label: "Diferenciais" },
] as const;

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-0 z-50 transition-all duration-300",
				scrolled ? "py-2" : "py-4",
			)}
		>
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
				<div
					className={cn(
						"flex items-center justify-between rounded-2xl border border-transparent px-4 py-2.5 transition-all duration-300",
						scrolled
							? "glass border-border/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
							: "border-transparent",
					)}
				>
					<Link
						href="/"
						className="flex items-center gap-2"
						aria-label="Cyvex — voltar para o início"
					>
						<Logo size={26} />
					</Link>

					<nav
						className="hidden items-center gap-1 lg:flex"
						aria-label="Navegação principal"
					>
						{NAV_LINKS.map((link) => (
							<Link
								key={link.href}
								href={link.href as never}
								className="rounded-full px-3.5 py-2 font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div className="hidden items-center gap-2 lg:flex">
						<Link
							href="#contato"
							className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-4 py-2 font-medium text-foreground/80 text-sm transition-all hover:border-cyvex-cyan/40 hover:text-foreground"
						>
							Falar com especialista
						</Link>
						<Link
							href="#contato"
							className="btn-shimmer group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyvex-cyan-strong to-cyvex-blue px-4 py-2 font-semibold text-background text-sm shadow-[0_10px_30px_-12px_var(--cyvex-cyan)] transition-transform hover:scale-[1.02]"
						>
							Solicitar análise
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
						</Link>
					</div>

					<button
						type="button"
						aria-label={open ? "Fechar menu" : "Abrir menu"}
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
						className="inline-flex size-10 items-center justify-center rounded-full border border-border/60 text-foreground/80 transition-colors hover:text-foreground lg:hidden"
					>
						{open ? <X className="size-5" /> : <Menu className="size-5" />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={cn(
					"fixed inset-x-0 top-[68px] z-40 origin-top px-4 transition-all duration-300 lg:hidden",
					open
						? "pointer-events-auto translate-y-0 opacity-100"
						: "pointer-events-none -translate-y-2 opacity-0",
				)}
			>
				<div className="glass-strong rounded-2xl border border-border/60 p-4 shadow-2xl">
					<nav className="flex flex-col" aria-label="Navegação mobile">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.href}
								href={link.href as never}
								onClick={() => setOpen(false)}
								className="rounded-xl px-3 py-3 font-medium text-base text-foreground/90 transition-colors hover:bg-foreground/5"
							>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="mt-2 grid gap-2">
						<Link
							href="#contato"
							onClick={() => setOpen(false)}
							className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border/70 px-4 py-3 font-medium text-sm"
						>
							Falar com especialista
						</Link>
						<Link
							href="#contato"
							onClick={() => setOpen(false)}
							className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyvex-cyan-strong to-cyvex-blue px-4 py-3 font-semibold text-background text-sm"
						>
							Solicitar análise
							<ArrowRight className="size-4" />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
