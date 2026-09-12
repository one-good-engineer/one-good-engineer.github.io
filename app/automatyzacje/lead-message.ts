import {sourceOf} from "../lead/formspree.ts";
import type {Locale} from "../SiteChrome";

export function buildLeadMessage(values: Record<string, string>, pageUrl: string, recipient: string, locale: Locale = "pl") {
  const source = new URL(sourceOf(pageUrl));
  const english = locale === "en";
  const subject = `${english ? "Process conversation" : "Rozmowa o procesie"}: ${values.companyIndustry || (english ? "enquiry" : "zapytanie")}`;
  const body = [
    `${english ? "Name" : "Imię"}: ${values.name || ""}`,
    `${english ? "Company and industry" : "Firma i branża"}: ${values.companyIndustry || ""}`,
    `${english ? "Contact" : "Kontakt"}: ${values.contact || ""}`,
    `${english ? "Need" : "Potrzeba"}: ${values.service || (english ? "I am not sure yet" : "Nie wiem jeszcze")}`,
    `${english ? "Monthly operations" : "Liczba operacji miesięcznie"}: ${values.volume || (english ? "I do not know" : "Nie wiem")}`,
    "", english ? "Process description:" : "Opis procesu:", values.process || "", "", `${english ? "Source" : "Źródło"}: ${source.href}`,
  ].join("\n");
  return {subject, body, source: source.href, mailto: `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`};
}
