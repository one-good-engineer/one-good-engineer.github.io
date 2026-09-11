import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../dist/client/", import.meta.url);
const SITE = "https://one-good-engineer.github.io";
const readPages = () =>
  Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("pl/index.html", root), "utf8"),
  ]);
const readAutomation = () => readFile(new URL("pl/automatyzacje/index.html", root), "utf8");
const readOfferPages = () =>
  Promise.all([
    readFile(new URL("websites/index.html", root), "utf8"),
    readFile(new URL("pl/strony/index.html", root), "utf8"),
  ]);

test("exports the English and Polish pages for GitHub Pages", async () => {
  const [english, polish] = await readPages();

  assert.match(english, /You don't need a software house/);
  assert.match(english, /Krystian Gwizdała/);
  assert.match(english, /hreflang="pl"/i);
  assert.match(polish, /Nie potrzebujesz software house/);
  assert.match(polish, /Krystian Gwizdała/);
  assert.match(polish, /hreflang="en"/i);
});

test("exports the Polish automation offer with a diagnostic form", async () => {
  const [polish, automation] = await Promise.all([
    readFile(new URL("pl/index.html", root), "utf8"),
    readAutomation(),
  ]);

  assert.match(polish, /href="\/pl\/automatyzacje\/"/);
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
  const [english, polish] = await readPages();

  for (const page of [english, polish]) {
    assert.match(page, /One Good Engineer/);
    assert.doesNotMatch(page, /AptLayer/i);
  }
});

test("points every canonical, sitemap and robots entry at the live host", async () => {
  const [english, polish, automation] = await Promise.all([...await readPages(), readAutomation()]);
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("robots.txt", root), "utf8"),
    readFile(new URL("sitemap.xml", root), "utf8"),
  ]);

  assert.match(english, new RegExp(`rel="canonical" href="${SITE}"`));
  assert.match(polish, new RegExp(`rel="canonical" href="${SITE}/pl/"`));
  assert.match(automation, new RegExp(`rel="canonical" href="${SITE}/pl/automatyzacje/"`));
  assert.match(robots, new RegExp(`Sitemap: ${SITE}/sitemap\\.xml`));
  assert.match(sitemap, new RegExp(`${SITE}/pl/automatyzacje/`));
  assert.doesNotMatch(sitemap, /aptlayer/i);
});

test("exports a browser-readable XML sitemap with every public page exactly once", async () => {
  const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");

  // XHTML elements disable the browser's native XML tree viewer. Language
  // alternates belong in the HTML head instead; do not duplicate them here.
  assert.doesNotMatch(sitemap, /xhtml|<\?xml-stylesheet/i);
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>\s*<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">(?:\s*<url>\s*<loc>https:\/\/[^<>&\s]+<\/loc>\s*<\/url>)+\s*<\/urlset>\s*$/);
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations, [`${SITE}/`, `${SITE}/pl/`, `${SITE}/pl/automatyzacje/`, `${SITE}/websites/`, `${SITE}/pl/strony/`]);
  for (const location of locations) {
    await access(new URL(`${new URL(location).pathname.slice(1)}index.html`, root));
  }
});

test("retains language alternates in each page head without relying on the sitemap", async () => {
  const pages = [...await readPages(), await readAutomation()];
  const alternatives = [
    { en: SITE, pl: `${SITE}/pl/`, "x-default": SITE },
    { en: SITE, pl: `${SITE}/pl/`, "x-default": SITE },
    { pl: `${SITE}/pl/automatyzacje/`, "x-default": `${SITE}/pl/automatyzacje/` },
  ];
  for (const [index, page] of pages.entries()) {
    const head = page.slice(0, page.indexOf("</head>"));
    for (const [language, href] of Object.entries(alternatives[index])) {
      assert.ok(head.includes(`rel="alternate" hrefLang="${language}" href="${href}"`), `${language}: ${href}`);
    }
  }
});

test("shows every case study as a real screenshot, not a decoration", async () => {
  const [english, polish] = await readPages();
  const shots = ["agent-rynku", "let-agents-in", "meet-live-assist", "muster"];

  for (const shot of shots) {
    await access(new URL(`work/${shot}.webp`, root));
    assert.match(english, new RegExp(`/work/${shot}\\.webp`));
    assert.match(polish, new RegExp(`/work/${shot}\\.webp`));
  }
});

test("describes the delivery loop with the human review step intact", async () => {
  const [english, polish] = await readPages();

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
  const [home, homePl] = await readPages();

  assert.match(english, /Three versions of your website in 48 hours/);
  assert.match(english, new RegExp(`rel="canonical" href="${SITE}/websites/"`));
  assert.match(english, /hreflang="pl" href="[^"]*\/pl\/strony\/"/i);
  assert.match(polish, /Trzy wersje Twojej strony w 48 godzin/);
  assert.match(polish, new RegExp(`rel="canonical" href="${SITE}/pl/strony/"`));
  assert.match(polish, /hreflang="en" href="[^"]*\/websites\/"/i);
  assert.match(home, /href="\/websites\/"/);
  assert.match(homePl, /href="\/pl\/strony\/"/);
});

test("prints the same prices on the offer page, in llms.txt and in the structured data", async () => {
  const [english, polish] = await readOfferPages();
  const llms = await readFile(new URL("llms.txt", root), "utf8");
  const prices = ["2 990", "7 900", "1 490", "290", "590", "990"];

  for (const price of prices) {
    assert.match(english, new RegExp(`${price} PLN`));
    assert.match(polish, new RegExp(`${price} zł`));
    assert.match(llms, new RegExp(`${price} PLN`));
  }
  for (const page of [english, polish]) {
    const schema = JSON.parse(page.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema["@type"], "Service");
    assert.deepEqual(schema.offers.map((offer) => offer.price), [2990, 7900, 1490, 290, 590, 990]);
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

test("starts the brief inside the mailto link so the first reply already carries the answers", async () => {
  const [english, polish] = await readOfferPages();

  assert.match(english, /mailto:[^"]*subject=Website%20brief&(amp;)?body=1\.%20Company%20name/);
  assert.match(polish, /mailto:[^"]*subject=Brief%20strony&(amp;)?body=1\.%20Nazwa%20firmy/);
});

test("ships machine-readable discovery and social assets", async () => {
  const [llms, english] = await Promise.all([
    readFile(new URL("llms.txt", root), "utf8"),
    readFile(new URL("index.html", root), "utf8"),
  ]);

  assert.match(llms, /Model Context Protocol/);
  for (const product of ["Agent Rynku", "Let Agents In", "Meet Live Assist", "Muster"]) {
    assert.match(llms, new RegExp(product));
  }
  assert.match(english, /og:image:width" content="1200"/);
  assert.match(english, /og:image:height" content="630"/);
  await access(new URL("og.png", root));
  await access(new URL("favicon.svg", root));
  await access(new URL(".nojekyll", root));
});

test("does not retain starter preview metadata or content", async () => {
  const english = await readFile(new URL("index.html", root), "utf8");
  assert.doesNotMatch(english, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});
