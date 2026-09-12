import assert from "node:assert/strict";
import test from "node:test";
import {buildLeadMessage} from "../app/automatyzacje/lead-message.ts";

test("email draft contains the selected service, process and campaign source", () => {
  const draft = buildLeadMessage({name: "Anna", companyIndustry: "Usługi B2B", contact: "anna@example.test", service: "Audyt i plan usprawnień", volume: "100-500", process: "Oferty & dokumenty\nDwa systemy"}, "https://example.test/automatyzacje/?utm_source=youtube&utm_campaign=odcinek01&token=secret#konsultacja", "owner@example.test");
  assert.match(draft.body, /Audyt i plan usprawnień/);
  assert.match(draft.body, /Oferty & dokumenty\nDwa systemy/);
  assert.match(draft.source, /utm_source=youtube/);
  assert.doesNotMatch(draft.body, /secret|token=|#konsultacja/);
  const mail = new URL(draft.mailto);
  assert.equal(mail.protocol, "mailto:");
  assert.equal(mail.searchParams.get("body"), draft.body);
  assert.equal(mail.searchParams.get("subject"), draft.subject);
});

test("draft supports undecided clients without making up a service", () => {
  const draft = buildLeadMessage({}, "https://example.test/automatyzacje/", "owner@example.test");
  assert.match(draft.body, /Potrzeba: Nie wiem jeszcze/);
  assert.match(draft.body, /Liczba operacji miesięcznie: Nie wiem/);
  assert.doesNotMatch(draft.body, /undefined|null/);
});
