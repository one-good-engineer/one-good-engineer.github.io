import type { Metadata } from "next";
import PrivateAIPage from "./PrivateAIPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Prywatne AI i asystenci wiedzy dla firm",
  description:
    "Projektuję prywatnych asystentów AI do dokumentów i procesów firmowych. Audyt danych, PoC, integracje, kontrola dostępu i utrzymanie dla firm w Krakowie i całej Polsce.",
  keywords: [
    "prywatne AI dla firm",
    "lokalny model językowy dla firmy",
    "asystent AI do dokumentów",
    "RAG dla firmy",
    "AI on-premise Polska",
    "bezpieczne AI Kraków",
    "automatyzacja dokumentów",
    "wdrożenie AI dla MŚP",
  ],
  alternates: {
    canonical: "/pl/prywatne-ai/",
    languages: { pl: "/pl/prywatne-ai/", "x-default": "/pl/prywatne-ai/" },
  },
  openGraph: {
    type: "website",
    siteName: "One Good Engineer & Co.",
    locale: "pl_PL",
    title: "Prywatne AI i asystenci wiedzy dla firm",
    description:
      "Asystent AI nad dokumentami i procesami firmy, z kontrolą danych, źródłami odpowiedzi i akceptacją człowieka.",
    url: "/pl/prywatne-ai/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "One Good Engineer & Co. · prywatne AI dla firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prywatne AI i asystenci wiedzy dla firm",
    description:
      "Audyt danych, PoC i wdrożenie prywatnego asystenta AI dla dokumentów i procesów firmy.",
    images: ["/og.png"],
  },
};

export default function PrivateAI() {
  return <PrivateAIPage />;
}
