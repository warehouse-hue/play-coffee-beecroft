import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container-page section">
        <h1 className="font-serif text-4xl font-semibold">About Us</h1>
        <p className="mt-4 max-w-3xl text-espresso/80">
          Play Coffee - Beecroft is rooted in neighborhood hospitality. We source premium
          beans, work with local bakers, and create a welcoming atmosphere where
          every visit feels intentional.
        </p>
      </main>
      <Footer />
    </>
  );
}
