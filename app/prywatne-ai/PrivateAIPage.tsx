import {brand, email, Footer, TopBar} from "../SiteChrome";
import {SITE} from "../site";

const concerns = [
  ["01", "Wiedza jest w dokumentach", "Umowy, procedury i instrukcje są rozproszone, a odpowiedź zależy od tego, kto wie, gdzie szukać."],
  ["02", "Te same pytania wracają", "Zespół traci czas na odtwarzanie odpowiedzi zamiast zajmować się sprawami wymagającymi doświadczenia."],
  ["03", "Dane wymagają ostrożności", "Liczą się uprawnienia, retencja, logi i zasady użycia, nie sama nazwa modelu."],
  ["04", "Nie wiesz, co wybrać", "Model lokalny, europejska chmura czy gotowe API? Odpowiedź zależy od danych, jakości i kosztu całego procesu."],
] as const;

const services = [
  {n: "01", situation: "Nie wiem, od czego zacząć", title: "Audyt danych i procesu", body: "Sprawdzam jeden konkretny proces, źródła wiedzy, systemy i ograniczenia. Porównuję zmianę procesu, gotowe narzędzie, API i model uruchamiany prywatnie.", outputs: ["Mapa procesu i ryzyk", "Zakres pilota oraz sposób pomiaru", "Rekomendacja technologiczna"], note: "Wynikiem może być decyzja, żeby niczego nie wdrażać."},
  {n: "02", situation: "Chcę sprawdzić jeden przypadek", title: "PoC asystenta wiedzy", body: "Buduję mały, mierzalny prototyp nad legalnie udostępnionymi dokumentami. Odpowiedź pokazuje źródło, respektuje uprawnienia i przekazuje niepewne sprawy człowiekowi.", outputs: ["Działający pilot", "Zestaw prawdziwych testów", "Decyzja o dalszym kierunku"], note: "Pilot nie udaje gotowego produktu ani automatycznej decyzji."},
  {n: "03", situation: "Pilot działa, czas go połączyć", title: "Integracja z pracą firmy", body: "Łączę asystenta z pocztą, dyskiem, CRM, SharePointem lub innym systemem. Dodaję role, logowanie operacji, obsługę błędów i akceptację czynności o skutkach.", outputs: ["Proces do obserwowania i testowania", "Uprawnienia oraz ślad operacji", "Dokumentacja przekazania"], note: "Zakres i zależności od dostawców są jawne przed startem."},
  {n: "04", situation: "Mam system, który trzeba utrzymać", title: "Ewaluacje i opieka", body: "Monitoruję jakość odpowiedzi, dostępność, koszt i zmiany w bazie wiedzy. Aktualizuję reguły oraz modele wtedy, gdy pomiar pokazuje realną potrzebę.", outputs: ["Raport jakości i kosztu", "Testy regresji na prawdziwych pytaniach", "Plan kolejnych poprawek"], note: "Opieka jest osobną usługą, nie ukrytym abonamentem."},
] as const;

const steps = [
  ["01", "Wybieramy jeden proces", "Nie zaczynamy od modelu. Zaczynamy od pytania, które dziś kosztuje czas albo powoduje błędy."],
  ["02", "Bierzemy próbkę danych", "Na legalnie udostępnionych materiałach ustalamy, co system może zobaczyć i jak wygląda dobry wynik."],
  ["03", "Porównujemy rozwiązania", "Sprawdzamy model lokalny, europejską chmurę i gotowe API. Lokalnie nie zawsze znaczy taniej."],
  ["04", "Podejmujesz decyzję", "Dostajesz wynik pilota, testy i koszt dalszego utrzymania. Możemy rozwijać, zmienić kierunek albo zakończyć temat."],
] as const;

const guardrails = [
  ["Dane", "Lokalnie albo w europejskiej chmurze, zależnie od wymagań i kosztu."],
  ["Źródła", "Odpowiedź wskazuje dokument i fragment, na którym się opiera."],
  ["Dostęp", "Użytkownik widzi tylko to, do czego ma uprawnienia."],
  ["Człowiek", "Krytyczne działania i niepewne odpowiedzi trafiają do akceptacji."],
  ["Pomiar", "Testujemy prawdziwe pytania, błędy, opóźnienie i koszt zadania."],
  ["Przekazanie", "Kod, konfiguracja, logi i instrukcja zostają w uzgodnionym zakresie po Twojej stronie."],
] as const;

const schema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Prywatne AI i asystenci wiedzy dla firm",
  description: "Audyt danych i procesu, PoC asystenta wiedzy, integracje oraz ewaluacje prywatnych rozwiązań AI.",
  provider: {"@type": "ProfessionalService", name: `${brand} & Co.`, email, address: {"@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL"}},
  areaServed: {"@type": "Country", name: "Polska"},
  serviceType: "Wdrożenia prywatnego AI",
  availableChannel: {"@type": "ServiceChannel", serviceUrl: `${SITE}/prywatne-ai/`},
};

export default function PrivateAIPage() {
  return <div className="site-shell automation-shell" lang="pl">
    <div className="noise" aria-hidden="true" />
    <TopBar locale="pl" nav={[["Dlaczego prywatnie", "#dlaczego"], ["Usługi", "#uslugi"], ["Proces", "#proces"], ["Automatyzacje", "/automatyzacje/"], ["Strony i sklepy", "/strony/"]]} langHref="/" langLabel="Studio" langOf="pl" />
    <main>
      <section className="automation-hero section-pad">
        <div className="automation-hero-copy">
          <p className="eyebrow"><span className="status-dot" />Prywatne AI dla firm</p>
          <h1>Asystent, który zna dokumenty firmy, ale nie decyduje za ludzi.</h1>
          <p className="automation-hero-sub">Projektuję i wdrażam rozwiązania AI do pracy z dokumentami, wiedzą i procesami, z kontrolą dostępu, źródłami odpowiedzi i jasnym miejscem na akceptację człowieka.</p>
          <div className="hero-actions"><a className="button button-primary" href={`mailto:${email}?subject=Prywatne%20AI%20dla%20firm`}>Opisz proces<span>↗</span></a><a className="button button-ghost" href="#uslugi">Zobacz zakres usług</a></div>
          <p className="automation-qualifier">Firmy usługowe i B2B · Kraków i cała Polska. Pierwszy krok to rozmowa o jednym procesie, nie zakup serwera.</p>
        </div>
        <aside className="process-brief" aria-label="Jak działa kontrolowany asystent wiedzy">
          <p className="kicker">Kontrolowany przepływ</p><h2>Prywatność zaczyna się od procesu, nie od nazwy modelu.</h2>
          <p>Model pomaga znaleźć i przygotować odpowiedź. Procedura, dostęp i akceptacja pozostają częścią systemu.</p>
          <ol><li><span>01</span><div><strong>Uprawnienia</strong><p>Użytkownik widzi tylko swoje źródła.</p></div></li><li><span>02</span><div><strong>Dokumenty</strong><p>Odpowiedź opiera się na wskazanych fragmentach.</p></div></li><li><span>03</span><div><strong>Człowiek</strong><p>Niepewna lub krytyczna sprawa trafia do akceptacji.</p></div></li></ol>
          <p className="brief-note">Nie każdą treść trzeba wysyłać do przypadkowego narzędzia.</p>
        </aside>
      </section>
      <section className="automation-proof section-pad" aria-label="Zasady oferty"><div><strong>Źródła odpowiedzi</strong><span>Dokument do sprawdzenia, nie tylko prawdopodobny tekst.</span></div><div><strong>Dobór po pomiarze</strong><span>Lokalny model nie jest celem samym w sobie.</span></div><div><strong>Bez decyzji w ciemno</strong><span>Krytyczne działania wymagają akceptacji człowieka.</span></div></section>
      <section className="automation-problems section-pad" id="dlaczego"><div className="section-head"><div><p className="kicker">Z czym przychodzą firmy</p><h2>Dokumenty, pytania i dane w jednym kontrolowanym procesie.</h2></div><p>Największą wartość daje połączenie wiedzy firmy z konkretną pracą. Sam chatbot bez źródeł, uprawnień i sposobu mierzenia szybko staje się kolejnym miejscem do ręcznego sprawdzania.</p></div><div className="problem-grid">{concerns.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="automation-services section-pad" id="uslugi"><div className="section-head"><div><p className="kicker">Cztery sposoby współpracy</p><h2>Od pytania biznesowego do rozwiązania, które można utrzymać.</h2></div><p>Możesz zamówić sam audyt, pilota albo pełną integrację. Zakres i koszt ustalamy po poznaniu procesu.</p></div><div className="service-grid">{services.map(s => <article key={s.n}><p className="service-situation">{s.n} / {s.situation}</p><h3>{s.title}</h3><p>{s.body}</p><ul>{s.outputs.map(item => <li key={item}>{item}</li>)}</ul><p className="service-note">{s.note}</p><a href="#konsultacja">Zapytaj o tę usługę<span aria-hidden="true"> ↗</span></a></article>)}</div></section>
      <section className="automation-trust section-pad"><div className="trust-facts"><div><strong>Dane</strong><span>lokalnie albo w europejskiej chmurze</span></div><div><strong>RAG</strong><span>źródła i cytaty w odpowiedzi</span></div><div><strong>Testy</strong><span>pytania, błędy, koszt i opóźnienie</span></div></div><div className="trust-copy"><p className="kicker">Co znaczy prywatne</p><h2>Prywatność to architektura, nie naklejka.</h2><div className="guardrail-copy">{guardrails.map(([title, body]) => <p key={title}><strong>{title}:</strong> {body}</p>)}</div></div></section>
      <section className="automation-method section-pad" id="proces"><div className="section-head compact"><div><p className="kicker">Pierwszy projekt</p><h2>Mały pilot, konkretne kryteria, decyzja po wyniku.</h2></div></div><div className="cooperation-list">{steps.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="automation-consultation section-pad" id="konsultacja"><div className="consultation-copy"><p className="kicker">Zacznijmy od problemu</p><h2>Masz dokumenty, których zespół ciągle szuka?</h2><p>Napisz, gdzie dziś ginie czas. Na początek wystarczy opis procesu, bez haseł, kluczy API i danych klientów.</p><ul><li><span>✓</span>Rozmowa o jednym procesie</li><li><span>✓</span>Audyt, PoC albo integracja jako osobna usługa</li><li><span>✓</span>Zakres, koszt i kryteria przed startem</li></ul></div><a className="button button-primary" href={`mailto:${email}?subject=Prywatne%20AI%20dla%20firm`}>Napisz do mnie<span>↗</span></a></section>
    </main>
    <Footer locale="pl" line="Prywatne AI · audyt · PoC · integracje · Kraków i cała Polska" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
  </div>;
}
