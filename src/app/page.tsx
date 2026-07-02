import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FeaturedMenu } from "@/components/sections/FeaturedMenu";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="container-page pb-6 sm:pb-8">
          <p className="max-w-2xl text-pretty text-espresso/80">
            Play Coffee - Beecroft brings together premium beans, seasonal ingredients, and
            thoughtful hospitality to create moments worth savoring.
          </p>
        </section>
        <FeaturedMenu />
        <WhyChooseUs />
        <Testimonials />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}