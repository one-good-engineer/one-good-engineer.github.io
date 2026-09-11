// Public form address, not an API key. Delivery settings live in Formspree.
export const LEAD_ENDPOINT = "https://formspree.io/f/xnogenpm";

export async function submitLead(payload: Record<string, string>, send: typeof fetch = fetch) {
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

export const looksLikeEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Formspree keeps only the query part of the source that identifies a campaign, never the fragment or the visitor.
export function sourceOf(pageUrl: string) {
  const url = new URL(pageUrl);
  const source = new URL(url.pathname, url.origin);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = url.searchParams.get(key);
    if (value) source.searchParams.set(key, value);
  }
  return source.href;
}
