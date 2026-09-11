import {Mark, brand, email} from "../../SiteChrome";
import LeadForm from "./LeadForm";

const areas = [
  {n: "01", title: "Sprzedaż i obsługa klienta", problem: "Zapytanie czeka, oferta wymaga kopiowania danych, a następny kontakt zależy od pamięci.", example: "Zbieranie danych do wyceny, oferta do zatwierdzenia, CRM i przypomnienia.", measure: "Czas do odpowiedzi i oferty, kompletność danych, zaległe zadania."},
  {n: "02", title: "Realizacja usług i zleceń", problem: "Klient akceptuje ofertę, ale projekt, dokumenty i zadania trzeba zakładać od nowa w kilku miejscach.", example: "Przekazanie zlecenia do realizacji, checklista, odpowiedzialna osoba i terminy.", measure: "Czas uruchomienia zlecenia, pominięte kroki, opóźnienia między zespołami."},
  {n: "03", title: "Dokumenty i administracja", problem: "Załączniki krążą po skrzynkach. Ktoś sprawdza kompletność, przepisuje dane i szuka osoby do akceptacji.", example: "Zbieranie dokumentów, odczyt danych, sprawdzenie braków i obieg akceptacji.", measure: "Czas na dokument, liczba poprawek i spraw czekających na decyzję."},
  {n: "04", title: "Raportowanie i integracje", problem: "Raport powstaje z kilku eksportów, a te same liczby w dwóch systemach nie zawsze się zgadzają.", example: "Synchronizacja danych, cykliczny raport i alert, gdy pojawi się rozbieżność.", measure: "Czas przygotowania raportu, aktualność danych i ręczne korekty."},
];
const services = [
  {id: "audyt", n: "01", situation: "Nie wiem, od czego zacząć", title: "Audyt i plan usprawnień", body: "Sprawdzam jeden uzgodniony obszar pracy. Rozmawiam z osobami, które go obsługują, i analizuję rzeczywiste przykłady.", outputs: ["Mapa procesu, wyjątków i kosztów", "Porównanie: uprościć, kupić czy zbudować", "Priorytety, zakres pilota i sposób pomiaru"], note: "Samodzielna, płatna usługa. Plan możesz przekazać także innemu wykonawcy. Wynikiem może być decyzja, żeby niczego nie automatyzować.", cta: "Porozmawiajmy o audycie"},
  {id: "wdrozenie", n: "02", situation: "Wiem, co chcę usprawnić", title: "Wdrożenie i integracje", body: "Łączę narzędzia firmy i wdrażam jeden proces od początku do końca. Zakres i kryteria odbioru ustalamy przed startem.", outputs: ["Działające integracje i reguły", "Testy, obsługa błędów i monitoring", "Dokumentacja i przekazanie zespołowi"], note: "Zaczynamy od ograniczonego pilota. Wykorzystuję funkcje istniejących systemów, kod lub AI, zależnie od problemu.", cta: "Porozmawiajmy o wdrożeniu"},
  {id: "przeglad", n: "03", situation: "Mam automatyzację, ale nie mam pewności", title: "Przegląd i plan napraw", body: "Sprawdzam istniejące scenariusze i integracje: gdzie mogą gubić dane, dublować operacje lub przestać działać po awarii.", outputs: ["Ocena uprawnień, danych i wyjątków", "Przegląd testów, monitoringu i kosztów", "Lista ryzyk i kolejność poprawek"], note: "Zakres techniczny ustalamy przed dostępem do systemów. To nie jest certyfikacja bezpieczeństwa ani audyt zgodności prawnej.", cta: "Porozmawiajmy o przeglądzie"},
];
const delivery = [
  ["01", "Najpierw punkt odniesienia", "Ustalamy wolumen, czas pracy, błędy i właściciela procesu. Odzyskane godziny nie oznaczają automatycznie oszczędności gotówkowych."],
  ["02", "Uzgodniony zakres i koszt", "Dostajesz zakres, kryteria odbioru oraz podział kosztów: analiza, wdrożenie, narzędzia i późniejsza opieka. Termin zależy także od dostępów i integracji."],
  ["03", "Testy z prawdziwymi wyjątkami", "Sprawdzamy nie tylko poprawne zgłoszenie, ale też brak danych, powtórzenie i awarię. Ustalamy, które decyzje wymagają akceptacji człowieka."],
  ["04", "Przekazanie i dalsza opieka", "Otrzymujesz uzgodnione materiały, dostępy i instrukcję utrzymania. Możesz przejąć rozwiązanie lub zamówić opiekę z określonym zakresem."],
];
const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Audyt procesów, automatyzacje i integracje dla firm",
  description: "Audyt i plan usprawnień, wdrożenia integracji oraz przeglądy istniejących automatyzacji. Sprzedaż, realizacja usług, dokumenty i raportowanie.",
  provider: {"@type": "ProfessionalService", name: brand + " & Co.", email, address: {"@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL"}},
  areaServed: {"@type": "Country", name: "Polska"},
  hasOfferCatalog: {"@type": "OfferCatalog", name: "Usługi procesowe i inżynierskie", itemListElement: services.map(s => ({"@type": "Offer", itemOffered: {"@type": "Service", name: s.title, description: s.body}}))},
  availableChannel: {"@type": "ServiceChannel", serviceUrl: "https://one-good-engineer.github.io/pl/automatyzacje/"},
};

export default function AutomationPage() {
  return (
    <div className="site-shell automation-shell" lang="pl">
      <div className="noise" aria-hidden="true" />
      <header className="topbar automation-topbar">
        <a className="brand" href="/pl/" aria-label="One Good Engineer, strona główna"><Mark /><span className="brand-name">{brand}<i>&amp; Co.</i></span></a>
        <nav className="nav" aria-label="Nawigacja po ofercie automatyzacji"><a href="#obszary">Obszary</a><a href="#uslugi">Usługi</a><a href="#demo">Demo</a></nav>
        <div className="top-actions"><a className="language" href="/pl/">Inżynieria produktów</a><a className="contact-pill" href="#konsultacja">Porozmawiajmy</a></div>
      </header>
      <main>
        <section className="automation-hero section-pad">
          <div className="automation-hero-copy">
            <p className="eyebrow"><span className="status-dot" />Automatyzacje, integracje i AI dla firm</p>
            <h1>Porządkuję procesy i automatyzuję pracę między systemami.</h1>
            <p className="automation-hero-sub">Pomagam ustalić, co warto usprawnić, dobieram rozwiązanie i wdrażam je w narzędziach firmy. Od audytu po uruchomienie i opiekę.</p>
            <div className="hero-actions"><a className="button button-primary" href="#konsultacja">Porozmawiajmy o procesie<span>↓</span></a><a className="button button-ghost" href="#uslugi">Zobacz zakres usług</a></div>
            <p className="automation-qualifier">Firmy usługowe i B2B · Kraków i cała Polska. Pierwsza rozmowa: 20 minut bez opłat, żeby ustalić problem i następny krok.</p>
          </div>
          <aside className="process-brief" aria-label="Jak wybieramy rozwiązanie">
            <p className="kicker">Od problemu do decyzji</p><h2>Nie musisz wiedzieć, co automatyzować.</h2>
            <p>Wystarczy proces, który zabiera czas, zatrzymuje pracę albo powoduje błędy.</p>
            <ol>
              <li><span>01</span><div><strong>Sprawdzamy, jak jest</strong><p>Ludzie, narzędzia, wolumen i wyjątki.</p></div></li>
              <li><span>02</span><div><strong>Porównujemy możliwości</strong><p>Zmiana procesu, gotowe narzędzie lub integracja.</p></div></li>
              <li><span>03</span><div><strong>Wybieramy pierwszy krok</strong><p>Zakres, koszt i wynik, który da się sprawdzić.</p></div></li>
            </ol>
            <p className="brief-note">Czasem najlepszą rekomendacją jest wykorzystanie funkcji, za którą firma już płaci.</p>
          </aside>
        </section>
        <section className="automation-proof section-pad" aria-label="Co obejmuje współpraca">
          <div><strong>Decyzja przed wydatkiem</strong><span>Najpierw sens i zakres, potem wybór narzędzi.</span></div>
          <div><strong>Proces od początku do końca</strong><span>Integracje, wyjątki i odpowiedzialność zespołu.</span></div>
          <div><strong>Rozwiązanie do utrzymania</strong><span>Testy, monitoring i dokumentacja do przekazania.</span></div>
        </section>
        <section className="automation-problems section-pad" id="obszary">
          <div className="section-head"><div><p className="kicker">Gdzie mogę pomóc</p><h2>Nie tylko formularz i CRM.</h2></div><p>Wspólny problem: praca przechodzi między ludźmi i systemami, a ktoś ręcznie pilnuje, żeby nic nie zginęło. To przykładowe zastosowania, nie deklaracje zrealizowanych wdrożeń.</p></div>
          <div className="problem-grid">{areas.map(a => <article key={a.n}><span>{a.n}</span><h3>{a.title}</h3><p>{a.problem}</p><p className="area-example">{a.example}</p><p className="area-measure"><strong>Co mierzymy:</strong> {a.measure}</p></article>)}</div>
        </section>
        <section className="automation-services section-pad" id="uslugi">
          <div className="section-head"><div><p className="kicker">Trzy sposoby współpracy</p><h2>Zacznij od miejsca, w którym jesteś.</h2></div><p>Nie musisz zamawiać wdrożenia, żeby dostać konkretną analizę. Każdą usługę wyceniam po ustaleniu zakresu.</p></div>
          <div className="service-grid">{services.map(s => <article id={s.id} key={s.id}><p className="service-situation">{s.n} / {s.situation}</p><h3>{s.title}</h3><p>{s.body}</p><ul>{s.outputs.map(item => <li key={item}>{item}</li>)}</ul><p className="service-note">{s.note}</p><a href="#konsultacja">{s.cta}<span aria-hidden="true"> ↗</span></a></article>)}</div>
          <div className="care-note"><h3>Po wdrożeniu: opieka i rozwój</h3><p>Monitoring, poprawki i uzgodnione zmiany. Z góry ustalamy godziny obsługi, czas reakcji i limit pracy. Koszty narzędzi rozliczamy osobno; opieka jest opcjonalna.</p></div>
        </section>
        <section className="automation-demo section-pad" id="demo">
          <div className="demo-copy"><p className="kicker">Zobacz działający przykład</p><h2>Formularz wysłany. I co dalej?</h2><p>Zapytanie trafia do tabeli, klient otrzymuje potwierdzenie, a zespół osobną wiadomość. Zobacz krótki zapis działania lokalnego n8n.</p><p className="demo-disclosure">Demonstracja na fikcyjnych danych, nie wdrożenie klienta. Tabela n8n i poczta testowa Mailpit. Bez klasyfikacji AI, pełnego CRM i follow-upów.</p><div className="demo-downloads"><a href="/materialy/formularz-baza-email.json" download>Pobierz proces n8n ↓</a><a href="/materialy/formularz-instrukcja.txt" download>Instrukcja i ograniczenia ↓</a></div></div>
          <figure className="demo-player"><video controls playsInline preload="none" poster="/media/formularz-poster.png" aria-label="Demonstracja formularza, tabeli i wiadomości w n8n, bez dźwięku"><source src="/media/formularz-demo.mp4" type="video/mp4" /><track kind="captions" src="/media/formularz-demo.vtt" srcLang="pl" label="Opis kroków po polsku" default />Twoja przeglądarka nie odtwarza tego filmu. <a href="/media/formularz-demo.mp4">Pobierz demonstrację</a>.</video><figcaption>Krótka demonstracja bez dźwięku. Opisy kroków możesz włączyć w odtwarzaczu.</figcaption></figure>
        </section>
        <section className="automation-method section-pad" id="wspolpraca">
          <div className="section-head compact"><div><p className="kicker">Jak pracuję</p><h2>Mały zakres na początek. Jasne zasady od początku.</h2></div></div>
          <div className="cooperation-list">{delivery.map(([n,title,body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>
        <section className="automation-trust section-pad">
          <div className="trust-facts"><div><strong>10+</strong><span>lat tworzenia oprogramowania produkcyjnego</span></div><div><strong>API</strong><span>integracje i własny kod, gdy gotowe funkcje nie wystarczą</span></div><div><strong>Testy</strong><span>sprawdzenie błędów, powtórzeń i sposobu odzyskania działania</span></div></div>
          <div className="trust-copy"><p className="kicker">Doświadczenie inżynierskie</p><h2>Za analizą stoi umiejętność wdrożenia.</h2><p>Jestem Krystian. Od ponad dziesięciu lat buduję produkty webowe, od interfejsu po backend i produkcję. Łączę analizę procesu z integracjami, testami i utrzymaniem. Publiczne produkty pokazują mój warsztat techniczny; nie przedstawiam ich jako wyników automatyzacji u klientów.</p><p>Przekazuję uzgodniony kod, konfigurację i dokumentację. Zależności od dostawców oraz możliwości przeniesienia rozwiązania omawiam przed wdrożeniem.</p><a href="/pl/#work">Zobacz produkty i doświadczenie<span>↗</span></a></div>
        </section>
        <section className="automation-consultation section-pad" id="konsultacja">
          <div className="consultation-copy"><p className="kicker">Zacznijmy od rozmowy</p><h2>Co dziś niepotrzebnie zajmuje czas Twojego zespołu?</h2><p>Opisz sytuację, nawet jeśli nie wiesz jeszcze, czego potrzebujesz. Możemy porozmawiać o audycie, konkretnym wdrożeniu lub przeglądzie istniejącej automatyzacji.</p><ul><li><span>✓</span>Pierwsza rozmowa: 20 minut bez opłat</li><li><span>✓</span>Kontakt bezpośrednio ze mną</li><li><span>✓</span>Szczegółowa analiza jako osobna, płatna usługa</li></ul><p className="contact-boundary">Nie przesyłaj haseł, kluczy API ani danych klientów. Na początek wystarczy opis procesu.</p></div>
          <LeadForm />
        </section>
      </main>
      <footer className="footer section-pad"><a className="brand" href="/pl/"><Mark /><span className="brand-name">{brand}<i>&amp; Co.</i></span></a><p>Audyt · integracje · automatyzacje · Kraków i cała Polska</p><p>© {new Date().getFullYear()} {brand} &amp; Co.</p></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />
    </div>
  );
}
