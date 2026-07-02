export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
};

export type Review = {
  id: string;
  name: string;
  quote: string;
  rating: number;
};
