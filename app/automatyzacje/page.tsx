import type {Metadata} from "next";
import {OG_IMAGE} from "../site";
import AutomationPage from "./AutomationPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Audyt procesów, automatyzacje i integracje dla firm",
  description:
    "Krystian Gwizdała: audyt i plan usprawnień, wdrożenia integracji oraz przeglądy istniejących automatyzacji. Sprzedaż, realizacja usług, dokumenty i raportowanie.",
  keywords: [
    "automatyzacja procesów Kraków",
    "audyt procesów biznesowych",
    "integracje systemów firmowych",
    "audyt automatyzacji",
    "automatyzacja dokumentów i raportowania",
    "automatyzacja sprzedaży",
    "automatyzacja obsługi klienta",
    "automatyczny follow-up",
    "integracja formularza z CRM",
    "AI w małej firmie",
    "n8n dla firm",
  ],
  alternates: {
    canonical: "/automatyzacje/",
    languages: {pl: "/automatyzacje/", "x-default": "/automatyzacje/"},
  },
  openGraph: {
    type: "website",
    siteName: "One Good Engineer & Co.",
    locale: "pl_PL",
    title: "Audyt procesów, automatyzacje i integracje dla firm",
    description:
      "Od diagnozy procesu po wdrożenie i opiekę. Sprzedaż, realizacja usług, dokumenty i raportowanie. One Good Engineer, Kraków i cała Polska.",
    url: "/automatyzacje/",
    images: [OG_IMAGE.pl],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audyt procesów, automatyzacje i integracje dla firm",
    description: "Audyt i plan, wdrożenia oraz przeglądy istniejących automatyzacji. One Good Engineer.",
    images: ["/og.png"],
  },
};

export default function Automations() {
  return <AutomationPage />;
}
