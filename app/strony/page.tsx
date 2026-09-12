import type { Metadata } from "next";
import OfferPage from "../OfferPage";
import { OG_IMAGE } from "../site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Strony internetowe i sklepy online dla firm | pełna obsługa",
  description:
    "Pełna obsługa strony dla firmy: wizytówki statyczne od 990 zł, strategia, teksty, design, wdrożenie, SEO, hosting i domena. Trzy gotowe wersje strony w 24 godziny, strona firmowa online w 48 godzin, stała cena i opieka.",
  keywords: ["wizytówka internetowa", "strony internetowe dla firm", "strony internetowe Kraków", "sklepy internetowe", "strona z SEO", "hosting i domena", "opieka nad stroną", "stała cena strony"],
  alternates: {
    canonical: "/strony/",
    languages: { en: "/en/websites/", pl: "/strony/", "x-default": "/strony/" },
  },
  openGraph: {
    title: "Strony internetowe i sklepy online dla firm · One Good Engineer",
    description: "Strategia, teksty, design, SEO, hosting i domena w jednej usłudze. Wizytówki statyczne od 990 zł, trzy gotowe wersje strony w 24 godziny, strona firmowa online w 48 godzin, stała cena i opieka.",
    locale: "pl_PL",
    url: "/strony/",
    images: [OG_IMAGE.pl],
  },
};

export default function PolishWebsites() {
  return <OfferPage locale="pl" />;
}
