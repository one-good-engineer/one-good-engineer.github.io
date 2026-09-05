"use client";

import {FormEvent, useState} from "react";
import {email} from "../../LandingPage";
import {buildLeadMessage} from "./lead-message";

type Status = "idle" | "sending" | "sent" | "email" | "error";

const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [draft, setDraft] = useState<ReturnType<typeof buildLeadMessage> | null>(null);
  const [copyStatus, setCopyStatus] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(Array.from(new FormData(form).entries(), ([key, value]) => [key, String(value)]));

    if (values.website) {
      setStatus("sent");
      return;
    }

    const message = buildLeadMessage(values, window.location.href, email);
    if (!endpoint) {
      setDraft(message);
      setStatus("email");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        signal: AbortSignal.timeout(15000),
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          ...values,
          source: message.source,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error(`Lead endpoint returned ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const copyMessage = async () => {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(`Do: ${email}\nTemat: ${draft.subject}\n\n${draft.body}`);
      setCopyStatus("Skopiowano. Wklej treść do swojej poczty i wyślij wiadomość.");
    } catch {
      setCopyStatus("Nie mogę skopiować automatycznie. Zaznacz i skopiuj treść z pola poniżej.");
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit} onChange={() => {setDraft(null); setCopyStatus(""); setStatus("idle");}}>
      {!endpoint ? <p className="contact-mode">Ten formularz przygotowuje wiadomość do <a href={`mailto:${email}`}>{email}</a>. Niczego nie wysyła ani nie zapisuje automatycznie.</p> : null}
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
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Wysyłam..." : endpoint ? "Wyślij opis procesu" : "Przygotuj wiadomość"}<span>↗</span>
        </button>
        <p>Odpowiadam osobiście. Pierwsza rozmowa trwa 20 minut i nic nie kosztuje.</p>
      </div>
      <div className={`form-status ${status}`} aria-live="polite">
        {status === "sent" ? "Dziękuję. Zapytanie zostało zapisane. Odezwę się, żeby ustalić termin rozmowy." : null}
        {status === "email" ? "Wiadomość jest przygotowana, ale jeszcze nie została wysłana. Otwórz pocztę lub skopiuj treść poniżej." : null}
        {status === "error" ? <>Nie udało się wysłać formularza. Napisz bezpośrednio na <a href={`mailto:${email}`}>{email}</a>.</> : null}
      </div>
      {draft ? <section className="message-draft" aria-label="Przygotowana wiadomość"><div className="draft-actions"><a className="button button-primary" href={draft.mailto}>Otwórz pocztę ↗</a><button type="button" className="button button-ghost" onClick={copyMessage}>Kopiuj wiadomość</button></div><label><span>Treść do wysłania na {email}</span><textarea readOnly rows={10} value={`Temat: ${draft.subject}\n\n${draft.body}`} /></label><p role="status">{copyStatus}</p></section> : null}
    </form>
  );
}
