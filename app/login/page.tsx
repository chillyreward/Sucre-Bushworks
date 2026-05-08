import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-light px-4 py-12 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image src="/images/hero/fun-in-the-wild.jpg" alt="Background" fill className="object-cover opacity-10 grayscale-[30%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-light/50 via-surface-light to-surface-light" />
      </div>

      <div className="max-w-md w-full bg-white rounded-3xl p-8 md:p-12 border border-soft-sage shadow-card-hover text-center relative z-10">
        <Link href="/" className="inline-block mb-8">
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-jungle-green/20">
             <Image src="/images/sucre-bushworks-logo.png" alt="Sucre Bushworks Logo" fill className="object-cover" />
          </div>
        </Link>
        <h1 className="text-3xl font-serif text-forest-black mb-3">Welcome Back</h1>
        <p className="text-text-dark mb-10 leading-relaxed">Sign in to manage your inquiries, upcoming guided trips, and past orders.</p>
        
        <form className="space-y-6 text-left">
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-text-dark">Email Address</label>
            <input type="email" className="w-full bg-surface-light border border-soft-sage rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-jungle-green/50 transition-shadow" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <label className="text-sm font-semibold uppercase tracking-wider text-text-dark">Password</label>
              <Link href="#" className="text-xs text-jungle-green font-medium hover:underline">Forgot password?</Link>
            </div>
            <input type="password" className="w-full bg-surface-light border border-soft-sage rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-jungle-green/50 transition-shadow" placeholder="••••••••" />
          </div>
          
          <Button className="w-full mt-8" size="lg">Sign In</Button>
        </form>
        
        <p className="mt-10 text-sm text-outline">
          Don't have an account? <Link href="#" className="text-jungle-green font-semibold hover:underline ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
