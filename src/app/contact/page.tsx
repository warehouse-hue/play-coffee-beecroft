import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ReservationForm } from "@/components/sections/ReservationForm";
import { Testimonials } from "@/components/sections/Testimonials";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container-page section space-y-10">
        <section>
          <h1 className="font-serif text-4xl font-semibold">Contact & Location</h1>
          <p className="mt-3 text-espresso/80">{site.address}</p>
          <p className="text-espresso/80">
            {site.phone} | {site.email}
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="glass-card p-6">
            <h2 className="font-serif text-2xl font-semibold">Opening Hours</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {site.hours.map((hour) => (
                <li key={hour.day} className="flex justify-between gap-4">
                  <span>{hour.day}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="overflow-hidden rounded-2xl border border-espresso/10 bg-white">
            <iframe
              title="Cafe location on map"
              src={site.mapEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[340px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <ReservationForm />
      </main>
      <Testimonials />
      <Footer />
    </>
  );
}
