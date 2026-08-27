import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";

type ButtonVariant = "primary" | "ghost" | "play";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", showArrow, children, ...props }, ref) => {
    const base =
      "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/20 hover:scale-[1.03] hover:shadow-accent-purple/30",
      ghost:
        "border border-border bg-foreground/5 text-foreground backdrop-blur-sm hover:border-foreground/20 hover:bg-foreground/10",
      play:
        "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/25 hover:scale-[1.03]",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        {variant === "play" && <Play className="h-4 w-4 fill-current" />}
        {children}
        {showArrow && <ArrowUpRight className="h-4 w-4" />}
      </button>
    );
  }
);

Button.displayName = "Button";
