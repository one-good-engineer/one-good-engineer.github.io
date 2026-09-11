// GitHub Pages serves /pl/ from pl/index.html, but vinext exports each route as pl.html.
import { copyFile, mkdir, readdir, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const root = new URL("../dist/client/", import.meta.url).pathname;

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith(".html")) yield path;
  }
}

for await (const file of htmlFiles(root)) {
  const route = relative(root, file).slice(0, -".html".length);
  if (route === "index" || route === "404" || route.endsWith("/index")) continue;
  await mkdir(join(root, route), { recursive: true });
  await copyFile(file, join(root, route, "index.html"));
}
await writeFile(join(root, ".nojekyll"), "");
