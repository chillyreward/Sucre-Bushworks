import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface GuideCardProps {
  slug: string;
  name: string;
  image: string;
  specialty: string;
  experienceYears: number;
}

export function GuideCard({ slug, name, image, specialty, experienceYears }: GuideCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 border border-soft-sage text-center flex flex-col items-center">
      <Link href={`/guides/${slug}`} className="block relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-surface-light">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </Link>
      
      <Link href={`/guides/${slug}`}>
        <h3 className="text-xl font-serif text-text-dark mb-1 group-hover:text-jungle-green transition-colors">{name}</h3>
      </Link>
      <p className="text-moss-green font-medium text-sm mb-3">{specialty}</p>
      
      <div className="flex items-center justify-center gap-4 text-sm text-outline mb-6">
        <div className="flex items-center">
          <Star className="w-4 h-4 mr-1 text-campfire-gold fill-campfire-gold" />
          5.0
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {experienceYears} Yrs
        </div>
      </div>

      <WhatsAppButton 
        text="Book Guide"
        message={`Hello Sucre Bushworks, I would like to book ${name} as a guide.`}
        variant="secondary"
        className="w-full rounded-xl"
      />
    </div>
  );
}
