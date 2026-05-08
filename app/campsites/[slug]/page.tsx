import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, ShieldCheck, TreePine, Flame, Users, Check, AlertTriangle } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { campsites } from "@/lib/data/campsites";
import { Badge } from "@/components/ui/Badge";

export default async function CampsiteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const campsite = campsites.find((c) => c.slug === resolvedParams.slug);

  if (!campsite) {
    notFound();
  }

  return (
    <div className="bg-surface-light min-h-screen pb-20">
      {/* Hero */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image src={campsite.image} alt={campsite.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black/90 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {campsite.tags.map((tag, idx) => (
                <Badge key={idx} className="bg-surface-light/20 text-surface-light backdrop-blur-md border-none">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-surface-light mb-4">{campsite.name}</h1>
            <div className="flex items-center text-surface-light/80 text-lg">
              <MapPin className="w-5 h-5 mr-2" /> {campsite.location} ({campsite.region})
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-serif text-forest-black mb-6">Overview</h2>
            <p className="text-lg text-muted-text leading-relaxed">{campsite.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-forest-black mb-6">Environment & Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-text-dark bg-white p-4 rounded-2xl shadow-sm border border-soft-sage">
                <TreePine className="w-6 h-6 text-moss-green mr-4" />
                <span className="font-medium">{campsite.environmentType}</span>
              </div>
              {campsite.guideAvailable && (
                <div className="flex items-center text-text-dark bg-white p-4 rounded-2xl shadow-sm border border-soft-sage">
                  <ShieldCheck className="w-6 h-6 text-moss-green mr-4" />
                  <span className="font-medium">Expert Guide Available</span>
                </div>
              )}
            </div>
            <h3 className="font-semibold text-lg text-text-dark mb-3">Available Activities</h3>
            <div className="flex flex-wrap gap-2">
              {campsite.activities.map((activity, idx) => (
                <Badge key={idx} variant="default" className="bg-white border border-soft-sage text-text-dark">{activity}</Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-forest-black mb-6">Amenities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {campsite.amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-center text-muted-text">
                  <Check className="w-5 h-5 text-moss-green mr-3 shrink-0" /> {amenity}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-jungle-green/5 border border-moss-green/20 p-6 rounded-3xl">
            <h2 className="text-xl font-serif text-forest-black mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 text-campfire-gold mr-3" />
              Safety Notes
            </h2>
            <p className="text-muted-text">{campsite.safetyNotes}</p>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-white p-8 rounded-3xl shadow-nav-float border border-soft-sage text-center">
            <h3 className="font-serif text-2xl text-forest-black mb-2">Plan Your Visit</h3>
            <p className="text-outline text-sm mb-8">Reach out to us to confirm availability, plan logistics, and receive custom guidance based on your group size.</p>
            
            <WhatsAppButton 
              text="Enquire on WhatsApp"
              message={`Hello Sucre Bushworks, I would like to ask about the ${campsite.name} campsite.`}
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
