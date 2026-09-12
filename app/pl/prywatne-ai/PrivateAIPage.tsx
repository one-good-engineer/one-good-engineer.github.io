import { Mark, brand, email } from "../../LandingPage";

const concerns = [
  ["01", "Wiedza jest w dokumentach", "Umowy, procedury i instrukcje są rozproszone, a odpowiedź zależy od tego, kto akurat pamięta, gdzie szukać."],
  ["02", "Te same pytania wracają", "Zespół traci czas na odtwarzanie odpowiedzi, zamiast rozwiązywać sprawy, które wymagają doświadczenia i decyzji."],
  ["03", "Dane wymagają ostrożności", "Nie każdą treść można wysłać do przypadkowego narzędzia. Liczą się dostęp, retencja, logi i zasady użycia."],
  ["04", "Nie wiesz, co wybrać", "Lokalny model, europejska chmura czy gotowe API? Odpowiedź zależy od danych, wolumenu, jakości i kosztu całego procesu."],
] as const;

const services = [
  {
    n: "01",
    label: "Nie wiesz, czy to ma sens",
    title: "Audyt danych i procesu",
    body: "Sprawdzam jeden konkretny proces, źródła wiedzy, dostępne systemy i ograniczenia. Porównuję zmianę procesu, gotowe narzędzie, API i model uruchamiany prywatnie.",
    output: "Wynik: zakres pilota, ryzyka, sposób pomiaru i rekomendacja technologiczna.",
  },
  {
    n: "02",
    label: "Chcesz sprawdzić jeden przypadek",
    title: "PoC asystenta wiedzy",
    body: "Buduję mały, mierzalny prototyp nad legalnie udostępnionymi dokumentami. Odpowiedź pokazuje źródło, respektuje uprawnienia i przekazuje niepewne sprawy człowiekowi.",
    output: "Wynik: działający pilot, zestaw testów i decyzja, czy rozwijamy rozwiązanie.",
  },
  {
    n: "03",
    label: "Pilot działa, czas go połączyć",
    title: "Integracja z pracą firmy",
    body: "Łączę asystenta z pocztą, dyskiem, CRM, SharePointem lub innym systemem. Dodaję role, logowanie operacji, obsługę błędów i zatwierdzanie czynności o skutkach.",
    output: "Wynik: proces, który można obserwować, testować i przekazać zespołowi.",
  },
  {
    n: "04",
    label: "Masz system, który trzeba utrzymać",
    title: "Ewaluacje i opieka",
    body: "Monitoruję jakość odpowiedzi, dostępność, koszt i zmiany w bazie wiedzy. Aktualizuję reguły oraz modele wtedy, gdy pomiar pokazuje realną potrzebę.",
    output: "Wynik: uzgodniony zakres opieki, raport i plan kolejnych poprawek.",
  },
] as const;

const guardrails = [
  ["Dane", "Lokalnie albo w europejskiej chmurze, zależnie od wymagań i kosztu."],
  ["Źródła", "Odpowiedź wskazuje dokument i fragment, na którym się opiera."],
  ["Dostęp", "Użytkownik widzi tylko to, do czego ma uprawnienia."],
  ["Człowiek", "Krytyczne działania i niepewne odpowiedzi trafiają do akceptacji."],
  ["Pomiar", "Testujemy prawdziwe pytania, błędy, opóźnienie i koszt zadania."],
  ["Przekazanie", "Kod, konfiguracja, logi i instrukcja zostają w uzgodnionym zakresie po Twojej stronie."],
] as const;

const steps = [
  ["01", "Wybieramy jeden proces", "Nie zaczynamy od modelu. Zaczynamy od pytania, które dziś kosztuje czas albo powoduje błędy."],
  ["02", "Bierzemy próbkę danych", "Na legalnie udostępnionych materiałach ustalamy, co system może zobaczyć i jak wygląda dobry wynik."],
  ["03", "Porównujemy rozwiązania", "Sprawdzamy model lokalny, europejską chmurę i gotowe API. Nie zakładamy z góry, że lokalnie znaczy taniej."],
  ["04", "Podejmujesz decyzję", "Dostajesz wynik pilota, testy i koszty dalszego utrzymania. Możemy rozwijać, zmienić kierunek albo zakończyć temat."],
] as const;

const audiences = [
  ["Zarządcy nieruchomości", "Regulaminy, uchwały i zgłoszenia mieszkańców w jednym, kontrolowanym punkcie wiedzy."],
  ["Firmy usługowe B2B", "Zapytania, oferty, procedury i odpowiedzi handlowe bez ręcznego szukania w kilku miejscach."],
  ["Biura rachunkowe", "Porządkowanie dokumentów i pytań klientów, z walidacją oraz przekazaniem sprawy księgowej."],
] as const;

const privateAISchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prywatne AI i asystenci wiedzy dla firm",
  description: "Audyt danych i procesu, PoC asystenta wiedzy, integracje oraz ewaluacje prywatnych rozwiązań AI.",
  provider: {
    "@type": "ProfessionalService",
    name: `${brand} & Co.`,
    email,
    address: { "@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL" },
  },
  areaServed: { "@type": "Country", name: "Polska" },
  serviceType: "Wdrożenia prywatnego AI",
  availableChannel: { "@type": "ServiceChannel", serviceUrl: "https://one-good-engineer.github.io/pl/prywatne-ai/" },
};

export default function PrivateAIPage() {
  return (
    <div className="site-shell private-ai-shell" lang="pl">
      <div className="noise" aria-hidden="true" />
      <header className="topbar private-ai-topbar">
        <a className="brand" href="/pl/" aria-label="One Good Engineer, strona główna"><Mark /><span className="brand-name">{brand}<i>&amp; Co.</i></span></a>
        <nav className="nav" aria-label="Nawigacja po ofercie prywatnego AI"><a href="#dlaczego">Dlaczego prywatnie</a><a href="#uslugi">Zakres</a><a href="#proces">Pierwszy krok</a></nav>
        <div className="top-actions"><a className="language" href="/pl/automatyzacje/">Automatyzacje</a><a className="contact-pill" href={`mailto:${email}?subject=Prywatne%20AI%20dla%20firm`}>Porozmawiajmy</a></div>
      </header>
      <main>
        <section className="private-ai-hero section-pad">
          <div className="private-ai-hero-copy">
            <p className="eyebrow"><span className="status-dot" />Prywatne AI dla firm</p>
            <h1>Asystent, który zna dokumenty firmy, ale nie decyduje za ludzi.</h1>
            <p className="private-ai-hero-sub">Projektuję i wdrażam rozwiązania AI do pracy z dokumentami, wiedzą i procesami, z kontrolą dostępu, źródłami odpowiedzi i jasnym miejscem na akceptację człowieka.</p>
            <div className="hero-actions"><a className="button button-primary" href={`mailto:${email}?subject=Prywatne%20AI%20dla%20firm`}>Opisz proces<span>↗</span></a><a className="button button-ghost" href="#uslugi">Zobacz zakres</a></div>
            <p className="private-ai-qualifier">Firmy usługowe i B2B · Kraków i cała Polska · pierwszy krok to rozmowa o jednym procesie, nie zakup serwera.</p>
          </div>
          <aside className="private-ai-console" aria-label="Przykład kontrolowanego przepływu odpowiedzi">
            <div className="private-ai-console-head"><span>private knowledge assistant</span><span className="private-ai-badge">controlled</span></div>
            <div className="private-ai-query"><span>PYTANIE</span><strong>Jak obsłużyć zgłoszenie mieszkańca?</strong></div>
            <ol className="private-ai-trace">
              <li><span>01</span><strong>uprawnienia</strong><em>sprawdzone</em></li>
              <li><span>02</span><strong>dokumenty</strong><em>3 źródła</em></li>
              <li className="active"><span>03</span><strong>odpowiedź</strong><em>z cytatem</em></li>
              <li className="approval"><span>04</span><strong>decyzja</strong><em>człowiek</em></li>
            </ol>
            <p className="private-ai-console-note">Model pomaga znaleźć i przygotować odpowiedź. Procedura, dostęp i akceptacja pozostają częścią systemu.</p>
          </aside>
        </section>
        <section className="private-ai-proof section-pad" aria-label="Zasady oferty">
          <div><strong>Źródła odpowiedzi</strong><span>Nie tylko prawdopodobny tekst, ale dokument do sprawdzenia.</span></div>
          <div><strong>Dobór po pomiarze</strong><span>Lokalny model nie jest celem samym w sobie.</span></div>
          <div><strong>Bez decyzji w ciemno</strong><span>Krytyczne działania wymagają akceptacji człowieka.</span></div>
        </section>
        <section className="private-ai-concerns section-pad" id="dlaczego">
          <div className="section-head"><div><p className="kicker">Z czym przychodzą firmy</p><h2>Prywatność zaczyna się od procesu, nie od nazwy modelu.</h2></div><p>Największą wartość daje połączenie wiedzy firmy z konkretną pracą. Sam chatbot bez źródeł, uprawnień i sposobu mierzenia szybko staje się kolejnym miejscem do ręcznego sprawdzania.</p></div>
          <div className="private-ai-concern-grid">{concerns.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>
        <section className="private-ai-services section-pad" id="uslugi">
          <div className="section-head"><div><p className="kicker">Cztery sposoby współpracy</p><h2>Od pytania biznesowego do rozwiązania, które można utrzymać.</h2></div><p>Możesz zamówić sam audyt, pilota albo pełną integrację. Zakres i koszt ustalamy po poznaniu procesu.</p></div>
          <div className="private-ai-service-grid">{services.map((service) => <article key={service.n}><p className="private-ai-service-label">{service.n} / {service.label}</p><h3>{service.title}</h3><p>{service.body}</p><p className="private-ai-service-output">{service.output}</p></article>)}</div>
        </section>
        <section className="private-ai-guardrails section-pad">
          <div className="private-ai-guardrail-copy"><p className="kicker">Co znaczy prywatne</p><h2>Prywatność to architektura, nie naklejka.</h2><p>Mogę uruchomić model lokalnie albo użyć europejskiej chmury. Najpierw sprawdzamy, czego wymaga proces, jakie są uprawnienia i ile kosztuje gotowe zadanie. Lokalny model bywa właściwym wyborem, ale nie zawsze jest najtańszy ani najlepszy.</p><a href={`mailto:${email}?subject=Audyt%20prywatnego%20AI`}>Zapytaj o audyt<span>↗</span></a></div>
          <div className="private-ai-guardrail-list">{guardrails.map(([title, body]) => <article key={title}><strong>{title}</strong><p>{body}</p></article>)}</div>
        </section>
        <section className="private-ai-process section-pad" id="proces">
          <div className="section-head compact"><div><p className="kicker">Pierwszy projekt</p><h2>Mały pilot, konkretne kryteria, decyzja po wyniku.</h2></div></div>
          <div className="private-ai-step-list">{steps.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>
        <section className="private-ai-audiences section-pad">
          <div className="section-head"><div><p className="kicker">Dobry punkt wejścia</p><h2>Najpierw branże, w których dokument i powtarzalna sprawa spotykają się codziennie.</h2></div></div>
          <div className="private-ai-audience-grid">{audiences.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
          <p className="private-ai-boundary">W rekrutacji i HR zaczynam od podsumowań, anonimizacji i przygotowania komunikacji. Nie zaczynam od automatycznego odrzucania ani rankingowania kandydatów.</p>
        </section>
        <section className="private-ai-cta section-pad">
          <div><p className="kicker">Zacznijmy od problemu</p><h2>Masz dokumenty, których zespół ciągle szuka?</h2><p>Napisz, gdzie dziś ginie czas. Na początek wystarczy opis procesu, bez haseł, kluczy API i danych klientów.</p></div>
          <a className="button button-primary" href={`mailto:${email}?subject=Prywatne%20AI%20dla%20firm`}>Napisz do mnie<span>↗</span></a>
        </section>
      </main>
      <footer className="footer section-pad"><a className="brand" href="/pl/"><Mark /><span className="brand-name">{brand}<i>&amp; Co.</i></span></a><p>Prywatne AI · audyt · PoC · integracje · Kraków i cała Polska</p><p>© {new Date().getFullYear()} {brand} &amp; Co.</p></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privateAISchema) }} />
    </div>
  );
}
