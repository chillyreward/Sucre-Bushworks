"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Map, Tent, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInquiry } from "@/lib/context/InquiryContext";
import { useState, useEffect } from "react";

export function MobileBottomNav() {
  const pathname = usePathname();
  const { totalItems } = useInquiry();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Compass, label: "Gear", href: "/shop" },
    { icon: Tent, label: "Campsites", href: "/campsites" },
    { icon: Map, label: "Trips", href: "/trips" },
    { icon: ShoppingBag, label: "Basket", href: "/cart", count: totalItems },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-soft-sage px-2 pb-safe pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-full h-full relative transition-colors",
                isActive ? "text-jungle-green" : "text-outline hover:text-text-dark"
              )}
            >
              <div className="relative">
                <Icon className={cn("w-6 h-6", isActive ? "fill-jungle-green/20 stroke-2" : "stroke-2")} />
                {mounted && item.count !== undefined && item.count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-campfire-gold text-forest-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                    {item.count}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
