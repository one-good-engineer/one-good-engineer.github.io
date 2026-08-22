import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../dist/client/", import.meta.url);

test("exports the English and Polish pages for GitHub Pages", async () => {
  const [english, polish] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("pl/index.html", root), "utf8"),
  ]);

  assert.match(english, /Production AI for software/);
  assert.match(english, /AptLayer/);
  assert.match(english, /hreflang="pl"/i);
  assert.match(polish, /Produkcyjne AI dla aplikacji/);
  assert.match(polish, /Krystian Gwizdała/);
  assert.match(polish, /hreflang="en"/i);
});

test("ships machine-readable discovery and social assets", async () => {
  const [robots, llms, sitemap] = await Promise.all([
    readFile(new URL("robots.txt", root), "utf8"),
    readFile(new URL("llms.txt", root), "utf8"),
    readFile(new URL("sitemap.xml", root), "utf8"),
  ]);

  assert.match(robots, /Allow: \/\n/);
  assert.match(llms, /Model Context Protocol/);
  assert.match(sitemap, /hreflang="pl"/);
  await access(new URL("og.png", root));
  await access(new URL("favicon.svg", root));
  await access(new URL(".nojekyll", root));
});

test("does not retain starter preview metadata or content", async () => {
  const english = await readFile(new URL("index.html", root), "utf8");
  assert.doesNotMatch(english, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});
