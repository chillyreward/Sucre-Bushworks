import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Your Cart" 
        description="Review your camping gear before checkout."
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-4xl text-center bg-white p-16 rounded-3xl border border-soft-sage shadow-sm">
        <div className="w-24 h-24 bg-surface-light rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-outline" />
        </div>
        <h2 className="text-2xl font-serif text-forest-black mb-4">Your cart is empty</h2>
        <p className="text-muted-text mb-8">Looks like you haven't added any camping gear to your cart yet.</p>
        <Button size="lg" href="/shop">
          Start Shopping
        </Button>
      </div>
    </div>
  );
}
