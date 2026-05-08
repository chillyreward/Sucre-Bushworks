export interface Trip {
  id: string;
  slug: string;
  title: string;
  destinationType: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  durationLabel: string;
  image: string;
  summary: string;
  overview: string;
  whatToExpect: string;
  suggestedItinerary: { day: string; activity: string }[];
  whatToBring: string[];
  recommendedGear: string[];
  safetyNotes: string;
  tags: string[];
  whatsappMessage: string;
}

export const TRIP_FILTERS = [
  "Beginner",
  "Lakeside",
  "Forest",
  "Mountain",
  "Bushwalk",
  "Weekend",
  "Family",
  "Hiking + Camping",
  "Stargazing"
];

export const trips: Trip[] = [
  {
    id: "t1",
    slug: "beginner-camping-experience",
    title: "Beginner Camping Experience",
    destinationType: "Savannah/Near Nairobi",
    difficulty: "Easy",
    durationLabel: "1 Night / 2 Days",
    image: "/images/trips/beginner-camping-experience.jpg",
    summary: "A gentle introduction to sleeping under the stars, fully guided and close to home.",
    overview: "Never camped before? This is the perfect start. We handle the heavy lifting, teach you how to pitch a tent, start a campfire, and enjoy the outdoors without the stress of planning. Located at a safe, accessible site just outside Nairobi.",
    whatToExpect: "Hands-on learning, a comfortable setup, and a relaxed campfire evening. You'll leave feeling confident to plan your next trip.",
    suggestedItinerary: [
      { day: "Day 1", activity: "Arrival, tent pitching masterclass, nature walk, and campfire dinner." },
      { day: "Day 2", activity: "Breakfast in the bush, basic wilderness first aid intro, and departure." }
    ],
    whatToBring: ["Warm clothing", "Personal toiletries", "A sense of adventure"],
    recommendedGear: ["Forest Sleeping Bag", "Water Bottle Set"],
    safetyNotes: "Our guides are first-aid certified and the campsite is fully secure.",
    tags: ["Beginner", "Weekend", "Family"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Beginner Camping Experience."
  },
  {
    id: "t2",
    slug: "lakeside-camping-experience",
    title: "Lakeside Camping Experience",
    destinationType: "Lakeside",
    difficulty: "Easy",
    durationLabel: "2 Nights / 3 Days",
    image: "/images/trips/lakeside-camping-experience.jpg",
    summary: "Unwind by the tranquil waters of the Rift Valley lakes with boat rides and bird watching.",
    overview: "Trade the city noise for the sound of lapping water and grazing hippos. Set on the shores of Lake Naivasha, this trip is all about relaxation, stunning sunsets, and easy-going exploration.",
    whatToExpect: "Chilled afternoons, scenic boat rides, and beautiful lakeside sunrises right from your tent.",
    suggestedItinerary: [
      { day: "Day 1", activity: "Arrive at Naivasha, set up camp, evening boat ride." },
      { day: "Day 2", activity: "Morning bird walk, afternoon leisure or optional Hell's Gate cycle, campfire." },
      { day: "Day 3", activity: "Leisurely breakfast and departure." }
    ],
    whatToBring: ["Binoculars", "Sunscreen", "Mosquito repellent"],
    recommendedGear: ["Campfire Chair", "Mara Camp Lantern"],
    safetyNotes: "Stay clear of the lake edge at night due to hippos.",
    tags: ["Lakeside", "Weekend", "Family"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Lakeside Camping Experience."
  },
  {
    id: "t3",
    slug: "forest-camping-experience",
    title: "Forest Camping Experience",
    destinationType: "Forest",
    difficulty: "Moderate",
    durationLabel: "2 Nights / 3 Days",
    image: "/images/trips/forest-camping-experience.jpg",
    summary: "Immerse yourself in the deep, misty indigenous forests of the Aberdares or Mount Kenya.",
    overview: "Disconnect completely under the canopy of ancient trees. This trip takes you into the cool, crisp mountain forests where you'll hike to hidden waterfalls and sleep to the sounds of nocturnal wildlife.",
    whatToExpect: "Chilly nights, dense greenery, moderate hiking, and a true sense of isolation.",
    suggestedItinerary: [
      { day: "Day 1", activity: "Drive to forest gate, hike to campsite, set up." },
      { day: "Day 2", activity: "Full day waterfall hike and tracking local wildlife." },
      { day: "Day 3", activity: "Morning forest bath, pack up, and return." }
    ],
    whatToBring: ["Rain gear", "Sturdy hiking boots", "Warm layers"],
    recommendedGear: ["Trail Hiking Backpack", "Waterproof Duffel Bag", "First Aid Outdoor Kit"],
    safetyNotes: "Weather can change rapidly to heavy rain. Elephants and buffalo are present; always stay with the guide.",
    tags: ["Forest", "Hiking + Camping"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Forest Camping Experience."
  },
  {
    id: "t4",
    slug: "mountain-camping-experience",
    title: "Mountain Camping Experience",
    destinationType: "Mountain",
    difficulty: "Challenging",
    durationLabel: "3 Nights / 4 Days",
    image: "/images/trips/mountain-camping-experience.jpg",
    summary: "A challenging high-altitude expedition on the slopes of Mount Kenya.",
    overview: "For those seeking a serious adventure. We'll camp at high altitude, adjusting to the thinner air, and exploring the dramatic alpine moorlands. This is a rigorous trip requiring good physical fitness.",
    whatToExpect: "Strenuous uphill hiking, freezing nights, breathtaking alpine scenery, and a profound sense of achievement.",
    suggestedItinerary: [
      { day: "Day 1", activity: "Ascent to first camp (3,000m), acclimatization walk." },
      { day: "Day 2", activity: "Hike to high camp (4,000m), evening briefing." },
      { day: "Day 3", activity: "Exploration of alpine lakes, return to lower camp." },
      { day: "Day 4", activity: "Descent and return to base." }
    ],
    whatToBring: ["Thermal underwear", "Quality sleeping bag", "Altitude sickness medication (if prescribed)"],
    recommendedGear: ["Forest Sleeping Bag", "Trail Hiking Backpack"],
    safetyNotes: "Risk of altitude sickness. Guides are trained to monitor symptoms and will descend if necessary.",
    tags: ["Mountain", "Hiking + Camping"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Mountain Camping Experience."
  },
  {
    id: "t5",
    slug: "bushwalk-experience",
    title: "Bushwalk Experience",
    destinationType: "Savannah",
    difficulty: "Moderate",
    durationLabel: "2 Nights / 3 Days",
    image: "/images/trips/bushwalk-experience.jpg",
    summary: "Leave the car behind and track wildlife on foot with expert Maasai guides.",
    overview: "Experience the African bush as it was meant to be experienced—on foot. Accompanied by armed rangers and expert local guides, you'll learn to read tracks, understand medicinal plants, and approach plains game safely.",
    whatToExpect: "Hot dusty walks, thrilling encounters, and a deep educational dive into the ecosystem.",
    suggestedItinerary: [
      { day: "Day 1", activity: "Arrive at conservancy camp, safety briefing, short evening walk." },
      { day: "Day 2", activity: "Early morning 4-hour tracking walk. Afternoon rest. Evening sundowner walk." },
      { day: "Day 3", activity: "Final morning walk, bush breakfast, departure." }
    ],
    whatToBring: ["Neutral colored clothing", "Wide-brimmed hat", "Good walking shoes"],
    recommendedGear: ["Water Bottle Set", "Compass & Navigation Kit"],
    safetyNotes: "Strict adherence to the guide's instructions is mandatory. Never run if surprised by an animal.",
    tags: ["Bushwalk", "Savannah"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Bushwalk Experience."
  },
  {
    id: "t6",
    slug: "weekend-near-nairobi-experience",
    title: "Weekend Near Nairobi Experience",
    destinationType: "Various",
    difficulty: "Easy",
    durationLabel: "1 Night / 2 Days",
    image: "/images/trips/weekend-near-nairobi-experience.jpg",
    summary: "The perfect quick getaway to recharge without spending hours on the road.",
    overview: "Designed for busy professionals and families. We leave Saturday morning, set up camp less than two hours from the city, enjoy a great dinner under the stars, and return Sunday feeling refreshed.",
    whatToExpect: "Minimal travel time, maximum relaxation, good food, and good company.",
    suggestedItinerary: [
      { day: "Saturday", activity: "Depart Nairobi 10 AM, arrive and relax, sunset hike, BBQ dinner." },
      { day: "Sunday", activity: "Pancake breakfast, lazy morning, return to Nairobi by 2 PM." }
    ],
    whatToBring: ["Comfortable camp clothes", "Book or journal", "Snacks"],
    recommendedGear: ["Campfire Chair", "Safari Canvas Tent"],
    safetyNotes: "Safe, fenced or guarded campsites only.",
    tags: ["Weekend", "Beginner"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Weekend Near Nairobi Experience."
  },
  {
    id: "t7",
    slug: "campfire-night-experience",
    title: "Campfire Night Experience",
    destinationType: "Savannah/Forest",
    difficulty: "Easy",
    durationLabel: "1 Night / 2 Days",
    image: "/images/trips/campfire-night-experience.jpg",
    summary: "A specialized trip focusing on outdoor cooking, storytelling, and bushcraft around the fire.",
    overview: "The campfire is the heart of any campsite. This experience focuses on the evening: learning different fire lays, cooking meals over coals, and enjoying acoustic music or storytelling in the wild.",
    whatToExpect: "Lots of smoke, delicious fire-cooked food, and learning practical bushcraft skills.",
    suggestedItinerary: [
      { day: "Day 1", activity: "Camp setup, wood gathering, fire making workshop, campfire feast." },
      { day: "Day 2", activity: "Breakfast cooked on embers, camp teardown." }
    ],
    whatToBring: ["Clothes you don't mind getting smoky", "Marshmallows"],
    recommendedGear: ["Bush Cooking Kit", "Campfire Chair", "Mara Camp Lantern"],
    safetyNotes: "Fire safety and leave-no-trace principles will be strictly enforced.",
    tags: ["Weekend", "Family", "Beginner"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Campfire Night Experience."
  },
  {
    id: "t8",
    slug: "hiking-camping-experience",
    title: "Hiking + Camping Experience",
    destinationType: "Mountain/Rift Valley",
    difficulty: "Moderate",
    durationLabel: "2 Nights / 3 Days",
    image: "/images/trips/hiking-camping-experience.jpg",
    summary: "Combine a challenging day hike with a rewarding night at a scenic wilderness camp.",
    overview: "Earn your dinner. This trip involves a solid 10-15km hike through stunning terrain (like the Rift Valley escarpment or Ngong Hills), ending at a pre-set camp where cold drinks and a hot meal await.",
    whatToExpect: "Sore legs, spectacular views, and the satisfaction of reaching camp on foot.",
    suggestedItinerary: [
      { day: "Day 1", activity: "Drive to trailhead, 12km hike to camp. Dinner." },
      { day: "Day 2", activity: "8km morning hike, return to base, afternoon relaxation." },
      { day: "Day 3", activity: "Short sunrise hike, breakfast, departure." }
    ],
    whatToBring: ["Broken-in hiking boots", "Hydration pack", "Trekking poles"],
    recommendedGear: ["Trail Hiking Backpack", "Water Bottle Set", "First Aid Outdoor Kit"],
    safetyNotes: "Ensure you have enough water for the hiking portions. Sunstroke is a risk.",
    tags: ["Hiking + Camping", "Mountain", "Weekend"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Hiking + Camping Experience."
  },
  {
    id: "t9",
    slug: "family-outdoor-escape",
    title: "Family Outdoor Escape",
    destinationType: "Lakeside/Savannah",
    difficulty: "Easy",
    durationLabel: "2 Nights / 3 Days",
    image: "/images/trips/family-outdoor-escape.jpg",
    summary: "A kid-friendly adventure designed to get the whole family off screens and into nature.",
    overview: "We take the stress out of camping with kids. We provide spacious family tents, kid-friendly meals, and organized activities like scavenger hunts and basic animal tracking to keep the little ones engaged.",
    whatToExpect: "Laughter, dirt, easy nature walks, and memorable family bonding.",
    suggestedItinerary: [
      { day: "Day 1", activity: "Arrival, 'find your tent' game, easy dinner." },
      { day: "Day 2", activity: "Morning nature scavenger hunt, afternoon crafts/games, campfire stories." },
      { day: "Day 3", activity: "Pancake breakfast, family photo, departure." }
    ],
    whatToBring: ["Favorite toys/games", "Extra changes of clothes", "Snacks"],
    recommendedGear: ["Safari Canvas Tent", "Mara Camp Lantern", "First Aid Outdoor Kit"],
    safetyNotes: "Campsites chosen are fenced or have guards to ensure children can play safely.",
    tags: ["Family", "Beginner", "Weekend"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Family Outdoor Escape."
  },
  {
    id: "t10",
    slug: "stargazing-camp-experience",
    title: "Stargazing Camp Experience",
    destinationType: "Savannah/Desert",
    difficulty: "Easy",
    durationLabel: "1 Night / 2 Days",
    image: "/images/trips/stargazing-camp-experience.jpg",
    summary: "Travel to remote, dark-sky locations for an unforgettable night of astronomy.",
    overview: "Escape light pollution. We head to arid regions like Magadi or Samburu where the skies are incredibly clear. A local guide will point out constellations, both Western and traditional African star lore.",
    whatToExpect: "Late nights, incredibly bright stars, telescope viewing, and quiet darkness.",
    suggestedItinerary: [
      { day: "Day 1", activity: "Arrive late afternoon, set up camp, dinner, guided astronomy session till late." },
      { day: "Day 2", activity: "Late breakfast, hot springs visit (if at Magadi), departure." }
    ],
    whatToBring: ["Warm clothes for the night", "Camera with manual settings (optional)", "Red-light headlamp"],
    recommendedGear: ["Ground Sheet & Tarp Kit", "Forest Sleeping Bag"],
    safetyNotes: "Remote areas require careful travel. Stay close to camp in the dark.",
    tags: ["Stargazing", "Weekend"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Stargazing Camp Experience."
  }
];
