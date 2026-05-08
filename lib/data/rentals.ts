export interface Rental {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  includedItems: string[];
  description: string;
}

export const rentals: Rental[] = [
  {
    id: "r1",
    slug: "complete-couple-kit",
    name: "Complete Couple Camping Kit",
    category: "Packages",
    image: "https://images.unsplash.com/photo-1525811902-f2342640856e?w=800&q=80",
    includedItems: ["1x 2-Person Canvas Tent", "2x Sleeping Bags", "2x Camping Chairs", "1x Gas Stove", "1x Lantern", "Cookware Set"],
    description: "Everything you need for a weekend getaway for two. High quality gear guaranteed.",
  },
  {
    id: "r2",
    slug: "family-safari-tent",
    name: "6-Person Family Tent",
    category: "Tents",
    image: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800&q=80",
    includedItems: ["1x Heavy Duty 6-Person Tent", "Ground Sheet", "Pegs & Mallet"],
    description: "Spacious enough to stand in, this tent is perfect for family camping trips.",
  },
  {
    id: "r3",
    slug: "rooftop-tent-setup",
    name: "4x4 Rooftop Tent Setup",
    category: "Vehicles",
    image: "https://images.unsplash.com/photo-1528659131669-e380ce3e944d?w=800&q=80",
    includedItems: ["Rooftop Tent", "Mattress", "Telescopic Ladder"],
    description: "Transform your 4x4 into an adventure vehicle. Installation included.",
  }
];
