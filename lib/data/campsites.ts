export interface Campsite {
  id: string;
  slug: string;
  name: string;
  region: string;
  location: string;
  environmentType: string;
  image: string;
  tags: string[];
  guideAvailable: boolean;
  summary: string;
  description: string;
  amenities: string[];
  activities: string[];
  safetyNotes: string;
}

export const campsites: Campsite[] = [
  {
    id: "c1",
    slug: "nairobi-national-park-camp",
    name: "Nairobi National Park Twiga Camp",
    region: "Near Nairobi",
    location: "Nairobi National Park",
    environmentType: "Savannah & Wildlife",
    image: "https://images.unsplash.com/photo-1516934524458-71e1948ba26a?w=800&q=80",
    tags: ["Wildlife", "Family Friendly", "Beginner Pick"],
    guideAvailable: true,
    summary: "Camp with the city skyline in the background and wildlife all around.",
    description: "Experience the unique thrill of camping inside the world's only wildlife capital. Wake up to the sounds of lions and hyenas while being just minutes away from the city center. Perfect for a quick weekend escape or a beginner camping experience.",
    amenities: ["Toilets", "Running Water", "Fire Pits", "Security"],
    activities: ["Game Drives", "Bird Watching", "Safari Walk"],
    safetyNotes: "KWS Rangers are stationed nearby. Do not leave food in tents due to baboons."
  },
  {
    id: "c2",
    slug: "naivasha-lakeside-haven",
    name: "Naivasha Lakeside Haven",
    region: "Rift Valley",
    location: "Lake Naivasha, Nakuru",
    environmentType: "Lakeside Escapes",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80",
    tags: ["Lake View", "Campfire Friendly", "Boating"],
    guideAvailable: true,
    summary: "Wake up to the sound of hippos and birds at this serene lakeside camping spot.",
    description: "Nestled right on the shores of Lake Naivasha, this campsite offers cool breezes under yellow fever trees. It's a prime spot for birdwatchers and those looking for a peaceful lakeside retreat. Campfires are allowed and encouraged.",
    amenities: ["Hot Showers", "Flush Toilets", "Restaurant Nearby", "Firewood for Sale"],
    activities: ["Boat Rides", "Crescent Island Walk", "Birding"],
    safetyNotes: "Keep a safe distance from the shoreline at night due to hippos grazing."
  },
  {
    id: "c3",
    slug: "mt-kenya-forest-basecamp",
    name: "Mt. Kenya Forest Basecamp",
    region: "Mountain & Forest",
    location: "Nanyuki / Mount Kenya",
    environmentType: "Mountain",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
    tags: ["High Altitude", "Hiking", "Scenic View"],
    guideAvailable: true,
    summary: "Nestled in the foothills of Mt. Kenya, offering crisp mountain air and spectacular trails.",
    description: "A true alpine camping experience. Situated at the edge of the Mt. Kenya forest reserve, this camp is the perfect base for acclimatization before a summit attempt, or simply a refreshing break from the heat.",
    amenities: ["Basic Pit Latrines", "Fresh River Water (requires treating)", "Ranger Post"],
    activities: ["Forest Hikes", "Trout Fishing", "Acclimatization Walks"],
    safetyNotes: "Temperatures drop significantly at night. A thermal sleeping bag is required."
  },
  {
    id: "c4",
    slug: "maasai-mara-river-camp",
    name: "Mara River Wild Camp",
    region: "Savannah & Wildlife",
    location: "Masai Mara",
    environmentType: "Savannah",
    image: "https://images.unsplash.com/photo-1504280327315-567951573195?w=800&q=80",
    tags: ["Wildlife", "Authentic Bush", "Safari"],
    guideAvailable: true,
    summary: "An authentic bush camping experience in the heart of the Mara ecosystem.",
    description: "Set up camp along the famous Mara River. This is wild camping at its finest, offering unparalleled access to the Great Migration and the rich biodiversity of the Maasai Mara.",
    amenities: ["Drop Toilets", "No Fences", "Bush Showers (on request)"],
    activities: ["Game Drives", "Photography", "Maasai Village Visits"],
    safetyNotes: "Strictly a guided camping area. Do not wander from the camp unescorted at night."
  },
  {
    id: "c5",
    slug: "hells-gate-gorge-camp",
    name: "Hell's Gate Gorge Camp",
    region: "Rift Valley",
    location: "Hell's Gate National Park",
    environmentType: "Savannah & Cliffs",
    image: "https://images.unsplash.com/photo-1613149793132-73602d327854?w=800&q=80",
    tags: ["Hiking", "Cycling", "Scenic View"],
    guideAvailable: true,
    summary: "Camp amidst towering cliffs and geothermal steam vents.",
    description: "One of the few national parks where walking and cycling are permitted alongside wildlife. This campsite sits near the spectacular Fischer's Tower, providing dramatic sunset views.",
    amenities: ["Toilets", "Cold Showers", "Picnic Tables"],
    activities: ["Rock Climbing", "Cycling", "Gorge Hiking"],
    safetyNotes: "Beware of sudden weather changes if hiking in the gorge."
  }
];
