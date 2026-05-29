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
          <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyvex-cyan/15 blur-3xl animate-aurora" />
          <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-cyvex-blue/15 blur-3xl animate-aurora [animation-delay:-4s]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/4 translate-y-1/4 rounded-full bg-cyvex-violet/12 blur-3xl animate-aurora [animation-delay:-8s]" />
        </>
      )}

      {/* Grid / Dots layer */}
      {variant === "grid" && (
        <div className="absolute inset-0 bg-grid mask-radial-fade opacity-70" />
      )}
      {variant === "dots" && (
        <div className="absolute inset-0 bg-dots mask-radial-fade opacity-60" />
      )}
      {variant === "aurora" && (
        <div className="absolute inset-0 bg-grid-sm mask-radial-fade opacity-40" />
      )}

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
