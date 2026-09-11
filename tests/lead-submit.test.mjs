import assert from "node:assert/strict";
import test from "node:test";
import {buildLeadPayload, LEAD_ENDPOINT, submitLead} from "../app/pl/automatyzacje/lead-submit.ts";

const values = {name: " Anna ", companyIndustry: "Usługi B2B", contact: " anna@example.com ", service: "Audyt i plan usprawnień", process: "Oferty i dokumenty\nDwa systemy", volume: "20-100", _gotcha: ""};
const source = "https://onegoodengineer.pl/pl/automatyzacje/?utm_source=youtube";

test("payload preserves diagnostic fields and sets email Reply-To", () => {
  const payload = buildLeadPayload(values, source);
  assert.equal(payload.name, "Anna");
  assert.equal(payload.email, "anna@example.com");
  for (const key of ["companyIndustry", "service", "process", "volume", "_gotcha"]) assert.equal(payload[key], values[key]);
  assert.equal(payload.source, source);
  assert.equal(payload.subject, "One Good Engineer - nowe zapytanie o proces");
  assert.ok(Number.isFinite(Date.parse(payload.submittedAt)));
});

test("phone-only contacts are not sent as invalid email addresses", () => {
  for (const contact of ["+48 123 456 789", "anna@", ""]) {
    const payload = buildLeadPayload({...values, contact}, source);
    assert.equal(payload.contact, contact);
    assert.equal(Object.hasOwn(payload, "email"), false);
  }
});

test("honeypot is retained and arbitrary injected fields are not forwarded", () => {
  const payload = buildLeadPayload({...values, _gotcha: "bot", secret: "do-not-forward", subject: "injected"}, source);
  assert.equal(payload._gotcha, "bot");
  assert.equal(Object.hasOwn(payload, "secret"), false);
  assert.notEqual(payload.subject, "injected");
});

test("submission uses the configured endpoint, JSON headers, timeout and confirmed success", async () => {
  const payload = buildLeadPayload(values, source);
  let calls = 0;
  await submitLead(payload, async (url, options) => {
    calls++;
    assert.equal(url, LEAD_ENDPOINT);
    assert.equal(url, "https://formspree.io/f/xnogenpm");
    assert.equal(options.method, "POST");
    assert.equal(options.headers.Accept, "application/json");
    assert.equal(options.headers["Content-Type"], "application/json");
    assert.ok(options.signal instanceof AbortSignal);
    assert.deepEqual(JSON.parse(options.body), payload);
    return Response.json({ok: true});
  });
  assert.equal(calls, 1);
});

test("HTTP failures, rate limiting and unconfirmed responses cannot report success", async () => {
  for (const response of [
    Response.json({error: "invalid"}, {status: 400}),
    Response.json({error: "CAPTCHA"}, {status: 403}),
    Response.json({error: "limit"}, {status: 429}),
    Response.json({}, {status: 500}),
    Response.json({ok: false}),
    Response.json({}),
    Response.json({ok: true, errors: [{message: "invalid"}]}),
    new Response("Not JSON", {status: 200}),
  ]) {
    await assert.rejects(submitLead(buildLeadPayload(values, source), async () => response));
  }
});

test("network failure or timeout rejects without mutating the supplied data", async () => {
  const payload = buildLeadPayload(values, source);
  const original = {...payload};
  for (const error of [new TypeError("Failed to fetch"), new DOMException("Timeout", "TimeoutError")]) {
    await assert.rejects(submitLead(payload, async () => {throw error;}));
    assert.deepEqual(payload, original);
  }
});
