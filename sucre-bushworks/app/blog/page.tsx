import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      slug: "top-10-campsites-kenya",
      title: "Top 10 Campsites in Kenya for 2026",
      excerpt: "Discover the most breathtaking spots to pitch your tent this year, from the rift valley lakes to the coastal forests.",
      image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80",
      date: "May 5, 2026",
      category: "Destinations"
    },
    {
      slug: "essential-camping-gear",
      title: "Essential Gear for Your First Wild Camp",
      excerpt: "Don't leave home without these items. Our comprehensive guide for beginners.",
      image: "https://images.unsplash.com/photo-1504280327315-567951573195?w=800&q=80",
      date: "April 28, 2026",
      category: "Gear"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Bushworks Journal" 
        description="Stories, tips, and guides for the Kenyan outdoors."
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="group bg-white rounded-3xl overflow-hidden border border-soft-sage shadow-sm hover:shadow-card-hover transition-all">
              <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="text-moss-green font-medium">{post.category}</span>
                  <span className="text-outline">&bull;</span>
                  <span className="text-outline">{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-serif text-forest-black mb-3 group-hover:text-jungle-green transition-colors">{post.title}</h3>
                </Link>
                <p className="text-muted-text mb-6">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-moss-green font-medium hover:text-jungle-green">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
