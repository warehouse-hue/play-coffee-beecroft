import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
