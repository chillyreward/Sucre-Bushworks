import { SafeImage } from "@/components/ui/SafeImage";
import { notFound } from "next/navigation";
import { MapPin, ShieldCheck, TreePine, Check, AlertTriangle, Compass } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { campsites } from "@/lib/data/campsites";
import { Badge } from "@/components/ui/Badge";
import { AddCampsiteToBasketButton } from "@/components/ui/AddCampsiteToBasketButton";
import Link from "next/link";

export default async function CampsiteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const campsite = campsites.find((c) => c.slug === resolvedParams.slug);

  if (!campsite) {
    notFound();
  }

  // Find some related campsites in the same region
  const relatedCampsites = campsites
    .filter((c) => c.region === campsite.region && c.id !== campsite.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero */}
      <div className="relative w-full h-[60vh] min-h-[500px]">
        <SafeImage src={campsite.image} alt={campsite.name} fallbackName={campsite.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-8 lg:p-16">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-surface-light/70 font-medium">
              <Link href="/" className="hover:text-surface-light transition-colors">Home</Link> &rsaquo;{" "}
              <Link href="/campsites" className="hover:text-surface-light transition-colors">Campsites</Link> &rsaquo;{" "}
              <span className="text-surface-light">{campsite.name}</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {campsite.tags.map((tag, idx) => (
                <Badge key={idx} className="bg-surface-light/20 text-surface-light backdrop-blur-md border-none px-4 py-1.5">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-surface-light mb-6 drop-shadow-md">{campsite.name}</h1>
            <div className="flex items-center text-surface-light/90 text-xl font-medium drop-shadow-md">
              <MapPin className="w-6 h-6 mr-3 text-campfire-gold" /> {campsite.region}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        <div className="lg:col-span-2 space-y-16">
          {/* Summary highlight */}
          <p className="text-2xl text-jungle-green font-serif leading-relaxed border-l-4 border-campfire-gold pl-6 py-2">
            {campsite.summary}
          </p>

          <section>
            <h2 className="text-3xl font-serif text-forest-black mb-6">Overview</h2>
            <div className="prose prose-lg text-text-dark max-w-none">
              <p>{campsite.overview}</p>
              <h4 className="text-xl font-serif mt-8 mb-4">What Makes It Special</h4>
              <p>{campsite.whatMakesItSpecial}</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-forest-black mb-8">Environment & Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-text-dark bg-surface-light p-6 rounded-2xl border border-soft-sage">
                <TreePine className="w-8 h-8 text-moss-green mr-4 shrink-0" />
                <div>
                  <span className="block text-sm text-outline mb-1">Environment</span>
                  <span className="font-semibold text-lg">{campsite.environmentType}</span>
                </div>
              </div>
              <div className="flex items-center text-text-dark bg-surface-light p-6 rounded-2xl border border-soft-sage">
                <ShieldCheck className="w-8 h-8 text-moss-green mr-4 shrink-0" />
                <div>
                  <span className="block text-sm text-outline mb-1">Guide Status</span>
                  <span className="font-semibold text-lg">{campsite.tags.includes("Guide Available") ? "Expert Guide Available" : "Self-Guided"}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-soft-sage p-8 rounded-3xl">
              <h3 className="font-semibold text-xl text-forest-black mb-6 flex items-center">
                <Compass className="w-6 h-6 text-jungle-green mr-3" />
                Activities Nearby
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {campsite.activitiesNearby.map((activity, idx) => (
                  <li key={idx} className="flex items-center text-text-dark">
                    <span className="w-2 h-2 rounded-full bg-campfire-gold mr-4 shrink-0"/> 
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-serif text-forest-black mb-6 border-b border-soft-sage pb-4">Best For</h2>
              <p className="text-text-dark leading-relaxed">{campsite.bestFor}</p>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-forest-black mb-6 border-b border-soft-sage pb-4">Travel Notes</h2>
              <p className="text-text-dark leading-relaxed">{campsite.travelNotes}</p>
            </div>
          </section>

          <section className="bg-surface-light border border-soft-sage p-8 rounded-3xl">
            <h2 className="text-2xl font-serif text-forest-black mb-6 flex items-center">
              <AlertTriangle className="w-7 h-7 text-campfire-gold mr-4" />
              Safety Notes
            </h2>
            <p className="text-text-dark text-lg">{campsite.safetyNotes}</p>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 bg-surface-light p-8 rounded-3xl border border-soft-sage text-center">
            <h3 className="font-serif text-3xl text-forest-black mb-4">Plan Your Visit</h3>
            <p className="text-text-dark mb-8 leading-relaxed">Add this destination to your Inquiry Basket or reach out to us directly on WhatsApp to confirm availability, plan logistics, and receive custom guidance.</p>
            
            <div className="space-y-4">
              <AddCampsiteToBasketButton campsite={campsite} />
              <WhatsAppButton 
                text="Ask About Campsite"
                message={campsite.whatsappMessage}
                variant="outline"
                size="lg"
                className="w-full border-2 border-forest-black text-forest-black hover:bg-forest-black hover:text-white"
                fullWidth
              />
            </div>
            
            <div className="mt-8 pt-8 border-t border-soft-sage text-left">
              <h4 className="font-semibold text-text-dark mb-4">Recommended Gear</h4>
              <ul className="space-y-2">
                {campsite.recommendedGear.map((gear, idx) => (
                  <li key={idx} className="flex items-center text-sm text-outline">
                    <Check className="w-4 h-4 text-moss-green mr-2 shrink-0"/> {gear}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <Link href="/shop" className="text-sm text-jungle-green font-medium hover:underline">
                  Browse Gear Shop &rarr;
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Campsites */}
      {relatedCampsites.length > 0 && (
        <div className="container mx-auto px-4 mt-32 pt-16 border-t border-soft-sage">
          <h2 className="text-4xl font-serif text-forest-black mb-10">More in {campsite.region}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCampsites.map((related) => (
              <Link href={`/campsites/${related.slug}`} key={related.id} className="group block">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-light mb-6">
                  <SafeImage src={related.image} alt={related.name} fallbackName={related.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="font-serif text-2xl text-text-dark group-hover:text-jungle-green transition-colors mb-2">{related.name}</h4>
                <p className="text-outline line-clamp-2">{related.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
