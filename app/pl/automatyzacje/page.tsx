import type {Metadata} from "next";
import AutomationPage from "./AutomationPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Automatyzacja sprzedaży i obsługi klienta",
  description:
    "Automatyzacje formularzy, poczty, CRM i follow-upów dla małych firm. Krystian Gwizdała projektuje i wdraża procesy, które skracają czas odpowiedzi i ograniczają ręczną pracę.",
  keywords: [
    "automatyzacja procesów Kraków",
    "automatyzacja sprzedaży",
    "automatyzacja obsługi klienta",
    "automatyczny follow-up",
    "integracja formularza z CRM",
    "AI w małej firmie",
    "n8n dla firm",
  ],
  alternates: {
    canonical: "/pl/automatyzacje/",
    languages: {pl: "/pl/automatyzacje/", "x-default": "/pl/automatyzacje/"},
  },
  openGraph: {
    type: "website",
    siteName: "One Good Engineer & Co.",
    locale: "pl_PL",
    title: "Automatyzacja sprzedaży i obsługi klienta",
    description:
      "Połącz formularze, e-mail, CRM i AI, żeby szybciej odpowiadać klientom i nie tracić leadów.",
    url: "/pl/automatyzacje/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "One Good Engineer & Co. · jeden inżynier, załoga agentów",
      },
    ],
  },
};

export default function Automations() {
  return <AutomationPage />;
}
