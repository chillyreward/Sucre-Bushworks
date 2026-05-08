import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { TripCard } from "@/components/cards/TripCard";
import { HowItWorksStepCard } from "@/components/cards/HowItWorksStepCard";
import { Map, ShieldCheck, Compass, MessageCircle } from "lucide-react";

// Data imports
import { campsites } from "@/lib/data/campsites";
import { gear } from "@/lib/data/gear";
import { trips } from "@/lib/data/trips";
import { blogPosts } from "@/lib/data/blog";

const gearCategories = [
  { name: "Tents & Shelter", image: "/images/categories/tents-shelter.jpg", slug: "tents" },
  { name: "Sleeping Gear", image: "/images/categories/sleeping-gear.jpg", slug: "sleeping" },
  { name: "Cooking Gear", image: "/images/categories/cooking-gear.jpg", slug: "cooking" },
  { name: "Lighting & Power", image: "/images/categories/lighting-power.jpg", slug: "lighting" },
  { name: "Bags & Storage", image: "/images/categories/bags-storage.jpg", slug: "bags" },
  { name: "Safety & Survival", image: "/images/categories/safety-survival.jpg", slug: "safety" },
  { name: "Camp Furniture", image: "/images/categories/camp-furniture.jpg", slug: "furniture" },
  { name: "Water & Hydration", image: "/images/categories/water-hydration.jpg", slug: "hydration" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-32">
        <SafeImage
          src="/images/hero/fun-in-the-wild.jpg"
          alt="Camping in Kenya"
          fallbackName="Sucre Bushworks"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-serif text-surface-light mb-6 drop-shadow-lg">
            Fun in the Wild
          </h1>
          <p className="text-xl md:text-2xl text-surface-light/90 max-w-3xl mx-auto mb-10 drop-shadow-md">
            Discover premium camping gear, scenic Kenyan campsites, and guided outdoor experiences with Sucre Bushworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" href="/shop">
              Explore Gear
            </Button>
            <WhatsAppButton 
              text="Plan on WhatsApp" 
              message="Hello Sucre Bushworks, I would like help planning a camping trip."
              variant="outline"
              className="h-14 px-8 text-lg text-surface-light border-surface-light hover:bg-surface-light/20"
            />
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-surface-light/90">
              <Map className="w-8 h-8 text-campfire-gold" />
              <span className="font-medium">Kenya-Focused</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-surface-light/90">
              <ShieldCheck className="w-8 h-8 text-campfire-gold" />
              <span className="font-medium">Beginner Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-surface-light/90">
              <Compass className="w-8 h-8 text-campfire-gold" />
              <span className="font-medium">Guided Experiences</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-surface-light/90">
              <MessageCircle className="w-8 h-8 text-campfire-gold" />
              <span className="font-medium">WhatsApp Planning</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop Categories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Explore Categories" 
            description="Find everything you need for a comfortable stay in the wild."
            center
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {gearCategories.map((cat) => (
              <Link href={`/shop?category=${cat.slug}`} key={cat.slug} className="group relative rounded-2xl overflow-hidden aspect-[4/5] block bg-surface-light">
                <SafeImage src={cat.image} alt={cat.name} fallbackName={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-black/80 via-black/20 to-transparent group-hover:from-forest-black/90 transition-colors" />
                <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                  <h4 className="text-surface-light font-serif text-2xl drop-shadow-md">{cat.name}</h4>
                  <p className="text-campfire-gold text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">Browse collection &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Gear Grid */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <SectionHeader 
              title="Featured Gear" 
              description="Top-rated equipment curated for Kenyan conditions."
              className="mb-0"
            />
            <Button variant="ghost" className="hidden md:flex" href="/shop">
              View All Gear
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gear.slice(0, 4).map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          <Button variant="outline" className="w-full mt-8 md:hidden" href="/shop">
            View All Gear
          </Button>
        </div>
      </section>

      {/* 4. Featured Campsites */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <SectionHeader 
              title="Kenya's Best Campsites" 
              description="Discover handpicked locations from the Rift Valley to Mt. Kenya."
              className="mb-0"
            />
            <Button variant="ghost" className="hidden md:flex" href="/campsites">
              View All Campsites
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

      {/* 5. Guided Trips Preview */}
      <section className="py-24 bg-soft-sage">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Guided Experiences" 
            description="Join our expert guides for an unforgettable, fully planned adventure."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {trips.slice(0, 4).map((trip) => (
              <TripCard key={trip.id} {...trip} name={trip.title} duration={trip.durationLabel} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/trips" variant="outline">Browse All Guided Trips</Button>
          </div>
        </div>
      </section>

      {/* 6. Blog preview / Outdoor Tips */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Outdoor Tips & Guides" description="Read our latest articles to prepare for your next trip." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {blogPosts.slice(0, 3).map(post => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group block bg-surface-light rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover border border-soft-sage">
                <div className="relative aspect-video overflow-hidden">
                  <SafeImage src={post.image} alt={post.title} fallbackName={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold text-outline uppercase tracking-wider mb-3 block">{post.category}</span>
                  <h3 className="text-2xl font-serif text-text-dark mb-3 group-hover:text-jungle-green transition-colors">{post.title}</h3>
                  <p className="text-muted-text text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <span className="text-jungle-green font-medium text-sm mt-6 inline-block">Read More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How It Works */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader title="How It Works" center />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-jungle-green/20" />
            <HowItWorksStepCard 
              number="01" 
              title="Explore Destinations" 
              description="Browse our curated campsites and guided trips across Kenya."
            />
            <HowItWorksStepCard 
              number="02" 
              title="Add to Basket" 
              description="Add gear or experiences you like to your Inquiry Basket."
            />
            <HowItWorksStepCard 
              number="03" 
              title="Send Inquiry" 
              description="Send your selected items to us directly on WhatsApp."
            />
            <HowItWorksStepCard 
              number="04" 
              title="Plan and Enjoy" 
              description="We'll finalize the details together, and then you enjoy the wild."
            />
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="relative py-32 bg-forest-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <SafeImage
            src="/images/hero/fun-in-the-wild.jpg"
            alt="Camping night"
            fallbackName=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black to-transparent" />
        <div className="container relative z-10 mx-auto px-4 text-center text-surface-light">
          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-surface-light drop-shadow-md">Ready for your next wild escape?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              text="Chat on WhatsApp" 
              message="Hello Sucre Bushworks, I'm ready to plan my escape!"
              size="lg"
            />
            <Button size="lg" variant="outline" className="text-surface-light border-surface-light hover:bg-surface-light/10" href="/shop">
              Browse Gear
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
