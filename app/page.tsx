import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SearchBar } from "@/components/ui/SearchBar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { TripCard } from "@/components/cards/TripCard";
import { HowItWorksStepCard } from "@/components/cards/HowItWorksStepCard";

// Mock Data imports
import { campsites } from "@/lib/data/campsites";
import { products } from "@/lib/data/products";
import { trips } from "@/lib/data/trips";
import { blogPosts } from "@/lib/data/blog";

const gearCategories = [
  { name: "Tents & Shelter", image: "https://images.unsplash.com/photo-1504280327315-567951573195?w=600&q=80", slug: "tents" },
  { name: "Sleeping Gear", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&q=80", slug: "sleeping" },
  { name: "Cooking Gear", image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=600&q=80", slug: "cooking" },
  { name: "Lighting & Power", image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=600&q=80", slug: "lighting" },
  { name: "Hiking Bags", image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600&q=80", slug: "bags" },
  { name: "Camp Furniture", image: "https://images.unsplash.com/photo-1596162954151-cdcb92b0c36b?w=600&q=80", slug: "furniture" },
  { name: "Water & Hydration", image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80", slug: "hydration" },
  { name: "Safety & Survival", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&q=80", slug: "safety" },
];

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
          <h1 className="text-5xl md:text-7xl font-serif text-surface-light mb-6 drop-shadow-md">
            Fun in the Wild
          </h1>
          <p className="text-lg md:text-xl text-surface-light/90 max-w-2xl mx-auto mb-10 drop-shadow-md">
            Shop premium camping gear, discover Kenya's best outdoor destinations, and plan your next adventure with Sucre Bushworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/shop">
              Shop Gear
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
            <div className="mt-4 flex justify-end">
              <WhatsAppButton 
                text="Plan on WhatsApp" 
                message="Hello Sucre Bushworks, I need help finding the right destination and trip type."
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-40 md:h-28"></div> {/* Spacer for search bar */}

      {/* 3. Shop Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Shop by Category" 
            description="Find everything you need for a comfortable stay in the wild."
            center
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {gearCategories.map((cat) => (
              <Link href={`/shop?category=${cat.slug}`} key={cat.slug} className="group relative rounded-2xl overflow-hidden aspect-square block">
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <h4 className="text-surface-light font-serif text-xl md:text-2xl drop-shadow-md">{cat.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Gear Grid */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
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
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <Button variant="outline" className="w-full mt-8 md:hidden" href="/shop">
            View All Gear
          </Button>
        </div>
      </section>

      {/* 5. Kenya Campsite Regions & 6. Featured Campsites */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
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

      {/* 7. Guided Trips Preview */}
      <section className="py-20 bg-soft-sage">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Guided Outdoor Experiences" 
            description="Join our expert guides for an unforgettable, fully planned adventure."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {trips.slice(0, 4).map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/trips" variant="outline">Browse All Guided Trips</Button>
          </div>
        </div>
      </section>

      {/* 8. How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader title="How It Works" center />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <HowItWorksStepCard 
              number="01" 
              title="Explore Destinations" 
              description="Browse our curated campsites and guided trips across Kenya."
            />
            <HowItWorksStepCard 
              number="02" 
              title="Choose Your Gear" 
              description="Find the right equipment for your specific environment."
            />
            <HowItWorksStepCard 
              number="03" 
              title="Ask on WhatsApp" 
              description="Message us directly to confirm details, plan logistics, and book."
            />
            <HowItWorksStepCard 
              number="04" 
              title="Go Enjoy the Wild" 
              description="Pack your bags and experience the magic of the Kenyan outdoors."
            />
          </div>
        </div>
      </section>

      {/* 9. Why Choose Sucre Bushworks */}
      <section className="py-20 bg-forest-black text-surface-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12 text-campfire-gold">Why Choose Sucre Bushworks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Kenya-Focused Expertise", desc: "We know the terrain, weather, and best hidden spots in Kenya." },
              { title: "Carefully Curated Gear", desc: "No cheap knockoffs. Only reliable gear built for the wild." },
              { title: "Guided Adventure Support", desc: "Expert locals available to ensure your safety and enjoyment." },
              { title: "Beginner-Friendly Planning", desc: "We help you pack, plan, and feel confident on your first trip." },
              { title: "Scenic Destinations", desc: "Access to verified, beautiful, and safe campsites." },
              { title: "Fast WhatsApp Assistance", desc: "Direct, human support for all your outdoor inquiries." }
            ].map((feature, i) => (
              <div key={i} className="bg-jungle-green/50 border border-moss-green/50 p-6 rounded-2xl">
                <h4 className="text-xl font-serif text-white mb-2">{feature.title}</h4>
                <p className="text-surface-light/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Blog preview */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <SectionHeader title="Outdoor Guides & Tips" description="Read our latest articles to prepare for your next trip." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {blogPosts.slice(0, 3).map(post => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover border border-soft-sage">
                <div className="relative aspect-video">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-outline uppercase tracking-wider mb-2 block">{post.category}</span>
                  <h3 className="text-xl font-serif text-text-dark mb-2 group-hover:text-jungle-green">{post.title}</h3>
                  <p className="text-muted-text text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="relative py-24 bg-jungle-green overflow-hidden">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              text="Chat on WhatsApp" 
              message="Hello Sucre Bushworks, I'm ready to plan my escape!"
              size="lg"
            />
            <Button size="lg" variant="outline" className="text-surface-light border-surface-light hover:bg-surface-light/20" href="/campsites">
              Explore Campsites
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
