import type {Metadata} from "next";
import {OG_IMAGE} from "../site";
import PrivateAIPage from "./PrivateAIPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Prywatne AI i asystenci wiedzy dla firm",
  description: "Audyt danych, PoC i wdrożenie prywatnego asystenta AI dla dokumentów i procesów firmy. Kontrola dostępu, źródła odpowiedzi i akceptacja człowieka.",
  keywords: ["prywatne AI dla firm", "lokalny model językowy dla firmy", "asystent AI do dokumentów", "RAG dla firmy", "AI on-premise Polska", "wdrożenie AI dla MŚP"],
  alternates: {canonical: "/prywatne-ai/", languages: {pl: "/prywatne-ai/", "x-default": "/prywatne-ai/"}},
  openGraph: {title: "Prywatne AI i asystenci wiedzy dla firm · One Good Engineer", description: "Audyt danych, PoC i wdrożenie prywatnego asystenta AI dla dokumentów i procesów firmy.", locale: "pl_PL", url: "/prywatne-ai/", images: [OG_IMAGE.pl]},
};

export default function PrivateAI() {
  return <PrivateAIPage />;
}
