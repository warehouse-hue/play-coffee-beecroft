const values = [
  {
    title: "Premium Beans",
    text: "Single-origin selections roasted for depth, aroma, and balance.",
  },
  {
    title: "Fresh Daily",
    text: "House-made pastries and seasonal dishes crafted each morning.",
  },
  {
    title: "Welcoming Space",
    text: "A cozy premium atmosphere designed for connection and calm.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="font-serif text-3xl font-semibold">Why Choose Us</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="glass-card p-6">
              <h3 className="font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-espresso/75">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
