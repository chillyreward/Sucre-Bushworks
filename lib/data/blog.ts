export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "what-to-pack-for-first-camping-trip",
    title: "What to Pack for Your First Camping Trip",
    category: "Camping Guides",
    image: "/images/blog/first-camping-trip.jpg",
    excerpt: "Nervous about your first time sleeping in the wild? Here is a comprehensive guide on exactly what you need to bring.",
    content: `
## The Essentials

Starting out can be daunting. You don't need to buy the entire store, but you do need the basics.

1. **Shelter**: A reliable tent, like our Safari Canvas Tent, is paramount. Make sure you practice pitching it at home first.
2. **Sleeping System**: A good sleeping bag (like the Forest Sleeping Bag) and an insulated sleeping pad.
3. **Lighting**: The Mara Camp Lantern is perfect for the tent, and a headlamp is essential for hands-free tasks.
4. **Hydration**: Always carry more water than you think you need. Our Water Bottle Set is great for the trail.

Don't overpack clothes, but do bring layers. The Kenyan weather can be unpredictable, hot during the day and freezing at night depending on altitude.
    `,
    date: "2026-05-01",
    author: "Sucre Bushworks Team",
    readTime: "5 min read"
  },
  {
    id: "b2",
    slug: "best-campsites-near-nairobi",
    title: "Best Campsites Near Nairobi",
    category: "Destinations",
    image: "/images/blog/best-campsites-near-nairobi.jpg",
    excerpt: "Don't want to drive for hours? Discover the best campsites located just a short drive from the capital.",
    content: `
## Quick Escapes

Sometimes you just need to get out of the city without spending half the weekend driving.

1. **Nairobi National Park Camp**: The ultimate convenience. Camp with the lions while still seeing the city skyline.
2. **Ngong Hills Weekend Camp**: A quick drive up the hills rewards you with incredible views and crisp air.
3. **Kajiado Bush Escape**: Just 1.5 hours away, offering total privacy in a classic acacia scrubland.

These spots are perfect for our "Weekend Near Nairobi Experience" trips.
    `,
    date: "2026-04-20",
    author: "Sucre Bushworks Team",
    readTime: "4 min read"
  },
  {
    id: "b3",
    slug: "camping-gear-checklist-for-beginners",
    title: "Camping Gear Checklist for Beginners",
    category: "Gear Tips",
    image: "/images/blog/how-to-choose-camping-gear.jpg",
    excerpt: "A simple, printable checklist to ensure you never forget the essentials when heading into the bush.",
    content: `
## Never Forget the Matches

We've all been there: arriving at camp only to realize the tent poles are still in the garage. 

Here is our fail-safe checklist:
- Tent (poles, pegs, fly)
- Sleeping bag & mat
- Camp stove & fuel
- Bush Cooking Kit & utensils
- Lighter/Matches
- Headlamp & Mara Camp Lantern
- First Aid Outdoor Kit
- Trash bags (Leave No Trace!)
- Toilet paper & trowel

Keep this list in your camping box and check it twice.
    `,
    date: "2026-04-10",
    author: "Sucre Bushworks Team",
    readTime: "3 min read"
  },
  {
    id: "b4",
    slug: "how-to-plan-weekend-camping-trip-kenya",
    title: "How to Plan a Weekend Camping Trip in Kenya",
    category: "Planning",
    image: "/images/trips/weekend-near-nairobi-experience.jpg", // re-using image
    excerpt: "Step-by-step instructions on organizing a flawless weekend getaway in the Kenyan wilderness.",
    content: `
## Timing is Everything

Planning a weekend trip requires efficiency. 

**Step 1: Choose a nearby location.** Don't spend 6 hours driving for a 2-night trip. Look at places like Naivasha or Kajiado.
**Step 2: Prep food at home.** Chop veggies, marinate meats, and pack them in coolers. This saves huge amounts of time at camp.
**Step 3: Leave early.** Beat the Friday traffic out of Nairobi. Arriving and setting up camp in the dark is a rookie mistake.
**Step 4: Keep it simple.** The goal is to relax, not to execute a complex expedition.

If you don't want to plan at all, check out our guided Weekend Experiences.
    `,
    date: "2026-03-25",
    author: "Sucre Bushworks Team",
    readTime: "6 min read"
  },
  {
    id: "b5",
    slug: "safety-tips-for-camping-in-kenya",
    title: "Safety Tips for Camping in Kenya",
    category: "Safety",
    image: "/images/blog/camping-safety-tips-kenya.jpg",
    excerpt: "From wild animals to sudden weather changes, here is how to stay safe while camping in Kenya.",
    content: `
## Respect the Wild

Camping in Kenya often means camping alongside dangerous wildlife. 

1. **Never keep food in your tent.** Baboons, hyenas, and even elephants have a keen sense of smell. Keep food in your vehicle or a secure lockbox.
2. **Stay near the fire at night.** Predators avoid fire. Never wander away from the illuminated camp area in unfenced parks like the Maasai Mara.
3. **Carry a First Aid Kit.** Our First Aid Outdoor Kit is essential. Know how to treat minor burns, cuts, and insect stings.
4. **Hydrate.** The Kenyan sun is brutal. Drink plenty of water throughout the day to avoid heatstroke.

Always listen to local guides and rangers. Their knowledge is your best safety tool.
    `,
    date: "2026-03-15",
    author: "Sucre Bushworks Team",
    readTime: "5 min read"
  }
];
