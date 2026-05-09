import Link from "next/link";
import Image from "next/image";
import { Globe, MessageCircle, Camera, Music2, Share2, Mail } from "lucide-react";

const socialLinks = [
  { icon: Camera, href: "/coming-soon", label: "Instagram" },
  { icon: Music2, href: "/coming-soon", label: "TikTok" },
  { icon: Share2, href: "/coming-soon", label: "Share" },
  { icon: Mail, href: "/coming-soon", label: "Email" },
  { icon: Globe, href: "/coming-soon", label: "Website" },
];

export function Footer() {
  return (
    <footer className="bg-forest-black text-surface-light pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-4">
              <Image 
                src="/images/sucre-bushworks-logo.png" 
                alt="Sucre Bushworks Logo" 
                width={56} 
                height={56} 
                className="object-contain"
              />
              <div>
                <h3 className="font-serif text-2xl text-campfire-gold mb-1">Sucre Bushworks</h3>
                <p className="text-soft-sage text-sm uppercase tracking-wider">Fun in the Wild</p>
              </div>
            </div>
            <p className="text-surface-light/80 text-sm leading-relaxed max-w-sm">
              Discover camping gear, scenic Kenyan campsites, and guided outdoor experiences. Plan your adventure with us directly on WhatsApp.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Shop Gear</h4>
            <ul className="space-y-4 text-surface-light/80 text-sm">
              <li><Link href="/shop" className="hover:text-campfire-gold transition-colors">Tents & Shelter</Link></li>
              <li><Link href="/shop" className="hover:text-campfire-gold transition-colors">Sleeping Gear</Link></li>
              <li><Link href="/shop" className="hover:text-campfire-gold transition-colors">Cooking Gear</Link></li>
              <li><Link href="/shop" className="hover:text-campfire-gold transition-colors">Safety Gear</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-surface-light/80 text-sm">
              <li><Link href="/campsites" className="hover:text-campfire-gold transition-colors">Campsites</Link></li>
              <li><Link href="/trips" className="hover:text-campfire-gold transition-colors">Guided Trips</Link></li>
              <li><Link href="/blog" className="hover:text-campfire-gold transition-colors">Blog</Link></li>
              <li><Link href="/blog" className="hover:text-campfire-gold transition-colors">Outdoor Tips</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-surface-light/80 text-sm">
              <li><Link href="/about" className="hover:text-campfire-gold transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-campfire-gold transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-campfire-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-campfire-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-light/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-surface-light/60">
          <p>&copy; {new Date().getFullYear()} Sucre Bushworks. All rights reserved.</p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-2">
              <span>WhatsApp:</span>
              <a href="https://wa.me/254711529659?text=Hello%20Sucre%20Bushworks,%20I%20would%20like%20help%20planning%20a%20camping%20trip." target="_blank" rel="noreferrer" className="text-campfire-gold hover:underline font-medium">
                +254 711 529 659
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <Link key={idx} href={link.href} className="text-surface-light/80 hover:text-campfire-gold transition-colors" title={link.label}>
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

