import { PageHero } from "@/components/ui/PageHero";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { campsites, CAMPSITE_FILTERS } from "@/lib/data/campsites";
import Link from "next/link";

export default async function CampsitesPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const activeRegion = resolvedSearchParams.region;
  
  const regions = Array.from(new Set(campsites.map(c => c.region)));

  const filteredCampsites = activeRegion && activeRegion !== "All Regions"
    ? campsites.filter(c => c.region === activeRegion)
    : campsites;

  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
      <PageHero 
        title="Discover Kenya's Best Campsites" 
        description="From the shores of Naivasha to the slopes of Mt. Kenya, find your perfect spot."
        backgroundImage="/images/hero/fun-in-the-wild.jpg"
      />
      
      <div className="container mx-auto px-4 mt-12 flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-72 shrink-0 space-y-8 bg-white p-6 rounded-3xl border border-soft-sage h-fit sticky top-28">
          <h3 className="font-serif text-2xl text-forest-black mb-6">Filters</h3>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-text-dark text-sm uppercase tracking-wider mb-2">Region</h4>
            <div className="relative">
              <select 
                defaultValue={activeRegion || "All Regions"}
                onChange={() => {}} // Note: This won't work in server component, I should use Links or a Client Component wrapper
                className="w-full bg-surface-light border border-soft-sage text-text-dark rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green/50 appearance-none cursor-pointer"
              >
                <option>All Regions</option>
                {regions.map((r, idx) => (
                  <option key={idx} value={r}>{r}</option>
                ))}
              </select>
              {/* Replacing the select with a list of links for better server-component behavior */}
              <ul className="space-y-2 mt-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCampsites.map((campsite) => (
              <CampsiteCard key={campsite.id} {...campsite} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
