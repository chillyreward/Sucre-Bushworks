export interface HowItWorksStepCardProps {
  number: string;
  title: string;
  description: string;
}

export function HowItWorksStepCard({ number, title, description }: HowItWorksStepCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 relative">
      <div className="w-16 h-16 rounded-full bg-soft-sage flex items-center justify-center text-jungle-green font-serif text-2xl mb-6 shadow-sm">
        {number}
      </div>
      <h3 className="text-xl font-serif text-text-dark mb-3">{title}</h3>
      <p className="text-muted-text">{description}</p>
    </div>
  );
}
