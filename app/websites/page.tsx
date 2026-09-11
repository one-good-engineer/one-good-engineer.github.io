import type { Metadata } from "next";
import OfferPage from "../OfferPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Websites and online shops at a fixed price",
  description:
    "Three working versions of your website in 48 hours, a fixed price, launch on your domain within seven working days, then a monthly care plan where changes are one email away. Built for businesses in Poland.",
  alternates: {
    canonical: "/websites/",
    languages: { en: "/websites/", pl: "/pl/strony/", "x-default": "/websites/" },
  },
  openGraph: {
    title: "Websites and online shops at a fixed price · One Good Engineer",
    description: "Three working versions in 48 hours, a fixed price, your domain in seven working days, then changes by email.",
  },
};

export default function Websites() {
  return <OfferPage locale="en" />;
}
