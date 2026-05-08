import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface RentalCardProps {
  slug: string;
  name: string;
  image: string;
  category: string;
  includedItems: string[];
}

export function RentalCard({ slug, name, image, category, includedItems }: RentalCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 border border-soft-sage flex flex-col h-full">
      <Link href={`/rentals/${slug}`} className="block relative aspect-video overflow-hidden bg-surface-light">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-2">{category}</p>
        <Link href={`/rentals/${slug}`}>
          <h3 className="text-xl font-serif text-text-dark mb-4 group-hover:text-jungle-green transition-colors">{name}</h3>
        </Link>
        
        <div className="space-y-2 mb-6 flex-1">
          {includedItems.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center text-sm text-muted-text">
              <CheckCircle2 className="w-4 h-4 mr-2 text-moss-green" />
              {item}
            </div>
          ))}
          {includedItems.length > 3 && (
            <div className="text-sm text-outline pl-6">+{includedItems.length - 3} more items</div>
          )}
        </div>

        <WhatsAppButton 
          text="Ask on WhatsApp"
          message={`Hello Sucre Bushworks, I would like to ask about renting the ${name}.`}
          variant="outline"
          fullWidth
        />
      </div>
    </div>
  );
}
