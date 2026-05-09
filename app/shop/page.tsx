import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/cards/ProductCard";
import { gear, GEAR_CATEGORIES } from "@/lib/data/gear";
import { SearchBar } from "@/components/ui/SearchBar";
import Link from "next/link";

// Server Component
export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; query?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const activeCategory = resolvedSearchParams.category;
  const searchQuery = resolvedSearchParams.query?.toLowerCase();
  
  let filteredGear = gear;

  if (activeCategory) {
    filteredGear = filteredGear.filter(
      (item) => item.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") === activeCategory
    );
  }

  if (searchQuery) {
    filteredGear = filteredGear.filter(
      (item) => 
        item.name.toLowerCase().includes(searchQuery) || 
        item.summary.toLowerCase().includes(searchQuery) ||
        item.overview.toLowerCase().includes(searchQuery)
    );
  }

  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
      <PageHero 
        title="Shop Camping Gear" 
        description="Premium equipment to elevate your outdoor experience in Kenya."
      />
      
      <div className="container mx-auto px-4 mt-12 flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-72 flex-shrink-0 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-soft-sage sticky top-28">
            <h3 className="font-serif text-2xl text-text-dark mb-6">Search Gear</h3>
            <SearchBar placeholder="Search tents, bags..." />
            
            <h3 className="font-serif text-2xl text-text-dark mt-8 mb-6">Categories</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/shop" 
                  className={`block text-lg transition-colors ${!activeCategory ? "text-jungle-green font-semibold" : "text-outline hover:text-jungle-green"}`}
                >
                  All Gear
                </Link>
              </li>
              {GEAR_CATEGORIES.map((cat, idx) => {
                const catSlug = cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
                const isActive = activeCategory === catSlug;
                return (
                  <li key={idx}>
                    <Link 
                      href={`/shop?category=${catSlug}`}
                      className={`block transition-colors ${isActive ? "text-jungle-green font-semibold" : "text-outline hover:text-jungle-green"}`}
                    >
                      {cat}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredGear.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-soft-sage">
              <h3 className="text-2xl font-serif mb-4">No gear found</h3>
              <p className="text-outline">Try adjusting your filters or browsing all categories.</p>
              <Link href="/shop" className="text-jungle-green underline mt-4 inline-block">View All Gear</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredGear.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
