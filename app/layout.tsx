import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "./site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "One Good Engineer · Oprogramowanie bez software house'u",
    template: "%s · One Good Engineer",
  },
  description:
    "Jeden inżynier prowadzący załogę agentów AI dowozi projekt od architektury po produkcję, z review każdej zmiany i runbookiem, który należy do Ciebie.",
  keywords: [
    "software development without agency",
    "AI agent software delivery",
    "solo software engineer",
    "AI product engineering",
    "MCP development",
    "Model Context Protocol",
    "agentic workflows",
    "software development Poland",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  verification: {
    // one token per Search Console property: the github.io one and onegoodengineer.pl.
    // An array under `google` renders as one comma-joined tag, which Google does not read.
    google: "AivhVutlgdzwPhOT26aWe5RxRWJp5YqixFXJ6ie48nM",
    other: { "google-site-verification": "3ffKuF1iQL0fJGMbwIWWx_oBMDj2S1Jz5EjQfP-iy80" },
  },
  openGraph: {
    type: "website",
    siteName: "One Good Engineer & Co.",
    title: "One Good Engineer · Oprogramowanie bez software house'u",
    description:
      "Nie potrzebujesz software house'u. Potrzebujesz jednego inżyniera, który prowadzi załogę agentów.",
    locale: "pl_PL",
    alternateLocale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "One Good Engineer & Co. · jeden inżynier, załoga agentów",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Good Engineer · Oprogramowanie bez software house'u",
    description:
      "Nie potrzebujesz software house'u. Potrzebujesz jednego inżyniera, który prowadzi załogę agentów.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
        {/* Same GoatCounter account as the portfolio, so the paths are prefixed to stay separable. */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'window.goatcounter={path:function(p){return "oge"+p}}',
          }}
        />
        <script
          data-goatcounter="https://krystiangw.goatcounter.com/count"
          async
          src="https://gc.zgo.at/count.js"
        />
      </body>
    </html>
  );
}
