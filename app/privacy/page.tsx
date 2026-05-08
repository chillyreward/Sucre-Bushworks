import { PageHero } from "@/components/ui/PageHero";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-24">
      <PageHero 
        title="Privacy Policy" 
        description="How we collect, use, and protect your information."
        backgroundImage="/images/hero/fun-in-the-wild.jpg"
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="bg-white p-10 md:p-16 rounded-3xl border border-soft-sage shadow-sm prose prose-lg prose-green mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-outline mb-8">Last Updated: May 8, 2026</p>
          
          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-text-dark leading-relaxed">
            At Sucre Bushworks, we collect information you provide directly to us when you make an inquiry, subscribe to our newsletter, or contact our customer support. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>

          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-text-dark leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="text-text-dark leading-relaxed list-disc ml-6 space-y-2">
            <li>Process your inquiries and bookings for gear, campsites, and trips.</li>
            <li>Communicate with you via WhatsApp or email regarding your requests.</li>
            <li>Send you technical notices, updates, and support messages.</li>
            <li>Improve our platform and customer service.</li>
          </ul>

          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">3. WhatsApp Communications</h2>
          <p className="text-text-dark leading-relaxed">
            By initiating an inquiry through our WhatsApp buttons, you consent to us communicating with you via WhatsApp. We will only use this channel for transactional purposes related to your inquiry, unless you explicitly opt-in to marketing communications.
          </p>

          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">4. Sharing of Information</h2>
          <p className="text-text-dark leading-relaxed">
            We do not sell your personal information. We may share your information with trusted third-party service providers (such as guides or campsite owners) solely for the purpose of fulfilling your booking.
          </p>

          <h2 className="text-3xl font-serif text-forest-black mt-8 mb-4">5. Contact Us</h2>
          <p className="text-text-dark leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at hello@sucrebushworks.co.ke.
          </p>
        </div>
      </div>
    </div>
  );
}
