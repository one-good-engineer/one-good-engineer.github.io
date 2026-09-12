import {sourceOf} from "../lead/formspree.ts";

export function buildLeadMessage(values: Record<string, string>, pageUrl: string, recipient: string) {
  const source = new URL(sourceOf(pageUrl));
  const subject = `Rozmowa o procesie: ${values.companyIndustry || "zapytanie"}`;
  const body = [
    `Imię: ${values.name || ""}`,
    `Firma i branża: ${values.companyIndustry || ""}`,
    `Kontakt: ${values.contact || ""}`,
    `Potrzeba: ${values.service || "Nie wiem jeszcze"}`,
    `Liczba operacji miesięcznie: ${values.volume || "Nie wiem"}`,
    "", "Opis procesu:", values.process || "", "", `Źródło: ${source.href}`,
  ].join("\n");
  return {subject, body, source: source.href, mailto: `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`};
}
