"use client";

import {FormEvent, useState} from "react";
import {email} from "../../LandingPage";

type Status = "idle" | "sending" | "sent" | "email" | "error";

const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    if (values.website) {
      setStatus("sent");
      return;
    }

    if (!endpoint) {
      const subject = encodeURIComponent(`Konsultacja automatyzacji: ${values.companyIndustry}`);
      const body = encodeURIComponent(
        [
          `Imię: ${values.name}`,
          `Firma i branża: ${values.companyIndustry}`,
          `Kontakt: ${values.contact}`,
          `Liczba operacji miesięcznie: ${values.volume}`,
          "",
          "Proces, który zabiera najwięcej czasu:",
          values.process,
        ].join("\n"),
      );
      setStatus("email");
      window.location.assign(`mailto:${email}?subject=${subject}&body=${body}`);
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          ...values,
          source: window.location.href,
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

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Imię</span>
          <input name="name" autoComplete="given-name" required />
        </label>
        <label>
          <span>Firma i branża</span>
          <input name="companyIndustry" autoComplete="organization" placeholder="np. klinika stomatologiczna" required />
        </label>
      </div>
      <label>
        <span>E-mail lub telefon</span>
        <input name="contact" autoComplete="email" placeholder="Jak najlepiej się z Tobą skontaktować?" required />
      </label>
      <label>
        <span>Który proces zabiera dziś najwięcej czasu?</span>
        <textarea
          name="process"
          rows={5}
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
          {status === "sending" ? "Wysyłam..." : "Wyślij opis procesu"}<span>↗</span>
        </button>
        <p>Odpowiadam osobiście. Pierwsza rozmowa trwa 20 minut i nic nie kosztuje.</p>
      </div>
      <div className={`form-status ${status}`} aria-live="polite">
        {status === "sent" ? "Dziękuję. Zapytanie zostało zapisane. Odezwę się, żeby ustalić termin rozmowy." : null}
        {status === "email" ? "Otwieram przygotowaną wiadomość. Wyślij ją w swoim programie pocztowym." : null}
        {status === "error" ? <>Nie udało się wysłać formularza. Napisz bezpośrednio na <a href={`mailto:${email}`}>{email}</a>.</> : null}
      </div>
    </form>
  );
}
