export interface Campsite {
  id: string;
  slug: string;
  name: string;
  region: string;
  environmentType: string;
  tags: string[];
  image: string;
  summary: string;
  overview: string;
  whatMakesItSpecial: string;
  activitiesNearby: string[];
  bestFor: string;
  recommendedGear: string[];
  safetyNotes: string;
  travelNotes: string;
  whatsappMessage: string;
}

export const CAMPSITE_FILTERS = [
  "Near Nairobi",
  "Lakeside",
  "Mountain",
  "Forest",
  "Savannah",
  "Wildlife Area",
  "Beginner Friendly",
  "Family Friendly",
  "Guide Available",
  "Campfire Friendly",
  "Scenic View"
];

export const campsites: Campsite[] = [
  {
    id: "c1",
    slug: "nairobi-national-park-camp",
    name: "Nairobi National Park Camp",
    region: "Nairobi",
    environmentType: "Savannah",
    tags: ["Near Nairobi", "Wildlife Area", "Beginner Friendly", "Family Friendly"],
    image: "/images/campsites/nairobi-national-park-camp.jpg",
    summary: "Camp right on the edge of the city with a backdrop of roaming wildlife and the Nairobi skyline.",
    overview: "Experience the unique thrill of camping within the city's borders. Wake up to the sounds of lions and hyenas, and enjoy game drives without leaving the capital. This campsite offers basic amenities making it perfect for first-timers and families wanting a quick escape.",
    whatMakesItSpecial: "It's the only wildlife capital in the world, offering a bizarre but beautiful contrast of grazing rhinos against a backdrop of city skyscrapers.",
    activitiesNearby: [
      "Game viewing drives",
      "Nairobi Safari Walk",
      "Animal Orphanage visit",
      "Bird watching"
    ],
    bestFor: "Quick weekend getaways, beginners, families with young children.",
    recommendedGear: ["Safari Canvas Tent", "Mara Camp Lantern", "Campfire Chair"],
    safetyNotes: "Do not wander away from the designated camping area at night due to wild animals.",
    travelNotes: "Easily accessible by 2WD vehicles from the city center.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Nairobi National Park Camp."
  },
  {
    id: "c2",
    slug: "lake-naivasha-lakeside-camp",
    name: "Lake Naivasha Lakeside Camp",
    region: "Rift Valley",
    environmentType: "Lakeside",
    tags: ["Lakeside", "Family Friendly", "Scenic View", "Campfire Friendly"],
    image: "/images/campsites/lake-naivasha-lakeside-camp.jpg",
    summary: "Relaxing campsite nestled beneath acacia trees right on the shores of Lake Naivasha.",
    overview: "Set up your tent under towering yellow fever trees with a view of the tranquil lake. Hippos can often be heard grazing at night, and the birdlife is spectacular. A perfect spot to unwind and enjoy a classic campfire evening.",
    whatMakesItSpecial: "Direct lake access and the magical experience of hearing hippos grazing nearby under the moonlight.",
    activitiesNearby: [
      "Boat rides to Crescent Island",
      "Bird watching",
      "Cycling in Hell's Gate nearby",
      "Nature walks"
    ],
    bestFor: "Relaxing weekends, couples, bird enthusiasts.",
    recommendedGear: ["Bush Cooking Kit", "Campfire Chair", "Ground Sheet & Tarp Kit"],
    safetyNotes: "Hippos graze near the camp at night. Do not approach the lake shore after dark.",
    travelNotes: "About 2 hours drive from Nairobi. Accessible by regular cars.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Lake Naivasha Lakeside Camp."
  },
  {
    id: "c3",
    slug: "hells-gate-adventure-camp",
    name: "Hell’s Gate Adventure Camp",
    region: "Rift Valley",
    environmentType: "Savannah",
    tags: ["Savannah", "Wildlife Area", "Guide Available", "Scenic View"],
    image: "/images/campsites/hells-gate-adventure-camp.jpg",
    summary: "Camp amidst dramatic cliffs and geothermal activity in this iconic national park.",
    overview: "Hell's Gate is famous for its dramatic scenery, towering cliffs, and deep gorges. Unlike most parks, you can walk or cycle here among zebra, giraffes, and gazelles. The campsite provides a rugged base for exploring this geologically active landscape.",
    whatMakesItSpecial: "One of the few national parks in Kenya where you can walk or cycle freely amongst wild animals.",
    activitiesNearby: [
      "Rock climbing",
      "Cycling among wildlife",
      "Gorge hiking",
      "Geothermal spa visit"
    ],
    bestFor: "Active adventurers, cyclists, hikers.",
    recommendedGear: ["Trail Hiking Backpack", "Water Bottle Set", "First Aid Outdoor Kit"],
    safetyNotes: "Beware of sudden flash floods if hiking in the gorges during the rainy season.",
    travelNotes: "Located in Naivasha. You can rent bikes at the park gate.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Hell’s Gate Adventure Camp."
  },
  {
    id: "c4",
    slug: "mount-kenya-forest-camp",
    name: "Mount Kenya Forest Camp",
    region: "Central Kenya",
    environmentType: "Mountain",
    tags: ["Mountain", "Forest", "Guide Available", "Scenic View"],
    image: "/images/campsites/mount-kenya-forest-camp.jpg",
    summary: "High-altitude camping in the pristine alpine forests on the slopes of Mount Kenya.",
    overview: "For those seeking cooler climates and rugged terrain, this camp sits on the lower slopes of Africa's second-highest peak. Surrounded by dense forest and alpine vegetation, it's a quiet retreat and a starting point for serious ascents.",
    whatMakesItSpecial: "Crisp mountain air, unique alpine flora, and the chance to see high-altitude wildlife like colobus monkeys.",
    activitiesNearby: [
      "Mountain trekking",
      "Trout fishing",
      "Forest walks",
      "Bird watching"
    ],
    bestFor: "Experienced hikers, acclimatization before summiting, cold-weather camping.",
    recommendedGear: ["Forest Sleeping Bag", "Trail Hiking Backpack", "Bush Cooking Kit"],
    safetyNotes: "Nights can be extremely cold. Proper cold-weather gear is mandatory.",
    travelNotes: "4WD recommended for the access roads, especially during wet seasons.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Mount Kenya Forest Camp."
  },
  {
    id: "c5",
    slug: "aberdare-forest-escape",
    name: "Aberdare Forest Escape",
    region: "Central Kenya",
    environmentType: "Forest",
    tags: ["Forest", "Wildlife Area", "Scenic View"],
    image: "/images/campsites/aberdare-forest-escape.jpg",
    summary: "Deep in the misty Aberdare ranges, surrounded by waterfalls and dense moorland.",
    overview: "The Aberdares offer a moody, misty, and intensely green camping experience. The high altitude moorlands and dense forests are home to elephants, leopards, and spectacular waterfalls. It's wild, remote, and breathtaking.",
    whatMakesItSpecial: "The dramatic landscape of steep forested ravines and open moorland, offering a very different safari experience.",
    activitiesNearby: [
      "Waterfall hikes",
      "Trout fishing",
      "Game drives",
      "Photography"
    ],
    bestFor: "Nature lovers, photographers, those seeking solitude.",
    recommendedGear: ["Waterproof Duffel Bag", "Safari Canvas Tent", "Ground Sheet & Tarp Kit"],
    safetyNotes: "Weather changes rapidly; heavy rain is common. Wild animals roam freely; stay near camp.",
    travelNotes: "Strictly 4WD terrain. Roads can be very muddy.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Aberdare Forest Escape."
  },
  {
    id: "c6",
    slug: "tsavo-east-wild-camp",
    name: "Tsavo East Wild Camp",
    region: "Coastal Hinterland",
    environmentType: "Savannah",
    tags: ["Savannah", "Wildlife Area", "Guide Available", "Campfire Friendly"],
    image: "/images/campsites/tsavo-east-wild-camp.jpg",
    summary: "Experience the vast, dusty red plains of Tsavo East under a blanket of stars.",
    overview: "Tsavo East is raw, vast, and untamed. Famous for its red-dust elephants and man-eating lions of history, camping here is a true wilderness experience. The skies at night are unpolluted and incredible for stargazing.",
    whatMakesItSpecial: "The sheer scale of the wilderness and the iconic red-dusted elephants that roam the plains.",
    activitiesNearby: [
      "Extensive game drives",
      "Visiting the Galana River",
      "Stargazing",
      "Lugard Falls visit"
    ],
    bestFor: "Authentic safari purists, stargazers, wildlife photographers.",
    recommendedGear: ["Solar Power Bank", "Mara Camp Lantern", "Campfire Chair"],
    safetyNotes: "Extremely hot during the day. Stay hydrated and use sun protection.",
    travelNotes: "Long drive from Nairobi. 4WD recommended for park exploration.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Tsavo East Wild Camp."
  },
  {
    id: "c7",
    slug: "tsavo-west-lava-camp",
    name: "Tsavo West Lava Camp",
    region: "Coastal Hinterland",
    environmentType: "Savannah",
    tags: ["Savannah", "Wildlife Area", "Scenic View"],
    image: "/images/campsites/tsavo-west-lava-camp.jpg",
    summary: "Camp near the ancient Shetani lava flows with views of the Chyulu Hills.",
    overview: "Tsavo West is a beautifully rugged landscape of volcanic cones, rocky outcrops, and lava flows. This campsite offers a striking contrast of black lava rock and green scrub, providing a dramatic backdrop for your tent.",
    whatMakesItSpecial: "The rugged volcanic landscape and nearby Mzima Springs where you can see hippos underwater.",
    activitiesNearby: [
      "Exploring Shetani Lava Flows",
      "Mzima Springs visit",
      "Rhino sanctuary game drives",
      "Bird watching"
    ],
    bestFor: "Geology enthusiasts, wildlife lovers, adventurous campers.",
    recommendedGear: ["Safari Canvas Tent", "Water Bottle Set", "Compass & Navigation Kit"],
    safetyNotes: "Lava rocks can be very sharp; wear sturdy boots.",
    travelNotes: "Access via Mtito Andei gate. 4WD recommended.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Tsavo West Lava Camp."
  },
  {
    id: "c8",
    slug: "amboseli-view-camp",
    name: "Amboseli View Camp",
    region: "Southern Kenya",
    environmentType: "Savannah",
    tags: ["Savannah", "Wildlife Area", "Scenic View", "Family Friendly"],
    image: "/images/campsites/amboseli-view-camp.jpg",
    summary: "Wake up to the iconic, unobstructed view of Mount Kilimanjaro towering over the plains.",
    overview: "Amboseli is renowned for its massive herds of elephants set against the backdrop of Mount Kilimanjaro. This campsite offers prime viewing of the mountain (especially at dawn) and the rich wildlife of the surrounding swamps.",
    whatMakesItSpecial: "The classic African postcard view: elephants grazing with the snow-capped peak of Kilimanjaro behind them.",
    activitiesNearby: [
      "Game drives",
      "Photography at Observation Hill",
      "Cultural Maasai village visits"
    ],
    bestFor: "Photographers, families, first-time safari goers.",
    recommendedGear: ["Solar Power Bank", "Campfire Chair", "Mara Camp Lantern"],
    safetyNotes: "Very dusty environment in the dry season. Protect camera gear.",
    travelNotes: "Accessible by 2WD to the main gates, but 4WD best for park roads.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Amboseli View Camp."
  },
  {
    id: "c9",
    slug: "maasai-mara-bush-camp",
    name: "Maasai Mara Bush Camp",
    region: "Rift Valley",
    environmentType: "Savannah",
    tags: ["Savannah", "Wildlife Area", "Guide Available", "Campfire Friendly"],
    image: "/images/campsites/maasai-mara-bush-camp.jpg",
    summary: "Deep in the Mara ecosystem, surrounded by the greatest wildlife spectacle on earth.",
    overview: "Camping in the Mara is an intense, immersive experience. Hear lions roaring in the distance and wake up to endless rolling plains teeming with wildlife. This is unfenced, raw bush camping at its finest.",
    whatMakesItSpecial: "Proximity to the Great Migration (seasonal) and the highest concentration of big cats in Kenya.",
    activitiesNearby: [
      "Full-day game drives",
      "Hot air balloon safaris (arranged separately)",
      "Sundowners on the plains"
    ],
    bestFor: "Wildlife enthusiasts, experienced campers, photographers.",
    recommendedGear: ["Safari Canvas Tent", "First Aid Outdoor Kit", "Waterproof Duffel Bag"],
    safetyNotes: "Unfenced camp in prime predator territory. Strictly follow guide instructions and never leave your tent at night.",
    travelNotes: "4WD is essential. Can be reached via flight to local airstrip or a long drive from Nairobi.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Maasai Mara Bush Camp."
  },
  {
    id: "c10",
    slug: "ngong-hills-weekend-camp",
    name: "Ngong Hills Weekend Camp",
    region: "Nairobi Environs",
    environmentType: "Mountain",
    tags: ["Near Nairobi", "Mountain", "Beginner Friendly", "Scenic View"],
    image: "/images/campsites/ngong-hills-weekend-camp.jpg",
    summary: "Breezy hill-top camping with panoramic views of the Great Rift Valley.",
    overview: "Just a short drive from Nairobi, the Ngong Hills offer a quick escape to fresh air and rolling green peaks. The campsite is situated to provide stunning sunset views over the Rift Valley.",
    whatMakesItSpecial: "Incredible panoramic views and the famous wind-swept ridges of the Ngong Hills.",
    activitiesNearby: [
      "Hiking the 7 hills",
      "Wind farm tours",
      "Picnicking",
      "Sunset viewing"
    ],
    bestFor: "Quick overnight trips, beginner hikers, groups of friends.",
    recommendedGear: ["Forest Sleeping Bag", "Trail Hiking Backpack", "Bush Cooking Kit"],
    safetyNotes: "Can be very windy and chilly at night. Secure tents properly.",
    travelNotes: "Very close to Nairobi. Accessible by regular cars up to the entry gate.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Ngong Hills Weekend Camp."
  },
  {
    id: "c11",
    slug: "kajiado-bush-escape",
    name: "Kajiado Bush Escape",
    region: "Southern Kenya",
    environmentType: "Savannah",
    tags: ["Near Nairobi", "Savannah", "Campfire Friendly"],
    image: "/images/campsites/kajiado-bush-escape.jpg",
    summary: "A quiet, secluded bush camp nestled in the acacia scrublands of Kajiado.",
    overview: "Escape the city crowds and enjoy the peace of the Kajiado plains. This private campsite offers a true 'bush' feel without having to drive deep into a national park. Excellent for big campfires and starry nights.",
    whatMakesItSpecial: "Total privacy and the classic, dry acacia bushland aesthetic perfect for relaxed camping.",
    activitiesNearby: [
      "Bush walks",
      "Bird watching",
      "Relaxing by the campfire"
    ],
    bestFor: "Groups of friends, peaceful retreats, overland vehicle camping.",
    recommendedGear: ["Campfire Chair", "Mara Camp Lantern", "Ground Sheet & Tarp Kit"],
    safetyNotes: "Carry all your water and supplies as local amenities are sparse.",
    travelNotes: "About 1.5 hours from Nairobi. 4WD recommended for the final stretch.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Kajiado Bush Escape."
  },
  {
    id: "c12",
    slug: "nanyuki-mountain-camp",
    name: "Nanyuki Mountain Camp",
    region: "Central Kenya",
    environmentType: "Forest",
    tags: ["Mountain", "Forest", "Family Friendly", "Scenic View"],
    image: "/images/campsites/nanyuki-mountain-camp.jpg",
    summary: "Base camp nestled in the forests near Nanyuki, offering crisp air and mountain views.",
    overview: "Located on the equator but with a cool climate due to altitude, this camp is surrounded by indigenous forest. It serves as a great base for exploring the Laikipia region or preparing for a Mount Kenya trek.",
    whatMakesItSpecial: "A perfect blend of forest tranquility and accessibility to the vibrant outdoor hub of Nanyuki town.",
    activitiesNearby: [
      "Forest canopy walks",
      "Visiting animal orphanages nearby",
      "Mountain biking",
      "Day trips to Laikipia conservancies"
    ],
    bestFor: "Families, mountain bikers, overland travelers.",
    recommendedGear: ["Forest Sleeping Bag", "Bush Cooking Kit", "Water Bottle Set"],
    safetyNotes: "Nights are chilly. Be bear/wildlife aware with food storage.",
    travelNotes: "Excellent paved roads to Nanyuki, short dirt track to camp.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Nanyuki Mountain Camp."
  },
  {
    id: "c13",
    slug: "samburu-dryland-camp",
    name: "Samburu Dryland Camp",
    region: "Northern Kenya",
    environmentType: "Savannah",
    tags: ["Savannah", "Wildlife Area", "Guide Available"],
    image: "/images/campsites/samburu-dryland-camp.jpg",
    summary: "Camp along the Ewaso Ng'iro river in the rugged, semi-arid lands of the north.",
    overview: "Samburu offers a distinctly different landscape from southern Kenya. The arid, dramatic scenery is bisected by a life-giving river. Camp under doum palms and watch elephants come to drink.",
    whatMakesItSpecial: "Unique northern wildlife species (Grevy's zebra, reticulated giraffe) and the stark, beautiful desert landscape.",
    activitiesNearby: [
      "Game drives",
      "Cultural visits to Samburu villages",
      "River walks (with guide)"
    ],
    bestFor: "Experienced safari goers seeking something different from the Mara.",
    recommendedGear: ["Safari Canvas Tent", "Waterproof Duffel Bag", "Solar Power Bank"],
    safetyNotes: "Extreme heat during the day. Beware of crocodiles near the river edge.",
    travelNotes: "Long drive north from Nairobi. 4WD is necessary for the park.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Samburu Dryland Camp."
  },
  {
    id: "c14",
    slug: "shaba-wilderness-camp",
    name: "Shaba Wilderness Camp",
    region: "Northern Kenya",
    environmentType: "Savannah",
    tags: ["Savannah", "Wildlife Area", "Scenic View"],
    image: "/images/campsites/shaba-wilderness-camp.jpg",
    summary: "A more remote and volcanic alternative to Samburu, famous for its scenic beauty.",
    overview: "Neighboring Samburu, Shaba is quieter and features dramatic volcanic landscapes, springs, and rocky hills. It was made famous by Joy Adamson and offers a truly secluded wilderness camping experience.",
    whatMakesItSpecial: "Volcanic springs that attract wildlife in the arid landscape, and far fewer tourists than other parks.",
    activitiesNearby: [
      "Game viewing",
      "Exploring volcanic springs",
      "Bird watching"
    ],
    bestFor: "Those seeking solitude, photographers, adventure campers.",
    recommendedGear: ["Compass & Navigation Kit", "First Aid Outdoor Kit", "Trail Hiking Backpack"],
    safetyNotes: "Very remote area; travel with multiple vehicles if possible and carry extensive emergency supplies.",
    travelNotes: "4WD strictly required. Rough terrain.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Shaba Wilderness Camp."
  },
  {
    id: "c15",
    slug: "lake-elementaita-stargazing-camp",
    name: "Lake Elementaita Stargazing Camp",
    region: "Rift Valley",
    environmentType: "Lakeside",
    tags: ["Lakeside", "Scenic View", "Campfire Friendly"],
    image: "/images/campsites/lake-elementaita-stargazing-camp.jpg",
    summary: "Quiet shoreside camping on a soda lake famous for flamingoes and pelicans.",
    overview: "Smaller and less crowded than Naivasha or Nakuru, Lake Elementaita offers serene camping. The alkaline shores reflect the sky beautifully, making it an incredible spot for evening campfires and stargazing.",
    whatMakesItSpecial: "Peaceful atmosphere, large flocks of flamingos, and excellent clear skies for astronomy.",
    activitiesNearby: [
      "Bird watching",
      "Nature walks along the shore",
      "Hot springs visit nearby",
      "Stargazing"
    ],
    bestFor: "Couples, bird watchers, relaxed weekends.",
    recommendedGear: ["Campfire Chair", "Mara Camp Lantern", "Bush Cooking Kit"],
    safetyNotes: "The lake water is alkaline and not suitable for drinking or swimming.",
    travelNotes: "About 2.5 hours from Nairobi along the Nairobi-Nakuru highway.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Lake Elementaita Stargazing Camp."
  },
  {
    id: "c16",
    slug: "lake-nakuru-region-camp",
    name: "Lake Nakuru Region Camp",
    region: "Rift Valley",
    environmentType: "Forest",
    tags: ["Lakeside", "Forest", "Wildlife Area", "Family Friendly"],
    image: "/images/campsites/lake-nakuru-region-camp.jpg",
    summary: "Camp in the beautiful yellow fever tree forests bordering the famous rhino sanctuary.",
    overview: "Set in the wooded areas of Lake Nakuru National Park, this camp offers excellent proximity to one of Kenya's premium rhino sanctuaries. The contrast of the lake and the forested escarpments makes for beautiful camping.",
    whatMakesItSpecial: "High chance of seeing both black and white rhinos, plus tree-climbing lions.",
    activitiesNearby: [
      "Game drives",
      "Baboon cliff viewpoint",
      "Makalia waterfall visit"
    ],
    bestFor: "Families, wildlife photographers, rhino enthusiasts.",
    recommendedGear: ["Safari Canvas Tent", "Water Bottle Set", "Solar Power Bank"],
    safetyNotes: "Beware of baboons in the camp area; secure all food inside vehicles.",
    travelNotes: "Excellent access from Nakuru town. 2WD possible but 4WD better for park exploration.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Lake Nakuru Region Camp."
  },
  {
    id: "c17",
    slug: "ol-pejeta-conservancy-area-camp",
    name: "Ol Pejeta Conservancy Area Camp",
    region: "Laikipia",
    environmentType: "Savannah",
    tags: ["Savannah", "Wildlife Area", "Guide Available", "Family Friendly"],
    image: "/images/campsites/ol-pejeta-conservancy-area-camp.jpg",
    summary: "Camp near the shadows of Mount Kenya in one of East Africa's most successful conservancies.",
    overview: "Ol Pejeta is famous for its pioneering conservation work. Camping here gives you access to a high density of wildlife, including the Big Five and the largest black rhino sanctuary in East Africa.",
    whatMakesItSpecial: "Home to the last remaining northern white rhinos and a chimpanzee sanctuary.",
    activitiesNearby: [
      "Visiting the endangered species enclosure",
      "Chimpanzee sanctuary visit",
      "Lion tracking (special activity)",
      "Night game drives"
    ],
    bestFor: "Conservation enthusiasts, families, premium safari experiences.",
    recommendedGear: ["First Aid Outdoor Kit", "Trail Hiking Backpack", "Mara Camp Lantern"],
    safetyNotes: "Follow strict conservancy rules regarding driving off-road and interacting with wildlife.",
    travelNotes: "Located near Nanyuki. Well-maintained roads within the conservancy.",
    whatsappMessage: "Hello Sucre Bushworks, I would like to ask about the Ol Pejeta Conservancy Area Camp."
  }
];
