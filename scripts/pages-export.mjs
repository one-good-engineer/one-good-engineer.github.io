// GitHub Pages serves /pl/ from pl/index.html, but vinext exports each route as pl.html.
// The sitemap is generated here too, so a new route cannot be forgotten in it, and every
// entry carries the date of the last commit that touched the files it renders from.
import { execFileSync } from "node:child_process";
import { copyFile, mkdir, readdir, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

import { SITE } from "../app/site.ts";
const root = new URL("../dist/client/", import.meta.url).pathname;
const sharedSources = ["app/SiteChrome.tsx", "app/layout.tsx", "app/globals.css"];
const routeSources = {
  "": ["app/page.tsx", "app/LandingPage.tsx"],
  pl: ["app/pl/page.tsx", "app/LandingPage.tsx"],
  "pl/automatyzacje": ["app/pl/automatyzacje"],
  websites: ["app/websites", "app/OfferPage.tsx", "app/lead"],
  "pl/strony": ["app/pl/strony", "app/OfferPage.tsx", "app/lead"],
};

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith(".html")) yield path;
  }
}

const routes = [""];
for await (const file of htmlFiles(root)) {
  const route = relative(root, file).slice(0, -".html".length);
  if (route === "index" || route === "404" || route.endsWith("/index")) continue;
  await mkdir(join(root, route), { recursive: true });
  await copyFile(file, join(root, route, "index.html"));
  routes.push(route);
}

const lastCommitDate = (paths) =>
  execFileSync("git", ["log", "-1", "--format=%cs", "--", ...paths], { encoding: "utf8" }).trim();

const unknown = routes.filter((route) => !(route in routeSources));
if (unknown.length) throw new Error(`Add these routes to routeSources in scripts/pages-export.mjs: ${unknown.join(", ")}`);

const entries = Object.keys(routeSources)
  .filter((route) => routes.includes(route))
  .map((route) => {
    const lastmod = lastCommitDate([...routeSources[route], ...sharedSources]);
    return `  <url>\n    <loc>${SITE}/${route ? `${route}/` : ""}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  });
await writeFile(
  join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`,
);
await writeFile(join(root, ".nojekyll"), "");
