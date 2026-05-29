import { cn } from "@cyvex-page/ui/lib/utils";

type CyberBgProps = {
	className?: string;
	variant?: "grid" | "dots" | "aurora" | "minimal";
};

/**
 * Decorative cyber background. Rendered behind sections.
 * Uses CSS-only animations for performance.
 */
export function CyberBg({ className, variant = "grid" }: CyberBgProps) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute inset-0 -z-10 overflow-hidden",
				className,
			)}
		>
			{/* Aurora glows */}
			{variant !== "minimal" && (
				<>
					<div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 animate-aurora rounded-full bg-cyvex-cyan/15 blur-3xl" />
					<div className="absolute top-1/3 -left-32 h-[420px] w-[420px] animate-aurora rounded-full bg-cyvex-blue/15 blur-3xl [animation-delay:-4s]" />
					<div className="absolute right-0 bottom-0 h-[420px] w-[420px] translate-x-1/4 translate-y-1/4 animate-aurora rounded-full bg-cyvex-violet/12 blur-3xl [animation-delay:-8s]" />
				</>
			)}

			{/* Grid / Dots layer */}
			{variant === "grid" && (
				<div className="mask-radial-fade absolute inset-0 bg-grid opacity-70" />
			)}
			{variant === "dots" && (
				<div className="mask-radial-fade absolute inset-0 bg-dots opacity-60" />
			)}
			{variant === "aurora" && (
				<div className="mask-radial-fade absolute inset-0 bg-grid-sm opacity-40" />
			)}

			{/* Top fade */}
			<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
			{/* Bottom fade */}
			<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
		</div>
	);
}
