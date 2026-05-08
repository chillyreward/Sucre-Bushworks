export interface Gear {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  badge?: string;
  overview: string;
  bestFor: string;
  keyFeatures: string[];
  whatsIncluded: string[];
  specs: string[];
  careNotes: string;
  recommendedPairings: string[];
  whatsappMessage: string;
}

export const GEAR_CATEGORIES = [
  "Tents & Shelter",
  "Sleeping Gear",
  "Cooking Gear",
  "Lighting & Power",
  "Bags & Storage",
  "Safety & Survival",
  "Camp Furniture",
  "Water & Hydration",
  "Navigation Essentials",
  "Outdoor Clothing",
];

export const gear: Gear[] = [
  {
    id: "g1",
    slug: "safari-canvas-tent",
    name: "Safari Canvas Tent",
    category: "Tents & Shelter",
    image: "/images/gear/safari-canvas-tent.jpg",
    summary: "A durable, weather-resistant canvas tent perfect for extended camping trips in the wild.",
    badge: "Premium Pick",
    overview: "Our Safari Canvas Tent is designed to withstand the harsh conditions of the African wilderness. Made from high-quality, breathable canvas, it provides excellent insulation and protection from the elements, ensuring a comfortable stay whether you're in the savannah or the forest.",
    bestFor: "Family camping, extended wilderness stays, base camps.",
    keyFeatures: [
      "Heavy-duty waterproof canvas",
      "Reinforced steel frame",
      "Large mesh windows for ventilation",
      "Built-in groundsheet"
    ],
    whatsIncluded: [
      "1x Canvas Tent",
      "Steel Pole Set",
      "Heavy-duty pegs",
      "Storage bag"
    ],
    specs: [
      "Material: 320gsm Ripstop Canvas",
      "Capacity: 4-6 Persons",
      "Weight: 35 kg",
      "Dimensions: 3m x 3m x 2.1m (Peak)"
    ],
    careNotes: "Ensure the tent is completely dry before packing to prevent mold. Clean with a soft brush and mild soap.",
    recommendedPairings: ["Forest Sleeping Bag", "Campfire Chair", "Mara Camp Lantern"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Safari Canvas Tent."
  },
  {
    id: "g2",
    slug: "mara-camp-lantern",
    name: "Mara Camp Lantern",
    category: "Lighting & Power",
    image: "/images/gear/mara-camp-lantern.jpg",
    summary: "Reliable, long-lasting LED lantern for illuminating your campsite after dark.",
    badge: "Essential",
    overview: "The Mara Camp Lantern is a rugged, rechargeable light source designed to brighten up your campsite. With adjustable brightness settings and a durable build, it's an essential piece of gear for any night in the bush.",
    bestFor: "Campsite illumination, tent lighting, emergency light.",
    keyFeatures: [
      "Adjustable brightness up to 1000 lumens",
      "Rechargeable via USB-C or Solar",
      "Water-resistant (IPX4)",
      "Built-in power bank feature"
    ],
    whatsIncluded: [
      "1x Mara Camp Lantern",
      "1x USB-C Charging Cable"
    ],
    specs: [
      "Battery: 5000mAh Lithium-ion",
      "Runtime: Up to 50 hours on low",
      "Weight: 450g",
      "Output: Warm white LED"
    ],
    careNotes: "Keep the charging port covered when in damp environments. Wipe clean with a damp cloth.",
    recommendedPairings: ["Solar Power Bank", "Safari Canvas Tent"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Mara Camp Lantern."
  },
  {
    id: "g3",
    slug: "bush-cooking-kit",
    name: "Bush Cooking Kit",
    category: "Cooking Gear",
    image: "/images/gear/bush-cooking-kit.jpg",
    summary: "Complete compact cookware set for preparing meals over a campfire or stove.",
    badge: "Popular",
    overview: "Prepare hearty meals in the great outdoors with our comprehensive Bush Cooking Kit. Designed for compactness and durability, this set nests together for easy transport and includes everything you need to cook for a small group.",
    bestFor: "Campfire cooking, portable stove use, group camping.",
    keyFeatures: [
      "Hard-anodized aluminum construction",
      "Non-stick interior",
      "Compact nesting design",
      "Heat-resistant handles"
    ],
    whatsIncluded: [
      "1x 2L Pot with lid",
      "1x 8-inch Frying pan",
      "1x Kettle",
      "4x Bowls and utensils",
      "Mesh carry bag"
    ],
    specs: [
      "Material: Hard-anodized aluminum",
      "Total Weight: 1.2 kg",
      "Packed Size: 22cm x 15cm"
    ],
    careNotes: "Avoid using metal utensils to preserve the non-stick coating. Wash with mild detergent and a non-abrasive sponge.",
    recommendedPairings: ["Water Bottle Set", "Campfire Chair"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Bush Cooking Kit."
  },
  {
    id: "g4",
    slug: "trail-hiking-backpack",
    name: "Trail Hiking Backpack",
    category: "Bags & Storage",
    image: "/images/gear/trail-hiking-backpack.jpg",
    summary: "Ergonomic 50L backpack designed for multi-day hikes and comfortable load carrying.",
    overview: "The Trail Hiking Backpack is engineered for comfort on long treks. Featuring an adjustable suspension system, breathable mesh back panel, and multiple compartments, it ensures your gear is organized and your back stays cool.",
    bestFor: "Multi-day hikes, backpacking, rugged trails.",
    keyFeatures: [
      "Adjustable torso length",
      "Ventilated mesh back panel",
      "Integrated rain cover",
      "Hydration system compatible"
    ],
    whatsIncluded: [
      "1x 50L Backpack",
      "1x Rain cover"
    ],
    specs: [
      "Capacity: 50 Liters",
      "Weight: 1.5 kg",
      "Material: 420D Nylon Ripstop",
      "Dimensions: 65cm x 35cm x 25cm"
    ],
    careNotes: "Wipe clean with a damp cloth. Do not machine wash. Ensure the pack is dry before storing.",
    recommendedPairings: ["Water Bottle Set", "First Aid Outdoor Kit", "Compass & Navigation Kit"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Trail Hiking Backpack."
  },
  {
    id: "g5",
    slug: "forest-sleeping-bag",
    name: "Forest Sleeping Bag",
    category: "Sleeping Gear",
    image: "/images/gear/forest-sleeping-bag.jpg",
    summary: "Warm and cozy mummy-style sleeping bag rated for chilly mountain nights.",
    badge: "Beginner Pick",
    overview: "Stay warm during cold Kenyan nights with the Forest Sleeping Bag. Its mummy shape retains body heat efficiently, while the synthetic insulation performs well even in damp conditions. Perfect for highlands and mountain camping.",
    bestFor: "Cold weather camping, high altitude camping.",
    keyFeatures: [
      "Mummy shape for thermal efficiency",
      "Draft collar and hood",
      "Anti-snag zipper",
      "Compression sack included"
    ],
    whatsIncluded: [
      "1x Sleeping Bag",
      "1x Compression Sack"
    ],
    specs: [
      "Temperature Rating: 0°C Comfort, -5°C Extreme",
      "Insulation: Hollow fiber synthetic",
      "Weight: 1.8 kg",
      "Length: 210cm (Fits up to 6'2\")"
    ],
    careNotes: "Store uncompressed when not in use. Machine wash on gentle cycle with specific sleeping bag detergent.",
    recommendedPairings: ["Safari Canvas Tent", "Ground Sheet & Tarp Kit"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Forest Sleeping Bag."
  },
  {
    id: "g6",
    slug: "campfire-chair",
    name: "Campfire Chair",
    category: "Camp Furniture",
    image: "/images/gear/campfire-chair.jpg",
    summary: "Sturdy, foldable camping chair with a cup holder for relaxing by the fire.",
    overview: "Relax in comfort after a long day of exploring. The Campfire Chair features a rugged steel frame, durable fabric, and an integrated cup holder. It folds down quickly for easy transport.",
    bestFor: "Campfire relaxation, tailgating, picnics.",
    keyFeatures: [
      "Heavy-duty steel frame",
      "Durable 600D Oxford fabric",
      "Integrated cup holder",
      "Quick fold design"
    ],
    whatsIncluded: [
      "1x Campfire Chair",
      "1x Carry Bag"
    ],
    specs: [
      "Weight Capacity: 120 kg",
      "Chair Weight: 3 kg",
      "Material: Steel, 600D Polyester"
    ],
    careNotes: "Wipe down the fabric with mild soap and water. Keep the metal joints clean of sand and dirt.",
    recommendedPairings: ["Mara Camp Lantern", "Bush Cooking Kit"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Campfire Chair."
  },
  {
    id: "g7",
    slug: "waterproof-duffel-bag",
    name: "Waterproof Duffel Bag",
    category: "Bags & Storage",
    image: "/images/gear/waterproof-duffel-bag.jpg",
    summary: "Rugged, water-resistant duffel to keep your gear dry on dusty or wet adventures.",
    overview: "Built to withstand the toughest conditions, this 60L duffel bag offers robust protection against water and dust. Features versatile carrying options including backpack straps and grab handles.",
    bestFor: "Overland trips, boating, wet weather camping.",
    keyFeatures: [
      "Heavy-duty PVC tarpaulin material",
      "Water-resistant zipper with storm flap",
      "Removable backpack straps",
      "Reinforced bottom"
    ],
    whatsIncluded: [
      "1x 60L Duffel Bag",
      "2x Removable shoulder straps"
    ],
    specs: [
      "Capacity: 60 Liters",
      "Material: 500D PVC",
      "Dimensions: 60cm x 35cm x 35cm",
      "Weight: 1.5 kg"
    ],
    careNotes: "Rinse with fresh water after exposure to salt or heavy mud. Do not machine wash.",
    recommendedPairings: ["First Aid Outdoor Kit", "Solar Power Bank"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Waterproof Duffel Bag."
  },
  {
    id: "g8",
    slug: "first-aid-outdoor-kit",
    name: "First Aid Outdoor Kit",
    category: "Safety & Survival",
    image: "/images/gear/first-aid-outdoor-kit.jpg",
    summary: "Comprehensive medical kit tailored for outdoor emergencies and minor injuries.",
    badge: "Essential",
    overview: "Safety first. This comprehensive first aid kit is specifically curated for outdoor injuries, ranging from blisters and cuts to more serious sprains. Packed in a durable, water-resistant case.",
    bestFor: "Hiking, remote camping, emergency preparedness.",
    keyFeatures: [
      "Water-resistant Eva case",
      "Organized compartments",
      "Includes emergency blanket and whistle",
      "Compact and lightweight"
    ],
    whatsIncluded: [
      "Bandages & Dressings",
      "Antiseptic wipes",
      "Tweezers & Scissors",
      "Medical tape",
      "Emergency blanket",
      "First aid guide"
    ],
    specs: [
      "Weight: 400g",
      "Dimensions: 20cm x 15cm x 8cm"
    ],
    careNotes: "Check expiration dates of medical supplies annually and restock as necessary.",
    recommendedPairings: ["Trail Hiking Backpack", "Compass & Navigation Kit"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the First Aid Outdoor Kit."
  },
  {
    id: "g9",
    slug: "solar-power-bank",
    name: "Solar Power Bank",
    category: "Lighting & Power",
    image: "/images/gear/solar-power-bank.jpg",
    summary: "High-capacity power bank with a solar panel for off-grid charging.",
    overview: "Keep your devices charged miles away from an outlet. This rugged 20,000mAh power bank features a built-in solar panel for emergency topping up, dual USB outputs, and a bright LED flashlight.",
    bestFor: "Long expeditions, off-grid camping, emergency power.",
    keyFeatures: [
      "20,000mAh capacity",
      "Built-in solar panel",
      "Dual USB-A outputs & USB-C input",
      "Integrated LED flashlight",
      "Shockproof and water-resistant casing"
    ],
    whatsIncluded: [
      "1x Solar Power Bank",
      "1x USB-C Charging Cable",
      "1x Carabiner"
    ],
    specs: [
      "Capacity: 20,000mAh",
      "Solar Panel: 1.5W",
      "Weight: 500g",
      "IP Rating: IP65"
    ],
    careNotes: "Solar charging is intended for emergency use; primarily charge via wall outlet before trips. Do not leave in a hot car.",
    recommendedPairings: ["Mara Camp Lantern", "Trail Hiking Backpack"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Solar Power Bank."
  },
  {
    id: "g10",
    slug: "ground-sheet-tarp-kit",
    name: "Ground Sheet & Tarp Kit",
    category: "Tents & Shelter",
    image: "/images/gear/ground-sheet-tarp-kit.jpg",
    summary: "Versatile waterproof tarp for extra shelter or ground protection.",
    overview: "A multi-purpose essential for any camp setup. Use it as a groundsheet to protect your tent floor, string it up as a rain shelter, or create a shaded area in the hot sun.",
    bestFor: "Tent underlay, overhead shelter, picnic mat.",
    keyFeatures: [
      "Heavy-duty waterproof polyethylene",
      "Reinforced grommets every meter",
      "UV resistant",
      "Includes paracord and pegs"
    ],
    whatsIncluded: [
      "1x 3x3m Tarp",
      "4x Steel pegs",
      "15m Paracord"
    ],
    specs: [
      "Dimensions: 3m x 3m",
      "Material: 200g/m2 PE",
      "Weight: 1.2 kg"
    ],
    careNotes: "Wipe clean and ensure completely dry before folding to prevent mildew.",
    recommendedPairings: ["Safari Canvas Tent", "Forest Sleeping Bag"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Ground Sheet & Tarp Kit."
  },
  {
    id: "g11",
    slug: "water-bottle-set",
    name: "Water Bottle Set",
    category: "Water & Hydration",
    image: "/images/gear/water-bottle-set.jpg",
    summary: "Pair of insulated stainless steel bottles to keep your drinks cold or hot.",
    overview: "Stay hydrated on the trail. These double-walled, vacuum-insulated bottles keep water ice-cold for 24 hours or hot drinks warm for 12 hours. Built tough for outdoor adventures.",
    bestFor: "Day hikes, daily hydration, hot or cold climates.",
    keyFeatures: [
      "Double-wall vacuum insulation",
      "18/8 food-grade stainless steel",
      "Leak-proof lid",
      "Sweat-free exterior"
    ],
    whatsIncluded: [
      "2x 1L Insulated Bottles",
      "2x Standard caps"
    ],
    specs: [
      "Capacity: 1 Liter each",
      "Material: Stainless Steel",
      "Weight: 400g (empty)"
    ],
    careNotes: "Hand wash recommended to preserve the exterior finish. Do not freeze or microwave.",
    recommendedPairings: ["Trail Hiking Backpack", "Bush Cooking Kit"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Water Bottle Set."
  },
  {
    id: "g12",
    slug: "compass-navigation-kit",
    name: "Compass & Navigation Kit",
    category: "Navigation Essentials",
    image: "/images/gear/compass-navigation-kit.jpg",
    summary: "Reliable analog navigation tools for off-grid map reading and route finding.",
    overview: "Never lose your way. This kit includes a high-quality liquid-filled baseplate compass and a protective case, essential for traditional map navigation when GPS fails.",
    bestFor: "Bushwalking, orienteering, remote expeditions.",
    keyFeatures: [
      "Liquid-filled capsule for fast needle settling",
      "Declination adjustment",
      "Magnifying lens for map reading",
      "Glow-in-the-dark markings"
    ],
    whatsIncluded: [
      "1x Baseplate Compass",
      "1x Lanyard",
      "1x Protective pouch"
    ],
    specs: [
      "Dimensions: 10cm x 6cm",
      "Weight: 50g",
      "Scales: 1:25k, 1:50k"
    ],
    careNotes: "Keep away from strong magnetic fields (like large speakers or heavy machinery) to prevent demagnetization.",
    recommendedPairings: ["Trail Hiking Backpack", "First Aid Outdoor Kit"],
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Compass & Navigation Kit."
  }
];
