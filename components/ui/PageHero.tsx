import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/ui/SafeImage";

interface PageHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
}

export function PageHero({ title, description, backgroundImage, className }: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative w-full h-[50vh] min-h-[400px] flex items-center justify-center text-center px-4 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-forest-black">
        {backgroundImage && (
          <SafeImage 
            src={backgroundImage} 
            alt={title} 
            fallbackName={title} 
            fill 
            className="object-cover opacity-60" 
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif text-campfire-gold">{title}</h1>
        {description && <p className="text-lg text-surface-light/90">{description}</p>}
      </div>
    </div>
  );
}
