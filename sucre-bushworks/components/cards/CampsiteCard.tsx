import Image from "next/image";
import Link from "next/link";
import { MapPin, ShieldCheck, TreePine } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Badge } from "@/components/ui/Badge";

interface CampsiteCardProps {
  slug: string;
  name: string;
  location: string;
  image: string;
  tags: string[];
  guideAvailable?: boolean;
}

export function CampsiteCard({ slug, name, location, image, tags, guideAvailable = true }: CampsiteCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 border border-soft-sage flex flex-col h-full">
      <Link href={`/campsites/${slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {tags.slice(0, 2).map((tag, idx) => (
            <Badge key={idx} className="bg-surface-light/90 backdrop-blur-sm text-text-dark border-none">
              {tag}
            </Badge>
          ))}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/campsites/${slug}`}>
          <h3 className="text-2xl font-serif text-text-dark mb-2 group-hover:text-jungle-green transition-colors">{name}</h3>
        </Link>
        <div className="flex items-center text-outline text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        
        <div className="space-y-2 mb-6 flex-1">
          {guideAvailable && (
            <div className="flex items-center text-sm text-text-dark">
              <ShieldCheck className="w-4 h-4 mr-2 text-moss-green" />
              Guide Available
            </div>
          )}
          <div className="flex items-center text-sm text-text-dark">
            <TreePine className="w-4 h-4 mr-2 text-moss-green" />
            Scenic Location
          </div>
        </div>

        <WhatsAppButton 
          text="Inquire on WhatsApp"
          message={`Hello Sucre Bushworks, I would like to ask about the ${name} campsite.`}
          variant="outline"
          fullWidth
        />
      </div>
    </div>
  );
}
