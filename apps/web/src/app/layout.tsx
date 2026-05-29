import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "../index.css";
import Providers from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cyvex.com.br"),
  title: {
    default: "Cyvex — Cibersegurança Ofensiva e Defensiva | Pentest, Blue Team, Red Team",
    template: "%s | Cyvex",
  },
  description:
    "A Cyvex protege empresas e pessoas contra ameaças digitais avançadas. Pentest, Blue Team, Red Team, Engenharia Social e Investigação Digital com equipe especializada e resposta rápida.",
  keywords: [
    "cibersegurança",
    "cybersecurity",
    "pentest",
    "blue team",
    "red team",
    "engenharia social",
    "investigação digital",
    "segurança ofensiva",
    "segurança defensiva",
    "SOC",
    "Cyvex",
  ],
  authors: [{ name: "Cyvex" }],
  creator: "Cyvex",
  publisher: "Cyvex",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cyvex.com.br",
    siteName: "Cyvex",
    title: "Cyvex — Cibersegurança Ofensiva e Defensiva",
    description:
      "Protegendo empresas e pessoas contra ameaças digitais avançadas. Pentest, Blue Team, Red Team, Engenharia Social e Investigação Digital.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyvex — Cibersegurança Ofensiva e Defensiva",
    description:
      "Protegendo empresas e pessoas contra ameaças digitais avançadas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-svh bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
