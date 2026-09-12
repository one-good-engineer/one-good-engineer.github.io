import {looksLikeEmail} from "../lead/formspree.ts";
import type {Locale} from "../SiteChrome";

export {LEAD_ENDPOINT, submitLead} from "../lead/formspree.ts";

export function buildLeadPayload(values: Record<string, string>, source: string, locale: Locale = "pl") {
  const contact = (values.contact || "").trim();
  const english = locale === "en";
  return {
    name: (values.name || "").trim(),
    companyIndustry: (values.companyIndustry || "").trim(),
    contact,
    ...(looksLikeEmail(contact) ? {email: contact} : {}),
    service: values.service || (english ? "I am not sure yet" : "Nie wiem jeszcze"),
    process: (values.process || "").trim(),
    volume: values.volume || (english ? "unknown" : "nie wiem"),
    subject: english ? "One Good Engineer - new process enquiry" : "One Good Engineer - nowe zapytanie o proces",
    _gotcha: values._gotcha || "",
    source,
    submittedAt: new Date().toISOString(),
  };
}
