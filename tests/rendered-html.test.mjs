import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../dist/client/", import.meta.url);
import { SITE } from "../app/site.ts";
const readPages = () =>
  Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("en/index.html", root), "utf8"),
  ]);
const readAutomation = () => readFile(new URL("automatyzacje/index.html", root), "utf8");
const readOfferPages = () =>
  Promise.all([
    readFile(new URL("en/websites/index.html", root), "utf8"),
    readFile(new URL("strony/index.html", root), "utf8"),
  ]);

test("exports the Polish and English pages for GitHub Pages", async () => {
  const [polish, english] = await readPages();

  assert.match(english, /You don't need a software house/);
  assert.match(english, /Krystian Gwizdała/);
  assert.match(english, /hreflang="pl"/i);
  assert.match(polish, /Nie potrzebujesz software house/);
  assert.match(polish, /Krystian Gwizdała/);
  assert.match(polish, /hreflang="en"/i);
});

test("exports the Polish automation offer with a diagnostic form", async () => {
  const [polish, automation] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readAutomation(),
  ]);

  assert.match(polish, /href="\/automatyzacje\/"/);
  assert.match(automation, /Porządkuję procesy i automatyzuję pracę między systemami/);
  assert.match(automation, /name="companyIndustry"/);
  assert.match(automation, /name="contact"/);
  assert.match(automation, /name="process"/);
  assert.match(automation, /name="volume"/);
  assert.match(automation, /name="service"/);
});

test("describes four process areas and three separately purchasable services", async () => {
  const page = await readAutomation();
  for (const label of ["Realizacja usług i zleceń", "Dokumenty i administracja", "Raportowanie i integracje", "Audyt i plan usprawnień", "Wdrożenie i integracje", "Przegląd i plan napraw", "Samodzielna, płatna usługa", "opieka jest opcjonalna"]) assert.ok(page.includes(label), label);
  assert.doesNotMatch(page, /0<\/strong><span>uzależnienia|nie bezpłatny warsztat/);
  assert.match(page, /audyt procesów/i);
});

test("ships a real demo and downloadable materials with explicit limits", async () => {
  const page = await readAutomation();
  assert.match(page, /<video[^>]*controls/);
  assert.match(page, /preload="none"/);
  assert.match(page, /Demonstracja na fikcyjnych danych, nie wdrożenie klienta/);
  assert.match(page, /Bez klasyfikacji AI, pełnego CRM i follow-upów/);
  for (const file of ["media/formularz-demo.mp4", "media/formularz-poster.png", "media/formularz-demo.vtt", "materialy/formularz-baza-email.json", "materialy/formularz-instrukcja.txt"]) await access(new URL(file, root));
  const workflow = await readFile(new URL("materialy/formularz-baza-email.json", root), "utf8");
  assert.doesNotMatch(workflow, /"credentials"|"password"|"apiKey"/i);
  assert.ok(JSON.parse(workflow).nodes.length > 0);
});

test("contact form submits to Formspree without opening an email client", async () => {
  const page = await readAutomation();
  assert.match(page, /Wyślij opis procesu/);
  assert.match(page, /action="https:\/\/formspree.io\/f\/xnogenpm" method="POST"/);
  assert.match(page, /name="_gotcha"/);
  assert.doesNotMatch(page, /Przygotuj wiadomość|Otwórz pocztę|Kopiuj wiadomość/);
  assert.doesNotMatch(page, /Ten formularz przygotowuje wiadomość do|Niczego nie wysyła ani nie zapisuje automatycznie/);
  assert.doesNotMatch(page, /Zapytanie zostało zapisane/);
});

test("carries the One Good Engineer brand and no trace of the old one", async () => {
  const [polish, english] = await readPages();

  for (const page of [english, polish]) {
    assert.match(page, /One Good Engineer/);
    assert.doesNotMatch(page, /AptLayer/i);
  }
});

test("points every canonical, sitemap and robots entry at the live host", async () => {
  const [polish, english, automation] = await Promise.all([...await readPages(), readAutomation()]);
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("robots.txt", root), "utf8"),
    readFile(new URL("sitemap.xml", root), "utf8"),
  ]);

  assert.match(polish, new RegExp(`rel="canonical" href="${SITE}"`));
  assert.match(english, new RegExp(`rel="canonical" href="${SITE}/en/"`));
  assert.match(automation, new RegExp(`rel="canonical" href="${SITE}/automatyzacje/"`));
  assert.match(robots, new RegExp(`Sitemap: ${SITE}/sitemap\\.xml`));
  assert.match(sitemap, new RegExp(`${SITE}/automatyzacje/`));
  assert.doesNotMatch(sitemap, /aptlayer/i);
});

test("exports a browser-readable XML sitemap with every public page exactly once", async () => {
  const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");

  // XHTML elements disable the browser's native XML tree viewer. Language
  // alternates belong in the HTML head instead; do not duplicate them here.
  assert.doesNotMatch(sitemap, /xhtml|<\?xml-stylesheet/i);
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>\s*<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">(?:\s*<url>\s*<loc>https:\/\/[^<>&\s]+<\/loc>\s*<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>\s*<\/url>)+\s*<\/urlset>\s*$/);
  for (const lastmod of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
    assert.ok(Date.parse(lastmod[1]) <= Date.now(), `lastmod ${lastmod[1]} is in the future`);
  }
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, [`${SITE}/`, `${SITE}/en/`, `${SITE}/en/websites/`, `${SITE}/strony/`, `${SITE}/automatyzacje/`]);
  for (const location of locations) {
    await access(new URL(`${new URL(location).pathname.slice(1)}index.html`, root));
  }
});

test("retains language alternates in each page head without relying on the sitemap", async () => {
  const pages = [...await readPages(), await readAutomation(), ...await readOfferPages()];
  const alternatives = [
    { en: `${SITE}/en/`, pl: SITE, "x-default": SITE },
    { en: `${SITE}/en/`, pl: SITE, "x-default": SITE },
    { pl: `${SITE}/automatyzacje/`, "x-default": `${SITE}/automatyzacje/` },
  ];
  for (const [index, page] of pages.entries()) {
    const head = page.slice(0, page.indexOf("</head>"));
    for (const [language, href] of Object.entries(alternatives[index])) {
      assert.ok(head.includes(`rel="alternate" hrefLang="${language}" href="${href}"`), `${language}: ${href}`);
    }
  }
});

test("shows every case study as a real screenshot, not a decoration", async () => {
  const [polish, english] = await readPages();
  const shots = ["agent-rynku", "let-agents-in", "meet-live-assist", "muster"];

  for (const shot of shots) {
    await access(new URL(`work/${shot}.webp`, root));
    assert.match(english, new RegExp(`/work/${shot}\\.webp`));
    assert.match(polish, new RegExp(`/work/${shot}\\.webp`));
  }
});

test("describes the delivery loop with the human review step intact", async () => {
  const [polish, english] = await readPages();

  assert.match(english, /how a change reaches production/);
  assert.match(english, /I read it, and I sign it/);
  assert.match(polish, /jak zmiana trafia na produkcję/);
  assert.match(polish, /czytam i podpisuję/);
  for (const page of [english, polish]) {
    assert.doesNotMatch(page, /€0\.014|quality<\/span><strong>0\.96/);
  }
});

test("keeps the copy free of em dashes and en dashes", async () => {
  const pages = [...(await readPages()), ...(await readOfferPages()), await readAutomation()];
  const bodyOf = (page) => page.slice(page.indexOf("<body"));

  for (const page of pages) {
    assert.doesNotMatch(bodyOf(page), /[—–]/);
  }
});

test("exports the offer page in both languages as directory indexes with cross links", async () => {
  const [english, polish] = await readOfferPages();
  const [homePl, home] = await readPages();

  assert.match(english, /A website that earns its keep/);
  assert.match(english, new RegExp(`rel="canonical" href="${SITE}/en/websites/"`));
  assert.match(english, /hreflang="pl" href="[^"]*\/strony\/"/i);
  assert.match(polish, /Strona, która pomaga sprzedawać/);
  assert.match(polish, new RegExp(`rel="canonical" href="${SITE}/strony/"`));
  assert.match(polish, /hreflang="en" href="[^"]*\/en\/websites\/"/i);
  assert.match(home, /href="\/en\/websites\/"/);
  assert.match(homePl, /href="\/strony\/"/);
});

test("presents the full-service offer and SEO language in both locales", async () => {
  const [english, polish] = await readOfferPages();
  for (const page of [english, polish]) {
    assert.match(page, /full pack|Pełna obsługa/);
    assert.match(page, /SEO/);
    assert.match(page, /hosting/i);
    assert.match(page, /domain|domen/i);
  }
  assert.match(english, /A complete website service for businesses in Poland/);
  assert.match(polish, /Pełna obsługa strony dla firmy/);
});

test("prints the same prices on the offer page, in llms.txt and in the structured data", async () => {
  const [english, polish] = await readOfferPages();
  const llms = await readFile(new URL("llms.txt", root), "utf8");
  const prices = ["990", "2 990", "7 900", "1 490", "290", "590"];

  for (const price of prices) {
    assert.match(english, new RegExp(`${price} PLN`));
    assert.match(polish, new RegExp(`${price} zł`));
    assert.match(llms, new RegExp(`${price} PLN`));
  }
  for (const page of [english, polish]) {
    const schema = JSON.parse(page.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema["@type"], "Service");
    assert.deepEqual(schema.offers.map((offer) => offer.price), [990, 2990, 7900, 1490, 290, 590, 990]);
  }
});

test("sells the care plan by request, never by the hour or the token", async () => {
  const [english, polish] = await readOfferPages();
  const llms = await readFile(new URL("llms.txt", root), "utf8");

  assert.match(english, /one request at a time/);
  assert.match(polish, /jedno zgłoszenie naraz/);
  assert.match(llms, /one request at a time/);
  for (const page of [english, polish, llms]) {
    assert.doesNotMatch(page, /hours? of changes|godzin(y)? zmian|PLN per (hour|token)|zł za (godzinę|token)/i);
  }
});

test("renders the brief form on both offer pages, posting to the shared Formspree address", async () => {
  const [english, polish] = await readOfferPages();
  const automation = await readAutomation();

  for (const page of [english, polish, automation]) {
    assert.match(page, /<form class="lead-form"[^>]*action="https:\/\/formspree\.io\/f\/xnogenpm" method="POST"/);
    assert.match(page, /name="_gotcha"/);
  }
  for (const page of [english, polish]) {
    assert.equal((page.match(/<(input|select|textarea) [^>]*name="(?!_gotcha)/g) || []).length, 4, "four fields, the rest is asked in the reply");
  }
  assert.match(polish, /href="#brief\?plan=Sklep%20internetowy"/);
  assert.match(polish, /href="#brief\?plan=Rozw%C3%B3j"/);
  assert.match(polish, /<option>Audyt zgodności sklepu<\/option>/);
  assert.match(polish, /<option>Sklep<\/option>/);
  assert.doesNotMatch(polish, /mailto:[^"]*body=/);
});

test("links the two Polish offers to each other and both to the shared chrome", async () => {
  const [, polish] = await readOfferPages();
  const automation = await readAutomation();

  assert.match(polish, /href="\/automatyzacje\/"/);
  assert.match(automation, /href="\/strony\/"/);
  assert.match(automation, /href="\/strony\/#care"/);
  for (const page of [polish, automation]) {
    assert.equal((page.match(/class="mark" aria-hidden="true"/g) || []).length, 2, "one mark in the header, one in the footer");
  }
});

test("ships machine-readable discovery and social assets", async () => {
  const [llms, polish] = await Promise.all([
    readFile(new URL("llms.txt", root), "utf8"),
    readFile(new URL("index.html", root), "utf8"),
  ]);

  assert.match(llms, /Model Context Protocol/);
  for (const product of ["Agent Rynku", "Let Agents In", "Meet Live Assist", "Muster"]) {
    assert.match(llms, new RegExp(product));
  }
  assert.match(polish, /og:image:width" content="1200"/);
  assert.match(polish, /og:image:height" content="630"/);
  await access(new URL("og.png", root));
  await access(new URL("favicon.svg", root));
  await access(new URL(".nojekyll", root));
});

test("exports old paths as noindex redirects and excludes them from the sitemap", async () => {
  const redirects = {
    "pl/index.html": `${SITE}/`,
    "pl/strony/index.html": `${SITE}/strony/`,
    "pl/automatyzacje/index.html": `${SITE}/automatyzacje/`,
    "websites/index.html": `${SITE}/en/websites/`,
  };
  const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");

  for (const [path, url] of Object.entries(redirects)) {
    const page = await readFile(new URL(path, root), "utf8");
    assert.match(page, new RegExp(`<meta http-equiv="refresh" content="0; url=${url}">`));
    assert.match(page, /<meta name="robots" content="noindex">/);
    assert.doesNotMatch(sitemap, new RegExp(`<loc>${SITE}/${path.replace("index.html", "")}</loc>`));
  }
});

test("does not retain starter preview metadata or content", async () => {
  const polish = await readFile(new URL("index.html", root), "utf8");
  assert.doesNotMatch(polish, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});
