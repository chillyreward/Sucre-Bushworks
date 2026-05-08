export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "what-to-pack-for-your-first-camping-trip",
    title: "What to Pack for Your First Camping Trip",
    excerpt: "A beginner-friendly guide to essential gear for a comfortable first night in the wild.",
    content: "Camping doesn't have to be intimidating. With the right gear—a solid canvas tent, a warm sleeping bag, and proper hydration—you can enjoy the Kenyan outdoors comfortably. In this guide, we break down the absolute essentials you need to pack for your first weekend escape.",
    image: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?w=800&q=80",
    date: "May 10, 2026",
    author: "Sucre Bushworks Team",
    category: "Guides"
  },
  {
    id: "b2",
    slug: "best-campsites-near-nairobi",
    title: "Best Campsites Near Nairobi",
    excerpt: "Discover accessible and scenic weekend escapes just a short drive from the city.",
    content: "You don't need to drive for days to escape the hustle and bustle of Nairobi. From the edges of Nairobi National Park to the quiet slopes of the Ngong Hills and the stunning viewpoints in the Rift Valley, here are our top picks for a quick weekend camping getaway.",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80",
    date: "April 28, 2026",
    author: "Sucre Bushworks Team",
    category: "Destinations"
  },
  {
    id: "b3",
    slug: "mountain-vs-lakeside-camping-in-kenya",
    title: "Mountain vs Lakeside Camping in Kenya",
    excerpt: "How to choose the right environment and pack appropriately for the varying climates.",
    content: "Kenya offers incredibly diverse landscapes. But camping by Lake Naivasha is a very different experience from pitching a tent at the base of Mt. Kenya. We explore the pros, cons, and essential gear differences between mountain and lakeside camping.",
    image: "https://images.unsplash.com/photo-1504280327315-567951573195?w=800&q=80",
    date: "April 15, 2026",
    author: "Sucre Bushworks Team",
    category: "Tips & Advice"
  }
];
