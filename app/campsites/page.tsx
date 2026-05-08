import { PageHero } from "@/components/ui/PageHero";
import { CampsiteCard } from "@/components/cards/CampsiteCard";
import { campsites } from "@/lib/data/campsites";

export default function CampsitesPage() {
  const regions = Array.from(new Set(campsites.map(c => c.region)));

  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Discover Kenya's Best Campsites" 
        description="From the shores of Naivasha to the slopes of Mt. Kenya, find your perfect spot."
        backgroundImage="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1600&q=80"
      />
      
      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 shrink-0 space-y-8 bg-white p-6 rounded-3xl border border-soft-sage h-fit sticky top-28">
          <h3 className="font-serif text-xl text-forest-black mb-4">Filters</h3>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-text-dark text-sm">Region</h4>
            <select className="w-full bg-surface-light border border-outline rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-moss-green">
              <option>All Regions</option>
              {regions.map((r, idx) => (
                <option key={idx}>{r}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-text-dark text-sm">Features</h4>
            <label className="flex items-center gap-2 text-sm text-muted-text cursor-pointer">
              <input type="checkbox" className="rounded text-moss-green focus:ring-moss-green" /> Guide Available
            </label>
            <label className="flex items-center gap-2 text-sm text-muted-text cursor-pointer">
              <input type="checkbox" className="rounded text-moss-green focus:ring-moss-green" /> Family Friendly
            </label>
            <label className="flex items-center gap-2 text-sm text-muted-text cursor-pointer">
              <input type="checkbox" className="rounded text-moss-green focus:ring-moss-green" /> Campfire Friendly
            </label>
            <label className="flex items-center gap-2 text-sm text-muted-text cursor-pointer">
              <input type="checkbox" className="rounded text-moss-green focus:ring-moss-green" /> Wildlife
            </label>
          </div>
        </aside>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {campsites.map((campsite) => (
            <CampsiteCard key={campsite.id} {...campsite} />
          ))}
        </div>
      </div>
    </div>
  );
}
