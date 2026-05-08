import { PageHero } from "@/components/ui/PageHero";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="About Sucre Bushworks" 
        description="Born from a love of the wild, dedicated to making the Kenyan outdoors accessible."
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-3xl prose prose-lg prose-green">
        <h2 className="font-serif text-3xl text-forest-black">Our Story</h2>
        <p className="text-muted-text">
          Sucre Bushworks started as a small group of friends who spent every weekend exploring the hidden gems of Kenya. We realized that while the country is famous for luxury safaris, there was a massive gap for authentic, accessible camping experiences.
        </p>
        <p className="text-muted-text">
          We built this platform to connect outdoor enthusiasts with the best camping gear, reliable guides, and undiscovered campsites.
        </p>

        <h2 className="font-serif text-3xl text-forest-black mt-12">Our Mission</h2>
        <p className="text-muted-text">
          To provide "Fun in the Wild" for everyone. Whether you're a seasoned mountaineer or a family looking for a weekend escape by the lake, we have the tools, the knowledge, and the passion to make it happen safely.
        </p>
      </div>
    </div>
  );
}
