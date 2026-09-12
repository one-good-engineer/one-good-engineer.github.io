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
    trap: "Website",
    send: "Start the brief",
    sending: "Sending...",
    aside: "One minute here. The ten brief questions come back automatically by email, and the 24 hours start when you answer them.",
    sent: "Thank you. The brief questions are on their way to you; the 24 hours to three working versions start when your answers arrive.",
    error: "The submission was not confirmed. Your answers are still in the form. Try again in a moment or ",
    errorLink: "send them by email",
  },
  pl: {
    name: "Imię",
    company: "Firma i czym się zajmuje",
    companyHint: "np. palarnia kawy sprzedająca na Allegro",
    contact: "E-mail lub telefon",
    contactHint: "Jak najlepiej się z Tobą skontaktować",
    package: "Czego potrzebujesz?",
    packages: ["Nie wiem jeszcze"],
    trap: "Strona internetowa",
    send: "Zacznij brief",
    sending: "Wysyłam...",
    aside: "Tu minuta. Dziesięć pytań briefu wraca automatycznie mailem, a 24 godziny liczą się od Twoich odpowiedzi.",
    sent: "Dziękuję. Pytania briefu są w drodze do Ciebie; 24 godziny do trzech działających wersji liczą się od Twoich odpowiedzi.",
    error: "Nie udało się potwierdzić wysyłki. Twoje odpowiedzi zostały w formularzu. Spróbuj ponownie za chwilę albo ",
    errorLink: "wyślij je mailem",
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

  return (
    <form ref={formRef} className="lead-form" action={LEAD_ENDPOINT} method="POST" onSubmit={handleSubmit} onChange={() => {if (!inFlight.current) setStatus("idle");}} aria-busy={status === "sending"}>
      <fieldset className="lead-fields" disabled={status === "sending"}>
        <div className="form-grid">
          <label><span>{t.name}</span><input name="name" autoComplete="given-name" maxLength={120} required /></label>
          <label><span>{t.contact}</span><input name="contact" autoComplete="email" placeholder={t.contactHint} maxLength={160} required /></label>
        </div>
        <label><span>{t.company}</span><input name="company" autoComplete="organization" placeholder={t.companyHint} maxLength={180} required /></label>
        <label>
          <span>{t.package}</span>
          <select name="package" value={plan} onChange={(event) => setPlan(event.target.value)}>
            {options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="form-trap" aria-hidden="true"><span>{t.trap}</span><input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
        <div className="form-submit-row">
          <button className="button button-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? t.sending : t.send}<span>↗</span>
          </button>
          <p>{t.aside}</p>
        </div>
      </fieldset>
      <div className={`form-status ${status}`} aria-live="polite">
        {status === "sent" ? t.sent : null}
        {status === "error" ? <>{t.error}<a href={`mailto:${email}`}>{t.errorLink}</a>.</> : null}
      </div>
    </form>
  );
}
