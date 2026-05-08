import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
      <PageHero 
        title="Coming Soon" 
        description="We're currently building this feature."
        backgroundImage="/images/hero/fun-in-the-wild.jpg"
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-2xl text-center">
        <div className="bg-white p-16 rounded-3xl border border-soft-sage shadow-sm">
          <h2 className="text-4xl font-serif text-forest-black mb-6">Pardon Our Dust</h2>
          <p className="text-text-dark text-lg leading-relaxed mb-10">
            We are working hard behind the scenes to bring you a better outdoor experience. This page will be available soon. In the meantime, feel free to explore our gear, campsites, and guided trips.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" href="/">Go Home</Button>
            <Button size="lg" variant="outline" href="/shop">Browse Gear</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
