import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Send Inquiry" 
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-2xl bg-white p-12 rounded-3xl border border-soft-sage shadow-sm text-center">
        <h2 className="text-2xl font-serif text-forest-black mb-4">Complete your request via WhatsApp</h2>
        <p className="text-muted-text mb-8">
          We handle all payments, logistics, and bookings directly with you to ensure a tailored, premium experience.
        </p>
        <WhatsAppButton 
          text="Continue to WhatsApp"
          message="Hello Sucre Bushworks, I would like to confirm my gear list and proceed with booking."
          variant="primary"
          size="lg"
        />
      </div>
    </div>
  );
}
