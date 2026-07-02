import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { menuItems } from "@/data/site";

export const metadata = {
  title: "Menu",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="container-page section">
        <h1 className="font-serif text-4xl font-semibold">Menu</h1>
        <p className="mt-3 text-espresso/80">Coffee, pastries, and seasonal plates.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article key={item.id} className="glass-card overflow-hidden">
              <div className="relative h-56">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="font-semibold text-terracotta">{item.price}</p>
                </div>
                <p className="mt-2 text-sm text-espresso/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
