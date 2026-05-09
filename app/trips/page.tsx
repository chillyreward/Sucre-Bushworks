import { PageHero } from "@/components/ui/PageHero";
import { TripCard } from "@/components/cards/TripCard";
import { trips, TRIP_FILTERS } from "@/lib/data/trips";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import Link from "next/link";

export default async function TripsPage({
  searchParams,
}: {
  searchParams: Promise<{ difficulty?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const activeDifficulty = resolvedSearchParams.difficulty;

  const filteredTrips = activeDifficulty && activeDifficulty !== "All"
    ? trips.filter(t => t.difficulty === activeDifficulty)
    : trips;

  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
      <PageHero 
        title="Guided Camping Trips" 
        description="Experience the wild with our expert guides leading the way. Safety and thrill guaranteed."
        backgroundImage="/images/hero/fun-in-the-wild.jpg"
      />
      
      <div className="container mx-auto px-4 mt-12 flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-72 shrink-0 space-y-8 bg-white p-6 rounded-3xl border border-soft-sage h-fit sticky top-28">
          <h3 className="font-serif text-2xl text-forest-black mb-6">Explore By</h3>
          
          <div className="space-y-6">
            <h4 className="font-semibold text-text-dark text-sm uppercase tracking-wider mb-2">Difficulty</h4>
            <ul className="space-y-2">
              {["All", "Easy", "Moderate", "Challenging"].map((diff) => (
                <li key={diff}>
                  <Link 
                    href={diff === "All" ? "/trips" : `/trips?difficulty=${diff}`}
                    className={`block py-1 hover:text-jungle-green transition-colors ${(!activeDifficulty && diff === "All") || activeDifficulty === diff ? "text-jungle-green font-bold" : "text-outline"}`}
                  >
                    {diff}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-soft-sage">
            <h4 className="font-semibold text-text-dark text-sm uppercase tracking-wider mb-2">Tags</h4>
            {TRIP_FILTERS.slice(0, 8).map((filter, idx) => (
              <label key={idx} className="flex items-center gap-3 text-sm text-text-dark cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-soft-sage text-jungle-green focus:ring-jungle-green/50 cursor-pointer" /> 
                <span className="group-hover:text-jungle-green transition-colors">{filter}</span>
              </label>
            ))}
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTrips.map((trip) => (
              // Note: trip.title is passed as name to match TripCardProps
              <TripCard key={trip.id} {...trip} name={trip.title} duration={trip.durationLabel} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-32">
        <div className="bg-forest-black text-surface-light rounded-3xl p-10 md:p-16 text-center shadow-card-hover relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-jungle-green rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-campfire-gold rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <SectionHeader 
              title="Want a Custom Itinerary?" 
              description="Looking for a tailored experience? Let's build a trip around your specific interests, dates, and group size."
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
