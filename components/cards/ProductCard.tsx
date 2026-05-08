"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useInquiry } from "@/lib/context/InquiryContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  image: string;
  category: string;
  summary: string;
}

export function ProductCard({ id, slug, name, image, category, summary }: ProductCardProps) {
  const { addItem } = useInquiry();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id,
      type: "gear",
      name,
      image,
      quantity: 1,
    });
    // Could add a toast notification here
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 border border-soft-sage flex flex-col h-full">
      <Link href={`/shop/${slug}`} className="block relative aspect-square overflow-hidden bg-surface-light">
        <div className="absolute inset-0 bg-jungle-green/5" />
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-2">{category}</p>
        <Link href={`/shop/${slug}`}>
          <h3 className="text-xl font-serif text-text-dark mb-2 line-clamp-1 group-hover:text-jungle-green transition-colors">{name}</h3>
        </Link>
        <p className="text-sm text-outline mb-4 line-clamp-2 flex-1">{summary}</p>
        <div className="flex flex-col gap-2 mt-auto">
          <button 
            onClick={handleAdd}
            className="w-full py-2.5 rounded-full border-2 border-jungle-green text-jungle-green font-medium hover:bg-jungle-green hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Inquiry Basket
          </button>
          <WhatsAppButton 
            text="Ask on WhatsApp"
            message={`Hello Sucre Bushworks, I would like to ask about this camping gear: ${name}`}
            variant="primary"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
