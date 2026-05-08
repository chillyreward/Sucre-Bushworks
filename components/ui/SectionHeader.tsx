import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  center?: boolean;
}

export function SectionHeader({ title, description, className, center = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", { "text-center": center }, className)}>
      <h2 className="text-3xl md:text-4xl font-serif text-text-dark mb-4">{title}</h2>
      {description && <p className="text-muted-text text-lg max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}
