import {email, signature, legalCompany, legalNip, legalRegon, TopBar, Footer, type Locale} from "./SiteChrome";
import BriefForm from "./lead/BriefForm";
import {planHref} from "./lead/brief-payload.ts";
import {SITE} from "./site";

type Plan = {
  name: string;
  price: string;
  priceNote: string;
  lead: string;
  items: readonly string[];
  cta: string;
  featured?: boolean;
};

const copy = {
  en: {
    nav: [["Flow", "#flow"], ["Full pack", "#full-pack"], ["Packages", "#packages"], ["Support", "#care"], ["FAQ", "#faq"], ["Studio", "/en/"]],
    langHref: "/strony/",
    langLabel: "PL",
    eyebrow: "Websites and online shops · for businesses in Poland",
    heroA: "A website that earns its keep.",
    heroB: "Three website versions in 24 hours. Your choice, your domain, a date for launch.",
    intro: "I design and build company websites and online shops for businesses that want a clear offer, a credible presence and a practical way to get enquiries or sales. One person leads the work from brief to launch, so you always know who is responsible.",
    primaryCta: "Get a clear starting point",
    secondaryCta: "Compare packages",
    chips: ["Fixed scope and price before work starts", "Copy and structure included", "You own the domain, code and content"],
    consoleTitle: "from brief to launch",
    consoleBadge: "48 hours to launch",
    trace: [["00", "brief", "four fields, one minute"], ["01", "versions", "three live pages, 24 hours"], ["02", "decision", "one version to refine"], ["03", "revision", "one round included"], ["04", "launch", "your domain, day two"], ["05", "support", "changes by email"]],
    metrics: [["scope", "agreed"], ["ownership", "yours"], ["support", "monthly"]],
    proof: [["24h", "to see three website versions"], ["48h", "to launch a company website"], ["1 email", "to request a small change"], ["100%", "of the code and content stay yours"]],
    fullPackKicker: "The full pack",
    fullPackTitle: "One partner for the whole website, not just the build.",
    fullPackIntro: "If you want the project handled end to end, I can take care of the decisions around the website as well as the website itself. You get one point of contact, one clear scope and a site ready to be found, trusted and used.",
    fullPackItems: [["Positioning and structure", "The page hierarchy, message and calls to action are shaped around what your customers need to decide."], ["Copy and design", "Clear copy, visual direction and responsive layouts, prepared for your approval before publication."], ["Build and launch", "Fast implementation, forms, analytics, accessibility checks, hosting and your own domain."], ["SEO and growth", "Technical SEO, local search basics, indexing, redirects and an optional monthly plan for new content and improvements."]],
    fullPackCta: "Ask about the full pack",
    flowKicker: "A better way to buy a website",
    flowTitle: "Clear choices upfront. No agency theatre.",
    flow: [["Brief", "Tell me who you serve, what you sell and what the site should make easier. Four fields start the conversation; the detailed questions arrive by email. No discovery workshop needed."], ["Three versions", "Within 24 hours you receive three working versions with different layouts and tones. They are real pages you can open on your phone, not slides that still need to become a website."], ["Choice and revision", "You choose the version with the best chance of working for your business. One round of changes is included, with a clear fixed price for anything beyond the agreed scope."], ["Launch and care", "Your company website goes live on your domain within 48 hours of your choice and complete materials. After that, small updates are one email away and the site remains yours even if you stop the support plan."]],
    packagesKicker: "Packages",
    packagesTitle: "Choose the outcome, not a pile of hours.",
    packagesIntro: "Three starting points, each with a clear scope, a fixed price and a delivery date. All prices are net PLN. If you are unsure which route fits, start with the brief and I will point you to the right one.",
    plans: [{name: "Business card", price: "990 PLN", priceNote: "net, one-off", lead: "A fast one-page presence for a local service, solo founder or small business.", items: ["Three website options within 24 hours", "One static page with five to seven clear sections", "Copy drafted from your brief, contact form and Google map", "Mobile-ready layout and basic local SEO", "Hosting, SSL and domain setup", "Live on your domain within 48 hours of your choice and complete materials"], cta: "Start a business card"}, {name: "Company website", price: "from 2 990 PLN", priceNote: "net, one-off", lead: "A focused site of up to six pages that makes your offer easy to understand and easy to act on.", items: ["Three website versions within 24 hours", "Page structure and copy drafted from your brief", "Your photos or carefully licensed images", "Contact form, map and Google Business link", "Privacy policy and cookie-free analytics", "Live on your domain within 48 hours of your choice and complete materials"], cta: "Start a company website"}, {name: "Online shop", price: "from 7 900 PLN", priceNote: "net, one-off", lead: "A shop that is ready to sell, compliant from day one and independent of a marketplace's margin.", items: ["Three website versions within 24 hours", "Up to 200 products imported from your file", "Przelewy24, PayU or Stripe payments", "InPost or courier delivery setup", "Omnibus price history and WCAG 2.1 AA", "BaseLinker, Allegro and ERP integrations as fixed add-ons", "Live on your domain within seven working days of complete materials"], cta: "Start an online shop", featured: true}, {name: "Shop compliance audit", price: "1 490 PLN", priceNote: "net, credited against the fix", lead: "A practical check for a shop that already exists and has not been reviewed since the rules changed.", items: ["Omnibus: price history, promotions and reviews", "Accessibility against WCAG 2.1 AA", "Speed and mobile checkout walk-through", "Report within two working days", "Fixed price for every recommended fix", "Audit fee deducted if you order the fixes"], cta: "Check my shop"}] satisfies readonly Plan[],
    careKicker: "After launch",
    careTitle: "Keep the site useful, not just online.",
    careIntro: "Send one request at a time by email. I review the change, update the page and publish it the same working day when it fits the plan. Small changes are not metered by the hour. Anything larger gets a fixed price before work begins.",
    care: [{name: "Care", price: "290 PLN", priceNote: "net per month", lead: "For a site that needs to stay current and reliable.", items: ["Small changes without limit: text, photos, hours, prices and existing-page updates", "One request at a time, live the same working day", "Uptime monitoring, backups, certificate and updates", "Domain and hosting in your name, administered by me"], cta: "Choose Care"}, {name: "Growth", price: "590 PLN", priceNote: "net per month", lead: "For a business that wants the website to keep improving.", items: ["One new page or article each month, drafted for your approval", "Technical SEO and a monthly report of what visitors did", "Everything in Care, including unlimited small changes"], cta: "Choose Growth", featured: true}, {name: "Shop", price: "990 PLN", priceNote: "net per month", lead: "For a shop that needs regular updates and a closer eye on compliance.", items: ["Products, promotions and content without limit, one request at a time", "Monthly Omnibus and accessibility check with a written result", "Payments, delivery and marketplace integrations watched", "Outage response within four hours, any day", "Everything in Growth"], cta: "Choose Shop"}] satisfies readonly Plan[],
    careRules: ["A small change fits in one working day on an existing page", "Cancel with one month's notice, no fixed term", "Your domain is registered to you from day one", "When you leave, you get the code, content and access list in writing"],
    whyKicker: "The studio model",
    whyTitle: "Three options are included because choosing well is part of the job.",
    whyBody: "Most agencies make you pay for every concept and every meeting before the real work starts. My studio uses a lean production process to prepare useful options quickly, then I edit and review every one personally. You are paying for a clear decision and a finished website, not for the number of people sitting in a room.",
    whyPunch: "You talk to one person who understands the brief, makes the calls and stays responsible after launch.",
    whyCaveat: "No vague estimate at the end. The scope and price are agreed before work starts, and anything outside it is quoted before I touch it.",
    fitKicker: "Who it is for",
    fitTitle: "For businesses that want a decision and a site that does its job.",
    fitYes: ["A company that needs a credible website without a six-week agency process", "A business selling on Allegro that wants its own shop and its own margin", "A shop that needs an Omnibus, accessibility or checkout review", "An owner who would rather email a change than learn a CMS"],
    fitNo: ["A 500 PLN website: a site builder will serve you better", "A project that needs a large on-site delivery team", "A mobile app: this offer is for websites and shops"],
    faqKicker: "Questions",
    faqTitle: "The useful answers before you start.",
    faq: [["Is the site mine?", "Yes. The domain is registered in your name, the code lives in a repository you own and the content is yours. If you leave the support plan, nothing is switched off."], ["What does the full pack include?", "The full pack covers positioning, structure, copy, design, implementation, hosting, domain setup, analytics, technical SEO and launch. Local SEO, content and ongoing improvements can continue through the Growth plan."], ["Will you write the copy?", "I draft the structure and copy from your brief. You approve every line before publication. If you already have good copy, we use it."], ["Do I talk to a person?", "Yes. You work directly with me from the first brief to launch and support. There is no account manager between you and the work."], ["WordPress or code?", "For a company website, I usually recommend fast, low-maintenance code without a plugin stack. For shops, the right choice can be WooCommerce, Shoper or custom code, depending on the catalogue and integrations."], ["What if I need more changes?", "One revision round is included. A second round or a larger change gets a fixed price before it starts, so there is no surprise invoice."], ["How does the support plan work?", "One request at a time. Small changes on existing pages are unlimited within the plan. Larger work is quoted separately, and you can cancel with one month's notice."], ["Can a website be funded from a grant?", "If you use FENG or PARP digitisation funding, I can provide an invoice and documentation shaped for the settlement."], ["Do you issue VAT invoices?", "Yes. Prices are net and Polish VAT applies."]],
    finalKicker: "Ready to move",
    finalTitle: "Tell me what you sell. I will show you the right starting point.",
    finalBody: "Leave your name, contact, company and the package you are considering. I will send ten short questions by email, then prepare the next step. There is no sales sequence and no obligation to buy.",
    footer: "Websites · online shops · ongoing support · Kraków",
  },
  pl: {
    nav: [["Przebieg", "#flow"], ["Full pack", "#full-pack"], ["Pakiety", "#packages"], ["Opieka", "#care"], ["Pytania", "#faq"], ["Automatyzacje", "/automatyzacje/"], ["Studio", "/"]],
    langHref: "/en/websites/",
    langLabel: "EN",
    eyebrow: "Strony i sklepy internetowe · dla firm w Polsce",
    heroA: "Strona, która pomaga sprzedawać.",
    heroB: "Trzy gotowe wersje strony w 24 godziny. Ty wybierasz, ja dowożę publikację.",
    intro: "Projektuję i wdrażam strony firmowe oraz sklepy internetowe dla firm, które chcą jasno pokazać ofertę, budzić zaufanie i zdobywać zapytania albo zamówienia. Od briefu do publikacji prowadzi Cię jedna osoba, więc od początku wiesz, kto odpowiada za wynik.",
    primaryCta: "Zacznijmy od briefu",
    secondaryCta: "Porównaj pakiety",
    chips: ["Zakres i cena przed startem", "Teksty i struktura w pakiecie", "Twoja domena, kod i treści zostają u Ciebie"],
    consoleTitle: "od briefu do publikacji",
    consoleBadge: "48 godzin do publikacji",
    trace: [["00", "brief", "cztery pola, minuta"], ["01", "wersje", "trzy gotowe wersje, 24 godziny"], ["02", "decyzja", "wybierasz jedną wersję"], ["03", "poprawki", "jedna runda w cenie"], ["04", "publikacja", "Twoja domena, dzień drugi"], ["05", "opieka", "zmiany mailem"]],
    metrics: [["zakres", "ustalony"], ["własność", "Twoja"], ["opieka", "miesięczna"]],
    proof: [["24 h", "do zobaczenia trzech wersji strony"], ["48 h", "do publikacji strony firmowej"], ["1 mail", "żeby zlecić drobną zmianę"], ["100%", "kodu i treści zostaje u Ciebie"]],
    fullPackKicker: "Pełna obsługa",
    fullPackTitle: "Jeden partner do całej strony, nie tylko do wdrożenia.",
    fullPackIntro: "Jeśli chcesz zlecić projekt od początku do końca, zajmę się także decyzjami wokół strony. Dostajesz jeden kontakt, jasny zakres i serwis gotowy do znalezienia, zaufania i działania.",
    fullPackItems: [["Pozycjonowanie i struktura", "Układ podstron, komunikat i wezwania do działania wynikają z tego, co klient musi wiedzieć, żeby podjąć decyzję."], ["Teksty i design", "Czytelne teksty, kierunek wizualny i responsywny układ, wszystko do Twojej akceptacji przed publikacją."], ["Wdrożenie i start", "Szybkie wykonanie, formularze, analityka, kontrola dostępności, hosting i własna domena."], ["SEO i rozwój", "SEO techniczne, podstawy lokalnego pozycjonowania, indeksowanie, przekierowania oraz opcjonalna miesięczna opieka nad treścią i rozwojem."]],
    fullPackCta: "Zapytaj o pełną obsługę",
    flowKicker: "Lepszy sposób na stronę",
    flowTitle: "Wiesz, co kupujesz. Wiesz, kiedy będzie gotowe.",
    flow: [["Brief", "Napisz, komu sprzedajesz, co oferujesz i co strona ma ułatwić. Cztery pola uruchamiają rozmowę, a szczegółowe pytania dostajesz mailem. Bez warsztatu odkrywczego."], ["Trzy wersje", "W ciągu 24 godzin dostajesz trzy gotowe wersje strony o różnym układzie i tonie. To prawdziwe strony, które otworzysz na telefonie, a nie slajdy czekające na wdrożenie."], ["Wybór i poprawki", "Wybierasz wersję z największą szansą na wynik dla Twojej firmy. Jedna runda zmian jest w cenie, a wszystko poza ustalonym zakresem dostaje stałą wycenę przed startem."], ["Publikacja i opieka", "Strona firmowa działa pod Twoją domeną w ciągu 48 godzin od wyboru wersji i otrzymania kompletu materiałów. Później drobne zmiany zlecasz jednym mailem, a strona nadal należy do Ciebie także po rezygnacji z opieki."]],
    packagesKicker: "Pakiety",
    packagesTitle: "Wybierz efekt, nie pakiet godzin.",
    packagesIntro: "Trzy punkty startowe, każdy z jasnym zakresem, stałą ceną i terminem. Ceny są netto. Jeśli nie wiesz, który wariant pasuje, zacznij od briefu, a wskażę właściwą drogę.",
    plans: [{name: "Wizytówka online", price: "990 zł", priceNote: "netto, jednorazowo", lead: "Szybka strona one page dla lokalnej usługi, jednoosobowej firmy albo małego biznesu.", items: ["Trzy propozycje wyglądu w 24 godziny", "Jedna statyczna strona z pięcioma do siedmiu sekcjami", "Teksty z briefu, formularz kontaktowy i mapa Google", "Wersja mobilna i podstawowe SEO lokalne", "Hosting, SSL i podpięcie domeny", "Publikacja pod Twoją domeną w 48 godzin od wyboru wersji i kompletu materiałów"], cta: "Zacznij wizytówkę"}, {name: "Strona firmowa", price: "od 2 990 zł", priceNote: "netto, jednorazowo", lead: "Do sześciu podstron, które jasno pokazują ofertę i prowadzą klienta do kontaktu.", items: ["Trzy gotowe wersje strony w 24 godziny", "Struktura podstron i teksty przygotowane z briefu", "Twoje zdjęcia albo starannie dobrane licencjonowane", "Formularz kontaktowy, mapa i wizytówka Google", "Polityka prywatności i analityka bez ciasteczek", "Publikacja pod Twoją domeną w 48 godzin od wyboru wersji i kompletu materiałów"], cta: "Zacznij stronę firmową"}, {name: "Sklep internetowy", price: "od 7 900 zł", priceNote: "netto, jednorazowo", lead: "Sklep gotowy do sprzedaży, zgodny z przepisami i niezależny od marży marketplace'u.", items: ["Trzy gotowe wersje strony w 24 godziny", "Do 200 produktów z Twojego pliku", "Płatności Przelewy24, PayU lub Stripe", "Dostawa InPost albo kurierem", "Historia cen Omnibus i dostępność WCAG 2.1 AA", "Integracje BaseLinker, Allegro i ERP jako stałe dodatki", "Publikacja pod Twoją domeną w siedem dni roboczych od kompletu materiałów"], cta: "Zacznij sklep", featured: true}, {name: "Audyt zgodności sklepu", price: "1 490 zł", priceNote: "netto, odliczane od naprawy", lead: "Praktyczna kontrola sklepu, który działa, ale nie był sprawdzany od czasu zmian w przepisach.", items: ["Omnibus: historia cen, promocje i opinie", "Dostępność według WCAG 2.1 AA", "Szybkość i koszyk na telefonie", "Raport w dwa dni robocze", "Stała cena każdej rekomendowanej poprawki", "Koszt audytu odliczony przy zamówieniu napraw"], cta: "Sprawdź sklep"}] satisfies readonly Plan[],
    careKicker: "Po publikacji",
    careTitle: "Niech strona będzie użyteczna, nie tylko online.",
    careIntro: "Wysyłasz jedno zgłoszenie mailem. Sprawdzam zmianę, aktualizuję stronę i publikuję ją tego samego dnia roboczego, jeśli mieści się w pakiecie. Drobne zmiany nie są liczone godzinowo. Większe dostają stałą cenę przed rozpoczęciem pracy.",
    care: [{name: "Opieka", price: "290 zł", priceNote: "netto miesięcznie", lead: "Dla strony, która ma być aktualna i niezawodna.", items: ["Drobne zmiany bez limitu: teksty, zdjęcia, godziny, ceny i zmiany na istniejącej stronie", "Jedno zgłoszenie naraz, publikacja tego samego dnia roboczego", "Monitoring dostępności, kopie, certyfikat i aktualizacje", "Domena i hosting na Ciebie, administrowane przeze mnie"], cta: "Wybierz Opiekę"}, {name: "Rozwój", price: "590 zł", priceNote: "netto miesięcznie", lead: "Dla firmy, która chce rozwijać stronę razem z ofertą.", items: ["Jedna nowa podstrona lub artykuł miesięcznie, do Twojej akceptacji", "SEO techniczne i miesięczny raport zachowania odwiedzających", "Wszystko z pakietu Opieka, w tym drobne zmiany bez limitu"], cta: "Wybierz Rozwój", featured: true}, {name: "Sklep", price: "990 zł", priceNote: "netto miesięcznie", lead: "Dla sklepu, który potrzebuje regularnych zmian i kontroli zgodności.", items: ["Produkty, promocje i treści bez limitu, jedno zgłoszenie naraz", "Comiesięczna kontrola Omnibusa i dostępności z pisemnym wynikiem", "Pilnowane integracje płatności, dostawy i marketplace", "Reakcja na awarię do czterech godzin, każdego dnia", "Wszystko z pakietu Rozwój"], cta: "Wybierz Sklep"}] satisfies readonly Plan[],
    careRules: ["Drobna zmiana mieści się w jednym dniu roboczym na istniejącej podstronie", "Wypowiedzenie z miesiąca na miesiąc, bez umowy terminowej", "Domena od pierwszego dnia jest zarejestrowana na Ciebie", "Przy odejściu dostajesz kod, treści i listę dostępów na piśmie"],
    whyKicker: "Model studia",
    whyTitle: "Trzy propozycje są w cenie, bo dobry wybór jest częścią pracy.",
    whyBody: "Większość agencji każe płacić za każdą koncepcję i każde spotkanie, zanim zacznie się właściwa praca. Moje studio przygotowuje użyteczne opcje w krótkim procesie, a ja osobiście redaguję i sprawdzam każdą z nich. Płacisz za jasną decyzję i gotową stronę, nie za liczbę osób przy stole.",
    whyPunch: "Rozmawiasz z jedną osobą, która zna brief, podejmuje decyzje i zostaje odpowiedzialna po publikacji.",
    whyCaveat: "Nie ma mglistej wyceny na koniec. Zakres i cena są ustalone przed startem, a wszystko poza nimi wyceniam przed rozpoczęciem.",
    fitKicker: "Dla kogo",
    fitTitle: "Dla firm, które chcą podjąć decyzję i ruszyć.",
    fitYes: ["Firmy, która potrzebuje wiarygodnej strony bez sześciu tygodni procesu agencyjnego", "Sprzedawcy na Allegro, który chce własny sklep i własną marżę", "Sklepu wymagającego kontroli Omnibusa, dostępności albo koszyka", "Właściciela, który woli napisać maila ze zmianą, niż uczyć się CMS-a"],
    fitNo: ["Strony za 500 zł: kreator obsłuży Cię lepiej", "Projektu wymagającego dużego zespołu na miejscu", "Aplikacji mobilnej: ta oferta dotyczy stron i sklepów"],
    faqKicker: "Pytania",
    faqTitle: "Konkretne odpowiedzi przed startem.",
    faq: [["Czy strona jest moja?", "Tak. Domena jest zarejestrowana na Ciebie, kod leży w repozytorium, którego jesteś właścicielem, a treści są Twoje. Po rezygnacji z opieki nic nie zostaje wyłączone."], ["Co obejmuje pełna obsługa?", "Pełna obsługa obejmuje pozycjonowanie oferty, strukturę, teksty, design, wdrożenie, hosting, domenę, analitykę, SEO techniczne i publikację. Lokalne SEO, treści i dalszy rozwój mogą być kontynuowane w pakiecie Rozwój."], ["Czy przygotujesz teksty?", "Przygotowuję strukturę i szkice tekstów na podstawie briefu. Akceptujesz każde zdanie przed publikacją. Jeśli masz dobre teksty, pracujemy na Twoich."], ["Czy rozmawiam z człowiekiem?", "Tak. Od pierwszego briefu przez publikację po opiekę pracujesz bezpośrednio ze mną. Nie ma account managera pomiędzy Tobą a wykonaniem."], ["WordPress czy kod?", "Dla strony firmowej zwykle rekomenduję szybki, łatwy w utrzymaniu kod bez stosu wtyczek. W sklepie właściwy wybór może być różny: WooCommerce, Shoper albo kod własny, zależnie od katalogu i integracji."], ["Co, jeśli potrzebuję więcej zmian?", "Jedna runda poprawek jest w cenie. Druga runda albo większa zmiana dostaje stałą wycenę przed startem, więc nie ma faktury-niespodzianki."], ["Jak działa opieka?", "Jedno zgłoszenie naraz. Drobne zmiany na istniejących podstronach są bez limitu w ramach pakietu. Większe prace wyceniam osobno, a z opieki możesz zrezygnować z miesięcznym wypowiedzeniem."], ["Czy stronę można sfinansować z dotacji?", "Jeśli korzystasz z dotacji FENG albo PARP na cyfryzację, mogę wystawić fakturę i przygotować dokumentację pod rozliczenie."], ["Czy wystawiasz faktury VAT?", "Tak. Wszystkie ceny są netto, dolicza się VAT."]],
    finalKicker: "Czas ruszyć",
    finalTitle: "Napisz, co sprzedajesz. Wskażę Ci dobry punkt startu.",
    finalBody: "Zostaw imię, kontakt, firmę i pakiet, który rozważasz. Wyślę Ci mailem dziesięć krótkich pytań i przygotuję kolejny krok. Bez sekwencji sprzedażowej i bez obowiązku zakupu.",
    footer: "Strony · sklepy · stała opieka · Kraków",
  },
} as const;

const traceTone = ["", "active", "", "", "success", "approval"] as const;

function PlanCard({plan}: {plan: Plan}) {
  return <article className={`plan${plan.featured ? " plan-featured" : ""}`}>
    <h3>{plan.name}</h3>
    <p className="plan-price"><strong>{plan.price}</strong><span>{plan.priceNote}</span></p>
    <p className="plan-lead">{plan.lead}</p>
    <ul>{plan.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
    <a className="button button-ghost" href={planHref(plan.name)}>{plan.cta}<span>↓</span></a>
  </article>;
}

export default function OfferPage({locale}: {locale: Locale}) {
  const c = copy[locale];
  const isPl = locale === "pl";
  const pageUrl = `${SITE}${isPl ? "/strony/" : "/en/websites/"}`;
  const priceOf = (price: string) => Number(price.replace(/\D/g, ""));
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isPl ? "Strony internetowe i sklepy online dla firm" : "Web design and online shops for businesses",
    provider: {"@type": "ProfessionalService", name: "One Good Engineer & Co.", legalName: legalCompany, url: `${SITE}/`, email, taxID: legalNip, identifier: legalRegon, address: {"@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL"}},
    areaServed: "Poland",
    url: pageUrl,
    offers: [...c.plans, ...c.care].map((plan) => ({"@type": "Offer", name: plan.name, price: priceOf(plan.price), priceCurrency: "PLN", description: plan.lead})),
  };

  return <div className="site-shell offer-shell" lang={locale}>
    <div className="noise" aria-hidden="true" />
    <TopBar locale={locale} nav={c.nav} langHref={c.langHref} langLabel={c.langLabel} />
    <main>
      <section className="hero section-pad">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" />{c.eyebrow}</p><h1>{c.heroA}</h1><p className="hero-sub">{c.heroB}</p><p className="hero-intro">{c.intro}</p><div className="hero-actions"><a className="button button-primary" href="#brief">{c.primaryCta}<span>↓</span></a><a className="button button-ghost" href="#packages">{c.secondaryCta}</a></div><div className="capability-list">{c.chips.map((chip) => <span key={chip}>{chip}</span>)}</div></div>
        <div className="system-visual"><figure className="console"><figcaption className="console-bar"><span>{c.consoleTitle}</span><span className="badge">{c.consoleBadge}</span></figcaption><div className="trace">{c.trace.map(([step, type, label], index) => <div className={`trace-row ${traceTone[index]}`} key={step}><span className="trace-time">{step}</span><span className="trace-type">{type}</span><strong>{label}</strong></div>)}</div><div className="metrics">{c.metrics.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></figure></div>
      </section>
      <section className="proof-row section-pad" aria-label={isPl ? "Najważniejsze liczby oferty" : "Offer at a glance"}>{c.proof.map(([value, label]) => <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
      <section className="full-pack section-pad" id="full-pack"><div className="section-head"><div><p className="kicker">{c.fullPackKicker}</p><h2>{c.fullPackTitle}</h2></div><p>{c.fullPackIntro}</p></div><div className="full-pack-grid">{c.fullPackItems.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><a className="text-link" href="#brief">{c.fullPackCta}<span>↗</span></a></section>
      <section className="method section-pad" id="flow"><div className="section-head compact"><div><p className="kicker">{c.flowKicker}</p><h2>{c.flowTitle}</h2></div></div><div className="method-grid">{c.flow.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div className="method-body"><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
      <section className="packages section-pad" id="packages"><div className="section-head"><div><p className="kicker">{c.packagesKicker}</p><h2>{c.packagesTitle}</h2></div><p>{c.packagesIntro}</p></div><div className="plan-grid">{c.plans.map((plan) => <PlanCard plan={plan} key={plan.name} />)}</div></section>
      <section className="care section-pad" id="care"><div className="section-head"><div><p className="kicker">{c.careKicker}</p><h2>{c.careTitle}</h2></div><p>{c.careIntro}</p></div><div className="plan-grid">{c.care.map((plan) => <PlanCard plan={plan} key={plan.name} />)}</div><ul className="care-rules">{c.careRules.map((rule) => <li key={rule}><span>✓</span>{rule}</li>)}</ul></section>
      <section className="billing section-pad" id="why"><div><p className="kicker">{c.whyKicker}</p><h2>{c.whyTitle}</h2></div><div className="billing-copy"><p>{c.whyBody}</p><p className="billing-punch">{c.whyPunch}</p><p className="billing-caveat">{c.whyCaveat}</p></div></section>
      <section className="fit section-pad" id="fit"><div><p className="kicker">{c.fitKicker}</p><h2>{c.fitTitle}</h2></div><div className="fit-lists"><ul>{c.fitYes.map((item) => <li key={item}><span className="fit-yes">✓</span>{item}</li>)}</ul><ul>{c.fitNo.map((item) => <li key={item}><span className="fit-no">×</span>{item}</li>)}</ul></div></section>
      <section className="faq section-pad" id="faq"><div className="section-head compact"><div><p className="kicker">{c.faqKicker}</p><h2>{c.faqTitle}</h2></div></div><dl className="faq-list">{c.faq.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl></section>
      <section className="brief section-pad" id="brief"><div className="brief-copy"><p className="kicker">{c.finalKicker}</p><h2>{c.finalTitle}</h2><p>{c.finalBody}</p><small>{signature} · {email}</small></div><BriefForm locale={locale} plans={[...c.plans, ...c.care].map((plan) => plan.name)} /></section>
    </main>
    <Footer locale={locale} line={c.footer} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(offerSchema)}} />
  </div>;
}
