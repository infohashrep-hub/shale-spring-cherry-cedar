import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Kicker } from "@/components/site/shell";
import {
  address,
  email,
  emailHref,
  hours,
  phoneDisplay,
  phoneHref,
  services,
} from "@/components/site/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free Estimate — Razor Sharp Rizzo" },
      {
        name: "description",
        content:
          "Get a free lawn care or snow removal estimate in Buffalo, NY. No pressure. No obligation. Call (716) 319-7431.",
      },
    ],
  }),
  component: ContactPage,
});

type Fields = {
  name: string;
  phone: string;
  email: string;
  property: string;
  service: string;
  cadence: string;
  note: string;
};

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  property: "",
  service: "Lawn Mowing & Maintenance",
  cadence: "Not sure yet",
  note: "",
};

function ContactPage() {
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (fields.name.trim().length < 2) {
      setError("Add your name so we know who to call back.");
      return;
    }
    if (fields.phone.replace(/\D/g, "").length < 10) {
      setError("Add a phone number we can text or call.");
      return;
    }
    if (!fields.property.trim()) {
      setError("Add the property address so the quote is for the right lawn.");
      return;
    }
    const existing = readSaved();
    const next = [
      { ...fields, at: new Date().toISOString() },
      ...existing,
    ].slice(0, 8);
    window.localStorage.setItem("rsr-estimates", JSON.stringify(next));
    setError("");
    setSent(true);
    setFields(empty);
  }

  return (
    <main className="pt-28 pb-16 md:pt-36">
      <section className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Kicker index="07" label="Contact" />
          <h1 className="display-xl mt-4">
            Get your
            <br />
            free estimate.
          </h1>
          <p className="mt-5 text-muted">
            Fill out the form and we’ll contact you quickly with a fast, honest
            quote. No pressure. No obligation.
          </p>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="kicker">Call or text</dt>
              <dd className="mt-2">
                <a href={phoneHref} className="display-md text-bone no-underline hover:text-gold">
                  {phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Email</dt>
              <dd className="mt-2">
                <a href={emailHref} className="text-bone no-underline hover:text-gold">
                  {email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Business</dt>
              <dd className="mt-2 text-sm text-muted">
                Razor Sharp Rizzo & Sons LLC
                <br />
                {address}
                <br />
                Buffalo, NY & surrounding areas
              </dd>
            </div>
            <div>
              <dt className="kicker">Hours</dt>
              <dd className="mt-2">
                <ul className="space-y-1 text-sm">
                  {hours.map((slot) => (
                    <li key={slot.day} className="flex justify-between gap-6 border-b border-line py-2">
                      <span>{slot.day}</span>
                      <span className="text-muted">{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="kicker">Payment</dt>
              <dd className="mt-2 text-sm text-muted">
                Cash, Venmo, PayPal, and Zelle.
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="glass rounded-card p-5 md:p-8">
            {sent ? (
              <div role="status">
                <p className="kicker">Received</p>
                <h2 className="display-lg mt-4">We’ll be in touch.</h2>
                <p className="mt-4 text-muted">
                  Your request is saved on this device and ready for the crew.
                  If it’s urgent, call or text {phoneDisplay} — that’s still
                  the fastest way onto the route.
                </p>
                <button type="button" className="btn btn-gold mt-8" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2" noValidate>
                <p className="serif text-3xl md:col-span-2">Start your estimate.</p>
                <label className="field">
                  <span>Name</span>
                  <input
                    value={fields.name}
                    onChange={(event) => update("name", event.target.value)}
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="field">
                  <span>Phone</span>
                  <input
                    value={fields.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    value={fields.email}
                    onChange={(event) => update("email", event.target.value)}
                    autoComplete="email"
                  />
                </label>
                <label className="field">
                  <span>Property address</span>
                  <input
                    value={fields.property}
                    onChange={(event) => update("property", event.target.value)}
                    autoComplete="street-address"
                    required
                  />
                </label>
                <label className="field">
                  <span>Service</span>
                  <select
                    value={fields.service}
                    onChange={(event) => update("service", event.target.value)}
                  >
                    {services.map((service) => (
                      <option key={service.slug}>{service.title}</option>
                    ))}
                    <option>Not sure — look at the property</option>
                  </select>
                </label>
                <label className="field">
                  <span>How often</span>
                  <select
                    value={fields.cadence}
                    onChange={(event) => update("cadence", event.target.value)}
                  >
                    <option>One-time</option>
                    <option>Weekly</option>
                    <option>Biweekly</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="field md:col-span-2">
                  <span>What should we know</span>
                  <textarea
                    value={fields.note}
                    onChange={(event) => update("note", event.target.value)}
                    placeholder="Overgrown yard, gate code, snow contract, pets…"
                  />
                </label>
                {error ? (
                  <p className="text-sm text-gold md:col-span-2" role="alert">
                    {error}
                  </p>
                ) : null}
                <div className="md:col-span-2">
                  <button type="submit" className="btn btn-gold w-full sm:w-auto">
                    Request my quote
                  </button>
                  <p className="mt-3 text-sm text-muted">
                    No pressure. No obligation. We reply by phone or text.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function readSaved(): unknown[] {
  try {
    const raw = window.localStorage.getItem("rsr-estimates");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
