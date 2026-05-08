import Image from "next/image";
import Link from "next/link";
import { Clock, Map } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Badge } from "@/components/ui/Badge";

interface TripCardProps {
  slug: string;
  name: string;
  duration: string;
  difficulty: string;
  image: string;
  destinationType: string;
}

export function TripCard({ slug, name, duration, difficulty, image, destinationType }: TripCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 border border-soft-sage flex flex-col h-full">
      <Link href={`/trips/${slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-forest-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-surface-light">
          <h3 className="text-2xl font-serif mb-1 group-hover:text-campfire-gold transition-colors">{name}</h3>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant={difficulty === "Easy" ? "success" : "warning"}>{difficulty}</Badge>
          <Badge variant="default">Guided</Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6 flex-1 text-sm text-text-dark">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-outline" />
            {duration}
          </div>
          <div className="flex items-center">
            <Map className="w-4 h-4 mr-2 text-outline" />
            {destinationType}
          </div>
        </div>

        <WhatsAppButton 
          text="Book via WhatsApp"
          message={`Hello Sucre Bushworks, I would like to ask about this guided trip: ${name}.`}
          variant="primary"
          fullWidth
        />
      </div>
    </div>
  );
}
