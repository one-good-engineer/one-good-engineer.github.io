import type { Metadata } from "next";
import LandingPage from "../LandingPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Wdrożenia AI i systemy agentowe",
  description:
    "Produkcyjne wdrożenia AI, serwery MCP, workflow agentowe i przygotowanie produktów na agentów.",
  alternates: {
    canonical: "/pl/",
    languages: { en: "/", pl: "/pl/", "x-default": "/" },
  },
};

export default function PolishHome() {
  return <LandingPage locale="pl" />;
}
