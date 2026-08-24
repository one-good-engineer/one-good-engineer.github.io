import type { Metadata } from "next";
import LandingPage from "../LandingPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Oprogramowanie bez software house'u",
  description:
    "Jeden inżynier prowadzący załogę agentów AI dowozi projekt od architektury po produkcję, z review każdej zmiany i runbookiem, który należy do Ciebie.",
  alternates: {
    canonical: "/pl/",
    languages: { en: "/", pl: "/pl/", "x-default": "/" },
  },
};

export default function PolishHome() {
  return <LandingPage locale="pl" />;
}
