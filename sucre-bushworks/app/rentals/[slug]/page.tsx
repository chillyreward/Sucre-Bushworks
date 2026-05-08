import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Package } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { rentals } from "@/lib/data/rentals";

export default async function RentalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const rental = rentals.find((r) => r.slug === resolvedParams.slug);

  if (!rental) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-light border border-soft-sage">
          <Image
            src={rental.image}
            alt={rental.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col space-y-8">
          <div>
            <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-2">{rental.category}</p>
            <h1 className="text-4xl md:text-5xl font-serif text-forest-black mb-4">{rental.name}</h1>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-soft-sage shadow-sm">
            <h3 className="font-serif text-xl mb-4 flex items-center">
              <Package className="w-5 h-5 mr-2 text-moss-green" /> What's Included
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rental.includedItems.map((item, idx) => (
                <li key={idx} className="flex items-start text-muted-text text-sm">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-moss-green shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="prose prose-lg text-muted-text">
            <p>{rental.description}</p>
          </div>

          <div className="bg-jungle-green text-surface-light p-8 rounded-3xl mt-4">
            <h3 className="text-xl font-serif mb-2">Interested in renting?</h3>
            <p className="text-surface-light/80 text-sm mb-6">
              Contact us to check availability for your specific dates. We offer flexible pickup and drop-off options.
            </p>
            <WhatsAppButton 
              text="Inquire on WhatsApp" 
              message={`Hello Sucre Bushworks, I would like to inquire about renting the ${rental.name}.`}
              variant="primary"
              size="lg"
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}
