import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Software delivery without a software house",
  alternates: {
    canonical: "/",
    languages: { en: "/", pl: "/pl/", "x-default": "/" },
  },
};

export default function Home() {
  return <LandingPage locale="en" />;
}
