type Locale = "en" | "pl";

const copy = {
  en: {
    nav: [
      ["Services", "#services"],
      ["Work", "#work"],
      ["Method", "#method"],
      ["About", "#studio"],
    ],
    langHref: "/pl/",
    langLabel: "PL",
    eyebrow: "One engineer, a crew of agents · Kraków, working remotely",
    heroA: "You don't need a software house.",
    heroB: "You need one engineer running a crew of agents.",
    intro:
      "I'm Krystian. Ten years of shipping product software, and now a crew of AI agents doing the volume while I stay accountable for what lands: the architecture, the review, the tests and the way it behaves in production. Vibe coding gets you a prototype. This gets you something you can run.",
    primaryCta: "Send me the project",
    secondaryCta: "See what I shipped",
    chips: ["Delivery run by agents", "Senior review on every change", "No team to keep fed"],
    consoleTitle: "how a change reaches production",
    consoleBadge: "the loop",
    trace: [
      ["00", "brief", "scope and acceptance agreed"],
      ["01", "agents", "implementation, migrations, tests"],
      ["02", "review", "independent model reads the diff"],
      ["03", "human", "I read it, and I sign it"],
      ["04", "gate", "tests, lint and build green"],
      ["05", "ship", "repo, runbook, handover"],
    ],
    metrics: [
      ["review", "every diff, twice"],
      ["you get", "the repo and the runbook"],
      ["lock-in", "none"],
    ],
    proof: [
      ["4", "products live in public, all built solo"],
      ["4", "open-source MCP servers on GitHub"],
      ["177", "products measured by my agent-readiness scanner"],
      ["10+", "years shipping software before the agents existed"],
    ],
    servicesKicker: "What I build",
    servicesTitle: "Four kinds of work, and all of them end in production.",
    servicesIntro:
      "Every engagement starts from a product or a process that already exists, and ends with something you can observe, test and hand to your own team.",
    services: [
      {
        n: "01",
        title: "Your product, end to end",
        body: "Architecture, implementation, tests and deployment for a web product or an API. The build a software house quotes in months, run by one engineer and a crew of agents.",
        tags: ["Architecture", "Full stack", "CI and tests", "Deployment"],
      },
      {
        n: "02",
        title: "AI inside an existing product",
        body: "Copilots, decision support, retrieval and generative features shaped around the way your users already work.",
        tags: ["Product UX", "RAG", "Tool use", "Human review"],
      },
      {
        n: "03",
        title: "MCP and agent-ready products",
        body: "Secure MCP servers and agent interfaces that expose the right tools, data and workflows, with authorization, scopes, documentation and tests in the same delivery.",
        tags: ["MCP", "OAuth", "Tool design", "Discoverability"],
      },
      {
        n: "04",
        title: "Agent workflows and what they cost",
        body: "Multi-step operational systems with approvals, recovery paths and audit trails, tuned against the cost of a finished task rather than the price of a token.",
        tags: ["Orchestration", "Evals", "Guardrails", "AI FinOps"],
      },
    ],
    signatureLabel: "Signature engagement",
    signatureTitle: "Agent-Ready Product Sprint",
    signatureBody:
      "I take an existing SaaS or API and get it to the state where an agent can find it, understand it and use it. The sprint covers interface design, the MCP implementation, authentication, integration tests, machine-readable documentation and a readiness audit you can re-run yourself afterwards.",
    signatureItems: ["Architecture", "Working implementation", "Agent test harness", "Launch plan"],
    signatureCta: "Ask about the sprint",
    workKicker: "Live products",
    workTitle: "Four products, one engineer, all of them public.",
    workIntro:
      "This is the whole argument. One person, working this way, shipped all four. Open them and check.",
    cases: [
      {
        type: "AI product · MCP · finance",
        title: "Agent Rynku",
        body: "A production AI analyst for Warsaw Stock Exchange filings. One MCP data layer serves the in-product chat, a Telegram bot and any MCP client a user connects.",
        result: "One MCP server exposing 92 tools over exchange data",
        href: "https://agentrynku.pl/",
        img: "/work/agent-rynku.webp",
        alt: "Agent Rynku home page: an AI analyst for the Warsaw Stock Exchange with a sample Telegram alert",
      },
      {
        type: "Agent readiness · research",
        title: "Let Agents In",
        body: "A reproducible audit of whether an agent can find a product, read its docs, create an account, get a key and make the first API call without a person helping.",
        result: "177 products measured, 79 with a signup an agent cannot render",
        href: "https://letagentsin.com/",
        img: "/work/let-agents-in.webp",
        alt: "Let Agents In home page: a scanner that measures whether an AI agent can integrate a product",
      },
      {
        type: "Local AI · extension · MCP",
        title: "Meet Live Assist",
        body: "A local-first assistant that reads live meeting captions and answers in a side panel while the call is still running. The transcript stays a file on your own disk.",
        result: "Chrome extension plus a local MCP server",
        href: "https://meet-live-assist.github.io/",
        img: "/work/meet-live-assist.webp",
        alt: "Meet Live Assist home page: a live in-call assistant for Google Meet and Zoom",
      },
      {
        type: "Agent infrastructure · hosted",
        title: "Muster",
        body: "Shared operational memory for agents that outlive their own sessions: who is on duty, who owns what, what rotted and what needs a human. An agent registers itself with one HTTP call.",
        result: "Signup is one curl, no account and no CAPTCHA",
        href: "https://musterboard.dev/",
        img: "/work/muster.webp",
        alt: "Muster home page: shared operational memory for long-lived AI agents",
      },
    ],
    methodKicker: "How the work runs",
    methodTitle: "Agents do the volume. A senior engineer stays accountable.",
    method: [
      ["Frame", "We agree the outcome, the constraints and what evidence counts as done. This step is never handed to a model."],
      ["Run", "Agents write the implementation, the migrations and the test suites. I decide what gets built, in what order, and what gets thrown away."],
      ["Review", "Every change is read twice: by an independent model that never saw the reasoning, and then by me, because a model rationalises its own work."],
      ["Hand over", "Observability, fallbacks and documentation ship with the feature. You end up with the repository, the tests and the runbook, not a dependency on me."],
    ],
    principlesTitle: "The parts vibe coding skips are the parts you are paying for.",
    principles: [
      "Nothing ships that a human has not read",
      "Tests that can actually fail, not tests that describe the code",
      "You own the repository, the history and the runbook",
      "A human approves anything with consequences",
      "Deterministic code wrapped around probabilistic models",
      "Cost, latency and failure telemetry from the first day",
    ],
    studioFacts: [
      ["Where", "Kraków, working remotely across the EU"],
      ["Languages", "Polish and English"],
      ["Experience", "10+ years in product engineering"],
      ["Contact", "Straight to my inbox, no form and no funnel"],
    ],
    studioKicker: "The obvious objection",
    studioTitle: "One person is the whole supplier. Here is why that is safe.",
    studioBody:
      "Everything lives in a repository you own, with the history, the tests and a runbook written for whoever comes next. No in-house framework, no hosting that only I understand, no month of archaeology if you replace me. Behind that sits more than ten years of full-stack product engineering, with the recent years spent on AI agents, MCP and production SaaS. When a scope genuinely needs a second specialist, I bring one in and tell you who it is.",
    studioLinks: [
      ["Engineering portfolio", "https://krystian-gwizdala.github.io/"],
      ["Code on GitHub", "https://github.com/krystiangw"],
    ],
    finalKicker: "Got a quote you are not happy with?",
    finalTitle: "Let's find the smallest version of your project worth building.",
    finalBody:
      "Tell me the project, the deadline and what you were quoted. You get a technical answer from me, not a sales sequence.",
    emailCta: "Write to me",
    footer: "One engineer · a crew of agents · Kraków",
  },
  pl: {
    nav: [
      ["Usługi", "#services"],
      ["Realizacje", "#work"],
      ["Metoda", "#method"],
      ["O mnie", "#studio"],
    ],
    langHref: "/",
    langLabel: "EN",
    eyebrow: "Jeden inżynier, załoga agentów · Kraków, zdalnie",
    heroA: "Nie potrzebujesz software house'u.",
    heroB: "Potrzebujesz jednego inżyniera, który prowadzi załogę agentów.",
    intro:
      "Jestem Krystian. Dziesięć lat dowożenia oprogramowania produktowego, a teraz załoga agentów AI robi objętość, podczas gdy ja odpowiadam za to, co ląduje: za architekturę, review, testy i zachowanie na produkcji. Vibe coding daje prototyp. To daje coś, co da się uruchomić.",
    primaryCta: "Opisz mi projekt",
    secondaryCta: "Zobacz, co dowiozłem",
    chips: ["Dostawa prowadzona agentami", "Senior sprawdza każdą zmianę", "Bez zespołu do utrzymania"],
    consoleTitle: "jak zmiana trafia na produkcję",
    consoleBadge: "pętla",
    trace: [
      ["00", "brief", "ustalony zakres i odbiór"],
      ["01", "agenty", "implementacja, migracje, testy"],
      ["02", "review", "niezależny model czyta diff"],
      ["03", "człowiek", "czytam i podpisuję"],
      ["04", "bramka", "testy, lint i build na zielono"],
      ["05", "wydanie", "repo, runbook, przekazanie"],
    ],
    metrics: [
      ["review", "każdy diff, dwa razy"],
      ["dostajesz", "repo i runbook"],
      ["lock-in", "brak"],
    ],
    proof: [
      ["4", "produkty działające publicznie, wszystkie zbudowane solo"],
      ["4", "serwery MCP z otwartym kodem na GitHubie"],
      ["177", "produktów zmierzonych moim skanerem gotowości na agentów"],
      ["10+", "lat dowożenia oprogramowania, zanim pojawiły się agenty"],
    ],
    servicesKicker: "Co buduję",
    servicesTitle: "Cztery rodzaje pracy, każdy kończy się na produkcji.",
    servicesIntro:
      "Każda współpraca zaczyna się od produktu albo procesu, który już istnieje, a kończy czymś, co możesz obserwować, testować i przekazać własnemu zespołowi.",
    services: [
      {
        n: "01",
        title: "Twój produkt, od początku do końca",
        body: "Architektura, wdrożenie, testy i deployment produktu webowego albo API. To, co software house wycenia w miesiącach, prowadzone przez jednego inżyniera i załogę agentów.",
        tags: ["Architektura", "Full stack", "CI i testy", "Deployment"],
      },
      {
        n: "02",
        title: "AI w istniejącym produkcie",
        body: "Copiloty, wsparcie decyzji, wyszukiwanie i funkcje generatywne zaprojektowane pod to, jak Twoi użytkownicy już pracują.",
        tags: ["Product UX", "RAG", "Narzędzia", "Kontrola człowieka"],
      },
      {
        n: "03",
        title: "MCP i produkty gotowe na agentów",
        body: "Bezpieczne serwery MCP i interfejsy agentowe udostępniające właściwe narzędzia, dane i procesy, razem z autoryzacją, zakresami uprawnień, dokumentacją i testami w tej samej dostawie.",
        tags: ["MCP", "OAuth", "Projekt narzędzi", "Widoczność"],
      },
      {
        n: "04",
        title: "Workflow agentowe i ich koszt",
        body: "Wieloetapowe systemy operacyjne z akceptacją, ścieżkami odzyskiwania i audytem, strojone pod koszt skończonego zadania, a nie pod cenę tokena.",
        tags: ["Orkiestracja", "Ewaluacje", "Guardrails", "AI FinOps"],
      },
    ],
    signatureLabel: "Flagowa usługa",
    signatureTitle: "Agent-Ready Product Sprint",
    signatureBody:
      "Biorę istniejący SaaS albo API i doprowadzam je do stanu, w którym agent potrafi je znaleźć, zrozumieć i użyć. Sprint obejmuje projekt interfejsu, wdrożenie MCP, uwierzytelnianie, testy integracyjne, dokumentację czytelną dla maszyn i audyt gotowości, który potem możesz powtórzyć sam.",
    signatureItems: ["Architektura", "Działające wdrożenie", "Harness testowy dla agentów", "Plan uruchomienia"],
    signatureCta: "Zapytaj o sprint",
    workKicker: "Produkty na żywo",
    workTitle: "Cztery produkty, jeden inżynier, wszystkie publiczne.",
    workIntro:
      "To jest cały argument. Jedna osoba, pracując w ten sposób, dowiozła wszystkie cztery. Otwórz i sprawdź.",
    cases: [
      {
        type: "Produkt AI · MCP · finanse",
        title: "Agent Rynku",
        body: "Produkcyjny analityk AI dla raportów spółek z GPW. Jedna warstwa danych MCP obsługuje czat w produkcie, bota na Telegramie i dowolnego klienta MCP, którego podłączy użytkownik.",
        result: "Jeden serwer MCP z 92 narzędziami nad danymi giełdowymi",
        href: "https://agentrynku.pl/",
        img: "/work/agent-rynku.webp",
        alt: "Strona Agent Rynku: analityk AI dla GPW z przykładowym alertem na Telegramie",
      },
      {
        type: "Gotowość na agentów · badania",
        title: "Let Agents In",
        body: "Powtarzalny audyt tego, czy agent potrafi znaleźć produkt, przeczytać dokumentację, założyć konto, dostać klucz i wykonać pierwsze wywołanie API bez pomocy człowieka.",
        result: "177 zmierzonych produktów, 79 z rejestracją, której agent nie wyrenderuje",
        href: "https://letagentsin.com/",
        img: "/work/let-agents-in.webp",
        alt: "Strona Let Agents In: skaner mierzący, czy agent AI zintegruje się z produktem",
      },
      {
        type: "Lokalne AI · rozszerzenie · MCP",
        title: "Meet Live Assist",
        body: "Lokalny asystent, który czyta napisy ze spotkania i odpowiada w panelu bocznym, kiedy rozmowa jeszcze trwa. Transkrypcja zostaje plikiem na Twoim dysku.",
        result: "Rozszerzenie Chrome plus lokalny serwer MCP",
        href: "https://meet-live-assist.github.io/",
        img: "/work/meet-live-assist.webp",
        alt: "Strona Meet Live Assist: asystent działający na żywo w rozmowie na Google Meet i Zoom",
      },
      {
        type: "Infrastruktura agentowa · hostowane",
        title: "Muster",
        body: "Wspólna pamięć operacyjna dla agentów, które przeżywają własne sesje: kto jest na służbie, kto co ma, co zgniło i co wymaga człowieka. Agent rejestruje się jednym wywołaniem HTTP.",
        result: "Rejestracja to jeden curl, bez konta i bez CAPTCHA",
        href: "https://musterboard.dev/",
        img: "/work/muster.webp",
        alt: "Strona Muster: wspólna pamięć operacyjna dla długo żyjących agentów AI",
      },
    ],
    methodKicker: "Jak to przebiega",
    methodTitle: "Agenty robią objętość. Odpowiedzialność zostaje po stronie seniora.",
    method: [
      ["Ramy", "Ustalamy wynik, ograniczenia i to, jaki dowód oznacza koniec. Tego etapu nigdy nie oddaję modelowi."],
      ["Prowadzenie", "Agenty piszą implementację, migracje i zestawy testów. Ja decyduję, co powstaje, w jakiej kolejności i co idzie do kosza."],
      ["Review", "Każda zmiana jest czytana dwa razy: przez niezależny model, który nie widział rozumowania, i przeze mnie, bo model racjonalizuje własną robotę."],
      ["Przekazanie", "Obserwowalność, fallbacki i dokumentacja jadą razem z funkcją. Zostajesz z repozytorium, testami i runbookiem, a nie z zależnością ode mnie."],
    ],
    principlesTitle: "To, co vibe coding pomija, jest dokładnie tym, za co płacisz.",
    principles: [
      "Nic nie idzie na produkcję bez przeczytania przez człowieka",
      "Testy, które naprawdę mogą się wywalić, a nie opisujące kod",
      "Repozytorium, historia i runbook należą do Ciebie",
      "Człowiek akceptuje wszystko, co niesie konsekwencje",
      "Deterministyczny kod owinięty wokół probabilistycznych modeli",
      "Telemetria kosztu, opóźnienia i błędów od pierwszego dnia",
    ],
    studioFacts: [
      ["Gdzie", "Kraków, praca zdalna w całej UE"],
      ["Języki", "polski i angielski"],
      ["Doświadczenie", "10+ lat w inżynierii produktowej"],
      ["Kontakt", "prosto na moją skrzynkę, bez formularza i bez lejka"],
    ],
    studioKicker: "Oczywisty zarzut",
    studioTitle: "Jedna osoba jest całym dostawcą. Oto dlaczego to jest bezpieczne.",
    studioBody:
      "Wszystko żyje w repozytorium, które należy do Ciebie, razem z historią, testami i runbookiem napisanym dla tego, kto przyjdzie po mnie. Żadnego autorskiego frameworka, żadnego hostingu, który rozumiem tylko ja, żadnego miesiąca archeologii, jeśli mnie wymienisz. Stoi za tym ponad dekada inżynierii produktowej full-stack, a ostatnie lata poszły w agentów AI, MCP i produkcyjny SaaS. Kiedy zakres naprawdę wymaga drugiego specjalisty, dobieram go i mówię Ci, kto to jest.",
    studioLinks: [
      ["Portfolio inżynierskie", "https://krystian-gwizdala.github.io/"],
      ["Kod na GitHubie", "https://github.com/krystiangw"],
    ],
    finalKicker: "Masz wycenę, która Ci nie leży?",
    finalTitle: "Znajdźmy najmniejszą wersję Twojego projektu, którą warto zbudować.",
    finalBody:
      "Napisz mi, jaki to projekt, jaki jest termin i jaką masz wycenę. Dostaniesz ode mnie odpowiedź techniczną, nie sekwencję sprzedażową.",
    emailCta: "Napisz do mnie",
    footer: "Jeden inżynier · załoga agentów · Kraków",
  },
} as const;

const email = "gwizdala.kr@gmail.com";
const signature = "Krystian Gwizdała";
const brand = "One Good Engineer";
const traceTone = ["", "active", "", "success", "", "approval"] as const;

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <span className="mark-lead" />
      <span />
      <span />
      <span />
    </span>
  );
}

export default function LandingPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isPl = locale === "pl";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${brand} & Co.`,
    description: isPl
      ? "Jeden inżynier prowadzący załogę agentów AI dowozi projekt od architektury po produkcję, zamiast software house'u."
      : "One senior engineer running a crew of AI agents delivers the project end to end, in place of a software house.",
    url: "https://one-good-engineer.github.io/",
    email,
    founder: {
      "@type": "Person",
      name: "Krystian Gwizdała",
      url: "https://krystian-gwizdala.github.io/",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kraków",
      addressCountry: "PL",
    },
    areaServed: ["Poland", "European Union", "Worldwide"],
    knowsAbout: [
      "Software Product Engineering",
      "AI Product Engineering",
      "Model Context Protocol",
      "AI Agents",
      "Agentic Workflows",
      "LLM Evaluation",
      "AI Cost Optimization",
    ],
    sameAs: ["https://github.com/krystiangw"],
  };

  return (
    <div className="site-shell" lang={locale}>
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href={isPl ? "/pl/" : "/"} aria-label={`${brand} home`}>
          <Mark />
          <span className="brand-name">{brand}<i>&amp; Co.</i></span>
        </a>
        <nav className="nav" aria-label={isPl ? "Główna nawigacja" : "Main navigation"}>
          {c.nav.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <div className="top-actions">
          <a className="language" href={c.langHref} hrefLang={isPl ? "en" : "pl"}>{c.langLabel}</a>
          <a className="contact-pill" href={`mailto:${email}`}>{isPl ? "Kontakt" : "Contact"}</a>
        </div>
      </header>

      <main>
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{c.eyebrow}</p>
            <h1>{c.heroA}</h1>
            <p className="hero-sub">{c.heroB}</p>
            <p className="hero-intro">{c.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${email}?subject=Project%20inquiry`}>{c.primaryCta}<span>↗</span></a>
              <a className="button button-ghost" href="#work">{c.secondaryCta}</a>
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

        <section className="proof-row section-pad" aria-label={isPl ? "Dowody" : "Evidence"}>
          {c.proof.map(([value, label]) => (
            <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </section>

        <section className="services section-pad" id="services">
          <div className="section-head">
            <div><p className="kicker">{c.servicesKicker}</p><h2>{c.servicesTitle}</h2></div>
            <p>{c.servicesIntro}</p>
          </div>
          <div className="service-grid">
            {c.services.map((service) => (
              <article className="service-card" key={service.n}>
                <span className="service-number">{service.n}</span>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <article className="signature-card">
            <div className="signature-copy">
              <p className="kicker">{c.signatureLabel}</p>
              <h3>{c.signatureTitle}</h3>
              <p>{c.signatureBody}</p>
              <a href={`mailto:${email}?subject=Agent-Ready%20Product%20Sprint`}>{c.signatureCta}<span>↗</span></a>
            </div>
            <ol className="signature-steps">
              {c.signatureItems.map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}
            </ol>
          </article>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-head compact">
            <div><p className="kicker">{c.workKicker}</p><h2>{c.workTitle}</h2></div>
            <p>{c.workIntro}</p>
          </div>
          <div className="case-grid">
            {c.cases.map((item) => (
              <a className="case-card" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                <div className="case-shot">
                  {/* Plain img: the export is static and next/image adds nothing with unoptimized output. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.alt} width={1200} height={750} loading="lazy" decoding="async" />
                </div>
                <p className="case-type">{item.type}</p>
                <h3>{item.title}<span>↗</span></h3>
                <p>{item.body}</p>
                <strong>{item.result}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="method section-pad" id="method">
          <div className="section-head compact">
            <div><p className="kicker">{c.methodKicker}</p><h2>{c.methodTitle}</h2></div>
          </div>
          <div className="method-grid">
            {c.method.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div className="method-body"><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
          <div className="principles">
            <h3>{c.principlesTitle}</h3>
            <ul>{c.principles.map((principle) => <li key={principle}><span>✓</span>{principle}</li>)}</ul>
          </div>
        </section>

        <section className="studio section-pad" id="studio">
          <dl className="studio-facts">
            {c.studioFacts.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
          <div className="studio-copy">
            <p className="kicker">{c.studioKicker}</p>
            <h2>{c.studioTitle}</h2>
            <p>{c.studioBody}</p>
            <div className="studio-links">
              {c.studioLinks.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}>{label}<span>↗</span></a>)}
            </div>
          </div>
        </section>

        <section className="final-cta section-pad">
          <div className="cta-glow" aria-hidden="true" />
          <p className="kicker">{c.finalKicker}</p>
          <h2>{c.finalTitle}</h2>
          <p>{c.finalBody}</p>
          <a className="button button-primary" href={`mailto:${email}?subject=Project%20inquiry`}>{c.emailCta}<span>↗</span></a>
          <small>{signature} · {email}</small>
        </section>
      </main>

      <footer className="footer section-pad">
        <a className="brand" href={isPl ? "/pl/" : "/"}><Mark /><span className="brand-name">{brand}<i>&amp; Co.</i></span></a>
        <p>{c.footer}</p>
        <p>© {new Date().getFullYear()} {brand} &amp; Co.</p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </div>
  );
}
