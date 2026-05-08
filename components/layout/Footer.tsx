import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
// removed lucide-react icons for social links

export function Footer() {
  return (
    <footer className="bg-forest-black text-surface-light pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-campfire-gold mb-1">Sucre Bushworks</h3>
              <p className="text-soft-sage text-sm uppercase tracking-wider">Fun in the Wild</p>
            </div>
            <p className="text-surface-light/80 text-sm leading-relaxed max-w-xs">
              Camping gear, campsite discovery, rentals, and trusted guides for outdoor adventures across Kenya.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-surface-light/80 hover:text-campfire-gold">IG</a>
              <a href="#" className="text-surface-light/80 hover:text-campfire-gold">FB</a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-surface-light/80">
              <li><Link href="/shop" className="hover:text-campfire-gold">Camping Gear</Link></li>
              <li><Link href="/shop" className="hover:text-campfire-gold">Tents</Link></li>
              <li><Link href="/shop" className="hover:text-campfire-gold">Sleeping Bags</Link></li>
              <li><Link href="/shop" className="hover:text-campfire-gold">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-surface-light/80">
              <li><Link href="/campsites" className="hover:text-campfire-gold">Campsites</Link></li>
              <li><Link href="/trips" className="hover:text-campfire-gold">Guided Trips</Link></li>
              <li><Link href="/rentals" className="hover:text-campfire-gold">Gear Rentals</Link></li>
              <li><Link href="/guides" className="hover:text-campfire-gold">Meet the Guides</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <p className="text-surface-light/80 text-sm">
              Ready to plan your next trip? Reach out to us quickly on WhatsApp.
            </p>
            <WhatsAppButton 
              text="Chat with Us" 
              message="Hello Sucre Bushworks, I have a general inquiry." 
              variant="outline" 
              className="w-full text-surface-light border-surface-light hover:bg-surface-light/10"
            />
          </div>
        </div>

        <div className="border-t border-surface-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface-light/60">
          <p>&copy; {new Date().getFullYear()} Sucre Bushworks. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-campfire-gold">Privacy Policy</Link>
            <Link href="#" className="hover:text-campfire-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
