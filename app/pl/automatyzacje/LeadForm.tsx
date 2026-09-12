"use client";

import {FormEvent, useRef, useState} from "react";
import {email} from "../../SiteChrome";
import {buildLeadMessage} from "./lead-message";
import {buildLeadPayload, LEAD_ENDPOINT, submitLead} from "./lead-submit";

type Status = "idle" | "sending" | "sent" | "error";

export default function LeadForm() {
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

    const message = buildLeadMessage(values, window.location.href, email);
    inFlight.current = true;
    setStatus("sending");
    try {
      await submitLead(buildLeadPayload(values, message.source));
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
      <input type="hidden" name="subject" value="One Good Engineer - nowe zapytanie o proces" />
      <div className="form-grid">
        <label>
          <span>Imię</span>
          <input name="name" autoComplete="given-name" maxLength={120} required />
        </label>
        <label>
          <span>Firma i branża</span>
          <input name="companyIndustry" autoComplete="organization" placeholder="np. firma szkoleniowa B2B" maxLength={180} required />
        </label>
      </div>
      <label>
        <span>E-mail lub telefon</span>
        <input name="contact" autoComplete="email" placeholder="Jak najlepiej się z Tobą skontaktować?" maxLength={160} required />
      </label>
      <label><span>W czym mogę pomóc?</span><select name="service" defaultValue="Nie wiem jeszcze"><option>Nie wiem jeszcze</option><option>Audyt i plan usprawnień</option><option>Wdrożenie i integracje</option><option>Przegląd istniejącej automatyzacji</option></select></label>
      <label>
        <span>Który proces zabiera dziś najwięcej czasu?</span>
        <textarea
          name="process"
          rows={5}
          maxLength={2000}
          placeholder="Opisz krótko, co uruchamia proces, kto go obsługuje i gdzie najczęściej pojawia się opóźnienie."
          required
        />
      </label>
      <label>
        <span>Ile takich operacji lub zapytań pojawia się miesięcznie?</span>
        <select name="volume" defaultValue="" required>
          <option value="" disabled>Wybierz orientacyjny przedział</option>
          <option value="do 20">Do 20</option>
          <option value="20-100">20 do 100</option>
          <option value="100-500">100 do 500</option>
          <option value="ponad 500">Ponad 500</option>
          <option value="nie wiem">Nie wiem</option>
        </select>
      </label>
      <label className="form-trap" aria-hidden="true">
        <span>Strona internetowa</span>
        <input name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Wysyłam..." : "Wyślij opis procesu"}<span>↗</span>
        </button>
        <p>Odpowiadam osobiście. Pierwsza rozmowa trwa 20 minut i nic nie kosztuje.</p>
      </div>
      </fieldset>
      <div className={`form-status ${status}`} aria-live="polite">
        {status === "sent" ? "Dziękuję, wiadomość została wysłana. Odezwę się, żeby ustalić termin rozmowy." : null}
        {status === "error" ? <>Nie udało się potwierdzić wysyłki. Twoje dane pozostały w formularzu. Spróbuj ponownie za chwilę lub <a href={`mailto:${email}`}>napisz e-mail</a>.</> : null}
      </div>
    </form>
  );
}
