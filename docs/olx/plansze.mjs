import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const out = new URL("./plansze/", import.meta.url).pathname;
mkdirSync(out, { recursive: true });

const css = `
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');
* { box-sizing: border-box; margin: 0; }
:root { --ink:#08090a; --panel:#15181a; --paper:#eef0e9; --muted:#9aa09a; --acid:#c8ff62; --line:rgba(232,236,226,.16); }
body { width:1200px; height:900px; overflow:hidden; font-family: Geist, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
.card { position:relative; width:1200px; height:900px; padding:64px 72px; display:flex; flex-direction:column; background:var(--ink); color:var(--paper); }
.card.light { background:var(--paper); color:var(--ink); --muted:#5f665f; --line:rgba(8,9,10,.14); --panel:#e2e5dc; }
.grid { position:absolute; inset:0; background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px); background-size: 120px 120px; opacity:.35; pointer-events:none; }
.top { display:flex; justify-content:space-between; align-items:center; font-family:'Geist Mono', monospace; font-size:18px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); }
.brand { display:flex; align-items:center; gap:14px; color:inherit; }
.mark { width:22px; height:22px; border-radius:50%; background:var(--acid); box-shadow: 0 0 0 6px rgba(200,255,98,.18); }
.card.light .mark { box-shadow: 0 0 0 6px rgba(8,9,10,.10); background:var(--ink); }
.kicker { margin-top:56px; font-family:'Geist Mono', monospace; font-size:22px; letter-spacing:.14em; text-transform:uppercase; color:var(--acid); }
.card.light .kicker { color:#3b6b00; }
h1 { margin-top:18px; font-size:84px; line-height:1.02; font-weight:700; letter-spacing:-.03em; max-width:1000px; }
h1.s { font-size:68px; }
.price { margin-top:auto; display:flex; flex-wrap:wrap; align-items:baseline; gap:8px 18px; }
.price b { white-space:nowrap; font-size:110px; line-height:1; font-weight:700; letter-spacing:-.04em; color:var(--acid); }
.card.light .price b { color:var(--ink); }
.price span { font-size:30px; color:var(--muted); }
.chips { display:flex; gap:14px; flex-wrap:wrap; margin-top:34px; }
.chips span { border:1px solid var(--line); border-radius:999px; padding:14px 22px; font-family:'Geist Mono', monospace; font-size:21px; color:var(--paper); background:var(--panel); }
.card.light .chips span { color:var(--ink); }
.steps { margin-top:48px; display:grid; grid-template-columns:1fr 1fr; gap:22px; }
.step { border:1px solid var(--line); background:var(--panel); border-radius:18px; padding:28px 30px; min-height:200px; }
.step i { display:block; font-style:normal; font-family:'Geist Mono', monospace; font-size:20px; color:var(--acid); letter-spacing:.1em; }
.card.light .step i { color:#3b6b00; }
.step b { display:block; margin-top:14px; font-size:34px; line-height:1.15; font-weight:600; letter-spacing:-.02em; }
.step p { margin-top:10px; font-size:22px; line-height:1.35; color:var(--muted); }
ul { margin-top:44px; list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:14px 40px; }
ul.one { grid-template-columns:1fr; }
li { font-size:32px; line-height:1.3; padding-left:44px; position:relative; letter-spacing:-.01em; }
li::before { content:""; position:absolute; left:0; top:16px; width:22px; height:22px; border-radius:50%; background:var(--acid); }
.card.light li::before { background:var(--ink); }
.foot { margin-top:auto; display:flex; justify-content:space-between; font-family:'Geist Mono', monospace; font-size:20px; color:var(--muted); letter-spacing:.06em; }
.foot b { color:var(--acid); font-weight:500; }
.card.light .foot b { color:var(--ink); }
.big { margin-top:auto; font-size:150px; font-weight:700; letter-spacing:-.05em; line-height:.95; color:var(--acid); }
.card.light .big { color:var(--ink); }
.sub { margin-top:18px; font-size:34px; color:var(--muted); max-width:900px; line-height:1.3; }
`;

const markSvg = (lead, line) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="width:34px;height:34px"><rect x="14" y="14" width="16" height="16" rx="3" fill="${lead}"/><rect x="35" y="15" width="14" height="14" rx="3" fill="none" stroke="${line}" stroke-width="3"/><rect x="15" y="35" width="14" height="14" rx="3" fill="none" stroke="${line}" stroke-width="3"/><rect x="35" y="35" width="14" height="14" rx="3" fill="none" stroke="${line}" stroke-width="3"/></svg>`;
const top = (light) => `<div class="grid"></div><div class="top"><div class="brand">${light ? markSvg("#08090a", "#08090a") : markSvg("#c8ff62", "#eef0e9")}One Good Engineer</div><div>Kraków · cała Polska</div></div>`;
const foot = (right = "faktura VAT") => `<div class="foot"><span><b>onegoodengineer.pl</b></span><span>${right}</span></div>`;

const main = ({ kicker, title, price, unit, chips, small }) => `<div class="card">${top()}
<div class="kicker">${kicker}</div><h1 class="${small ? "s" : ""}">${title}</h1>
<div class="price"><b>${price}</b><span>${unit}</span></div>
<div class="chips">${chips.map((c) => `<span>${c}</span>`).join("")}</div></div>`;

const steps = ({ kicker, title, items, light }) => `<div class="card ${light ? "light" : ""}">${top(light)}
<div class="kicker">${kicker}</div><h1 class="s">${title}</h1>
<div class="steps">${items.map(([i, b, p]) => `<div class="step"><i>${i}</i><b>${b}</b><p>${p}</p></div>`).join("")}</div>${foot()}</div>`;

const list = ({ kicker, title, items, light, one, right }) => `<div class="card ${light ? "light" : ""}">${top(light)}
<div class="kicker">${kicker}</div><h1 class="s">${title}</h1>
<ul class="${one ? "one" : ""}">${items.map((i) => `<li>${i}</li>`).join("")}</ul>${foot(right)}</div>`;

const stat = ({ kicker, big, sub, light }) => `<div class="card ${light ? "light" : ""}">${top(light)}
<div class="kicker">${kicker}</div><div class="big">${big}</div><div class="sub">${sub}</div>${foot()}</div>`;

const proces = steps({
  kicker: "Jak to wygląda",
  title: "Od briefu do publikacji",
  items: [
    ["01 · brief", "Cztery pola, minuta", "Dziesięć pytań doprecyzowujących dostajesz mailem."],
    ["02 · 24 godziny", "Trzy wersje do wyboru", "Nie makiety: klikalne strony, każda inna."],
    ["03 · 48 godzin", "Strona online", "Od wyboru wersji i otrzymania materiałów."],
    ["04 · po wdrożeniu", "Opieka w zgłoszeniach", "Drobne zmiany bez limitu, jedno zgłoszenie naraz."],
  ],
});

const ktoRobi = list({
  kicker: "Kto to robi",
  title: "Jeden inżynier i załoga agentów",
  light: true,
  one: true,
  items: [
    "Ponad dziesięć lat w zespołach produktowych",
    "Agenty AI robią powtarzalną robotę, stąd trzy wersje w 24 h",
    "Każdą zmianę sprawdza i podpisuje człowiek",
    "Wiesz, z kim rozmawiasz i kto odpowiada za efekt",
  ],
});

const ads = {
  "1-strona": [
    main({ kicker: "Strona internetowa dla firmy", title: "Trzy wersje w 24 godziny, online w 48 godzin", price: "od 2 990 zł", unit: "netto · wizytówka one page 990 zł", chips: ["3 wersje do wyboru", "online w 48 h od wyboru", "RODO i WCAG", "faktura VAT"] }),
    proces,
    list({ kicker: "Co dostajesz", title: "Strona firmowa, w cenie", items: ["Kilka podstron i aktualności", "Wersja na telefon, tablet i komputer", "Formularz, telefon, mapa, social media", "Podstawowe SEO i wizytówka Google", "Pomoc w tekstach i zdjęciach", "Domena, hosting, certyfikat SSL", "Zgodność z RODO i dostępnością WCAG", "Szybka, bez wtyczek do łamania"], light: true }),
    ktoRobi,
  ],
  "2-sklep": [
    main({ kicker: "Sklep internetowy", title: "Zgodny z Omnibusem i WCAG, gotowy do sprzedaży", price: "od 7 900 zł", unit: "netto", chips: ["3 wersje w 24 h", "online do 7 dni roboczych", "Omnibus i WCAG", "faktura VAT"] }),
    list({ kicker: "Co dostajesz", title: "Sklep, w cenie", items: ["Do 200 produktów z Twojego pliku", "Przelewy24, PayU lub Stripe, InPost albo kurier", "Historia cen zgodnie z Omnibusem", "Dostępność WCAG (ustawa od czerwca 2025)", "Faktury, regulaminy, RODO, cookies", "BaseLinker, Allegro i ERP jako stałe dodatki", "Wersja na telefon", "Szkolenie z obsługi"], light: true }),
    proces,
    stat({ kicker: "Opieka nad sklepem", big: "990 zł/mc", sub: "Drobne zmiany bez limitu, aktualizacje, kopie, monitoring, jeden kontakt. Rozliczane w zgłoszeniach, nie w godzinach." }),
  ],
  "3-audyt": [
    main({ kicker: "Audyt zgodności strony lub sklepu", title: "Omnibus, dostępność WCAG, RODO, szybkość", price: "1 490 zł", unit: "netto · lista poprawek z priorytetami", chips: ["raport do 2 dni roboczych", "koszt odliczany od poprawek", "poprawki zleć komukolwiek"], small: true }),
    list({ kicker: "Co sprawdzam", title: "Sześć obszarów, jeden raport", items: ["Dyrektywa Omnibus: historia cen, opinie", "Dostępność WCAG 2.1 AA (ustawa EAA)", "RODO, polityka prywatności, cookies", "Regulaminy, odstąpienie, reklamacje", "Szybkość i Core Web Vitals", "Widoczność w Google i dla agentów AI"], light: true }),
    steps({ kicker: "Co dostajesz", title: "Raport, z którym da się pracować", items: [["01", "Lista braków", "Każdy z odniesieniem do przepisu lub kryterium."], ["02", "Priorytety", "Co grozi karą, co blokuje klientów, co jest kosmetyką."], ["03", "Wycena poprawek", "Możesz zlecić mnie albo komukolwiek innemu."], ["04", "Odliczenie", "Koszt audytu odliczam, jeśli zamówisz naprawę u mnie."]] }),
  ],
  "4-opieka": [
    main({ kicker: "Opieka nad stroną lub sklepem", title: "Drobne zmiany bez limitu, rozliczane w zgłoszeniach", price: "od 290 zł", unit: "miesięcznie netto", chips: ["bez limitu godzin", "tego samego dnia", "jedno zgłoszenie naraz", "bez umowy na lata"] }),
    steps({ kicker: "Trzy plany", title: "Opieka, Rozwój, Sklep", light: true, items: [["Opieka · 290 zł/mc", "Strona firmowa", "Drobne zmiany, aktualizacje, kopie, monitoring."], ["Rozwój · 590 zł/mc", "Strona, która rośnie", "Do tego nowe podstrony i sekcje co miesiąc."], ["Sklep · 990 zł/mc", "Sklep internetowy", "Produkty, promocje, integracje, Omnibus."], ["Zasada", "Drobna zmiana", "Publikowana tego samego dnia roboczego. Większe wyceniam osobno."]] }),
    list({ kicker: "Dlaczego zgłoszenia", title: "Nie liczysz godzin, nie liczysz tokenów", one: true, items: ["Zgłaszasz zmianę, dostajesz ją zrobioną", "Kolejka: jedno naraz, w kolejności", "Miesięczna stała kwota, faktura VAT", "Rezygnacja z miesiąca na miesiąc"] }),
  ],
  "5-wordpress": [
    main({ kicker: "WordPress", title: "Naprawa, przyspieszenie, przeniesienie", price: "od 490 zł", unit: "netto · przeniesienie na stronę statyczną od 1 990 zł", chips: ["biały ekran", "wolna strona", "po włamaniu", "aktualizacje"], small: true }),
    steps({ kicker: "Dwie drogi", title: "Naprawić albo uwolnić", light: true, items: [["od 490 zł", "Naprawa i przyspieszenie", "Diagnoza, aktualizacje, wtyczki, kopia, zabezpieczenie."], ["od 1 990 zł", "Przeniesienie na stronę statyczną", "Ten sam wygląd i treści, bez wtyczek i aktualizacji."], ["po co", "Koniec z łamaniem", "Strona statyczna nie ma czego zhakować."], ["efekt", "Ładuje się w sekundę", "Tańszy hosting, lepsze wyniki w Google."]] }),
    proces,
  ],
  "6-aplikacja": [
    main({ kicker: "Aplikacja webowa lub mobilna", title: "Panel klienta, rezerwacje, kalkulator, MVP", price: "wycena w 24 h", unit: "od briefu · rozliczenie za etapy", chips: ["prototyp do klikania", "PWA na telefon", "etapy, nie godziny", "faktura VAT"], small: true }),
    steps({ kicker: "Jak to wygląda", title: "Prototyp zanim zapadnie decyzja", light: true, items: [["01 · brief", "Opisujesz problem", "Kto będzie używał i co ma się dziać."], ["02 · 24 godziny", "Wycena etapów", "Co wchodzi w pierwszy etap, ile kosztuje, kiedy."], ["03 · pierwszy etap", "Działający prototyp", "Klikasz, zanim zapłacisz za resztę."], ["04 · etapy", "Rozwój", "Każdy etap ma cenę i coś, co da się użyć."]] }),
    list({ kicker: "Co robię", title: "Aplikacje dla firm", items: ["Panele klienta i pracownika", "Systemy rezerwacji i zapisów", "Kalkulatory i konfiguratory", "Aplikacje PWA na telefon", "Integracje z API i systemami", "MVP produktu do testu rynku"] }),
    ktoRobi,
  ],
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 1 });
for (const [ad, cards] of Object.entries(ads)) {
  for (const [i, html] of cards.entries()) {
    const file = `${out}${ad}-${i + 1}.png`;
    await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html}</body></html>`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: file });
    console.log(file);
  }
}
await browser.close();
