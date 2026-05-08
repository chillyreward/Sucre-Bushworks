"use client";

import { useInquiry } from "@/lib/context/InquiryContext";
import { ShoppingCart } from "lucide-react";
import { Campsite } from "@/lib/data/campsites";

export function AddCampsiteToBasketButton({ campsite }: { campsite: Campsite }) {
  const { addItem } = useInquiry();

  const handleAdd = () => {
    addItem({
      id: campsite.id,
      type: "campsite",
      name: campsite.name,
      image: campsite.image,
    });
  };

  return (
    <button 
      onClick={handleAdd}
      className="w-full h-14 rounded-full bg-jungle-green text-white font-medium hover:bg-forest-black transition-colors flex items-center justify-center gap-2"
    >
      <ShoppingCart className="w-5 h-5" />
      Add to Inquiry Basket
    </button>
  );
}
