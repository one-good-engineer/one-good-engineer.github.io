// Renders the brand kit from one source of truth: the mark from public/favicon.svg,
// the site palette and Geist. Run: node docs/marka/generuj.mjs (needs playwright on the path).
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";

const out = new URL("./wyniki/", import.meta.url).pathname;
mkdirSync(out, { recursive: true });

const ink = "#08090a", paper = "#eef0e9", acid = "#c8ff62", muted = "#9aa09a";

// The mark: four tiles, one lit. One engineer, three agents ("& Co.").
const markSvg = (size, { tile = ink, lead = acid, line = paper, radius = 12, transparent = false } = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  ${transparent ? "" : `<rect width="64" height="64" rx="${radius}" fill="${tile}"/>`}
  <rect x="14" y="14" width="16" height="16" rx="3" fill="${lead}"/>
  <rect x="35" y="15" width="14" height="14" rx="3" fill="none" stroke="${line}" stroke-width="3"/>
  <rect x="15" y="35" width="14" height="14" rx="3" fill="none" stroke="${line}" stroke-width="3"/>
  <rect x="35" y="35" width="14" height="14" rx="3" fill="none" stroke="${line}" stroke-width="3"/>
</svg>`;

writeFileSync(`${out}znak-ciemny.svg`, markSvg(512));
writeFileSync(`${out}znak-jasny.svg`, markSvg(512, { tile: paper, lead: ink, line: ink }));
writeFileSync(`${out}znak-przezroczysty-na-ciemne.svg`, markSvg(512, { transparent: true }));
writeFileSync(`${out}znak-przezroczysty-na-jasne.svg`, markSvg(512, { transparent: true, lead: ink, line: ink }));

const css = `
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');
* { box-sizing: border-box; margin: 0; }
body { overflow: hidden; font-family: Geist, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
.c { position: relative; display: flex; flex-direction: column; background: ${ink}; color: ${paper}; overflow: hidden; }
.c.light { background: ${paper}; color: ${ink}; }
.glow { position: absolute; right: -10%; top: -30%; width: 60%; height: 120%; background: radial-gradient(closest-side, rgba(138,124,255,.22), transparent 70%); pointer-events: none; }
.c.light .glow { background: radial-gradient(closest-side, rgba(200,255,98,.55), transparent 70%); }
.brand { display: flex; align-items: center; gap: .55em; font-weight: 650; letter-spacing: -.03em; white-space: nowrap; }
.brand svg { height: 1.35em; width: 1.35em; flex: none; }
.brand i { font-style: normal; font-size: .62em; font-weight: 500; letter-spacing: 0; color: ${muted}; margin-left: -.15em; }
.c.light .brand i { color: #5f665f; }
.mono { font-family: 'Geist Mono', monospace; text-transform: uppercase; letter-spacing: .12em; color: ${muted}; }
.c.light .mono { color: #5f665f; }
h1 { font-weight: 700; letter-spacing: -.035em; line-height: 1.02; }
.acid { color: ${acid}; }
.c.light .acid { color: #3b6b00; }
.rule { border-top: 1px solid rgba(232,236,226,.16); }
.c.light .rule { border-top-color: rgba(8,9,10,.14); }
`;

const mark = (light) => (light ? markSvg(64, { transparent: true, lead: ink, line: ink }) : markSvg(64, { transparent: true }));
const brand = (light, size) => `<div class="brand" style="font-size:${size}px">${mark(light)}<span>One Good Engineer</span><i>&amp; Co.</i></div>`;

const shots = [
  // Logo lockups, transparent background, 2x for print and screen.
  ...[false, true].map((light) => ({
    name: `logo-poziome-${light ? "na-jasne" : "na-ciemne"}.png`, w: 1600, h: 400, transparent: true,
    html: `<div class="c ${light ? "light" : ""}" style="width:1600px;height:400px;background:transparent;justify-content:center;padding:0 60px">${brand(light, 112)}</div>`,
  })),
  // Square avatars: OLX, Google Business Profile logo (720 min 250), Facebook, LinkedIn.
  ...[400, 720, 1080].map((s) => ({
    name: `awatar-${s}.png`, w: s, h: s,
    html: `<div class="c" style="width:${s}px;height:${s}px;align-items:center;justify-content:center">${markSvg(Math.round(s * 0.62), { transparent: true })}</div>`,
  })),
  {
    name: "awatar-720-z-nazwa.png", w: 720, h: 720,
    html: `<div class="c" style="width:720px;height:720px;align-items:center;justify-content:center;gap:34px">${markSvg(300, { transparent: true })}<div style="font-size:44px;font-weight:650;letter-spacing:-.03em">One Good Engineer</div><div class="mono" style="font-size:18px">strony · sklepy · automatyzacje</div></div>`,
  },
  // Covers: Google Business Profile 1024x576, Facebook 820x312, LinkedIn 1584x396.
  {
    name: "google-okladka-1024x576.png", w: 1024, h: 576,
    html: `<div class="c" style="width:1024px;height:576px;padding:56px 64px"><div class="glow"></div>${brand(false, 30)}<h1 style="margin-top:auto;font-size:60px;max-width:900px">Strona firmowa w 48 godzin.<br>Sklep do 7 dni roboczych.</h1><div style="margin-top:22px;font-size:24px;color:${muted}">Jeden inżynier i załoga agentów. Kraków, zdalnie dla całej Polski.</div><div class="rule" style="margin-top:34px;padding-top:18px;display:flex;justify-content:space-between" ><span class="mono" style="font-size:15px">trzy wersje w 24 h · opieka w zgłoszeniach</span><span class="mono acid" style="font-size:15px;text-transform:none;letter-spacing:.04em">onegoodengineer.pl</span></div></div>`,
  },
  {
    name: "facebook-okladka-820x312.png", w: 820, h: 312,
    html: `<div class="c" style="width:820px;height:312px;padding:40px 48px;justify-content:center"><div class="glow"></div>${brand(false, 24)}<h1 style="margin-top:26px;font-size:44px;max-width:640px">Strona firmowa w 48 godzin, trzy wersje do wyboru w 24.</h1><div class="mono acid" style="margin-top:22px;font-size:14px;text-transform:none;letter-spacing:.04em">onegoodengineer.pl · Kraków</div></div>`,
  },
  {
    name: "linkedin-baner-1584x396.png", w: 1584, h: 396,
    html: `<div class="c" style="width:1584px;height:396px;padding:52px 72px;justify-content:center"><div class="glow"></div><div style="display:flex;align-items:flex-end;justify-content:space-between;gap:40px"><div><h1 style="font-size:62px;max-width:1000px">You don't need a software house.</h1><div style="margin-top:16px;font-size:26px;color:${muted}">One engineer running a crew of agents. Senior review on every change.</div></div>${brand(false, 30)}</div></div>`,
  },
  // Open Graph image for the site, host fixed to onegoodengineer.pl.
  {
    name: "og.png", w: 1200, h: 630,
    html: `<div class="c" style="width:1200px;height:630px;padding:56px 72px"><div class="glow"></div>${brand(false, 26)}<h1 style="margin-top:auto;font-size:76px;max-width:900px">You don't need a software house.</h1><div style="margin-top:18px;font-size:28px;color:${muted}">One engineer running a crew of agents.</div><div class="rule" style="margin-top:36px;padding-top:22px;display:flex;justify-content:space-between;align-items:baseline"><span style="font-size:20px"><span class="acid">●</span>&nbsp; Krystian Gwizdała, Kraków, working remotely</span><span class="mono" style="font-size:15px;text-transform:none;letter-spacing:.04em">onegoodengineer.pl</span></div></div>`,
  },
  {
    name: "og-pl.png", w: 1200, h: 630,
    html: `<div class="c" style="width:1200px;height:630px;padding:56px 72px"><div class="glow"></div>${brand(false, 26)}<h1 style="margin-top:auto;font-size:76px;max-width:980px">Nie potrzebujesz software house'u.</h1><div style="margin-top:18px;font-size:28px;color:${muted}">Jeden inżynier prowadzący załogę agentów.</div><div class="rule" style="margin-top:36px;padding-top:22px;display:flex;justify-content:space-between;align-items:baseline"><span style="font-size:20px"><span class="acid">●</span>&nbsp; Krystian Gwizdała, Kraków, zdalnie dla całej Polski</span><span class="mono" style="font-size:15px;text-transform:none;letter-spacing:.04em">onegoodengineer.pl</span></div></div>`,
  },
  // Email signature strip and a light variant of the lockup for invoices and documents.
  {
    name: "podpis-email-600x140.png", w: 600, h: 140,
    html: `<div class="c light" style="width:600px;height:140px;padding:0 28px;justify-content:center;gap:10px">${brand(true, 26)}<div style="font-size:15px;color:#5f665f">Krystian Gwizdała · strony, sklepy i automatyzacje dla firm · Kraków<br><span class="acid" style="font-weight:600">onegoodengineer.pl</span></div></div>`,
  },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.w, height: s.h }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body style="width:${s.w}px;height:${s.h}px;background:${s.transparent ? "transparent" : ink}">${s.html}</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${out}${s.name}`, omitBackground: !!s.transparent });
  await page.close();
  console.log(s.name);
}
await browser.close();
