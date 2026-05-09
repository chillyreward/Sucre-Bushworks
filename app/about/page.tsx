import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SafeImage } from "@/components/ui/SafeImage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
      <PageHero 
        title="About Sucre Bushworks" 
        description="Born from a love of the wild, dedicated to making the Kenyan outdoors accessible."
        backgroundImage="/images/hero/fun-in-the-wild.jpg"
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-sm">
            <SafeImage src="/images/about/our-story.jpg" alt="Our Story" fallbackName="Our Story" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl text-forest-black">Our Story</h2>
            <p className="text-text-dark text-lg leading-relaxed">
              Sucre Bushworks started as a small group of friends who spent every weekend exploring the hidden gems of Kenya. We realized that while the country is famous for luxury safaris, there was a massive gap for authentic, accessible camping experiences.
            </p>
            <p className="text-text-dark text-lg leading-relaxed">
              We built this platform to connect outdoor enthusiasts with the best premium camping gear, reliable guides, and undiscovered campsites across the country.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="font-serif text-4xl text-forest-black">Our Mission</h2>
            <p className="text-text-dark text-lg leading-relaxed">
              To provide "Fun in the Wild" for everyone. Whether you're a seasoned mountaineer attempting to summit Mt. Kenya or a family looking for a weekend escape by Lake Naivasha, we have the tools, the knowledge, and the passion to make it happen safely.
            </p>
            <p className="text-text-dark text-lg leading-relaxed">
              We focus purely on the Kenyan terrain, ensuring our gear, guides, and advice are perfectly tailored for the environment you will face.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-square rounded-3xl overflow-hidden shadow-sm">
            <SafeImage src="/images/about/our-mission.jpg" alt="Our Mission" fallbackName="Our Mission" fill className="object-cover" />
          </div>
        </div>

        <div className="bg-forest-black text-surface-light rounded-3xl p-10 md:p-16 text-center shadow-card-hover mt-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-jungle-green rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-campfire-gold rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
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
    </div>
  );
}
