"use client";

import { useState } from "react";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="reservation" className="glass-card p-6 sm:p-8">
      <h2 className="font-serif text-2xl font-semibold">Online Reservation</h2>
      <p className="mt-2 text-sm text-espresso/70">Reserve your cozy table in seconds.</p>

      <form
        className="mt-6 grid gap-4 sm:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label className="grid gap-1 text-sm">
          Name
          <input required className="rounded-lg border border-espresso/15 bg-white px-3 py-2" />
        </label>

        <label className="grid gap-1 text-sm">
          Email
          <input required type="email" className="rounded-lg border border-espresso/15 bg-white px-3 py-2" />
        </label>

        <label className="grid gap-1 text-sm">
          Date
          <input required type="date" className="rounded-lg border border-espresso/15 bg-white px-3 py-2" />
        </label>

        <label className="grid gap-1 text-sm">
          Time
          <input required type="time" className="rounded-lg border border-espresso/15 bg-white px-3 py-2" />
        </label>

        <label className="grid gap-1 text-sm sm:col-span-2">
          Guests
          <input required type="number" min={1} max={20} className="rounded-lg border border-espresso/15 bg-white px-3 py-2" />
        </label>

        <button className="sm:col-span-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
          Confirm Reservation
        </button>
      </form>

      {submitted ? (
        <p className="mt-4 text-sm text-sage" role="status" aria-live="polite">
          Thanks, your reservation request has been received.
        </p>
      ) : null}
    </section>
  );
}
