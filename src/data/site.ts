import type { MenuItem, Review } from "@/types";

export const site = {
  name: "Play Coffee - Beecroft",
  phone: "+1 (555) 123-4567",
  email: "hello@oakembercafe.com",
  address: "245 Maple Street, Portland, OR 97205",
  intro:
    "A warm neighborhood cafe where specialty coffee meets artisan comfort food.",
  hours: [
    { day: "Monday - Friday", time: "7:00 AM - 7:00 PM" },
    { day: "Saturday", time: "8:00 AM - 8:00 PM" },
    { day: "Sunday", time: "8:00 AM - 5:00 PM" },
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    x: "https://x.com",
  },
  mapEmbed: "https://www.google.com/maps?q=Portland+OR&output=embed",
};

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Signature Cappuccino",
    description: "Velvety microfoam, single-origin espresso, and cocoa dust.",
    price: "$5.50",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "2",
    name: "Honey Cinnamon Latte",
    description: "House-infused cinnamon, raw honey, and oat milk.",
    price: "$6.00",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1fceb?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "3",
    name: "Smoked Salmon Toast",
    description: "Sourdough, herbed cream cheese, capers, and lemon zest.",
    price: "$11.00",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Almond Croissant",
    description: "Buttery pastry layers with almond frangipane filling.",
    price: "$4.75",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Seasonal Burrata Salad",
    description: "Market greens, citrus, toasted seeds, and warm focaccia.",
    price: "$13.00",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Single-Origin Pour Over",
    description: "Rotating micro-lot beans brewed to highlight nuanced notes.",
    price: "$6.50",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sophia R.",
    quote:
      "Incredible coffee, cozy atmosphere, and the kindest staff. My favorite morning spot.",
    rating: 5,
  },
  {
    id: "2",
    name: "Daniel K.",
    quote:
      "The latte art is beautiful and the pastries are consistently top-tier.",
    rating: 5,
  },
  {
    id: "3",
    name: "Maya L.",
    quote:
      "Perfect blend of premium feel and neighborhood warmth. Highly recommend.",
    rating: 5,
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517701550927-30cf4ba1fceb?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1200&auto=format&fit=crop",
];