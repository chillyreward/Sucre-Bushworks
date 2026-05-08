export interface Trip {
  id: string;
  slug: string;
  name: string;
  theme: string;
  destinationType: string;
  duration: string;
  difficulty: string;
  image: string;
  summary: string;
  description: string;
  includes: string[];
}

export const trips: Trip[] = [
  {
    id: "t1",
    slug: "aberdare-forest-escape",
    name: "Aberdare Forest Camping Escape",
    theme: "Forest Camping Trip",
    destinationType: "Forest",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    summary: "A guided weekend trek through the lush Aberdare ranges, hunting for hidden waterfalls.",
    description: "Venture deep into the Aberdare National Park with our expert guides. This trip focuses on forest immersion, river crossings, and camping at high altitudes surrounded by towering bamboo and ancient trees.",
    includes: ["Expert Guide", "Campsite Fees", "Park Entry", "Tents & Sleeping Mats"]
  },
  {
    id: "t2",
    slug: "suswa-caves-weekend",
    name: "Mt. Suswa Crater & Caves",
    theme: "Hiking & Camping Combo",
    destinationType: "Mountain",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1613149793132-73602d327854?w=800&q=80",
    summary: "Explore the fascinating volcanic caves and the outer crater of Mt. Suswa.",
    description: "A physically engaging trip that combines exploring the intricate cave systems of Mt. Suswa with a scenic hike along the inner crater lip. Camp is set up by local Maasai guides under the starry Rift Valley sky.",
    includes: ["Local Maasai Guide", "Cave Exploration Fees", "Camping Gear", "Camp Meals"]
  },
  {
    id: "t3",
    slug: "magadi-flamingo-camp",
    name: "Lake Magadi Flamingo Camp",
    theme: "Lakeside Camping Trip",
    destinationType: "Lake",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1501651493038-f1f4b8e2dff1?w=800&q=80",
    summary: "Witness incredible sunsets and thousands of flamingos at this unique alkaline lake.",
    description: "A highly visual and relaxing trip focusing on bird watching, photography, and taking in the striking colors of Lake Magadi. The terrain is flat and the pace is slow, making it ideal for beginners.",
    includes: ["Photography Guide", "Transport from Nairobi", "Premium Canvas Tents"]
  },
  {
    id: "t4",
    slug: "nairobi-park-beginner-camp",
    name: "Nairobi Park Beginner Camp",
    theme: "Beginner Camping Trip",
    destinationType: "Savannah",
    duration: "1 Night",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1516934524458-71e1948ba26a?w=800&q=80",
    summary: "The perfect introduction to camping, just minutes from the city.",
    description: "Never pitched a tent before? This trip is designed to teach you the basics of camping, fire building, and outdoor safety in the secure and accessible environment of Nairobi National Park.",
    includes: ["Camping Fundamentals Class", "Tent Setup Demo", "Park Entry", "Dinner by the Fire"]
  }
];
