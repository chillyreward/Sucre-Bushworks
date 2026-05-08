"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useState, useEffect } from "react";
import { useInquiry } from "@/lib/context/InquiryContext";

export function Navbar() {
  const [isImageError, setIsImageError] = useState(false);
  const { totalItems } = useInquiry();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full px-4 mb-4">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-soft-sage shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full h-16 flex items-center justify-between px-6 transition-all">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {!isImageError ? (
            <Image
              src="/images/sucre-bushworks-logo.png"
              alt="Sucre Bushworks Logo"
              width={40}
              height={40}
              className="object-contain"
              onError={() => setIsImageError(true)}
              priority
            />
          ) : (
            <div className="w-10 h-10 bg-jungle-green rounded-full flex items-center justify-center text-campfire-gold font-serif text-lg">
              SB
            </div>
          )}
          <span className="font-serif text-xl text-forest-black hidden sm:block whitespace-nowrap">
            Sucre Bushworks
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
          <Link href="/" className="text-text-dark hover:text-jungle-green text-sm font-medium transition-colors">Home</Link>
          <Link href="/shop" className="text-text-dark hover:text-jungle-green text-sm font-medium transition-colors">Shop Gear</Link>
          <Link href="/campsites" className="text-text-dark hover:text-jungle-green text-sm font-medium transition-colors">Campsites</Link>
          <Link href="/trips" className="text-text-dark hover:text-jungle-green text-sm font-medium transition-colors">Guided Trips</Link>
          <Link href="/about" className="text-text-dark hover:text-jungle-green text-sm font-medium transition-colors">About</Link>
          <Link href="/contact" className="text-text-dark hover:text-jungle-green text-sm font-medium transition-colors">Contact</Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-5 shrink-0">
          <Link href="/cart" className="text-text-dark hover:text-jungle-green relative p-1 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {mounted && totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-campfire-gold text-forest-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                {totalItems}
              </span>
            )}
          </Link>
          
          <div className="hidden md:block">
            <WhatsAppButton 
              text="Plan on WhatsApp" 
              message="Hello Sucre Bushworks, I would like help planning a camping trip."
              variant="primary" 
              className="rounded-full px-5"
            />
          </div>

          <button className="lg:hidden text-text-dark p-1">
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
}
