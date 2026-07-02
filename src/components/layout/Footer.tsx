import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-espresso/10 bg-sand/40 py-10">
      <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <section>
          <h2 className="font-serif text-lg font-semibold">{site.name}</h2>
          <p className="mt-2 text-sm text-espresso/80">{site.address}</p>
        </section>

        <section>
          <h2 className="font-semibold">Contact</h2>
          <p className="mt-2 text-sm">{site.phone}</p>
          <p className="text-sm">{site.email}</p>
        </section>

        <section>
          <h2 className="font-semibold">Opening Hours</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {site.hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-semibold">Follow Us</h2>
          <div className="mt-2 flex gap-3 text-sm">
            <Link href={site.socials.instagram}>Instagram</Link>
            <Link href={site.socials.facebook}>Facebook</Link>
            <Link href={site.socials.x}>X</Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
