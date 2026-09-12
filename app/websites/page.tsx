import type { Metadata } from "next";
import OfferPage from "../OfferPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Web design and online shops for businesses | fixed price",
  description:
    "A complete website service for businesses in Poland: static business cards from 990 PLN, strategy, copy, design, SEO, hosting and domain setup. Three website versions in 24 hours, a company site live in 48 hours, fixed price and ongoing support.",
  keywords: ["web design Poland", "business card website", "company website Poland", "online shop Poland", "fixed price website", "website SEO and hosting", "website maintenance"],
  alternates: {
    canonical: "/websites/",
    languages: { en: "/websites/", pl: "/pl/strony/", "x-default": "/websites/" },
  },
  openGraph: {
    title: "Web design and online shops for businesses · One Good Engineer",
    description: "Strategy, copy, design, SEO, hosting and domain setup in one service. Static business cards from 990 PLN, three website versions in 24 hours, a company site live in 48 hours, fixed price and ongoing support.",
  },
};

export default function Websites() {
  return <OfferPage locale="en" />;
}
