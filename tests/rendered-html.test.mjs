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

test("exports the English and Polish pages for GitHub Pages", async () => {
  const [english, polish] = await readPages();

  assert.match(english, /You don't need a software house/);
  assert.match(english, /Krystian Gwizdała/);
  assert.match(english, /hreflang="pl"/i);
  assert.match(polish, /Nie potrzebujesz software house/);
  assert.match(polish, /Krystian Gwizdała/);
  assert.match(polish, /hreflang="en"/i);
});

test("carries the One Good Engineer brand and no trace of the old one", async () => {
  const [english, polish] = await readPages();

  for (const page of [english, polish]) {
    assert.match(page, /One Good Engineer/);
    assert.doesNotMatch(page, /AptLayer/i);
  }
});

test("points every canonical, sitemap and robots entry at the live host", async () => {
  const [english, polish] = await readPages();
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("robots.txt", root), "utf8"),
    readFile(new URL("sitemap.xml", root), "utf8"),
  ]);

  assert.match(english, new RegExp(`rel="canonical" href="${SITE}"`));
  assert.match(polish, new RegExp(`rel="canonical" href="${SITE}/pl/"`));
  assert.match(robots, new RegExp(`Sitemap: ${SITE}/sitemap\\.xml`));
  assert.match(sitemap, /hreflang="pl"/);
  assert.doesNotMatch(sitemap, /aptlayer/i);
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
  const [english, polish] = await readPages();
  const bodyOf = (page) => page.slice(page.indexOf("<body"));

  for (const page of [english, polish]) {
    assert.doesNotMatch(bodyOf(page), /[—–]/);
  }
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
