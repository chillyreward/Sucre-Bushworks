import { PageHero } from "@/components/ui/PageHero";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { campsites, CAMPSITE_FILTERS } from "@/lib/data/campsites";
import { SearchBar } from "@/components/ui/SearchBar";
import { RegionSelect } from "@/components/ui/RegionSelect";
import Link from "next/link";
import { Suspense } from "react";

// Server Component
export const dynamic = "force-dynamic";

export default async function CampsitesPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string; query?: string }>;
}) {
  try {
    const resolvedSearchParams = (await searchParams) || {};
    const activeRegion = resolvedSearchParams.region;
    const searchQuery = resolvedSearchParams.query?.toString().toLowerCase();
    
    const regions = campsites ? Array.from(new Set(campsites.map(c => c.region || "Other"))) : [];

    let filteredCampsites = activeRegion && activeRegion !== "All Regions"
      ? campsites.filter(c => c.region === activeRegion)
      : campsites;

    if (searchQuery) {
      filteredCampsites = filteredCampsites.filter(
        (c) => 
          c.name.toLowerCase().includes(searchQuery) || 
          c.summary.toLowerCase().includes(searchQuery) ||
          c.overview.toLowerCase().includes(searchQuery) ||
          c.region.toLowerCase().includes(searchQuery)
      );
    }

    return (
      <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
        <PageHero 
          title="Discover Kenya's Best Campsites" 
          description="From the shores of Naivasha to the slopes of Mt. Kenya, find your perfect spot."
          backgroundImage="/images/hero/campsites.jpg"
        />
        
        <div className="container mx-auto px-4 mt-12 flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-72 shrink-0 space-y-8 bg-white p-6 rounded-3xl border border-soft-sage h-fit lg:sticky lg:top-28">
            <h3 className="font-serif text-2xl text-forest-black mb-6">Filters</h3>
            
            <div className="space-y-6">
              <h4 className="font-semibold text-text-dark text-sm uppercase tracking-wider mb-2">Search</h4>
              <Suspense fallback={<div className="h-10 w-full bg-surface-light animate-pulse rounded-xl" />}>
                <SearchBar placeholder="Search sites..." />
              </Suspense>
            </div>

            <div className="space-y-3 pt-6 border-t border-soft-sage">
              <h4 className="font-semibold text-text-dark text-sm uppercase tracking-wider mb-2">Region</h4>
              <Suspense fallback={<div className="h-10 w-full bg-surface-light animate-pulse rounded-xl" />}>
                <RegionSelect regions={regions} activeRegion={activeRegion} />
              </Suspense>
              
              <ul className="hidden lg:block space-y-2 mt-4">
                  <li>
                    <Link href="/campsites" className={`block py-1 hover:text-jungle-green transition-colors ${!activeRegion || activeRegion === "All Regions" ? "text-jungle-green font-bold" : "text-outline"}`}>
                      All Regions
                    </Link>
                  </li>
                  {regions.map((r, idx) => (
                    <li key={idx}>
                      <Link href={`/campsites?region=${r}`} className={`block py-1 hover:text-jungle-green transition-colors ${activeRegion === r ? "text-jungle-green font-bold" : "text-outline"}`}>
                        {r}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            <div className="space-y-4 pt-4 border-t border-soft-sage">
              <h4 className="font-semibold text-text-dark text-sm uppercase tracking-wider mb-2">Features</h4>
              {CAMPSITE_FILTERS.slice(0, 5).map((filter, idx) => (
                <label key={idx} className="flex items-center gap-3 text-sm text-text-dark cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-soft-sage text-jungle-green focus:ring-jungle-green/50 cursor-pointer" /> 
                  <span className="group-hover:text-jungle-green transition-colors">{filter}</span>
                </label>
              ))}
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-outline text-sm">Showing <span className="font-bold text-text-dark">{filteredCampsites.length}</span> destinations</p>
            </div>
            
            {filteredCampsites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCampsites.map((campsite) => (
                  <CampsiteCard key={campsite.id} {...campsite} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-soft-sage">
                <h3 className="text-2xl font-serif text-text-dark mb-4">No campsites found</h3>
                <p className="text-outline mb-8 text-lg">Try adjusting your filters or search query to find more locations.</p>
                <Link href="/campsites" className="inline-block px-8 py-3 bg-jungle-green text-white rounded-full font-medium">
                  Reset All Filters
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in CampsitesPage:", error);
    // In production, this will be caught by the error.tsx boundary
    // But we throw it here to ensure the boundary is triggered
    throw error;
  }
}
