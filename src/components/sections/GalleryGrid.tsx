import Image from "next/image";
import { galleryImages } from "@/data/site";

export function GalleryGrid() {
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="font-serif text-3xl font-semibold">Gallery</h2>
        <p className="mt-2 text-sm text-espresso/75">
          Instagram-style moments from our cafe.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={`Cafe atmosphere image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
