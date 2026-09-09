// Public form address, not an API key. Delivery settings live in Formspree.
export const LEAD_ENDPOINT = "https://formspree.io/f/xnogenpm";

export function buildLeadPayload(values: Record<string, string>, source: string) {
  const contact = (values.contact || "").trim();
  return {
    name: (values.name || "").trim(),
    companyIndustry: (values.companyIndustry || "").trim(),
    contact,
    ...(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) ? {email: contact} : {}),
    service: values.service || "Nie wiem jeszcze",
    process: (values.process || "").trim(),
    volume: values.volume || "nie wiem",
    subject: "One Good Engineer - nowe zapytanie o proces",
    _gotcha: values._gotcha || "",
    source,
    submittedAt: new Date().toISOString(),
  };
}

export async function submitLead(payload: ReturnType<typeof buildLeadPayload>, send: typeof fetch = fetch) {
  const response = await send(LEAD_ENDPOINT, {
    method: "POST",
    signal: AbortSignal.timeout(15000),
    headers: {"Content-Type": "application/json", Accept: "application/json"},
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Lead endpoint returned ${response.status}`);
  const result = await response.json();
  if (result.ok !== true || result.error || result.errors?.length) {
    throw new Error("Lead endpoint did not confirm submission");
  }
}
