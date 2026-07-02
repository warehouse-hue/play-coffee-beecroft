import Image from "next/image";
import { menuItems } from "@/data/site";

export function FeaturedMenu() {
  const featuredItems = menuItems.filter((item) => item.featured);

  return (
    <section className="section bg-sand/35">
      <div className="container-page">
        <h2 className="font-serif text-3xl font-semibold">Featured Menu Items</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <article key={item.id} className="glass-card overflow-hidden">
              <div className="relative h-52">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="font-semibold text-terracotta">{item.price}</p>
                </div>
                <p className="mt-2 text-sm text-espresso/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
