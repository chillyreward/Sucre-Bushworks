import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, MapPin, Award } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { guides } from "@/lib/data/guides";

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = guides.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-soft-sage shadow-sm">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-8 border-surface-light">
            <Image
              src={guide.image}
              alt={guide.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-moss-green/10 text-moss-green px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Certified Guide
            </div>
            
            <h1 className="text-4xl font-serif text-forest-black mb-2">{guide.name}</h1>
            <p className="text-xl text-jungle-green mb-6">{guide.specialty}</p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-outline mb-8">
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-1 text-campfire-gold fill-campfire-gold" />
                <span className="font-medium text-text-dark text-base">5.0</span> (24 reviews)
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-1" />
                <span className="font-medium text-text-dark text-base">{guide.experienceYears} Years</span> Experience
              </div>
            </div>

            <p className="text-muted-text text-lg leading-relaxed mb-8">
              {guide.bio}
            </p>

            <WhatsAppButton 
              text="Request This Guide" 
              message={`Hello Sucre Bushworks, I would like to check the availability of ${guide.name} for an upcoming trip.`}
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
