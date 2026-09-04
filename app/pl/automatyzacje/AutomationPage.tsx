import {Mark, brand, email} from "../../LandingPage";
import LeadForm from "./LeadForm";

const problems = [
  {
    n: "01",
    title: "Lead czeka w skrzynce",
    body: "Zapytanie wpada po godzinach albo w trakcie spotkania. Pierwsza odpowiedź przychodzi dopiero wtedy, gdy klient rozmawia już z konkurencją.",
  },
  {
    n: "02",
    title: "Follow-up zależy od pamięci",
    body: "Handlowiec ma oddzwonić jutro, ale pojawiają się kolejne sprawy. Brak odpowiedzi nie tworzy zadania ani przypomnienia.",
  },
  {
    n: "03",
    title: "Te same dane są przepisywane",
    body: "Informacje przechodzą ręcznie z formularza do poczty, arkusza i CRM. Każda kopia zabiera czas i może zawierać błąd.",
  },
  {
    n: "04",
    title: "CRM nie pokazuje rzeczywistości",
    body: "Po rozmowie albo spotkaniu nikt nie aktualizuje statusu. Właściciel nie widzi, gdzie proces zwalnia i które leady znikają.",
  },
];

const examples = [
  {
    n: "01",
    title: "Lead z formularza",
    before: "Wiadomość trafia do wspólnej skrzynki i czeka na ręczne przepisanie.",
    flow: ["formularz", "klasyfikacja", "CRM", "odpowiedź", "alert", "follow-up"],
    after: "Klient od razu wie, że zapytanie dotarło, a zespół ma komplet danych, właściciela i następny krok.",
    tools: "Formularz, CRM lub arkusz, e-mail, n8n i model językowy",
    featured: true,
  },
  {
    n: "02",
    title: "Firmowa skrzynka",
    before: "Pracownicy wiele razy odpowiadają na podobne pytania i szukają informacji w kilku miejscach.",
    flow: ["e-mail", "intencja", "wiedza", "szkic", "akceptacja", "wysyłka"],
    after: "System przygotowuje odpowiedź i źródła, ale człowiek zatwierdza wiadomość przed wysłaniem.",
    tools: "Poczta firmowa, baza wiedzy, AI i kontrola człowieka",
  },
  {
    n: "03",
    title: "Rozmowa i CRM",
    before: "Notatka z rozmowy zostaje w kalendarzu, komunikatorze albo głowie handlowca.",
    flow: ["rozmowa", "transkrypcja", "ustalenia", "CRM", "zadania"],
    after: "Podsumowanie, decyzje i kolejne kroki trafiają do właściwego klienta bez ręcznego kopiowania.",
    tools: "Transkrypcja, CRM, kalendarz i automatyzacja z walidacją",
  },
];

const cooperation = [
  ["01", "Krótka diagnoza", "W 20 minut sprawdzamy, czy proces jest wystarczająco częsty i kosztowny, żeby automatyzacja miała sens."],
  ["02", "Projekt procesu", "Opisuję stan obecny, wąskie gardła, proces docelowy, integracje, ryzyka i sposób pomiaru."],
  ["03", "Wdrożenie pilotażowe", "Zaczynamy od ograniczonego zakresu, który można bezpiecznie uruchomić i ocenić."],
  ["04", "Testy z zespołem", "Sprawdzamy typowe przypadki, wyjątki, błędy i miejsca, w których decyzję zachowuje człowiek."],
  ["05", "Uruchomienie i monitoring", "Po wdrożeniu obserwujemy czas, błędy i efekt biznesowy, a potem poprawiamy proces."],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatyzacja sprzedaży i obsługi klienta",
  description:
    "Projektowanie i wdrażanie automatyzacji formularzy, poczty, CRM, follow-upów i obsługi klienta dla małych firm.",
  provider: {
    "@type": "ProfessionalService",
    name: `${brand} & Co.`,
    email,
    address: {"@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL"},
  },
  areaServed: {"@type": "Country", name: "Polska"},
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://one-good-engineer.github.io/pl/automatyzacje/",
  },
};

export default function AutomationPage() {
  return (
    <div className="site-shell automation-shell" lang="pl">
      <div className="noise" aria-hidden="true" />
      <header className="topbar automation-topbar">
        <a className="brand" href="/pl/" aria-label="One Good Engineer, strona główna">
          <Mark />
          <span className="brand-name">{brand}<i>&amp; Co.</i></span>
        </a>
        <nav className="nav" aria-label="Nawigacja po ofercie automatyzacji">
          <a href="#problemy">Problemy</a>
          <a href="#przyklady">Przykłady</a>
          <a href="#wspolpraca">Współpraca</a>
        </nav>
        <div className="top-actions">
          <a className="language" href="/pl/">Pozostałe usługi</a>
          <a className="contact-pill" href="#konsultacja">Bezpłatna konsultacja</a>
        </div>
      </header>

      <main>
        <section className="automation-hero section-pad">
          <div className="automation-hero-copy">
            <p className="eyebrow"><span className="status-dot" />Automatyzacje dla małych firm · Kraków i cała Polska</p>
            <h1>Automatyzuję sprzedaż i obsługę klienta w małych firmach.</h1>
            <p className="automation-hero-sub">
              Łączę formularze, e-mail, CRM i AI, żeby firma szybciej odpowiadała klientom, nie traciła leadów i ograniczała ręczną pracę.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#konsultacja">Umów bezpłatną konsultację<span>↓</span></a>
              <a className="button button-ghost" href="#przyklady">Zobacz przykłady</a>
            </div>
            <p className="automation-qualifier">Pierwsza rozmowa trwa 20 minut. Jej celem jest diagnoza, nie bezpłatny warsztat projektowy.</p>
          </div>

          <div className="lead-system" aria-label="Przykład automatycznej obsługi zapytania">
            <div className="lead-system-head">
              <span>nowy lead · przykład procesu</span>
              <span className="badge">gotowy do reakcji</span>
            </div>
            <div className="lead-summary">
              <span>Zapytanie o szkolenie dla zespołu</span>
              <strong>Anna · firma usługowa · Kraków</strong>
            </div>
            <ol className="lead-steps">
              <li><span>00</span><strong>Formularz odebrany</strong><small>teraz</small></li>
              <li className="active"><span>01</span><strong>Temat i priorytet rozpoznane</strong><small>AI + reguły</small></li>
              <li><span>02</span><strong>Kontakt zapisany w CRM</strong><small>właściciel przypisany</small></li>
              <li><span>03</span><strong>Potwierdzenie przygotowane</strong><small>do wysłania</small></li>
              <li className="success"><span>04</span><strong>Follow-up zaplanowany</strong><small>brak zgubionego leada</small></li>
            </ol>
            <div className="lead-control"><span>Kontrola</span><strong>Człowiek zatwierdza decyzje z konsekwencjami</strong></div>
          </div>
        </section>

        <section className="automation-proof section-pad" aria-label="Rezultaty automatyzacji">
          <div><strong>Szybsza odpowiedź</strong><span>czas liczony w minutach, nie godzinach</span></div>
          <div><strong>Pełny status</strong><span>każdy lead ma właściciela i następny krok</span></div>
          <div><strong>Mniej kopiowania</strong><span>dane przechodzą między systemami automatycznie</span></div>
        </section>

        <section className="automation-problems section-pad" id="problemy">
          <div className="section-head">
            <div><p className="kicker">Czy to brzmi znajomo?</p><h2>Małe opóźnienia, przez które firma traci czas i klientów.</h2></div>
            <p>Nie zaczynam od pytania „gdzie dodać AI?”. Zaczynam od miejsca, w którym proces zwalnia, dane znikają albo ktoś wykonuje tę samą czynność kolejny raz.</p>
          </div>
          <div className="problem-grid">
            {problems.map((problem) => (
              <article key={problem.n}>
                <span>{problem.n}</span>
                <h3>{problem.title}</h3>
                <p>{problem.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="automation-examples section-pad" id="przyklady">
          <div className="section-head">
            <div><p className="kicker">Przykładowe automatyzacje</p><h2>Proces przed wdrożeniem i po wdrożeniu.</h2></div>
            <p>Narzędzia są drugorzędne. Najpierw ustalamy, co ma się zmienić dla klienta, pracownika i właściciela firmy.</p>
          </div>
          <div className="example-list">
            {examples.map((example) => (
              <article className={example.featured ? "featured" : ""} key={example.n}>
                <div className="example-title">
                  <span>{example.n}</span>
                  <h3>{example.title}</h3>
                  {example.featured ? <em>Pierwsze demo kanału</em> : null}
                </div>
                <div className="before-after">
                  <div><small>Przed</small><p>{example.before}</p></div>
                  <div><small>Po</small><p>{example.after}</p></div>
                </div>
                <div className="process-flow" aria-label={`Przebieg: ${example.flow.join(", ")}`}>
                  {example.flow.map((step, index) => <span key={step}>{step}{index < example.flow.length - 1 ? <i>→</i> : null}</span>)}
                </div>
                <p className="tool-note"><strong>Narzędzia:</strong> {example.tools}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="automation-method section-pad" id="wspolpraca">
          <div className="section-head compact">
            <div><p className="kicker">Jak wygląda współpraca</p><h2>Najpierw mały, mierzalny proces. Potem kolejne kroki.</h2></div>
          </div>
          <div className="cooperation-list">
            {cooperation.map(([n, title, body]) => (
              <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </section>

        <section className="automation-trust section-pad">
          <div className="trust-facts">
            <div><strong>10+</strong><span>lat tworzenia oprogramowania produkcyjnego</span></div>
            <div><strong>1-3</strong><span>tygodnie dla dobrze ograniczonego wdrożenia startowego</span></div>
            <div><strong>0</strong><span>uzależnienia od jednego narzędzia lub zamkniętego systemu</span></div>
          </div>
          <div className="trust-copy">
            <p className="kicker">Nie tylko scenariusz no-code</p>
            <h2>Automatyzacja ma działać z systemami, które firma już posiada.</h2>
            <p>Jestem Krystian. Od ponad dziesięciu lat buduję produkty webowe od interfejsu po backend i produkcję. Dzięki temu mogę połączyć CRM, pocztę, formularze, API i modele AI, a także zaprojektować obsługę błędów, monitoring oraz bezpieczne miejsce na decyzję człowieka.</p>
            <a href="https://krystian-gwizdala.github.io/" target="_blank" rel="noreferrer">Zobacz portfolio inżynierskie<span>↗</span></a>
          </div>
        </section>

        <section className="automation-consultation section-pad" id="konsultacja">
          <div className="consultation-copy">
            <p className="kicker">Bezpłatna konsultacja diagnostyczna</p>
            <h2>Który proces zabiera Twojej firmie najwięcej czasu?</h2>
            <p>Opisz go w kilku zdaniach. Sprawdzę, czy automatyzacja ma ekonomiczny sens i zaproponuję następny krok. Jeśli nie ma sensu, też powiem to wprost.</p>
            <ul>
              <li><span>✓</span>20 minut</li>
              <li><span>✓</span>bez prezentacji sprzedażowej</li>
              <li><span>✓</span>odpowiedź bezpośrednio ode mnie</li>
            </ul>
          </div>
          <LeadForm />
        </section>
      </main>

      <footer className="footer section-pad">
        <a className="brand" href="/pl/"><Mark /><span className="brand-name">{brand}<i>&amp; Co.</i></span></a>
        <p>Automatyzacje procesów · Kraków i cała Polska</p>
        <p>© {new Date().getFullYear()} {brand} &amp; Co.</p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />
    </div>
  );
}
