"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface RegionSelectProps {
  regions: string[];
  activeRegion?: string;
}

export function RegionSelect({ regions, activeRegion }: RegionSelectProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleRegionChange(region: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (region && region !== "All Regions") {
      params.set("region", region);
    } else {
      params.delete("region");
    }
    router.push(`/campsites?${params.toString()}`);
  }

  return (
    <div className="relative">
      <select 
        defaultValue={activeRegion || "All Regions"}
        onChange={(e) => handleRegionChange(e.target.value)}
        className="w-full bg-surface-light border border-soft-sage text-text-dark rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-jungle-green/50 appearance-none cursor-pointer"
      >
        <option value="All Regions">All Regions</option>
        {regions.map((r, idx) => (
          <option key={idx} value={r}>{r}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-outline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
}
