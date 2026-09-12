import type { Metadata } from "next";
import LandingPage from "./LandingPage";
import { OG_IMAGE } from "./site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Oprogramowanie bez software house'u",
  description:
    "Jeden inżynier prowadzący załogę agentów AI dowozi projekt od architektury po produkcję, z review każdej zmiany i runbookiem, który należy do Ciebie.",
  alternates: {
    canonical: "/",
    languages: { en: "/en/", pl: "/", "x-default": "/" },
  },
  openGraph: { type: "website", siteName: "One Good Engineer & Co.", locale: "pl_PL", alternateLocale: "en_US", url: "/", images: [OG_IMAGE.pl] },
};

export default function PolishHome() {
  return <LandingPage locale="pl" />;
}
