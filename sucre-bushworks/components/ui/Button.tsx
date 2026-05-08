import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  asChild?: boolean; // ignore this safely if passed
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, asChild, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-moss-green focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      {
        "bg-campfire-gold text-forest-black hover:bg-warm-gold": variant === "primary",
        "bg-jungle-green text-surface-light hover:bg-moss-green": variant === "secondary",
        "border border-outline text-text-dark hover:bg-soft-sage/50": variant === "outline",
        "hover:bg-soft-sage text-text-dark": variant === "ghost",
        "h-9 px-4 text-sm": size === "sm",
        "h-11 px-6 text-base": size === "md",
        "h-14 px-8 text-lg": size === "lg",
      },
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
