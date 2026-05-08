export interface Campsite {
  id: string;
  slug: string;
  name: string;
  location: string;
  image: string;
  tags: string[];
  guideAvailable: boolean;
  description: string;
}

export const campsites: Campsite[] = [
  {
    id: "c1",
    slug: "naivasha-lakeside",
    name: "Naivasha Lakeside Camp",
    location: "Lake Naivasha, Nakuru",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80",
    tags: ["Lake View", "Family Friendly", "Boating"],
    guideAvailable: true,
    description: "Wake up to the sound of hippos and birds at this serene lakeside camping spot. Perfect for weekend getaways.",
  },
  {
    id: "c2",
    slug: "mt-kenya-basecamp",
    name: "Mt. Kenya Basecamp",
    location: "Nanyuki",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
    tags: ["High Altitude", "Hiking", "Forest"],
    guideAvailable: true,
    description: "Nestled in the foothills of Mt. Kenya, offering crisp mountain air and spectacular trails.",
  },
  {
    id: "c3",
    slug: "mara-river-camp",
    name: "Mara River Wild Camp",
    location: "Masai Mara",
    image: "https://images.unsplash.com/photo-1516934524458-71e1948ba26a?w=800&q=80",
    tags: ["Wildlife", "Savannah", "Safari"],
    guideAvailable: true,
    description: "An authentic bush camping experience in the heart of the Mara ecosystem.",
  }
];
