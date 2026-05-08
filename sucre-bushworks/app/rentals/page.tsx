import { PageHero } from "@/components/ui/PageHero";
import { RentalCard } from "@/components/cards/RentalCard";
import { rentals } from "@/lib/data/rentals";

export default function RentalsPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Gear Rentals" 
        description="Don't own gear? Rent our premium setups for your next adventure."
      />
      
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentals.map((rental) => (
            <RentalCard key={rental.id} {...rental} />
          ))}
        </div>
      </div>
    </div>
  );
}
