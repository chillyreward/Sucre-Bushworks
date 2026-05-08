import { SafeImage } from "@/components/ui/SafeImage";
import { notFound } from "next/navigation";
import { Clock, Map, Check, AlertTriangle, Compass, ListTodo, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { trips } from "@/lib/data/trips";
import { Badge } from "@/components/ui/Badge";
import { AddTripToBasketButton } from "@/components/ui/AddTripToBasketButton";
import Link from "next/link";

export default async function TripDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const trip = trips.find((t) => t.slug === resolvedParams.slug);

  if (!trip) {
    notFound();
  }

  // Find some related trips
  const relatedTrips = trips
    .filter((t) => t.id !== trip.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero */}
      <div className="relative w-full h-[60vh] min-h-[500px]">
        <SafeImage src={trip.image} alt={trip.title} fallbackName={trip.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-8 lg:p-16">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-surface-light/70 font-medium">
              <Link href="/" className="hover:text-surface-light transition-colors">Home</Link> &rsaquo;{" "}
              <Link href="/trips" className="hover:text-surface-light transition-colors">Guided Trips</Link> &rsaquo;{" "}
              <span className="text-surface-light">{trip.title}</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-surface-light/20 text-surface-light backdrop-blur-md border-none px-4 py-1.5">{trip.difficulty}</Badge>
              {trip.tags.slice(0, 2).map((tag, idx) => (
                <Badge key={idx} className="bg-surface-light/20 text-surface-light backdrop-blur-md border-none px-4 py-1.5">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-surface-light mb-6 drop-shadow-md">{trip.title}</h1>
            <div className="flex items-center gap-6 text-surface-light/90 text-lg font-medium drop-shadow-md">
              <span className="flex items-center"><Clock className="w-5 h-5 mr-2 text-campfire-gold" /> {trip.durationLabel}</span>
              <span className="flex items-center"><Map className="w-5 h-5 mr-2 text-campfire-gold" /> {trip.destinationType}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        <div className="lg:col-span-2 space-y-16">
          {/* Summary highlight */}
          <p className="text-2xl text-jungle-green font-serif leading-relaxed border-l-4 border-campfire-gold pl-6 py-2">
            {trip.summary}
          </p>

          <section>
            <h2 className="text-3xl font-serif text-forest-black mb-6">Overview</h2>
            <div className="prose prose-lg text-text-dark max-w-none">
              <p>{trip.overview}</p>
              <h4 className="text-xl font-serif mt-8 mb-4">What To Expect</h4>
              <p>{trip.whatToExpect}</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-forest-black mb-8 flex items-center">
              <ListTodo className="w-8 h-8 text-jungle-green mr-4" />
              Suggested Itinerary
            </h2>
            <div className="space-y-6">
              {trip.suggestedItinerary.map((item, idx) => (
                <div key={idx} className="flex gap-6 bg-surface-light p-6 rounded-3xl border border-soft-sage">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-jungle-green/10 text-jungle-green flex items-center justify-center font-serif text-xl font-bold border border-jungle-green/20">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-black text-lg mb-2">{item.day}</h4>
                    <p className="text-text-dark leading-relaxed">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-soft-sage p-8 rounded-3xl">
              <h3 className="font-semibold text-xl text-forest-black mb-6 border-b border-soft-sage pb-4">What To Bring</h3>
              <ul className="space-y-3">
                {trip.whatToBring.map((item, idx) => (
                  <li key={idx} className="flex items-start text-text-dark">
                    <Check className="w-5 h-5 text-moss-green mr-3 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-soft-sage p-8 rounded-3xl">
              <h3 className="font-semibold text-xl text-forest-black mb-6 border-b border-soft-sage pb-4">Recommended Gear</h3>
              <ul className="space-y-3">
                {trip.recommendedGear.map((item, idx) => (
                  <li key={idx} className="flex items-start text-text-dark">
                    <Compass className="w-5 h-5 text-moss-green mr-3 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-soft-sage">
                <Link href="/shop" className="text-sm text-jungle-green font-medium hover:underline">
                  Browse Gear Shop &rarr;
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-surface-light border border-soft-sage p-8 rounded-3xl">
            <h2 className="text-2xl font-serif text-forest-black mb-6 flex items-center">
              <ShieldCheck className="w-7 h-7 text-campfire-gold mr-4" />
              Safety & Notes
            </h2>
            <p className="text-text-dark text-lg">{trip.safetyNotes}</p>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 bg-surface-light p-8 rounded-3xl border border-soft-sage text-center shadow-sm">
            <h3 className="font-serif text-3xl text-forest-black mb-4">Plan This Trip</h3>
            <p className="text-text-dark mb-8 leading-relaxed">Add this guided experience to your Inquiry Basket or reach out to us directly on WhatsApp to confirm dates, arrange group sizes, and receive custom itineraries.</p>
            
            <div className="space-y-4">
              <AddTripToBasketButton trip={trip} />
              <WhatsAppButton 
                text="Ask About This Trip"
                message={trip.whatsappMessage}
                variant="outline"
                size="lg"
                className="w-full border-2 border-forest-black text-forest-black hover:bg-forest-black hover:text-white"
                fullWidth
              />
            </div>
            
            <div className="mt-8 pt-8 border-t border-soft-sage text-left">
              <h4 className="font-semibold text-text-dark mb-4">Why Book With Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-outline">
                  <Check className="w-4 h-4 text-moss-green mr-3 shrink-0"/> Expert local guides
                </li>
                <li className="flex items-center text-sm text-outline">
                  <Check className="w-4 h-4 text-moss-green mr-3 shrink-0"/> Quality gear provided or rented
                </li>
                <li className="flex items-center text-sm text-outline">
                  <Check className="w-4 h-4 text-moss-green mr-3 shrink-0"/> Focus on safety and fun
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Trips */}
      {relatedTrips.length > 0 && (
        <div className="container mx-auto px-4 mt-32 pt-16 border-t border-soft-sage">
          <h2 className="text-4xl font-serif text-forest-black mb-10">More Guided Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedTrips.map((related) => (
              <Link href={`/trips/${related.slug}`} key={related.id} className="group block">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-light mb-6">
                  <SafeImage src={related.image} alt={related.title} fallbackName={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="font-serif text-2xl text-text-dark group-hover:text-jungle-green transition-colors mb-2">{related.title}</h4>
                <p className="text-outline line-clamp-2">{related.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
