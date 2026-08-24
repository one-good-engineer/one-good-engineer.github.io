import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://one-good-engineer.github.io"),
  title: {
    default: "One Good Engineer · Software delivery without a software house",
    template: "%s · One Good Engineer",
  },
  description:
    "Krystian Gwizdała: one senior engineer running a crew of AI agents delivers your project end to end, with review on every change and a runbook you own.",
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
    google: "AivhVutlgdzwPhOT26aWe5RxRWJp5YqixFXJ6ie48nM",
  },
  openGraph: {
    type: "website",
    siteName: "One Good Engineer & Co.",
    title: "One Good Engineer · Software delivery without a software house",
    description:
      "One engineer running a crew of AI agents, with senior review on every change. Vibe coding gets you a prototype. This gets you something you can run.",
    locale: "en_US",
    alternateLocale: "pl_PL",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "One Good Engineer & Co. · one engineer, a crew of agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Good Engineer · Software delivery without a software house",
    description:
      "One engineer running a crew of AI agents, with senior review on every change. Vibe coding gets you a prototype. This gets you something you can run.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
