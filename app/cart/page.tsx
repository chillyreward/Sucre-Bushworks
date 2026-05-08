"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Trash2, Map, Tent, Compass } from "lucide-react";
import { useInquiry } from "@/lib/context/InquiryContext";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, clearBasket } = useInquiry();

  const getIconForType = (type: string) => {
    switch (type) {
      case "campsite": return <Tent className="w-4 h-4" />;
      case "trip": return <Compass className="w-4 h-4" />;
      default: return <Map className="w-4 h-4" />;
    }
  };

  const getUrlPrefixForType = (type: string) => {
    switch (type) {
      case "campsite": return "/campsites";
      case "trip": return "/trips";
      default: return "/shop";
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
        <PageHero 
          title="Your Inquiry Basket" 
          description="Review the items you want to ask us about."
          backgroundImage="/images/hero/fun-in-the-wild.jpg"
        />
        
        <div className="container mx-auto px-4 mt-16 max-w-3xl text-center bg-white p-16 rounded-3xl border border-soft-sage shadow-sm">
          <div className="w-24 h-24 bg-surface-light rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-outline" />
          </div>
          <h2 className="text-3xl font-serif text-forest-black mb-4">Your basket is empty</h2>
          <p className="text-text-dark mb-8 text-lg">
            Browse our gear, campsites, or guided trips and add them to your basket to send a single, consolidated inquiry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" href="/shop">Browse Gear</Button>
            <Button size="lg" variant="outline" href="/campsites">Explore Campsites</Button>
          </div>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hello Sucre Bushworks! I'm interested in the following items from my Inquiry Basket:\n\n` +
    items.map(item => `• [${item.type.toUpperCase()}] ${item.name}`).join('\n') +
    `\n\nPlease let me know about availability, options, and next steps. Thank you!`;

  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
      <PageHero 
        title="Your Inquiry Basket" 
        description="Review your selected items and send us a single message to get started."
        backgroundImage="/images/hero/fun-in-the-wild.jpg"
      />
      
      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-serif text-forest-black">Basket Items ({items.length})</h2>
            <button 
              onClick={clearBasket}
              className="text-sm font-medium text-campfire-gold hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" /> Clear All
            </button>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={`${item.type}-${item.id}`} className="bg-white border border-soft-sage p-4 pr-6 rounded-2xl flex items-center gap-6 group">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-surface-light shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-outline mb-1">
                    {getIconForType(item.type)} {item.type}
                  </div>
                  <h3 className="font-serif text-xl text-forest-black group-hover:text-jungle-green transition-colors">
                    <Link href={`${getUrlPrefixForType(item.type)}/${item.id}`}>
                      {item.name}
                    </Link>
                  </h3>
                </div>
                <button 
                  onClick={() => removeItem(item.id, item.type)}
                  className="w-10 h-10 rounded-full bg-surface-light text-outline hover:bg-campfire-gold hover:text-white flex items-center justify-center transition-colors shrink-0"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 bg-white p-8 rounded-3xl border border-soft-sage text-center shadow-sm">
            <div className="w-16 h-16 bg-jungle-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-jungle-green" />
            </div>
            <h3 className="font-serif text-3xl text-forest-black mb-4">Ready to Inquire?</h3>
            <p className="text-text-dark mb-8 leading-relaxed">
              We don't do traditional checkouts. Once you send your inquiry, our team will get back to you via WhatsApp to confirm details, answer questions, and finalize your adventure.
            </p>
            
            <WhatsAppButton 
              text="Send Inquiry via WhatsApp"
              message={whatsappMessage}
              variant="primary"
              size="lg"
              fullWidth
            />
            
            <p className="mt-6 text-xs text-outline">
              Usually replies within 15 minutes during business hours.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
