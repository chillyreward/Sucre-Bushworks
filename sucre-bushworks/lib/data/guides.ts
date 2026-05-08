export interface Guide {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  experienceYears: number;
  image: string;
  bio: string;
}

export const guides: Guide[] = [
  {
    id: "g1",
    slug: "peter-ole-kuso",
    name: "Peter Ole Kuso",
    specialty: "Savannah Safari & Tracking",
    experienceYears: 12,
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80",
    bio: "Peter was born and raised in the Mara. He specializes in animal tracking, walking safaris, and sharing the rich Maasai culture.",
  },
  {
    id: "g2",
    slug: "sarah-wanjiku",
    name: "Sarah Wanjiku",
    specialty: "High Altitude Trekking",
    experienceYears: 8,
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=800&q=80",
    bio: "An expert mountaineer who has summited Mt. Kenya over 50 times. Sarah ensures safety and pacing for all climbers.",
  },
  {
    id: "g3",
    slug: "david-mutua",
    name: "David Mutua",
    specialty: "Bird Watching & Flora",
    experienceYears: 15,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    bio: "David is a passionate ornithologist. His trips around Naivasha and Baringo are famous for spotting rare bird species.",
  }
];
