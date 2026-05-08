import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function BecomeAGuidePage() {
  return (
    <div className="flex flex-col w-full bg-surface-light min-h-screen pb-20">
      <PageHero 
        title="Become a Guide" 
        description="Join our network of elite outdoor experts."
      />
      
      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-soft-sage shadow-sm mb-12">
          <SectionHeader title="Why Guide with Us?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-moss-green mr-3 shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-black mb-1">Steady Income</h4>
                <p className="text-sm text-muted-text">Access a constant stream of enthusiastic campers.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-moss-green mr-3 shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-black mb-1">Flexibility</h4>
                <p className="text-sm text-muted-text">Choose the trips you want to lead based on your schedule.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-moss-green mr-3 shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-black mb-1">Community</h4>
                <p className="text-sm text-muted-text">Connect with other passionate guides and share knowledge.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-soft-sage shadow-sm">
          <h3 className="text-2xl font-serif text-forest-black mb-6">Apply Now</h3>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Full Name</label>
              <input type="text" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Email Address</label>
              <input type="email" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Phone Number</label>
              <input type="tel" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Area of Expertise</label>
              <input type="text" placeholder="e.g., Bird Watching, Mountaineering" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Years of Experience</label>
              <input type="number" min="0" className="w-full bg-surface-light border border-outline/30 rounded-xl px-4 py-3" />
            </div>
            <Button size="lg" className="w-full">Submit Application</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
