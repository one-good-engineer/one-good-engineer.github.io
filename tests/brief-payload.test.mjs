import assert from "node:assert/strict";
import test from "node:test";
import {buildBriefPayload, briefFields, planFromHash, planHref} from "../app/lead/brief-payload.ts";
import {sourceOf} from "../app/lead/formspree.ts";

const values = {name: " Anna ", company: "Sklep z kawą, sprzedaje na Allegro", contact: " anna@example.com ", package: "Sklep internetowy", _gotcha: ""};
const source = "https://one-good-engineer.github.io/pl/strony/";

test("brief payload carries every brief field, trimmed, with a Reply-To when the contact is an email", () => {
  const payload = buildBriefPayload(values, source, "pl");
  for (const field of briefFields) assert.equal(typeof payload[field], "string");
  assert.equal(payload.name, "Anna");
  assert.equal(payload.email, "anna@example.com");
  assert.equal(payload.subject, "One Good Engineer - brief strony");
  assert.equal(buildBriefPayload(values, source, "en").subject, "One Good Engineer - website brief");
  assert.equal(Object.hasOwn(buildBriefPayload({...values, contact: "+48 600 000 000"}, source, "pl"), "email"), false);
});

test("injected fields are dropped and the honeypot is kept", () => {
  const payload = buildBriefPayload({...values, secret: "x", subject: "injected", _gotcha: "bot"}, source, "pl");
  assert.equal(Object.hasOwn(payload, "secret"), false);
  assert.equal(payload.subject, "One Good Engineer - brief strony");
  assert.equal(payload._gotcha, "bot");
});

test("source keeps campaign parameters and drops everything else", () => {
  assert.equal(sourceOf("https://x.pl/pl/strony/?utm_source=fb&fbclid=123#brief"), "https://x.pl/pl/strony/?utm_source=fb");
});

test("the plan travels from the CTA hash into the form and back", () => {
  assert.equal(planFromHash(planHref("Sklep internetowy")), "Sklep internetowy");
  assert.equal(planFromHash("#brief"), null);
  assert.equal(planFromHash("#faq?plan=x"), "x");
});
