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
  metadataBase: new URL("https://aptlayer.github.io"),
  title: {
    default: "AptLayer — Production AI & Agent Systems",
    template: "%s — AptLayer",
  },
  description:
    "Founder-led AI engineering studio building production AI features, MCP servers, agentic workflows and agent-ready products.",
  keywords: [
    "AI implementation",
    "AI product engineering",
    "MCP development",
    "Model Context Protocol",
    "AI agents",
    "agentic workflows",
    "LLM cost optimization",
    "AI development Poland",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "AptLayer",
    title: "AptLayer — Production AI & Agent Systems",
    description:
      "AI that ships inside real products. MCP, agent systems and production-grade AI engineering.",
    locale: "en_US",
    alternateLocale: "pl_PL",
    images: [
      {
        url: "/og.png",
        width: 1745,
        height: 909,
        alt: "AptLayer — Production AI & Agent Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AptLayer — Production AI & Agent Systems",
    description:
      "AI that ships inside real products. MCP, agent systems and production-grade AI engineering.",
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
      </body>
    </html>
  );
}
