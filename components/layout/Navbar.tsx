"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full bg-surface-light/80 backdrop-blur-md border-b border-soft-sage">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {!isImageError ? (
            <Image
              src="/images/sucre-bushworks-logo.png"
              alt="Sucre Bushworks Logo"
              width={48}
              height={48}
              className="object-contain"
              onError={() => setIsImageError(true)}
              priority
            />
          ) : (
            <div className="w-12 h-12 bg-jungle-green rounded-full flex items-center justify-center text-campfire-gold font-serif text-xl">
              SB
            </div>
          )}
          <span className="font-serif text-2xl text-forest-black hidden sm:block">
            Sucre Bushworks
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-text-dark hover:text-jungle-green font-medium">Home</Link>
          <Link href="/shop" className="text-text-dark hover:text-jungle-green font-medium">Shop Gear</Link>
          <Link href="/campsites" className="text-text-dark hover:text-jungle-green font-medium">Campsites</Link>
          <Link href="/trips" className="text-text-dark hover:text-jungle-green font-medium">Guided Trips</Link>
          <Link href="/about" className="text-text-dark hover:text-jungle-green font-medium">About</Link>
          <Link href="/contact" className="text-text-dark hover:text-jungle-green font-medium">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-text-dark hover:text-jungle-green hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/cart" className="text-text-dark hover:text-jungle-green relative">
            <ShoppingCart className="w-5 h-5" />
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-campfire-gold text-forest-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link href="/login" className="text-text-dark hover:text-jungle-green hidden sm:block">
            <User className="w-5 h-5" />
          </Link>
          
          <div className="hidden md:block">
            <WhatsAppButton 
              text="Plan a Trip" 
              message="Hello Sucre Bushworks, I would like help planning a camping trip."
              variant="primary" 
            />
          </div>

          <button className="lg:hidden text-text-dark">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
