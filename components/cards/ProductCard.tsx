import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  image: string;
  category: string;
}

export function ProductCard({ slug, name, image, category }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 border border-soft-sage">
      <Link href={`/shop/${slug}`} className="block relative aspect-square overflow-hidden bg-surface-light">
        <div className="absolute inset-0 bg-jungle-green/5" />
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-6">
        <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-2">{category}</p>
        <Link href={`/shop/${slug}`}>
          <h3 className="text-lg font-serif text-text-dark mb-3 line-clamp-1 group-hover:text-jungle-green transition-colors">{name}</h3>
        </Link>
        <div className="mt-4">
          <WhatsAppButton 
            text="Ask on WhatsApp"
            message={`Hello Sucre Bushworks, I would like to ask about this item: ${name}`}
            variant="outline"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
