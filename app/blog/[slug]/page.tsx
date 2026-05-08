import { SafeImage } from "@/components/ui/SafeImage";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-surface-light min-h-screen pb-24">
      <div className="relative w-full h-[60vh] min-h-[500px]">
        <SafeImage src={post.image} alt={post.title} fallbackName={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-8 lg:p-16">
          <div className="container mx-auto max-w-4xl text-center">
            <Link href="/blog" className="inline-flex items-center text-surface-light/80 hover:text-white text-sm font-medium mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Guides
            </Link>
            <span className="text-sm font-bold text-campfire-gold uppercase tracking-widest mb-6 block">{post.category}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-surface-light mb-8 drop-shadow-lg leading-tight">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-surface-light/90 text-sm font-medium tracking-wide">
              <span>{post.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-campfire-gold" />
              <span>{post.author}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-campfire-gold" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-3xl">
        <div className="prose prose-lg mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-soft-sage">
          <p className="text-2xl leading-relaxed text-jungle-green font-serif border-l-4 border-campfire-gold pl-6 py-2 mb-10">
            {post.excerpt}
          </p>
          <div className="text-text-dark leading-loose space-y-6 prose-headings:font-serif prose-headings:text-forest-black prose-a:text-jungle-green prose-strong:text-forest-black">
            {/* Extremely simple markdown-like rendering for the mock data */}
            {post.content.split('\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('## ')) {
                return <h2 key={idx} className="text-3xl mt-12 mb-6">{trimmed.replace('## ', '')}</h2>;
              }
              if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ')) {
                return <p key={idx} className="ml-4 flex gap-2"><span className="font-bold text-jungle-green">{trimmed.split(' ')[0]}</span> <span>{trimmed.substring(trimmed.indexOf(' ') + 1)}</span></p>;
              }
              if (trimmed.startsWith('- ')) {
                return <li key={idx} className="ml-8 list-disc">{trimmed.replace('- ', '')}</li>;
              }
              if (trimmed === '') return null;
              
              // Basic bold replacement
              let content = trimmed;
              if (content.includes('**')) {
                const parts = content.split('**');
                return (
                  <p key={idx}>
                    {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
                  </p>
                );
              }
              
              return <p key={idx}>{trimmed}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
