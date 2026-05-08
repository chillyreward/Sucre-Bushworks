import Image from "next/image";
import { notFound } from "next/navigation";
import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { products } from "@/lib/data/products";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-surface-light border border-soft-sage">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col space-y-8">
          <div>
            <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-2">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-serif text-forest-black mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-jungle-green">KSh {product.price.toLocaleString()}</p>
          </div>

          <div className="prose prose-lg text-muted-text">
            <p>{product.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-text-dark"><Check className="w-5 h-5 text-moss-green mr-2"/> Premium materials</li>
              <li className="flex items-center text-text-dark"><Check className="w-5 h-5 text-moss-green mr-2"/> Durable in the wild</li>
              <li className="flex items-center text-text-dark"><Check className="w-5 h-5 text-moss-green mr-2"/> 1-year warranty</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-soft-sage">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <WhatsAppButton 
              text="Ask About Product" 
              message={`Hello Sucre Bushworks, I would like to ask about the ${product.name}.`}
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
