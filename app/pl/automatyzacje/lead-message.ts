export function buildLeadMessage(values: Record<string, string>, pageUrl: string, recipient: string) {
  const url = new URL(pageUrl);
  const source = new URL(url.pathname, url.origin);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = url.searchParams.get(key);
    if (value) source.searchParams.set(key, value);
  }
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
