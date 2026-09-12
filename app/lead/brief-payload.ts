import {looksLikeEmail} from "./formspree.ts";

export const briefFields = ["name", "company", "contact", "package"] as const;

export function buildBriefPayload(values: Record<string, string>, source: string, locale: "en" | "pl") {
  const contact = (values.contact || "").trim();
  const trimmed = Object.fromEntries(briefFields.map((field) => [field, (values[field] || "").trim()]));
  return {
    ...trimmed,
    contact,
    ...(looksLikeEmail(contact) ? {email: contact} : {}),
    subject: locale === "pl" ? "One Good Engineer - brief strony" : "One Good Engineer - website brief",
    _gotcha: values._gotcha || "",
    source,
    submittedAt: new Date().toISOString(),
  };
}

// A plan CTA links to #brief?plan=<name>; the form preselects that plan and scrolls itself into view.
export function planHref(plan: string) {
  return `#brief?plan=${encodeURIComponent(plan)}`;
}

export function planFromHash(hash: string) {
  const query = hash.split("?")[1];
  return query ? new URLSearchParams(query).get("plan") : null;
}
