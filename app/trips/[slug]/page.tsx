import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, Map, Check, AlertCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { trips } from "@/lib/data/trips";
import { Badge } from "@/components/ui/Badge";

export default async function TripDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const trip = trips.find((t) => t.slug === resolvedParams.slug);

  if (!trip) {
    notFound();
  }

  return (
    <div className="bg-surface-light min-h-screen pb-20">
      {/* Hero */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image src={trip.image} alt={trip.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black/90 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-surface-light/20 text-surface-light backdrop-blur-md border-none">{trip.theme}</Badge>
              <Badge className="bg-surface-light/20 text-surface-light backdrop-blur-md border-none">{trip.difficulty}</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-surface-light mb-4">{trip.name}</h1>
            <p className="text-xl text-surface-light/80 max-w-2xl">{trip.summary}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-serif text-forest-black mb-6">The Experience</h2>
            <p className="text-lg text-muted-text leading-relaxed">{trip.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-forest-black mb-6">Trip Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-text-dark bg-white p-4 rounded-2xl shadow-sm border border-soft-sage">
                <Clock className="w-6 h-6 text-moss-green mr-4" />
                <div>
                  <span className="block text-xs text-outline uppercase tracking-wider">Duration</span>
                  <span className="font-medium">{trip.duration}</span>
                </div>
              </div>
              <div className="flex items-center text-text-dark bg-white p-4 rounded-2xl shadow-sm border border-soft-sage">
                <Map className="w-6 h-6 text-moss-green mr-4" />
                <div>
                  <span className="block text-xs text-outline uppercase tracking-wider">Destination Type</span>
                  <span className="font-medium">{trip.destinationType}</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-forest-black mb-6">What's Included</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trip.includes.map((item, idx) => (
                <li key={idx} className="flex items-center text-text-dark bg-white p-4 rounded-xl border border-soft-sage">
                  <Check className="w-5 h-5 text-moss-green mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-jungle-green/5 border border-moss-green/20 p-6 rounded-3xl">
            <h2 className="text-xl font-serif text-forest-black mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 text-moss-green mr-3" />
              Good to Know
            </h2>
            <p className="text-muted-text">This is a fully guided experience. You will be matched with an expert guide who will handle the logistics, navigation, and camp setup, leaving you free to enjoy the wild safely.</p>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-white p-8 rounded-3xl shadow-nav-float border border-soft-sage text-center">
            <h3 className="font-serif text-2xl text-forest-black mb-2">Book This Trip</h3>
            <p className="text-outline text-sm mb-8">Reach out to us to confirm dates, arrange group sizes, and receive custom itineraries and planning details.</p>
            
            <WhatsAppButton 
              text="Book via WhatsApp"
              message={`Hello Sucre Bushworks, I would like to book or ask about the ${trip.name} guided trip.`}
              variant="primary"
              size="lg"
              fullWidth
            />
            
            <p className="mt-6 text-xs text-muted-text">
              Usually replies within 15 minutes during business hours.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
