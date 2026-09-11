"use client";

import {FormEvent, useEffect, useRef, useState} from "react";
import {email, type Locale} from "../SiteChrome";
import {buildBriefPayload, planFromHash} from "./brief-payload.ts";
import {LEAD_ENDPOINT, sourceOf, submitLead} from "./formspree.ts";

type Status = "idle" | "sending" | "sent" | "error";

const copy = {
  en: {
    name: "Your name",
    company: "Company and what it does",
    companyHint: "e.g. a coffee roaster selling on Allegro",
    contact: "Email or phone",
    contactHint: "The best way to reach you",
    package: "What do you need?",
    packages: ["I do not know yet"],
    currentSite: "Current website address, if any",
    likedSites: "Three websites you like, any industry, and why",
    goal: "Who is the customer and what should they do on the site?",
    goalHint: "call, buy, book, ask for a quote",
    pages: "Pages you need",
    pagesHint: "e.g. home, offer, about, contact",
    content: "Texts and photos",
    contents: ["I have texts and photos", "I have photos, texts need drafting", "I have texts, photos need licensing", "Neither yet"],
    domain: "Domain",
    domains: ["I have one", "One needs buying", "Not sure"],
    deadline: "The date the site has to be live",
    budget: "Budget, if different from the package",
    trap: "Website",
    send: "Send the brief",
    sending: "Sending...",
    aside: "I read every brief myself. Three working versions within 48 hours of receiving it.",
    sent: "Thank you, the brief is in. Within 48 hours you get a link with three working versions of your site.",
    error: "The submission was not confirmed. Your answers are still in the form. Try again in a moment or ",
    errorLink: "send them by email",
    boundary: "No passwords, API keys or customer data here. A description is all the first step needs.",
  },
  pl: {
    name: "Imię",
    company: "Firma i czym się zajmuje",
    companyHint: "np. palarnia kawy sprzedająca na Allegro",
    contact: "E-mail lub telefon",
    contactHint: "Jak najlepiej się z Tobą skontaktować",
    package: "Czego potrzebujesz?",
    packages: ["Nie wiem jeszcze"],
    currentSite: "Adres obecnej strony, jeśli jest",
    likedSites: "Trzy strony, które Ci się podobają, z dowolnej branży, i dlaczego",
    goal: "Kto jest klientem i co ma zrobić na stronie?",
    goalHint: "zadzwonić, kupić, umówić się, poprosić o wycenę",
    pages: "Podstrony, których potrzebujesz",
    pagesHint: "np. start, oferta, o nas, kontakt",
    content: "Teksty i zdjęcia",
    contents: ["Mam teksty i zdjęcia", "Mam zdjęcia, teksty do przygotowania", "Mam teksty, zdjęcia do licencji", "Nie mam jeszcze ani jednego"],
    domain: "Domena",
    domains: ["Mam", "Trzeba kupić", "Nie wiem"],
    deadline: "Termin, do którego strona ma działać",
    budget: "Budżet, jeśli inny niż pakiet",
    trap: "Strona internetowa",
    send: "Wyślij brief",
    sending: "Wysyłam...",
    aside: "Każdy brief czytam sam. Trzy działające wersje w 48 godzin od otrzymania.",
    sent: "Dziękuję, brief dotarł. W ciągu 48 godzin dostaniesz link z trzema działającymi wersjami swojej strony.",
    error: "Nie udało się potwierdzić wysyłki. Twoje odpowiedzi zostały w formularzu. Spróbuj ponownie za chwilę albo ",
    errorLink: "wyślij je mailem",
    boundary: "Bez haseł, kluczy API i danych klientów. Na pierwszy krok wystarczy opis.",
  },
} as const;

export default function BriefForm({locale, plans}: {locale: Locale; plans: readonly string[]}) {
  const t = copy[locale];
  const options = [t.packages[0], ...plans];
  const [plan, setPlan] = useState(options[0]);
  const [status, setStatus] = useState<Status>("idle");
  const inFlight = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const follow = () => {
      if (!window.location.hash.startsWith("#brief")) return;
      const chosen = planFromHash(window.location.hash);
      if (chosen && options.includes(chosen)) setPlan(chosen);
      formRef.current?.scrollIntoView({block: "start"});
    };
    follow();
    window.addEventListener("hashchange", follow);
    return () => window.removeEventListener("hashchange", follow);
    // options is derived from props that never change after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(Array.from(new FormData(form).entries(), ([key, value]) => [key, String(value)]));

    if (values._gotcha) {
      setStatus("sent");
      return;
    }

    inFlight.current = true;
    setStatus("sending");
    try {
      await submitLead(buildBriefPayload(values, sourceOf(window.location.href), locale));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  };

  const choices = (name: string, options: readonly string[]) => (
    <select name={name} defaultValue={options[0]}>
      {options.map((option) => <option key={option}>{option}</option>)}
    </select>
  );

  return (
    <form ref={formRef} className="lead-form" action={LEAD_ENDPOINT} method="POST" onSubmit={handleSubmit} onChange={() => {if (!inFlight.current) setStatus("idle");}} aria-busy={status === "sending"}>
      <fieldset className="lead-fields" disabled={status === "sending"}>
        <div className="form-grid">
          <label><span>{t.name}</span><input name="name" autoComplete="given-name" maxLength={120} required /></label>
          <label><span>{t.contact}</span><input name="contact" autoComplete="email" placeholder={t.contactHint} maxLength={160} required /></label>
        </div>
        <label><span>{t.company}</span><input name="company" autoComplete="organization" placeholder={t.companyHint} maxLength={180} required /></label>
        <div className="form-grid">
          <label>
            <span>{t.package}</span>
            <select name="package" value={plan} onChange={(event) => setPlan(event.target.value)}>
              {options.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label><span>{t.currentSite}</span><input name="currentSite" type="url" inputMode="url" placeholder="https://" maxLength={200} /></label>
        </div>
        <label><span>{t.likedSites}</span><textarea name="likedSites" rows={3} maxLength={1000} /></label>
        <label><span>{t.goal}</span><textarea name="goal" rows={2} maxLength={600} placeholder={t.goalHint} /></label>
        <label><span>{t.pages}</span><input name="pages" placeholder={t.pagesHint} maxLength={300} /></label>
        <div className="form-grid">
          <label><span>{t.content}</span>{choices("content", t.contents)}</label>
          <label><span>{t.domain}</span>{choices("domain", t.domains)}</label>
        </div>
        <div className="form-grid">
          <label><span>{t.deadline}</span><input name="deadline" maxLength={80} /></label>
          <label><span>{t.budget}</span><input name="budget" maxLength={80} /></label>
        </div>
        <label className="form-trap" aria-hidden="true"><span>{t.trap}</span><input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
        <div className="form-submit-row">
          <button className="button button-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? t.sending : t.send}<span>↗</span>
          </button>
          <p>{t.aside}</p>
        </div>
        <p className="contact-boundary">{t.boundary}</p>
      </fieldset>
      <div className={`form-status ${status}`} aria-live="polite">
        {status === "sent" ? t.sent : null}
        {status === "error" ? <>{t.error}<a href={`mailto:${email}`}>{t.errorLink}</a>.</> : null}
      </div>
    </form>
  );
}
