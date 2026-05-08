export interface Trip {
  id: string;
  slug: string;
  name: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  image: string;
  description: string;
}

export const trips: Trip[] = [
  {
    id: "t1",
    slug: "aberdare-waterfalls",
    name: "Aberdare Waterfalls Trek",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    groupSize: "4-12 People",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    description: "A guided weekend trek through the lush Aberdare ranges, hunting for hidden waterfalls.",
  },
  {
    id: "t2",
    slug: "suswa-caves",
    name: "Mt. Suswa Crater & Caves",
    duration: "1 Day Trip",
    difficulty: "Easy",
    groupSize: "2-8 People",
    image: "https://images.unsplash.com/photo-1613149793132-73602d327854?w=800&q=80",
    description: "Explore the fascinating volcanic caves and the outer crater of Mt. Suswa with an expert Maasai guide.",
  },
  {
    id: "t3",
    slug: "magadi-flamingo",
    name: "Lake Magadi Flamingo Camp",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy",
    groupSize: "4-15 People",
    image: "https://images.unsplash.com/photo-1501651493038-f1f4b8e2dff1?w=800&q=80",
    description: "Witness incredible sunsets and thousands of flamingos at this unique alkaline lake camping experience.",
  }
];
