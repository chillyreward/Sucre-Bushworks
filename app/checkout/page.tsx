import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Checkout" 
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-2xl bg-white p-12 rounded-3xl border border-soft-sage shadow-sm text-center">
        <h2 className="text-2xl font-serif text-forest-black mb-4">No items to checkout</h2>
        <p className="text-muted-text">Please add some gear to your cart first.</p>
      </div>
    </div>
  );
}
