import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/cards/ProductCard";
import { products } from "@/lib/data/products";
import { SearchBar } from "@/components/ui/SearchBar";

export default function ShopPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Shop Camping Gear" 
        description="Premium equipment to elevate your outdoor experience."
      />
      
      <div className="container mx-auto px-4 mt-10">
        {/* Simple Filter / Search space for future */}
        <div className="flex justify-end mb-8">
          <select className="px-4 py-2 rounded-xl border border-soft-sage bg-white focus:outline-none focus:ring-2 focus:ring-moss-green text-text-dark">
            <option>All Categories</option>
            <option>Tents</option>
            <option>Sleeping Bags</option>
            <option>Cooking</option>
            <option>Lighting</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
