import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="About Sucre Bushworks" 
        description="Born from a love of the wild, dedicated to making the Kenyan outdoors accessible."
        backgroundImage="https://images.unsplash.com/photo-1516934524458-71e1948ba26a?w=1600&q=80"
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-sm">
            <Image src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80" alt="Camping in Kenya" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl text-forest-black">Our Story</h2>
            <p className="text-muted-text text-lg leading-relaxed">
              Sucre Bushworks started as a small group of friends who spent every weekend exploring the hidden gems of Kenya. We realized that while the country is famous for luxury safaris, there was a massive gap for authentic, accessible camping experiences.
            </p>
            <p className="text-muted-text text-lg leading-relaxed">
              We built this platform to connect outdoor enthusiasts with the best premium camping gear, reliable guides, and undiscovered campsites across the country.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="font-serif text-4xl text-forest-black">Our Mission</h2>
            <p className="text-muted-text text-lg leading-relaxed">
              To provide "Fun in the Wild" for everyone. Whether you're a seasoned mountaineer attempting to summit Mt. Kenya or a family looking for a weekend escape by Lake Naivasha, we have the tools, the knowledge, and the passion to make it happen safely.
            </p>
            <p className="text-muted-text text-lg leading-relaxed">
              We focus purely on the Kenyan terrain, ensuring our gear, guides, and advice are perfectly tailored for the environment you will face.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-square rounded-3xl overflow-hidden shadow-sm">
            <Image src="https://images.unsplash.com/photo-1613149793132-73602d327854?w=800&q=80" alt="Hiking in Kenya" fill className="object-cover" />
          </div>
        </div>

        <div className="bg-forest-black text-surface-light rounded-3xl p-10 md:p-16 text-center shadow-card-hover mt-16">
          <SectionHeader 
            title="Ready to Explore?" 
            description="Our team is ready to help you plan your next escape. Reach out for gear advice or custom trip planning."
            center
            className="mb-8"
          />
          <WhatsAppButton 
            text="Chat with Us"
            message="Hello Sucre Bushworks, I would like to learn more about planning a trip."
            variant="outline"
            size="lg"
            className="border-surface-light text-surface-light hover:bg-surface-light/10"
          />
        </div>
      </div>
    </div>
  );
}
