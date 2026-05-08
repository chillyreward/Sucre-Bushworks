import { SafeImage } from "@/components/ui/SafeImage";
import { notFound } from "next/navigation";
import { Check, Info, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { gear } from "@/lib/data/gear";
import { Badge } from "@/components/ui/Badge";
import { AddGearToBasketButton } from "@/components/ui/AddGearToBasketButton";
import Link from "next/link";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = gear.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Find some related gear in the same category
  const relatedGear = gear
    .filter((g) => g.category === product.category && g.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 bg-white">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-outline">
        <Link href="/" className="hover:text-jungle-green transition-colors">Home</Link> &rsaquo;{" "}
        <Link href="/shop" className="hover:text-jungle-green transition-colors">Shop</Link> &rsaquo;{" "}
        <span className="text-text-dark">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-surface-light border border-soft-sage shadow-sm">
            <SafeImage
              src={product.image}
              alt={product.name}
              fallbackName={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* We only have one image right now, but this is where a gallery would go */}
          <div className="grid grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-light border-2 border-jungle-green opacity-100">
              <SafeImage src={product.image} alt={product.name} fallbackName="" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-soft-sage border border-soft-sage flex items-center justify-center text-outline text-sm">
              Image 2
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-soft-sage border border-soft-sage flex items-center justify-center text-outline text-sm">
              Image 3
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <p className="text-sm font-semibold text-jungle-green uppercase tracking-wider">{product.category}</p>
              {product.badge && <Badge variant="success">{product.badge}</Badge>}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-forest-black mb-4">{product.name}</h1>
            <p className="text-lg text-muted-text leading-relaxed">{product.summary}</p>
          </div>

          <div className="bg-surface-light p-6 rounded-2xl border border-soft-sage mb-8 space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-moss-green flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-text-dark block mb-1">Best For</span>
                <span className="text-sm text-outline">{product.bestFor}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-moss-green flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-text-dark block mb-1">Care Notes</span>
                <span className="text-sm text-outline">{product.careNotes}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-12">
            <AddGearToBasketButton gearItem={product} />
            <WhatsAppButton 
              text="Ask About This Gear" 
              message={product.whatsappMessage}
              size="lg"
              variant="outline"
              className="w-full text-forest-black border-2 border-forest-black hover:bg-forest-black hover:text-white transition-all"
            />
          </div>

          <div className="prose prose-lg text-text-dark max-w-none mb-12">
            <h3 className="font-serif text-2xl mb-4">Overview</h3>
            <p>{product.overview}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-forest-black border-b border-soft-sage pb-2">Key Features</h3>
              <ul className="space-y-3">
                {product.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-outline text-sm leading-relaxed">
                    <Check className="w-4 h-4 text-jungle-green mr-3 flex-shrink-0 mt-0.5"/> 
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-forest-black border-b border-soft-sage pb-2">What's Included</h3>
              <ul className="space-y-3">
                {product.whatsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start text-outline text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-campfire-gold mr-3 flex-shrink-0 mt-1.5"/> 
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <h3 className="font-semibold text-lg text-forest-black border-b border-soft-sage pb-2">Specifications</h3>
            <ul className="space-y-3 bg-surface-light p-6 rounded-2xl border border-soft-sage">
              {product.specs.map((spec, idx) => {
                const [key, value] = spec.split(": ");
                return (
                  <li key={idx} className="flex flex-col sm:flex-row sm:justify-between text-sm pb-2 border-b border-soft-sage last:border-0 last:pb-0">
                    <span className="text-outline font-medium mb-1 sm:mb-0">{key}</span>
                    <span className="text-text-dark">{value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Gear */}
      {relatedGear.length > 0 && (
        <div className="mt-32 pt-16 border-t border-soft-sage">
          <h2 className="text-3xl font-serif text-forest-black mb-8">Related Gear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedGear.map((item) => (
              <Link href={`/shop/${item.slug}`} key={item.id} className="group block">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-light mb-4">
                  <SafeImage src={item.image} alt={item.name} fallbackName={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-serif text-lg text-text-dark group-hover:text-jungle-green transition-colors line-clamp-1">{item.name}</h4>
                <p className="text-sm text-outline uppercase tracking-wider mt-1">{item.category}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
