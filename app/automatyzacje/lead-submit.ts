import {looksLikeEmail} from "../lead/formspree.ts";

export {LEAD_ENDPOINT, submitLead} from "../lead/formspree.ts";

export function buildLeadPayload(values: Record<string, string>, source: string) {
  const contact = (values.contact || "").trim();
  return {
    name: (values.name || "").trim(),
    companyIndustry: (values.companyIndustry || "").trim(),
    contact,
    ...(looksLikeEmail(contact) ? {email: contact} : {}),
    service: values.service || "Nie wiem jeszcze",
    process: (values.process || "").trim(),
    volume: values.volume || "nie wiem",
    subject: "One Good Engineer - nowe zapytanie o proces",
    _gotcha: values._gotcha || "",
    source,
    submittedAt: new Date().toISOString(),
  };
}
