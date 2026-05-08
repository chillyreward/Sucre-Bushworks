import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  fullWidth?: boolean;
}

export function WhatsAppButton({
  text = "Inquire on WhatsApp",
  message = "Hello Sucre Bushworks, I would like to ask about...",
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
}: WhatsAppButtonProps) {
  const phoneNumber = "254711529659";
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-moss-green focus:ring-offset-2",
        {
          "bg-campfire-gold text-forest-black hover:bg-warm-gold": variant === "primary",
          "bg-jungle-green text-surface-light hover:bg-moss-green": variant === "secondary",
          "border border-outline text-text-dark hover:bg-soft-sage/50": variant === "outline",
          "h-11 px-6 text-base": size === "md",
          "h-14 px-8 text-lg": size === "lg",
          "w-full": fullWidth,
        },
        className
      )}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {text}
    </Link>
  );
}
