import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="section">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Specialty Coffee • Artisan Bakes
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            A warm cup, a welcoming space.
          </h1>
          <p className="max-w-xl text-pretty text-espresso/80">{site.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/menu">Explore Menu</Button>
            <Button href="/contact#reservation" className="bg-sage">
              Reserve Now
            </Button>
          </div>
        </div>

        <div className="relative h-[340px] overflow-hidden rounded-3xl sm:h-[460px]">
          <Image
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop"
            alt="Freshly brewed coffee on a rustic wooden table"
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
