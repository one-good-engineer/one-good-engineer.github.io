import { email, signature, TopBar, Footer, type Locale } from "./SiteChrome";

type Plan = {
  name: string;
  price: string;
  priceNote: string;
  lead: string;
  items: readonly string[];
  cta: string;
  subject: string;
  featured?: boolean;
};

const copy = {
  en: {
    nav: [
      ["Flow", "#flow"],
      ["Packages", "#packages"],
      ["Care plan", "#care"],
      ["FAQ", "#faq"],
      ["Studio", "/"],
    ],
    langHref: "/pl/strony/",
    langLabel: "PL",
    eyebrow: "Websites and online shops · Poland",
    heroA: "Three versions of your website in 48 hours. One person answers for the result.",
    heroB: "A fixed price, seven working days to launch, then a care plan where you request changes by email.",
    intro:
      "The agents in my studio build the three directions, which is why three cost you the same as one. I read every one of them before you do, and I am the person you write to, from the brief to the day the site is live and long after.",
    primaryCta: "Send the brief",
    secondaryCta: "See the packages",
    chips: ["Fixed price, agreed before we start", "Your domain, your code, your content", "Monthly plan, cancel with one month's notice"],
    consoleTitle: "how your site gets built",
    consoleBadge: "the flow",
    trace: [
      ["00", "brief", "ten questions, twenty minutes"],
      ["01", "versions", "three working sites, 48 hours"],
      ["02", "choice", "one link, one decision"],
      ["03", "revision", "one round, included"],
      ["04", "launch", "your domain, day seven"],
      ["05", "care", "changes by email, same day"],
    ],
    metrics: [
      ["price", "fixed"],
      ["ownership", "yours"],
      ["contract", "monthly"],
    ],
    flowKicker: "How it runs",
    flowTitle: "You make two decisions. Everything else is my job.",
    flow: [
      ["Brief", "Ten questions by email: what the company does, who the customer is, what they should do on the site, three sites you like. Twenty minutes, no meeting needed."],
      ["Three directions", "Within 48 hours you get a link with three working versions of your site, different in layout, tone and colour. Not mock-ups: real pages you can open on your phone."],
      ["Choice and revision", "You pick one and send a list of changes. One revision round is in the price. Mixing the header of one with the colours of another is not a revision, it is a fourth version, and I will say so."],
      ["Launch and care", "The site goes live on your domain within seven working days of the brief. From that day the care plan takes over: you email a change, it is live the same working day."],
    ],
    packagesKicker: "Packages",
    packagesTitle: "Three units of work, each with a fixed price and a date.",
    packagesIntro: "Net prices in PLN. The offer is built for the Polish market; English-speaking businesses in Poland are welcome. Every package starts with the same brief and the same three versions.",
    plans: [
      {
        name: "Company website",
        price: "from 2 990 PLN",
        priceNote: "net, one-off",
        lead: "Up to six pages for a company that wants to be found, understood and called.",
        items: [
          "Three working versions within 48 hours",
          "Copy drafted from your brief, you approve every line",
          "Your photos or licensed ones, your choice",
          "Contact form, map, Google Business link",
          "Privacy policy and cookie-free analytics",
          "Live on your domain within seven working days",
        ],
        cta: "Order a website",
        subject: "Company website: brief",
      },
      {
        name: "Online shop",
        price: "from 7 900 PLN",
        priceNote: "net, one-off",
        lead: "A shop that is legal on day one and does not depend on a marketplace's margin.",
        items: [
          "Three working versions within 48 hours",
          "Up to 200 products imported from your file",
          "Payments (Przelewy24, PayU or Stripe) and InPost or courier delivery",
          "Omnibus price history compliant from the first day",
          "WCAG 2.1 AA accessibility, mandatory for shops since 28 June 2025",
          "BaseLinker, Allegro and ERP integrations quoted as fixed add-ons",
          "Live on your domain within 21 working days",
        ],
        cta: "Order a shop",
        subject: "Online shop: brief",
        featured: true,
      },
      {
        name: "Shop compliance audit",
        price: "1 490 PLN",
        priceNote: "net, credited against the fix",
        lead: "For a shop that already exists and nobody has checked since the rules changed.",
        items: [
          "Omnibus directive: price history, promotions, reviews",
          "Accessibility against WCAG 2.1 AA",
          "Speed and mobile checkout walk-through",
          "Report within five working days with a fixed price for every fix",
          "If you order the fixes, the audit fee is deducted",
        ],
        cta: "Order an audit",
        subject: "Shop audit",
      },
    ] satisfies readonly Plan[],
    careKicker: "Care plan",
    careTitle: "After launch, changes are one email away.",
    careIntro:
      "This is where the agents earn their keep. You write what should change, an agent implements it, I read the diff and the preview, and it goes live the same working day. There is no hour limit: small changes are unlimited, one request at a time. Anything bigger than a day's work gets a fixed price before it starts, never an invoice after.",
    care: [
      {
        name: "Care",
        price: "290 PLN",
        priceNote: "net per month",
        lead: "The site stays up, current and yours.",
        items: [
          "Small changes without limit: texts, photos, hours, prices, a new element on an existing page",
          "One request at a time, live the same working day",
          "Uptime monitoring, backups, certificate, updates",
          "Domain and hosting in your name, administered by me",
        ],
        cta: "Choose Care",
        subject: "Care plan",
      },
      {
        name: "Growth",
        price: "590 PLN",
        priceNote: "net per month",
        lead: "The site keeps changing with the business.",
        items: [
          "One new page or article a month, drafted for your approval",
          "Technical SEO and a monthly report of what people did on the site",
          "Everything in Care, including unlimited small changes",
        ],
        cta: "Choose Growth",
        subject: "Growth plan",
        featured: true,
      },
      {
        name: "Shop",
        price: "990 PLN",
        priceNote: "net per month",
        lead: "A shop that stays legal and keeps selling.",
        items: [
          "Products, promotions and content without limit, one request at a time",
          "Monthly Omnibus and accessibility check with a written result",
          "Integrations watched: payments, delivery, marketplace sync",
          "Outage response within four hours, any day",
          "Everything in Growth",
        ],
        cta: "Choose Shop",
        subject: "Shop care plan",
      },
    ] satisfies readonly Plan[],
    careRules: [
      "Small means: done within one working day, on an existing page. Anything bigger is quoted as a fixed price first",
      "Cancel with one month's notice, no fixed term",
      "The domain is registered to you from day one",
      "When you leave, you get the code, the content and every access in writing",
    ],
    whyKicker: "Where the price comes from",
    whyTitle: "Three versions cost what one used to, and here is why that is not a trick.",
    whyBody:
      "An agency charges for people's hours, so a second concept doubles the bill. In my studio agents produce the versions and I spend my hours on the part that needs a senior: reading, deciding and being answerable for what goes live.",
    whyPunch:
      "You write to a person. The replies are prepared with agents, but I send them and I sign every one.",
    whyCaveat:
      "How many tokens the agents burned on your three versions is my cost, not a line on your invoice.",
    fitKicker: "Who this is for",
    fitTitle: "Good fit, poor fit.",
    fitYes: [
      "A business selling on Allegro that wants its own shop and its own margin",
      "A company with a site that is five years old and embarrassing on a phone",
      "A shop nobody has checked for Omnibus or accessibility since the rules changed",
      "An owner who would rather email a change than learn a CMS",
    ],
    fitNo: [
      "A website for 500 PLN: a site builder will serve you better",
      "A project where three directions is not enough and nobody can decide",
      "A mobile app: I do not build them for this segment, and I will say why if you ask",
    ],
    faqKicker: "Questions",
    faqTitle: "The things people ask before the brief.",
    faq: [
      ["Is the site mine?", "Yes, entirely. The domain is registered in your name, the code lives in a repository you own, and the content is yours. If you leave the care plan, nothing is switched off."],
      ["WordPress or code?", "Code. A company site ships as fast static pages with no plugins to update and no admin panel to break into. Shops run on WooCommerce, Shoper or custom code depending on the scale, and the brief says which and why."],
      ["Who writes the texts?", "Drafts are prepared from your brief and you approve every line. If you have texts, we use yours. Nothing is published that you have not read."],
      ["Do I talk to a person?", "Yes, to me. Agents prepare a lot of what I send, including this site. I read it, I sign it, and I am the one who answers the phone when something is wrong."],
      ["What if I need more than one revision round?", "The second round is quoted as a fixed price before I start it. There is no surprise invoice at the end."],
      ["Why no hour limit on the care plan?", "Because in this studio a small change costs agents' work, not a person's hour, so counting hours would be charging you for my costs. The queue is the limit: one request at a time, each one closed before the next starts."],
      ["Can the site be funded from a grant?", "If you finance the site or the shop from FENG or PARP digitisation grants, you get an invoice and documentation shaped for the settlement."],
      ["Do you issue VAT invoices?", "Yes. All prices are net, Polish VAT applies."],
    ],
    finalKicker: "Ready?",
    finalTitle: "Send the brief. The ten questions are already in the email.",
    finalBody: "Click the button, answer what you can, send. Within 48 hours you get three working versions of your site.",
    emailCta: "Send the brief",
    briefSubject: "Website brief",
    briefBody: [
      "1. Company name and what it does:",
      "2. Current website address, if any:",
      "3. Three websites you like (any industry) and why:",
      "4. Who the customer is and what they should do on the site (call, buy, book):",
      "5. Pages you need:",
      "6. Texts: ready, or to be drafted from a conversation:",
      "7. Photos: your own or licensed:",
      "8. Domain: you have one, or one needs buying:",
      "9. The date the site has to be live:",
      "10. Budget, if different from the package:",
    ],
    footer: "One engineer · a crew of agents · Kraków",
  },
  pl: {
    nav: [
      ["Przebieg", "#flow"],
      ["Pakiety", "#packages"],
      ["Opieka", "#care"],
      ["Pytania", "#faq"],
      ["Studio", "/pl/"],
    ],
    langHref: "/websites/",
    langLabel: "EN",
    eyebrow: "Strony i sklepy internetowe · Polska",
    heroA: "Trzy wersje Twojej strony w 48 godzin. Jedna osoba odpowiada za wynik.",
    heroB: "Stała cena, siedem dni roboczych do publikacji, a potem opieka, w której zmiany zamawiasz mailem.",
    intro:
      "Trzy kierunki budują agenty z mojego studia, dlatego trzy kosztują Cię tyle, co jeden. Każdy z nich czytam, zanim zobaczysz go Ty, i to do mnie piszesz: od briefu, przez dzień publikacji, po każdą późniejszą zmianę.",
    primaryCta: "Wyślij brief",
    secondaryCta: "Zobacz pakiety",
    chips: ["Stała cena ustalona przed startem", "Twoja domena, Twój kod, Twoje treści", "Abonament miesięczny, wypowiedzenie z miesiąca na miesiąc"],
    consoleTitle: "jak powstaje Twoja strona",
    consoleBadge: "przebieg",
    trace: [
      ["00", "brief", "dziesięć pytań, dwadzieścia minut"],
      ["01", "wersje", "trzy działające strony, 48 godzin"],
      ["02", "wybór", "jeden link, jedna decyzja"],
      ["03", "poprawki", "jedna runda w cenie"],
      ["04", "publikacja", "Twoja domena, dzień siódmy"],
      ["05", "opieka", "zmiany mailem, tego samego dnia"],
    ],
    metrics: [
      ["cena", "stała"],
      ["własność", "Twoja"],
      ["umowa", "miesięczna"],
    ],
    flowKicker: "Jak to przebiega",
    flowTitle: "Podejmujesz dwie decyzje. Reszta jest po mojej stronie.",
    flow: [
      ["Brief", "Dziesięć pytań mailem: czym zajmuje się firma, kto jest klientem, co ma zrobić na stronie, trzy strony, które Ci się podobają. Dwadzieścia minut, bez spotkania."],
      ["Trzy kierunki", "W ciągu 48 godzin dostajesz link z trzema działającymi wersjami strony, różnymi w układzie, tonie i kolorze. Nie makiety: prawdziwe strony, które otworzysz na telefonie."],
      ["Wybór i poprawki", "Wybierasz jedną i wysyłasz listę zmian. Jedna runda poprawek jest w cenie. Nagłówek z pierwszej z kolorami z drugiej to nie poprawka, tylko czwarta wersja, i powiem to wprost."],
      ["Publikacja i opieka", "Strona działa pod Twoją domeną w ciągu siedmiu dni roboczych od briefu. Od tego dnia przejmuje ją opieka: piszesz maila ze zmianą, zmiana jest na stronie tego samego dnia roboczego."],
    ],
    packagesKicker: "Pakiety",
    packagesTitle: "Trzy jednostki pracy, każda ze stałą ceną i datą.",
    packagesIntro: "Ceny netto. Każdy pakiet zaczyna się od tego samego briefu i tych samych trzech wersji.",
    plans: [
      {
        name: "Strona firmowa",
        price: "od 2 990 zł",
        priceNote: "netto, jednorazowo",
        lead: "Do sześciu podstron dla firmy, która chce być znaleziona, zrozumiana i wybrana.",
        items: [
          "Trzy działające wersje w 48 godzin",
          "Teksty przygotowane z briefu, akceptujesz każde zdanie",
          "Twoje zdjęcia albo licencjonowane, do wyboru",
          "Formularz kontaktowy, mapa, wizytówka Google",
          "Polityka prywatności i analityka bez ciasteczek",
          "Publikacja pod Twoją domeną w siedem dni roboczych",
        ],
        cta: "Zamów stronę",
        subject: "Strona firmowa: brief",
      },
      {
        name: "Sklep internetowy",
        price: "od 7 900 zł",
        priceNote: "netto, jednorazowo",
        lead: "Sklep zgodny z prawem od pierwszego dnia i niezależny od marży marketplace'u.",
        items: [
          "Trzy działające wersje w 48 godzin",
          "Do 200 produktów zaimportowanych z Twojego pliku",
          "Płatności (Przelewy24, PayU lub Stripe) i dostawa InPost lub kurierem",
          "Historia cen zgodna z dyrektywą Omnibus od pierwszego dnia",
          "Dostępność WCAG 2.1 AA, obowiązkowa dla sklepów od 28 czerwca 2025",
          "Integracje BaseLinker, Allegro i ERP wyceniane jako stałe dodatki",
          "Publikacja pod Twoją domeną w 21 dni roboczych",
        ],
        cta: "Zamów sklep",
        subject: "Sklep internetowy: brief",
        featured: true,
      },
      {
        name: "Audyt zgodności sklepu",
        price: "1 490 zł",
        priceNote: "netto, odliczane od naprawy",
        lead: "Dla sklepu, który już działa i którego nikt nie sprawdził, odkąd zmieniły się przepisy.",
        items: [
          "Dyrektywa Omnibus: historia cen, promocje, opinie",
          "Dostępność według WCAG 2.1 AA",
          "Szybkość i przejście przez koszyk na telefonie",
          "Raport w pięć dni roboczych ze stałą ceną każdej poprawki",
          "Jeśli zamawiasz poprawki, koszt audytu odliczam",
        ],
        cta: "Zamów audyt",
        subject: "Audyt sklepu",
      },
    ] satisfies readonly Plan[],
    careKicker: "Opieka",
    careTitle: "Po publikacji każda zmiana to jeden mail.",
    careIntro:
      "Tu agenty zarabiają na siebie. Piszesz, co ma się zmienić, agent to wdraża, ja czytam diff i podgląd, i zmiana jest na stronie tego samego dnia roboczego. Nie ma limitu godzin: drobne zmiany są bez limitu, jedno zgłoszenie naraz. Wszystko większe niż dzień pracy dostaje stałą cenę przed startem, nigdy fakturę po.",
    care: [
      {
        name: "Opieka",
        price: "290 zł",
        priceNote: "netto miesięcznie",
        lead: "Strona działa, jest aktualna i jest Twoja.",
        items: [
          "Drobne zmiany bez limitu: teksty, zdjęcia, godziny, ceny, nowy element na istniejącej podstronie",
          "Jedno zgłoszenie naraz, na stronie tego samego dnia roboczego",
          "Monitoring dostępności, kopie, certyfikat, aktualizacje",
          "Domena i hosting na Ciebie, administrowane przeze mnie",
        ],
        cta: "Wybierz Opiekę",
        subject: "Pakiet Opieka",
      },
      {
        name: "Rozwój",
        price: "590 zł",
        priceNote: "netto miesięcznie",
        lead: "Strona zmienia się razem z firmą.",
        items: [
          "Jedna nowa podstrona lub artykuł miesięcznie, do Twojej akceptacji",
          "SEO techniczne i miesięczny raport, co ludzie robili na stronie",
          "Wszystko z pakietu Opieka, łącznie z drobnymi zmianami bez limitu",
        ],
        cta: "Wybierz Rozwój",
        subject: "Pakiet Rozwój",
        featured: true,
      },
      {
        name: "Sklep",
        price: "990 zł",
        priceNote: "netto miesięcznie",
        lead: "Sklep, który pozostaje legalny i dalej sprzedaje.",
        items: [
          "Produkty, promocje i treści bez limitu, jedno zgłoszenie naraz",
          "Comiesięczna kontrola Omnibusa i dostępności z pisemnym wynikiem",
          "Pilnowane integracje: płatności, dostawa, synchronizacja z marketplace",
          "Reakcja na awarię do czterech godzin, każdego dnia",
          "Wszystko z pakietu Rozwój",
        ],
        cta: "Wybierz Sklep",
        subject: "Pakiet Sklep",
      },
    ] satisfies readonly Plan[],
    careRules: [
      "Drobna znaczy: do zrobienia w jeden dzień roboczy, na istniejącej podstronie. Wszystko większe najpierw dostaje stałą cenę",
      "Wypowiedzenie z miesiąca na miesiąc, bez umowy terminowej",
      "Domena od pierwszego dnia zarejestrowana na Ciebie",
      "Przy odejściu dostajesz kod, treści i wszystkie dostępy na piśmie",
    ],
    whyKicker: "Skąd ta cena",
    whyTitle: "Trzy wersje kosztują tyle, co kiedyś jedna. Oto dlaczego to nie jest sztuczka.",
    whyBody:
      "Agencja liczy godziny ludzi, więc druga koncepcja podwaja rachunek. W moim studiu wersje produkują agenty, a swoje godziny wydaję na to, do czego potrzebny jest senior: czytanie, decyzje i odpowiedzialność za to, co idzie na produkcję.",
    whyPunch:
      "Piszesz do człowieka. Odpowiedzi przygotowuję z agentami, ale wysyłam je ja i podpisuję się pod każdą.",
    whyCaveat:
      "Ile tokenów zjadły agenty na Twoje trzy wersje, jest moim kosztem, nie pozycją na Twojej fakturze.",
    fitKicker: "Dla kogo",
    fitTitle: "Dobre dopasowanie, złe dopasowanie.",
    fitYes: [
      "Firma sprzedająca na Allegro, która chce własny sklep i własną marżę",
      "Firma ze stroną sprzed pięciu lat, za którą wstyd na telefonie",
      "Sklep, którego nikt nie sprawdził pod Omnibusem i dostępnością, odkąd zmieniły się przepisy",
      "Właściciel, który woli napisać maila ze zmianą, niż uczyć się panelu",
    ],
    fitNo: [
      "Strona za 500 zł: kreator obsłuży Cię lepiej",
      "Projekt, w którym trzy kierunki to za mało i nikt nie umie zdecydować",
      "Aplikacja mobilna: nie buduję ich dla tego segmentu, a jeśli zapytasz, powiem dlaczego",
    ],
    faqKicker: "Pytania",
    faqTitle: "O co ludzie pytają przed briefem.",
    faq: [
      ["Czy strona jest moja?", "Tak, w całości. Domena jest zarejestrowana na Ciebie, kod leży w repozytorium, którego jesteś właścicielem, treści są Twoje. Jeśli zrezygnujesz z opieki, nic nie zostaje wyłączone."],
      ["WordPress czy kod?", "Kod. Strona firmowa to szybkie strony statyczne bez wtyczek do aktualizowania i bez panelu, do którego można się włamać. Sklep stoi na WooCommerce, Shoperze albo w kodzie własnym, zależnie od skali, a brief mówi, na czym i dlaczego."],
      ["Kto pisze teksty?", "Szkice powstają z Twojego briefu, a Ty akceptujesz każde zdanie. Jeśli masz gotowe teksty, używamy Twoich. Nic nie jest publikowane, czego nie przeczytałeś."],
      ["Czy rozmawiam z człowiekiem?", "Tak, ze mną. Agenty przygotowują dużą część tego, co wysyłam, łącznie z tą stroną. Ja to czytam, podpisuję i to ja odbieram telefon, kiedy coś nie działa."],
      ["Co, jeśli potrzebuję więcej niż jednej rundy poprawek?", "Druga runda dostaje stałą cenę, zanim ją zacznę. Na końcu nie ma faktury-niespodzianki."],
      ["Dlaczego opieka nie ma limitu godzin?", "Bo w tym studiu drobna zmiana kosztuje pracę agentów, nie godzinę człowieka, więc liczenie godzin byłoby liczeniem Ci moich kosztów. Limitem jest kolejka: jedno zgłoszenie naraz, każde domknięte, zanim zacznie się następne."],
      ["Czy stronę można sfinansować z dotacji?", "Jeśli finansujesz stronę lub sklep z dotacji FENG albo PARP na cyfryzację, dostajesz fakturę i dokumentację pod rozliczenie."],
      ["Czy wystawiasz faktury VAT?", "Tak. Wszystkie ceny są netto, dolicza się VAT."],
    ],
    finalKicker: "Gotowy?",
    finalTitle: "Wyślij brief. Dziesięć pytań jest już w mailu.",
    finalBody: "Klikasz, odpowiadasz na to, na co umiesz, wysyłasz. W ciągu 48 godzin dostajesz trzy działające wersje swojej strony.",
    emailCta: "Wyślij brief",
    briefSubject: "Brief strony",
    briefBody: [
      "1. Nazwa firmy i czym się zajmuje:",
      "2. Adres obecnej strony, jeśli jest:",
      "3. Trzy strony (z dowolnej branży), które Ci się podobają, i dlaczego:",
      "4. Kto jest klientem i co ma zrobić na stronie (zadzwonić, kupić, umówić się):",
      "5. Podstrony, których potrzebujesz:",
      "6. Teksty: gotowe czy do przygotowania z rozmowy:",
      "7. Zdjęcia: własne czy licencjonowane:",
      "8. Domena: masz czy trzeba kupić:",
      "9. Termin, do którego strona ma działać:",
      "10. Budżet, jeśli inny niż pakiet:",
    ],
    footer: "Jeden inżynier · załoga agentów · Kraków",
  },
} as const;

const traceTone = ["", "active", "", "", "success", "approval"] as const;

const mailto = (subject: string, body?: readonly string[]) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}` +
  (body ? `&body=${encodeURIComponent(body.join("\n\n"))}` : "");

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className={`plan${plan.featured ? " plan-featured" : ""}`}>
      <h3>{plan.name}</h3>
      <p className="plan-price"><strong>{plan.price}</strong><span>{plan.priceNote}</span></p>
      <p className="plan-lead">{plan.lead}</p>
      <ul>{plan.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
      <a className="button button-ghost" href={mailto(plan.subject)}>{plan.cta}<span>↗</span></a>
    </article>
  );
}

export default function OfferPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isPl = locale === "pl";
  const pageUrl = `https://one-good-engineer.github.io${isPl ? "/pl/strony/" : "/websites/"}`;
  const priceOf = (price: string) => Number(price.replace(/\D/g, ""));
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isPl ? "Strony i sklepy internetowe ze stałą ceną i opieką" : "Websites and online shops at a fixed price with a care plan",
    provider: { "@type": "ProfessionalService", name: "One Good Engineer & Co.", url: "https://one-good-engineer.github.io/", email },
    areaServed: "Poland",
    url: pageUrl,
    offers: [...c.plans, ...c.care].map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: priceOf(plan.price),
      priceCurrency: "PLN",
      description: plan.lead,
    })),
  };

  return (
    <div className="site-shell" lang={locale}>
      <div className="noise" aria-hidden="true" />
      <TopBar locale={locale} nav={c.nav} langHref={c.langHref} langLabel={c.langLabel} />

      <main>
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{c.eyebrow}</p>
            <h1>{c.heroA}</h1>
            <p className="hero-sub">{c.heroB}</p>
            <p className="hero-intro">{c.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={mailto(c.briefSubject, c.briefBody)}>{c.primaryCta}<span>↗</span></a>
              <a className="button button-ghost" href="#packages">{c.secondaryCta}</a>
            </div>
            <div className="capability-list">
              {c.chips.map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </div>

          <div className="system-visual">
            <figure className="console">
              <figcaption className="console-bar">
                <span>{c.consoleTitle}</span>
                <span className="badge">{c.consoleBadge}</span>
              </figcaption>
              <div className="trace">
                {c.trace.map(([step, type, label], index) => (
                  <div className={`trace-row ${traceTone[index]}`} key={step}>
                    <span className="trace-time">{step}</span>
                    <span className="trace-type">{type}</span>
                    <strong>{label}</strong>
                  </div>
                ))}
              </div>
              <div className="metrics">
                {c.metrics.map(([label, value]) => (
                  <div key={label}><span>{label}</span><strong>{value}</strong></div>
                ))}
              </div>
            </figure>
          </div>
        </section>

        <section className="method section-pad" id="flow">
          <div className="section-head compact">
            <div><p className="kicker">{c.flowKicker}</p><h2>{c.flowTitle}</h2></div>
          </div>
          <div className="method-grid">
            {c.flow.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div className="method-body"><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="packages section-pad" id="packages">
          <div className="section-head">
            <div><p className="kicker">{c.packagesKicker}</p><h2>{c.packagesTitle}</h2></div>
            <p>{c.packagesIntro}</p>
          </div>
          <div className="plan-grid">
            {c.plans.map((plan) => <PlanCard plan={plan} key={plan.name} />)}
          </div>
        </section>

        <section className="care section-pad" id="care">
          <div className="section-head">
            <div><p className="kicker">{c.careKicker}</p><h2>{c.careTitle}</h2></div>
            <p>{c.careIntro}</p>
          </div>
          <div className="plan-grid">
            {c.care.map((plan) => <PlanCard plan={plan} key={plan.name} />)}
          </div>
          <ul className="care-rules">
            {c.careRules.map((rule) => <li key={rule}><span>✓</span>{rule}</li>)}
          </ul>
        </section>

        <section className="billing section-pad" id="why">
          <div>
            <p className="kicker">{c.whyKicker}</p>
            <h2>{c.whyTitle}</h2>
          </div>
          <div className="billing-copy">
            <p>{c.whyBody}</p>
            <p className="billing-punch">{c.whyPunch}</p>
            <p className="billing-caveat">{c.whyCaveat}</p>
          </div>
        </section>

        <section className="fit section-pad" id="fit">
          <div>
            <p className="kicker">{c.fitKicker}</p>
            <h2>{c.fitTitle}</h2>
          </div>
          <div className="fit-lists">
            <ul>{c.fitYes.map((item) => <li key={item}><span className="fit-yes">✓</span>{item}</li>)}</ul>
            <ul>{c.fitNo.map((item) => <li key={item}><span className="fit-no">×</span>{item}</li>)}</ul>
          </div>
        </section>

        <section className="faq section-pad" id="faq">
          <div className="section-head compact">
            <div><p className="kicker">{c.faqKicker}</p><h2>{c.faqTitle}</h2></div>
          </div>
          <dl className="faq-list">
            {c.faq.map(([question, answer]) => (
              <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>
            ))}
          </dl>
        </section>

        <section className="final-cta section-pad">
          <div className="cta-glow" aria-hidden="true" />
          <p className="kicker">{c.finalKicker}</p>
          <h2>{c.finalTitle}</h2>
          <p>{c.finalBody}</p>
          <a className="button button-primary" href={mailto(c.briefSubject, c.briefBody)}>{c.emailCta}<span>↗</span></a>
          <small>{signature} · {email}</small>
        </section>
      </main>

      <Footer locale={locale} line={c.footer} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
    </div>
  );
}
