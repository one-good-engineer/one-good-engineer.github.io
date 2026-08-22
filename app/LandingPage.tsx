type Locale = "en" | "pl";

const copy = {
  en: {
    nav: [
      ["Services", "#services"],
      ["Work", "#work"],
      ["Method", "#method"],
      ["Studio", "#studio"],
    ],
    langHref: "/pl/",
    langLabel: "PL",
    eyebrow: "Independent AI engineering studio · Kraków / remote",
    heroA: "Production AI for software",
    heroB: "that needs to do real work.",
    intro:
      "We add capable AI to existing products, build agent-ready interfaces and ship new systems from first architecture to measured production.",
    primaryCta: "Discuss a build",
    secondaryCta: "Explore the work",
    chips: ["AI product engineering", "MCP & agent interfaces", "Reliable agent workflows"],
    consoleTitle: "agent execution / live trace",
    proof: [
      ["10+ years", "shipping software products"],
      ["Multiple", "MCP servers delivered"],
      ["End to end", "architecture through operations"],
      ["One owner", "senior attention throughout"],
    ],
    servicesKicker: "What we build",
    servicesTitle: "A focused layer of intelligence. Not an AI-shaped detour.",
    servicesIntro:
      "Every engagement starts with a real product or workflow and ends with something observable, testable and useful in production.",
    services: [
      {
        n: "01",
        title: "AI inside your product",
        body: "Copilots, decision support, retrieval and generative features designed around the way users already work.",
        tags: ["Product UX", "RAG", "Tool use", "Human review"],
      },
      {
        n: "02",
        title: "MCP & agent-ready products",
        body: "Secure MCP servers and agent interfaces that expose the right tools, data and workflows — with auth, scopes, docs and testing included.",
        tags: ["MCP", "OAuth", "Tool design", "Discoverability"],
      },
      {
        n: "03",
        title: "Agentic workflows",
        body: "Multi-step operational systems with approvals, recovery paths, audit trails and clear boundaries between models and deterministic code.",
        tags: ["Orchestration", "Evals", "Guardrails", "Telemetry"],
      },
      {
        n: "04",
        title: "AI architecture & economics",
        body: "Model routing, caching, context design, quality evaluation and cost attribution — optimized per successful task, not per token alone.",
        tags: ["Routing", "Caching", "Fallbacks", "AI FinOps"],
      },
    ],
    signatureLabel: "Signature engagement",
    signatureTitle: "Agent-Ready Product Sprint",
    signatureBody:
      "Turn an existing SaaS or API into a product agents can discover, understand and use. The sprint covers interface design, MCP implementation, authentication, integration tests, machine-readable documentation and a reproducible readiness audit.",
    signatureItems: ["Architecture", "Working implementation", "Agent test harness", "Launch plan"],
    signatureCta: "Ask about the sprint",
    workKicker: "Selected systems",
    workTitle: "Evidence over adjectives.",
    workIntro:
      "Public products and engineering work across finance, collaboration, developer tooling and agent infrastructure.",
    cases: [
      {
        type: "AI product · MCP · finance",
        title: "Agent Rynku",
        body: "A production AI analyst for Warsaw Stock Exchange filings. One MCP data layer powers in-product chat, Telegram and user-connected clients.",
        result: "Regulatory filings analyzed within minutes",
        href: "https://agentrynku.pl/",
      },
      {
        type: "Agent audit · research platform",
        title: "Let Agents In",
        body: "A deterministic, reproducible audit of whether agents can find, register with and integrate a software product — backed by real agent runs.",
        result: "From discovery to first successful integration",
        href: "https://letagentsin.com/",
      },
      {
        type: "Local AI · browser extension · MCP",
        title: "Meet Live Assist",
        body: "A local-first assistant that follows live meeting captions and helps inside the call, while keeping stored conversation data on the user’s machine.",
        result: "Chrome extension + local MCP server",
        href: "https://meet-live-assist.github.io/",
      },
    ],
    methodKicker: "How the work runs",
    methodTitle: "Fast where speed helps. Deliberate where failure costs.",
    method: [
      ["Frame", "Define the user outcome, baseline, constraints and acceptance evidence before choosing a model."],
      ["Build", "Deliver the thinnest complete path through product, data, tools and interface — then expand from evidence."],
      ["Prove", "Run deterministic tests and model evaluations. Measure quality, latency, cost and failure recovery."],
      ["Operate", "Ship observability, fallbacks and documentation with the feature. Improve it from real usage."],
    ],
    principlesTitle: "Production means the unglamorous parts are included.",
    principles: [
      "Human approval where consequences matter",
      "Deterministic code around probabilistic models",
      "Model and vendor independence where practical",
      "Privacy, least privilege and auditable tool access",
      "Evals tied to user outcomes",
      "Cost, latency and failure telemetry from day one",
    ],
    studioKicker: "The studio",
    studioTitle: "Senior engineering, without the handoffs.",
    studioBody:
      "AptLayer is an independent, founder-led studio. Krystian Gwizdała brings more than a decade of full-stack product engineering and hands-on work across AI agents, MCP, developer tooling and production SaaS. Clients work directly with the person designing and building the system; specialist collaborators can be added when the scope calls for them.",
    studioLinks: [
      ["View engineering portfolio", "https://krystian-gwizdala.github.io/"],
      ["Explore GitHub", "https://github.com/krystiangw"],
    ],
    finalKicker: "Have a real workflow in mind?",
    finalTitle: "Let’s find the smallest AI system worth putting into production.",
    finalBody:
      "Share the product, the bottleneck and what a successful outcome would change. You’ll get a direct, technical response — not a sales sequence.",
    finalCta: "hello@aptlayer — coming soon",
    emailCta: "Email the studio",
    footer: "Production AI · MCP · Agent systems",
  },
  pl: {
    nav: [
      ["Usługi", "#services"],
      ["Realizacje", "#work"],
      ["Metoda", "#method"],
      ["Studio", "#studio"],
    ],
    langHref: "/",
    langLabel: "EN",
    eyebrow: "Niezależne studio AI · Kraków / zdalnie",
    heroA: "Produkcyjne AI dla aplikacji,",
    heroB: "które wykonują prawdziwą pracę.",
    intro:
      "Dodajemy użyteczne AI do istniejących produktów, tworzymy interfejsy dla agentów i dowozimy nowe systemy — od architektury po mierzalną produkcję.",
    primaryCta: "Porozmawiajmy o wdrożeniu",
    secondaryCta: "Zobacz realizacje",
    chips: ["AI w produktach", "MCP i interfejsy agentowe", "Niezawodne workflow agentowe"],
    consoleTitle: "wykonanie agenta / ślad na żywo",
    proof: [
      ["10+ lat", "tworzenia produktów cyfrowych"],
      ["Wiele", "wdrożonych serwerów MCP"],
      ["End to end", "od architektury po utrzymanie"],
      ["Jeden owner", "senior na każdym etapie"],
    ],
    servicesKicker: "Co budujemy",
    servicesTitle: "Precyzyjna warstwa inteligencji. Bez objazdu przez modę na AI.",
    servicesIntro:
      "Każda współpraca zaczyna się od realnego produktu lub procesu, a kończy rozwiązaniem, które można obserwować, testować i wykorzystać na produkcji.",
    services: [
      {
        n: "01",
        title: "AI wewnątrz produktu",
        body: "Copiloty, wsparcie decyzji, wyszukiwanie i funkcje generatywne zaprojektowane wokół sposobu, w jaki użytkownicy już pracują.",
        tags: ["Product UX", "RAG", "Narzędzia", "Kontrola człowieka"],
      },
      {
        n: "02",
        title: "MCP i produkty gotowe na agentów",
        body: "Bezpieczne serwery MCP i interfejsy agentowe udostępniające właściwe dane, narzędzia i procesy — wraz z autoryzacją, dokumentacją i testami.",
        tags: ["MCP", "OAuth", "Projekt narzędzi", "Widoczność"],
      },
      {
        n: "03",
        title: "Workflow agentowe",
        body: "Wieloetapowe systemy operacyjne z akceptacją, ścieżkami awaryjnymi, audytem i czytelną granicą między modelem a deterministycznym kodem.",
        tags: ["Orkiestracja", "Ewaluacje", "Guardrails", "Telemetria"],
      },
      {
        n: "04",
        title: "Architektura i ekonomia AI",
        body: "Routing modeli, caching, projektowanie kontekstu, ocena jakości i przypisywanie kosztów — optymalizacja udanego zadania, nie tylko tokena.",
        tags: ["Routing", "Caching", "Fallbacki", "AI FinOps"],
      },
    ],
    signatureLabel: "Flagowa usługa",
    signatureTitle: "Agent-Ready Product Sprint",
    signatureBody:
      "Przygotowanie istniejącego SaaS lub API tak, aby agenci mogli go znaleźć, zrozumieć i użyć. Sprint obejmuje projekt interfejsu, wdrożenie MCP, autoryzację, testy integracyjne, dokumentację maszynową i powtarzalny audyt gotowości.",
    signatureItems: ["Architektura", "Działające wdrożenie", "Harness testowy", "Plan uruchomienia"],
    signatureCta: "Zapytaj o sprint",
    workKicker: "Wybrane systemy",
    workTitle: "Dowody zamiast przymiotników.",
    workIntro:
      "Publiczne produkty i prace inżynierskie z obszaru finansów, współpracy, narzędzi developerskich i infrastruktury agentowej.",
    cases: [
      {
        type: "Produkt AI · MCP · finanse",
        title: "Agent Rynku",
        body: "Produkcyjny analityk AI dla GPW. Jedna warstwa danych MCP obsługuje chat w produkcie, Telegram i klientów podłączających własne narzędzia.",
        result: "Raporty giełdowe analizowane w kilka minut",
        href: "https://agentrynku.pl/",
      },
      {
        type: "Audyt agentów · platforma badawcza",
        title: "Let Agents In",
        body: "Deterministyczny i powtarzalny audyt tego, czy agent potrafi znaleźć produkt, zarejestrować się i wykonać pierwszą integrację — wsparty realnymi przebiegami agentów.",
        result: "Od znalezienia do pierwszej integracji",
        href: "https://letagentsin.com/",
      },
      {
        type: "Lokalne AI · rozszerzenie · MCP",
        title: "Meet Live Assist",
        body: "Lokalny asystent śledzący napisy spotkania i pomagający w trakcie rozmowy, z danymi przechowywanymi na komputerze użytkownika.",
        result: "Rozszerzenie Chrome + lokalny serwer MCP",
        href: "https://meet-live-assist.github.io/",
      },
    ],
    methodKicker: "Jak pracujemy",
    methodTitle: "Szybko tam, gdzie szybkość pomaga. Rozważnie tam, gdzie błąd kosztuje.",
    method: [
      ["Ramy", "Definiujemy wynik użytkownika, punkt odniesienia, ograniczenia i kryteria akceptacji przed wyborem modelu."],
      ["Budowa", "Dostarczamy najcieńszą kompletną ścieżkę przez produkt, dane, narzędzia i interfejs, a potem rozwijamy ją na podstawie dowodów."],
      ["Weryfikacja", "Uruchamiamy testy deterministyczne i ewaluacje modeli. Mierzymy jakość, opóźnienie, koszt i obsługę błędów."],
      ["Produkcja", "Wraz z funkcją wdrażamy obserwowalność, fallbacki i dokumentację. Ulepszamy system na podstawie realnego użycia."],
    ],
    principlesTitle: "Produkcja oznacza, że mniej efektowne elementy również są w zakresie.",
    principles: [
      "Akceptacja człowieka tam, gdzie konsekwencje mają znaczenie",
      "Deterministyczny kod wokół probabilistycznych modeli",
      "Niezależność od modelu i dostawcy tam, gdzie ma sens",
      "Prywatność, minimalne uprawnienia i audyt dostępu do narzędzi",
      "Ewaluacje powiązane z wynikiem użytkownika",
      "Koszt, opóźnienie i błędy mierzone od pierwszego dnia",
    ],
    studioKicker: "Studio",
    studioTitle: "Doświadczona inżynieria bez przekazywania projektu między działami.",
    studioBody:
      "AptLayer to niezależne studio prowadzone przez założyciela. Krystian Gwizdała wnosi ponad dekadę doświadczenia w tworzeniu produktów full-stack oraz praktykę w AI agents, MCP, narzędziach developerskich i produkcyjnych systemach SaaS. Klient pracuje bezpośrednio z osobą projektującą i budującą system; gdy zakres tego wymaga, dołączają wyspecjalizowani współpracownicy.",
    studioLinks: [
      ["Zobacz portfolio inżynierskie", "https://krystian-gwizdala.github.io/"],
      ["Zobacz GitHub", "https://github.com/krystiangw"],
    ],
    finalKicker: "Masz konkretny proces na myśli?",
    finalTitle: "Znajdźmy najmniejszy system AI, który warto wdrożyć na produkcję.",
    finalBody:
      "Opisz produkt, wąskie gardło i zmianę, jaką ma przynieść sukces. Otrzymasz bezpośrednią odpowiedź techniczną — nie sekwencję sprzedażową.",
    finalCta: "hello@aptlayer — wkrótce",
    emailCta: "Napisz do studia",
    footer: "Produkcyjne AI · MCP · Systemy agentowe",
  },
} as const;

const email = "gwizdala.kr@gmail.com";

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <span className="mark-layer mark-layer-a" />
      <span className="mark-layer mark-layer-b" />
      <span className="mark-core" />
    </span>
  );
}

export default function LandingPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isPl = locale === "pl";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AptLayer",
    description: isPl
      ? "Studio wdrażające produkcyjne AI, serwery MCP i systemy agentowe."
      : "Production AI engineering studio building MCP servers and agent systems.",
    url: "https://aptlayer.github.io/",
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
        <a className="brand" href={isPl ? "/pl/" : "/"} aria-label="AptLayer home">
          <Mark />
          <span>AptLayer</span>
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
            <h1>{c.heroA}<br /><span>{c.heroB}</span></h1>
            <p className="hero-intro">{c.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${email}?subject=AptLayer%20—%20project%20inquiry`}>{c.primaryCta}<span>↗</span></a>
              <a className="button button-ghost" href="#work">{c.secondaryCta}</a>
            </div>
            <div className="capability-list">
              {c.chips.map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </div>

          <div className="system-visual" aria-label={isPl ? "Schemat działania systemu agentowego" : "Agent system execution diagram"}>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="console">
              <div className="console-bar">
                <span>{c.consoleTitle}</span>
                <span className="live"><i /> live</span>
              </div>
              <div className="trace">
                <div className="trace-row"><span className="trace-time">00.000</span><span className="trace-type">intent</span><strong>resolve customer request</strong></div>
                <div className="trace-row"><span className="trace-time">00.041</span><span className="trace-type">route</span><strong>fast_model → tools</strong></div>
                <div className="trace-row active"><span className="trace-time">00.213</span><span className="trace-type">mcp</span><strong>records.search</strong></div>
                <div className="trace-row"><span className="trace-time">00.587</span><span className="trace-type">policy</span><strong>scope verified</strong></div>
                <div className="trace-row approval"><span className="trace-time">00.604</span><span className="trace-type">human</span><strong>approval required</strong></div>
                <div className="trace-row success"><span className="trace-time">03.821</span><span className="trace-type">result</span><strong>task completed · €0.014</strong></div>
              </div>
              <div className="metrics">
                <div><span>quality</span><strong>0.96</strong></div>
                <div><span>latency</span><strong>3.8s</strong></div>
                <div><span>fallback</span><strong>none</strong></div>
              </div>
            </div>
            <div className="visual-label label-input">01 / CONTEXT</div>
            <div className="visual-label label-tools">02 / TOOLS</div>
            <div className="visual-label label-proof">03 / PROOF</div>
          </div>
        </section>

        <section className="proof-row section-pad" aria-label={isPl ? "Doświadczenie" : "Experience"}>
          {c.proof.map(([value, label]) => (
            <div className="proof-item" key={value + label}><strong>{value}</strong><span>{label}</span></div>
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
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
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
            {c.cases.map((item, index) => (
              <a className="case-card" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                <div className={`case-graphic case-graphic-${index + 1}`} aria-hidden="true">
                  <span className="case-orb" />
                  <span className="case-line line-a" />
                  <span className="case-line line-b" />
                  <span className="case-glyph">{index === 0 ? "Σ" : index === 1 ? "↳" : "◉"}</span>
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
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
          <div className="principles">
            <h3>{c.principlesTitle}</h3>
            <ul>{c.principles.map((principle) => <li key={principle}><span>✓</span>{principle}</li>)}</ul>
          </div>
        </section>

        <section className="studio section-pad" id="studio">
          <div className="studio-mark"><Mark /><span>AL / 01</span></div>
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
          <a className="button button-primary" href={`mailto:${email}?subject=AptLayer%20—%20project%20inquiry`}>{c.emailCta}<span>↗</span></a>
          <small>{email}</small>
        </section>
      </main>

      <footer className="footer section-pad">
        <a className="brand" href={isPl ? "/pl/" : "/"}><Mark /><span>AptLayer</span></a>
        <p>{c.footer}</p>
        <p>© {new Date().getFullYear()} AptLayer</p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </div>
  );
}
