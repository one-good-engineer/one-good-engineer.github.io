"use client";

import {FormEvent, useRef, useState} from "react";
import {email, type Locale} from "../SiteChrome";
import {buildLeadMessage} from "./lead-message";
import {buildLeadPayload, LEAD_ENDPOINT, submitLead} from "./lead-submit";

type Status = "idle" | "sending" | "sent" | "error";

const copy = {
  pl: {
    subject: "One Good Engineer - nowe zapytanie o proces",
    name: "Imię",
    company: "Firma i branża",
    companyPlaceholder: "np. firma szkoleniowa B2B",
    contact: "E-mail lub telefon",
    contactPlaceholder: "Jak najlepiej się z Tobą skontaktować?",
    service: "W czym mogę pomóc?",
    audit: "Audyt i plan usprawnień",
    undecided: "Nie wiem jeszcze",
    privateAI: "Prywatne AI i asystent wiedzy",
    automation: "Wdrożenie i integracje",
    review: "Przegląd istniejącej automatyzacji",
    process: "Który proces zabiera dziś najwięcej czasu?",
    processPlaceholder: "Opisz krótko, co uruchamia proces, kto go obsługuje i gdzie najczęściej pojawia się opóźnienie.",
    volume: "Ile takich operacji lub zapytań pojawia się miesięcznie?",
    volumePlaceholder: "Wybierz orientacyjny przedział",
    upTo20: "Do 20",
    from20to100: "20 do 100",
    from100to500: "100 do 500",
    over500: "Ponad 500",
    unknown: "Nie wiem",
    trap: "Strona internetowa",
    submit: "Wyślij opis procesu",
    sending: "Wysyłam...",
    note: "Odpowiadam osobiście. Pierwsza rozmowa trwa 20 minut i nic nie kosztuje.",
    sent: "Dziękuję, wiadomość została wysłana. Odezwę się, żeby ustalić termin rozmowy.",
    error: "Nie udało się potwierdzić wysyłki. Twoje dane pozostały w formularzu. Spróbuj ponownie za chwilę lub",
    emailLink: "napisz e-mail",
  },
  en: {
    subject: "One Good Engineer - new process enquiry",
    name: "Name",
    company: "Company and industry",
    companyPlaceholder: "e.g. B2B training company",
    contact: "Email or phone",
    contactPlaceholder: "What is the best way to reach you?",
    service: "What can I help with?",
    audit: "Audit and improvement plan",
    undecided: "I am not sure yet",
    privateAI: "Private AI and knowledge assistant",
    automation: "Implementation and integrations",
    review: "Review of an existing automation",
    process: "Which process takes the most time today?",
    processPlaceholder: "Briefly describe what starts the process, who handles it and where delays usually appear.",
    volume: "How many such operations or enquiries happen each month?",
    volumePlaceholder: "Choose an approximate range",
    upTo20: "Up to 20",
    from20to100: "20 to 100",
    from100to500: "100 to 500",
    over500: "Over 500",
    unknown: "I do not know",
    trap: "Website",
    submit: "Send process description",
    sending: "Sending...",
    note: "I reply personally. The first conversation takes 20 minutes and costs nothing.",
    sent: "Thank you, your message was sent. I will get back to arrange a conversation.",
    error: "The submission could not be confirmed. Your details remain in the form. Try again in a moment or",
    emailLink: "send an email",
  },
} as const;

export default function LeadForm({locale = "pl"}: {locale?: Locale}) {
  const t = copy[locale];
  const [status, setStatus] = useState<Status>("idle");
  const inFlight = useRef(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(Array.from(new FormData(form).entries(), ([key, value]) => [key, String(value)]));

    if (values._gotcha) {
      setStatus("sent");
      return;
    }

    const message = buildLeadMessage(values, window.location.href, email, locale);
    inFlight.current = true;
    setStatus("sending");
    try {
      await submitLead(buildLeadPayload(values, message.source, locale));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  };

  return (
    <form className="lead-form" action={LEAD_ENDPOINT} method="POST" onSubmit={handleSubmit} onChange={() => {if (!inFlight.current) setStatus("idle");}} aria-busy={status === "sending"}>
      <fieldset className="lead-fields" disabled={status === "sending"}>
      <input type="hidden" name="subject" value={t.subject} />
      <div className="form-grid">
        <label>
          <span>{t.name}</span>
          <input name="name" autoComplete="given-name" maxLength={120} required />
        </label>
        <label>
          <span>{t.company}</span>
          <input name="companyIndustry" autoComplete="organization" placeholder={t.companyPlaceholder} maxLength={180} required />
        </label>
      </div>
      <label>
        <span>{t.contact}</span>
        <input name="contact" autoComplete="email" placeholder={t.contactPlaceholder} maxLength={160} required />
      </label>
      <label><span>{t.service}</span><select name="service" defaultValue={t.undecided}><option>{t.undecided}</option><option>{t.audit}</option><option>{t.privateAI}</option><option>{t.automation}</option><option>{t.review}</option></select></label>
      <label>
        <span>{t.process}</span>
        <textarea
          name="process"
          rows={5}
          maxLength={2000}
          placeholder={t.processPlaceholder}
          required
        />
      </label>
      <label>
        <span>{t.volume}</span>
        <select name="volume" defaultValue="" required>
          <option value="" disabled>{t.volumePlaceholder}</option>
          <option value={locale === "pl" ? "do 20" : "up to 20"}>{t.upTo20}</option>
          <option value="20-100">{t.from20to100}</option>
          <option value="100-500">{t.from100to500}</option>
          <option value={locale === "pl" ? "ponad 500" : "over 500"}>{t.over500}</option>
          <option value={locale === "pl" ? "nie wiem" : "unknown"}>{t.unknown}</option>
        </select>
      </label>
      <label className="form-trap" aria-hidden="true">
        <span>{t.trap}</span>
        <input name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t.sending : t.submit}<span>↗</span>
        </button>
        <p>{t.note}</p>
      </div>
      </fieldset>
      <div className={`form-status ${status}`} aria-live="polite">
        {status === "sent" ? t.sent : null}
        {status === "error" ? <>{t.error} <a href={`mailto:${email}`}>{t.emailLink}</a>.</> : null}
      </div>
    </form>
  );
}
