export type Locale = "en" | "pl";

export const email = "kontakt@onegoodengineer.pl";
export const signature = "Krystian Gwizdała";
export const brand = "One Good Engineer";
export const legalCompany = "Krystian Gwizdała Appfront";
export const legalAddress = "Kraków, Polska";
export const legalNip = "8151745185";
export const legalRegon = "363740603";

export function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <span className="mark-lead" />
      <span />
      <span />
      <span />
    </span>
  );
}

type NavItem = readonly [label: string, href: string];

export function TopBar({
  locale,
  nav,
  langHref,
  langLabel,
  langOf,
}: {
  locale: Locale;
  nav: readonly NavItem[];
  langHref: string;
  langLabel: string;
  /** Language of the page behind langHref. Defaults to the other locale; pass the same locale for a sibling page. */
  langOf?: Locale;
}) {
  const isPl = locale === "pl";
  const targetLang = langOf ?? (isPl ? "en" : "pl");
  return (
    <header className="topbar">
      <a className="brand" href={isPl ? "/" : "/en/"} aria-label={`${brand} home`}>
        <Mark />
        <span className="brand-name">{brand}<i>&amp; Co.</i></span>
      </a>
      <nav className="nav" aria-label={isPl ? "Główna nawigacja" : "Main navigation"}>
        {nav.map(([label, href]) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>
      <div className="top-actions">
        <a className="language" href={langHref} hrefLang={targetLang}>{langLabel}</a>
        <a className="contact-pill" href={`mailto:${email}`}>{isPl ? "Kontakt" : "Contact"}</a>
      </div>
    </header>
  );
}

export function Footer({ locale, line }: { locale: Locale; line: string }) {
  return (
    <footer className="footer section-pad">
      <a className="brand" href={locale === "pl" ? "/" : "/en/"}><Mark /><span className="brand-name">{brand}<i>&amp; Co.</i></span></a>
      <p>{line}</p>
      <p className="footer-legal">{legalCompany}<br />{legalAddress}<br />NIP {legalNip} · REGON {legalRegon}</p>
      <p>© {new Date().getFullYear()} {brand} &amp; Co.</p>
    </footer>
  );
}
