import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SearchBar } from "@/components/ui/SearchBar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { TripCard } from "@/components/cards/TripCard";
import { RentalCard } from "@/components/cards/RentalCard";
import { StepCard } from "@/components/cards/StepCard";

// Mock Data imports
import { campsites } from "@/lib/data/campsites";
import { products } from "@/lib/data/products";
import { trips } from "@/lib/data/trips";
import { rentals } from "@/lib/data/rentals";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1600&q=80"
          alt="Camping in Kenya"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        
        <div className="relative z-10 container mx-auto px-4 text-center mt-16">
          <h1 className="text-5xl md:text-7xl font-serif text-surface-light mb-6">
            Fun in the Wild
          </h1>
          <p className="text-lg md:text-xl text-surface-light/90 max-w-2xl mx-auto mb-10">
            Shop camping gear, discover Kenya&apos;s best campsites, and plan your next outdoor adventure with Sucre Bushworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/shop">
              Shop Camping Gear
            </Button>
            <WhatsAppButton 
              text="Plan on WhatsApp" 
              message="Hello Sucre Bushworks, I would like help planning a camping trip."
              variant="outline"
              className="h-14 px-8 text-lg text-surface-light border-surface-light hover:bg-surface-light/20"
            />
          </div>
        </div>

        {/* 2. Search / Planning Module */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 z-20">
          <div className="bg-surface-light rounded-3xl p-6 shadow-xl max-w-5xl mx-auto border border-soft-sage">
            <h3 className="font-serif text-2xl text-text-dark mb-4 ml-2">Where do you want to camp?</h3>
            <SearchBar />
          </div>
        </div>
      </section>

      <div className="h-32 md:h-24"></div> {/* Spacer for search bar */}

      {/* 4. Featured Campsites */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <SectionHeader 
              title="Featured Campsites" 
              description="Discover handpicked locations perfect for your next outdoor escape."
              className="mb-0"
            />
            <Button variant="ghost" className="hidden md:flex" href="/campsites">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campsites.slice(0, 3).map((camp) => (
              <CampsiteCard key={camp.id} {...camp} />
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-8 md:hidden" href="/campsites">
            View All Campsites
          </Button>
        </div>
      </section>

      {/* 3. Shop Categories & 5. Popular Gear */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <SectionHeader 
              title="Popular Camping Gear" 
              description="High-quality equipment to ensure comfort in the wild."
              className="mb-0"
            />
            <Button variant="ghost" className="hidden md:flex" href="/shop">
              Shop All Gear
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Guided Trips Preview */}
      <section className="py-20 bg-soft-sage">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Guided Outdoor Trips" 
            description="Join our expert guides for an unforgettable adventure."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {trips.slice(0, 3).map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Rentals Preview */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Gear Rentals & Packages" 
            description="Don't have gear? Rent our premium kits for your next trip."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rentals.slice(0, 3).map((rental) => (
              <RentalCard key={rental.id} {...rental} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader title="How It Works" center />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <StepCard 
              number="01" 
              title="Discover" 
              description="Browse our curated campsites, gear, and guided trips."
            />
            <StepCard 
              number="02" 
              title="Inquire" 
              description="Message us directly on WhatsApp for custom pricing and availability."
            />
            <StepCard 
              number="03" 
              title="Adventure" 
              description="Pack your bags and experience the magic of the Kenyan outdoors."
            />
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="relative py-24 bg-forest-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504280327315-567951573195?w=1600&q=80"
            alt="Camping night"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-surface-light">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-campfire-gold">Ready for your next wild escape?</h2>
          <p className="text-lg md:text-xl text-surface-light/80 mb-10 max-w-2xl mx-auto">
            Whether you need a full package, a solo tent, or an expert guide, we are ready to help you plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              text="Chat on WhatsApp" 
              message="Hello Sucre Bushworks, I'm ready to plan my escape!"
              size="lg"
            />
            <Button size="lg" variant="outline" className="text-surface-light border-surface-light hover:bg-surface-light/20" href="/shop">
              Browse Gear
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
