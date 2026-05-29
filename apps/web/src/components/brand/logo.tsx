import { cn } from "@cyvex-page/ui/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

export function Logo({ className, showWordmark = true, size = 28 }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Cyvex"
        role="img"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="cyvex-shield" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.88 0.17 200)" />
            <stop offset="55%" stopColor="oklch(0.72 0.18 215)" />
            <stop offset="100%" stopColor="oklch(0.58 0.18 245)" />
          </linearGradient>
          <linearGradient id="cyvex-shield-inner" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.97 0.005 240)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(0.97 0.005 240)" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Shield outline */}
        <path
          d="M20 2.5 L35 7.5 V20.5 C35 28.5 28.5 34.5 20 37.5 C11.5 34.5 5 28.5 5 20.5 V7.5 Z"
          fill="url(#cyvex-shield)"
          opacity="0.18"
        />
        <path
          d="M20 2.5 L35 7.5 V20.5 C35 28.5 28.5 34.5 20 37.5 C11.5 34.5 5 28.5 5 20.5 V7.5 Z"
          stroke="url(#cyvex-shield)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Stylized "C" + chevron mark inside the shield */}
        <path
          d="M25.5 14.5 C24 12.5 21.5 11.5 19 12 C15.5 12.7 13 15.8 13 19.5 C13 23.2 15.5 26.3 19 27 C21.5 27.5 24 26.5 25.5 24.5"
          stroke="url(#cyvex-shield-inner)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 17.5 L26 19.5 L22 21.5"
          stroke="url(#cyvex-shield-inner)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Subtle scan line */}
        <line x1="6" y1="20" x2="34" y2="20" stroke="url(#cyvex-shield)" strokeWidth="0.4" opacity="0.5" />
      </svg>

      {showWordmark && (
        <span className="text-base font-semibold tracking-tight">
          <span className="text-foreground">CY</span>
          <span className="text-gradient-cyber">VEX</span>
        </span>
      )}
    </div>
  );
}
