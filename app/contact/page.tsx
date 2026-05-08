import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Contact Us" 
        description="We're here to help you plan your next adventure in the wild."
      />
      
      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
        <div className="space-y-8">
          <h2 className="text-3xl font-serif text-forest-black">Get in Touch</h2>
          <p className="text-muted-text text-lg">
            Whether you have a question about our gear, need help planning a guided trip, or want to check campsite availability, our team is ready to assist you.
          </p>
          
          <div className="bg-white p-8 rounded-3xl border border-soft-sage space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center text-jungle-green shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-outline font-semibold uppercase tracking-wider mb-1">WhatsApp & Call</p>
                <p className="text-lg font-medium text-forest-black">+254 711 529 659</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center text-jungle-green shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-outline font-semibold uppercase tracking-wider mb-1">Email</p>
                <p className="text-lg font-medium text-forest-black">hello@sucrebushworks.co.ke</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center text-jungle-green shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-outline font-semibold uppercase tracking-wider mb-1">Location</p>
                <p className="text-lg font-medium text-forest-black">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          <div className="bg-forest-black text-surface-light p-8 rounded-3xl text-center">
            <h3 className="text-xl font-serif mb-4 text-campfire-gold">Fastest Way to Reach Us</h3>
            <p className="mb-6 opacity-80">Our team is active on WhatsApp and replies within minutes.</p>
            <WhatsAppButton 
              text="Chat on WhatsApp" 
              message="Hello Sucre Bushworks, I need help with..."
              size="lg"
            />
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-soft-sage shadow-sm">
          <h3 className="text-2xl font-serif text-forest-black mb-6">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-dark">First Name</label>
                <input type="text" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moss-green" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-dark">Last Name</label>
                <input type="text" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moss-green" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Email Address</label>
              <input type="email" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moss-green" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Subject</label>
              <select className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moss-green appearance-none cursor-pointer">
                <option>General Inquiry</option>
                <option>Custom Trip Planning</option>
                <option>Gear Question</option>
                <option>Feedback</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Message</label>
              <textarea rows={5} className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moss-green" />
            </div>
            <Button size="lg" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
