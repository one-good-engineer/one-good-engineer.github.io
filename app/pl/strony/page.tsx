import type { Metadata } from "next";
import OfferPage from "../../OfferPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Strony i sklepy internetowe ze stałą ceną",
  description:
    "Trzy działające wersje Twojej strony w 48 godzin, stała cena, publikacja pod Twoją domeną w siedem dni roboczych, a potem miesięczna opieka, w której zmiany zamawiasz mailem.",
  alternates: {
    canonical: "/pl/strony/",
    languages: { en: "/websites/", pl: "/pl/strony/", "x-default": "/websites/" },
  },
  openGraph: {
    title: "Strony i sklepy internetowe ze stałą ceną · One Good Engineer",
    description: "Trzy działające wersje w 48 godzin, stała cena, Twoja domena w siedem dni roboczych, potem zmiany mailem.",
    locale: "pl_PL",
  },
};

export default function PolishWebsites() {
  return <OfferPage locale="pl" />;
}
