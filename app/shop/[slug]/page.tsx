import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { products } from "@/lib/data/products";
import { Badge } from "@/components/ui/Badge";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 bg-white">
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
            <div className="flex items-center gap-3 mb-2">
              <p className="text-sm font-semibold text-outline uppercase tracking-wider">{product.category}</p>
              {product.badge && <Badge variant="success">{product.badge}</Badge>}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-forest-black mb-4">{product.name}</h1>
          </div>

          <div className="prose prose-lg text-text-dark">
            <p>{product.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-text-dark border-b border-soft-sage pb-2">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-outline text-sm">
                    <Check className="w-4 h-4 text-moss-green mr-2 flex-shrink-0"/> 
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-text-dark border-b border-soft-sage pb-2">Specifications</h3>
              <ul className="space-y-2">
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <li key={idx} className="flex justify-between text-sm">
                    <span className="text-outline font-medium">{key}</span>
                    <span className="text-text-dark">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-soft-sage">
            <WhatsAppButton 
              text="Ask About This Gear" 
              message={`Hello Sucre Bushworks, I would like to ask about the ${product.name}.`}
              size="lg"
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}
