import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { blogPosts } from "@/lib/data/blog";

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
      <PageHero 
        title="Outdoor Guides & Tips" 
        description="Read our latest articles to prepare for your next trip into the Kenyan wild."
        backgroundImage="/images/hero/fun-in-the-wild.jpg"
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover border border-soft-sage transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <SafeImage src={post.image} alt={post.title} fallbackName={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-semibold text-outline uppercase tracking-wider mb-3">{post.category}</span>
                <h3 className="text-2xl font-serif text-text-dark mb-4 group-hover:text-jungle-green transition-colors leading-tight">{post.title}</h3>
                <p className="text-outline text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-outline font-medium mt-auto pt-4 border-t border-soft-sage">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
