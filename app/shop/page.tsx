import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/cards/ProductCard";
import { products } from "@/lib/data/products";

export default function ShopPage() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Shop Camping Gear" 
        description="Premium equipment to elevate your outdoor experience."
      />
      
      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-3xl border border-soft-sage sticky top-28">
            <h3 className="font-serif text-xl text-text-dark mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-jungle-green font-medium hover:underline text-left w-full">All Gear</button>
              </li>
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <button className="text-outline hover:text-jungle-green transition-colors text-left w-full">{cat}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
