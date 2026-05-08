import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-surface-light px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 md:p-10 border border-soft-sage shadow-card-hover text-center">
        <Link href="/" className="inline-block mb-8">
          <div className="w-16 h-16 bg-jungle-green rounded-full flex items-center justify-center text-campfire-gold font-serif text-2xl mx-auto">
            SB
          </div>
        </Link>
        <h1 className="text-3xl font-serif text-forest-black mb-2">Welcome Back</h1>
        <p className="text-muted-text mb-8">Sign in to manage your bookings and orders.</p>
        
        <form className="space-y-4 text-left">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-dark">Email</label>
            <input type="email" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moss-green" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-text-dark">Password</label>
              <Link href="#" className="text-sm text-moss-green hover:underline">Forgot password?</Link>
            </div>
            <input type="password" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-moss-green" />
          </div>
          
          <Button className="w-full mt-6" size="lg">Sign In</Button>
        </form>
        
        <p className="mt-8 text-sm text-muted-text">
          Don't have an account? <Link href="#" className="text-moss-green font-medium hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
