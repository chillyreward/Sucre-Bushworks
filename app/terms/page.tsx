import { PageHero } from "@/components/ui/PageHero";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
      <PageHero 
        title="Terms of Service" 
        description="Please read these terms carefully before using our platform."
        backgroundImage="/images/hero/fun-in-the-wild.jpg"
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="bg-white p-10 md:p-16 rounded-3xl border border-soft-sage shadow-sm prose prose-lg prose-green mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-outline mb-8">Last Updated: May 8, 2026</p>
          
          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-text-dark leading-relaxed">
            By accessing or using the Sucre Bushworks website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the website or use our services.
          </p>

          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">2. Inquiry and Booking Process</h2>
          <p className="text-text-dark leading-relaxed">
            Sucre Bushworks currently operates on an inquiry-based model. Adding items to your Inquiry Basket or sending a WhatsApp message does not constitute a confirmed booking. Bookings for gear, campsites, and trips are only confirmed once our team verifies availability and finalizes the transaction directly with you.
          </p>

          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">3. Risk and Liability</h2>
          <p className="text-text-dark leading-relaxed">
            Camping and outdoor activities involve inherent risks, including but not limited to adverse weather, wildlife encounters, and physical exertion. By booking a trip or campsite through us, you acknowledge these risks. Sucre Bushworks shall not be held liable for any personal injury, property damage, or loss incurred during your outdoor activities.
          </p>

          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">4. Gear Rentals</h2>
          <p className="text-text-dark leading-relaxed">
            Rented gear must be returned in the condition it was received, subject to normal wear and tear. You may be liable for the replacement cost of any heavily damaged or lost items.
          </p>

          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">5. Modifications to Service</h2>
          <p className="text-text-dark leading-relaxed">
            We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.
          </p>
        </div>
      </div>
    </div>
  );
}
