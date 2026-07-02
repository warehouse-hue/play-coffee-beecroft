import { reviews } from "@/data/site";

export function Testimonials() {
  return (
    <section className="section bg-sand/35">
      <div className="container-page">
        <h2 className="font-serif text-3xl font-semibold">Customer Reviews</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.id} className="glass-card p-6">
              <p className="text-terracotta">{"★".repeat(review.rating)}</p>
              <p className="mt-3 text-sm text-espresso/85">“{review.quote}”</p>
              <footer className="mt-4 text-sm font-semibold">- {review.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
