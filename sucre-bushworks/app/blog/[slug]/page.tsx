import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Blog Article" 
        description="Bushworks Journal"
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-moss-green hover:text-jungle-green font-medium mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
        </Link>
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-soft-sage shadow-sm prose prose-lg prose-green">
          <h1 className="font-serif text-forest-black">Article content for {resolvedParams.slug}</h1>
          <p>This is a placeholder for the full article content. In a production environment, this would be fetched from a CMS or markdown files.</p>
        </div>
      </div>
    </div>
  );
}
