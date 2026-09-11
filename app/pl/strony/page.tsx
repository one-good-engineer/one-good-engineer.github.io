import type { Metadata } from "next";
import OfferPage from "../../OfferPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Strony internetowe i sklepy online dla firm | pełna obsługa",
  description:
    "Pełna obsługa strony dla firmy: strategia, teksty, design, wdrożenie, SEO, hosting i domena. Trzy gotowe wersje strony w 24 godziny, strona firmowa online w 48 godzin, stała cena i opieka.",
  keywords: ["strony internetowe dla firm", "strony internetowe Kraków", "sklepy internetowe", "strona z SEO", "hosting i domena", "opieka nad stroną", "stała cena strony"],
  alternates: {
    canonical: "/pl/strony/",
    languages: { en: "/websites/", pl: "/pl/strony/", "x-default": "/websites/" },
  },
  openGraph: {
    title: "Strony internetowe i sklepy online dla firm · One Good Engineer",
    description: "Strategia, teksty, design, SEO, hosting i domena w jednej usłudze. Trzy gotowe wersje strony w 24 godziny, strona firmowa online w 48 godzin, stała cena i opieka.",
    locale: "pl_PL",
  },
};

export default function PolishWebsites() {
  return <OfferPage locale="pl" />;
}
