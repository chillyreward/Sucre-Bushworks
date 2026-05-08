import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-soft-sage text-jungle-green": variant === "default",
          "bg-moss-green/10 text-moss-green": variant === "success",
          "bg-campfire-gold/10 text-warm-gold": variant === "warning",
        },
        className
      )}
      {...props}
    />
  );
}
