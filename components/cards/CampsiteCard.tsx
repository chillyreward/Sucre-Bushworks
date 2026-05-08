"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { MapPin, ShieldCheck, TreePine, ShoppingCart } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Badge } from "@/components/ui/Badge";
import { useInquiry } from "@/lib/context/InquiryContext";

interface CampsiteCardProps {
  id: string;
  slug: string;
  name: string;
  region: string;
  environmentType: string;
  image: string;
  tags: string[];
  guideAvailable?: boolean;
}

export function CampsiteCard({ id, slug, name, region, environmentType, image, tags, guideAvailable = true }: CampsiteCardProps) {
  const { addItem } = useInquiry();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id,
      type: "campsite",
      name,
      image,
    });
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 border border-soft-sage flex flex-col h-full">
      <Link href={`/campsites/${slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <SafeImage
          src={image}
          alt={name}
          fallbackName={name}
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
          {region}
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
            {environmentType}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <button 
            onClick={handleAdd}
            className="w-full py-2.5 rounded-full border-2 border-jungle-green text-jungle-green font-medium hover:bg-jungle-green hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Inquiry Basket
          </button>
          <WhatsAppButton 
            text="Ask About This Campsite"
            message={`Hello Sucre Bushworks, I would like to ask about this campsite: ${name}.`}
            variant="outline"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
