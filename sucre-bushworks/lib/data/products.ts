export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "safari-canvas-tent",
    name: "Safari Canvas Tent Pro",
    price: 45000,
    image: "https://images.unsplash.com/photo-1504280327315-567951573195?w=800&q=80",
    category: "Tents",
    description: "Premium heavy-duty canvas tent built for the Kenyan outdoors. Weather resistant and spacious.",
  },
  {
    id: "p2",
    slug: "mara-sleeping-bag",
    name: "Mara Thermal Sleeping Bag",
    price: 8500,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&q=80",
    category: "Sleeping Bags",
    description: "Ultra-warm sleeping bag rated for chilly nights near Mt. Kenya.",
  },
  {
    id: "p3",
    slug: "camp-master-stove",
    name: "Camp Master Gas Stove",
    price: 5200,
    image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=800&q=80",
    category: "Cooking",
    description: "Portable twin-burner gas stove for ultimate outdoor cooking.",
  },
  {
    id: "p4",
    slug: "bush-lantern-led",
    name: "Bushworks LED Lantern",
    price: 3500,
    image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=800&q=80",
    category: "Lighting",
    description: "Rechargeable solar LED lantern with 48 hours of battery life.",
  }
];
