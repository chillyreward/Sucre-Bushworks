import { PageHero } from "@/components/ui/PageHero";
import { TripCard } from "@/components/cards/TripCard";
import { trips } from "@/lib/data/trips";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function TripsPage() {
  const themes = Array.from(new Set(trips.map(t => t.theme)));

  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Guided Camping Trips" 
        description="Experience the wild with our expert guides leading the way. Safety and thrill guaranteed."
        backgroundImage="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600&q=80"
      />
      
      <div className="container mx-auto px-4 mt-10">
        <div className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar mb-8">
          <button className="whitespace-nowrap px-6 py-2 rounded-full bg-jungle-green text-white font-medium text-sm">All Trips</button>
          {themes.map((theme, idx) => (
            <button key={idx} className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-soft-sage text-text-dark font-medium text-sm hover:bg-soft-sage/50 transition-colors">
              {theme}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <TripCard key={trip.id} {...trip} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-24">
        <div className="bg-forest-black text-surface-light rounded-3xl p-10 md:p-16 text-center shadow-card-hover relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-jungle-green rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-campfire-gold rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <SectionHeader 
              title="Custom Itinerary?" 
              description="Want a tailored experience? Let's build a trip around your specific interests, dates, and group size."
              center
              className="mb-8"
            />
            <WhatsAppButton 
              text="Plan Custom Trip"
              message="Hello Sucre Bushworks, I would like to plan a custom guided camping trip."
              variant="outline"
              size="lg"
              className="border-surface-light text-surface-light hover:bg-surface-light/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
