export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  category: string;
  description: string;
  features: string[];
  specs: { [key: string]: string };
  badge?: string;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "safari-canvas-tent-pro",
    name: "Safari Canvas Tent Pro",
    image: "https://images.unsplash.com/photo-1504280327315-567951573195?w=800&q=80",
    category: "Tents & Shelter",
    description: "Premium heavy-duty canvas tent built for the Kenyan outdoors. Weather resistant and spacious.",
    features: ["Heavy-duty ripstop canvas", "Built-in groundsheet", "Mosquito net windows", "Steel frame"],
    specs: { "Capacity": "4 Person", "Weight": "25kg", "Material": "Canvas" },
    badge: "Essential"
  },
  {
    id: "p2",
    slug: "mara-thermal-sleeping-bag",
    name: "Mara Thermal Sleeping Bag",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&q=80",
    category: "Sleeping Gear",
    description: "Ultra-warm sleeping bag rated for chilly nights near Mt. Kenya.",
    features: ["Mummy style", "Draft collar", "Compression sack included"],
    specs: { "Temp Rating": "-5°C", "Weight": "1.8kg", "Fill": "Synthetic" },
    badge: "Popular"
  },
  {
    id: "p3",
    slug: "camp-master-gas-stove",
    name: "Camp Master Gas Stove",
    image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=800&q=80",
    category: "Cooking Gear",
    description: "Portable twin-burner gas stove for ultimate outdoor cooking.",
    features: ["Dual burners", "Wind shields", "Easy ignition"],
    specs: { "Fuel": "LPG Gas", "Weight": "4.5kg", "Material": "Steel" }
  },
  {
    id: "p4",
    slug: "bushworks-led-lantern",
    name: "Bushworks LED Lantern",
    image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=800&q=80",
    category: "Lighting & Power",
    description: "Rechargeable solar LED lantern with 48 hours of battery life.",
    features: ["Solar charging", "USB output for phones", "Dimmable"],
    specs: { "Brightness": "400 Lumens", "Battery": "5000mAh", "Runtime": "Up to 48 hrs" },
    badge: "Beginner Pick"
  },
  {
    id: "p5",
    slug: "trekking-backpack-65l",
    name: "Rift Explorer Backpack 65L",
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=800&q=80",
    category: "Hiking Bags & Storage",
    description: "Ergonomic 65L backpack designed for multi-day hikes in the Aberdares.",
    features: ["Adjustable back panel", "Rain cover included", "Hydration compatible"],
    specs: { "Volume": "65L", "Weight": "2.1kg", "Material": "Nylon" }
  },
  {
    id: "p6",
    slug: "foldable-camp-chair",
    name: "Savannah Foldable Camp Chair",
    image: "https://images.unsplash.com/photo-1596162954151-cdcb92b0c36b?w=800&q=80",
    category: "Camp Furniture",
    description: "Comfortable and durable camp chair with a built-in cup holder.",
    features: ["Sturdy steel frame", "Cup holder", "Carry bag included"],
    specs: { "Capacity": "120kg", "Weight": "3kg", "Material": "Polyester" }
  },
  {
    id: "p7",
    slug: "hydration-bladder-3l",
    name: "Oasis Hydration Bladder 3L",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
    category: "Water & Hydration",
    description: "BPA-free 3L hydration bladder to keep you refreshed on the trail.",
    features: ["Bite valve", "Wide mouth opening", "Leak-proof"],
    specs: { "Volume": "3L", "Material": "TPU (BPA-free)" }
  },
  {
    id: "p8",
    slug: "survival-first-aid-kit",
    name: "Wilderness First Aid Kit",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
    category: "Safety & Survival",
    description: "Comprehensive first aid kit designed for off-grid emergencies.",
    features: ["Bandages & gauze", "Antiseptic wipes", "Emergency blanket", "Tweezers"],
    specs: { "Pieces": "120", "Weight": "500g", "Case": "Water-resistant" },
    badge: "Essential"
  }
];
