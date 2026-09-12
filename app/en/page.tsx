import type { Metadata } from "next";
import LandingPage from "../LandingPage";
import { OG_IMAGE } from "../site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Software delivery without a software house",
  description:
    "Krystian Gwizdała: one senior engineer running a crew of AI agents delivers your project end to end, with review on every change and a runbook you own.",
  alternates: {
    canonical: "/en/",
    languages: { en: "/en/", pl: "/", "x-default": "/" },
  },
  openGraph: {
    title: "One Good Engineer · Software delivery without a software house",
    description:
      "One engineer running a crew of AI agents, with senior review on every change. Vibe coding gets you a prototype. This gets you something you can run.",
    locale: "en_US",
    alternateLocale: "pl_PL",
    url: "/en/",
    images: [OG_IMAGE.en],
  },
  twitter: {
    title: "One Good Engineer · Software delivery without a software house",
    description:
      "One engineer running a crew of AI agents, with senior review on every change. Vibe coding gets you a prototype. This gets you something you can run.",
  },
};

export default function Home() {
  return <LandingPage locale="en" />;
}
