"use client";

import { useInquiry } from "@/lib/context/InquiryContext";
import { ShoppingCart } from "lucide-react";
import { Gear } from "@/lib/data/gear";

export function AddGearToBasketButton({ gearItem }: { gearItem: Gear }) {
  const { addItem } = useInquiry();

  const handleAdd = () => {
    addItem({
      id: gearItem.id,
      type: "gear",
      name: gearItem.name,
      image: gearItem.image,
      quantity: 1,
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
