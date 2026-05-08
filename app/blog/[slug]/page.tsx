import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-surface-light min-h-screen pb-20">
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black/90 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-8">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold text-surface-light/80 uppercase tracking-wider mb-4 block">{post.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-surface-light mb-6 drop-shadow-lg">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-surface-light/70 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-3xl">
        <div className="prose prose-lg prose-green mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-soft-sage">
          <p className="text-xl leading-relaxed text-text-dark font-medium mb-8">
            {post.excerpt}
          </p>
          <div className="text-muted-text leading-relaxed space-y-6">
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
